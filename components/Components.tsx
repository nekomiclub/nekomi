'use client'

import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';

import { ITitle } from '../interfaces/ITitle';
import { IRoute, routes } from '../routes';
import { IcoAnimeeLogo, IcoArrow, IcoCheckmark, IcoNekomiLogo, IcoPlay, IcoStarRating } from '../assets/Icons';
import { animeGenres, config, CONSTS, prodMode } from '../config';
import { IcoClockOutlined } from '../assets/Clock';
import { IcoGhost, IcoHome, IcoInternet, IcoOffline } from '../assets/Icons';

import '../styles/components/GeneralComponents.scss'
import CatImg from '../assets/img/oopsIndevCat.png';
import clsx from 'clsx';



export const LoadingImage = memo(function LoadingImage({ src, alt, className, loading, priority, height, width, parentClassName }: { src: string, alt?: string, className?: string, parentClassName?: string, priority?: boolean, loading?: 'lazy' | 'eager', width: string, height: string }) {
  const [loaded, setLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  src = src ?? 'https://media.nekomi.club/0849e678-43ee-4f72-ae5a-bb9ff9d86c89';
  alt = alt ?? '...';
  priority = priority ?? false;
  loading = loading ?? 'lazy';

  useEffect(() => {
    const image = ref.current;
    if (!image) return;

    if (image.complete) setLoaded(true)

    image.addEventListener('load', () => setLoaded(true))
    image.addEventListener('error', () => setIsErrored(true))
  }, [])

  return (
    <div className={`relative ${isErrored ? 'bg-darkGrey' : ''} ${parentClassName ? parentClassName : ''}`} style={{ width, height }}>
      {src.includes(config.domain) && prodMode ? <>
        <Image src={src} alt={alt} fill priority={priority} loading={loading} className={cn(`w-full h-full duration-200 absolute top-0 left-0 z-[2]`, loaded && !isErrored ? 'opacity-100' : 'opacity-0', className)} ref={ref} />
      </> : <>
        <img src={src} alt={alt} loading={loading} className={cn(`w-full h-full duration-200 absolute top-0 left-0 z-[2]`, loaded && !isErrored ? 'opacity-100' : 'opacity-0', className)} ref={ref} />
      </>}

      <Skeleton width={'100%'} height={'100%'} className={cn(`absolute top-0 left-0 duration-200`, (loaded || isErrored) ?? 'opacity-0')} />

      <div className={cn(`absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 duration-200`, isErrored && 'opacity-100')}>
        <IcoGhost width={16} height={16} className='w-[50%] h-[50%]' />
      </div>
    </div>
  )
})

export const WatchButton: NextPage<{ href: string, className?: string, gradient: 'primary' | 'secondary' }> = ({ gradient, href, className }) => {
  return (
    <Link href={href} className={`gradient--${gradient}-border-4 gradient--${gradient}-hover watchButton watchButton--${gradient} px-[16px] py-[16px] flex items-center gap-[24px] ${className ? className : ''}`}>
      <div className='relative'>
        <IcoPlay width={40} height={40} fill={gradient === 'primary' ? '#FF464E' : '#FF9966'} className={`watchButton-icoGradient watchButton--${gradient}`} />
        <IcoPlay width={40} height={40} className={`watchButton-icoWhite watchButton--${gradient}`} />
      </div>
      <p className='text-white text-[24px] font-bold uppercase'>дивитись</p>
    </Link>
  )
}

export const TitleCard: NextPage<{ title: ITitle, className?: string }> = ({ title, className }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null)

  const topOffset = 4;
  const bottomOffset = 8;

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
    bottom.style.paddingTop = `${topOffset}px`
    bottom.style.paddingBottom = `${bottomOffset}px`

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
    <Link href={`${config.URL.baseURL}/w/${title.code}`} className={`flex flex-col justify-end relative min-w-[200px] w-full h-auto min-h-[240px] aspect-[6/7] rounded-[4px] overflow-hidden outline-none ${className ? className : ''}`} ref={cardRef}>
      <LoadingImage src={title.poster} className='rounded-b-[4px]' parentClassName='!absolute top-0 left-0' width='100%' height='100%' />

      <div className={`px-[8px] backdrop-blur-[40px] relative z-[2] duration-200 max-h-0 flex flex-col gap-[12px] bg-dark/[.8]`} ref={bottomRef}>
        <div className='flex flex-col gap-[4px]'>
          <p className='titleCardNew-heading text-white font-bold text-ellipsis line-clamp-[2]' title={title.names.ukr} ref={titleRef}>{title.names.ukr}</p>

          <p className='text-lightGrey text-[12px] whitespace-break-spaces'>
            {title.genres.length ? title.genres.slice(0, 3).map((genre, i) => {
              let immutableI = i;

              return `${animeGenres[genre]}${++immutableI < title.genres?.slice(0, 3).length! ? ' • ' : ''}`
            }) : `Жанри відсутні`}
          </p>
        </div>

        <div className='flex items-center justify-between rounded-b-[4px]'>
          <div className='flex items-center gap-[4px]'>
            <IcoClockOutlined width={12} height={12} />
            <p className='text-white text-[12px]'>{title.episodesCount || '—'}</p>
          </div>

          <div className='flex items-center gap-[4px]'>
            <IcoStarRating width={12} height={12} fill='#FF464E' />
            <p className='text-gradientPrimaryFallback text-[12px] font-bold'>{title.rating.IMDB || '—'}</p>
          </div>
        </div>
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
    const textArea = document.createElement("textarea");
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = "absolute";
    textArea.style.left = "-999999px";

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

/** Rename popup */
export const RenamePopup: NextPage = () => {
  const [show, setShow] = useState(false);

  useMemo(() => {
    if (typeof window === 'undefined') return;

    setShow(!Boolean(localStorage.getItem('renameDialogShowed')))
  }, [])

  function hide() {
    localStorage.setItem('renameDialogShowed', 'true')
    setShow(false)
  }

  return show && <div className='w-screen h-screen fixed top-0 left-0 z-[99999] bg-dark/[.3] flex justify-center items-center px-[32px]'>
    <div className='bg-grey w-fit px-[32px] py-[24px] rounded-[4px] max-w-[700px] flex flex-col gap-[24px]'>
      <div className='flex flex-col gap-[8px]'>
        <div className='flex gap-[16px] justify-center items-center'>
          <IcoAnimeeLogo width={64} height={64} />
          <IcoArrow width={40} height={40} className='-rotate-[90deg]' />
          <IcoNekomiLogo width={64} height={64} fill='#fff' />
        </div>
        <h2 className='text-white text-[40px] font-bold text-center'><span className='gradient--primary-text'>Animee</span> тепер Nekomi!</h2>
        <p className='text-white text-center'><i>Свіжіший</i>, <u>кращий</u>, <b>унікальніший</b></p>
      </div>

      <p className='text-lightGrey text-center'>До 19.11 домен animee.club ще буде перенаправляти тебе сюди, а далі вже все.</p>

      <button className='px-[16px] py-[16px] rounded-[2px] bg-grey flex items-center justify-center gap-[16px] duration-200 hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback' onClick={hide}>
        <IcoCheckmark width={32} height={32} />
        <p className='text-white text-[24px] uppercase max-[650px]:text-[16px]'>Зрозуміло</p>
      </button>
    </div>
  </div>
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
        <div className='flex items-center gap-[32px] max-[832px]:flex-col'>
          <Image src={CatImg.src} alt='Tinkering about...' width={386} height={386} className='max-[832px]:w-[256px] max-[832px]:h-[256px]' />

          <div className='flex flex-col gap-[80px] w-full justify-center items-center max-[832px]:gap-[40px]'>
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-white text-[40px] text-center max-[832px]:text-[24px]'>Кіт вже думає, що ж тут зробити</h1>
              <p className='text-lightGrey text-center'>Завітайте сюди пізніше</p>
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
        <div className='flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]'>
          <div className='flex flex-col gap-[16px] items-center'>
            <div className='flex items-center gap-[40px] max-[700px]:gap-[24px]'>
              <p className='text-white text-[256px] max-[700px]:text-[128px]'>4</p>
              <IcoGhost width={256} height={256} className='max-[700px]:w-[128px] max-[700px]:h-[128px]' />
              <p className='text-white text-[256px] max-[700px]:text-[128px]'>4</p>
            </div>

            <h1 className='text-[40px] text-white text-center max-[700px]:text-[24px]'>Отакої, в нас нема такої сторінки</h1>
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
        <div className='flex flex-col gap-[80px] items-center max-[700px]:gap-[40px]'>
          <div className='flex flex-col gap-[16px] items-center'>
            <div className='flex items-center gap-[24px]'>
              <p className='text-white text-[128px]'>4</p>
              <IcoGhost width={128} height={128} />
              <p className='text-white text-[128px]'>0</p>
            </div>

            <h1 className='text-[40px] text-white text-center max-[700px]:text-[24px]'>Щось пішло не так..</h1>
            <h3 className='text-red text-center'>{cause || 'Ну, причини нема'}</h3>
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
        <div className='flex flex-col gap-[80px] items-center'>
          <div className='flex flex-col justify-center items-center'>
            <IcoOffline width={256} height={256} className='max-[700px]:w-[128px] max-[700px]:h-[128px]' />
            <div className='flex flex-col gap-[16px]'>
              <h1 className='text-center text-white text-[40px] max-[700px]:text-[24px]'>Сервер тимчасово недоступний</h1>
              <p className='text-center text-white'>
                Якщо в телеграмі <a href={CONSTS.social.telegram} className='text-purple'>nekomi</a> нема сповіщення про роботи, створіть будь ласка тікет в <a href={CONSTS.social.discord} className='text-purple'>діскорді</a>
                {/* Можливо, сервер вимкнений через стабілізаційні відключення. Це не повинно тривати довго. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function RSCCatchError(cb: () => Promise<any> | any) {
//   try {
//     await cb();
//   } catch (e) {
//     const id = createID()

//     if (e instanceof AxiosError) {
//       const resCode = e.response?.data.code;

//       if (resCode === 404) {
//         <NotFoundScreen />
//       } else if (resCode === 400) {
//         <HappenedWrongScreen cause={`[400]: Помилка надісланої інформації`} />
//       } else if (resCode === 401) {
//         <HappenedWrongScreen cause={`[401]: Помилка авторизації`} />
//       } else if (resCode === 403) {
//         <HappenedWrongScreen cause={`[403]: Доступ заборонено`} />
//       } else if (resCode === 500) {
//         <HappenedWrongScreen cause={`[500]: Внутрішня помилка серверу`} />
//       } else if (resCode === 501) {
//         <HappenedWrongScreen cause={`[501]: Метод не імплементовано`} />
//       } else if (resCode === 502) {
//         <HappenedWrongScreen cause={`[502]: Сервіс тимчасово недоступний`} />
//       } else if (resCode) {
//         <HappenedWrongScreen cause={`[${resCode}]: Необроблена помилка API`} />
//       } else {
//         <HappenedWrongScreen cause={`[${e.code}]: Необроблена помилка запиту`} />
//       }
//     } else {
//       console.error(`[${id}]: Unknown server error occured - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
//       return <HappenedWrongScreen cause={`Unknown server error occured - ${id}`} />
//     }
//   }
// }

export const cn = clsx;