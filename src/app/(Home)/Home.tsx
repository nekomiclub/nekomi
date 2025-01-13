'use client'

import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import * as loader from '@uiball/loaders';
import { NextPage } from 'next';
import Link from 'next/link';
import { useIdleTimer } from 'react-idle-timer';
import { Swiper, SwiperSlide } from 'swiper/react';

import StyledImage from '~/components/UI/StyledImage';
import { IcoClockOutlined } from '../../assets/Clock';
import { IcoExternalLink, IcoGhost, IcoPlay, IcoStar, IcoStarRating } from '../../assets/Icons';
import { IcoPlayerVolumeMuted, IcoPlayerVolumeNormal } from '../../assets/PlayerVolume';
import { TitleCard } from '../../components/Components';
import { createID } from '../../components/handlers';
import { IKekwPlayerLocalDataItem, secondsToReadable } from '../../components/KekwPlayer/KekwPlayer';
import { config, CONSTS } from '../../config';
import { ITitle } from '../../interfaces/ITitle';
import { IUserWatchProgress } from '../../interfaces/IUser';
import { routes } from '../../routes';



interface ITitleWithMediaMeta extends ITitle {
  videoURL: string
  backgroundURL: string
}

export interface IHomeWrapped {
  /** Home featured titles */
  featured: ITitleWithMediaMeta[]

  popular: ITitle[]
  updatedRecently: ITitle[]
  hightRated: ITitle[]
}

interface IProps {
  data: IHomeWrapped
  watchProgress: IUserWatchProgress[]
}

type TCategory = keyof IHomeWrapped;



const WatchHeadliner: NextPage<{ className?: string, watchProgress?: IUserWatchProgress, headliner: ITitle }> = ({ headliner, watchProgress, className }) => {
  const DEFAULT_LABEL = 'розпочати перегляд'
  const [label, setLabel] = useState(DEFAULT_LABEL)

  // Set label by user watch progress
  useMemo(() => {
    if (watchProgress) {
      setLabel(`продовжити (${watchProgress.episodeOrder} серія, ${secondsToReadable(watchProgress.progress).pretty})`);
    }
  }, [])

  // Set label by user local storage
  useEffect(() => {
    // Skip if label already setted-up
    if (label === DEFAULT_LABEL) return;

    const localData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[];
    const localCurrent = localData.find(el => el.id === headliner.id);

    if (localCurrent) {
      setLabel(`продовжити (${localCurrent.ep} серія, ${secondsToReadable(localCurrent.moment).pretty})`);
    }
  }, [])



  return (
    <Link href={`${config.URL.baseURL}${routes.watch_title.path}/${headliner.code}`} className={`flex items-center justify-center gap-[16px] bg-grey px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback ${className ? className : ''} max-[784px]:px-[16px] max-[784px]:py-[12px]`} tabIndex={0}>
      <IcoPlay width={40} height={40} />
      <p className="text-white text-[24px] uppercase max-[784px]:text-[16px]">{label}</p>
    </Link>
  )
}



