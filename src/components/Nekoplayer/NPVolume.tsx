'use client'

import { FC, useContext, useEffect, useRef } from 'react';
import { MaterialSymbol } from 'react-material-symbols';
import { Range } from 'react-range';

import { cn } from '../Components';

import { NekoplayerContext, NekoplayerContextProps } from './types';



const NPVolume: FC = () => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
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
    if (!video) return;

    video.muted = !video.muted;
  }

  function setVolume(to: number) {
    const video = videoRef?.current;
    if (!video) return

    video.volume = to / 100;
  }

  function getLabel() {
    return isMuted ? 'Увімкнути звук (m)' : 'Вимкнути звук (m)'
  }



  return <div className="relative flex items-center gap-[8px] max-[600px]:hidden" ref={volumeWrapperRef}>
    <button className="kekwplayer-volume_button relative w-[32px] h-[32px]" onClick={() => changeMuted()} tabIndex={0} aria-label={getLabel()} title={getLabel()}>
      <MaterialSymbol className={cn(`kekwplayer-volume text-white`, !(isMuted) && 'opacity-0')} icon="volume_off" size={32} />
      <MaterialSymbol className={cn(`kekwplayer-volume text-white`, !(volume < 45 && !isMuted) && 'opacity-0')} icon="volume_down" size={32} />
      <MaterialSymbol className={cn(`kekwplayer-volume text-white`, !(volume >= 45 && !isMuted) && 'opacity-0')} icon="volume_up" size={32} />
    </button>

    <div className="flex items-center gap-[16px] w-fit overflow-hidden opacity-0 duration-500 max-0" ref={volumeRangeRef}>
      <div className="w-[100px] relative">
        <Range
          min={0}
          max={100}
          onChange={val => setVolume(val[0])}
          values={[volume]}

          renderThumb={({ props }) => <div
            {...props}
            key={'nekoplayer-volume_thumb'}
            style={{
              ...props.style,
              touchAction: 'none',
              pointerEvents: 'none',
              position: 'relative',
              zIndex: 3,
              outline: 'none'
            }}
            id="kekwplayer-volume_thumb"
            className={`w-[12px] h-[12px] bg-primary rounded-[32px]`}
          />}

          renderTrack={({ children, props }) => <div
            {...props}
            key={'nekoplayer-volume_track'}
            style={{
              ...props.style,
              position: 'relative',
              zIndex: 1
            }}
            className={`w-full h-[4px] rounded-[6px] bg-dark-light/[.5]`}
          >
            {children}

            {/* Volume progress */}
            <div className="w-[20px] h-full absolute top-0 left-0 touch-none pointer-events-none z-[2] bg-primary rounded-[6px]" key={`nekoplayer-volume_progress`} ref={volumeRef}></div>
          </div>}
        />
      </div>

      <p className="text-white font-space-grotesk w-[40px]">{volume}%</p>
    </div>
  </div>
}


export default NPVolume