'use client'

import next, { NextPage } from 'next';
import { useState, useEffect, useRef, RefObject, memo } from 'react';
import axios from 'axios';
import * as loader from '@uiball/loaders';
import { Range } from 'react-range';
import { getImageSize } from 'react-image-size'
import * as UMenu from 'uvc-menu';

import { ITitle, ITitleEpisodeDubbed, ITitleEpisodeMeta, ITitleEpisodesDub } from '../interfaces/ITitle';
import { IDubber } from '../interfaces/IDubber';
import { IcoNewPlayerFullEnter, IcoNewPlayerFullExit, IcoNewPlayerList, IcoNewPlayerNext, IcoNewPlayerPause, IcoNewPlayerPiPEnter, IcoNewPlayerPiPExit, IcoNewPlayerQuality, IcoNewPlayerSubs, IcoNewPlayerVolMin, IcoNewPlayerVolMuted, IcoNewPlayerVolNormal } from '../assets/ico/new/player';
import { IcoArrow, IcoPlay, IcoPlayerCenter, IcoPlayerStretch, IcoServerUnavailable, IcoSettings, IcoSpeed } from '../assets/ico/Icos';

import { useInView } from 'react-intersection-observer';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { LoadingImage } from './GeneralComponents';
import { timestampToDate, wordDeclination } from './handlers';
import { useIdleTimer } from 'react-idle-timer';
import { devMode } from '../config';
import { clearTimeout } from 'timers';




import '../styles/components/KekwPlayer.scss';
import 'uvc-menu/css';



type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';
type TEndScreen = 'clear' | 'epEnded' | 'titleEnded' | 'lastEp';
type TStage = 'setup' | 'operational'

interface IKekwPlayerLocalDataItem {
  id: string,
  dub: string,
  ep: number,
  moment: number
}

