'use client';

import '~/styles/components/Nekoplayer.scss';

import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import * as loader from '@uiball/loaders';
import Hls from 'hls.js';
import { useIdleTimer } from 'react-idle-timer';
import { getImageSize } from 'react-image-size';

import { HandleClientError } from '~/components/Errors';
import { NotifySuccess, NotifyWarn } from '~/components/UI/NotifyToast';
import { useAppSelector } from '~/hooks/redux';
import Anime, { AnimeEpisode } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { EpisodeQualityType, LocalStorageKeys } from '~/interfaces/types';
import API from '~/services/ApiService';
import { cn } from '~/utils/classnames';
import { $api } from '~/utils/http';
import { GetNekoplayerData, GetNekoplayerPreferences } from '~/utils/nekoplayer-utils';
import { prettySeconds } from '~/utils/utils';

import NPControls from './NPControls';
import NPFullscreen from './NPFullscreen';
import NPIP from './NPIP';
import NPlay from './NPlay';
import NPMenu from './NPMenu';
import NPScreens from './NPScreens';
import NPSettings from './NPSettings';
import NPTimeline from './NPTimeline';
import { NekoplayerContext, NekoplayerContextProps, NekoplayerIDs, NekoplayerLocalstorageRecord, NekoplayerScreenType } from './NPTypes';
import NPVolume from './NPVolume';



