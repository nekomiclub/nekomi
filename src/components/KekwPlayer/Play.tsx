import { IKekwPlayerContextProps, KekwPlayerContext } from './KekwPlayer';
import { IcoPlay } from '~/assets/Icons';
import { IcoPlayerPause } from '~/assets/Player';
import { NextPage } from 'next';
import { cn } from '../Components';
import { useContext } from 'react';



export const KekwPlayerPlay: NextPage = () => {
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



  return (
    <button className="kekwplayer-play_button relative w-[40px] h-[40px]" onClick={changePlaying} tabIndex={0} aria-label={getLabel()} title={getLabel()}>
      <IcoPlay className={cn(`kekwplayer-play`, isPlaying && 'opacity-0')} />
      <IcoPlayerPause className={cn(`kekwplayer-play`, !isPlaying && 'opacity-0')} />
    </button>
  );
}