'use client';

import { FC, useId, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import LoadingContent from '~/shared/components/LoadingContent';
import { cn } from '~/shared/utilities/classnames';



interface IProps {
  children: React.ReactElement[]
}



const Carousel: FC<IProps> = (props) => {
  const id = useId();

  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);



  return <div className="relative">
    <Swiper className="w-full h-full" spaceBetween={8} slidesPerView={'auto'} onInit={() => setIsSwiperInitialized(true)}>
      {props.children.map((child, i) => {
        return <SwiperSlide className="!w-fit" key={`swiper-${id}--${i}`}>
          {child}
        </SwiperSlide>;
      })}
    </Swiper>

    <div className={cn(`absolute top-0 left-0 w-full h-full bg-dark-primary flex justify-center items-center z-[4] duration-200`, isSwiperInitialized && 'opacity-0 invisible touch-none pointer-events-none')}>
      <LoadingContent />
    </div>
  </div>;
};

export default Carousel;