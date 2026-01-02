import { FC, useContext } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { HandleClientError } from '~/components/Errors';
import { cn } from '~/utils/classnames';

import { NekoplayerContext, NekoplayerContextProps } from './NPTypes';



const NPFullscreen: FC = () => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
  const { playerRef, isFullscreen } = ctx;



  function changeFullscreen() {
    const player = playerRef.current;

    if (!player) {
      console.error('Player is not found');
      return;
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



  return <button className="nekoplayer-action relative w-[32px] h-[32px]" onClick={changeFullscreen} tabIndex={0} aria-label={getTitle()} title={getTitle()}>
    <MaterialSymbol className={cn(`nekoplayer-action_icon text-white`, isFullscreen && 'opacity-0')} icon="fullscreen" size={32} />
    <MaterialSymbol className={cn(`nekoplayer-action_icon text-white`, !isFullscreen && 'opacity-0')} icon="fullscreen_exit" size={32} />
  </button>;
};


export default NPFullscreen;