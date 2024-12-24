'use client'

import './styles.scss';

import { createContext, RefObject, useEffect, useRef, useState } from 'react';
import * as loader from '@uiball/loaders';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { useIdleTimer } from 'react-idle-timer';
import { getImageSize } from 'react-image-size'

import { useAppSelector } from '../../hooks/redux';
import { IDubber } from '../../interfaces/IDubber';
import { ITitle, ITitleEpisode } from '../../interfaces/ITitle';
import { cn } from '../Components';
import { $api } from '../http';

import { KekwPlayerControls } from './Controls';
import { KekwPlayerFullscreen } from './Fullscreen';
import { KekwPlayerMenu } from './Menu';
import { KekwPlayerPiP } from './PiP';
import { KekwPlayerPlay } from './Play';
import * as PlayerScreen from './Screens';
import { KekwPlayerSettings } from './Settings';
import { KekwPlayerTimeline } from './Timeline';
import { KekwPlayerVolume } from './Volume';



type TVideoQuality = 'q240' | 'q480' | 'q720' | 'q1080' | 'q2k' | 'q4k';
type TStage = 'setup' | 'operational'

export type TKekwPlayerScreen = 'none'
  | 'progress_continue'
  | 'episode_end'
  | 'episode_last'
  | 'title_end'

export interface IKekwPlayerLocalDataItem {
  id: string,
  dub: string,
  ep: number,
  moment: number
}

interface IKekwPlayerProps {
  title: ITitle
  dubbers: IDubber[]

  setOutDubber?: (state: IDubber) => void
  setOutEp?: (state: number) => void
}



export interface IKekwPlayerContextProps {
  //* CONSTS
  title: ITitle
  dubbers: IDubber[]
  duration: number
  isMobile: boolean

  //* POSSIBLE UNDEFINED CONSTS
  watchProgress?: IKekwPlayerLocalDataItem

  //* VIDEO STATES
  isMuted: boolean
  isPlaying: boolean
  isFullscreen: boolean
  isPiP: boolean
  isPreviewOld: boolean
  isVideoProcessed: boolean

  //* REFS
  videoRef: RefObject<HTMLVideoElement>
  playerRef: RefObject<HTMLDivElement>

  //* HANDLERS
  loadProgress: () => void
  passProgress: () => void

  //* STATES
  currentScreen: TKekwPlayerScreen
  setCurrentScreen: (val: TKekwPlayerScreen) => void

  episode: ITitleEpisode
  /** DO NOT RECOMMEND. USE changeEpsiode INSTEAD
   * set new episode directly into state
   */
  setEpisode: (episode: ITitleEpisode) => void
  changeEpisode: (episode: ITitleEpisode, moment?: number, stopPlayback?: boolean) => void

  volume: number
  setVolume: (val: number) => void

  moment: number
  /** DO NOT RECOMMEND. USE changeMoment INSTEAD
   * set new moment directly into state
   */
  setMoment: (val: number) => void
  changeMoment: (val: number, synthetic?: boolean) => void
}

export const KekwPlayerContext = createContext<Partial<IKekwPlayerContextProps>>({})

/**
 * Z indexes table
 * 1 - video section
 * 2 - play/pause & controls handlers
 * 10 - top & bottom menus 
 * 20 - top-level screens
 */



