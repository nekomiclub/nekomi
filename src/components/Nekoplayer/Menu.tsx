import { memo, useContext, useEffect, useState } from 'react'
import * as DropMenu from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'react-material-symbols';

import { DubberCompact } from '~/interfaces/DubberIntf';
import { cn } from '../Components'
import StyledImage from '../StyledImage';

import { IKekwPlayerContextProps, KekwPlayerContext } from './Nekoplayer';



interface Props {
  /** Episode order */
  order: number

  isIdle: boolean
  isLastEpisode: boolean
  totalEpisodesCount: number

  className?: string
}



export const KekwPlayerMenu = memo<Props>(function KekwPlayerMenu({ order, isLastEpisode, isIdle, className, totalEpisodesCount }) {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { anime, dubbers, episode, changeEpisode, moment } = ctx;

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedDubber, setSelectedDubber] = useState<DubberCompact | null>(null)



  // Hide menu on idle
  useEffect(() => {
    if (isIdle) {
      setIsMenuOpen(false);
    }
  }, [isIdle])

  useEffect(() => {
    const dubber = dubbers.find(el => el.id === episode.dubberID)
    if (!dubber) return

    setSelectedDubber(dubber);
  }, [episode])



  function skipEpisode() {
    if (isLastEpisode) return console.warn(`Can not skip last episode`);

    const nextEpisode = anime.episodes.find(el => el.dubberID === episode.dubberID && el.order === order + 1);
    if (!nextEpisode) return;

    changeEpisode(nextEpisode)
  }

  function setEpisode(order: number) {
    changeEpisode(anime.episodes.find(el => el.dubberID === episode.dubberID && el.order === order)!, 0)
  }

  function setDubber(id: string) {
    const dubbedEpisodes = anime.episodes.filter(el => el.dubberID === id);

    // Set same ep or if not found set first in array
    const sameEpisode = dubbedEpisodes.find(el => el.order === episode.order);

    return changeEpisode(sameEpisode || dubbedEpisodes[0], sameEpisode ? moment : 0)
  }



  return selectedDubber && <div className={cn(`relative z-[10] px-[24px] py-[16px] duration-200`, isIdle && '-translate-y-[100%]', className)}>
    <DropMenu.Menu className="w-fit flex gap-[4px]" settings={{ align: 'start', animation: 'slide' }} gap={16} state={isMenuOpen} stateSetter={setIsMenuOpen} id="kekwplayer-menu-selectDubbers">
      <DropMenu.MenuTrigger className="ui-button rounded-[2px] w-[40px] h-[40px] flex justify-center items-center" anchor>
        <MaterialSymbol className={cn(`text-white`)} icon="list" size={32} />
      </DropMenu.MenuTrigger>

      <DropMenu.MenuWrapper className={'!w-fit min-w-full bg-dark-primary border border-dark-light flex rounded-[4px]'}>
        <div className="flex flex-col max-h-[300px] h-full overflow-y-auto">
          {dubbers.map(dubber => {
            const isSelected = Boolean(selectedDubber.id === dubber.id);
            const dubberMaxEp = Math.max(...[0, ...anime.episodes.filter(el => el.dubberID === dubber.id)!.map(el => el.order)])

            return <button className={cn(`flex justify-between items-center gap-[16px] p-[6px] h-[44px] shrink-0 duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, isSelected && 'bg-primary')} onClick={() => setDubber(dubber.id)} tabIndex={0} key={`np-menudubber-${dubber.id}`}>
              <div className="flex items-center gap-[8px]">
                <StyledImage src={dubber.avatarURL} width={`24px`} height="24px" className="rounded-[2px] overflow-hidden" />
                <p className="text-white font-manrope whitespace-nowrap">{dubber.nameUkr}</p>
              </div>

              <div className="flex items-center gap-[4px]">
                <div className={cn(`flex items-center gap-[8px] px-[8px] py-[4px] border border-dark-light rounded-[2px]`, isSelected && 'border-white')}>
                  <MaterialSymbol className="text-white" icon="acute" size={16} />
                  <p className="text-white font-space-grotesk whitespace-nowrap">{String(dubberMaxEp).padStart(2, '0')} / {String(totalEpisodesCount).padStart(2, '0')}</p>
                </div>
              </div>
            </button>
          })}
        </div>

        {/* Divider */}
        <div className="w-[1px] h-auto bg-dark-light"></div>

        {/* Episodes */}
        <div className="flex flex-col max-h-[300px] h-full overflow-y-auto shrink-0">
          {anime.episodes.filter(el => el.dubberID === selectedDubber.id).map(episode => {
            return <button className={cn(`w-full px-[8px] flex justify-center items-center h-[44px] shrink-0 duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, episode.order === order && 'bg-primary')} onClick={() => setEpisode(episode.order)} tabIndex={0} key={`np-menuepisode-${episode.dubberID}--${episode.order}`}>
              <p className="text-white font-space-grotesk font-bold">{String(episode.order).padStart(2, '0')}</p>
            </button>
          })}
        </div>
      </DropMenu.MenuWrapper>

      <div className="bg-dark-primary flex justify-center items-center gap-[16px] rounded-[2px] px-[16px] h-[40px]" >
        <p className="text-white text-[20px] text-center font-space-grotesk font-bold">#{String(order).padStart(2, '0')}</p>

        <div className="flex items-center gap-[8px]">
          <StyledImage src={selectedDubber.avatarURL} width="24px" height="24px" />
          <p className="text-white font-manrope">{selectedDubber.nameUkr}</p>
        </div>
      </div>

      <button className={cn(`ui-button rounded-[2px] flex justify-center items-center w-[40px] h-[40px]`, isLastEpisode && 'cursor-not-allowed hover:bg-dark-medium focus-visible:bg-dark-medium')} onClick={skipEpisode} disabled={isLastEpisode} tabIndex={0}>
        <MaterialSymbol className={cn(`text-white duration-100`, isLastEpisode && '!text-grey-new')} icon="skip_next" size={32} />
      </button>
    </DropMenu.Menu>
  </div>
})

