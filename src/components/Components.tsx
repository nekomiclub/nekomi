'use client'

import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { useAppSelector } from '~/hooks/redux';
import Anime from '~/interfaces/AnimeIntf';
import { IcoGhost, IcoHome, IcoOffline } from '../assets/Icons';
import { animeGenres } from '../config';
import { Routes, routes } from '../routes';

import { secondsToReadable } from './KekwPlayer/KekwPlayer';
import StyledImage from './StyledImage';

import CatImg from '../assets/img/oopsIndevCat.png';



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
          <p className="text-[12px] text-white font-manrope font-bold">Продовжити: {watchProgress.episodeOrder} еп, {secondsToReadable(watchProgress.progress).pretty}</p>

          <MaterialSymbol icon="resume" size={16} color="#fff" />
        </div>}
      </div>
    </Link>
  );
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

const ReturnHome = () => {
  return (
    <Link href={routes.home.path} className="p-[16px] rounded-[2px] bg-darkGrey duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback w-fit">
      <IcoHome width={32} height={32} />
    </Link>
  );
}

/** Indev screen */
export const IndevScreen: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className="flex items-center gap-[32px] max-[832px]:flex-col">
          <StyledImage src={CatImg.src} alt="Tinkering about..." width={'386px'} height={'386px'} className="max-[832px]:w-[256px] max-[832px]:h-[256px]" />

          <div className="flex flex-col gap-[80px] w-full justify-center items-center max-[832px]:gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-white text-[40px] text-center max-[832px]:text-[24px]">Кіт вже думає, що ж тут зробити</h1>
              <p className="text-lightGrey text-center">Завітайте сюди пізніше</p>
            </div>

            <ReturnHome />
          </div>
        </div>
      </div>
    </div>
  );
}

/** NotFound screen */
export const NotFoundScreen: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className="flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]">
          <div className="flex flex-col gap-[16px] items-center">
            <div className="flex items-center gap-[40px] max-[700px]:gap-[24px]">
              <p className="text-white text-[256px] max-[700px]:text-[128px]">4</p>
              <IcoGhost width={256} height={256} className="max-[700px]:w-[128px] max-[700px]:h-[128px]" />
              <p className="text-white text-[256px] max-[700px]:text-[128px]">4</p>
            </div>

            <h1 className="text-[40px] text-white text-center max-[700px]:text-[24px]">Отакої, в нас нема такої сторінки</h1>
          </div>

          <ReturnHome />
        </div>
      </div>
    </div>
  );
}

/** Something happened wrong screen
 * @param cause optional error message
 */
export const HappenedWrongScreen: NextPage<{ cause?: string }> = ({ cause }) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className="flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]">
          <div className="flex flex-col gap-[16px] items-center">
            <div className="flex items-center gap-[24px]">
              <p className="text-white text-[128px]">4</p>
              <IcoGhost width={128} height={128} />
              <p className="text-white text-[128px]">0</p>
            </div>

            <h1 className="text-[40px] text-white text-center max-[700px]:text-[24px]">Щось пішло не так..</h1>
            <h3 className="text-red text-center">{cause || 'Ну, причини нема'}</h3>
          </div>

          <ReturnHome />
        </div>
      </div>
    </div>
  );
}

/** Server unavailable screen */
export const ServerUnavailable: NextPage = (props) => {
  return (
    <div className="bg-dark min-h-screen h-full w-full flex justify-center items-center">
      <div className="wrapper">
        <div className="flex flex-col gap-[80px] items-center">
          <div className="flex flex-col justify-center items-center">
            <IcoOffline width={256} height={256} className="max-[700px]:w-[128px] max-[700px]:h-[128px]" />
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-center text-white text-[40px] max-[700px]:text-[24px]">Сервер тимчасово недоступний</h1>
              <p className="text-center text-white">
                {/* Якщо в телеграмі <a href={CONSTS.social.telegram} className="text-purple">nekomi</a> нема сповіщення про роботи, створіть будь ласка тікет в <a href={CONSTS.social.discord} className="text-purple">діскорді</a> */}
                Можливо, сервер вимкнений через стабілізаційні відключення. Це не повинно тривати довго.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const cn = clsx;