interface NekoplayerProps {
  anime: Anime
  dubbers: DubberCompact[]

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
const Nekoplayer: NextPage<NekoplayerProps> = ({ anime, dubbers, disableScreens }) => {
  const user = useAppSelector(state => state.user);



  // Player data
  const [volume, setVolume] = useState<number>(100); // 0 - 100
  const [episode, setEpisode] = useState<AnimeEpisode>(anime.episodes[0]);
  const [duration, setDuration] = useState<number>(1);
  const [moment, setMoment] = useState<number>(0);
  const [hoveredMoment, setHoveredMoment] = useState<number>(0);
  const [currentScreen, setCurrentScreen] = useState<NekoplayerScreenType>('none');
  const [localData, setLocalData] = useState<NekoplayerLocalstorageRecord>();
  const [isControlsHiddenUnderScreen, setIsControlsHiddenUnderScreen] = useState<boolean>(true); // Define if player timeline and menu will be hidden under screeen
  const [videoSrc, setVideoSrc] = useState('');

  // Settings states
  const [quality, setQuality] = useState<EpisodeQualityType>('q1080');
  const [speed, setSpeed] = useState(1);
  const [stretch, setStretch] = useState(false);

  // Player states
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPiP, setIsPip] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLastEpisode, setIsLastEpisode] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isPreviewOld, setIsPreviewOld] = useState(false); // Specify video previews dimensions
  const [isVideoProcessed, setIsVideoProcessed] = useState(false); // Specify if video procesed by the server (qualities & frames)

  // Refs
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const viewtimeRef = useRef(0);

  const titleMaxEpisode = useRef(0);

  // Idle timer
  useIdleTimer({
    timeout: 3000,
    throttle: 500,
    onIdle: () => setIsIdle(isPlaying),
    onAction: () => setIsIdle(false)
  });



  const KekwPlayerContextPayload: NekoplayerContextProps = {
    anime,
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
    DeleteWatchProgress,

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
  };



  // Handle titleMaxEpisode & isVideoLoading
  useEffect(() => {
    // Handle titleMaxEpisode
    anime.episodes.forEach(ep => {
      if (ep.order > titleMaxEpisode.current) titleMaxEpisode.current = ep.order;
    });

    const video = videoRef.current;

    if (video) {
      video.addEventListener('loadstart', () => {
        setIsVideoLoading(true);
      });

      video.addEventListener('loadeddata', () => {
        setIsVideoLoading(false);
      });
    };
  }, []);

  // Patch user watch progress on user exist
  useEffect(() => {
    // Patch watch progress
    window.addEventListener('beforeunload', SyncWatchProgress);
    document.addEventListener('visibilitychange', SyncWatchProgress);

    return () => {
      SyncWatchProgress();
    };
  }, []);

  // Fetch user progress
  useEffect(() => {
    const video = videoRef.current;
    if (typeof window === 'undefined' || !video) return;

    // Load default progress if screens are disabled
    if (disableScreens) {
      LoadDefaultPlayback();
      return;
    }

    const progress = getCurrentProgressRecord();

    if (progress && progress.moment > 10) {
      // Progress is present, purpose it to continue with

      setCurrentScreen('progress_continue');

      loadProgress();
      setLocalData(progress);
    } else {
      // Progress is missing, load default playback

      LoadDefaultPlayback();
    }
  }, [user]);



  // Handle general video & keyboard events & buffering
  useEffect(() => {
    const video = videoRef.current;
    const player = playerRef.current;
    if (!video || !player) return;

    let viewtimeInterval: NodeJS.Timeout;
    let onPausePatchTimeout: NodeJS.Timeout;



    // Hide context menu
    player.addEventListener('contextmenu', e => e.preventDefault());

    // Handle keyboard
    player.addEventListener('keydown', e => {
      const video = videoRef.current;
      const player = playerRef.current;
      if (!video || !player) return;

      const moment = video.currentTime;
      const duration = video.duration;

      const key = e.code;

      switch (key) {
        // Play/pause
        case 'Space': {
          if (!video.paused) {
            video.pause();
          } else {
            video.play().catch(e => null);
          }

          e.preventDefault();
          break;
        }

        // Play/pause
        case 'KeyK': {
          if (!video.paused) {
            video.pause();
          } else {
            video.play().catch(e => null);
          }

          break;
        }

        // Skip prev 10s
        case 'KeyJ': {
          if (moment - 10 >= 0) {
            changeMoment(moment - 10);
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip prev 5s
        case 'ArrowLeft': {
          if (moment - 5 >= 0) {
            changeMoment(moment - 5);
          } else {
            changeMoment(0);
          }

          break;
        }

        // Skip next 10s
        case 'KeyL': {
          if (moment + 10 >= duration) {
            changeMoment(duration);
          } else {
            changeMoment(moment + 10);
          }

          break;
        }

        // Skip next 5s
        case 'ArrowRight': {
          if (moment + 5 >= duration) {
            changeMoment(duration);
          } else {
            changeMoment(moment + 5);
          }

          break;
        }

        // Fullscreen
        case 'KeyF': {
          if (document.fullscreenElement) {
            document.exitFullscreen().catch(e => null);
          } else {
            player.requestFullscreen().catch(e => null);
          }

          break;
        }

        // PiP
        case 'KeyP': {
          if (document.fullscreenElement) {
            video.requestPictureInPicture().catch(e => null);
          } else {
            document.exitPictureInPicture().catch(e => null);
          }

          break;
        }

        // Mute
        case 'KeyM': {
          video.muted = !video.muted;

          break;
        }
      }
    });

    // Handle fullscreen
    player.addEventListener('fullscreenchange', () => setIsFullscreen(document.fullscreenElement ? true : false));

    // Handle loading
    video.addEventListener('waiting', () => setIsVideoLoading(true));

    // Handle playing
    video.addEventListener('playing', () => {
      setIsVideoLoading(false);
      setIsPlaying(true);

      clearInterval(viewtimeInterval);
      clearTimeout(onPausePatchTimeout);

      viewtimeInterval = setInterval(() => {
        viewtimeRef.current += 1;
      }, 1000);
    });

    // Handle playback rate
    video.addEventListener('ratechange', () => setSpeed(video.playbackRate));

    // Handle current time
    video.addEventListener('timeupdate', () => {
      const moment = video.currentTime;

      changeMoment(moment, true);
    });

    // Handle buffering
    video.addEventListener('progress', () => {
      const loaded = loadedRef.current;
      const buffered = video.buffered;
      if (!buffered.length || !loaded) return;

      const moment = video.currentTime;
      const duration = video.duration;

      for (let i = 0; i < buffered.length; i++) {
        const start = buffered.start(i);
        const end = buffered.end(i);

        if (moment >= start && moment <= end) {
          const offset = (end / duration) * 100;

          loaded.style.width = `${offset}%`;
        }
      }
    });

    // Handle playing
    video.addEventListener('play', () => setIsPlaying(true));

    // Handle pause & onPause patch timeout
    video.addEventListener('pause', () => {
      setIsPlaying(false);

      clearInterval(viewtimeInterval);
      clearTimeout(onPausePatchTimeout);

      // Patch progress if user not active at least two minutes
      onPausePatchTimeout = setTimeout(() => {
        SyncWatchProgress();
      }, 120000);
    });

    // Handle volume & muted
    video.addEventListener('volumechange', () => {
      setIsMuted(video.muted);
      setVolume(Math.floor(video.volume * 100));
    });

    // Handle PiP leave
    video.addEventListener('leavepictureinpicture', () => setIsPip(false));

    // Handle PiP enter
    video.addEventListener('enterpictureinpicture', () => setIsPip(true));



    return () => {
      video.remove();
    };
  }, []);

  // Handle preview visibility on touch
  useEffect(() => {
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement;
    const preview = document.querySelector(`#${NekoplayerIDs.Preview}`) as HTMLDivElement;
    if (!timeline || !preview) return;

    let isDragging = false;
    let touchTimeout: NodeJS.Timeout;

    timeline.addEventListener('touchstart', () => {
      clearTimeout(touchTimeout);
      timelineTouchStartHandler();

      touchTimeout = setTimeout(() => {
        timelineTouchEndHandler();
      }, 1000);
    }, { passive: false });

    timeline.addEventListener('touchmove', () => {
      clearTimeout(touchTimeout);
      timelineTouchStartHandler();

      touchTimeout = setTimeout(() => {
        timelineTouchEndHandler();
      }, 1000);
    }, { passive: false });

    timeline.addEventListener('pointerenter', () => timelineTouchStartHandler(), { passive: false });
    timeline.addEventListener('pointerdown', () => {
      isDragging = true;
      timelineTouchStartHandler();
    }, { passive: false });

    document.addEventListener('pointerup', () => {
      isDragging = false;
      timelineTouchEndHandler();
    }, { passive: false });
    timeline.addEventListener('pointerleave', () => {
      if (isDragging) return;
      timelineTouchEndHandler();
    }, { passive: false });



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
  }, []);

  // Handle preview move on timeline hover
  useEffect(() => {
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement;
    if (!timeline) return;

    function handlePointermove(e: PointerEvent) {
      movePreview(e.offsetX);
    }



    timeline.addEventListener('pointermove', handlePointermove, { passive: false });

    return () => {
      return timeline.removeEventListener('pointermove', handlePointermove);
    };
  }, [episode, isVideoProcessed]);

  // Handle update local progress on timeupdate & screens
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Save progress & handle screens
    function handleTimeupdate() {
      if (!video) return;

      // Save progress
      const moment = video.currentTime;

      if (moment > 5) {
        const prefArray = GetNekoplayerPreferences();
        const pref = prefArray.find(el => el.uuid === anime.uuid);

        // Abort sync out watch progress if user prefer not to do that
        if (pref?.saveProgress === false) return;

        updatePlayerProgress({
          dub: episode.dubberID,
          ep: episode.order,
          id: anime.uuid,
          moment
        });
      }

      // Handle screens
      const duration = video.duration;

      if (duration > 10 && moment && episode) {
        // title_end, episode_end, episode_last
        if (moment >= duration - 5) {
          const isNextEpisodeExist = anime.episodes.some(el => el.dubberID === episode.dubberID && el.order === episode.order + 1);
          const isLastDubbedEpisode = !isNextEpisodeExist && Number(anime.episodesCount) > episode.order;
          const isAnimeEnded = !isNextEpisodeExist && Number(anime.episodesCount) <= episode.order;

          if (isNextEpisodeExist) {
            setCurrentScreen('continue_watch');
          } else if (isAnimeEnded) {
            setCurrentScreen('anime_end');
          } else if (isLastDubbedEpisode) {
            setCurrentScreen('last_dubbed_episode');
          }
        } else {
          // Reset screen
          setCurrentScreen(prev => prev !== 'progress_continue' ? 'none' : 'progress_continue');
        }
      }
    }



    video.addEventListener('timeupdate', handleTimeupdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeupdate);
    };
  }, [episode]);

  // Handle cursor visibility in fullscreen mode
  useEffect(() => {
    // Hide cursor in fullscreen mode
    if (isIdle && isFullscreen) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
  }, [isIdle, isFullscreen]);

  // Handle quality change
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !episode) return;

    const videoUrl = episode.qualities[quality] ?? episode.qualities.q1080;

    if (video.src !== videoUrl) changeVideoSrc(videoUrl, moment, video.paused);
  }, [quality]);

  // Handle isControlsHiddenUnderScreen
  useEffect(() => {
    // Hide controls under progress_continue screen, otherwise show them

    setIsControlsHiddenUnderScreen(currentScreen === 'progress_continue');
  }, [currentScreen]);



  /** Load user progress */
  async function loadProgress() {
    const record = getCurrentProgressRecord();
    if (!record) return LoadDefaultPlayback();

    const episode = anime.episodes.find(el => el.dubberID === record.dub && el.order === record.ep);
    if (!episode) return LoadDefaultPlayback();

    setCurrentScreen('none');
    await changeEpisode(episode, record.moment, true);

    console.debug(`[nekoplayer]: User watch progress loaded. [dubber: ${record.dub}; episode: ${record.ep} (${prettySeconds(record.moment).pretty})]`);
  }

  /** Remove watch progress & load default */
  async function passProgress() {
    setCurrentScreen('none');

    console.debug(`[nekoplayer]: Watch progress been purged`);

    await LoadDefaultPlayback();
    await DeleteWatchProgress();
  }

  /** Setup with default player states */
  async function LoadDefaultPlayback() {
    const episode = anime.episodes[0];

    setCurrentScreen('none');
    await changeEpisode(episode, 0, true);

    console.debug(`[nekoplayer]: Default watch progress loaded`);
  }

  /** Sync current local watch progress with user */
  async function SyncWatchProgress() {
    if (!user.id) return;

    const prefArray = GetNekoplayerPreferences();
    const pref = prefArray.find(el => el.uuid === anime.uuid);

    // Abort sync out watch progress if user prefer not to do that
    if (pref?.saveProgress === false) return console.debug(`[nekoplayer]: Watch progress sync aborted due to user's preferences`);

    const record = getCurrentProgressRecord({ localOnly: true });
    if (!record) return;

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
      });

      viewtimeRef.current = 0;
    } catch (e) {
      HandleClientError(e);
    }

    console.debug(`[nekoplayer]: Watch progress have been updated. [dubber: ${record.dub}; episode: ${record.ep} (${prettySeconds(record.moment).pretty})]`);
  }

  /** 
   * Get user watch progress
   * 
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
      };
    }

    // Get progress from local storage (by default)
    const localData = GetNekoplayerData();
    if (!localData) return null;

    const record = localData.find(el => el.id === anime.uuid);
    if (!record) return null;

    return record;
  }

  /** Update user progress */
  function updatePlayerProgress(record: NekoplayerLocalstorageRecord) {
    let items = GetNekoplayerData();
    items = [...items.filter(el => el.id !== record.id), record];

    localStorage.setItem(LocalStorageKeys.NekoplayerData, JSON.stringify(items));
  }

  /** Delete user progress record */
  async function DeleteWatchProgress(notify?: boolean) {
    const records = GetNekoplayerData();
    const record = getCurrentProgressRecord();

    try {
      await API.patchUser({ removeWatchProgress: { animeId: anime.uuid } });
    } catch (e) {
      HandleClientError(e);
    }

    notify && NotifySuccess({ title: 'Прогрес перегляду видалено', message: '' });

    console.debug(`[nekoplayer]: User watch progress deleted. [dubber: ${record?.dub}]`);
    localStorage.setItem(LocalStorageKeys.NekoplayerData, JSON.stringify(records.filter(record => record.id !== anime.uuid)));
  }

  /** Change dub, ep & moment
   * Will re-define previews format & change video src
   * Will set default dub & ep if they are not found
   * 
   * @default moment 0
   */
  async function changeEpisode(episode: AnimeEpisode, moment?: number, stopPlayback?: boolean) {
    // Set optional vars
    moment = moment ?? 0;

    // Set first dub in array if id not found
    if (!anime.episodes.find(el => el.dubberID === episode.dubberID && el.order === episode.order)) {
      episode = anime.episodes[0];
    }

    setEpisode(episode);

    await Promise.all([
      definePreviewFormat(episode.frames[0]),
      changeVideoSrc(episode.qualities[quality] ?? episode.qualities.q1080, moment, stopPlayback),
    ]);

    // Check if episode is last
    setIsLastEpisode(!anime.episodes.some(el => el.dubberID === episode.dubberID && el.order === episode.order + 1));

    // Reset progress moment
    updatePlayerProgress({
      dub: episode.dubberID,
      ep: episode.order,
      id: anime.uuid,
      moment
    });
  }

  /** Change video src & moment */
  async function changeVideoSrc(src: string, moment?: number, stopPlayback?: boolean) {
    // Set optional vars
    moment = moment ?? 0;

    const video = videoRef.current;
    if (!video) return;

    if (src.includes('.m3u8')) {
      // HLS streaming
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support
        setVideoSrc(src);
      } else if (Hls.isSupported()) {
        const hls = new Hls();

        hls.loadSource(src);
        hls.attachMedia(video);
      } else {
        NotifyWarn({ title: 'Помилка відео', message: `Ваш браузер не підтримує HLS, спробуйте інший` });
      }
    } else {
      // Default streaming
      setVideoSrc(src);
    }

    await new Promise((res, rej) => {
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration);
        res(true);
      });
    });

    changeMoment(moment);

    if (stopPlayback) {
      video.pause();
    } else {
      video.muted = false;
      video.play().catch(e => { });
    }
  }

  /** Change video moment
   * Will set moment equal duration if moment greater that it
   * 
   * @param synthetic Specifies if function called by user interaction. In synthetic action preview box will not move & new moment will not be set
   */
  function changeMoment(moment: number, synthetic?: boolean) {
    const video = videoRef.current;
    const progress = progressRef.current;
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement;
    if (!video || !progress || !timeline) return;

    const duration = video.duration;

    // Check if moment less than duration
    if (moment > duration) moment = duration;

    if (!synthetic) {
      video.currentTime = moment;
      movePreview(moment / duration * timeline.offsetWidth);
    }

    setMoment(moment);

    // Move progress
    const offset = moment / duration * 100;

    progress.style.width = `${offset}%`;
  }

  /** Move & set video preview */
  function movePreview(x: number) {
    const video = videoRef.current;
    const preview = previewRef.current;
    const timeline = document.querySelector(`#${NekoplayerIDs.Timeline}`) as HTMLDivElement;
    if (!video || !preview || !timeline) return;

    const duration = video.duration;
    const timelineWidth = timeline.offsetWidth;
    const previewWidth = preview.offsetWidth;
    const halfPreviewWidth = previewWidth / 2;
    const breakpoints = {
      left: halfPreviewWidth,
      right: timelineWidth - halfPreviewWidth
    };

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
    if (!episode || !isVideoProcessed) return;

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

    img.setAttribute('src', frame);
    img.style.objectPosition = `-${offset}px`;
  }

  /** Defines previews format from 0 index frame of current dub (height 120 = old, 135 = new) */
  async function definePreviewFormat(frameURL: string) {
    try {
      const dimensions = await getImageSize(frameURL);

      setIsPreviewOld(dimensions.height === 120 ? true : false);
      setIsVideoProcessed(true);
    } catch (e) {
      setIsVideoProcessed(false);
    }
  }



  return <NekoplayerContext.Provider value={KekwPlayerContextPayload}>
    <div className="w-full h-full relative overflow-hidden flex flex-col justify-between bg-black outline-none" id="player" tabIndex={0} ref={playerRef}>
      {/* Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        {/* Loader */}
        <div className={cn(`w-full h-full absolute top-0 left-0 flex justify-center items-center duration-200 touch-none pointer-events-none`, !isVideoLoading && 'opacity-0')}>
          <loader.DotPulse color="#fff" size={80} />
        </div>

        <video src={videoSrc} className={cn(`w-full h-full`, stretch && 'object-cover')} preload="metadata" playsInline controlsList="nodownload" muted={isMuted} controls={false} id="kekwplayer-video" ref={videoRef}></video>
      </div>

      {/* Screens */}
      {!disableScreens && <NPScreens />}

      {/* Menu */}
      <NPMenu className={cn(!isControlsHiddenUnderScreen && 'z-[20]')} order={episode.order} isLastEpisode={isLastEpisode} totalEpisodesCount={anime.episodesCount ?? titleMaxEpisode.current} isIdle={isIdle} />

      {/* Bottom */}
      <div className={cn(`nekoplayer-bottom flex gap-[32px] items-center justify-between z-[10] relative duration-200 px-[24px] py-[12px] backdrop-blur-[4px]`, isIdle && 'translate-y-[100%]', !isControlsHiddenUnderScreen && 'z-[20]', duration === 1 && 'invisible')} style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .6))' }} ref={bottomRef}>
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
    </div>
  </NekoplayerContext.Provider>;
};

export default Nekoplayer;