//! SET PROPS DIRECTRLY TO VIDEO, STATES USED ONLY TO OBSERVE 
const KekwPlayer: NextPage<{
  title: ITitle,
  dubs: IDubber[],
  /** Player will change this state with current dubber */
  setOutDubber?: (state: IDubber) => void
  /** Player will change this state with current episode */
  setOutEp?: (state: number) => void
}> = ({ title, dubs, setOutDubber, setOutEp }) => {
  const [stage, setStage] = useState<TStage>('setup')



  // Player data
  const [volume, setVolume] = useState(50)
  const [ep, setEp] = useState(1);
  const [dub, setDub] = useState<ITitleEpisodesDub>()
  const [duration, setDuration] = useState(1)
  const [videoMoment, setVideoMoment] = useState(0);
  const [hoveredMoment, setHoveredMoment] = useState(0);
  const [endScreen, setEndScreen] = useState<TEndScreen>('clear')
  const [localData, setLocalData] = useState<IKekwPlayerLocalDataItem>()

  // Settings states
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [speed, setSpeed] = useState(1)
  const [subs, setSubs] = useState() // TODO Subs system
  const [stretch, setStretch] = useState(false)

  const [isPreviewOld, setIsPreviewOld] = useState(false);
  const [isVideoProcessed, setIsVideoProcessed] = useState(true); // Specify if video procesed by the server (qualities & frames)

  // Player states
  const [isCoverVisible, setIsCoverVisible] = useState(false) //! TMP, must be TRUE
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)
  const [isTimeToEndScreen, setIsTimeToEndScreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [isContinueMenuOpen, setIsContinueMenuOpen] = useState(false)

  // Video states
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

  // Idle timer
  // useIdleTimer({
  //   timeout: 3000,
  //   throttle: 500,
  //   onIdle: () => setIsIdle(true),
  //   onAction: () => setIsIdle(false)
  // })

  //! -------------- DEFAULT EFFECTS --------------
  //* Player vitals
  useEffect(() => {
    // Define if client is mobile
    if (window.innerWidth <= 600 || window.innerHeight <= 400) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])

  //* Handle video loading
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.addEventListener('loadstart', () => {
      setIsVideoLoading(true)
    })

    video.addEventListener('loadeddata', () => {
      setIsVideoLoading(false)
    })
  }, [])



  //! -------------- SETUP STAGE --------------
  // Setup with user progress or default
  useEffect(() => {
    if (stage !== 'setup') return;

    const video = videoRef.current;

    if (window === undefined || !video) return;

    //! TMP
    const progress = getPlayerProgress()

    if (progress) {
      // Progress is present, purpose it to init with

      if (setOutDubber) setOutDubber(dubs.find(el => el.id === progress.dub)!);
      if (setOutEp) setOutEp(progress.ep);

      setLocalData(progress);
      setIsContinueMenuOpen(true);
    } else {
      // Progress is missing, set default data

      loadDefault();
    }
  }, [stage])



  /** Load user progress */
  async function loadProgress() {
    const progress = getPlayerProgress();

    // Load default if progress missing
    if (!progress) {
      return loadDefault();
    }

    const dub = title.dubs!.find(el => el.id === progress.dub);
    const ep = dub?.eps.find(el => el.order === progress.ep)

    if (!dub || !ep) {
      return loadDefault();
    }

    await changeDub(dub, ep.order, progress.moment);
    setIsContinueMenuOpen(false);
    setStage('operational')
  }

  /** Delete title from user progress & proceed */
  async function passProgress() {
    await loadDefault();
    deletePlayerProgress();
    setIsContinueMenuOpen(false);
  }

  /** Setup with default player states */
  async function loadDefault() {
    const dub = title.dubs![0];
    const ep = dub.eps[0].order;

    await changeDub(dub, ep, 0);
    setStage('operational')
  }



  //! -------------- OPERATIONAL STAGE --------------
  useEffect(() => {
    if (stage !== 'operational') return;

    const video = videoRef.current;

    if (!video) return;
  }, [stage])

  //* Handle video events
  useEffect(() => {
    /*
    - Loading
    - Playback rate
    - Timeupdate
    - Pausing by clicking
    - Playing
    - Volume changing
    - Fullscreen
    - PiP
    - Full timeline control (moving preview box, handle dragging)
  */

    if (stage !== 'operational') return;

    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) return;

    // Handle loading 
    video.addEventListener('waiting', () => {
      setIsVideoLoading(true)
    })

    video.addEventListener('playing', () => {
      setIsVideoLoading(false)
    })

    // Handle playback rate
    video.addEventListener('ratechange', () => {
      setSpeed(video.playbackRate)
    })

    // Hide context menu
    player.addEventListener('contextmenu', e => {
      e.preventDefault();
    })

    // Handle playback progress & buffering
    video.addEventListener('timeupdate', () => {
      changeMoment(video.currentTime, true)

      //* Buffering
      const loaded = loadedRef.current;
      const buffered = video.buffered;

      if (buffered.length !== 0 && loaded) {
        for (let i = 0; i < buffered.length; i++) {
          const start = buffered.start(i);
          const end = buffered.end(i);

          if (videoMoment >= start && videoMoment <= end) {
            const offset = (end / duration) * 100

            loaded.style.width = `${offset}%`
          }
        }
      };
    })

    // Handle pausing by clicking
    video.addEventListener('click', () => {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

      if (video.paused) {
        video.play().catch(e => null)
      } else {
        video.pause();
      }
    })

    // Handle isPlaying state
    video.addEventListener('play', () => {
      setIsPlaying(true)
    })

    video.addEventListener('playing', () => {
      setIsPlaying(true)
    })

    video.addEventListener('pause', () => {
      setIsPlaying(false)
    })

    // Handle volume. Mute if volume equal 0, unmute either
    video.addEventListener('volumechange', () => {
      if (video.volume === 0 || video.muted) {
        setIsMuted(true);
      } else {
        setIsMuted(false);
      }

      setVolume(Math.floor(video.volume * 100));
    });

    // Handle fullscreen
    player.addEventListener('fullscreenchange', () => {
      setIsFullscreen(document.fullscreenElement ? true : false)
    })

    // Handle PiP
    video.addEventListener('leavepictureinpicture', () => {
      setIsPip(false)
    })

    video.addEventListener('enterpictureinpicture', () => {
      setIsPip(true)
    })

    // Handle progressbar actions
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement
    const preview = document.querySelector('#kekwplayer-preview') as HTMLDivElement

    if (!timeline || !preview) return;

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

    // Move preview box
    timeline.addEventListener('pointermove', e => movePreview(e.offsetX))



    function timelineTouchStartHandler() {
      preview.style.opacity = '1';
      preview.style.visibility = 'visible';
    }

    function timelineTouchEndHandler() {
      preview.style.opacity = '0';
      preview.style.visibility = 'invisible';
    }
  }, [stage])

  //* Handle clicking (multi/skip, entering via dbclick)
  useEffect(() => {
    if (stage !== 'operational') return;

    const video = videoRef.current;
    const player = playerRef.current;
    const prevSkip = mobilePrevSkipRef.current;
    const nextSkip = mobileNextSkipRef.current;
    const skipWrapper = mobileSkipWrapper.current;

    if (!video || !player || !prevSkip || !nextSkip || !skipWrapper) return;

    // Enter fullscreen
    video.addEventListener('dblclick', videoDbClickHandler)

    nextSkip.addEventListener('dblclick', () => enterMultiskip(false))
    prevSkip.addEventListener('dblclick', () => enterMultiskip(true))

    nextSkip.addEventListener('click', () => skipMoment(false))
    prevSkip.addEventListener('click', () => skipMoment(true))

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
  }, [stage])

  //* Handle cursor visibility in idle/active modes
  useEffect(() => {
    if (stage !== 'operational') return;

    // Hide cursor in fullscreen mode
    if (isIdle && isFullscreen) {
      document.querySelector('body')!.style.cursor = 'none';
    } else {
      document.querySelector('body')!.style.cursor = 'auto';
    }
  }, [stage, isIdle])

  // //* Handle keyboard
  useEffect(() => {
    if (stage !== 'operational') return;

    // Keyboard events must work only in fullscreen mode
    if (isFullscreen) {
      document.addEventListener('keydown', handleKeyboard)
    }

    function handleKeyboard(e: KeyboardEvent) {
      const video = videoRef.current;
      const player = playerRef.current;

      if (!video || !player) return;

      const key = e.code;

      switch (key) {
        // Play/pause
        case 'Space': {
          if (!video.paused) {
            video.pause()
          } else {
            video.play().catch(e => null)
          }

          e.preventDefault();
          break;
        }

        // Play/pause
        case 'KeyK': {
          if (!video.paused) {
            video.pause()
          } else {
            video.play().catch(e => null)
          }

          break;
        }

        // Skip prev 10s
        case 'KeyJ': {
          let curr = video.currentTime;
          curr -= 10;

          if (curr >= 0) {
            changeMoment(video.currentTime - 10)
          } else {
            changeMoment(0)
          }

          break;
        }

        // Skip prev 5s
        case 'ArrowLeft': {
          let curr = video.currentTime;
          curr -= 5;

          if (curr >= 0) {
            changeMoment(video.currentTime - 5)
          } else {
            changeMoment(0)
          }

          break;
        }

        // Skip next 10s
        case 'KeyL': {
          let curr = video.currentTime;
          curr += 10;

          if (curr >= duration) {
            changeMoment(video.duration)
          } else {
            changeMoment(video.currentTime + 10)
          }

          break;
        }

        // Skip next 5s
        case 'ArrowRight': {
          let curr = video.currentTime;
          curr += 5;

          if (curr >= video.duration) {
            changeMoment(video.duration)
          } else {
            changeMoment(video.currentTime + 5)
          }

          break;
        }

        // Fullscreen
        case 'KeyF': {
          if (document.fullscreenElement) {
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
      document.removeEventListener('keydown', handleKeyboard)
    }
  }, [stage, isFullscreen])

  //* Handle quality changing
  useEffect(() => {
    if (stage !== 'operational' || !dub) return;

    changeVideoSrc(dub.eps.find(el => el.order === ep)!.source[quality], videoMoment)
  }, [stage, quality])

  //* Handle video buffering & end screens
  useEffect(() => {
    const video = videoRef.current;

    if (!duration || !videoMoment || !video) return;

    // Hand;e buffering
    video.addEventListener('timeupdate', timeupdateHandler)

    function timeupdateHandler() {
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

    // Handle end screens
    if (duration > 10 && videoMoment && dub) {
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
    };

    return () => {
      video.removeEventListener('timeupdate', timeupdateHandler)
    }
  }, [duration, videoMoment])



  //* -------------- HANDLERS --------------
  /** Get user progress */
  function getPlayerProgress(): IKekwPlayerLocalDataItem | null {
    const data = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]

    if (!data) return null;

    const currentTitle = data.find(el => el.id === title.id)

    if (!currentTitle) return null;

    return currentTitle
  }

  /** Update user progress */
  function updatePlayerProgress(payload: IKekwPlayerLocalDataItem) {
    let items = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[];
    items = items.filter(el => el.id !== payload.id);
    items.push(payload)

    localStorage.setItem('kekwplayer_data', JSON.stringify(items))
  }

  /** Delete user progress */
  function deletePlayerProgress() {
    const data = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]

    if (!data) return;

    if (devMode) console.log(`[Player]: Progress deleted (nope)`);
    // updatePlayerProgress(data.filter(el => el.id !== title.id))
  }

  /** Change dub, ep & moment
   * Will re-define previews format & change video src
   * Will set default dub & ep if they are not found
   * 
   * @default moment 0
   */
  async function changeDub(dub: ITitleEpisodesDub, ep: number, moment?: number) {
    // Set optional vars
    moment = moment || 0;

    // Set first dub in array if id not found
    if (!title.dubs?.find(el => el.id === dub.id)) {
      dub = title.dubs![0]
    }

    if (!dub.eps.find(el => el.order === ep)) {
      ep = dub.eps[0].order
    }

    setDub(dub);
    setEp(ep);

    await Promise.all([
      await definePreviewFormat(dub.eps.find(el => el.order === ep)!.framesURL![0]),
      await changeVideoSrc(dub.eps.find(el => el.order === ep)!.source[quality], moment),
    ])

    // Set out states
    if (setOutDubber) setOutDubber(dubs.find(el => el.id === dub.id)!);
    if (setOutEp) setOutEp(ep);

    // Check if episode is last
    const nextEp = Number(ep) + 1;

    if (!dub.eps.find(el => el.order === nextEp)) {
      setIsLastEpisode(true)
    } else {
      setIsLastEpisode(false)
    }

    // Reset progress moment
    updatePlayerProgress({
      dub: dub.id,
      ep,
      id: title.id,
      moment
    })
  }

  /** Change video src & moment */
  async function changeVideoSrc(src: string, moment?: number) {
    // Set optional vars
    moment = moment || 0;

    const video = videoRef.current;

    if (!video) return;

    video.setAttribute('src', src);

    await new Promise((res, rej) => {
      video.addEventListener('loadedmetadata', () => {
        res(true)
        setDuration(video.duration)
      })
    })

    changeMoment(moment);

    try {
      await video.play()
    } catch (e) {

    }
  }

  /** Change video moment
   * Will set moment equal duration if moment greater that it
   * Will update user progress after 5s of progress
   * 
   * @param synthetic Specifies if function called by user interaction. In synthetic action preview box will not move & new moment will not be set
   */
  function changeMoment(moment: number, synthetic?: boolean) {
    const video = videoRef.current;
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement
    const progress = progressRef.current;


    if (!video || !progress || !timeline) return;
    const duration = video.duration;

    // Validate moment
    if (moment > duration) {
      moment = duration;
    }

    if (!synthetic) {
      video.currentTime = moment;
      movePreview(moment / duration * timeline.offsetWidth)
    }

    setVideoMoment(moment);
    moveProgress(moment, duration);

    // Save progress
    if (moment > 5) {
      updatePlayerProgress({
        dub: dub?.id || '',
        ep,
        id: title.id,
        moment
      })
    }
  }

  /** Move video progress (controlled by changeMoment) */
  function moveProgress(moment: number, duration: number) {
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

    img.setAttribute('src', frame)
    img.style.objectPosition = `-${offset}px`
  }

  /** Defines previews format from 0 index frame of current dub (height 120 = old, 135 = new) */
  async function definePreviewFormat(frameURL: string) {
    try {
      const dimensions = await getImageSize(frameURL);

      setIsPreviewOld(dimensions.height === 120 ? true : false)
      setIsVideoProcessed(true)
    } catch (e) {
      console.error(e)
    }
  }



  return (
    // In view
    <div className='w-full h-full relative overflow-hidden' id="player">
      {/* Cover */}
      <button className={`absolute w-full h-full top-0 left-0 z-[7] bg-darkGrey duration-200 flex justify-center items-center ${isCoverVisible ? '' : 'opacity-0 invisible'}`} onClick={() => setIsCoverVisible(false)}>
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

        {/* Continue wrapper */}
        <div className={`w-full h-full z-[15] absolute top-0 left-0 flex justify-center items-center duration-200 bg-dark/[.5] backdrop-blur-[32px] ${isContinueMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible touch-none pointer-events-none'}`}>
          <div className='w-[800px] mx-[24px] rounded-[4px] bg-dark flex flex-col items-center gap-[24px] py-[40px] px-[24px]'>
            <div className='flex flex-col gap-[16px]'>
              <p className='text-white text-[32px] font-bold text-center max-[680px]:text-[24px]'>Продовжити перегляд</p>
              <p className='text-white text-[24px] text-center max-[680px]:text-[16px]'>{dubs.find(el => el.id === localData?.dub)?.name || 'Команда невідома'}</p>
            </div>

            <div className='flex items-center max-[680px]:flex-col max-[680px]:items-center gap-[32px] w-full bg-darkGrey px-[40px] py-[24px] rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple cursor-pointer' role='button' onClick={() => loadProgress()}>
              <p className='text-white text-[32px] font-bold max-[680px]:text-[24px]'>#{localData?.ep}</p>
              <div className='flex flex-col items-start gap-[8px] w-full'>
                <div className='flex flex-col items-start max-[680px]:items-center gap-[4px] w-full'>
                  <p className='text-white text-[24px] break-ellipsis max-w-[80%]'>{title.epsMeta?.find(el => el.order === localData?.ep)?.names.ukr || `${localData?.ep} епізод`}</p>
                  <p className='text-white font-extralight break-ellipsis max-w-[80%]'>{title.epsMeta?.find(el => el.order === localData?.ep)?.names.eng}</p>
                </div>
              </div>

              <p className='text-white text-[24px]'>{secondsToReadable(localData?.moment || 0).pretty}</p>
            </div>

            <button onClick={() => passProgress()}>
              <p className='text-white font-extralight' onClick={() => console.log('delete local data')}>Почати з початку?</p>
            </button>
          </div>
        </div>

        {/* Menu */}
        <Menu ep={ep} changeDub={changeDub} currentDub={dub!} totalDubs={title.dubs!} dubbers={dubs} isLastEpisode={isLastEpisode} totalEps={title.estimatedEps} isIdle={isIdle} titleId={title.id} />

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

          <video src={''} preload='auto' controlsList='nodownload' className={`w-full h-full ${stretch ? 'object-cover' : ''}`} controls={false} ref={videoRef}></video>
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
    let nextEp = ep;
    nextEp += 1

    const epMeta = title.epsMeta?.find(el => el.order === nextEp);

    setNextEp(nextEp)

    if (epMeta) {
      const parsed = timestampToDate(epMeta.dateOut);

      setEpMeta(epMeta)
      setDate(`${parsed.day} ${parsed.localizedMonth.slice(0, 3)} ${parsed.year}`)
    }
  }, [ep])

  useEffect(() => {
    setRemain(5)

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
      video.play().catch(e => null)
    }, 1000);
  }

  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] mx-[24px] z-[20] gap-[24px] ${isTime && endScreen === 'epEnded' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold max-[680px]:text-[24px]'>Епізод завершено</p>

    <div className='bg-darkGrey px-[40px] py-[16px] flex justify-between items-center max-[680px]:flex-col duration-200 w-full'>
      <div className='flex items-center max-[680px]:flex-col gap-[32px] w-full'>
        <p className='text-white text-[32px] font-bold'>#{nextEp}</p>
        <div className='flex flex-col items-start gap-[8px] w-full'>
          <div className='flex flex-col items-start gap-[4px] w-full'>
            <p className='text-white text-[24px] break-ellipsis max-w-400px max-[680px]:max-w-[260px]'>{epMeta?.names.ukr || 'Наступний епізод'}</p>
            <p className='text-white font-extralight break-ellipsis max-w-300px max-[680px]:max-w-[240px]'>{epMeta?.names.eng}</p>
          </div>

          <p className='text-white font-extralight'>{date}</p>
        </div>
      </div>

      <button className='duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[8px] rounded-[4px]' onClick={() => skipEp()}>
        <IcoNewPlayerNext width={80} height={80} />
      </button>
    </div>

    <p className='text-white text-[24px] font-extralight text-center'>Автоматично через: {remain} {wordDeclination(remain, ['секунду', 'секунди', 'секунд'])}</p>
  </div>
}


