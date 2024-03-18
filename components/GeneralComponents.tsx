'use client'

import { NextPage } from 'next';
import { ITitle } from '../interfaces/ITitle';
import Link from 'next/link';
import { routes } from '../routes';

import '../styles/components/GeneralComponents.scss'
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { IcoPlay, IcoStarRating } from '../assets/ico/Icos';

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
  return (
    <>
      <Image src={src} alt={alt || '...'} fill priority={priority || false} loading={loading || 'lazy'} className={`duration-200 opacity-0 absolute top-0 left-0 z-[2] ${className ? className : ''}`} onLoad={e => e.currentTarget.style.opacity = '1'} />
      <Skeleton width={'100%'} height={'100%'} className='absolute top-0 left-0' />
    </>
  )
}

export const WatchButton: NextPage<{ href: string, className?: string, gradient: 'primary' | 'secondary' }> = ({ gradient, href, className }) => {
  return (
    <Link href={href} className={`gradient--${gradient}-border-4 gradient--${gradient}-hover watchButton watchButton--${gradient} px-[16px] py-[16px] flex items-center gap-[24px] ${className ? className : ''}`}>
      <div className='relative'>
        <IcoPlay width={40} height={40} gradient={gradient} className={`watchButton-icoGradient watchButton--${gradient}`} />
        <IcoPlay width={40} height={40} className={`watchButton-icoWhite watchButton--${gradient}`} />
      </div>
      <p className='text-white text-[24px] font-bold uppercase'>дивитись</p>
    </Link>
  )
}