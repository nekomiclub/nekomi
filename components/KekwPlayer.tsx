'use client'

import next, { NextPage } from 'next';
import { useState, useEffect, useRef, RefObject, memo } from 'react';
import axios from 'axios';
import * as loader from '@uiball/loaders';
import { Range } from 'react-range';
import { getImageSize } from 'react-image-size'
import * as RMen from '@szhsin/react-menu'

import { ITitle, ITitleEpisodeDubbed, ITitleEpisodeMeta, ITitleEpisodesDub } from '../interfaces/ITitle';
import { IDubber } from '../interfaces/IDubber';
import { IcoNewPlayerFullEnter, IcoNewPlayerFullExit, IcoNewPlayerList, IcoNewPlayerNext, IcoNewPlayerPause, IcoNewPlayerPiPEnter, IcoNewPlayerPiPExit, IcoNewPlayerQuality, IcoNewPlayerSubs, IcoNewPlayerVolMin, IcoNewPlayerVolMuted, IcoNewPlayerVolNormal } from '../assets/ico/new/player';
import { IcoArrow, IcoPlay, IcoPlayerCenter, IcoPlayerStretch, IcoServerUnavailable, IcoSettings, IcoSpeed } from '../assets/ico/Icos';

import '../styles/components/KekwPlayer.scss';
import { useInView } from 'react-intersection-observer';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { LoadingImage } from './GeneralComponents';
import { timestampToDate, wordDeclination } from './handlers';
import { useIdleTimer } from 'react-idle-timer';

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
  const [duration, setDuration] = useState(1)
  const [videoMoment, setVideoMoment] = useState(0);
  const [hoveredMoment, setHoveredMoment] = useState(0);
  const [endScreen, setEndScreen] = useState<TEndScreen>('clear')

  // Settings states
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [speed, setSpeed] = useState(1)
  const [subs, setSubs] = useState() // TODO Subs system
  const [stretch, setStretch] = useState(false)

  const [isPreviewOld, setIsPreviewOld] = useState(false);
  const [isVideoProcessed, setIsVideoProcessed] = useState(true);

  // Player states
  const [isCoverVisible, setIsCoverVisible] = useState(false) //! Must be true
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)
  const [isTimeToEndScreen, setIsTimeToEndScreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isIdle, setIsIdle] = useState(false)

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

  const mobileSkipWrapper = useRef<HTMLDivElement>(null)
  const mobilePrevSkipRef = useRef<HTMLDivElement>(null)
  const mobileNextSkipRef = useRef<HTMLDivElement>(null)

  const isMultiskipRef = useRef(false)
  const skipTimeoutRef = useRef<NodeJS.Timeout>()

  // System
  const [inViewRef, inView] = useInView()

  // Prev states
  const prevDub = useRef<ITitleEpisodesDub>()
  const prevEp = useRef(0)

  // Idle timer
  useIdleTimer({
    timeout: 3000,
    throttle: 500,
    // onIdle: () => setIsIdle(true),
    // onAction: () => setIsIdle(false)
  })


  // Effects
  //* Initial effects. Assing dub, define previews format, check if frames are processed, define is client mobile
  useEffect(() => {
    if (window === undefined) return;

    function setDefault() {
      const dub = title!.dubs![0];

      changePreivewFormat(dub);
      setDub(dub)
    }

    setDefault()

    if (window.innerWidth <= 600 || window.innerHeight <= 400) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
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

    video.addEventListener('ratechange', () => {
      setSpeed(video.playbackRate)
    })

    player.addEventListener('contextmenu', e => {
      e.preventDefault();
    })

    video.addEventListener('click', () => {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

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

  //* Handle video events with states
  useEffect(() => {
    const video = videoRef.current;
    const player = playerRef.current;
    const prevSkip = mobilePrevSkipRef.current;
    const nextSkip = mobileNextSkipRef.current;
    const skipWrapper = mobileSkipWrapper.current;

    if (!video || !player || !prevSkip || !nextSkip || !skipWrapper) return;

    video.addEventListener('dblclick', videoDbClickHandler)

    nextSkip.addEventListener('dblclick', () => enterMultiskip(false))
    prevSkip.addEventListener('dblclick', () => enterMultiskip(true))

    nextSkip.addEventListener('click', () => skipMoment(false))
    prevSkip.addEventListener('click', () => skipMoment(true))

    skipWrapper.addEventListener('click', playMobile)



    function playMobile() {
      const video = videoRef.current;
      const player = playerRef.current;

      setTimeout(() => {
        if (!video || !player || isMultiskipRef.current) return;

        // Throttle playback (click can be double)
        if (video.paused) {
          video.play()
        } else {
          video.pause();
        }
      }, 200);
    }

    function videoDbClickHandler() {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(e => console.error(e));
      } else {
        player.requestFullscreen().catch(e => console.error(e));
      }
    }

    function enterMultiskip(prev: boolean) {
      const video = videoRef.current;

      if (!video || isMultiskipRef.current) return;

      const offset = prev ? video!.currentTime - 5 : video!.currentTime + 5;
      isMultiskipRef.current = true;

      video.currentTime = offset;

      // Set timeout
      skipTimeoutRef.current = setTimeout(() => {
        isMultiskipRef.current = false;
      }, 1000);
    }

    function skipMoment(prev: boolean) {
      const video = videoRef.current;

      if (!video || !isMultiskipRef.current) return;

      const offset = prev ? video!.currentTime - 5 : video!.currentTime + 5;

      video.currentTime = offset;

      // Refresh timeout
      clearTimeout(skipTimeoutRef.current)

      skipTimeoutRef.current = setTimeout(() => {
        isMultiskipRef.current = false;
      }, 1000);
    }



    return () => {
      video.removeEventListener('dblclick', videoDbClickHandler)

      nextSkip.removeEventListener('dblclick', () => enterMultiskip(false))
      prevSkip.removeEventListener('dblclick', () => enterMultiskip(true))

      nextSkip.removeEventListener('click', () => skipMoment(false))
      prevSkip.removeEventListener('click', () => skipMoment(true))

      skipWrapper.removeEventListener('click', playMobile)
    }
  }, [isMobile])

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

  //* Handle last episode, end screen after changing ep/dub & out states
  useEffect(() => {
    if (!dub) return;

    // Handle end screen
    if (endScreen !== 'clear') {
      setIsTimeToEndScreen(false);
      setEndScreen('clear')
    }

    // Handle last episode
    const currEpExist = dub.eps.some(el => el.order === ep);

    if (!currEpExist) {
      setEp(dub.eps[dub.eps.length - 1].order)
      return;
    }

    let nextEp = ep;
    nextEp++;

    if (!dub.eps.find(el => el.order === nextEp)) {
      setIsLastEpisode(true)
    } else {
      setIsLastEpisode(false)
    }

    // Pause video after changing ep/dub
    setIsPlaying(false);

    // Re-define previews format
    changePreivewFormat(dub)

    // Handle out states
    if (setCurrentDubber) {
      setCurrentDubber(dubs.find(el => el.id === dub.id)!)
    }

    if (setCurrentEp) {
      setCurrentEp(ep)
    }

    // Set video src
    const epData = dub.eps.find(el => el.order === ep);

    if (dub !== prevDub.current && ep === prevEp.current) {
      changeVideoSrc(epData!.source[quality], videoMoment)
    } else {
      changeVideoSrc(epData!.source[quality], 0)
    }

    prevDub.current = dub;
    prevEp.current = ep;
  }, [ep, dub])

  //* Handle quality changing
  useEffect(() => {
    if (!dub) return;

    const epData = dub.eps.find(el => el.order === ep);

    changeVideoSrc(epData!.source[quality], videoMoment)
  }, [quality])


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
   * @param synthetic Defines if function called by user or not. If syntehic set to true, function will only update ranges & moment, if not it will move preview & set new moment
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

    const offset = moment / duration * 100;

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

  /** Change video src (ep/dub & quality changing) & sync video with previous moment */
  function changeVideoSrc(src: string, moment: number) {
    const video = videoRef.current;

    if (!video) return;

    video.addEventListener('loadedmetadata', handler)

    function handler() {
      video!.currentTime = moment;
      video!.play();
      video!.removeEventListener('loadedmetadata', handler)
    }

    setVideoSrc(src)
  }


  return (
    // In view
    <div className='w-full h-full relative overflow-hidden' ref={inViewRef}>
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

        {/* Mobile skip wrapper */}
        <div className={isMobile ? 'w-full h-full absolute top-0 left-0 z-[10] flex' : 'hidden'} ref={mobileSkipWrapper}>
          <div className='w-full h-full' ref={mobilePrevSkipRef}></div>
          <div className='w-full h-full' ref={mobileNextSkipRef}></div>
        </div>

        {/* Menu */}
        <Menu ep={ep} setEp={setEp} currentDub={dub!} totalDubs={title.dubs!} dubbers={dubs} isLastEpisode={isLastEpisode} setCurrentDub={setDub} totalEps={title.estimatedEps} isIdle={isIdle} />

        {/* Bottom */}
        <div className={`flex justify-between gap-[24px] relative z-[10] bg-dark/[.1] backdrop-blur-[32px] px-[24px] py-[16px] duration-200 translate-y-0 ${isIdle ? 'translate-y-[100%]' : ''}`}>
          <div className='flex items-center gap-[16px]'>
            {/* Play/Pause */}
            <Play isPlaying={isPlaying} videoRef={videoRef} />

            {/* Volume */}
            <Volume volume={volume} isMuted={isMuted} videoRef={videoRef} volumeRef={volumeRef} />
          </div>

          {/* Range */}
          <Timeline duration={duration} moment={videoMoment} changeMoment={changeMoment} loadedRef={loadedRef} progressRef={progressRef} hoveredMoment={hoveredMoment} previewRef={previewRef} isPreviewsOld={isPreviewOld} isVideoProcessed={isVideoProcessed} videoRef={videoRef} />

          {/* Settings */}
          <div className='flex items-center gap-[16px]'>
            {/* PiP */}
            <PiP isPiP={isPiP} videoRef={videoRef} />

            {/* Settings */}
            <Settings quality={quality} setQuality={setQuality} setSubs={setSubs} speed={speed} subs={subs} epData={dub?.eps.find(el => el.order === ep)} isVideoProcessed={isVideoProcessed} videoRef={videoRef} stretch={stretch} setStretch={setStretch} />

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

          <video src={videoSrc} preload='metadata' className={`w-full h-full ${stretch ? 'object-cover' : ''}`} controls={false} ref={videoRef}></video>
        </div>
      </div>
    </div>
  );
}


//* -------------- EP ENDED END SCREEN COMPONENT --------------

interface IEndScreenProps {
  endScreen: TEndScreen,
  isTime: boolean
}

interface IEpEndScreenProps extends IEndScreenProps {
  title: ITitle,
  ep: number,
  setEp: (val: number) => void,
  videoRef: RefObject<HTMLVideoElement>
}

const EpEndScreen: NextPage<IEpEndScreenProps> = ({ endScreen, ep, setEp, title, isTime, videoRef }) => {
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


//* -------------- LAST EP END SCREEN COMPONENT --------------


const LastEpScreen: NextPage<IEndScreenProps> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center gap-[24px] w-[800px] mx-[24px] z-[7] ${isTime && endScreen === 'lastEp' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold'>Епізод завершено</p>
    <p className='text-white text-[24px] font-extralight'>Це останній епізод в цьому озвученні</p>
  </div>
}


//* -------------- TITLE END SCREEN COMPONENT --------------


const TitleEndScreen: NextPage<IEndScreenProps> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] mx-[24px] gap-[24px] z-[7] ${isTime && endScreen === 'titleEnded' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold'>Тайтл завершено!</p>

    {/* //TODO */}
    {/* <button className='gradientNew--primary-border-4 gradientNew--primary-hover flex gap-[16px] items-center px-[24px] py-[16px]'>
      <p className='text-white text-[24px] font-bold uppercase'>Відмітити як “переглянуто”</p>
    </button> */}

    <p className='text-white text-[16px] font-extralight'>Дякуємо, що обрали animee!</p>
  </div>
}


//* -------------- MENU COMPONENT --------------


interface IMenuProps {
  ep: number,
  setEp: (state: number) => void,
  currentDub: ITitleEpisodesDub,
  setCurrentDub: (state: ITitleEpisodesDub) => void,
  totalDubs: ITitleEpisodesDub[],
  dubbers: IDubber[]
  isLastEpisode: boolean,
  totalEps: number,
  isIdle: boolean
}

const Menu = memo<IMenuProps>(function Menu({ ep, setEp, dubbers, currentDub, isLastEpisode, setCurrentDub, totalDubs, totalEps, isIdle }) {
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

    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`px-[8px] py-[4px] duration-200 hover:bg-purple flex justify-between gap-[8px] focus-visible:bg-purple rounded-[2px] w-full ${dub.id === currId ? 'bg-purple' : ''}`} onClick={() => setDub()}>
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

    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`px-[16px] py-[4px] duration-200 hover:bg-purple flex justify-center focus-visible:bg-purple rounded-[2px] w-full ${ep === to ? 'bg-purple' : ''}`} onClick={() => setEpisode(to)}>
        <p className='text-white'>{to}</p>
      </button>
    </RMen.MenuItem>
  }

  return (
    <div className={`relative z-[10] px-[24px] py-[16px] flex gap-[4px] duration-200 translate-y-0 ${isIdle ? '-translate-y-[100%]' : ''}`}>
      <RMen.Menu className={'szh-slide szh-slide--toBottom w-full'} menuClassName={`px-[16px] py-[8px] bg-dark !flex gap-[8px] max-h-[200px] w-fit`} gap={8} menuButton={menuButton()}>
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
})