//* -------------- LAST EP END SCREEN COMPONENT --------------


const LastEpScreen: NextPage<IEndScreenProps> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center gap-[24px] w-[800px] mx-[24px] z-[7] ${isTime && endScreen === 'lastEp' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] max-[680px]:text-[24px] font-bold'>Епізод завершено</p>
    <p className='text-white text-[24px] text-center max-[680px]:text-[16px] font-extralight'>Це останній епізод в цьому озвученні</p>
  </div>
}


//* -------------- TITLE END SCREEN COMPONENT --------------


const TitleEndScreen: NextPage<IEndScreenProps> = ({ endScreen, isTime }) => {
  return <div className={`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] mx-[24px] gap-[24px] z-[7] ${isTime && endScreen === 'titleEnded' ? 'opacity-100 visible relative' : 'opacity-0 invisible absolute touch-none pointer-events-none'}`}>
    <p className='text-white text-[32px] font-bold max-[680px]:text-[24px]'>Тайтл завершено!</p>

    {/* //TODO */}
    {/* <button className='gradient--primary-border-4 gradient--primary-hover flex gap-[16px] items-center px-[24px] py-[16px]'>
      <p className='text-white text-[24px] font-bold uppercase'>Відмітити як “переглянуто”</p>
    </button> */}

    <p className='text-white text-[16px] font-extralight'>Дякуємо, що обрали animee!</p>
  </div>
}


