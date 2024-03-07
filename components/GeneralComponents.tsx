'use client'

import { NextPage } from 'next';
import { ITitle } from '../interfaces/ITitle';
import Link from 'next/link';
import { routes } from '../routes';

import '../styles/components/GeneralComponents.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { IcoNewPlay, IcoNewStarRating } from '../assets/ico/Icos';

/** @deprecated use NewTitleCard instead */
export const TitleCard: NextPage<{ title: ITitle }> = ({ title }) => {
  return (
    <Link href={routes.watchTitle.path.replace('*', title.code)}>
      <div className='title-card w-full flex flex-col items-center justify-between relative h-[240px] rounded-[4px]'>
        <div className='absolute top-0 left-0 w-full h-full'>
          <LoadingImage src={title.poster} />
        </div>

        <div className='w-full flex justify-end relative z-[2]'>
          <div className='px-[4px] py-[2px] rounded-[2px] relative top-[2px] right-[4px] gradient--primary'>
            <p className='text-[12px] text-white font-bold'>{title.rating}</p>
          </div>
        </div>

        <div className='title-card-blur bg-dark/[.2] backdrop-blur-[10px] px-[8px] py-[4px] w-full relative z-[2]'>
          <p className='text-[16px] text-white text-center'>{title.names.ukr || title.code}</p>
        </div>
      </div>
    </Link>
  )
}

export const NewTitleCard: NextPage<{ title: ITitle, className?: string }> = ({ title, className }) => {
  return (
    <Link href={`${routes.watch.path}/${title.code}`} className='newTitle-card w-full h-full'>
      <div className='relative w-full h-full flex flex-col items-end'>
        {/* Background */}
        <div className='absolute top-0 left-0 w-full h-full'>
          <LoadingImage src={title.poster} alt={`${title.code} poster`} />
        </div>

        {/* Rating */}
        <div className='relative z-[2] m-[4px] flex items-center gap-[8px] p-[4px] gradientNew--secondary rounded-[2px]'>
          <IcoNewStarRating width={24} height={24} />
          <p className='text-white font-bold'>{title.rating}</p>
        </div>

        {/* Title */}
        <div className='w-full h-full flex flex-col justify-end flex-1'>
          <div className='newTitle-card-blur relative z-[2] w-full h-fit px-[16px] py-[8px] bg-dark/[.1] backdrop-blur-[32px] flex justify-center'>
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
  return (
    <>
      <Image src={src} alt={alt || '...'} fill priority={priority || false} loading={loading || 'lazy'} className={`duration-200 opacity-0 absolute top-0 left-0 z-[2] ${className ? className : ''}`} onLoad={e => e.currentTarget.style.opacity = '1'} />
      <Skeleton width={'100%'} height={'100%'} className='absolute top-0 left-0' />
    </>
  )
}

export const NewWatchButton: NextPage<{ href: string, className?: string, gradient: 'primary' | 'secondary' }> = ({ gradient, href, className }) => {
  return (
    <Link href={href} className={`gradientNew--${gradient}-border-4 newWatchButton newWatchButton--${gradient} px-[16px] py-[16px] flex items-center gap-[24px] ${className ? className : ''}`}>
      <div className='relative'>
        <IcoNewPlay width={40} height={40} gradient={gradient} className={`newWatchButton-icoGradient newWatchButton--${gradient}`} />
        <IcoNewPlay width={40} height={40} className={`newWatchButton-icoWhite newWatchButton--${gradient}`} />
      </div>
      <p className='text-white text-[24px] font-bold uppercase'>дивитись</p>
    </Link>
  )
}