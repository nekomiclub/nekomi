'use client'

import '~/styles/components/Nekoplayer.scss';

import { useEffect, useRef, useState } from 'react';
import * as loader from '@uiball/loaders';
import { NextPage } from 'next';
import { useIdleTimer } from 'react-idle-timer';
import { getImageSize } from 'react-image-size'

import { useAppSelector } from '~/hooks/redux';
import Anime from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { EpisodeQualityType } from '~/interfaces/Interfaces';
import { LocalStorageKeys } from '~/interfaces/types';
import API from '~/services/ApiService';
import prettySeconds from '~/utils/pretty-seconds';
import { cn } from '~/utils/utils';
import { ITitleEpisode } from '../../interfaces/ITitle';
import { HandleClientError } from '../Errors';
import { $api } from '../http';

import NPControls from './NPControls';
import NPFullscreen from './NPFullscreen';
import NPIP from './NPIP';
import NPlay from './NPlay';
import NPMenu from './NPMenu';
import NPScreensContainer from './NPScreens';
import NPSettings from './NPSettings';
import NPTimeline from './NPTimeline';
import { NekoplayerContext, NekoplayerContextProps, NekoplayerIDs, NekoplayerLocalstorageRecord, NekoplayerScreenType } from './NPTypes';
import NPVolume from './NPVolume';



type PlayerStageType = 'setup' | 'operational'

interface NekoplayerProps {
  anime: Anime
  dubbers: DubberCompact[]

  outEpisode?: ITitleEpisode
  setOutDubber?: (state: DubberCompact) => void
  setOutEp?: (state: number) => void

  disableScreens?: boolean
}

/**
 * Z indexes table
 * 1 - video section
 * 2 - play/pause & controls handlers
 * 10 - top & bottom menus 
 * 20 - top-level screens
 */



