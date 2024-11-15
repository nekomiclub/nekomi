import { IKekwPlayerContextProps, KekwPlayerContext } from './KekwPlayer';
import { IcoPlayerPiPEnter, IcoPlayerPiPExit } from '~/assets/PlayerPiP';
import { NextPage } from 'next';
import { cn } from '../Components';
import { useContext } from 'react';



export const KekwPlayerPiP: NextPage = () => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { videoRef, isPiP } = ctx;



  function changePiP() {
    const video = videoRef.current;

    if (!video) {
      console.error('Video is not found');
      return;
    }

    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch(e => console.error(e));
    } else {
      video.requestPictureInPicture().catch(e => console.error(e))
    }
  }

  function getTitle() {
    return isPiP ? 'Вийти з Картинка в Картинці (p)' : 'Увійти в Картинка в Картинці (p)'
  }



  return (
    <button className="kekwplayer-pip_button relative w-[32px] h-[32px] max-[600px]:hidden" onClick={() => changePiP()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoPlayerPiPEnter className={cn(`kekwplayer-pip`, isPiP && 'opacity-0')} width={40} height={40} />
      <IcoPlayerPiPExit className={cn(`kekwplayer-pip`, !isPiP && 'opacity-0')} width={40} height={40} />
    </button>
  );
}