//* -------------- MENU COMPONENT --------------


interface IMenuProps {
  ep: number,
  changeDub: (dub: ITitleEpisodesDub, ep: number, moment?: number) => void,
  currentDub: ITitleEpisodesDub,
  totalDubs: ITitleEpisodesDub[],
  dubbers: IDubber[]
  isLastEpisode: boolean,
  totalEps: number,
  isIdle: boolean,
  titleId: string
}

const Menu = memo<IMenuProps>(function Menu({ ep, dubbers, currentDub, isLastEpisode, changeDub, totalDubs, totalEps, isIdle, titleId }) {
  const isFirstOpen = useRef(true);

  function nextEpisode() {
    if (!isLastEpisode) {
      let nextEp = ep;
      nextEp += 1;

      changeDub(currentDub, nextEp, 0)

      // Write player data to local storage
      const localData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]
      const localRecord = localData?.find(el => el.id === titleId)

      if (localRecord) {
        localRecord.ep = nextEp;

        localStorage.setItem('kekwplayer_data', JSON.stringify(localData))
      }
    }
  }

  function MenuButton() {
    return <IcoNewPlayerList width={40} height={40} />
  }

  function MenuDubber({ dub, currId }: { dub: ITitleEpisodesDub, currId: string }) {
    let lastEp = 0;

    dub.eps.forEach(el => {
      if (el.order > lastEp) lastEp = el.order;
    })

    function setDub() {
      changeDub(dub, ep, 0)
    }

    return <UMenu.MenuItem className={`px-[8px] py-[4px] duration-200 hover:bg-purple flex justify-between gap-[8px] focus-visible:bg-purple rounded-[2px] w-full cursor-pointer ${dub.id === currId ? 'bg-purple' : ''}`} onClick={() => setDub()}>
      <p className='text-white'>{dubbers.find(el => el.id === dub.id)?.name}</p>

      <div className='flex gap-[4px]'>
        <div className='bg-dark px-[4px] py-[2px] rounded-[2px]'>
          <p className='text-white whitespace-nowrap'>{lastEp} / {totalEps}</p>
        </div>
      </div>
    </UMenu.MenuItem>
  }

  function MenuEpisode({ to }: { to: number }) {
    function setEpisode(to: number) {
      changeDub(currentDub, to, 0)
    }

    return <UMenu.MenuItem className={`px-[16px] py-[4px] duration-200 hover:bg-purple flex justify-center focus-visible:bg-purple rounded-[2px] w-full ${ep === to ? 'bg-purple' : ''} cursor-pointer`} onClick={() => setEpisode(to)}>
      <p className='text-white'>{to}</p>
    </UMenu.MenuItem>
  }

  return (
    <div className={`relative z-[10] px-[24px] py-[16px] flex gap-[4px] duration-200 ${isIdle ? '-translate-y-[100%]' : 'translate-y-0'}`}>
      <UMenu.Menu trigger={<MenuButton />} triggerClassName='px-[16px] py-[8px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple' direction='bottom' align='start'>
        <div className='px-[16px] py-[8px] bg-dark rounded-[2px] flex gap-[8px]'>
          {/* Dubs */}
          <UMenu.MenuList className='max-h-[200px] overflow-y-scroll flex flex-col gap-[4px]'>
            {totalDubs?.map(dub => {
              return <MenuDubber dub={dub} currId={currentDub?.id} key={`dub-${dub.id}`} />
            })}
          </UMenu.MenuList>

          {/* Divider */}
          <span className='w-[1px] h-auto bg-darkGrey block'></span>

          {/* Eps */}
          <UMenu.MenuList className='max-h-[200px] overflow-y-scroll flex flex-col gap-[4px]'>
            {currentDub?.eps.sort((a, b) => a.order - b.order).map(ep => {
              return <MenuEpisode to={ep.order} key={`ep-${ep.order}`} />
            })}
          </UMenu.MenuList>
        </div>
      </UMenu.Menu>

      <div className='bg-dark flex flex-col justify-center gap-[2px] rounded-[2px] px-[16px]' >
        <p className='text-white font-bold text-center'>{ep <= 9 ? `0${ep}` : ep}</p>
        <p className='text-white text-[12px] font-extralight text-center'>{currentDub ? dubbers.find(el => el.id === currentDub.id)!.name : '...'}</p>
      </div>

      <button className={`px-[16px] bg-dark rounded-[2px] duration-200 ${!isLastEpisode && 'hover:bg-purple focus-visible:bg-purple'}`} onClick={() => nextEpisode()} disabled={isLastEpisode}>
        <IcoNewPlayerNext width={40} height={40} className={`kekwplayer-menu_nextBtn ${isLastEpisode ? 'kekwplayer-menu_nextBtn--lastEpisode' : ''}`} />
      </button>
    </div>
  );
})



