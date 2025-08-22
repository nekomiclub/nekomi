'use client';

import '~/styles/components/StyledComponents.scss';

import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import ImageNext from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { MaterialSymbol } from 'react-material-symbols';

import { UIText } from '~/components/UI/Text.ui';
import { config } from '~/config';
import { cn } from '~/utils/classnames';



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

  const [imageSrc, setImageSrc] = useState('');
  const [imageDims, setImageDims] = useState<number[]>([]); // width, height

  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [useNativeImage, setUseNativeImage] = useState(Boolean(useImg) || !src.includes(config.URL.nekomi_media));

  const imageRef = useRef<HTMLImageElement>(null);



  // Handle image dims
  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    setImageDims([img.width, img.height]);
  }, [imageSrc]);

  // Handle image load
  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setIsLoaded(true);
      setIsErrored(false);
      setImageSrc(src);
    };

    img.onerror = () => {
      setIsErrored(true);
      setIsLoaded(false);
    };

    setUseNativeImage(Boolean(useImg) || !src.includes(config.URL.nekomi_media));
  }, [src]);



  return <div className={cn('styled-image-wrapper', className)} style={{ width, height, borderRadius }}>
    {/* Preserved / default image */}
    {useNativeImage && imageSrc && <img src={imageSrc} alt={alt} loading={loading} className={cn('styled-image', isErrored && 'styled-image--hide')} ref={imageRef} />}

    {!useNativeImage && imageSrc && <ImageNext src={imageSrc} alt={alt} fill loading={loading} className={cn('styled-image', isErrored && 'styled-image--hide')} ref={imageRef} />}

    {/* Image skeleton. Render it only when loading is lazy */}
    {loading === 'lazy' && <Skeleton width={'100%'} height={'100%'} className="styled-image-skeleton" containerClassName={cn(`styled-image-skeleton`, (isLoaded || isErrored) && 'styled-image--hide')} />}

    {/* Load error */}
    <div className={cn(`styled-image-error`, !isErrored && 'styled-image--hide')}>
      <MaterialSymbol icon="broken_image" size={32} className="text-grey-new" />
      {imageDims[0] > 84 && imageDims[1] > 84 && <UIText text="Зображення відсутнє" type="mini" className="text-grey-new text-center" />}
    </div>
  </div>;
};

export default StyledImage;