// {/* Dubbers */}
// <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col gap-[4px]">
// {dubbers.map(dubber => {
//   const dubberEpisodes = episodes.filter(el => el.dubberID === dubber.id).sort((a, b) => a.order - b.order)
//   let lastEpisode = 0;

//   dubberEpisodes.forEach(ep => ep.order > lastEpisode ? lastEpisode = ep.order : null);

// function selectDubber() {
//   // Set same ep or if not found set first in array
//   const sameEpisode = dubberEpisodes.find(el => el.order === episode.order);

//   return changeEpisode(sameEpisode || dubberEpisodes[0], sameEpisode ? moment : 0)
// }

//   return <li className={`px-[8px] py-[4px] duration-200 flex justify-between gap-[8px] hover:bg-purple focus-visible:bg-purple rounded-[2px] w-full cursor-pointer ${episode.dubberID === dubber.id ? 'bg-purple' : ''}`} onClick={selectDubber} key={`menu-dubs_list--${dubber.id}`}>
//     <div className="shrink-0">
//       <StyledImage src={dubber.avatarURL} width="24px" height="24px" className="rounded-[32px] overflow-hidden" />
//     </div>

//     <p className="text-white whitespace-nowrap w-full text-start">{dubber.nameUkr}</p>

//     <div className="flex gap-[4px]">
//       <div className="bg-dark px-[4px] py-[2px] rounded-[2px]">
//         <p className="text-white whitespace-nowrap">{lastEpisode} / {episodesCount}</p>
//       </div>
//     </div>
//   </li>
// })}
// </ul>

// {/* Divider */}
// <span className="w-[1px] h-auto bg-darkGrey block"></span>

// {/* Episodes */}
// <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col gap-[4px] w-fit">
// {episodes.filter(el => el.dubberID === episode.dubberID).sort((a, b) => a.order - b.order).map(episode => {
// function setEpisode() {
//   changeEpisode(episodes.find(el => el.dubberID === episode.dubberID && el.order === episode.order)!, 0)
// }

//   return <li className={`px-[16px] py-[4px] duration-200 hover:bg-purple flex justify-center focus-visible:bg-purple rounded-[2px] ${episode.order === order ? 'bg-purple' : ''} cursor-pointer`} onClick={setEpisode} key={`menu-eps_list--${episode.order}`}>
//     <p className="text-white">{episode.order}</p>
//   </li>
// })}
// </ul>