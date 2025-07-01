'use client'

import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import * as loader from '@uiball/loaders';
import { NextPage } from 'next';
import Link from 'next/link';
import { useIdleTimer } from 'react-idle-timer';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoNekomiLogo } from '~/assets/Icons';
import AnimeItem from '~/components/AnimeItem';
import StyledImage from '~/components/Styled/StyledImage';
import StyledSwiper from '~/components/Styled/StyledSwiper';
import { useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { AnimeWithMedia } from '~/interfaces/types';
import { Routes } from '~/routes';
import { cn } from '~/utils/classnames';
import { GetNekoplayerData } from '~/utils/nekoplayer-utils';
import { prettySeconds } from '~/utils/utils';



type HomeHeadlinerScreen = 'preview' | 'trailer'

interface HomeHeadlinerProps {
  headliner: AnimeWithMedia
}

interface HomeCategoryProps {
  label: string
  icon: React.ReactElement
  hydratedAnimes: HydratedAnime[]
}

interface HomeAnimeSwiperProps {
  hydratedAnimes: HydratedAnime[]
}

interface HomeDividerProps {
  label: string
  icon: React.ReactElement
}

interface HomeWatchHeadlinerProps {
  headliner: AnimeWithMedia

  className?: string
}

interface HomeHeadlinerPreviewProps {
  headliner: AnimeWithMedia
}

interface HomeHeadlinerTrailerProps {
  headliner: AnimeWithMedia

  activeScreen: HomeHeadlinerScreen
  setActiveScreen: (val: HomeHeadlinerScreen) => void
}



export const HomeHeadliner: NextPage<HomeHeadlinerProps> = ({ headliner }) => {
  const [activeScreen, setActiveScreen] = useState<HomeHeadlinerScreen>('preview')

  const previewScreenRef = useRef<HTMLDivElement>(null)
  const trailerScreenRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    setTimeout(() => setActiveScreen('trailer'), 5000);
  }, [])

  useEffect(() => {
    const poster = previewScreenRef.current;
    const trailer = trailerScreenRef.current;
    if (!poster || !trailer) return;

    (async function () {
      if (activeScreen === 'trailer') {
        await hide(poster);
        await show(trailer)
      } else {
        await hide(trailer);
        await show(poster)
      }



      async function hide(el: HTMLElement) {
        el.style.opacity = '0';
      }

      async function show(el: HTMLElement) {
        return new Promise(res => {
          setTimeout(() => {
            el.style.opacity = '1';
            res(1);
          }, 500);
        })
      }
    })()
  }, [activeScreen])



  return <div className="wrapper w-full h-[100svh] !mb-[40px]">
    <div className={cn(`home-headliner-screen`)} ref={previewScreenRef}>
      <HomeHeadlinerPreview headliner={headliner} />
    </div>

    <div className={cn(`home-headliner-screen opacity-0`)} ref={trailerScreenRef}>
      <HomeHeadlinerTrailer headliner={headliner} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>

    <div className="home-headliner-screen items-center justify-center !z-[1]">
      <IcoNekomiLogo width={128} height={128} fill="#fff" />
    </div>
  </div>
}

export const HomeCategory: NextPage<HomeCategoryProps> = ({ label, icon, hydratedAnimes }) => {
  return <div className="flex flex-col gap-[16px]">
    <HomeDivider icon={icon} label={label} />

    {hydratedAnimes.length > 10 ? <div className="flex flex-col gap-[8px]">
      <HomeAnimesSwiper hydratedAnimes={hydratedAnimes.slice(0, 10)} />
      <HomeAnimesSwiper hydratedAnimes={hydratedAnimes.slice(10, 20)} />
    </div> : <HomeAnimesSwiper hydratedAnimes={hydratedAnimes} />}
  </div>
}



const HomeAnimesSwiper: NextPage<HomeAnimeSwiperProps> = ({ hydratedAnimes }) => {
  const id = useId().replaceAll(':', '');

  return <StyledSwiper>
    {hydratedAnimes.map((hydrated, i) => {
      return <AnimeItem hydrated={hydrated} className="!w-[230px]" key={`homecategory-${id}--${i}`} />
    })}
  </StyledSwiper>
}

const HomeDivider: NextPage<HomeDividerProps> = ({ icon, label }) => {
  return <div className="flex items-center gap-[16px]">
    <div className="flex items-center gap-[16px] shrink-0">
      <div className="w-[32px] h-[32px] flex justify-center items-center max-md:w-[24px] max-md:h-[24px]">
        {icon}
      </div>
      <h3 className="text-white text-[32px] font-bold max-md:text-[24px] font-manrope">{label}</h3>
    </div>

    <span className="w-full h-[3px] gradient--primary"></span>
  </div>
}

const HomeWatchHeadliner: NextPage<HomeWatchHeadlinerProps> = ({ headliner, className }) => {
  const currentUser = useAppSelector(state => state.user);

  const [label, setLabel] = useState('');
  const [continueWatch, setContinueWatch] = useState(false)



  // Get user watch progress from state
  useMemo(() => {
    const watchProgress = currentUser.watchProgress.find(el => el.titleID === headliner.uuid);

    if (watchProgress && watchProgress.progress > 3) {
      setLabel(`продовжити (${watchProgress.episodeOrder} еп, ${prettySeconds(watchProgress.progress).pretty})`);
      setContinueWatch(true);
    } else {
      setLabel('розпочати перегляд')
    }
  }, [currentUser])

  // Get user watch progress from local storage
  useEffect(() => {
    if (continueWatch || typeof window === 'undefined') return;

    const localData = GetNekoplayerData();
    const localCurrent = localData.find(el => el.id === headliner.uuid);

    if (localCurrent && localCurrent.moment > 3) {
      setLabel(`продовжити (${localCurrent.ep} еп, ${prettySeconds(localCurrent.moment).pretty})`);
      setContinueWatch(true);
    }
  }, [])



  return <Link href={Routes.watch.path({ query: headliner.slug })} className={cn(`ui-button flex items-center justify-center gap-[24px] bg-dark-medium px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 max-sm:px-[16px] max-sm:py-[12px]`, className)} tabIndex={0}>
    {continueWatch && <MaterialSymbol icon="resume" size={40} className="text-white max-sm:!text-[24px]" />}
    {!continueWatch && <MaterialSymbol icon="live_tv" size={40} className="text-white max-sm:!text-[24px]" />}
    <p className="text-white text-[24px] uppercase max-sm:text-[16px] font-manrope break-all">{label}</p>
  </Link>
}

