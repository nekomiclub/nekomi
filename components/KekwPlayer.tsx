'use client'

import { NextPage } from 'next';
import { useState, useEffect, useRef, RefObject, KeyboardEvent, ReactEventHandler } from 'react';
import axios from 'axios';
import * as loader from '@uiball/loaders';
import { Range } from 'react-range';
import { getImageSize } from 'react-image-size'

import { ITitle, ITitleEpisodeDubbed, ITitleEpisodesDub } from '../interfaces/ITitle';
import { IDubber } from '../interfaces/IDubber';
import { IcoNewPlayerFullEnter, IcoNewPlayerFullExit, IcoNewPlayerList, IcoNewPlayerNext, IcoNewPlayerPause, IcoNewPlayerPiPEnter, IcoNewPlayerPiPExit, IcoNewPlayerVolMin, IcoNewPlayerVolMuted, IcoNewPlayerVolNormal } from '../assets/ico/new/player';
import { IcoNewPlay, IcoNewSettings } from '../assets/ico/Icos';

import '../styles/components/KekwPlayer.scss';
import { useInView } from 'react-intersection-observer';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { LoadingImage } from './GeneralComponents';

type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';

const KekwPlayer: NextPage<{
  title: ITitle,
  dubs: IDubber[]
}> = ({ title, dubs }) => {
  // Player data
  const [volume, setVolume] = useState(50)
  const [ep, setEp] = useState(1);
  const [dub, setDub] = useState<ITitleEpisodesDub>()
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [duration, setDuration] = useState(1)
  const [videoMoment, setVideoMoment] = useState(0);

  const [hoveredMoment, setHoveredMoment] = useState(0);
  const [previewOffset, setPreviewOffset] = useState(0);

  const [isPreviewOld, setIsPreviewOld] = useState(false);
  const [isVideoProcessed, setIsVideoProcessed] = useState(false);

  // Player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)

  // Video states
  const [videoSrc, setVideoSrc] = useState('');
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Refs
  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)

  // System
  const [inViewRef, inView, entry] = useInView()



  // Effects
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
      setVolume(video.volume);
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

  //* Handle video buffering
  useEffect(() => {
    const video = videoRef.current;

    if (!duration || !videoMoment || !video) return;

    video.addEventListener('timeupdate', handler)
    function handler() {
      const video = videoRef.current;

      if (!video) return;

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

  //* Change video src
  useEffect(() => {
    if (!dub) return;

    const epData = dub.eps.find(el => el.order === ep);
    setVideoSrc(epData?.source[quality])
  }, [quality, dub, ep])

  //* Check if episode is last
  useEffect(() => {
    if (!dub) return;

    const nextEp = dub.eps.find(el => el.order === ep);

    changePreivewFormat(dub)

    if (!nextEp) {
      setIsLastEpisode(true)
    }
  }, [ep, dub])

  useEffect(() => {
    console.log(previewOffset)
  }, [previewOffset])


  //* Handlers
  /** Change preview format */
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
   * @param synthetic Defines if function called by user or not. If syntehic set to true, function will only update ranges & preview
  */
  function changeMoment(val: number, synthetic?: boolean) {
    const progress = progressRef.current;
    const video = videoRef.current;
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement

    if (!progress || !video || !timeline) return

    if (!synthetic) {
      video.currentTime = val;
    }

    setVideoMoment(val);
    moveProgress(val);

    movePreview(val / duration * timeline.offsetWidth);
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
    if (!dub) return
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


  return (
    // In view
    <div className='w-full h-full' ref={inViewRef}>
      {/* Wrapper */}
      <div className='w-full h-full flex flex-col justify-between bg-black relative z-[5]' ref={playerRef}>
        {/* Menu */}
        <Menu ep={ep} setEp={setEp} dub={dub!} dubs={title.dubs!} dubbers={dubs} isLastEpisode={isLastEpisode} setDub={setDub} />

        {/* Bottom */}
        <div className='flex justify-between gap-[24px] relative z-[10] bg-dark/[.1] backdrop-blur-[32px] px-[24px] py-[16px]'>
          <div className='flex items-center gap-[16px]'>
            {/* Play/Pause */}
            <Play isPlaying={isPlaying} videoRef={videoRef} />

            {/* Volume */}
            <Volume volume={volume} isMuted={isMuted} videoRef={videoRef} />
          </div>

          {/* Range */}
          <Timeline duration={duration} moment={videoMoment} changeMoment={changeMoment} loadedRef={loadedRef} progressRef={progressRef} hoveredMoment={hoveredMoment} previewRef={previewRef} isPreviewsOld={isPreviewOld} />

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

// const Component: NextPage = (props) => {
//   return (
//     <>

//     </>
//   );
// }

const Menu: NextPage<{
  ep: number,
  setEp: (state: number) => void,
  dub: ITitleEpisodesDub,
  setDub: (state: ITitleEpisodesDub) => void,
  dubs: ITitleEpisodesDub[],
  dubbers: IDubber[],
  isLastEpisode: boolean
}> = ({ ep, setEp, dub, dubbers, dubs, isLastEpisode, setDub }) => {
  function nextEpisode() {
    if (!isLastEpisode) {
      setEp(ep += 1)
    }
  }

  return (
    <div className='relative z-[10] px-[24px] py-[16px] flex gap-[4px]'>
      <button className='px-[16px] py-[8px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple'>
        <IcoNewPlayerList width={40} height={40} />
      </button>

      <div className='bg-dark flex flex-col justify-center gap-[2px] rounded-[2px] px-[16px]'>
        <p className='text-white font-bold text-center'>{ep <= 9 ? `0${ep}` : ep}</p>
        <p className='text-white text-[12px] font-extralight text-center'>{dub ? dubbers.find(el => el.id === dub.id)!.name : '...'}</p>
      </div>

      <button className='px-[16px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => nextEpisode()}>
        <IcoNewPlayerNext width={40} height={40} className={`kp-menu_nextBtn ${isLastEpisode ? 'kp-menu_nextBtn--lastEpisode' : ''}`} />
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
      <IcoNewPlay width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] ${isPlaying ? 'opacity-0' : 'opacity-100'}`} />
      <IcoNewPlayerPause width={60} height={60} className={`duration-200 absolute top-[4px] left-[4px] ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />
    </button>
  );
}

const Volume: NextPage<{
  volume: number,
  isMuted: boolean,
  videoRef: RefObject<HTMLVideoElement>
}> = ({ isMuted, videoRef, volume }) => {
  function changeMuted() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.muted = !video.muted;
  }

  function getTitle() {
    return isMuted ? 'Увімкнути звук (m)' : 'Вимкнути звук (m)'
  }

  return (
    <div className='relative flex items-center gap-[8px]'>
      <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => changeMuted()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
        <IcoNewPlayerVolMin width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${volume < 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolNormal width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${volume >= 30 && !isMuted ? 'opacity-100' : ''}`} />
        <IcoNewPlayerVolMuted width={40} height={40} className={`duration-200 opacity-0 absolute top-[4px] left-[4px] ${isMuted ? 'opacity-100' : ''}`} />
      </button>
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
  isPreviewsOld: boolean
}> = ({ duration, moment, loadedRef, progressRef, hoveredMoment, previewRef, isPreviewsOld, changeMoment }) => {
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
      <div className={`flex flex-col gap-[4px] items-center absolute bottom-[90%] left-0 ${isPreviewsOld ? 'w-[160px]' : 'w-[240px]'}`} id='kekwplayer-preview' ref={previewRef}>
        <img src="" alt="..." className={isPreviewsOld ? 'w-[160px] h-[120px]' : 'w-[240px] h-[135px]'} />
        <p className='text-white'>{secondsToReadable(hoveredMoment).pretty}</p>
      </div>
    </div>
  );
}

const Settings: NextPage = (props) => {
  const [menuOpened, setMenuOpened] = useState(true);

  function toggleMenu() {
    setMenuOpened(!menuOpened)
  }

  function getTitle() {
    return menuOpened ? 'Закрити налаштування' : 'Відкрити налаштування'
  }

  return (
    <div className='relative'>
      <button className='relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]' onClick={() => toggleMenu()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
        <IcoNewSettings width={40} height={40} className={`absolute left-[4px] top-[4px] duration-200 ${menuOpened ? 'rotate-45' : 'rotate-0'}`} />
      </button>
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