const Home: NextPage<IProps> = ({ data, watchProgress }) => {
  const { featured, hightRated, popular, updatedRecently } = data;

  const [isTrailerVisible, setIsTrailerVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false)

  const posterScreenRef = useRef<HTMLDivElement>(null)
  const trailerScreenRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    setTimeout(() => {
      setIsTrailerVisible(true)

      return;
    }, 6000);

    handleResize();

    window.addEventListener('resize', () => {
      handleResize();
    })



    function handleResize() {
      if (window.innerWidth < 784) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [])

  useEffect(() => {
    const poster = posterScreenRef.current;
    const trailer = trailerScreenRef.current;

    if (!poster || !trailer) return;

    (async function () {
      if (isTrailerVisible) {
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
  }, [isTrailerVisible])



  const PosterScreen = memo(function PosterScreen() {
    return (
      <>
        {/* Background */}
        <div className="w-full h-full absolute top-0 left-0">
          <StyledImage src={isMobile ? featured[0].poster : featured[0].backgroundURL} width="100%" height="100%" alt="..." loading="eager" priority />
          <div className="absolute top-0 left-0 w-full h-full bg-dark/[.4] z-[2]"></div>
        </div>

        {/* Main */}
        <div className="relative z-[3] max-w-[1170px] flex flex-col gap-[24px] max-[1170px]:max-w-none">
          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[24px] uppercase max-[784px]:text-[16px]">набирає популярність</p>
            <h1 className="text-white text-[60px] font-black text-ellipsis line-clamp-[2] uppercase max-[1170px]:text-[40px] max-[560px]:text-[32px] max-[560px]:line-clamp-4">{featured[0].names.ukr}</h1>
          </div>

          <h3 className={`text-[24px] text-ellipsis line-clamp-[2] max-[784px]:text-[16px] ${featured[0].description ? 'text-white' : 'text-lightGrey'}`}>{featured[0].description || 'Опис відсутній'}</h3>
        </div>

        {/* Watch */}
        <div className="absolute bottom-[60px] z-[3] pr-[32px] max-[560px]:w-full">
          <WatchHeadliner headliner={featured[0]} watchProgress={watchProgress.find(el => el.titleID === featured[0].id)} />
        </div>
      </>
    )
  })

  const TrailerScreen = memo(function TrailerScreen() {
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

      // Set default
      video.volume = 1;
      video.pause();

      // Handle loading
      video.addEventListener('waiting', () => setIsLoading(true));
      video.addEventListener('playing', () => setIsLoading(false));

      video.addEventListener('ended', () => setIsTrailerVisible(false));
      video.addEventListener('contextmenu', e => e.preventDefault());
    }, [])

    // Handle mute
    useEffect(() => {
      const video = videoRef.current;

      if (!video) return;

      video.muted = isMuted;
    }, [isMuted])

    // Handle video events
    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      if (isTrailerVisible) {
        video.play();
      } else {
        video.currentTime = 0;
        video.pause();
      }

    }, [isTrailerVisible])

    return (
      <>
        {/* Trailer */}
        <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
          <video src={featured[0].videoURL} controls={false} ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full block z-[2]" style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .5))' }}></div>

          {/* Loading */}
          <div className={`duration-200 z-[3] ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <loader.DotPulse color="#fff" size={80} />
          </div>
        </div>

        {/* Main */}
        <div className={`absolute bottom-[60px] flex flex-col gap-[16px] max-w-[1170px] duration-200 z-[3] ${isIdle ? 'translate-y-[40px] opacity-0 invisible' : 'translate-y-0 opacity-100 visible'} pr-[32px] max-[650px]:pr-[16px]`}>
          <h3 className="text-white uppercase text-[32px] font-black text-ellipsis line-clamp-[1] max-[784px]:text-[24px] max-[650px]:line-clamp-3">{featured[0].names.ukr}</h3>

          <div className="flex gap-[8px] w-full max-[450px]:flex-col">
            <WatchHeadliner className="w-full" headliner={featured[0]} watchProgress={watchProgress.find(el => el.titleID === featured[0].id)} />

            <button className="relative bg-grey p-[16px] duration-200 rounded-[4px] flex justify-center hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback" tabIndex={0} onClick={() => setIsMuted(!isMuted)}>
              {/* Placeholder */}
              <div className="w-[40px] h-[40px] max-[784px]:w-[32px] max-[784px]:h-[32px]">
                <IcoPlayerVolumeNormal width={40} height={40} className={`absolute duration-200 ${isMuted ? 'opacity-100' : 'opacity-0'} max-[784px]:w-[32px] max-[784px]:h-[32px]`} />
                <IcoPlayerVolumeMuted width={40} height={40} className={`absolute duration-200 ${isMuted ? 'opacity-0' : 'opacity-100'} max-[784px]:w-[32px] max-[784px]:h-[32px]`} />
              </div>
            </button>
          </div>
        </div>
      </>
    )
  })

  const Label = memo(function Label({ icon, label }: { label: string, icon: React.ReactElement }) {
    return (
      <div className="flex items-center gap-[16px]">
        <div className="flex items-center gap-[16px] shrink-0">
          <div className="w-[32px] h-[32px] max-[880px]:w-[24px] max-[880px]:h-[24px]">
            {icon}
          </div>
          <h3 className="text-white text-[32px] font-bold max-[880px]:text-[24px]">{label}</h3>
        </div>

        <span className="w-full h-[3px] gradient--primary"></span>
      </div>
    )
  })

  const Category = memo(function Category({ type }: { type: TCategory }) {
    const id = createID();
    let icon = <></>;
    let label = '...';
    let titles: ITitle[] = []

    if (type === 'popular') {
      label = 'Популярні'
      icon = <IcoStar className="w-full h-full" />
      titles = popular
    } else if (type === 'hightRated') {
      label = 'З високою оцінкою'
      icon = <IcoStarRating className="w-full h-full" />
      titles = hightRated
    } else if (type === 'updatedRecently') {
      label = 'Оновлено нещодавно'
      icon = <IcoClockOutlined className="w-full h-full" />
      titles = updatedRecently
    }

    const TitlesRow = memo(function TitlesRow({ titles }: { titles: ITitle[] }) {
      return <div className="min-w-0">
        <Swiper spaceBetween={16} slidesPerView={'auto'} className="ml-0">
          {titles.map(title => {
            return <SwiperSlide className="!w-fit" key={`category-${id}--${title.id}`} >
              <TitleCard title={title} className="!w-[230px]" />
            </SwiperSlide>
          })}
        </Swiper>
      </div>
    })

    return (
      <div className="flex flex-col gap-[16px]">
        <Label icon={icon} label={label} />

        {titles.length ? <>
          {titles.length > 10 ? <div className="flex flex-col gap-[8px]">
            <TitlesRow titles={titles.slice(0, 10)} />
            <TitlesRow titles={titles.slice(10, 20)} />
          </div> : <TitlesRow titles={titles} />}
        </> : <div className="flex items-center justify-center gap-[24px]">
          <IcoGhost width={32} height={32} fill="#747474" />
          <p className="text-lightGrey">Тайтли відсутні</p>
        </div>}
      </div>
    )
  })



  return (
    <>
      <main className="w-full h-full bg-dark min-h-screen">
        {/* Headliner */}
        <div className="wrapper w-full h-full min-h-screen !mb-[40px]">
          <div className={`w-full h-full min-h-screen flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-100`} ref={posterScreenRef}>
            <PosterScreen />
          </div>

          <div className={`w-full h-full min-h-screen flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-0`} ref={trailerScreenRef}>
            <TrailerScreen />
          </div>
        </div>

        {/* Categories */}
        <div className="wrapper gap-[32px]">
          <Category type="popular" />
        </div>


        <div className="wrapper bg-darkGrey !flex-row gap-[60px] py-[60px] items-center !my-[60px] max-[880px]:!flex-col">
          <IcoGhost width={128} height={128} className="shrink-0" />

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-white text-[40px] font-bold max-[650px]:text-[32px]">А ти, підписаний на <span className="text-gradientPrimaryFallback">телеграм nekomi?</span></h2>
              <p className="text-white text-[24px] max-[650px]:text-[16px]">Тут то ти і попався. Там публікується багато цікавого. Новини, оновлення там, та всяке інше з аніме тематики.</p>
            </div>

            <div className="flex flex-col gap-[8px] w-fit max-[650px]:w-full">
              <Link href={CONSTS.social.telegram} target="_blank" className="px-[16px] py-[16px] rounded-[2px] bg-grey flex items-center justify-center gap-[16px] duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback">
                <IcoExternalLink width={32} height={32} />
                <p className="text-white text-[24px] uppercase max-[650px]:text-[16px]">підписатися</p>
              </Link>
              <p className="text-lightGrey max-[650px]:text-center">Підпишись будь ласка, нам буде приємно 👉👈</p>
            </div>
          </div>
        </div>

        <div className="wrapper gap-[32px]">
          <Category type="updatedRecently" />
          <Category type="hightRated" />
        </div>
      </main>
    </>
  );
}



export default Home;