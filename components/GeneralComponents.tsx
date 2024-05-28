'use client'

import { NextPage } from 'next';
import { ITitle } from '../interfaces/ITitle';
import Link from 'next/link';
import { IRoute, routes } from '../routes';

import '../styles/components/GeneralComponents.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { IcoPlay, IcoStarRating } from '../assets/Icons';
import React, { useEffect, useRef, useState } from 'react';
import { animeGenres, config } from '../config';
import { IcoClockOutlined } from '../assets/Clock';

/** Card-link for title */
export const TitleCard: NextPage<{ title: ITitle, className?: string }> = ({ title, className }) => {
  return (
    <Link href={`${routes.watch.path}/${title.code}`} className={`title-card w-full h-full ${className ? className : ''}`}>
      <div className='relative w-full h-full flex flex-col items-end'>
        {/* Background */}
        <div className='absolute top-0 left-0 w-full h-full'>
          <LoadingImage src={title.poster} alt={`${title.code} poster`} />
        </div>

        {/* Rating */}
        <div className='relative z-[2] m-[4px] flex items-center gap-[8px] p-[4px] gradient--secondary rounded-[2px]'>
          <IcoStarRating width={24} height={24} />
          <p className='text-white font-bold'>{title.rating}</p>
        </div>

        {/* Title */}
        <div className='w-full h-full flex flex-col justify-end flex-1'>
          <div className='title-card-blur relative z-[2] w-full h-fit px-[16px] py-[8px] bg-dark/[.1] backdrop-blur-[32px] flex justify-center'>
            <p className='text-white text-center'>{title.names.ukr}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

/** Must be wrapped in div with relative position and dimensions
 * @example
 * <div className="relative w-[32px] h-[32px]">
 *  <LoadingImage src='' /> 
 * </div>
 */
export const LoadingImage: NextPage<{ src: string, alt?: string, className?: string, priority?: boolean, loading?: 'lazy' | 'eager' }> = ({ src, alt, className, loading, priority }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Image src={src || ''} alt={alt || '...'} fill priority={priority || false} loading={loading || 'lazy'} className={`duration-200 opacity-0 absolute top-0 left-0 z-[2] ${className ? className : ''}`} onLoad={e => { e.currentTarget.style.opacity = '1'; setLoaded(true) }} />
      <Skeleton width={'100%'} height={'100%'} className={`absolute top-0 left-0 duration-200 ${loaded ? 'opacity-0' : ''}`} />
    </>
  )
}

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

/** New title card */
export const TitleCardNew: NextPage<{ title: ITitle }> = ({ title }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const topOffset = 4;
  const bottomOffset = 8;

  useEffect(() => {
    const card = cardRef.current;
    const bottom = bottomRef.current;

    if (!card || !bottom) return;

    let inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;
    let activeHeight = bottom.scrollHeight + topOffset + bottomOffset;

    window.addEventListener('resize', () => {
      inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;
      activeHeight = bottom.scrollHeight + topOffset + bottomOffset;

      bottom.style.maxHeight = `${inactiveHeight}px`;
    })

    bottom.style.maxHeight = `${inactiveHeight}px`;

    card.addEventListener('mouseleave', () => {
      bottom.style.maxHeight = `${inactiveHeight}px`;
    })

    card.addEventListener('touchend', () => {
      bottom.style.maxHeight = `${inactiveHeight}px`;
    })

    // Active

    card.addEventListener('touchstart', () => {
      bottom.style.maxHeight = `${activeHeight}px`;
    })

    card.addEventListener('touchmove', () => {
      bottom.style.maxHeight = `${activeHeight}px`;
    })

    card.addEventListener('mouseenter', () => {
      console.log(inactiveHeight)
      bottom.style.maxHeight = `${activeHeight}px`;
    })
  }, [])

  return (
    <Link href={`${config.URL.baseURL}/w/${title.code}`} className='flex flex-col justify-end relative min-w-[200px] w-full h-[240px] rounded-[4px] overflow-hidden' ref={cardRef}>
      <LoadingImage src={title.poster} />

      <div className={`px-[8px] bg-dark/[.8] backdrop-blur-[40px] relative z-[2] duration-200 max-h-0 flex flex-col gap-[12px]`} style={{ paddingTop: `${topOffset}px`, paddingBottom: `${bottomOffset}px` }} ref={bottomRef}>
        <div className='flex flex-col gap-[4px]'>
          <p className='titleCardNew-heading text-white font-bold'>{title.names.ukr}</p>

          <p className='text-lightGrey text-[12px] whitespace-break-spaces'>
            {title.genres?.slice(0, 3).map((genre, i) => {
              let immutableI = i;

              return `${animeGenres[genre]}${++immutableI < title.genres?.slice(0, 3).length! ? ' • ' : ''}`
            })}
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[4px]'>
            <IcoClockOutlined width={12} height={12} />
            <p className='text-white text-[12px]'>{title.episodesCount}</p>
          </div>

          <div className='flex items-center gap-[4px]'>
            <IcoStarRating width={12} height={12} fill='#FF464E' />
            <p className='text-gradientPrimaryFallback text-[12px] font-bold'>{title.newRating.IMDB}</p>
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