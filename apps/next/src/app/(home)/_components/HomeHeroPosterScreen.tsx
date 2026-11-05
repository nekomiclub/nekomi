'use client';

import React, { FC, useEffect, useState } from 'react';

import StyledImage from '~/shared/components/styled/StyledImage';
import { TFeedHydrated } from '~/shared/lib/api/api-types';
import { cn } from '~/shared/utilities/classnames';

import HomeHeroWatch from './HomeHeroWatch';



interface IProps {
  hero: TFeedHydrated
}



const HomeHeroPosterScreen: FC<IProps> = (props) => {
  const [isSm, setIsSm] = useState(false);



  const handleIsSm = () => setIsSm(window.innerWidth <= 620);


  useEffect(() => {
    handleIsSm();

    window.addEventListener('resize', handleIsSm);
  }, []);



  return <>
    {/* Background */}
    <div className="w-full h-full absolute top-0 left-0">
      {!isSm && <StyledImage src={props.hero.cover} width="100%" height="100%" loading="eager" />}
      {isSm && <StyledImage src={props.hero.poster} width="100%" height="100%" loading="eager" />}

      <div className="absolute top-0 left-0 w-full h-full bg-dark-primary/[.2] z-[2]"></div>
    </div>

    {/* Main */}
    <div className="relative z-[3] max-w-[1170px] flex flex-col gap-[24px] max-lg:max-w-none">
      <div className="flex flex-col gap-[8px]">
        <h1 className="text-white text-[60px] font-black text-ellipsis line-clamp-[2] uppercase max-lg:text-[40px] max-sm:text-[32px] max-sm:line-clamp-4  w-fit" title={props.hero.title}>{props.hero.title}</h1>
      </div>

      <p className={cn(`text-[24px] text-ellipsis line-clamp-[3] max-md:text-[16px]  w-fit`, props.hero.synopsys ? 'text-white' : 'text-grey-new')} title={props.hero.synopsys ?? undefined}>{props.hero.synopsys ?? 'Опис відсутній'}</p>
    </div>

    {/* Watch */}
    <div className="absolute bottom-[60px] z-[3] pr-[32px] max-sm:w-full max-sm:bottom-[90px]">
      <HomeHeroWatch hero={props.hero} />
    </div>
  </>;
};

export default HomeHeroPosterScreen;