const HomeHeadlinerPreview: NextPage<HomeHeadlinerPreviewProps> = ({ headliner }) => {
  const [isSm, setIsSm] = useState(false)



  useEffect(() => {
    handleIsSm();

    window.addEventListener('resize', handleIsSm)
  }, [])

  function handleIsSm() {
    setIsSm(window.innerWidth <= 620)
  }



  return <>
    {/* Background */}
    <div className="w-full h-full absolute top-0 left-0">
      {!isSm && <StyledImage src={headliner.backgroundURL} width="100%" height="100%" loading="eager" />}
      {isSm && <StyledImage src={headliner.poster} width="100%" height="100%" loading="eager" />}

      <div className="absolute top-0 left-0 w-full h-full bg-dark/[.2] z-[2]"></div>
    </div>

    {/* Main */}
    <div className="relative z-[3] max-w-[1170px] flex flex-col gap-[24px] max-lg:max-w-none">
      <div className="flex flex-col gap-[8px]">
        <p className="text-white text-[24px] uppercase max-md:text-[16px] font-manrope">ОБРАНЕ КОРИСТУВАЧАМИ NEKOMI</p>
        <h1 className="text-white text-[60px] font-black text-ellipsis line-clamp-[2] uppercase max-lg:text-[40px] max-sm:text-[32px] max-sm:line-clamp-4 font-manrope w-fit" title={headliner.names.ukr}>{headliner.names.ukr}</h1>
      </div>

      <p className={cn(`text-[24px] text-ellipsis line-clamp-[3] max-md:text-[16px] font-manrope w-fit`, headliner.description ? 'text-white' : 'text-grey-new')} title={headliner.description ?? undefined}>{headliner.description ?? 'Опис відсутній'}</p>
    </div>

    {/* Watch */}
    <div className="absolute bottom-[60px] z-[3] pr-[32px] max-sm:w-full max-sm:bottom-[90px]">
      <HomeWatchHeadliner headliner={headliner} />
    </div>
  </>
}

const HomeHeadlinerTrailer: NextPage<HomeHeadlinerTrailerProps> = ({ headliner, activeScreen, setActiveScreen }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null)



  // Idle timer
  useIdleTimer({
    timeout: 5000,
    throttle: 500,
    onIdle: () => setIsIdle(true),
    onAction: () => setIsIdle(false)
  })

  // Init
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle loading
    video.addEventListener('waiting', () => setIsLoading(true));
    video.addEventListener('playing', () => setIsLoading(false));

    video.addEventListener('ended', () => setActiveScreen('preview'));
    video.addEventListener('contextmenu', e => e.preventDefault());
  }, [])

  // Handle video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (activeScreen === 'trailer') {
      video.play().catch(() => { });
    } else {
      video.currentTime = 0;
      video.pause();
    }

  }, [activeScreen])



  function mute() {
    const video = videoRef.current;
    if (!video) return;

    if (video.muted) {
      video.muted = false;
    } else {
      video.muted = true;
    }

    setIsMuted(video.muted);
  }



  return (
    <>
      {/* Trailer */}
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black">
        <video src={headliner.videoURL} muted controls={false} ref={videoRef} preload="metadata" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full block z-[2]" style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .5))' }}></div>

        {/* Loading */}
        <div className={cn(`duration-200 z-[3]`, !isLoading && 'opacity-0 invisible')}>
          <loader.DotPulse color="#fff" size={80} />
        </div>
      </div>

      {/* Main */}
      <div className={cn(`wrapper !absolute bottom-[60px] left-0 flex flex-col gap-[16px] max-w-[1170px] duration-200 z-[3] max-sm:pr-[16px] max-sm:max-w-none max-sm:w-full max-sm:bottom-[90px]`, isIdle && 'translate-y-[40px] opacity-0 invisible')}>
        <h3 className="text-white uppercase text-[32px] font-black text-ellipsis line-clamp-[1] font-manrope max-md:text-[24px] max-sm:line-clamp-3 w-fit" title={headliner.names.ukr}>{headliner.names.ukr}</h3>

        <div className="flex gap-[8px] w-full">
          <HomeWatchHeadliner headliner={headliner} className="max-sm:w-full" />

          <button className="ui-button relative p-[16px] duration-200 rounded-[4px] flex justify-center items-center" tabIndex={0} onClick={mute}>
            <div className="relative w-[40px] h-[40px] max-sm:w-[24px] max-sm:h-[24px]">
              <MaterialSymbol icon="volume_off" size={40} className={cn(`text-white absolute top-0 left-0 duration-200 max-sm:!text-[24px]`, !isMuted && 'opacity-0')} />
              <MaterialSymbol icon="volume_up" size={40} className={cn(`text-white absolute top-0 left-0 duration-200 max-sm:!text-[24px]`, isMuted && 'opacity-0')} />
            </div>
          </button>
        </div>
      </div>
    </>
  )
}