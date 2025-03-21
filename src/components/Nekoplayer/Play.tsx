import { useContext } from 'react';
import { NextPage } from 'next';
import { MaterialSymbol } from 'react-material-symbols';

import { cn } from '../Components';

import { IKekwPlayerContextProps, KekwPlayerContext } from './Nekoplayer';



export const NPlay: NextPage = () => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { videoRef, isPlaying } = ctx;



  function changePlaying() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(e => null);
    } else {
      video.pause()
    }
  }

  function getLabel() {
    return isPlaying ? 'Зупинити відео (k)' : 'Продовжити відео (k)'
  }



  return <button className="kekwplayer-play_button relative w-[40px] h-[40px]" onClick={changePlaying} tabIndex={0} aria-label={getLabel()} title={getLabel()}>
    <MaterialSymbol className={cn(`kekwplayer-play text-white`, isPlaying && 'opacity-0')} icon="play_arrow" fill size={40} />
    <MaterialSymbol className={cn(`kekwplayer-play text-white`, !isPlaying && 'opacity-0')} icon="pause" fill size={40} />
  </button>
}