//! SET PROPS DIRECTRLY TO VIDEO, STATES USED ONLY TO OBSERVE 
const KekwPlayer: NextPage<IKekwPlayerProps> = ({ title, dubbers, setOutDubber, setOutEp }) => {
  const [stage, setStage] = useState<TStage>('setup')
  const user = useAppSelector(state => state.user);



  // Player data
  const [volume, setVolume] = useState<number>(100) // 0 - 100
  const [episode, setEpisode] = useState<ITitleEpisode>(title.episodes[0])
  const [duration, setDuration] = useState<number>(1)
  const [moment, setMoment] = useState<number>(0);
  const [hoveredMoment, setHoveredMoment] = useState<number>(0);
  const [currentScreen, setCurrentScreen] = useState<TKekwPlayerScreen>('none')
  const [localData, setLocalData] = useState<IKekwPlayerLocalDataItem>()
  const [isMobile, setIsMobile] = useState(true);
  const [isControlsHiddenUnderScreen, setIsControlsHiddenUnderScreen] = useState<boolean>(true) // Define if player timeline and menu will be hidden under screeen

  // Settings states
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [speed, setSpeed] = useState(1)
  const [stretch, setStretch] = useState(false)

  // Player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)
  const [isIdle, setIsIdle] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPreviewOld, setIsPreviewOld] = useState(false); // Specify video previews dimensions
  const [isVideoProcessed, setIsVideoProcessed] = useState(false); // Specify if video procesed by the server (qualities & frames)

  // Refs
  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const viewtimeRef = useRef(0)

  const onPausePatchTimeoutRef = useRef<NodeJS.Timeout>()

  const titleMaxEpisode = useRef(0)

  // Idle timer
  useIdleTimer({
    timeout: 3000,
    throttle: 500,
    onIdle: () => setIsIdle(true),
    onAction: () => setIsIdle(false)
  })



  const KekwPlayerContextPayload: IKekwPlayerContextProps = {
    title,
    dubbers,
    duration,
    isMobile,

    watchProgress: localData,

    isMuted,
    isPlaying,
    isFullscreen,
    isPiP,
    isPreviewOld,
    isVideoProcessed,

    videoRef,
    playerRef,

    loadProgress,
    passProgress,

    currentScreen,
    setCurrentScreen,

    episode,
    setEpisode,
    changeEpisode,

    volume,
    setVolume,

    moment,
    setMoment,
    changeMoment,
  }



  //! -------------- DEFAULT EFFECTS --------------
  //* Player vitals, video loading handling
  useEffect(() => {
    title.episodes.forEach(ep => {
      if (ep.order > titleMaxEpisode.current) titleMaxEpisode.current = ep.order
    })

    const video = videoRef.current;

    if (video) {
      video.addEventListener('loadstart', () => {
        setIsVideoLoading(true)
      })

      video.addEventListener('loadeddata', () => {
        setIsVideoLoading(false)
      })
    };
  }, [])

  //* Patch user watch progress
  useEffect(() => {
    if (!user.id) return;

    // Patch watch progress
    window.addEventListener('beforeunload', e => {
      patchWatchProgress();
    })
  }, [user])



  //! -------------- SETUP STAGE --------------
  // Setup with user progress or default
  useEffect(() => {
    if (stage !== 'setup') return;

    const video = videoRef.current;
    if (window === undefined || !video) return;

    const progress = getPlayerProgress()

    if (progress) {
      // Progress is present, purpose it to init with

      setCurrentScreen('progress_continue');

      setOutDubber ? setOutDubber(dubbers.find(el => el.id === progress.dub)!) : null;
      setOutEp ? setOutEp(progress.ep) : null;

      setLocalData(progress);
    } else {
      // Progress is missing, set default data

      loadDefault();
    }
  }, [stage, user])



  /** Load user progress */
  async function loadProgress() {
    const progress = getPlayerProgress();

    // Load default if progress missing
    if (!progress) {
      return loadDefault();
    }

    const episode = title.episodes.find(el => el.dubberID === progress.dub && el.order === progress.ep);

    if (!episode) {
      return loadDefault();
    }

    setCurrentScreen('none')
    await changeEpisode(episode, progress.moment);
    setStage('operational')
  }

  /** Delete title from user progress & proceed */
  async function passProgress() {
    setCurrentScreen('none')

    await Promise.all([
      await deletePlayerProgress(),
      await loadDefault(),
    ])
  }

  /** Setup with default player states */
  async function loadDefault() {
    const episode = title.episodes[0];
    const video = videoRef.current;
    let i = 0;

    setCurrentScreen('none')
    await changeEpisode(episode, 0, true);
    setStage('operational');

    const interval = setInterval(() => {
      if (i > 5) return clearInterval(interval);

      video?.pause();

      i++;
    }, 50)
  }

  async function patchWatchProgress() {
    if (!user.id) return;

    const playerData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[];
    const currentTitle = playerData.find(el => el.id === title.id)!;
    const viewtime = viewtimeRef.current;

    // Ignore patching less than 5 seconds of viewtime
    if (viewtime < 5) return;

    try {
      await $api.patch('/user', {
        method: 'patchWatchProgress',
        titleId: title.id,
        dubberID: currentTitle.dub,
        episodeOrder: currentTitle.ep,
        progress: currentTitle.moment,
        viewtime,
      })

      viewtimeRef.current = 0;
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(`HTTP error occured while saving user progress - ${err.response?.data?.msg}`)
      } else {
        console.log(`An error occured while saving user progress - `)
        console.error(err)
      }
    }
  }



  //! -------------- OPERATIONAL STAGE --------------
  //* Handle video events
  useEffect(() => {
    if (stage !== 'operational') return;

    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) return;

    let viewtimeInterval: NodeJS.Timeout

    //* Handle events
    // Hide context menu
    player.addEventListener('contextmenu', e => {
      e.preventDefault();
    })

    //* Handle states
    // Handle loading & isPlaying
    video.addEventListener('waiting', () => {
      setIsVideoLoading(true)
    })

    video.addEventListener('playing', () => {
      setIsVideoLoading(false)
      setIsPlaying(true)
    })

    // Handle playback rate
    video.addEventListener('ratechange', () => {
      setSpeed(video.playbackRate)
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

          if (moment >= start && moment <= end) {
            const offset = (end / duration) * 100

            loaded.style.width = `${offset}%`
          }
        }
      };
    })

    // Handle isPlaying state
    video.addEventListener('play', () => {
      viewtimeInterval = setInterval(() => {
        viewtimeRef.current += 1;
      }, 1000)

      setIsPlaying(true)

      window.clearTimeout(onPausePatchTimeoutRef.current);
    })

    video.addEventListener('pause', () => {
      clearInterval(viewtimeInterval);

      setIsPlaying(false)

      window.clearTimeout(onPausePatchTimeoutRef.current);
      onPausePatchTimeoutRef.current = setTimeout(() => {
        // Patch progress if user not active at least two minutes
        patchWatchProgress()
      }, 120000);
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



    function timelineTouchStartHandler() {
      preview.style.opacity = '1';
      preview.style.visibility = 'visible';
      preview.style.touchAction = 'all';
      preview.style.pointerEvents = 'all';
    }

    function timelineTouchEndHandler() {
      preview.style.opacity = '0';
      preview.style.visibility = 'invisible';
      preview.style.touchAction = 'none';
      preview.style.pointerEvents = 'none';
    }
  }, [stage])

  //* Handle video events & save progress
  useEffect(() => {
    const timeline = document.querySelector('#kekwplayer-timeline') as HTMLDivElement
    const preview = document.querySelector('#kekwplayer-preview') as HTMLDivElement

    const player = playerRef.current;
    const video = videoRef.current;

    if (!timeline || !preview || !video || !player) return;

    // Move preview box
    timeline.addEventListener('pointermove', handlePointerMove);
    video.addEventListener('timeupdate', handleTimeupdate)

    function handlePointerMove(e: MouseEvent) {
      movePreview(e.offsetX)
    }

    // Save progress
    function handleTimeupdate(e: Event) {
      const moment = (e.target as HTMLVideoElement).currentTime;

      if (moment > 5) {
        updatePlayerProgress({
          dub: episode.dubberID,
          ep: episode.order,
          id: title.id,
          moment
        })
      }
    }



    return () => {
      timeline.removeEventListener('pointermove', handlePointerMove)
      video.removeEventListener('timeupdate', handleTimeupdate)
    }
  }, [stage, episode])

  //* Handle cursor visibility in idle/active modes
  useEffect(() => {
    if (stage !== 'operational') return;

    // Hide cursor in fullscreen mode
    if (isIdle && isFullscreen) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [stage, isIdle])

  //* Handle keyboard
  useEffect(() => {
    if (stage !== 'operational') return;

    const player = playerRef.current;
    if (!player) return;

    player.addEventListener('keydown', handleKeyboard)

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
          if (video.currentTime - 10 >= 0) {
            changeMoment(video.currentTime - 10)
          } else {
            changeMoment(0)
          }

          break;
        }

        // Skip prev 5s
        case 'ArrowLeft': {
          if (video.currentTime - 5 >= 0) {
            changeMoment(video.currentTime - 5)
          } else {
            changeMoment(0)
          }

          break;
        }

        // Skip next 10s
        case 'KeyL': {
          if (video.currentTime + 10 >= duration) {
            changeMoment(video.duration)
          } else {
            changeMoment(video.currentTime + 10)
          }

          break;
        }

        // Skip next 5s
        case 'ArrowRight': {
          if (video.currentTime + 5 >= video.duration) {
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
      player.removeEventListener('keydown', handleKeyboard)
    }
  }, [stage, isFullscreen])

  //* Handle quality changing
  useEffect(() => {
    if (stage !== 'operational' || !episode) return;

    changeVideoSrc(episode.qualities[quality], moment)
  }, [stage, quality])

  //* Handle video buffering & screens
  useEffect(() => {
    const video = videoRef.current;

    if (!duration || !moment || !video) return;

    //* Handle buffering
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

        if (moment >= start && moment <= end) {
          const offset = (end / duration) * 100

          loaded.style.width = `${offset}%`
        }
      }
    }

    //* Handle end screens
    if (duration > 10 && moment && episode) {
      // title_end, episode_end, episode_last
      if (moment >= duration - 5) {
        const nextEpisodeOrder = episode.order + 1;

        const isNextEpisodeExist = title.episodes.some(el => el.dubberID === episode.dubberID && el.order === nextEpisodeOrder);
        const isLastEpisode = !isNextEpisodeExist && Number(title.episodesCount) > nextEpisodeOrder
        const isTitleEnded = !isNextEpisodeExist && Number(title.episodesCount) <= nextEpisodeOrder;

        if (isNextEpisodeExist) {
          setCurrentScreen('episode_end')
        } else if (isTitleEnded) {
          setCurrentScreen('title_end')
        } else if (isLastEpisode) {
          setCurrentScreen('episode_last')
        }
      } else {
        // Reset screen
        setCurrentScreen('none');
      }
    }

    return () => {
      video.removeEventListener('timeupdate', timeupdateHandler)
    }
  }, [duration, moment])

  //* Handle track expanding on hover
  //TODO Can be refactored into css hover
  useEffect(() => {
    const bottom = bottomRef.current;
    const track = document.querySelector('#kekwplayer-timeline_track') as HTMLDivElement | undefined
    if (stage !== 'operational' || !bottom || !track) return;

    bottom.addEventListener('mouseenter', () => {
      track.style.padding = '3px 0';
    })

    bottom.addEventListener('mouseleave', () => {
      track.style.padding = '0';
    })
  }, [stage])

  //* Handle screen change
  useEffect(() => {
    //* Hide controls under progress_continue screen, otherwise show them

    setIsControlsHiddenUnderScreen(currentScreen === 'progress_continue');
  }, [currentScreen])



  //* -------------- HANDLERS --------------
  /** Get user progress */
  function getPlayerProgress(): IKekwPlayerLocalDataItem | null {
    // Get progress from user watch progress
    if (user.id) {
      const currentTitle = user.watchProgress.find(el => el.titleID === title.id);

      // Procced if title saved, otherwise procced by default
      if (currentTitle) {
        return {
          dub: currentTitle.dubberID,
          ep: currentTitle.episodeOrder,
          id: currentTitle.titleID,
          moment: currentTitle.progress
        }
      }
    }

    // Get progress from local storage (by default)
    const localData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]
    if (!localData) return null;

    const currentTitle = localData.find(el => el.id === title.id)
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
  async function deletePlayerProgress() {
    const data = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]

    try {
      await $api.patch('/user', {
        method: 'patchWatchProgress',
        titleId: title.id,
        dubberID: title.episodes[0].dubberID,
        episodeOrder: title.episodes[0].order,
        progress: 0,
        viewtime: 0,
      })

      viewtimeRef.current = 0;
    } catch (err) {
      if (err instanceof AxiosError) {
        console.log(`HTTP error occured while saving user progress - ${err.response?.data?.msg}`)
      } else {
        console.log(`An error occured while saving user progress - `)
        console.error(err)
      }
    }

    localStorage.setItem('kekwplayer_data', JSON.stringify(data.filter(el => el.id !== title.id)))
  }

  /** Change dub, ep & moment
   * Will re-define previews format & change video src
   * Will set default dub & ep if they are not found
   * 
   * @default moment 0
   */
  async function changeEpisode(episode: ITitleEpisode, moment?: number, stopPlayback?: boolean) {
    // Set optional vars
    moment = moment || 0;

    // Set first dub in array if id not found
    if (!title.episodes.find(el => el.dubberID === episode.dubberID && el.order === episode.order)) {
      episode = title.episodes[0]
    }

    setEpisode(episode)

    await Promise.all([
      await definePreviewFormat(episode.frames[0]),
      await changeVideoSrc(episode.qualities[quality], moment, stopPlayback),
    ])

    // Set out states
    if (setOutDubber) setOutDubber(dubbers.find(el => el.id === episode.dubberID)!);
    if (setOutEp) setOutEp(episode.order);

    // Check if episode is last
    const nextEpisodeOrder = episode.order + 1;

    if (title.episodes.some(el => el.dubberID === episode.dubberID && el.order === nextEpisodeOrder)) {
      setIsLastEpisode(false)
    } else {
      setIsLastEpisode(true)
    }

    // Reset progress moment
    updatePlayerProgress({
      dub: episode.dubberID,
      ep: episode.order,
      id: title.id,
      moment
    })
  }

  /** Change video src & moment */
  async function changeVideoSrc(src: string, moment?: number, stopPlayback?: boolean) {
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

    if (!stopPlayback) {
      try {
        await video.play()
      } catch (e) {

      }
    }
  }

  /** Change video moment
   * Will set moment equal duration if moment greater that it
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

    setMoment(moment);
    moveProgress(moment, duration);
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
    if (!episode || !isVideoProcessed) return
    const img = preview.querySelector('img') as HTMLImageElement;

    let previewIndex = Math.floor(hoveredMoment / 5);

    const frames = episode.frames;
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
      setIsVideoProcessed(false)
    }
  }



  return <KekwPlayerContext.Provider value={KekwPlayerContextPayload}>
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between bg-black outline-none" id="player" tabIndex={0} ref={playerRef}>
      {/* Screens */}
      <PlayerScreen.Wrapper>
        <PlayerScreen.ProgressContinue />
        <PlayerScreen.EpisodeEnd />
        <PlayerScreen.EpisodeLast />
        <PlayerScreen.TitleEnd />
      </PlayerScreen.Wrapper>

      {/* Menu */}
      <KekwPlayerMenu className={!isControlsHiddenUnderScreen ? 'z-[20]' : undefined} order={episode.order} changeEpisode={changeEpisode} episode={episode} episodes={title.episodes} dubbers={dubbers} isLastEpisode={isLastEpisode} episodesCount={title.episodesCount || titleMaxEpisode.current} isIdle={isIdle} titleId={title.id} moment={moment} />

      {/* Bottom */}
      <div className={cn(`flex gap-[32px] items-center justify-between z-[10] relative duration-200 px-[24px] py-[16px]`, isIdle && 'translate-y-[100%]', !isControlsHiddenUnderScreen && 'z-[20]')} style={{ background: 'linear-gradient(360deg, rgba(18, 18, 18, .8), rgba(18, 18, 18, 0))' }} ref={bottomRef}>
        <div className="flex items-center gap-[16px]">
          <KekwPlayerPlay />
          <KekwPlayerVolume />
        </div>

        <KekwPlayerTimeline hoveredMoment={hoveredMoment} loadedRef={loadedRef} previewRef={previewRef} progressRef={progressRef} />

        <div className="flex items-center gap-[12px]">
          <KekwPlayerPiP />

          <KekwPlayerSettings quality={quality} setQuality={setQuality} speed={speed} epData={episode} isVideoProcessed={isVideoProcessed} videoRef={videoRef} stretch={stretch} setStretch={setStretch} isIdle={isIdle} />

          <KekwPlayerFullscreen />
        </div>
      </div>

      {/* Skip wrapper & play/pause */}
      <KekwPlayerControls />

      {/* Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        {/* Loader */}
        <div className={cn(`w-full h-full absolute top-0 left-0 flex justify-center items-center duration-200 touch-none pointer-events-none`, !isVideoLoading && 'opacity-0')}>
          <loader.DotPulse color="#fff" size={80} />
        </div>

        <video src={''} preload="auto" controlsList="nodownload" className={cn(`w-full h-full`, stretch && 'object-cover')} id="kekwplayer-video" controls={false} ref={videoRef}></video>
      </div>
    </div>
  </KekwPlayerContext.Provider>
}



export function secondsToReadable(time: number): { hrs: number, mins: number, secs: number, pretty: string } {
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