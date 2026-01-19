'use client';

import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import ImageNext from 'next/image';
import Skeleton from 'react-loading-skeleton';

import { P } from '~/components/UI/Typography';
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
  const [useNativeImage, setUseNativeImage] = useState(Boolean(useImg));

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

    setUseNativeImage(Boolean(useImg));
  }, [src]);



  return <div className={cn('sui-image-wrapper', className)} style={{ width, height, borderRadius }}>
    {/* Preserved / default image */}
    {useNativeImage && imageSrc && <img src={imageSrc} alt={alt} loading={loading} className={cn('sui-image', isErrored && 'sui-image--hide')} ref={imageRef} />}

    {!useNativeImage && imageSrc && <ImageNext src={imageSrc} alt={alt} fill loading={loading} className={cn('sui-image', isErrored && 'sui-image--hide')} ref={imageRef} />}

    {/* Image skeleton. Render it only when loading is lazy */}
    {loading === 'lazy' && <Skeleton width={'100%'} height={'100%'} className="sui-image-skeleton" containerClassName={cn(`sui-image-skeleton`, (isLoaded || isErrored) && 'sui-image--hide')} />}

    {/* Load error */}
    <div className={cn(`sui-image-error`, !isErrored && 'sui-image--hide')}>
      <MaterialSymbol icon="broken_image" size={32} className="text-grey-new" />
      {imageDims[0] > 84 && imageDims[1] > 84 && <P text="Зображення відсутнє" size={12} className="text-grey-new text-center" />}
    </div>
  </div>;
};

export default StyledImage;