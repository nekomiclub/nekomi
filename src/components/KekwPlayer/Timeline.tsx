import { IKekwPlayerContextProps, KekwPlayerContext, secondsToReadable } from './KekwPlayer';
import { IRenderThumbParams, IRenderTrackParams } from 'react-range/lib/types';
import { IcoServerUnavailable } from '~/assets/Icons';
import { NextPage } from 'next';
import { Range } from 'react-range';
import { RefObject, useContext } from 'react';



interface ITimelineProps {
  progressRef: RefObject<HTMLDivElement>
  loadedRef: RefObject<HTMLDivElement>
  previewRef: RefObject<HTMLDivElement>
  hoveredMoment: number
}



export const KekwPlayerTimeline: NextPage<ITimelineProps> = ({ loadedRef, previewRef, progressRef, hoveredMoment }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { videoRef, duration, changeMoment, isPreviewOld, isVideoProcessed, moment } = ctx;



  return (
    <div className="w-full h-full relative">
      {/* Range */}
      <div className="w-full h-full relative flex flex-col justify-center">
        {/* Track */}
        <div className="w-full relative" id="kekwplayer-timeline">
          <Range min={0} max={duration} step={1} onChange={val => changeMoment(val[0])} values={[moment]} renderTrack={renderTrack} renderThumb={renderThumb} />
        </div>

        {/* Time */}
        <div className="w-full flex justify-between absolute left-0 -bottom-[8px] max-[720px]:-bottom-[12px]">
          <p className="text-white">{secondsToReadable(videoRef.current?.currentTime || 0).pretty}</p>
          <p className="text-white">{secondsToReadable(duration).pretty}</p>
        </div>
      </div>

      {/* Preview */}
      <div className={`flex flex-col gap-[4px] items-center absolute bottom-[90%] left-0 opacity-0 invisible`} id="kekwplayer-preview" ref={previewRef}>
        <div className={`${isPreviewOld ? 'w-[160px] h-[120px]' : 'w-[240px] h-[135px]'} ${isVideoProcessed ? '' : 'bg-dark'} rounded-[4px] overflow-hidden`}>
          <img src="" alt="..." className={`w-full h-full ${isVideoProcessed ? '' : 'opacity-0 invisible !h-0'}`} />
          <div className={`${isVideoProcessed ? 'opacity-0 invisible h-0' : 'h-full'} flex flex-col items-center justify-center gap-[8px]`}>
            <IcoServerUnavailable width={60} height={60} />
            <p className="text-white uppercase text-center">превью недоступні</p>
          </div>
        </div>
        <p className="text-white">{secondsToReadable(hoveredMoment).pretty}</p>
      </div>
    </div>
  );



  function renderThumb({ props }: IRenderThumbParams) {
    return <div
      {...props}
      key={'kekwplayer-timeline_thumb'}
      style={{
        ...props.style,
        touchAction: 'none',
        pointerEvents: 'none',
        position: 'relative',
        zIndex: 3
      }}
      id="kekwplayer-timeline_thumb"
      className={`w-[12px] h-[12px] bg-gradientPrimaryFallback rounded-[32px]`}
    />
  }

  function renderTrack({ props, children }: IRenderTrackParams) {
    return <div
      {...props}
      key={'kekwplayer-timeline_track'}
      style={{
        ...props.style,
        position: 'relative',
        zIndex: 1
      }}
      id="kekwplayer-timeline_track"
      className={`w-full h-[4px] max-[720px]:!py-[3px] rounded-[6px] z-[10] bg-[#666] duration-200`}
    >
      {children}

      {/* From start progress */}
      <div className="h-full absolute top-0 left-0 touch-none pointer-events-none z-[2] gradient--secondary rounded-[6px]" ref={progressRef}></div>

      {/* Downloading progress */}
      <div className="h-full absolute top-0 touch-none pointer-events-none left-0 z-[1] bg-[#888] rounded-[6px]" ref={loadedRef}></div>
    </div>
  }
}
