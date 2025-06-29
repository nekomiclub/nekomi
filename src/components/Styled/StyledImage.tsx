'use client'

import '~/styles/components/StyledComponents.scss';

import { useEffect, useMemo, useRef, useState } from 'react';
import { NextPage } from 'next';
import ImageNext from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { MaterialSymbol } from 'react-material-symbols';

import { config } from '~/config';
import { cn } from '~/utils/classnames';
import { UIText } from '../UI/Text.ui';



export interface StyledImageProps {
  src: string
  width: string
  height: string

  className?: string

  /** Use native img instead of next image */
  useImg?: boolean

  /** @default "lazy" */
  loading?: 'lazy' | 'eager'

  /** @default "..." */
  alt?: string

  /** Border radius in px */
  rounded?: number
}



export const StyledImage: NextPage<StyledImageProps> = ({ height, src, width, alt, className, loading, useImg, rounded }) => {
  alt = alt ?? '...';
  loading = loading ?? 'lazy';

  const borderRadius = rounded ?? `${rounded}px`;

  const [isLoaded, setIsLoaded] = useState(false)
  const [isErrored, setIsErrored] = useState(false)
  const [useNativeImage] = useState(Boolean(useImg) || !src.includes(config.URL.nekomi_media))
  const [imageDims, setImageDims] = useState<number[]>([])

  const imageRef = useRef<HTMLImageElement>(null)



  // Resolve image
  useMemo(() => {
    fetch(src, { method: 'HEAD' }).catch(onerror)
  }, [])

  // Handle image events
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    setImageDims([image.offsetWidth, image.offsetHeight])
    setIsLoaded(image.complete)
  }, [])



  function onload() {
    setIsLoaded(true)
  }

  function onerror() {
    console.error(`Failed to load image (${src})`)
    setIsErrored(true)
  }



  return <div className={cn('styled-image-wrapper', className)} style={{ width, height, borderRadius }}>
    {/* Preserved / default image */}
    {useNativeImage && <img src={src} alt={alt} loading={loading} className={cn('styled-image', isErrored && 'styled-image--hide')} onLoad={onload} onError={onerror} ref={imageRef} />}

    {!useNativeImage && <ImageNext src={src} alt={alt} fill loading={loading} className={cn('styled-image', isErrored && 'styled-image--hide')} onLoadingComplete={onload} onError={onerror} ref={imageRef} />}

    {/* Image skeleton. Render it only when loading is lazy */}
    {loading === 'lazy' && <Skeleton width={'100%'} height={'100%'} className="styled-image-skeleton" containerClassName={cn(`styled-image-skeleton`, (isLoaded || isErrored) && 'styled-image--hide')} />}

    {/* Load error */}
    <div className={cn(`styled-image-error`, !isErrored && 'styled-image--hide')}>
      <MaterialSymbol icon="broken_image" size={32} className="text-grey-new" />
      {imageDims[0] > 84 && imageDims[1] > 84 && <UIText text="Зображення відсутнє" type="mini" className="text-grey-new text-center" />}
    </div>
  </div>
}

export default StyledImage;