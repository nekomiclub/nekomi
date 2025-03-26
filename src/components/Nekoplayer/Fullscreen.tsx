import { useContext } from 'react';
import { NextPage } from 'next';
import { MaterialSymbol } from 'react-material-symbols';

import { cn } from '../Components';
import { HandleClientError } from '../Errors';

import { NekoplayerContext, NekoplayerContextProps } from './NekoplayerTypes';



export const KekwPlayerFullscreen: NextPage = () => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
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



  return <button className="kekwplayer-fullscreen_button relative w-[32px] h-[32px]" onClick={changeFullscreen} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
    <MaterialSymbol className={cn(`kekwplayer-fullscreen text-white`, isFullscreen && 'opacity-0')} icon="fullscreen" size={32} />
    <MaterialSymbol className={cn(`kekwplayer-fullscreen text-white`, !isFullscreen && 'opacity-0')} icon="fullscreen_exit" size={32} />
  </button>
}