'use client'

import next, { NextPage } from 'next';
import { useState, useEffect, useRef, RefObject, KeyboardEvent, ReactEventHandler } from 'react';
import axios from 'axios';
import * as loader from '@uiball/loaders';
import { Range } from 'react-range';
import { getImageSize } from 'react-image-size'
import * as RMen from '@szhsin/react-menu'

import { ITitle, ITitleEpisodeDubbed, ITitleEpisodeMeta, ITitleEpisodesDub } from '../interfaces/ITitle';
import { IDubber } from '../interfaces/IDubber';
import { IcoNewPlayerFullEnter, IcoNewPlayerFullExit, IcoNewPlayerList, IcoNewPlayerNext, IcoNewPlayerPause, IcoNewPlayerPiPEnter, IcoNewPlayerPiPExit, IcoNewPlayerVolMin, IcoNewPlayerVolMuted, IcoNewPlayerVolNormal } from '../assets/ico/new/player';
import { IcoPlay, IcoServerUnavailable, IcoSettings } from '../assets/ico/Icos';

import '../styles/components/KekwPlayer.scss';
import { useInView } from 'react-intersection-observer';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { LoadingImage } from './GeneralComponents';
import { timestampToDate, wordDeclination } from './handlers';

type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';
type TEndScreen = 'clear' | 'epEnded' | 'titleEnded' | 'lastEp';

