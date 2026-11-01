'use client';

import React, { FC, useEffect, useRef, useState } from 'react';
import * as loader from '@uiball/loaders';
import { MaterialSymbol } from 'material-symbols-rc';
import { useIdleTimer } from 'react-idle-timer';

import { HomeHeroScreenType } from '~/app/(home)/_utils';
import { THomeFeedHero } from '~/shared/lib/api/api-types';
import { cn } from '~/shared/utilities/classnames';

import HomeHeroWatch from './HomeHeroWatch';



interface IProps {
  hero: THomeFeedHero

  activeScreen: HomeHeroScreenType
  setActiveScreen: (val: HomeHeroScreenType) => void
}



const HomeHeroTrailerScreen: FC<IProps> = (props) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);



  // Idle timer
  useIdleTimer({
    timeout: 5000,
    throttle: 500,
    onIdle: () => setIsIdle(true),
    onAction: () => setIsIdle(false)
  });

  // Init
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Handle loading
    video.addEventListener('waiting', () => setIsLoading(true));
    video.addEventListener('playing', () => setIsLoading(false));

    video.addEventListener('ended', () => props.setActiveScreen('preview'));
    video.addEventListener('contextmenu', e => e.preventDefault());
  }, []);

  // Handle video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (props.activeScreen === 'trailer') {
      video.play().catch(() => { });
    } else {
      video.currentTime = 0;
      video.pause();
    }

  }, [props.activeScreen]);



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



  return <>
    {/* Trailer */}
    <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center bg-black">
      {props.hero.video && <video src={props.hero.video} muted controls={false} ref={videoRef} preload="metadata" className="absolute top-0 left-0 w-full h-full object-cover" />}
      <div className="absolute top-0 left-0 w-full h-full block z-[2]" style={{ background: 'linear-gradient(180deg, rgba(18, 18, 18, 0), rgba(18, 18, 18, .5))' }}></div>

      {/* Loading */}
      <div className={cn(`duration-200 z-[3]`, !isLoading && 'opacity-0 invisible')}>
        <loader.DotPulse color="#fff" size={80} />
      </div>
    </div>

    {/* Main */}
    <div className={cn(`wrapper !absolute bottom-[60px] left-0 flex flex-col gap-[16px] max-w-[1170px] duration-200 z-[3] max-sm:pr-[16px] max-sm:max-w-none max-sm:w-full max-sm:bottom-[90px]`, isIdle && 'translate-y-[40px] opacity-0 invisible')}>
      <h3 className="text-white uppercase text-[32px] font-black text-ellipsis line-clamp-[1]  max-md:text-[24px] max-sm:line-clamp-3 w-fit" title={props.hero.title}>{props.hero.title}</h3>

      <div className="flex gap-[8px] w-full">
        <HomeHeroWatch hero={props.hero} className="max-sm:w-full" />

        <button className="ui-button relative p-[16px] duration-200 rounded-[4px] flex justify-center items-center" tabIndex={0} onClick={mute}>
          <div className="relative w-[40px] h-[40px] max-sm:w-[24px] max-sm:h-[24px]">
            <MaterialSymbol icon="volume_off" size={40} className={cn(`text-white absolute top-0 left-0 duration-200 max-sm:!text-[24px]`, !isMuted && 'opacity-0')} />
            <MaterialSymbol icon="volume_up" size={40} className={cn(`text-white absolute top-0 left-0 duration-200 max-sm:!text-[24px]`, isMuted && 'opacity-0')} />
          </div>
        </button>
      </div>
    </div>
  </>;
};

export default HomeHeroTrailerScreen;