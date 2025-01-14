'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

import { IcoGhost } from '~/assets/Icons';
import { config } from '~/config';
import { cn } from '../Components';


interface IProps {
  src: string
  width: string
  height: string

  /** Use default img tag instead of next Image */
  useImg?: boolean

  /** Class name for image element */
  imageClassName?: string

  /** Parent class name */
  className?: string

  /** @default "lazy" */
  loading?: 'lazy' | 'eager'

  /** @default "..." */
  alt?: string

  priority?: boolean
}

async function checkImage(url: string) {
  try {
    const res = await fetch(url);
    const buff = await res.blob();

    return buff.type.startsWith('image/')
  } catch (e) {
    return false;
  }
}

export const StyledImage: NextPage<IProps> = ({ height, src, width, alt, className, loading, priority, useImg, imageClassName }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)
  const [useDefaultImage, setUseDefaultImage] = useState(Boolean(useImg))

  const imageRef = useRef<HTMLImageElement>(null)

  src = src ?? 'https://media.nekomi.club/0849e678-43ee-4f72-ae5a-bb9ff9d86c89'
  alt = alt ?? '...';
  priority = priority ?? undefined;
  loading = loading ?? 'lazy';

  useMemo(() => {
    // Check if image domain is nekomi
    setUseDefaultImage(!src.includes(config.domain))
  }, [])

  useEffect(() => {
    (async function () {
      const image = imageRef.current;
      if (!image) return;

      if (image.complete) setIsLoaded(true)
      image.addEventListener('load', () => setIsLoaded(true))

      setIsErrored(!await checkImage(src));
    })()
  }, [])



  return (
    <div className={cn('relative shrink-0', className)} style={{ width, height }}>
      {/* Error wrapper */}
      <div className={cn('w-full h-full z-[2] bg-darkGrey absolute top-0 left-0 flex justify-center items-center opacity-0 duration-200', isErrored && 'opacity-100')}>
        <IcoGhost width={16} height={16} className="w-[50%] h-[50%]" />
      </div>

      {/* Preserved / default image */}
      {useDefaultImage && <>
        <img src={src} alt={alt} loading={loading} className={cn('w-full h-full z-[1] duration-200 opacity-0', isLoaded && 'opacity-100', imageClassName)} ref={imageRef} />
      </>}

      {!useDefaultImage && <>
        <Image src={src} alt={alt} fill loading={loading} className={cn('w-full h-full z-[1] duration-200 opacity-0', isLoaded && 'opacity-100', imageClassName)} ref={imageRef} />
      </>}

      {/* Loading state */}
      <Skeleton width={'100%'} height={'100%'} className={cn(`absolute -z-[1] top-0 left-0 duration-200`, isLoaded || isErrored ? 'opacity-0' : '')} />
    </div>
  )
}

export default StyledImage;