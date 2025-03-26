import { useContext } from 'react';
import { NextPage } from 'next';
import { MaterialSymbol } from 'react-material-symbols';

import { cn } from '../Components';
import { HandleClientError } from '../Errors';

import { NekoplayerContext, NekoplayerContextProps } from './NekoplayerTypes';



export const KekwPlayerPiP: NextPage = () => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
  const { videoRef, isPiP } = ctx;



  function changePiP() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found');
      return;
    }

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(e => HandleClientError(e));
    } else {
      video.requestPictureInPicture().catch(e => HandleClientError(e))
    }
  }

  function getTitle() {
    return isPiP ? 'Вийти з Картинка в Картинці (p)' : 'Увійти в Картинка в Картинці (p)'
  }



  return <button className="kekwplayer-pip_button relative w-[32px] h-[32px] max-[600px]:hidden" onClick={changePiP} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
    <MaterialSymbol className={cn(`kekwplayer-pip text-white`, isPiP && 'opacity-0')} icon="pip" size={32} />
    <MaterialSymbol className={cn(`kekwplayer-pip text-white`, !isPiP && 'opacity-0')} icon="pip_exit" size={32} />
  </button>
}