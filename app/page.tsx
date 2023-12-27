'use client'

import { NextPage, Metadata } from 'next';
import React, { useState, useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice from '../store/reducers/userSlice';
import { logout } from '../components/authorization'
import BorderGradient from '../components/BorderGradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from '../assets/assets';
import { WatchButton } from '../components/BorderGradient';
import { routes } from '../routes';
import { PlayerVolume, PlayerVolumeMuted } from '../assets/watch';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useIdleTimer } from 'react-idle-timer';

interface IHeadTitle {
  name: string,
  code: string,
  poster: string,
  video: string
}

interface IActualTitle {
  name: string,
  rating: string,
  code: string,
  poster: string
}

const TitleItem: React.FC<{ skeleton?: boolean, title?: IActualTitle }> = ({ skeleton, title }) => {
  return <Link href={skeleton ? '#' : `${routes.watch.path}/${title?.code}`}>
    <div className={`relative w-full h-[200px] bg-grey rounded-[2px] flex flex-col justify-end`}>
      {skeleton ? null : <>
        <img src={title!.poster} alt={`Poster for ${title!.code}`} className='w-full h-full absolute top-0 left-0' />
        <div className='absolute top-[4px] right-[8px] px-[4px] py-[2px] rounded-[2px] gradient--primary'>
          <p className='text-[12px] text-white font-bold'>{title!.rating}</p>
        </div>
      </>}
      <div className='backdrop-blur-[10px] w-full flex h-fit z-[3] relative' style={{ background: 'rgba(18, 18, 18, 0.20)' }}>
        <p className='text-center text-[16px] text-white w-full px-[16px] py-[8px]'>{skeleton ? '' : title!.name}</p>
      </div>
    </div>
  </Link>
}

const Home: NextPage = (props) => {
  const posterRef = useRef<HTMLImageElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const [posterVisible, setPosterVisible] = useState(true)
  const [videoVisible, setVideoVisible] = useState(false)
  const [muted, setMuted] = useState(true)
  const [isIdle, setIsIdle] = useState(false)
  const [videoTime, setVideoTime] = useState(0)

  useIdleTimer({
    throttle: 500,
    timeout: 5000,
    onIdle: () => {
      if (window.scrollY < 200) {
        setIsIdle(true)
      }
    },
    onAction: () => setIsIdle(false)
  })

  const [headTitle, setHeadTitle] = useState<IHeadTitle>({
    code: 'jujutsu-kaisen-2',
    name: 'Магічна битва 2',
    poster: 'https://wallpapercave.com/wp/wp12526882.jpg',
    video: 'http://192.168.0.106/v1/media/72cbb2e3-803b-40de-995d-efbf09c2056f'
  })

  const [actualTitles, setActualTitles] = useState<IActualTitle[]>([{
    code: 'jujutsu-kaisen-2',
    name: 'Магічна битва 2',
    poster: 'https://api.animee.club/v1/media/a6188f0d-75ce-4dcf-95e1-4d53c7015859',
    rating: '8.6'
  }, {
    code: 'undead-unluck',
    name: 'Невмирущий Нефартова',
    poster: 'https://api.animee.club/v1/media/bbfc26d1-b5ba-4a47-9ae8-54144dd2366a',
    rating: '7.6'
  }, {
    code: 'soso-no-furiren',
    name: 'Фрірен, що проводжає в останню путь',
    poster: 'https://api.animee.club/v1/media/105725f2-37ac-43b3-9b17-fcc099d9d18c',
    rating: '8.9'
  }, {
    code: 'kusuriya-no-hitorigoto',
    name: 'Монолог травниці',
    poster: 'https://api.animee.club/v1/media/ded31bea-fefd-49a6-b56a-488f2c37f001',
    rating: '8.6'
  }, {
    code: 'the-eminence-in-shadow-2',
    name: 'Сходження в тіні 2',
    poster: 'https://api.animee.club/v1/media/46068d45-9993-4f10-aebb-7e4fe83b1efc',
    rating: '7.9'
  }])

  useEffect(() => {
    const trailer = videoRef.current;
    const poster = posterRef.current;

    if (trailer && poster) {
      const video = trailer.querySelector('video')!;
      video.volume = 0.5

      video.addEventListener('loadedmetadata', () => {
        setTimeout(() => {
          setPosterVisible(false);
          setVideoVisible(true)
          video.play();
        }, 2000);
      })
    }
  })

  return (
    <>
      <div className={`duration-200 ${isIdle ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
        <Header />
      </div>

      <main className='h-full bg-dark'>
        <div className='relative w-full h-screen flex flex-col items-end bg-dark mb-[100px]'>
          <div className='bg-grey w-full h-full'>
            <img ref={posterRef} src={headTitle.poster} alt="..." className={`w-full h-full absolute top-0 left-0 duration-1000 object-cover ${posterVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`} />
            <div ref={videoRef} className={`absolute top-0 left-0 w-full h-full bg-black duration-1000 ${videoVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
              <video src={headTitle.video} preload='metadata' controls={false} muted={muted} autoPlay loop className='w-full h-full object-cover'></video>
            </div>
          </div>

          <div className={`wrapper z-[3] relative -bottom-[120px] duration-200 ${isIdle ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
            <div className='w-full flex justify-between items-center gap-[24px] mb-[60px] max-[570px]:flex-col-reverse'>
              <div className='flex flex-col gap-[16px]'>
                <h3 className='text-[40px] text-white font-bold text-center'>{headTitle.name}</h3>
                <WatchButton href={`${routes.watch.path}/${headTitle.code}`} />
              </div>

              <button className='relative w-[64px] h-[64px] p-[16px] bg-grey rounded-[32px]' onClick={() => setMuted(!muted)}>
                <PlayerVolume width={40} height={40} className={`absolute duration-200 top-[12px] left-[14px] ${muted ? 'opacity-0 invisible' : 'oapcity-100 visible'}`} />
                <PlayerVolumeMuted width={40} height={40} className={`absolute duration-200 top-[12px] left-[16px] ${muted ? 'oapcity-100 visible' : 'opacity-0 invisible'}`} />
              </button>
            </div>

            <Swiper className='flex items-center w-full' slidesPerView={5} spaceBetween={8} breakpoints={{
              320: {
                slidesPerView: 1
              },
              500: {
                slidesPerView: 2
              },
              700: {
                slidesPerView: 3
              },
              932: {
                slidesPerView: 4
              },
              1200: {
                slidesPerView: 5
              },
            }}>
              {actualTitles ? <>
                {actualTitles.map(title => {
                  return <SwiperSlide className='w-fit' key={title.code}>
                    <TitleItem title={title} />
                  </SwiperSlide>
                })}
              </> : <>
                <TitleItem skeleton />
                <TitleItem skeleton />
                <TitleItem skeleton />
              </>}
            </Swiper>
          </div>
        </div>

        <div className='w-full h-[80px]'></div>
      </main>

      <Footer />
    </>
  );
}

export default Home;