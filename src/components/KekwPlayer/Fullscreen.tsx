import { IKekwPlayerContextProps, KekwPlayerContext } from './KekwPlayer';
import { IcoPlayerFullscreenEnter, IcoPlayerFullscreenExit } from '~/assets/PlayerFullscreen';
import { NextPage } from 'next';
import { cn } from '../Components';
import { useContext } from 'react';

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
      document.exitFullscreen().catch(e => console.error(e));
    } else {
      player.requestFullscreen().catch(e => console.error(e));
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