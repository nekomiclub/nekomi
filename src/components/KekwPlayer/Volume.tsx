'use client'

import { RefObject, useContext, useEffect, useRef } from 'react';
import { NextPage } from 'next';
import { Range } from 'react-range';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';

import { IcoPlayerVolumeMin, IcoPlayerVolumeMuted, IcoPlayerVolumeNormal } from '~/assets/PlayerVolume';
import { cn } from '../Components';

import { IKekwPlayerContextProps, KekwPlayerContext } from './KekwPlayer';



interface IRenderTrackParamsExtended extends IRenderTrackParams {
  volumeRef: RefObject<HTMLDivElement>
}



export const KekwPlayerVolume: NextPage = () => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { videoRef, volume, isMuted } = ctx;

  const volumeWrapperRef = useRef<HTMLDivElement>(null)
  const volumeRangeRef = useRef<HTMLDivElement>(null)
  const volumeRef = useRef<HTMLDivElement>(null)

  //* Handle volume hover
  useEffect(() => {
    const volumeWrapper = volumeWrapperRef.current;
    const volumeRange = volumeRangeRef.current;
    if (!volumeRange || !volumeWrapper) return;

    const volumeWidth = volumeRange.scrollWidth;

    volumeRange.style.maxWidth = '0';
    volumeRange.style.opacity = '0';

    volumeWrapper.addEventListener('pointerenter', () => {
      volumeRange.style.opacity = '1';
      volumeRange.style.maxWidth = `${volumeWidth}px`;
    })

    volumeWrapper.addEventListener('pointerleave', () => {
      volumeRange.style.maxWidth = '0';
      volumeRange.style.opacity = '0';
    })
  }, [])

  //* Handle volume progress
  useEffect(() => {
    const ref = volumeRef.current;
    if (!ref) return;

    ref.style.width = `${volume}px`
  }, [volume])



  function changeMuted() {
    const video = videoRef?.current;

    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.muted = !video.muted;
  }

  function setVolume(to: number) {
    const video = videoRef?.current;

    if (!video) {
      console.error('Video is not found')
      return;
    };

    video.volume = to / 100;
  }

  function getLabel() {
    return isMuted ? 'Увімкнути звук (m)' : 'Вимкнути звук (m)'
  }

  return (
    <div className="relative flex items-center gap-[8px] max-[600px]:hidden" ref={volumeWrapperRef}>
      <button className="kekwplayer-volume_button relative w-[32px] h-[32px]" onClick={() => changeMuted()} tabIndex={0} aria-label={getLabel()} title={getLabel()}>
        <IcoPlayerVolumeMin className={cn(`kekwplayer-volume`, volume < 30 && !isMuted ? 'opacity-100' : 'opacity-0')} />
        <IcoPlayerVolumeNormal className={cn(`kekwplayer-volume`, volume >= 30 && !isMuted ? 'opacity-100' : 'opacity-0')} />
        <IcoPlayerVolumeMuted className={cn(`kekwplayer-volume`, isMuted ? 'opacity-100' : 'opacity-0')} />
      </button>

      <div className="flex items-center gap-[16px] w-fit overflow-hidden opacity-0 duration-500 max-0" ref={volumeRangeRef}>
        <div className="w-[100px] relative">
          <Range min={0} max={100} onChange={val => setVolume(val[0])} values={[volume]} renderThumb={renderThumb} renderTrack={(props) => renderTrack({ ...props, volumeRef })} />
        </div>

        <p className="text-white">{volume}%</p>
      </div>
    </div>
  );
}

function renderThumb({ props }: IRenderThumbParams) {
  return <div
    {...props}
    key={'kekwplayer-volume_thumb'}
    style={{
      ...props.style,
      touchAction: 'none',
      pointerEvents: 'none',
      position: 'relative',
      zIndex: 3,
      outline: 'none'
    }}
    id="kekwplayer-volume_thumb"
    className={`w-[12px] h-[12px] bg-gradientPrimaryFallback rounded-[32px]`}
  />
}

function renderTrack({ props, children, volumeRef }: IRenderTrackParamsExtended) {
  return <div
    {...props}
    key={'kekwplayer-volume_track'}
    style={{
      ...props.style,
      position: 'relative',
      zIndex: 1
    }}
    className={`w-full h-[4px] rounded-[6px] bg-[#666]`}
  >
    {children}

    {/* Volume progress */}
    <div className="w-[20px] h-full absolute top-0 left-0 touch-none pointer-events-none z-[2] gradient--secondary rounded-[6px]" ref={volumeRef}></div>
  </div>
}