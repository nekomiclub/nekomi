'use client'

import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import ImageNext from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { MaterialSymbol } from 'react-material-symbols';

import { config } from '~/config';

import { cn } from './Components';
import { UIText } from './UI/Text.ui';



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



export const StyledImage: NextPage<IProps> = ({ height, src, width, alt, className, loading, priority, useImg, imageClassName }) => {
  alt = alt ?? '...';
  loading = loading ?? 'lazy';

  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)
  const [useDefaultImage] = useState(Boolean(useImg) || !src.includes(config.URL.media))
  const [imageDims, setImageDims] = useState<number[]>([])

  const imageRef = useRef<HTMLImageElement>(null)



  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    setImageDims([image.offsetWidth, image.offsetHeight])

    const img = new Image();
    const timeout = setTimeout(handleTimeout, 10000);

    img.onload = () => {
      setIsLoaded(true);

      clearTimeout(timeout);
    }

    img.onerror = () => {
      console.error(`Image ${src} cannot be loaded due to error`)

      setIsErrored(true);
      setIsLoaded(false);

      clearTimeout(timeout);
    }



    img.src = src;
  }, [])



  function handleTimeout() {
    setIsErrored(true);
    console.warn(`Image ${src} loading timed out`)
  }



  return (
    <div className={cn('relative shrink-0 bg-dark-bright', className)} style={{ width, height }}>
      <div className={cn(`w-full h-full absolute top-0 left-0 bg-dark-bright duration-200 flex flex-col gap-[8px] justify-center items-center touch-none pointer-events-none z-[2]`, !isErrored && 'opacity-0 invisible')}>
        <MaterialSymbol icon="broken_image" size={32} className="text-grey-new" />
        {imageDims[0] > 84 && imageDims[1] > 84 && <UIText text="Зображення відсутнє" type="mini" className="text-grey-new text-center" />}
      </div>

      {/* Preserved / default image */}
      {useDefaultImage && <>
        <img src={src} alt={alt} loading={loading} className={cn('w-full h-full duration-200', !isLoaded && 'opacity-0', imageClassName)} ref={imageRef} />
      </>}

      {!useDefaultImage && <>
        <ImageNext src={src} alt={alt} fill loading={loading} sizes="100vw" className={cn('w-full h-full duration-200', !isLoaded && 'opacity-0', imageClassName)} ref={imageRef} />
      </>}

      {/* Loading state */}
      {loading === 'lazy' && <Skeleton width={'100%'} height={'100%'} className={cn(`absolute top-0 left-0 duration-200`, isLoaded && 'opacity-0')} />}
    </div>
  )
}

export default StyledImage;