//! SET PROPS DIRECTRLY TO VIDEO, STATES USED ONLY TO OBSERVE 
const KekwPlayer: NextPage<{
  title: ITitle,
  dubs: IDubber[],
  setCurrentDubber?: (state: IDubber) => void
  setCurrentEp?: (state: number) => void
}> = ({ title, dubs, setCurrentDubber, setCurrentEp }) => {
  // Player data
  const [volume, setVolume] = useState(50)
  const [ep, setEp] = useState(1);
  const [dub, setDub] = useState<ITitleEpisodesDub>()
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [duration, setDuration] = useState(1)
  const [videoMoment, setVideoMoment] = useState(0);
  const [hoveredMoment, setHoveredMoment] = useState(0);

  const [isPreviewOld, setIsPreviewOld] = useState(false);
  const [isVideoProcessed, setIsVideoProcessed] = useState(true);

  // Player states
  const [isCoverVisible, setIsCoverVisible] = useState(false) //! Must be true
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)
  const [endScreen, setEndScreen] = useState<TEndScreen>('clear')
  const [isTimeToEndScreen, setIsTimeToEndScreen] = useState(false)

  // Video states
  const [videoSrc, setVideoSrc] = useState('');
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Refs
  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const volumeRef = useRef<HTMLDivElement>(null)

  // System
  const [inViewRef, inView, entry] = useInView()



  // Effects
  //* Initial effects. Assing dub, define previews format, check if frames are processed
  useEffect(() => {
    if (window === undefined) return;

    function setDefault() {
      const dub = title!.dubs![0];

      changePreivewFormat(dub);
      setDub(dub)
    }

    setDefault()
  }, [])

  //* Video events
  useEffect(() => {
    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) return;

    video.addEventListener('loadstart', () => {
      setIsVideoLoading(true);
    })

    video.addEventListener('durationchange', () => {
      setDuration(Math.floor(video.duration))
    })

    video.addEventListener('loadeddata', () => {
      setIsVideoLoading(false);
    })

    video.addEventListener('playing', () => {
      setIsVideoLoading(false);
    })

    video.addEventListener('waiting', () => {
      setIsVideoLoading(true);
    })

    video.addEventListener('contextmenu', e => {
      e.preventDefault();
    })

    video.addEventListener('dblclick', () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(e => console.error(e));
      } else {
        player.requestFullscreen().catch(e => console.error(e));
      }
    })

    video.addEventListener('click', () => {
      if (video.paused) {
        video.play()
      } else {
        video.pause();
      }
    })

    //* Events
    video.addEventListener('play', () => {
      setIsPlaying(true)
    })

    video.addEventListener('pause', () => {
      setIsPlaying(false)
    })

    video.addEventListener('volumechange', () => {
      if (video.volume === 0 || video.muted) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }

      setVolume(Math.floor(video.volume * 100));
    });

    player.addEventListener('fullscreenchange', () => {
      setIsFullscreen(document.fullscreenElement ? true : false)
    })

    video.addEventListener('leavepictureinpicture', () => {
      setIsPip(false)
    })

    video.addEventListener('enterpictureinpicture', () => {
      setIsPip(true)
    })

    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement
    const preview = document.querySelector('#kekwplayer-preview') as HTMLDivElement
    let isDragging = false
    let touchTimeout: NodeJS.Timeout;

    timeline.addEventListener('touchstart', () => {
      clearTimeout(touchTimeout)
      timelineTouchStartHandler()

      touchTimeout = setTimeout(() => {
        timelineTouchEndHandler();
      }, 1000);
    })

    timeline.addEventListener('touchmove', () => {
      clearTimeout(touchTimeout)
      timelineTouchStartHandler()

      touchTimeout = setTimeout(() => {
        timelineTouchEndHandler();
      }, 1000);
    })

    timeline.addEventListener('pointerenter', () => timelineTouchStartHandler())
    timeline.addEventListener('pointerdown', () => {
      isDragging = true;
      timelineTouchStartHandler()
    })



    document.addEventListener('pointerup', () => {
      isDragging = false;
      timelineTouchEndHandler()
    })
    timeline.addEventListener('pointerleave', () => {
      if (isDragging) return
      timelineTouchEndHandler();
    })



    function timelineTouchStartHandler() {
      preview.style.opacity = '1';
      preview.style.visibility = 'visible';
    }

    function timelineTouchEndHandler() {
      preview.style.opacity = '0';
      preview.style.visibility = 'invisible';
    }
  }, [])

  //* Handle video keyboard events
  useEffect(() => {
    if (inView) {
      document.addEventListener('keydown', handler)
    }

    function handler(e: any) {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

      const key = e.code;

      switch (key) {
        // Play
        case 'KeyK': {
          if (isPlaying) {
            video.pause()
          } else {
            video.play()
          }

          break;
        }

        // Skip prev 10s
        case 'KeyJ': {
          let curr = videoMoment;
          curr -= 10;

          if (curr >= 0) {
            changeMoment(curr)
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip prev 5s
        case 'ArrowLeft': {
          let curr = videoMoment;
          curr -= 5;

          if (curr >= 0) {
            changeMoment(curr)
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip next 10s
        case 'KeyL': {
          let curr = videoMoment;
          curr += 10;

          if (curr >= duration) {
            changeMoment(duration)
          } else {
            changeMoment(curr);
          }

          break;
        }

        // Skip next 5s
        case 'ArrowRight': {
          let curr = videoMoment;
          curr += 5;

          if (curr >= duration) {
            changeMoment(duration)
          } else {
            changeMoment(curr);
          }

          break;
        }

        // PiP
        case 'KeyP': {
          if (isPiP) {
            document.exitPictureInPicture().catch(e => console.error(e))
          } else {
            video.requestPictureInPicture().catch(e => console.error(e));
          }

          break;
        }

        // Fullscreen
        case 'KeyF': {
          if (isFullscreen) {
            document.exitFullscreen().catch(e => console.error(e))
          } else {
            player.requestFullscreen().catch(e => console.error(e))
          }

          break;
        }

        // Mute
        case 'KeyM': {
          video.muted = !video.muted;

          break;
        }
      }
    }

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [isPlaying, isMuted, videoMoment, isFullscreen, isPiP, inView, duration])

  //* Handle video buffering & end screen
  useEffect(() => {
    const video = videoRef.current;

    if (!duration || !videoMoment || !video) return;

    video.addEventListener('timeupdate', handler)

    function handler() {
      const video = videoRef.current;

      if (!video) return;

      //* Buffering
      const loaded = loadedRef.current;
      const buffered = video.buffered;

      if (buffered.length === 0 || !loaded) return;

      for (let i = 0; i < buffered.length; i++) {
        const start = buffered.start(i);
        const end = buffered.end(i);

        if (videoMoment >= start && videoMoment <= end) {
          const offset = (end / duration) * 100

          loaded.style.width = `${offset}%`
        }
      }
    }

    return () => {
      video.removeEventListener('timeupdate', handler)
    }
  }, [duration, videoMoment])

  //* Change end screen due to time & ep & dub
  useEffect(() => {
    if (duration < 10 || !videoMoment || !dub) return;

    //* End screen
    if (!dub) return;

    if (videoMoment >= duration - 2) {
      let nextEp = ep;
      nextEp += 1;
      setIsTimeToEndScreen(true)

      const isNextEpExist = dub.eps.some(el => el.order === nextEp); // Last episode in dub
      const isTitleEnded = title.estimatedEps === ep; // Title ended

      if (isTitleEnded) {
        setEndScreen('titleEnded')
      } else if (isNextEpExist) {
        setEndScreen('epEnded')
      } else if (!isNextEpExist) {
        setEndScreen('lastEp')
      } else {
        setEndScreen('clear')
      }
    } else {
      if (endScreen !== 'clear') {
        setIsTimeToEndScreen(false);
        setEndScreen('clear')
      }
    }
  }, [duration, videoMoment, ep, dub])

  //* Update progress due to timeupdate & change preview offset
  useEffect(() => {
    const video = videoRef.current;
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement

    if (!duration || !video || !timeline) return;

    video.addEventListener('timeupdate', () => changeMoment(video.currentTime, true));
    timeline.addEventListener('pointermove', e => movePreview(e.offsetX))

    return () => {
      video.removeEventListener('timeupdate', () => changeMoment(video.currentTime, true))
      timeline.removeEventListener('pointermove', e => movePreview(e.offsetX))
    }
  }, [duration])

  //* Change volume progress
  useEffect(() => {
    const ref = volumeRef.current;
    if (!volume) return;

    ref!.style.width = `${volume}px`
  }, [volume])

  //* Change video src
  useEffect(() => {
    if (!dub) return;

    const epData = dub.eps.find(el => el.order === ep);

    setVideoSrc(epData?.source[quality])

    if (endScreen !== 'clear') {
      setIsTimeToEndScreen(false);
      setEndScreen('clear')
    }
  }, [quality, dub, ep])

  //* Check if episode is last & set out states
  useEffect(() => {
    if (!dub) return;

    const currEpExist = dub.eps.some(el => el.order === ep);

    if (!currEpExist) {
      setEp(dub.eps[dub.eps.length - 1].order)
      return;
    }

    setIsPlaying(false);

    let nextEp = ep;
    nextEp++;

    changePreivewFormat(dub)

    if (!dub.eps.find(el => el.order === nextEp)) {
      setIsLastEpisode(true)
    } else {
      setIsLastEpisode(false)
    }

    if (setCurrentDubber) {
      setCurrentDubber(dubs.find(el => el.id === dub.id)!)
    }

    if (setCurrentEp) {
      setCurrentEp(ep)
    }
  }, [ep, dub])


  //* Handlers
  /** Defines previews format from 0 index frame of current dub (height 120 = old, 135 = new) */
  async function changePreivewFormat(dub: ITitleEpisodesDub) {
    try {
      const dimensions = await getImageSize(dub.eps.find(el => el.order === ep)!.framesURL![0]);

      setIsPreviewOld(dimensions.height === 120 ? true : false)
      setIsVideoProcessed(true)
    } catch (e) {

    }
  }

  /** 
   * Change video moment 
   * @param synthetic Defines if function called by user or not. If syntehic set to true, function will only update ranges & moment
  */
  function changeMoment(val: number, synthetic?: boolean) {
    const progress = progressRef.current;
    const video = videoRef.current;
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement

    if (!progress || !video || !timeline) return

    if (!synthetic) {
      video.currentTime = val;
      movePreview(val / duration * timeline.offsetWidth);
    }

    setVideoMoment(val);
    moveProgress(val);
  }

  /** Move video progress (controlled by changeMoment) */
  function moveProgress(moment: number) {
    const progress = progressRef.current;

    if (!progress) return;

    const offset = (moment / duration) * 100;

    progress.style.width = `${offset}%`;
  }

  /** Move & set video preview */
  function movePreview(x: number) {
    const preview = previewRef.current;
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement

    if (!preview || !timeline) return;

    const timelineWidth = timeline.offsetWidth;
    const previewWidth = preview.offsetWidth;
    const halfPreviewWidth = previewWidth / 2;
    const breakpoints = {
      left: halfPreviewWidth,
      right: timelineWidth - halfPreviewWidth
    }

    // Move preview
    if (x <= breakpoints.left) {
      // Left breakpoint
      preview.style.translate = `0px`;
      preview.style.left = `0px`;
    } else if (x >= breakpoints.right) {
      // Right breakpoint
      preview.style.left = `${timelineWidth - halfPreviewWidth}px`;
    } else {
      // Free movement
      preview.style.translate = `-${halfPreviewWidth}px`;
      preview.style.left = `${x}px`;
    }

    const hoveredMoment = x / timelineWidth * duration;
    setHoveredMoment(hoveredMoment);

    // Set preview frame
    if (!dub || !isVideoProcessed) return
    const img = preview.querySelector('img') as HTMLImageElement;

    const frames = dub.eps.find(el => el.order === ep)!.framesURL!
    let previewIndex = Math.floor(hoveredMoment / 5);
    const frameIndex = Math.floor(previewIndex / 25);
    const frame = frames[frameIndex];
    const imgWidth = img.offsetWidth;

    while (previewIndex > 25) {
      previewIndex -= 25;
    }

    const offset = previewIndex * imgWidth;

    if (img.getAttribute('src') !== frame) img.setAttribute('src', frame);
    img.style.objectPosition = `-${offset}px`
  }

  useEffect(() => {
    console.log(endScreen)
  }, [endScreen])


  return (
    // In view
    <div className='w-full h-full relative' ref={inViewRef}>
      {/* Cover */}
      <button className={`absolute w-full h-full top-0 left-0 z-[7] bg-grey duration-200 flex justify-center items-center ${isCoverVisible ? '' : 'opacity-0 invisible'}`} onClick={() => setIsCoverVisible(false)}>
        <IcoPlay width={256} height={256} gradient='secondary' />
      </button>

      {/* Wrapper */}
      <div className='w-full h-full flex flex-col justify-between bg-black relative z-[5]' ref={playerRef}>
        {/* End screen wrapper */}
        <div className={'w-full h-full absolute top-0 left-0 flex justify-center items-center'}>
          {/* Ep ended */}
          <EpEndScreen endScreen={endScreen} ep={ep} setEp={setEp} title={title} isTime={isTimeToEndScreen} videoRef={videoRef} />

          {/* Last ep in dub */}
          <LastEpScreen endScreen={endScreen} isTime={isTimeToEndScreen} />

          {/* Title ended */}
          <TitleEndScreen endScreen={endScreen} isTime={isTimeToEndScreen} />
        </div>

        {/* Menu */}
        <Menu ep={ep} setEp={setEp} currentDub={dub!} totalDubs={title.dubs!} dubbers={dubs} isLastEpisode={isLastEpisode} setCurrentDub={setDub} totalEps={title.estimatedEps} />

        {/* Bottom */}
        <div className='flex justify-between gap-[24px] relative z-[10] bg-dark/[.1] backdrop-blur-[32px] px-[24px] py-[16px]'>
          <div className='flex items-center gap-[16px]'>
            {/* Play/Pause */}
            <Play isPlaying={isPlaying} videoRef={videoRef} />

            {/* Volume */}
            <Volume volume={volume} isMuted={isMuted} videoRef={videoRef} volumeRef={volumeRef} />
          </div>

          {/* Range */}
          <Timeline duration={duration} moment={videoMoment} changeMoment={changeMoment} loadedRef={loadedRef} progressRef={progressRef} hoveredMoment={hoveredMoment} previewRef={previewRef} isPreviewsOld={isPreviewOld} isVideoProcessed={isVideoProcessed} />

          {/* Settings */}
          <div className='flex items-center gap-[16px]'>
            {/* PiP */}
            <PiP isPiP={isPiP} videoRef={videoRef} />

            {/* Settings */}
            <Settings />

            {/* Fullscreen */}
            <Fullscreen isFullscreen={isFullscreen} playerRef={playerRef} />
          </div>
        </div>

        {/* Video */}
        <div className='w-full h-full absolute top-0 left-0'>
          {/* Loader */}
          <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center duration-200 touch-none pointer-events-none ${isVideoLoading ? 'opacity-100' : 'opacity-0'}`}>
            <loader.DotPulse color='#fff' size={80} />
          </div>

          <video src={videoSrc} preload='metadata' className='w-full h-full' controls={false} ref={videoRef}></video>
        </div>
      </div>
    </div>
  );
}

const EpEndScreen: NextPage<{
  endScreen: TEndScreen,
  title: ITitle,
  ep: number,
  setEp: (val: number) => void,
  isTime: boolean,
  videoRef: RefObject<HTMLVideoElement>
}> = ({ endScreen, ep, setEp, title, isTime, videoRef }) => {
  const [remain, setRemain] = useState(5)
  const [epMeta, setEpMeta] = useState<ITitleEpisodeMeta | null>(null)
  const [nextEp, setNextEp] = useState(ep)
  const [date, setDate] = useState('')
  const [int, setInt] = useState<NodeJS.Timeout>()

  useEffect(() => {
    const epMeta = title.epsMeta?.find(el => el.order === nextEp);

    if (epMeta) {
      const parsed = timestampToDate(epMeta.dateOut);

      setEpMeta(epMeta)
      setDate(`${parsed.day} ${parsed.localizedMonth.slice(0, 3)} ${parsed.year}`)
    }
  }, [ep])

  useEffect(() => {
    setRemain(5)
    setNextEp(++ep)

    clearInterval(int)

    let rem = remain;
    setInt(setInterval(() => {
      if (isTime && endScreen === 'epEnded') {
        if (rem > 1) {
          setRemain(prev => --prev)
          rem -= 1;
        } else {
          clearInterval(int);
          skipEp();
        }
      } else {
        clearInterval(int)
      }
    }, 1000))
  }, [isTime])

  function skipEp() {
    const video = videoRef.current;

    if (!video) return;

    setEp(nextEp)

    setTimeout(() => {
      video.play()
    }, 1000);
  }

  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] mx-[24px] z-[7] gap-[24px] ${isTime && endScreen === 'epEnded' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold'>Епізод завершено</p>

    <div className='bg-grey px-[40px] py-[16px] flex justify-between items-center duration-200 w-full'>
      <div className='flex items-center gap-[32px] w-full'>
        <p className='text-white text-[32px] font-bold'>#{nextEp}</p>
        <div className='flex flex-col items-start gap-[8px] w-full'>
          <div className='flex flex-col items-start gap-[4px] w-full'>
            <p className='text-white text-[24px] break-ellipsis max-w-400px'>{epMeta?.names.ukr || 'Наступний епізод'}</p>
            <p className='text-white font-extralight break-ellipsis max-w-300px'>{epMeta?.names.eng}</p>
          </div>

          <p className='text-white font-extralight'>{date}</p>
        </div>
      </div>

      <button className='duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[8px] rounded-[4px]' onClick={() => skipEp()}>
        <IcoNewPlayerNext width={80} height={80} />
      </button>
    </div>

    <p className='text-white text-[24px] font-extralight'>Автоматично через: {remain} {wordDeclination(remain, ['секунду', 'секунди', 'секунд'])}</p>
  </div>
}

const LastEpScreen: NextPage<{ endScreen: TEndScreen, isTime: boolean }> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center gap-[24px] w-[800px] mx-[24px] z-[7] ${isTime && endScreen === 'lastEp' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold'>Епізод завершено</p>
    <p className='text-white text-[24px] font-extralight'>Це останній епізод в цьому озвученні</p>
  </div>
}

const TitleEndScreen: NextPage<{ endScreen: TEndScreen, isTime: boolean }> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] mx-[24px] gap-[24px] z-[7] ${isTime && endScreen === 'titleEnded' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold'>Тайтл завершено!</p>

    {/* //TODO */}
    {/* <button className='gradientNew--primary-border-4 gradientNew--primary-hover flex gap-[16px] items-center px-[24px] py-[16px]'>
      <p className='text-white text-[24px] font-bold uppercase'>Відмітити як “переглянуто”</p>
    </button> */}

    <p className='text-white text-[16px] font-extralight'>Дякуємо, що обрали animee!</p>
  </div>
}



const Menu: NextPage<{
  ep: number,
  setEp: (state: number) => void,
  currentDub: ITitleEpisodesDub,
  setCurrentDub: (state: ITitleEpisodesDub) => void,
  totalDubs: ITitleEpisodesDub[],
  dubbers: IDubber[]
  isLastEpisode: boolean,
  totalEps: number
}> = ({ ep, setEp, dubbers, currentDub, isLastEpisode, setCurrentDub, totalDubs, totalEps }) => {
  const isFirstOpen = useRef(true);

  function nextEpisode() {
    if (!isLastEpisode) {
      setEp(ep += 1)
    }
  }

  // Prevent auto scrolling to top issue from react-menu component
  function preventScrolling() {
    if (isFirstOpen.current) {
      let i = 0;

      let int = setInterval(() => {
        if (i === 20) {
          clearInterval(int)
          return;
        }

        window.scrollTo({ top: window.scrollY, behavior: 'instant' })
        isFirstOpen.current = false;
        i++;
      }, 10)
    }
  }

  function menuButton() {
    return <button className='px-[16px] py-[8px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => preventScrolling()}>
      <IcoNewPlayerList width={40} height={40} />
    </button>
  }

  function MenuDubber({ dub, currId, dubbers }: { dub: ITitleEpisodesDub, currId: string, dubbers: IDubber[] }) {
    let lastEp = 0;

    dub.eps.forEach(el => {
      if (el.order > lastEp) lastEp = el.order;
    })

    function setDub() {
      setCurrentDub(dub);
    }

    return <RMen.MenuItem>
      <button className={`px-[8px] py-[4px] duration-200 hover:bg-purple flex gap-[8px] focus-visible:bg-purple w-fit rounded-[2px] ${dub.id === currId ? 'bg-purple' : ''}`} onClick={() => setDub()}>
        <p className='text-white'>{dubbers.find(el => el.id === dub.id)!.name}</p>

        <div className='flex gap-[4px]'>
          <div className='bg-dark px-[4px] py-[2px] rounded-[2px]'>
            <p className='text-white whitespace-nowrap'>{lastEp} / {totalEps}</p>
          </div>

          {dub.include2K && <div className='gradientNew--primary px-[4px] py-[2px] rounded-[2px]'>
            <p className='text-white whitespace-nowrap'>SUB</p>
          </div>}

          {dub.includeSub && <div className='gradientNew--primary px-[4px] py-[2px] rounded-[2px]'>
            <p className='text-white whitespace-nowrap'>4K</p>
          </div>}
        </div>
      </button>
    </RMen.MenuItem>
  }

  function MenuEpisode({ to }: { to: number }) {
    function setEpisode(to: number) {
      setEp(to)
    }

    return <RMen.MenuItem>
      <button className={`px-[16px] py-[4px] duration-200 hover:bg-purple flex justify-center focus-visible:bg-purple rounded-[2px] w-full ${ep === to ? 'bg-purple' : ''}`} onClick={() => setEpisode(to)}>
        <p className='text-white'>{to}</p>
      </button>
    </RMen.MenuItem>
  }

  return (
    <div className='relative z-[10] px-[24px] py-[16px] flex gap-[4px]'>
      <RMen.Menu className={'szh-slide w-full'} menuClassName={`px-[16px] py-[8px] bg-dark !flex gap-[8px] max-h-[200px] w-fit`} gap={8} menuButton={menuButton()}>
        <div className='flex flex-col gap-[4px] overflow-y-scroll px-[4px] w-full'>
          {currentDub && totalDubs.map(el => {
            return <MenuDubber dub={el} currId={currentDub.id} dubbers={dubbers} key={`${el.id}_setdub`} />
          })}
        </div>

        {/* Divider */}
        <span className='w-[1px] h-auto bg-grey block'></span>

        <div className='flex flex-col gap-[4px] overflow-y-scroll px-[8px]'>
          {currentDub && currentDub.eps.map(el => {
            return <MenuEpisode to={el.order} key={`${currentDub.id}_setep-${el.order}`} />
          })}
        </div>
      </RMen.Menu>

      <div className='bg-dark flex flex-col justify-center gap-[2px] rounded-[2px] px-[16px]'>
        <p className='text-white font-bold text-center'>{ep <= 9 ? `0${ep}` : ep}</p>
        <p className='text-white text-[12px] font-extralight text-center'>{currentDub ? dubbers.find(el => el.id === currentDub.id)!.name : '...'}</p>
      </div>

      <button className='px-[16px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => nextEpisode()} disabled={isLastEpisode}>
        <IcoNewPlayerNext width={40} height={40} className={`kekwplayer-menu_nextBtn ${isLastEpisode ? 'kekwplayer-menu_nextBtn--lastEpisode' : ''}`} />
      </button>
    </div>
  );
}

const Play: NextPage<{
  isPlaying: boolean,
  videoRef: RefObject<HTMLVideoElement>
}> = ({ isPlaying, videoRef }) => {
  function changePlaying() {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause()
    }
  }

  function getTitle() {
    return isPlaying ? 'Зупинити відео (k)' : 'Продовжити відео (k)'
  }

  return (
    <button className='relative w-[68px] h-[68px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changePlaying()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoPlay width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
      <IcoNewPlayerPause width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}

const Volume: NextPage<{
  volume: number,
  isMuted: boolean,
  videoRef: RefObject<HTMLVideoElement>,
  volumeRef: RefObject<HTMLDivElement>,
}> = ({ isMuted, videoRef, volume, volumeRef }) => {
  const video = videoRef.current;

  //* Hhandle volume hover
  useEffect(() => {
    const volumeWrapper = document.querySelector('#kekwplayer-volume') as HTMLDivElement;
    const volumeRange = document.querySelector('#kekwplayer-volume_range') as HTMLDivElement;

    if (!volumeRange || !volumeWrapper) return;
    const width = volumeRange.offsetWidth;

    volumeRange.style.maxWidth = '0';
    volumeRange.style.opacity = '0';

    volumeWrapper.addEventListener('pointerenter', () => {
      volumeRange.style.opacity = '1';
      volumeRange.style.maxWidth = `${width}px`;
    })

    volumeWrapper.addEventListener('pointerleave', () => {
      volumeRange.style.maxWidth = '0';
      volumeRange.style.opacity = '0';
    })
  }, [])

  function changeMuted() {
    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.muted = !video.muted;
  }

  function setVolume(to: number) {
    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.volume = to / 100;
  }

  function getTitle() {
    return isMuted ? 'Увімкнути звук (m)' : 'Вимкнути звук (m)'
  }

  function renderThumb({ props }: IRenderThumbParams) {
    return <div
      {...props}
      key={'kekwplayer-volume_thumb'}
      style={{
        ...props.style,
        touchAction: 'none',
        pointerEvents: 'none',
        position: 'relative',
        zIndex: 13,
        outline: 'none'
      }}
      id='kekwplayer-volume_thumb'
      className={`w-[16px] h-[16px] gradientNew--primary rounded-[32px]`}
    />
  }

  function renderTrack({ props, children }: IRenderTrackParams) {
    return <div
      {...props}
      key={'kekwplayer-volume_track'}
      style={{
        ...props.style,
        position: 'relative',
        zIndex: 13
      }}
      className={`w-full h-[8px] rounded-[6px] z-[10] bg-dark/[.1]`}
    >
      {children}
    </div>
  }

  return (
    <div className='relative flex items-center gap-[8px]' id='kekwplayer-volume'>
      <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changeMuted()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
        <IcoNewPlayerVolMin width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${volume < 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolNormal width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${volume >= 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolMuted width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${isMuted ? 'opacity-100' : ''}`} />
      </button>

      <div className='flex items-center gap-[16px] w-fit overflow-hidden opacity-0 duration-500' id='kekwplayer-volume_range'>
        <div className='w-[100px] max-w-[100px] relative'>
          <Range min={0} max={100} onChange={val => setVolume(val[0])} values={[volume]} renderThumb={renderThumb} renderTrack={renderTrack} />

          {/* Volume progress */}
          <div className='w-[20px] h-full absolute top-0 left-0 touch-none pointer-events-none z-[11] gradientNew--secondary rounded-[6px]' ref={volumeRef}></div>
        </div>

        <p className='text-white'>{volume}</p>
      </div>
    </div>
  );
}

const Timeline: NextPage<{
  duration: number,
  moment: number,
  changeMoment: (val: number) => void,
  progressRef: RefObject<HTMLDivElement>,
  loadedRef: RefObject<HTMLDivElement>,
  previewRef: RefObject<HTMLDivElement>,
  hoveredMoment: number,
  isPreviewsOld: boolean,
  isVideoProcessed: boolean,
}> = ({ duration, moment, loadedRef, progressRef, hoveredMoment, previewRef, isPreviewsOld, isVideoProcessed, changeMoment }) => {
  function renderThumb({ props }: IRenderThumbParams) {
    return <div
      {...props}
      key={'kekwplayer-timeline_thumb'}
      style={{
        ...props.style,
        touchAction: 'none',
        pointerEvents: 'none',
        position: 'relative',
        zIndex: 13
      }}
      id='kekwplayer-timeline_thumb'
      className={`w-[16px] h-[16px] gradientNew--primary rounded-[32px]`}
    />
  }

  function renderTrack({ props, children }: IRenderTrackParams) {
    return <div
      {...props}
      key={'kekwplayer-timeline_track'}
      style={{
        ...props.style,
        position: 'relative',
        zIndex: 13
      }}
      className={`w-full h-[8px] rounded-[6px] z-[10] bg-dark/[.1]`}
    >
      {children}
    </div>
  }

  return (
    <div className='w-full h-full relative'>
      {/* Range */}
      <div className='w-full h-full relative flex flex-col justify-center'>
        {/* Track */}
        <div className='w-full relative' id='kekwplayer-timeline'>
          <Range min={0} max={duration} step={1} onChange={val => changeMoment(val[0])} values={[moment]} renderTrack={renderTrack} renderThumb={renderThumb} />

          {/* From start progress */}
          <div className='h-full absolute top-0 left-0 touch-none pointer-events-none z-[11] gradientNew--secondary rounded-[6px]' ref={progressRef}></div>

          {/* Downloading progress */}
          <div className='h-full absolute top-0 touch-none pointer-events-none left-0 z-[10] bg-white/[.3] rounded-[6px]' ref={loadedRef}></div>
        </div>

        {/* Time */}
        <div className='w-full flex justify-between absolute bottom-[4px] left-0'>
          <p className='text-white'>{secondsToReadable(moment).pretty}</p>
          <p className='text-white'>{secondsToReadable(duration).pretty}</p>
        </div>
      </div>

      {/* Preview */}
      <div className={`flex flex-col gap-[4px] items-center absolute bottom-[90%] left-0 opacity-0 invisible`} id='kekwplayer-preview' ref={previewRef}>
        <div className={`${isPreviewsOld ? 'w-[160px] h-[120px]' : 'w-[240px] h-[135px]'} bg-dark rounded-[4px] overflow-hidden`}>
          <img src="" alt="..." className={`w-full h-full ${isVideoProcessed ? '' : 'opacity-0 invisible !h-0'}`} />
          <div className={`${isVideoProcessed ? 'opacity-0 invisible h-0' : 'h-full'} flex flex-col items-center justify-center gap-[8px]`}>
            <IcoServerUnavailable width={60} height={60} />
            <p className='text-white uppercase'>превью недоступні</p>
          </div>
        </div>
        <p className='text-white'>{secondsToReadable(hoveredMoment).pretty}</p>
      </div>
    </div>
  );
}

type TSettingPage = 'default' | 'quality' | 'speed' | 'volume' | 'subs'
const Settings: NextPage = (props) => {
  const [page, setPage] = useState<TSettingPage>('default')

  function MenuButton() {
    return <button className={'relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]'} tabIndex={0} aria-label={'Налаштування'} title={'Налаштування'}>
      <IcoSettings width={40} height={40} className={`absolute left-[4px] top-[4px] duration-200`} />
    </button>
  }

  return (
    <div className='relative'>
      <RMen.Menu menuButton={MenuButton()}>

      </RMen.Menu>
    </div>
  );
}

const PiP: NextPage<{
  isPiP: boolean,
  videoRef: RefObject<HTMLVideoElement>,
}> = ({ isPiP, videoRef }) => {
  function changePiP() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found');
      return;
    }

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(e => console.error(e));
    } else {
      video.requestPictureInPicture().catch(e => console.error(e))
    }
  }

  function getTitle() {
    return isPiP ? 'Вийти з Картинка в Картинці (p)' : 'Увійти в Картинка в Картинці (p)'
  }

  return (
    <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changePiP()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoNewPlayerPiPEnter className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isPiP ? 'opacity-0' : 'opacity-100'}`} width={40} height={40} />
      <IcoNewPlayerPiPExit className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isPiP ? 'opacity-100' : 'opacity-0'}`} width={40} height={40} />
    </button>
  );
}

