'use client'

import React, { useEffect, useId, useMemo, useRef, useState } from 'react'
import * as loader from '@uiball/loaders';
import { NextPage } from 'next';
import Link from 'next/link';
import { useIdleTimer } from 'react-idle-timer';
import { MaterialSymbol } from 'react-material-symbols';
import { Swiper, SwiperSlide } from 'swiper/react';

import StyledImage from '~/components/StyledImage';
import { IcoClockOutlined } from '../../assets/Clock';
import { IcoGhost, IcoNekomiLogo, IcoStar, IcoStarRating } from '../../assets/Icons';
import { cn, TitleCard } from '../../components/Components';
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
  featuredAnime: ITitleWithMediaMeta
}

type TCategory = keyof IHomeWrapped;



const WatchHeadliner: NextPage<{ className?: string, watchProgress?: IUserWatchProgress, headliner: ITitle }> = ({ headliner, watchProgress, className }) => {
  const DEFAULT_LABEL = 'розпочати перегляд'
  const [label, setLabel] = useState(DEFAULT_LABEL)

  // Set label by user watch progress
  useMemo(() => {
    if (watchProgress && watchProgress.progress > 3) {
      setLabel(`продовжити (${watchProgress.episodeOrder} еп, ${secondsToReadable(watchProgress.progress).pretty})`);
    }
  }, [])

  // Set label by user local storage
  useEffect(() => {
    // Skip if label already setted-up
    if (label === DEFAULT_LABEL) return;

    const localData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[];
    const localCurrent = localData.find(el => el.id === headliner.id);

    if (localCurrent && localCurrent.moment > 3) {
      setLabel(`продовжити (${localCurrent.ep} еп, ${secondsToReadable(localCurrent.moment).pretty})`);
    }
  }, [])



  return (
    <Link href={`${config.URL.baseURL}${routes.watch_title.path}/${headliner.code}`} className={`flex items-center justify-center gap-[24px] bg-dark-medium px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 border border-dark-light hover:bg-dark-light focus-visible:bg-dark-light ${className ? className : ''} max-sm:px-[16px] max-sm:py-[12px]`} tabIndex={0}>
      {label === DEFAULT_LABEL && <MaterialSymbol icon="live_tv" size={40} className="text-white max-sm:!text-[24px]" />}
      {label !== DEFAULT_LABEL && <MaterialSymbol icon="resume" size={40} className="text-white max-sm:!text-[24px]" />}
      <p className="text-white text-[24px] uppercase max-sm:text-[16px] font-manrope break-all">{label}</p>
    </Link>
  )
}



const Home: NextPage<IProps> = ({ data, watchProgress, featuredAnime }) => {
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



  return (
    <>
      <main className="w-full h-full bg-dark min-h-screen">
        {/* Headliner */}
        <div className="wrapper w-full h-[100svh] !mb-[40px]">
          <div className={`w-full h-full flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-100`} ref={posterScreenRef}>
            <PosterScreen featured={featuredAnime} isMobile={isMobile} watchProgress={watchProgress} />
          </div>

          <div className={`w-full h-full flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-0`} ref={trailerScreenRef}>
            <TrailerScreen featured={featuredAnime} isTrailerVisible={isTrailerVisible} setIsTrailerVisible={setIsTrailerVisible} watchProgress={watchProgress} />
          </div>
        </div>

        {/* Categories */}
        <div className="wrapper gap-[32px]">
          <Category type="popular" homeWrapped={data} />
        </div>


        <div className="wrapper bg-dark-bright !flex-row gap-[60px] py-[60px] !px-[16px] items-center !my-[60px] max-md:!flex-col">
          <IcoNekomiLogo width={256} height={256} className="shrink-0 max-md:w-[128px] max-md:h-[128px]" fill="#fff" />

          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="text-white text-[40px] font-bold max-[650px]:text-[32px] font-manrope">А ти, підписаний на <span className="text-primary">телеграм nekomi?</span></h2>
              <p className="text-white text-[24px] max-[650px]:text-[16px] font-manrope">Тут то ти і попався. Там публікується багато цікавого. Новини, оновлення там, та всяке інше з аніме тематики.</p>
            </div>

            <div className="flex flex-col gap-[8px] w-fit max-[650px]:w-full">
              <Link href={CONSTS.social.telegram} target="_blank" className="px-[16px] py-[16px] rounded-[2px] bg-dark-medium border border-dark-light flex items-center justify-center gap-[16px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light active:scale-[.95]">
                <MaterialSymbol icon="ungroup" size={24} className="text-white" />
                <p className="text-white text-[24px] uppercase max-[650px]:text-[16px] font-manrope">підписатися</p>
              </Link>
              <p className="text-lightGrey max-[650px]:text-center font-manrope">Підпишись будь ласка, нам буде приємно 👉👈</p>
            </div>
          </div>
        </div>

        <div className="wrapper gap-[32px]">
          <Category type="updatedRecently" homeWrapped={data} />
          <Category type="hightRated" homeWrapped={data} />
        </div>
      </main>
    </>
  );
}