//* -------------- SETTINGS COMPONENT --------------


type TSettingPage = 'list' | 'quality' | 'speed';

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
  const [page, setPage] = useState<TSettingPage>('list')
  const listsRef = useRef<HTMLDivElement>(null)

  const qualityRef = useRef<HTMLDivElement>(null)
  const speedRef = useRef<HTMLDivElement>(null)

  const menuPx = 8; //! Edit only this var to change menu padding
  const menuPy = 4; //! Edit only this var to change menu padding
  const menuWidth = 260; //! Edit only this var to change menu width

  // Set default placement
  useEffect(() => {
    const menu = document.querySelector('#kp-settings_menu') as HTMLDivElement | undefined
    const lists = listsRef.current;
    const quality = qualityRef.current;
    const speed = speedRef.current;

    if (!lists || !quality || !menu || !speed) return;

    menu.style.width = `${menuWidth}px`
    menu.style.right = `-${menuWidth / 4}px`

    reset()

    lists.style.bottom = `${menuPy}px`
    lists.style.left = `${menuPx}px`
    lists.style.width = `${menuWidth - (menuPx * 2)}px`

    quality.style.bottom = `${menuPy}px`
    quality.style.left = `${menuPx}px`
    quality.style.width = `${menuWidth - (menuPx * 2)}px`

    speed.style.bottom = `${menuPy}px`
    speed.style.left = `${menuPx}px`
    speed.style.width = `${menuWidth - (menuPx * 2)}px`
  }, [])

  // Change page
  useEffect(() => {
    const menu = document.querySelector('#kp-settings_menu') as HTMLDivElement | undefined
    const lists = listsRef.current;
    const quality = qualityRef.current;
    const speed = speedRef.current;

    if (!menu || !lists || !quality || !speed) return;

    // Reset
    reset()

    if (page === 'list') {
      lists.style.transform = 'translateX(0)';
      lists.style.opacity = '1';
      lists.style.visibility = 'visible';

      menu.style.height = `${lists.offsetHeight + (menuPy * 2)}px`
    } else if (page === 'quality') {
      quality.style.transform = 'translateX(0)';
      quality.style.opacity = '1';
      quality.style.visibility = 'visible';

      menu.style.height = `${quality.offsetHeight + (menuPy * 2)}px`;
    } else if (page === 'speed') {
      speed.style.transform = 'translateX(0)';
      speed.style.opacity = '1';
      speed.style.visibility = 'visible';

      menu.style.height = `${speed.offsetHeight + (menuPy * 2)}px`;
    }
  }, [page])

  /** Reset menus position */
  function reset() {
    const menu = document.querySelector('#kp-settings_menu') as HTMLDivElement | undefined
    const lists = listsRef.current;
    const quality = qualityRef.current;
    const speed = speedRef.current;

    if (!menu || !lists || !quality || !speed) return;

    lists.style.transform = `translateX(-${menuWidth + 24}px)`;
    lists.style.opacity = '0';
    lists.style.visibility = 'hidden';

    quality.style.transform = `translateX(${menuWidth + 24}px)`;
    quality.style.opacity = '0';
    quality.style.visibility = 'hidden';

    speed.style.transform = `translateX(${menuWidth + 24}px)`;
    speed.style.opacity = '0';
    speed.style.visibility = 'hidden';
  }

  return (
    <div className='relative max-[460px]:hidden'>
      <UMenu.Menu trigger={<MenuButton />} direction='top' align='end' className={`px-[${menuPx}px] py-[${menuPy}px] bg-dark rounded-[2px] overflow-hidden`} id='kp-settings_menu'>
        {/* List */}
        <div ref={listsRef} className={`absolute bottom-0 left-0 duration-200 max-h-[200px] overflow-y-scroll`}>
          <UMenu.MenuList className={`flex flex-col gap-[4px]`}>
            <QualityButton />
            <SpeedButton />
            <StretchButton />
          </UMenu.MenuList>
        </div>

        {/* Quality menu */}
        <div className={`absolute bottom-0 left-0 duration-200 max-h-[200px] overflow-y-scroll`} ref={qualityRef}>
          <QualityMenu />
        </div>

        {/* Speed menu */}
        <div className={`absolute bottom-0 left-0 duration-200 max-h-[200px] overflow-y-scroll`} ref={speedRef}>
          <SpeedMenu />
        </div>
      </UMenu.Menu>
    </div>
  )

  function MenuButton() {
    return <div className={'relative w-[48px] h-[48px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[4px]'} tabIndex={0} aria-label={'Налаштування'} title={'Налаштування'}>
      <IcoSettings width={40} height={40} className={`absolute left-[4px] top-[4px] duration-200`} />
    </div>
  }

  function ReturnButton({ label }: { label: string }) {
    return <button className={`flex items-center gap-[16px] w-full duration-200 hover:bg-darkGrey focus-visible:bg-darkGrey`} onClick={() => setPage('list')}>
      <IcoArrow width={24} height={24} className='rotate-[90deg]' />
      <p className='text-white w-full'>{label}</p>
    </button>
  }

  function setSpeed(to: number) {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = to;
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
    return <UMenu.MenuItem onClick={e => e.stopPropagation()}>
      <button className={`flex items-center justify-between w-full bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setPage('quality')}>
        <div className='flex items-center gap-[16px]'>
          <IcoNewPlayerQuality width={24} height={24} />
          <p className='text-white'>Якість</p>
        </div>

        <div>
          <p className='text-white'>{parseQuality(quality)}</p>
        </div>
      </button>
    </UMenu.MenuItem>
  }

  function QualityMenu() {
    return <UMenu.MenuItem onClick={(e) => e.stopPropagation()}>
      <div className={`flex flex-col gap-[16px]`}>
        <ReturnButton label='Якість' />
        <div className='flex flex-col gap-[4px]'>
          {epData?.source.q2k && <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q2k' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q1080')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>2K</p>
          </button>}

          {epData?.source.q1080 && <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q1080' ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setQuality('q1080')}>
            <p className='text-white'>1080</p>
          </button>}

          {epData?.source.q720 && <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q720' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q720')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>720</p>
          </button>}

          {epData?.source.q480 && <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q480' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q480')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>480</p>
          </button>}

          {epData?.source.q240 && <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${quality === 'q240' ? 'bg-purple' : ''} ${isVideoProcessed ? 'hover:bg-purple focus-visible:bg-purple' : ''}`} onClick={() => setQuality('q240')} disabled={!isVideoProcessed}>
            <p className={`text-white ${isVideoProcessed ? '' : 'text-lightGrey'}`}>240</p>
          </button>}
        </div>
      </div>
    </UMenu.MenuItem>
  }

  function SpeedButton() {
    return <UMenu.MenuItem onClick={e => e.stopPropagation()}>
      <button className={`flex items-center justify-between w-full bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setPage('speed')}>
        <div className='flex items-center gap-[16px]'>
          <IcoSpeed width={24} height={24} />
          <p className='text-white'>Швидкість</p>
        </div>

        <div>
          <p className='text-white'>{speed}х</p>
        </div>
      </button>
    </UMenu.MenuItem>
  }

  function SpeedMenu() {
    return <UMenu.MenuItem onClick={(e) => e.stopPropagation()}>
      <div className={`flex flex-col gap-[16px]`}>
        <ReturnButton label='Швидкість' />
        <div className='flex flex-col gap-[4px]'>
          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.25 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.25)}>
            <p className={`text-white`}>0.25x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.5 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.5)}>
            <p className={`text-white`}>0.5x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 0.75 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(0.75)}>
            <p className={`text-white`}>0.75x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1)}>
            <p className={`text-white`}>1x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.25 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.25)}>
            <p className={`text-white`}>1.25x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.5 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.5)}>
            <p className={`text-white`}>1.5x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 1.75 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(1.75)}>
            <p className={`text-white`}>1.75x</p>
          </button>

          <button className={`w-full bg-darkGrey px-[16px] py-[4px] rounded-[2px] duration-200 ${speed === 2 ? 'bg-purple' : ''} hover:bg-purple focus-visible:bg-purple`} onClick={() => setSpeed(2)}>
            <p className={`text-white`}>2x</p>
          </button>
        </div>
      </div>
    </UMenu.MenuItem>
  }

  function StretchButton() {
    return <UMenu.MenuItem onClick={e => e.stopPropagation()}>
      <button className={`flex items-center gap-[16px] w-full bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple px-[8px] py-[4px] rounded-[2px]`} onClick={() => setStretch(!stretch)}>
        <div className='relative w-[24px] h-[24px]'>
          <IcoPlayerStretch width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-0 invisible' : 'opacity-100 visible'}`} />
          <IcoPlayerCenter width={24} height={24} className={`absolute top-0 left-0 duration-200 ${stretch ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
        </div>

        <p className='text-white'>{stretch ? 'Центрувати' : 'Розтягнути'} відео</p>
      </button>
    </UMenu.MenuItem>
  }
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
      video.play().catch(e => null);
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

  //* Handle volume hover
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

  //* Handle volume progress
  useEffect(() => {
    const ref = volumeRef.current;
    if (!volume) return;

    ref!.style.width = `${volume}px`
  }, [volume])



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
      className={`w-[16px] h-[16px] gradient--primary rounded-[32px]`}
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
          <div className='w-[20px] h-full absolute top-0 left-0 touch-none pointer-events-none z-[11] gradient--secondary rounded-[6px]' ref={volumeRef}></div>
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
      className={`w-[16px] h-[16px] gradient--primary rounded-[32px]`}
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
          <div className='h-full absolute top-0 left-0 touch-none pointer-events-none z-[11] gradient--secondary rounded-[6px]' ref={progressRef}></div>

          {/* Downloading progress */}
          <div className='h-full absolute top-0 touch-none pointer-events-none left-0 z-[10] bg-white/[.3] rounded-[6px]' ref={loadedRef}></div>
        </div>

        {/* Time */}
        <div className='w-full flex justify-between absolute bottom-[4px] max-[460px]:-bottom-[8px] left-0'>
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