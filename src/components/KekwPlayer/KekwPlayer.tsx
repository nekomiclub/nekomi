'use client'

import './styles.scss';

import { createContext, RefObject, useEffect, useRef, useState } from 'react';
import * as loader from '@uiball/loaders';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { getImageSize } from 'react-image-size'

import { useAppSelector } from '../../hooks/redux';
import { IDubber } from '../../interfaces/IDubber';
import { ITitle, ITitleEpisode } from '../../interfaces/ITitle';
import { $api } from '../http';

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

  /** Player will change this state with current dubber */
  setOutDubber?: (state: IDubber) => void

  /** Player will change this state with current episode */
  setOutEp?: (state: number) => void
}



export interface IKekwPlayerContextProps {
  //* CONSTS
  title: ITitle
  dubbers: IDubber[]
  duration: number

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
  setEpisode: (episode: ITitleEpisode) => void

  volume: number
  setVolume: (val: number) => void

  moment: number
  setMoment: (val: number) => void
  changeMoment: (val: number) => void
}

export const KekwPlayerContext = createContext<Partial<IKekwPlayerContextProps>>({})



//! SET PROPS DIRECTRLY TO VIDEO, STATES USED ONLY TO OBSERVE 
const KekwPlayer: NextPage<IKekwPlayerProps> = ({ title, dubbers, setOutDubber, setOutEp }) => {
  const [stage, setStage] = useState<TStage>('setup')
  const user = useAppSelector(state => state.user);



  // Player data
  const [volume, setVolume] = useState<number>(100) // 0 - 100
  const [episode, setEpisode] = useState<ITitleEpisode>(title.episodes[0])
  const [duration, setDuration] = useState(1)
  const [moment, setMoment] = useState(0);
  const [hoveredMoment, setHoveredMoment] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<TKekwPlayerScreen>('none')
  const [localData, setLocalData] = useState<IKekwPlayerLocalDataItem>()

  // Settings states
  const [quality, setQuality] = useState<TVideoQuality>('q1080')
  const [speed, setSpeed] = useState(1)
  const [stretch, setStretch] = useState(false)

  const [isPreviewOld, setIsPreviewOld] = useState(false); // Specify video previews dimensions
  const [isVideoProcessed, setIsVideoProcessed] = useState(false); // Specify if video procesed by the server (qualities & frames)

  // Player states
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPiP, setIsPip] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isLastEpisode, setIsLastEpisode] = useState(false)
  const [isTimeToEndScreen, setIsTimeToEndScreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isIdle, setIsIdle] = useState(false)

  // Video states
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Refs
  const playerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const loadedRef = useRef<HTMLDivElement>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const viewtimeRef = useRef(0)

  const mobileSkipWrapper = useRef<HTMLDivElement>(null)
  const mobilePrevSkipRef = useRef<HTMLDivElement>(null)
  const mobileNextSkipRef = useRef<HTMLDivElement>(null)

  const isMultiskipRef = useRef(false)
  const skipTimeoutRef = useRef<NodeJS.Timeout>()
  const onPausePatchTimeoutRef = useRef<NodeJS.Timeout>()

  const titleMaxEpisode = useRef(0)

  // Idle timer
  // useIdleTimer({
  //   timeout: 3000,
  //   throttle: 500,
  //   onIdle: () => setIsIdle(true),
  //   onAction: () => setIsIdle(false)
  // })



  const KekwPlayerContextPayload: IKekwPlayerContextProps = {
    title,
    dubbers,
    duration,

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
    volume,
    setVolume,
    moment,
    setMoment,
    changeMoment,
  }



  //! -------------- DEFAULT EFFECTS --------------
  //* Player vitals, video loading handling
  useEffect(() => {
    // Define if client is mobile
    if (window.innerWidth <= 600 || window.innerHeight <= 400) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

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
    if (stage !== 'setup' || !user.loaded) return;

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

    let viewtimeInterval: NodeJS.Timeout

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

          if (moment >= start && moment <= end) {
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
    const video = videoRef.current;

    if (!timeline || !preview || !video) return;

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

  //* Handle keyboard
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
    if (stage !== 'operational' || !episode) return;

    changeVideoSrc(episode.qualities[quality], moment)
  }, [stage, quality])

  //* Handle video buffering & end screens
  useEffect(() => {
    const video = videoRef.current;

    if (!duration || !moment || !video) return;

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

        if (moment >= start && moment <= end) {
          const offset = (end / duration) * 100

          loaded.style.width = `${offset}%`
        }
      }
    }

    // Handle end screens
    if (duration > 10 && moment && episode) {
      if (moment >= duration - 2) {
        let nextEp = episode.order;
        nextEp += 1;
        setIsTimeToEndScreen(true)

        const isNextEpExist = title.episodes.some(el => el.order === nextEp && el.dubberID === episode.dubberID); // Last episode in dub
        const isTitleEnded = title.episodesCount === episode.order; // Title ended

        if (isTitleEnded) {
          setCurrentScreen('title_end')
        } else if (isNextEpExist) {
          setCurrentScreen('episode_end')
        } else if (!isNextEpExist) {
          setCurrentScreen('episode_last')
        } else {
          setCurrentScreen('none')
        }
      } else {
        if (currentScreen !== 'none') {
          setIsTimeToEndScreen(false);
          setCurrentScreen('none')
        }
      }
    };

    return () => {
      video.removeEventListener('timeupdate', timeupdateHandler)
    }
  }, [duration, moment])

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
    const nextEp = Number(episode.order) + 1;

    if (!title.episodes.some(el => el.dubberID === episode.dubberID && el.order === nextEp)) {
      setIsLastEpisode(true)
    } else {
      setIsLastEpisode(false)
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
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between bg-black" id="player" ref={playerRef}>
      {/* Screens */}
      <PlayerScreen.Wrapper>
        <PlayerScreen.ProgressContinue />
        <PlayerScreen.EpisodeEnd />
        <PlayerScreen.EpisodeLast />
        <PlayerScreen.TitleEnd />
      </PlayerScreen.Wrapper>

      {/* Mobile skip wrapper */}
      <div className={isMobile ? 'w-full h-full absolute top-0 left-0 z-[10] flex' : 'hidden'} ref={mobileSkipWrapper}>
        <div className="w-full h-full" ref={mobilePrevSkipRef}></div>
        <div className="w-full h-full" ref={mobileNextSkipRef}></div>
      </div>

      {/* Menu */}
      <KekwPlayerMenu order={episode.order} changeEpisode={changeEpisode} episode={episode} episodes={title.episodes} dubbers={dubbers} isLastEpisode={isLastEpisode} episodesCount={title.episodesCount || titleMaxEpisode.current} isIdle={isIdle} titleId={title.id} moment={moment} />

      {/* Bottom */}
      <div className={`flex gap-[32px] items-center justify-between z-[10] relative duration-200 px-[24px] py-[16px] backdrop-blur-[8px] bg-red ${isIdle ? 'translate-y-[100%]' : ''}`} style={{ background: 'linear-gradient(360deg, rgba(18, 18, 18, .8), rgba(18, 18, 18, 0))' }} ref={bottomRef}>
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

      {/* Video */}
      <div className="w-full h-full absolute top-0 left-0">
        {/* Loader */}
        <div className={`w-full h-full absolute top-0 left-0 flex justify-center items-center duration-200 touch-none pointer-events-none ${isVideoLoading ? 'opacity-100' : 'opacity-0'}`}>
          <loader.DotPulse color="#fff" size={80} />
        </div>

        <video src={''} preload="auto" controlsList="nodownload" className={`w-full h-full ${stretch ? 'object-cover' : ''}`} controls={false} ref={videoRef}></video>
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