//* -------------- SETTINGS COMPONENT --------------


type TSettingPage = 'default' | 'quality' | 'speed' | 'volume' | 'subs';

interface ISettingsProps {
  quality: TVideoQuality,
  setQuality: (state: TVideoQuality) => void,
  speed: number,
  subs: any,
  setSubs: (state: any) => void,
  epData: ITitleEpisodeDubbed | undefined,
  isVideoProcessed: boolean,
  videoRef: RefObject<HTMLVideoElement>
  stretch: boolean,
  setStretch: (state: boolean) => void,
}

const Settings = memo<ISettingsProps>(function Memoized({ quality, setQuality, setSubs, speed, subs, epData, isVideoProcessed, videoRef, stretch, setStretch }) {
  const [page, setPage] = useState<TSettingPage>('default')
  const isFirstOpen = useRef(true);

  function setSpeed(to: number) {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = to;
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

  function MenuButton() {
    return <button className={'relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]'} tabIndex={0} aria-label={'Налаштування'} title={'Налаштування'} onClick={() => preventScrolling()}>
      <IcoSettings width={40} height={40} className={`absolute left-[4px] top-[4px] duration-200`} />
    </button>
  }

  function ReturnButton({ label }: { label: string }) {
    return <button className={`flex items-center gap-[16px] w-full duration-200 hover:bg-grey focus-visible:bg-grey`} onClick={() => setPage('default')}>
      <IcoArrow width={24} height={24} className='rotate-[90deg]' />
      <p className='text-white w-full'>{label}</p>
    </button>
  }

  function parseQuality(quality: TVideoQuality) {
    switch (quality) {
      case 'q4k': {
        return '4K'
      }

      case 'q2k': {
        return '2K'
      }

      case 'q1080': {
        return '1080'
      }

      case 'q720': {
        return '720'
      }

      case 'q480': {
        return '480'
      }

      case 'q240': {
        return '240'
      }
    }
  }

  function QualityButton() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`flex items-center justify-between w-full bg-grey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setPage('quality')}>
        <div className='flex items-center gap-[16px]'>
          <IcoNewPlayerQuality width={24} height={24} />
          <p className='text-white'>Якість</p>
        </div>

        <div>
          <p className='text-white'>{parseQuality(quality)}</p>
        </div>
      </button>
    </RMen.MenuItem>
  }

  function SubsButton() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`flex items-center justify-between w-full bg-grey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setPage('subs')}>
        <div className='flex items-center gap-[16px]'>
          <IcoNewPlayerSubs width={24} height={24} />
          <p className='text-white'>Субтитри</p>
        </div>

        {/* // TODO Subs system */}
        <div>
          <p className='text-lightGrey'>Відсутні</p>
        </div>
      </button>
    </RMen.MenuItem>
  }

  function SpeedButton() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`flex items-center justify-between w-full bg-grey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setPage('speed')}>
        <div className='flex items-center gap-[16px]'>
          <IcoSpeed width={24} height={24} />
          <p className='text-white'>Швидкість</p>
        </div>

        <div>
          <p className='text-white'>{speed}х</p>
        </div>
      </button>
    </RMen.MenuItem>
  }

  function StretchButton() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <button className={`flex items-center gap-[16px] w-full bg-grey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setStretch(!stretch)}>
        <div className='relative w-[24px] h-[24px]'>
          <IcoPlayerStretch width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-0 invisible' : 'opacity-100 visible'}`} />
          <IcoPlayerCenter width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
        </div>

        <p className='text-white'>{stretch ? 'Центрувати' : 'Розтягнути'} відео</p>
      </button>
    </RMen.MenuItem>
  }



  function QualityMenu() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <div className={`flex flex-col gap-[16px]`}>
        <ReturnButton label='Якість' />
        <div className='flex flex-col gap-[4px]'>
          {epData?.source.q2k && <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q2k' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q1080')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>2K</p>
          </button>}

          {epData?.source.q1080 && <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q1080' ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setQuality('q1080')}>
            <p className='text-white'>1080</p>
          </button>}

          {epData?.source.q720 && <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q720' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q720')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>720</p>
          </button>}

          {epData?.source.q480 && <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q480' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q480')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>480</p>
          </button>}

          {epData?.source.q240 && <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q240' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q240')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>240</p>
          </button>}
        </div>
      </div>
    </RMen.MenuItem>
  }

  function SubsMenu() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <div className={`flex flex-col gap-[16px]`}>
        <ReturnButton label='Субтитри' />
        <div className='flex flex-col gap-[4px]'>
          <button className='px-[16px] py-[4px] rounded-[2px] bg-grey' disabled>
            <p className='text-lightGrey'>Відсутні</p>
          </button>
        </div>
      </div>
    </RMen.MenuItem>
  }

  function SpeedMenu() {
    return <RMen.MenuItem onClick={(e) => { e.stopPropagation = true; e.keepOpen = true }}>
      <div className={`flex flex-col gap-[16px]`}>
        <ReturnButton label='Швидкість' />
        <div className='flex flex-col gap-[4px]'>
          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.25 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.25)}>
            <p className={`text-white`}>0.25x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.5 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.5)}>
            <p className={`text-white`}>0.5x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.75 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.75)}>
            <p className={`text-white`}>0.75x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1)}>
            <p className={`text-white`}>1x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.25 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.25)}>
            <p className={`text-white`}>1.25x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.5 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.5)}>
            <p className={`text-white`}>1.5x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.75 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.75)}>
            <p className={`text-white`}>1.75x</p>
          </button>

          <button className={`w-full bg-grey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 2 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(2)}>
            <p className={`text-white`}>2x</p>
          </button>
        </div>
      </div>
    </RMen.MenuItem>
  }

  return (
    <div className='relative max-[460px]:hidden'>
      <RMen.Menu menuButton={MenuButton()} className={`w-full szh-slide szh-slide--toTop`} menuClassName={`px-[16px] py-[8px] bg-dark !flex flex-col gap-[4px] min-w-[260px] w-fit !-left-[300%]`} gap={16} direction='top'>
        {epData && <>
          {/* Buttons */}
          {page === 'default' && <>
            <QualityButton />
            <SpeedButton />
            <StretchButton />
            <SubsButton />
          </>}

          {/* Menus */}
          {page === 'quality' && <QualityMenu />}
          {page === 'speed' && <SpeedMenu />}
          {page === 'subs' && <SubsMenu />}
        </>}
      </RMen.Menu>
    </div >
  );
})


//* -------------- PLAY COMPONENT --------------


interface IPlayProps {
  isPlaying: boolean,
  videoRef: RefObject<HTMLVideoElement>
}

const Play: NextPage<IPlayProps> = ({ isPlaying, videoRef }) => {
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
    <button className='relative w-[68px] h-[68px] max-[460px]:w-[40px] max-[460px]:h-[40px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changePlaying()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoPlay width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] max-[460px]:top-0 max-[460px]:left-0 max-[460px]:w-[40px] max-[460px]:h-[40px] ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
      <IcoNewPlayerPause width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] max-[460px]:top-0 max-[460px]:left-0 max-[460px]:w-[40px] max-[460px]:h-[40px] ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}


//* -------------- VOLUME COMPONENT --------------


interface IVolumeProps {
  volume: number,
  isMuted: boolean,
  videoRef: RefObject<HTMLVideoElement>,
  volumeRef: RefObject<HTMLDivElement>,
}

const Volume: NextPage<IVolumeProps> = ({ isMuted, videoRef, volume, volumeRef }) => {
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
    <div className='relative flex items-center gap-[8px] max-[600px]:hidden' id='kekwplayer-volume'>
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


//* -------------- TIMELINE COMPONENT --------------


interface ITimelineProps {
  duration: number,
  moment: number,
  changeMoment: (val: number) => void,
  progressRef: RefObject<HTMLDivElement>,
  loadedRef: RefObject<HTMLDivElement>,
  previewRef: RefObject<HTMLDivElement>,
  hoveredMoment: number,
  isPreviewsOld: boolean,
  isVideoProcessed: boolean,
  videoRef: RefObject<HTMLVideoElement>
}

const Timeline: NextPage<ITimelineProps> = ({ duration, moment, loadedRef, progressRef, hoveredMoment, previewRef, isPreviewsOld, isVideoProcessed, changeMoment, videoRef }) => {
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
          <p className='text-white'>{secondsToReadable(videoRef.current?.currentTime || 0).pretty}</p>
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


//* -------------- PIP COMPONENT --------------


interface IPiPProps {
  isPiP: boolean,
  videoRef: RefObject<HTMLVideoElement>,
}

const PiP: NextPage<IPiPProps> = ({ isPiP, videoRef }) => {
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
    <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px] max-[600px]:hidden' onClick={() => changePiP()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoNewPlayerPiPEnter className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isPiP ? 'opacity-0' : 'opacity-100'}`} width={40} height={40} />
      <IcoNewPlayerPiPExit className={`absolute top-[4px] left-[4px] duration-200 opacity-0 ${isPiP ? 'opacity-100' : 'opacity-0'}`} width={40} height={40} />
    </button>
  );
}


//* -------------- FULLSCREEN COMPONENT --------------


interface IFullscreenProps {
  isFullscreen: boolean,
  playerRef: RefObject<HTMLDivElement>
}

const Fullscreen: NextPage<IFullscreenProps> = ({ isFullscreen, playerRef }) => {
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
    <button className='relative w-[48px] h-[48px] max-[460px]:h-[32px] max-[460px]:w-[32px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changeFullscreen()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoNewPlayerFullExit className={`absolute top-[4px] left-[4px] max-[460px]:top-0 max-[460px]:left-0 max-[460px]:h-[32px] max-[460px]:w-[32px] duration-200 opacity-0 ${isFullscreen ? 'opacity-100' : 'opacity-0'}`} width={40} height={40} />
      <IcoNewPlayerFullEnter className={`absolute top-[4px] left-[4px] max-[460px]:top-0 max-[460px]:left-0 max-[460px]:h-[32px] max-[460px]:w-[32px] duration-200 opacity-0 ${isFullscreen ? 'opacity-0' : 'opacity-100'}`} width={40} height={40} />
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