function PosterScreen({ featured, watchProgress }: { isMobile: boolean, featured: ITitleWithMediaMeta, watchProgress: IUserWatchProgress[] }) {
  return <>
    {/* Background */}
    <div className="w-full h-full absolute top-0 left-0">
      <StyledImage src={featured.backgroundURL} width="100%" height="100%" alt="..." loading="eager" priority />
      <div className="absolute top-0 left-0 w-full h-full bg-dark/[.4] z-[2]"></div>
    </div>

    {/* Main */}
    <div className="relative z-[3] max-w-[1170px] flex flex-col gap-[24px] max-lg:max-w-none">
      <div className="flex flex-col gap-[8px]">
        <p className="text-white text-[24px] uppercase max-md:text-[16px] font-manrope">ОБРАНЕ КОРИСТУВАЧАМИ NEKOMI</p>
        <h1 className="text-white text-[60px] font-black text-ellipsis line-clamp-[2] uppercase max-lg:text-[40px] max-sm:text-[32px] max-sm:line-clamp-4 font-manrope">{featured.names.ukr}</h1>
      </div>

      <p className={cn(`text-[24px] text-ellipsis line-clamp-[3] max-md:text-[16px] font-manrope`, featured.description ? 'text-white' : 'text-grey-new')}>{featured.description ?? 'Опис відсутній'}</p>
    </div>

    {/* Watch */}
    <div className="absolute bottom-[60px] z-[3] pr-[32px] max-sm:w-full">
      <WatchHeadliner headliner={featured} watchProgress={watchProgress.find(el => el.titleID === featured.id)} />
    </div>
  </>
}

function TrailerScreen({ isTrailerVisible, setIsTrailerVisible, featured, watchProgress }: { isTrailerVisible: boolean, setIsTrailerVisible: (val: boolean) => void, featured: ITitleWithMediaMeta, watchProgress: IUserWatchProgress[] }) {
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
        <video src={featured.videoURL} controls={false} ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full block z-[2]" style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .5))' }}></div>

        {/* Loading */}
        <div className={`duration-200 z-[3] ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <loader.DotPulse color="#fff" size={80} />
        </div>
      </div>

      {/* Main */}
      <div className={cn(`wrapper absolute bottom-[60px] left-0 flex flex-col gap-[16px] max-w-[1170px] duration-200 z-[3] max-sm:pr-[16px] max-sm:max-w-none max-sm:w-full`, isIdle && 'translate-y-[40px] opacity-0 invisible')}>
        <h3 className="text-white uppercase text-[32px] font-black text-ellipsis line-clamp-[1] font-manrope max-md:text-[24px] max-sm:line-clamp-3">{featured.names.ukr}</h3>

        <div className="flex gap-[8px] w-full">
          <WatchHeadliner headliner={featured} watchProgress={watchProgress.find(el => el.titleID === featured.id)} className="max-sm:w-full" />

          <button className="relative bg-dark-medium border border-dark-light p-[16px] duration-200 rounded-[4px] flex justify-center items-center hover:bg-dark-light focus-visible:bg-dark-light" tabIndex={0} onClick={() => setIsMuted(!isMuted)}>
            {/* Placeholder */}
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

function Category({ type, homeWrapped }: { type: TCategory, homeWrapped: IHomeWrapped }) {
  const id = useId();
  const [icon, setIcon] = useState(<></>)
  const [label, setLabel] = useState('...')
  const [titles, setTitles] = useState<ITitle[]>([])



  useMemo(() => {
    if (type === 'popular') {
      setLabel('Популярні')
      setIcon(<IcoStar className="w-full h-full" />)
      setTitles(homeWrapped.popular)
    } else if (type === 'hightRated') {
      setLabel('З високою оцінкою')
      setIcon(<IcoStarRating className="w-full h-full" />)
      setTitles(homeWrapped.hightRated)
    } else if (type === 'updatedRecently') {
      setLabel('Оновлено нещодавно')
      setIcon(<IcoClockOutlined className="w-full h-full" />)
      setTitles(homeWrapped.updatedRecently)
    }
  }, [])



  return <div className="flex flex-col gap-[16px]">
    <Label icon={icon} label={label} />

    {titles.length ? <>
      {titles.length > 10 ? <div className="flex flex-col gap-[8px]">
        <TitlesRow id={id} titles={titles.slice(0, 10)} />
        <TitlesRow id={id} titles={titles.slice(10, 20)} />
      </div> : <TitlesRow id={id} titles={titles} />}
    </> : <div className="flex items-center justify-center gap-[24px]">
      <IcoGhost width={32} height={32} fill="#747474" />
      <p className="text-lightGrey">Тайтли відсутні</p>
    </div>}
  </div>
}

function TitlesRow({ titles, id }: { titles: ITitle[], id: string }) {
  return <div className="min-w-0">
    <Swiper spaceBetween={16} slidesPerView={'auto'} className="ml-0">
      {titles.map(title => {
        return <SwiperSlide className="!w-fit" key={`category-${id}--${title.id}`} >
          <TitleCard title={title} className="!w-[230px]" />
        </SwiperSlide>
      })}
    </Swiper>
  </div>
}

function Label({ icon, label }: { label: string, icon: React.ReactElement }) {
  return <div className="flex items-center gap-[16px]">
    <div className="flex items-center gap-[16px] shrink-0">
      <div className="w-[32px] h-[32px] max-md:w-[24px] max-md:h-[24px]">
        {icon}
      </div>
      <h3 className="text-white text-[32px] font-bold max-md:text-[24px] font-manrope">{label}</h3>
    </div>

    <span className="w-full h-[3px] gradient--primary"></span>
  </div>
}


export default Home;