//! SET PROPS DIRECTRLY TO VIDEO, STATES USED ONLY TO OBSERVE 
const Nekoplayer: NextPage<NekoplayerProps> = ({ anime, dubbers, setOutDubber, setOutEp, outEpisode, disableScreens }) => {
  const user = useAppSelector(state => state.user);

  const [stage, setStage] = useState<PlayerStageType>('setup')



  // Player data
  const [volume, setVolume] = useState<number>(100) // 0 - 100
  const [episode, setEpisode] = useState<ITitleEpisode>(anime.episodes[0])
  const [duration, setDuration] = useState<number>(1)
  const [moment, setMoment] = useState<number>(0);
  const [hoveredMoment, setHoveredMoment] = useState<number>(0);
  const [currentScreen, setCurrentScreen] = useState<NekoplayerScreenType>('none')
  const [localData, setLocalData] = useState<NekoplayerLocalstorageRecord>()
  const [isMobile, setIsMobile] = useState(true);
  const [isControlsHiddenUnderScreen, setIsControlsHiddenUnderScreen] = useState<boolean>(true) // Define if player timeline and menu will be hidden under screeen

  // Settings states
  const [quality, setQuality] = useState<EpisodeQualityType>('q1080')
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

  const titleMaxEpisode = useRef(0)

  // Idle timer
  useIdleTimer({
    timeout: 3000,
    throttle: 500,
    onIdle: () => setIsIdle(true),
    onAction: () => setIsIdle(false)
  })



  const KekwPlayerContextPayload: NekoplayerContextProps = {
    anime,
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
  // Player vitals, video loading handling
  useEffect(() => {
    anime.episodes.forEach(ep => {
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

  // Patch user watch progress on beforeunload & visibilitychange
  useEffect(() => {
    // Patch watch progress
    window.addEventListener('beforeunload', patchWatchProgress)
    document.addEventListener('visibilitychange', patchWatchProgress)

    return () => {
      patchWatchProgress()
    }
  }, [])



  //! -------------- SETUP STAGE --------------
  // Setup with user progress or default
  useEffect(() => {
    if (stage !== 'setup') return;

    const video = videoRef.current;
    if (window === undefined || !video) return;

    // Load defaults if screens are disabled
    if (disableScreens) {
      loadDefault();
      return
    }

    const progress = getCurrentProgressRecord()

    if (progress && progress.moment > 10) {
      // Progress is present, purpose it to init with

      setCurrentScreen('progress_continue');

      loadProgress({ preload: true })
      setOutDubber ? setOutDubber(dubbers.find(el => el.id === progress.dub)!) : null;
      setOutEp ? setOutEp(progress.ep) : null;

      setLocalData(progress);
    } else {
      // Progress is missing, set default data

      loadDefault();
    }
  }, [stage, user])



  /** Load user progress */
  async function loadProgress(props?: { preload?: boolean }) {
    const record = getCurrentProgressRecord();
    if (!record) return loadDefault();

    const episode = anime.episodes.find(el => el.dubberID === record.dub && el.order === record.ep);
    if (!episode) return loadDefault();

    !props?.preload && setCurrentScreen('none')
    await changeEpisode(episode, record.moment, props?.preload);
    !props?.preload && setStage('operational')

    console.debug(`[nekoplayer]: User watch progress loaded. [dubber: ${record.dub}; episode: ${record.ep} (${prettySeconds(record.moment).pretty})]`)
  }

  /** Delete title from user progress & proceed */
  async function passProgress() {
    setCurrentScreen('none')

    console.debug(`[nekoplayer]: User delete watch progress`)

    await Promise.all([
      await deletePlayerProgress(),
      await loadDefault(),
    ])
  }

  /** Setup with default player states */
  async function loadDefault() {
    const episode = anime.episodes[0];

    setCurrentScreen('none')
    await changeEpisode(episode, 0, true);
    setStage('operational');

    console.debug(`[nekoplayer]: Default watch progress loaded`)
  }

  /** Update user watch progress */
  async function patchWatchProgress() {
    if (!user.id) return;

    const record = getCurrentProgressRecord({ localOnly: true });
    if (!record) return

    const viewtime = viewtimeRef.current;
    // Ignore patching less than 5 seconds of viewtime
    if (viewtime < 5) return;

    try {
      await $api.patch('/user', {
        method: 'patchWatchProgress',
        titleId: anime.uuid,
        dubberID: record.dub,
        episodeOrder: record.ep,
        progress: record.moment,
        viewtime,
      })

      viewtimeRef.current = 0;
    } catch (e) {
      HandleClientError(e)
    }

    console.debug(`[nekoplayer]: Watch progress have been updated. [dubber: ${record.dub}; episode: ${record.ep} (${prettySeconds(record.moment).pretty})]`)
  }



  //! -------------- OPERATIONAL STAGE --------------
  // Handle video events
  useEffect(() => {
    if (stage !== 'operational') return;

    const video = videoRef.current;
    const player = playerRef.current;

    if (!video || !player) return console.error(`[nekoplayer]: Video or Player are not found`);

    let viewtimeInterval: NodeJS.Timeout
    let onPausePatchTimeout: NodeJS.Timeout



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

      clearInterval(viewtimeInterval);
      clearTimeout(onPausePatchTimeout);

      viewtimeInterval = setInterval(() => {
        viewtimeRef.current += 1;
      }, 1000)
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
      setIsPlaying(true)
    })

    video.addEventListener('pause', () => {
      setIsPlaying(false)

      clearInterval(viewtimeInterval);
      clearTimeout(onPausePatchTimeout);

      // Patch progress if user not active at least two minutes
      onPausePatchTimeout = setTimeout(() => {
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
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement
    const preview = document.querySelector(`#${NekoplayerIDs.Preview}`) as HTMLDivElement

    if (timeline && preview) {
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
    };



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

  // Handle video events & save progress
  useEffect(() => {
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement
    const preview = document.querySelector(`#${NekoplayerIDs.Preview}`) as HTMLDivElement

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
          id: anime.uuid,
          moment
        })
      }
    }



    return () => {
      timeline.removeEventListener('pointermove', handlePointerMove)
      video.removeEventListener('timeupdate', handleTimeupdate)
    }
  }, [stage, episode])

  // Handle cursor visibility in idle/active modes
  useEffect(() => {
    if (stage !== 'operational') return;

    // Hide cursor in fullscreen mode
    if (isIdle && isFullscreen) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [stage, isIdle])

  // Handle keyboard
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
            document.exitFullscreen().catch(e => HandleClientError(e))
          } else {
            player.requestFullscreen().catch(e => HandleClientError(e))
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

  // Handle quality changing
  useEffect(() => {
    if (stage !== 'operational' || !episode) return;

    const video = videoRef.current
    if (!video) return

    const videoUrl = episode.qualities[quality] ?? episode.qualities.q1080;

    if (video.src !== videoUrl) changeVideoSrc(videoUrl, moment);
  }, [stage, quality])

  // Handle video buffering & screens
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
        const isNextEpisodeExist = anime.episodes.some(el => el.dubberID === episode.dubberID && el.order === episode.order + 1);
        const isLastDubbedEpisode = !isNextEpisodeExist && Number(anime.episodesCount) > episode.order
        const isAnimeEnded = !isNextEpisodeExist && Number(anime.episodesCount) <= episode.order;

        if (isNextEpisodeExist) {
          setCurrentScreen('continue_watch')
        } else if (isAnimeEnded) {
          setCurrentScreen('anime_end')
        } else if (isLastDubbedEpisode) {
          setCurrentScreen('last_dubbed_episode')
        }
      } else {
        // Reset screen
        setCurrentScreen(prev => prev !== 'progress_continue' ? 'none' : 'progress_continue');
      }
    }

    return () => {
      video.removeEventListener('timeupdate', timeupdateHandler)
    }
  }, [duration, moment])

  // Handle screen change
  useEffect(() => {
    // Hide controls under progress_continue screen, otherwise show them

    setIsControlsHiddenUnderScreen(currentScreen === 'progress_continue');
  }, [currentScreen])

  // Sync episode
  useEffect(() => {
    if (!outEpisode) return;

    changeEpisode(outEpisode, 0, false);
  }, [outEpisode])



  //* -------------- LISTENERS --------------
  // Listen currentScreen 
  useEffect(() => console.debug(`[nekoplayer]: Set screen: ${currentScreen}`), [currentScreen])
  // Listen stage 
  useEffect(() => console.debug(`[nekoplayer]: Set stage: ${stage}`), [stage])




  //* -------------- HANDLERS --------------
  /** Get user progress
   * @param localOnly will return progress from local storage only
   */
  function getCurrentProgressRecord(props?: { localOnly?: boolean }): NekoplayerLocalstorageRecord | null {
    // Get progress from user watch progress
    if (user.id && !props?.localOnly) {
      const record = user.watchProgress.find(el => el.titleID === anime.uuid);

      // Procced if title saved, otherwise procced by default
      if (record) return {
        dub: record.dubberID,
        ep: record.episodeOrder,
        id: record.titleID,
        moment: record.progress
      }
    }

    // Get progress from local storage (by default)
    const localData = GetNekoplayerData()
    if (!localData) return null;

    const record = localData.find(el => el.id === anime.uuid)
    if (!record) return null;

    return record
  }

  /** Update user progress */
  function updatePlayerProgress(record: NekoplayerLocalstorageRecord) {
    let items = GetNekoplayerData()
    items = [...items.filter(el => el.id !== record.id), record];

    localStorage.setItem(LocalStorageKeys.NekoplayerData, JSON.stringify(items))
  }

  /** Delete user progress record */
  async function deletePlayerProgress() {
    const records = GetNekoplayerData();
    const record = getCurrentProgressRecord()

    try {
      await API.userRemoveWatchProgress({ animeId: anime.uuid });
    } catch (e) {
      HandleClientError(e)
    }

    console.debug(`[nekoplayer]: User watch progress deleted. [dubber: ${record?.dub}]`)
    localStorage.setItem(LocalStorageKeys.NekoplayerData, JSON.stringify(records.filter(record => record.id !== anime.uuid)))
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
    if (!anime.episodes.find(el => el.dubberID === episode.dubberID && el.order === episode.order)) {
      episode = anime.episodes[0]
    }

    setEpisode(episode)

    await Promise.all([
      await definePreviewFormat(episode.frames[0]),
      await changeVideoSrc(episode.qualities[quality] ?? episode.qualities.q1080, moment, stopPlayback),
    ])

    // Set out states
    if (setOutDubber) setOutDubber(dubbers.find(el => el.id === episode.dubberID)!);
    if (setOutEp) setOutEp(episode.order);

    // Check if episode is last
    const nextEpisodeOrder = episode.order + 1;

    if (anime.episodes.some(el => el.dubberID === episode.dubberID && el.order === nextEpisodeOrder)) {
      setIsLastEpisode(false)
    } else {
      setIsLastEpisode(true)
    }

    // Reset progress moment
    updatePlayerProgress({
      dub: episode.dubberID,
      ep: episode.order,
      id: anime.uuid,
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

    if (stopPlayback) {
      video.pause();
    } else {
      video.play().catch(e => { })
    }
  }

  /** Change video moment
   * Will set moment equal duration if moment greater that it
   * 
   * @param synthetic Specifies if function called by user interaction. In synthetic action preview box will not move & new moment will not be set
   */
  function changeMoment(moment: number, synthetic?: boolean) {
    const video = videoRef.current;
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement
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
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement

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



  return <NekoplayerContext.Provider value={KekwPlayerContextPayload}>
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between bg-black outline-none" id="player" tabIndex={0} ref={playerRef}>
      {/* Screens */}
      {!disableScreens && <NPScreensContainer />}

      {/* Menu */}
      <NPMenu className={!isControlsHiddenUnderScreen ? 'z-[20]' : undefined} order={episode.order} isLastEpisode={isLastEpisode} totalEpisodesCount={anime.episodesCount ?? titleMaxEpisode.current} isIdle={isIdle} />

      {/* Bottom */}
      <div className={cn(`nekoplayer-bottom flex gap-[32px] items-center justify-between z-[10] relative duration-200 px-[24px] py-[12px] backdrop-blur-[4px]`, isIdle && 'translate-y-[100%]', !isControlsHiddenUnderScreen && 'z-[20]')} style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .6))' }} ref={bottomRef}>
        <div className="flex items-center gap-[16px]">
          <NPlay />
          <NPVolume />
        </div>

        <NPTimeline hoveredMoment={hoveredMoment} loadedRef={loadedRef} previewRef={previewRef} progressRef={progressRef} />

        <div className="flex items-center gap-[12px]">
          <NPIP />
          <NPSettings quality={quality} setQuality={setQuality} speed={speed} stretch={stretch} setStretch={setStretch} isIdle={isIdle} />
          <NPFullscreen />
        </div>
      </div>

      {/* Skip wrapper & play/pause */}
      <NPControls />

      {/* Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        {/* Loader */}
        <div className={cn(`w-full h-full absolute top-0 left-0 flex justify-center items-center duration-200 touch-none pointer-events-none`, !isVideoLoading && 'opacity-0')}>
          <loader.DotPulse color="#fff" size={80} />
        </div>

        <video src={''} preload="auto" controlsList="nodownload" className={cn(`w-full h-full`, stretch && 'object-cover')} id="kekwplayer-video" controls={false} ref={videoRef}></video>
      </div>
    </div>
  </NekoplayerContext.Provider>
}

export function GetNekoplayerData(): NekoplayerLocalstorageRecord[] {
  if (typeof window === 'undefined') return []

  return JSON.parse(localStorage.getItem(LocalStorageKeys.NekoplayerData) ?? '[]')
}

export default Nekoplayer;