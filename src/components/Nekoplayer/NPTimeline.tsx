import { FC, RefObject, useContext } from 'react';
import { Range } from 'react-range';

import prettySeconds from '~/utils/pretty-seconds';
import { cn } from '~/utils/utils';

import { NekoplayerContext, NekoplayerContextProps, NekoplayerIDs } from './NPTypes';



interface NPTimelineProps {
  progressRef: RefObject<HTMLDivElement>
  loadedRef: RefObject<HTMLDivElement>
  previewRef: RefObject<HTMLDivElement>
  hoveredMoment: number
}



const NPTimeline: FC<NPTimelineProps> = ({ loadedRef, previewRef, progressRef, hoveredMoment }) => {
  const { duration, changeMoment, isPreviewOld, moment, isVideoProcessed } = useContext(NekoplayerContext) as NekoplayerContextProps;



  return <div className="w-full h-full relative">
    {/* Range */}
    <div className="w-full h-full relative flex flex-col justify-center">
      {/* Track */}
      <div className="w-full relative" id={NekoplayerIDs.Timeline}>
        <Range
          min={0}
          max={duration}
          step={1}
          onChange={val => changeMoment(val[0])}
          values={[moment]}

          renderTrack={({ children, props }) => <div
            {...props}
            key={NekoplayerIDs.TimelineTrack}
            style={{
              ...props.style,
              position: 'relative',
              zIndex: 1
            }}
            id={NekoplayerIDs.TimelineTrack}
            className={`w-full h-[4px] max-[720px]:!py-[3px] rounded-[6px] z-[10] bg-dark-light/[.5] duration-200`}
          >
            {children}

            {/* Video progress */}
            <div className="h-full absolute top-0 left-0 touch-none pointer-events-none z-[2] rounded-[6px] max-w-full bg-primary" ref={progressRef}></div>

            {/* Downloading progress */}
            <div className="h-full absolute top-0 left-0 touch-none pointer-events-none z-[1] rounded-[6px] max-w-full bg-white/[.2]" ref={loadedRef}></div>
          </div>}

          renderThumb={({ props }) => <div
            {...props}
            key={NekoplayerIDs.TimelineThumb}
            style={{
              ...props.style,
              touchAction: 'none',
              pointerEvents: 'none',
              position: 'relative',
              zIndex: 3
            }}
            id={NekoplayerIDs.TimelineThumb}
            className={`w-[12px] h-[12px] bg-primary rounded-[32px]`}
          />}
        />
      </div>

      {/* Time */}
      <div className="w-full flex justify-between absolute left-0 -bottom-[8px] max-[720px]:-bottom-[12px]">
        <p className="text-white font-space-grotesk">{prettySeconds(moment).pretty}</p>
        <p className="text-white font-space-grotesk">{prettySeconds(duration).pretty}</p>
      </div>
    </div>

    {/* Preview */}
    <div className={`flex flex-col gap-[4px] items-center absolute bottom-[90%] left-0 opacity-0 invisible`} id={NekoplayerIDs.Preview} ref={previewRef}>
      <div className={cn(`rounded-[4px] overflow-hidden bg-dark`, !isVideoProcessed && 'hidden', isPreviewOld ? 'w-[160px] h-[120px]' : 'w-[240px] h-[135px]')}>
        <img src="" alt="..." className={cn(`w-full h-full rounded-[4px]`)} />
      </div>

      <p className="text-white font-space-grotesk">{prettySeconds(hoveredMoment).pretty}</p>
    </div>
  </div>
}



export default NPTimeline