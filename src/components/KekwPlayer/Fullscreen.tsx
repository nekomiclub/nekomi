import { useContext } from 'react';
import { NextPage } from 'next';

import { IcoPlayerFullscreenEnter, IcoPlayerFullscreenExit } from '~/assets/PlayerFullscreen';
import { cn } from '../Components';
import { HandleClientError } from '../Errors';

import { IKekwPlayerContextProps, KekwPlayerContext } from './KekwPlayer';

export const KekwPlayerFullscreen: NextPage = () => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { playerRef, isFullscreen } = ctx;



  function changeFullscreen() {
    const player = playerRef.current

    if (!player) {
      console.error('Player is not found')
      return
    }

    if (document.fullscreenElement) {
      document.exitFullscreen().catch(e => HandleClientError(e));
    } else {
      player.requestFullscreen().catch(e => HandleClientError(e));
    }
  }

  function getTitle() {
    return isFullscreen ? 'Вийти з повноекранного режиму (f)' : 'Увійти в повноекранний режим (f)';
  }



  return (
    <button className="kekwplayer-fullscreen_button relative w-[32px] h-[32px]" onClick={() => changeFullscreen()} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
      <IcoPlayerFullscreenEnter className={cn(`kekwplayer-fullscreen`, isFullscreen && 'opacity-0')} width={40} height={40} />
      <IcoPlayerFullscreenExit className={cn(`kekwplayer-fullscreen`, !isFullscreen && 'opacity-0')} width={40} height={40} />
    </button>
  );
}