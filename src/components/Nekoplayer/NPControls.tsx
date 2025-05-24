import { FC, useContext, useEffect, useRef } from 'react';

import { HandleClientError } from '../Errors';

import { NekoplayerContext, NekoplayerContextProps } from './NPTypes';



const NPControls: FC = () => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
  const { changeMoment, videoRef, playerRef } = ctx;



  const playpauseRef = useRef<HTMLDivElement>(null)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)

  const multiskipTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)
  const isMultiskip = useRef<boolean>(false) // Each double click will skip by 10s, in multiskip each click will skip by 10



  //* Handle double clicks
  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;

    if (!prev || !next) return;

    prev.addEventListener('dblclick', () => handleDBClick('prev'))
    next.addEventListener('dblclick', () => handleDBClick('next'))

    function handleDBClick(dir: 'prev' | 'next') {
      // Pass if multiskip enabled
      if (isMultiskip.current) return;
      isMultiskip.current = true;

      skipTime(dir);
    }
  }, [])

  //* Handle click
  useEffect(() => {
    const prev = prevRef.current;
    const next = nextRef.current;
    const playpause = playpauseRef.current;

    if (!prev || !next || !playpause) return;

    prev.addEventListener('click', () => skipTime('prev'))
    next.addEventListener('click', () => skipTime('next'))

    // Handle play/pause by clicking
    playpause.addEventListener('click', playPause)

    // Enter fullscreen
    playpause.addEventListener('dblclick', () => {
      const player = playerRef.current;
      if (!player) return;

      if (document.fullscreenElement) {
        document.exitFullscreen().catch(e => HandleClientError(e));
      } else {
        player.requestFullscreen().catch(e => HandleClientError(e));
      }
    })
  }, [])



  function playPause() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(e => null)
    } else {
      video.pause();
    }
  }

  function skipTime(dir: 'prev' | 'next') {
    const video = videoRef.current;
    if (!video) return;

    // Pass if multiskip not enabled
    if (!isMultiskip.current) return playPause();
    const skipTo = dir === 'next' ? video.currentTime + 10 : video.currentTime - 10;

    clearTimeout(multiskipTimeoutRef.current);
    changeMoment(skipTo)

    multiskipTimeoutRef.current = setTimeout(() => {
      isMultiskip.current = false;
    }, 500);
  }



  return <div className="absolute top-0 left-0 w-full h-full flex justify-between z-[2]">
    <div className="w-full flex-1 h-full shrink-0" ref={prevRef}></div>

    <div className="w-full flex-[3] h-full shrink-0" ref={playpauseRef}></div>

    <div className="w-full flex-1 h-full shrink-0" ref={nextRef}></div>
  </div>
}


export default NPControls