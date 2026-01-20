'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import ImageNext from 'next/image';
import Skeleton from 'react-loading-skeleton';

import { cn } from '~/utils/classnames';

import { StyledM } from './StyledText';



export interface IStyledImageProps {
  src: string
  width: string
  height: string

  className?: string
  hideFallback?: boolean
  priority?: boolean
  unoptimized?: boolean
  borderRadius?: number

  /** 
   * Will preserve "eager" when priority specified
   * 
   * @default "lazy"
   */
  loading?: 'lazy' | 'eager'

  /** @default "..." */
  alt?: string
}



const StyledImage: NextPage<IStyledImageProps> = (props) => {
  const { width, height, borderRadius } = props;

  const [imageSrc, setImageSrc] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const loading = props.priority ? 'eager' : props.loading ?? 'lazy';



  // Handle image load & error handling
  useEffect(() => {
    const img = new Image();
    img.src = props.src;

    img.onload = () => {
      setIsLoaded(true);
      setIsErrored(false);
      setImageSrc(props.src);
    };

    img.onerror = () => {
      setIsErrored(true);
      setIsLoaded(false);
    };
  }, [props.src]);



  return <div className={cn('sui-image-wrapper', props.className)} style={{ width, height, borderRadius }}>
    {imageSrc && <ImageNext src={imageSrc} alt={props.alt ?? '...'} loading={loading} priority={props.priority} unoptimized={props.unoptimized ?? true} fill className={cn('sui-image', (!isLoaded || isErrored) && 'sui-image--hide')} />}

    {/* Loading */}
    <Skeleton width={'100%'} height={'100%'} className="sui-image-skeleton" containerClassName={cn(`sui-image-skeleton`, (isLoaded || isErrored) && 'sui-image--hide')} />

    {/* Fallback */}
    {!props.hideFallback && <div className={cn(`sui-image-error`, !isErrored && 'sui-image--hide')}>
      <MaterialSymbol icon="broken_image" className="sui-image-error_icon" color="var(--color-text-muted)" />
      <StyledM text={`Зображення відсутнє`} color="text-muted" center className="sui-image-error_message" />
    </div>}
  </div>;
};

export default StyledImage;