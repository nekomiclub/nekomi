'use client'

import React, { useEffect, useId, useRef, useState } from 'react';
import * as Loader from '@uiball/loaders';
import clsx from 'clsx';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useAppSelector } from '~/hooks/redux';
import Anime from '~/interfaces/AnimeIntf';
import prettySeconds from '~/utils/pretty-seconds';
import { animeGenres } from '../config';
import { Routes } from '../routes';

import StyledImage from './StyledImage';




interface PrettySwiperProps {
  children: React.ReactElement[]
}



/** @deprecated use AnimeItem instead */
export const TitleCard: NextPage<{ title: Anime, className?: string }> = ({ title, className }) => {
  const user = useAppSelector(state => state.user);

  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null)

  const topOffset = 4;
  const bottomOffset = 8;
  const watchProgress = user.watchProgress.find(el => el.titleID === title.uuid);



  useEffect(() => {
    const card = cardRef.current;
    const bottom = bottomRef.current;

    if (!card || !bottom) return;

    let inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

    window.addEventListener('resize', () => {
      inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

      bottom.style.maxHeight = `${inactiveHeight}px`;
    })

    bottom.style.maxHeight = `${inactiveHeight}px`;
    bottom.style.paddingTop = `${topOffset}px`;
    bottom.style.paddingBottom = `${bottomOffset}px`;

    card.addEventListener('contextmenu', e => e.preventDefault());

    // Hide
    card.addEventListener('mouseleave', hide)
    card.addEventListener('touchend', hide)
    card.addEventListener('focusout', hide)

    // Show
    card.addEventListener('touchstart', show)
    card.addEventListener('touchmove', show)
    card.addEventListener('mouseenter', show)
    card.addEventListener('focusin', show)



    function hide() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '2'
      bottom.style.maxHeight = `${inactiveHeight}px`;
    }

    function show() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '6';
      bottom.style.maxHeight = `${bottom.scrollHeight + topOffset + bottomOffset}px`;
    }
  }, [])



  return (
    <Link href={`${Routes.watch_title.path}/${title.slug}`} className={cn(`flex flex-col justify-end relative min-w-[200px] w-full h-auto min-h-[240px] aspect-[.7] rounded-[4px] overflow-hidden outline-none max-md:min-w-[170px]`, className)} ref={cardRef}>
      <StyledImage src={title.poster} className="!absolute top-0 left-0" width="100%" height="100%" />

      <div className="flex flex-col">
        <div className={`px-[8px] backdrop-blur-[40px] relative z-[2] duration-200 max-h-0 flex flex-col gap-[12px] bg-dark/[.8]`} ref={bottomRef}>
          <div className="flex flex-col gap-[4px]">
            <p className="titleCardNew-heading text-white text-[14px] font-bold text-ellipsis line-clamp-[2] font-manrope max-md:text-[14px]" title={title.names.ukr} ref={titleRef}>{title.names.ukr}</p>

            <p className="text-lightGrey text-[12px] whitespace-break-spaces font-manrope">
              {title.genres.length ? title.genres.slice(0, 3).map((genre, i) => {
                let immutableI = i;

                return `${animeGenres[genre]}${++immutableI < title.genres?.slice(0, 3).length! ? ' • ' : ''}`
              }) : `Жанри відсутні`}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="acute" size={16} color="#fff" />
              <p className="text-white text-[12px] font-space-grotesk">{title.episodesCount ?? '—'}</p>
            </div>

            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="star_half" size={16} color="#FF464E" />
              <p className="text-gradientPrimaryFallback text-[12px] font-bold font-space-grotesk">{title.score.mal ?? title.score.imdb ?? '—'}</p>
            </div>
          </div>
        </div>

        {watchProgress && watchProgress.progress > 3 && <div className="gradient--primary z-[2] px-[8px] py-[4px] flex items-center justify-between gap-[4px]">
          <p className="text-[12px] text-white font-manrope font-bold">Продовжити: {watchProgress.episodeOrder} еп, {prettySeconds(watchProgress.progress).pretty}</p>

          <MaterialSymbol icon="resume" size={16} color="#fff" />
        </div>}
      </div>
    </Link>
  );
}

export const FooterOnline: NextPage = () => {
  const storageState = useAppSelector(state => state.storage);

  return <p className="text-white">Онлайн: <b className="font-bold gradient--primary-text">{storageState.online || -1}</b></p>
}

/** Simple loading content component */
export const LoadingContent: NextPage = () => {
  return <div className="flex items-center gap-[16px]">
    <Loader.Ring size={16} color="#555555" />

    <p className="text-grey-new">Завантажуємо контент...</p>
  </div>
}

export const PrettySwiper: NextPage<PrettySwiperProps> = ({ children }) => {
  const id = useId().replaceAll(':', '');

  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false)



  return <div className="relative">
    <Swiper className="w-full h-full" spaceBetween={8} slidesPerView={'auto'} onInit={() => setIsSwiperInitialized(true)}>
      {children.map((child, i) => {
        return <SwiperSlide className="!w-fit" key={`swiper-${id}--${i}`}>
          {child}
        </SwiperSlide>
      })}
    </Swiper>

    <div className={cn(`absolute top-0 left-0 w-full h-full bg-dark-primary flex justify-center items-center z-[4] duration-200`, isSwiperInitialized && 'opacity-0 invisible touch-none pointer-events-none')}>
      <LoadingContent />
    </div>
  </div>
}




/** Copy given text to cpilboard */
export function copyToClipboard(textToCopy: string) {
  // Navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
}



export const cn = clsx;