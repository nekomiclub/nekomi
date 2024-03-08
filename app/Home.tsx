'use client'

import { NextPage, Metadata } from 'next';
import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { LoadingImage, NewTitleCard, NewWatchButton } from '../components/GeneralComponents';
import { ITitle } from '../interfaces/ITitle';
import { config } from '../config';
import { AddToFavorite } from './w/[query]/Watch';
import { SwiperSlide, Swiper } from 'swiper/react';
import Skeleton from 'react-loading-skeleton';

export interface IHomeHeadliner {
  title: string,
  code: string,
  poster: string,
  video: string,
  id: string
}

interface IProps {
  headliner: IHomeHeadliner,
  watchingNow: ITitle[]
}

const Home: NextPage<IProps> = ({ headliner, watchingNow }) => {
  const [ongoingTitles, setOngoingTitles] = useState<ITitle[]>([])
  const [updatedRecentlyTitles, setUpdatedRecentlyTitles] = useState<ITitle[]>([])
  const [newRealises, setNewRealises] = useState<ITitle[]>([])

  const [swiperLoaded, setSwiperLoaded] = useState(false)

  return (
    <>
      <Header />

      <main className='h-full min-h-screen bg-dark'>
        {/* Background */}

        <div className='w-full h-full absolute'>
          <LoadingImage src={headliner.poster} className='object-cover' priority loading='eager' />
          <div className='w-full h-full bg-dark/[.3] z-[2] absolute top-0 left-0'></div>
        </div>

        <div className='wrapperNew z-[3] min-h-screen h-full justify-center'>
          <div className='max-w-[600px] flex flex-col gap-[16px]'>
            <h1 className='text-white text-[40px] font-bold uppercase'>{headliner.title}</h1>

            <div className='flex gap-[16px]'>
              <NewWatchButton gradient='secondary' href={`${config.services.siteURL}/w/${headliner.code}`} className='w-full justify-center' />
            </div>
          </div>
        </div>

        <div className="wrapperNew">
          <div className='w-full flex flex-col gap-[24px] relative -top-[140px] z-[4]'>
            <h3 className='text-white text-[24px] font-bold'>Переглядають зараз</h3>

            <div className='relative'>
              <Skeleton className={`w-full h-full z-[2] absolute rounded-none duration-200 ${swiperLoaded ? 'opacity-0 invisible touch-none' : ''}`} containerClassName='h-0 block' />
              <Swiper className='w-full h-[200px] z-[1] relative' slidesPerView={5.5} spaceBetween={8} onInit={() => setSwiperLoaded(true)} breakpoints={{
                320: {
                  slidesPerView: 1.5,
                  centeredSlides: true
                },
                500: {
                  slidesPerView: 2.5,
                  centeredSlides: false
                },
                700: {
                  slidesPerView: 3.5
                },
                932: {
                  slidesPerView: 4.5
                },
                1200: {
                  slidesPerView: 5.5
                },
              }}>
                {watchingNow.map(title => {
                  return <SwiperSlide className='w-full h-full' key={`watchingNow-${title.code}`}>
                    <NewTitleCard title={title} />
                  </SwiperSlide>
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;