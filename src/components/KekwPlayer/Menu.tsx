import * as DropMenu from '@fullkekw/fkw-menu';
import { IDubber } from '~/interfaces/IDubber'
import { IKekwPlayerLocalDataItem } from './KekwPlayer'
import { ITitleEpisode } from '~/interfaces/ITitle'
import { IcoPlayerList, IcoPlayerNext } from '~/assets/Player'
import { LoadingImage, cn } from '../Components'
import { memo, useEffect, useState } from 'react'


interface Props {
  /** Episode order */
  order: number

  /** Current episode */
  episode: ITitleEpisode

  /** Total episodes */
  episodes: ITitleEpisode[]

  /** Change episode handler */
  changeEpisode: (episode: ITitleEpisode, moment?: number) => void

  moment: number
  episodesCount: number
  isIdle: boolean
  isLastEpisode: boolean
  titleId: string
  dubbers: IDubber[]
}



export const KekwPlayerMenu = memo<Props>(function KekwPlayerMenu({ order, dubbers, episode, isLastEpisode, changeEpisode, episodes, episodesCount, isIdle, titleId, moment }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)



  // Hide menu on idle
  useEffect(() => {
    if (isIdle) {
      setIsMenuOpen(false);
    }
  }, [isIdle])



  function nextEpisode() {
    if (isLastEpisode) return console.warn(`Can not skip last episode`);

    const nextEp = order + 1

    changeEpisode(episodes.find(el => el.dubberID === episode.dubberID && el.order === nextEp)!, 0)

    // TODO: remove?
    // Write player data to local storage
    const localData = JSON.parse(localStorage.getItem('kekwplayer_data') || '[]') as IKekwPlayerLocalDataItem[]
    const localRecord = localData?.find(el => el.id === titleId)

    if (localRecord) {
      localRecord.ep = nextEp;

      localStorage.setItem('kekwplayer_data', JSON.stringify(localData))
    }
  }



  return (
    <div className={cn(`relative z-[10] px-[24px] py-[16px] flex gap-[4px] duration-200`, isIdle && '-translate-y-[100%]')}>
      <DropMenu.Menu settings={{ align: 'left', animation: 'slide' }} gap={16} state={isMenuOpen} stateSetter={setIsMenuOpen}>
        <DropMenu.MenuTrigger className="px-[16px] py-[8px] bg-dark rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple" primary>
          <IcoPlayerList width={40} height={40} />
        </DropMenu.MenuTrigger>

        <DropMenu.MenuWrapper className={'!w-fit px-[16px] py-[8px] bg-dark rounded-[2px] !flex gap-[8px]'}>
          {/* Dubbers */}
          <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col gap-[4px]">
            {dubbers.map(dubber => {
              const dubberEpisodes = episodes.filter(el => el.dubberID === dubber.id).sort((a, b) => a.order - b.order)
              let lastEpisode = 0;

              dubberEpisodes.forEach(ep => ep.order > lastEpisode ? lastEpisode = ep.order : null);

              function selectDubber() {
                // Set same ep or if not found set first in array
                const sameEpisode = dubberEpisodes.find(el => el.order === episode.order);

                return changeEpisode(sameEpisode || dubberEpisodes[0], sameEpisode ? moment : 0)
              }

              return <li className={`px-[8px] py-[4px] duration-200 flex justify-between gap-[8px] hover:bg-purple focus-visible:bg-purple rounded-[2px] w-full cursor-pointer ${episode.dubberID === dubber.id ? 'bg-purple' : ''}`} onClick={selectDubber} key={`menu-dubs_list--${dubber.id}`}>
                <div className="shrink-0">
                  <LoadingImage src={dubber.thumbURL} width="24px" height="24px" className="rounded-[32px] overflow-hidden" />
                </div>

                <p className="text-white whitespace-nowrap w-full text-start">{dubber.name}</p>

                <div className="flex gap-[4px]">
                  <div className="bg-dark px-[4px] py-[2px] rounded-[2px]">
                    <p className="text-white whitespace-nowrap">{lastEpisode} / {episodesCount}</p>
                  </div>
                </div>
              </li>
            })}
          </ul>

          {/* Divider */}
          <span className="w-[1px] h-auto bg-darkGrey block"></span>

          {/* Episodes */}
          <ul className="max-h-[200px] overflow-y-auto overflow-x-hidden flex flex-col gap-[4px] w-fit">
            {episodes.filter(el => el.dubberID === episode.dubberID).sort((a, b) => a.order - b.order).map(episode => {
              function setEpisode() {
                changeEpisode(episodes.find(el => el.dubberID === episode.dubberID && el.order === episode.order)!, 0)
              }

              return <li className={`px-[16px] py-[4px] duration-200 hover:bg-purple flex justify-center focus-visible:bg-purple rounded-[2px] ${episode.order === order ? 'bg-purple' : ''} cursor-pointer`} onClick={setEpisode} key={`menu-eps_list--${episode.order}`}>
                <p className="text-white">{episode.order}</p>
              </li>
            })}
          </ul>
        </DropMenu.MenuWrapper>
      </DropMenu.Menu>

      <div className="bg-dark flex flex-col justify-center gap-[2px] rounded-[2px] px-[16px]" >
        <p className="text-white font-bold text-center">{`${order}`.padStart(2, '0')}</p>
        <p className="text-white text-[12px] font-extralight text-center">{episode ? dubbers.find(el => el.id === episode.dubberID)?.name : '...'}</p>
      </div>

      <button className={cn(`px-[16px] bg-dark rounded-[2px] duration-200`, !isLastEpisode && 'hover:bg-purple focus-visible:bg-purple')} onClick={() => nextEpisode()} disabled={isLastEpisode}>
        <IcoPlayerNext width={40} height={40} className={cn(`kekwplayer-menu_nextBtn`, isLastEpisode ? 'kekwplayer-menu_nextBtn--lastEpisode' : '')} />
      </button>
    </div>
  );
})