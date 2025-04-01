'use client'

import React, { useId, useState } from 'react';
import * as Loader from '@uiball/loaders';
import clsx from 'clsx';
import { NextPage } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';






interface PrettySwiperProps {
  children: React.ReactElement[]
}


/** Simple loading content component */
export const LoadingContent: NextPage = () => {
  return <div className="flex items-center gap-[16px]">
    <Loader.Ring size={16} color="#555555" />

    <p className="text-grey-new">Завантажуємо контент...</p>
  </div>
}

export const PrettySwiper: NextPage<PrettySwiperProps> = ({ children }) => {
  const id = useId().replaceAll(':', '');

  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false)



  return <div className="relative">
    <Swiper className="w-full h-full" spaceBetween={8} slidesPerView={'auto'} onInit={() => setIsSwiperInitialized(true)}>
      {children.map((child, i) => {
        return <SwiperSlide className="!w-fit" key={`swiper-${id}--${i}`}>
          {child}
        </SwiperSlide>
      })}
    </Swiper>

    <div className={cn(`absolute top-0 left-0 w-full h-full bg-dark-primary flex justify-center items-center z-[4] duration-200`, isSwiperInitialized && 'opacity-0 invisible touch-none pointer-events-none')}>
      <LoadingContent />
    </div>
  </div>
}




/** Copy given text to cpilboard */
export function copyToClipboard(textToCopy: string) {
  // Navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

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



/** @deprecated */
export const cn = clsx;