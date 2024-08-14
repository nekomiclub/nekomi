'use client'

import { NextPage, Metadata } from 'next';
import React, { useState, useEffect, useRef, memo } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoadingImage, TitleCard, WatchButton } from '../components/Components';
import { ITitle } from '../interfaces/ITitle';
import { config } from '../config';
import { SwiperSlide, Swiper } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';
import { IcoPlay } from '../assets/Icons';
import Link from 'next/link';
import { routes } from '../routes';
import { IcoPlayerVolumeMuted, IcoPlayerVolumeNormal } from '../assets/PlayerVolume';
import * as loader from '@uiball/loaders';
import { useIdleTimer } from 'react-idle-timer';
import gsap from 'gsap';
import { IKekwPlayerLocalDataItem, secondsToReadable } from '../components/KekwPlayer';

interface IProps {
  headliner: ITitle
  headlinerPoster: string
  headlinerVideo: string

  categories: IHomeCategories
}

export interface IHomeCategories {
  popular: ITitle[]
  updatedRecently: ITitle[]
  hightRating: ITitle[]
}

const Home: NextPage<IProps> = ({ categories, headliner, headlinerVideo, headlinerPoster }) => {
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



  const WatchHeadliner = memo(function WatchHeadliner({ className }: { className?: string }) {
    const [label, setLabel] = useState('розпочати перегляд')

    useEffect(() => {
      if (window === undefined) return;

      const progressData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[];

      if (progressData) {
        const current = progressData.find(el => el.id === headliner.id);

        if (current) {
          setLabel(`продовжити (${current.ep} серія, ${secondsToReadable(current.moment).pretty})`);
        }
      }
    }, [])

    return (
      <Link href={`${config.URL.baseURL}/${routes.watch.path}/${headliner.code}`} className={`flex items-center justify-center gap-[16px] bg-grey px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback ${className ? className : ''} max-[784px]:px-[16px] max-[784px]:py-[12px]`} tabIndex={0}>
        <IcoPlay width={40} height={40} />
        <p className='text-white text-[24px] uppercase max-[784px]:text-[16px]'>{label}</p>
      </Link>
    )
  })

  const PosterScreen = memo(function PosterScreen() {
    return (
      <>
        {/* Background */}
        <div className='w-full h-full absolute top-0 left-0'>
          <LoadingImage width='100%' height='100%' src={isMobile ? headliner.poster : headlinerPoster} loading='eager' priority />
          <div className='absolute top-0 left-0 w-full h-full bg-dark/[.4] z-[2]'></div>
        </div>

        {/* Main */}
        <div className='relative z-[3] max-w-[1170px] flex flex-col gap-[24px] max-[1170px]:max-w-none'>
          <div className='flex flex-col gap-[8px]'>
            <p className='text-white text-[24px] uppercase max-[784px]:text-[16px]'>набирає популярність</p>
            <h1 className='text-white text-[60px] font-black text-ellipsis line-clamp-[2] uppercase max-[1170px]:text-[40px] max-[560px]:text-[32px] max-[560px]:line-clamp-4'>{headliner.names.ukr}</h1>
          </div>

          <h3 className={`text-[24px] text-ellipsis line-clamp-[2] max-[784px]:text-[16px] ${headliner.description ? 'text-white' : 'text-lightGrey'}`}>{headliner.description || 'Опис відсутній'}</h3>
        </div>

        {/* Watch */}
        <div className='absolute bottom-[60px] z-[3] pr-[32px] max-[560px]:w-full'>
          <WatchHeadliner />
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
    // useIdleTimer({
    //   timeout: 5000,
    //   throttle: 500,
    //   onIdle: () => setIsIdle(true),
    //   onAction: () => setIsIdle(false)
    // })

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
        <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
          <video src={headlinerVideo} controls={false} ref={videoRef} className='absolute top-0 left-0 w-full h-full object-cover' />

          {/* Loading */}
          <div className={`duration-200 ${isLoading ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <loader.DotPulse color='#fff' size={80} />
          </div>
        </div>

        {/* Main */}
        <div className={`absolute bottom-[60px] flex flex-col gap-[16px] max-w-[1170px] duration-200 ${isIdle ? 'translate-y-[40px] opacity-0 invisible' : 'translate-y-0 opacity-100 visible'} pr-[32px] max-[650px]:pr-[16px]`}>
          <h3 className='text-white uppercase text-[32px] font-black text-ellipsis line-clamp-[1] max-[784px]:text-[24px] max-[650px]:line-clamp-3'>{headliner.names.ukr}</h3>

          <div className='flex gap-[8px] w-full max-[450px]:flex-col'>
            <WatchHeadliner className='w-full' />

            <button className='relative bg-grey p-[16px] duration-200 rounded-[4px] flex justify-center hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback' tabIndex={0} onClick={() => setIsMuted(!isMuted)}>
              {/* Placeholder */}
              <div className='w-[40px] h-[40px] max-[784px]:w-[32px] max-[784px]:h-[32px]'>
                <IcoPlayerVolumeNormal width={40} height={40} className={`absolute duration-200 ${isMuted ? 'opacity-100' : 'opacity-0'} max-[784px]:w-[32px] max-[784px]:h-[32px]`} />
                <IcoPlayerVolumeMuted width={40} height={40} className={`absolute duration-200 ${isMuted ? 'opacity-0' : 'opacity-100'} max-[784px]:w-[32px] max-[784px]:h-[32px]`} />
              </div>
            </button>
          </div>
        </div>
      </>
    )
  })



  return (
    <>
      <Header />

      <main className='w-full h-full bg-dark min-h-screen'>
        {/* Headliner */}
        <div className="wrapper w-full h-full min-h-screen">
          <div className={`w-full h-full min-h-screen flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-100`} ref={posterScreenRef}>
            <PosterScreen />
          </div>

          <div className={`w-full h-full min-h-screen flex items-center absolute top-0 right-0 px-[32px] max-[650px]:px-[16px] duration-300 opacity-0`} ref={trailerScreenRef}>
            <TrailerScreen />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}



export default Home;