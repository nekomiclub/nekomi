'use client';

import { NextPage } from 'next';
import React, { FC, useEffect, useId, useRef, useState } from 'react';

import { IcoNekomiLogo } from '~/assets/Icons';
import AnimeItem from '~/components/AnimeItem';
import StyledSwiper from '~/components/Styled/StyledSwiper';
import { AnimeCardType } from '~/interfaces/IAnime';
import { IHomeFeedHero } from '~/interfaces/types';
import { cn } from '~/utils/classnames';

import HomeHeroPosterScreen from './(components)/HomeHeroPosterScreen';
import HomeHeroTrailerScreen from './(components)/HomeHeroTrailerScreen';
import { HomeHeroScreenType } from './HomePageData';



interface IHomeHeroProps {
  hero: IHomeFeedHero
}

interface IHomeCategoryProps {
  label: string
  icon: React.ReactElement
  animes: AnimeCardType[]
}

interface IHomeCategorySwiperProps {
  animes: AnimeCardType[]
}

interface IHomeDividerProps {
  label: string
  icon: React.ReactElement
}



export const HomeHero: FC<IHomeHeroProps> = (props) => {
  const [activeScreen, setActiveScreen] = useState<HomeHeroScreenType>('preview');

  const previewScreenRef = useRef<HTMLDivElement>(null);
  const trailerScreenRef = useRef<HTMLDivElement>(null);



  // Change screen to trailer after timeout
  useEffect(() => {
    setTimeout(() => setActiveScreen('trailer'), 5000);
  }, []);

  // Handle active screen change
  useEffect(() => {
    const poster = previewScreenRef.current;
    const trailer = trailerScreenRef.current;
    if (!poster || !trailer) return;

    (async function () {
      if (activeScreen === 'trailer') {
        await hide(poster);
        await show(trailer);
      } else {
        await hide(trailer);
        await show(poster);
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
        });
      }
    })();
  }, [activeScreen]);



  return <div className="wrapper w-full h-[100svh] !mb-[40px]">
    <div className={cn(`home-headliner-screen`)} ref={previewScreenRef}>
      <HomeHeroPosterScreen hero={props.hero} />
    </div>

    <div className={cn(`home-headliner-screen opacity-0`)} ref={trailerScreenRef}>
      <HomeHeroTrailerScreen hero={props.hero} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    </div>

    <div className="home-headliner-screen items-center justify-center !z-[1]">
      <IcoNekomiLogo width={128} height={128} fill="#fff" />
    </div>
  </div>;
};



export const HomeCategory: NextPage<IHomeCategoryProps> = (props) => {
  return <div className="flex flex-col gap-[16px]">
    <HomeDivider icon={props.icon} label={props.label} />

    {props.animes.length > 10 ? <div className="flex flex-col gap-[8px]">
      <HomeCategorySwiper animes={props.animes.slice(0, 10)} />
      <HomeCategorySwiper animes={props.animes.slice(10, 20)} />
    </div> : <HomeCategorySwiper animes={props.animes} />}
  </div>;
};





const HomeCategorySwiper: NextPage<IHomeCategorySwiperProps> = (props) => {
  const id = useId().replaceAll(':', '');

  return <StyledSwiper>
    {props.animes.map((anime, i) => {
      return <AnimeItem anime={anime} className="!w-[230px]" key={`homecategory-${id}--${i}`} />;
    })}
  </StyledSwiper>;
};



const HomeDivider: NextPage<IHomeDividerProps> = ({ icon, label }) => {
  return <div className="flex items-center gap-[16px]">
    <div className="flex items-center gap-[16px] shrink-0">
      <div className="w-[32px] h-[32px] flex justify-center items-center max-md:w-[24px] max-md:h-[24px]">
        {icon}
      </div>
      <h3 className="text-white text-[32px] font-bold max-md:text-[24px] font-manrope">{label}</h3>
    </div>

    <span className="w-full h-[3px] gradient--primary"></span>
  </div>;
};