const Fullscreen: NextPage<{
  isFullscreen: boolean,
  playerRef: RefObject<HTMLDivElement>
}> = ({ isFullscreen, playerRef }) => {
  function changeFullscreen() {
    const player = playerRef.current

    if (!player) {
      console.error('Player is not found')
      return
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => console.error(e));
    } else {
      player.requestFullscreen().catch(e => console.error(e));
    }
  }

  function getTitle() {
    return isFullscreen ? 'Вийти з повноекранного режиму (f)' : 'Увійти в повноекранний режим (f)';
  }

  return (
    <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changeFullscreen()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoNewPlayerFullExit className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isFullscreen ? 'opacity-100' : 'opacity-0'}`} width={40} height={40} />
      <IcoNewPlayerFullEnter className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isFullscreen ? 'opacity-0' : 'opacity-100'}`} width={40} height={40} />
    </button>
  );
}



function secondsToReadable(time: number): { hrs: number, mins: number, secs: number, pretty: string } {
  let mins = Math.floor(time / 60);
  const secs = Math.floor(time - mins * 60);
  let hrs = 0;

  while (mins >= 60) {
    hrs += 1;
    mins -= 60;
  }

  const pretty = `${hrs ? hrs < 10 ? `0${hrs}:` : `${hrs}:` : ''}${mins < 10 ? `0${mins}:` : `${mins}:`}${secs < 10 ? `0${secs}` : secs}`

  return { hrs, mins, secs, pretty }
}

export default KekwPlayer;