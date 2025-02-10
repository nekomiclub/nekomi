'use client'

import { ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';

import { ITitleEpisodeMeta } from '~/interfaces/ITitle';
import { cn } from '../Components';
import { wordDeclination } from '../handlers';
import StyledImage from '../StyledImage';

import { IKekwPlayerContextProps, KekwPlayerContext, secondsToReadable } from './KekwPlayer';

interface IKekwPlayerScreenProps {

}

interface IKekwPlayerScreenWrapperProps {
  children: ReactNode
}



/** Player screens wrapper
 * @requires KekwPlayerContext
 */
export const Wrapper: NextPage<IKekwPlayerScreenWrapperProps> = ({ children }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  // Handle wrapper visibility
  useEffect(() => {
    setIsVisible(ctx.currentScreen !== 'none');
  }, [ctx])



  return <div className={cn(`w-full h-full absolute top-0 left-0 flex justify-center items-center z-[15] bg-dark/[.5] backdrop-blur-[32px] duration-200 px-[24px]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    {children}
  </div>
}

/** Continue progress screen
 * @requires KekwPlayerContext
 */
export const ProgressContinue: NextPage<IKekwPlayerScreenProps> = ({ }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { currentScreen, title, dubbers, watchProgress, passProgress, loadProgress } = ctx;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  useEffect(() => {
    setIsVisible(ctx.currentScreen === 'progress_continue')
  }, [ctx])



  return <div className={cn(`max-w-[800px] w-full bg-dark px-[24px] py-[40px] rounded-[4px] flex flex-col gap-[24px] items-center`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <div className="flex flex-col gap-[8px]">
      <p className="text-white text-[24px] font-bold text-center">Продовжити перегляд</p>
      {dubbers.find(el => el.id === watchProgress?.dub) ? <div className="flex items-center justify-center gap-[16px]">
        <StyledImage className="rounded-[32px] overflow-hidden" width="32px" height="32px" src={dubbers.find(el => el.id === watchProgress?.dub)!.avatar} />
        <p className="text-white text-[24px] text-center">{dubbers.find(el => el.id === watchProgress?.dub)!.name}</p>
      </div> : <p className="text-white text-[24px] text-center">Команда невідома</p>}
    </div>

    <div className="kekwplayer-screen-continue_action px-[24px] py-[16px] w-full bg-darkGrey rounded-[2px] duration-200 hover:bg-purple focus-visible:bg-purple flex items-center justify-between gap-[24px] cursor-pointer max-[700px]:flex-col" role="button" onClick={loadProgress}>
      <div className="flex items-center gap-[32px] max-[700px]:flex-col">
        <p className="text-white text-[32px] font-bold">#{watchProgress?.ep}</p>

        <div className="flex flex-col gap-[4px] max-[700px]:items-center">
          <p className="text-white text-[24px] text-ellipsis line-clamp-[1] max-[700px]:text-center max-[700px]:line-clamp-3" title={title.episodesMeta.find(el => el.order === watchProgress?.ep)?.names.ukr || `${watchProgress?.ep} епізод`}>{title.episodesMeta.find(el => el.order === watchProgress?.ep)?.names.ukr || `${watchProgress?.ep} епізод`}</p>
          <p className="text-lightGrey text-[16px] text-ellipsis line-clamp-[1] duration-200 max-[700px]:text-center max-[700px]:line-clamp-3" title={title.episodesMeta.find(el => el.order === watchProgress?.ep)?.names.eng || `${watchProgress?.ep} episode`}>{title.episodesMeta.find(el => el.order === watchProgress?.ep)?.names.eng || `${watchProgress?.ep} episode`}</p>
        </div>
      </div>

      <p className="text-white text-[24px] flex-shrink-0">{secondsToReadable(watchProgress?.moment || 0).pretty}</p>

    </div>

    <button onClick={passProgress}>
      <p className="text-white font-extralight">Почати з початку?</p>
    </button>
  </div>
}

/** Episode last screen
 * @requires KekwPlayerContext
 */
export const EpisodeLast: NextPage<IKekwPlayerScreenProps> = ({ }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  useEffect(() => {
    setIsVisible(ctx.currentScreen === 'episode_last')
  }, [ctx])



  return <div className={cn(`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center gap-[24px] w-[800px] z-[7]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <p className="text-white text-[32px] max-[680px]:text-[24px] font-bold">Епізод завершено</p>
    <p className="text-white text-[24px] text-center max-[680px]:text-[16px] font-extralight">Це останній епізод в цьому озвученні</p>
  </div>
}

/** Episode end screen
 * @requires KekwPlayerContext
 */
export const EpisodeEnd: NextPage<IKekwPlayerScreenProps> = ({ }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { currentScreen, title, episode, videoRef, changeEpisode } = ctx;

  const SKIP_WITHIN_DEFAULT = 5;

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [skipWithin, setSkipWithin] = useState(SKIP_WITHIN_DEFAULT)
  const [episodeMeta, setEpisodeMeta] = useState<ITitleEpisodeMeta | undefined>(undefined)
  const [nextEpisodeOrder, setNextEpisodeOrder] = useState(episode.order)

  const skipWithinInterval = useRef<NodeJS.Timeout | undefined>(undefined)



  useEffect(() => {
    setIsVisible(currentScreen === 'episode_end')
  }, [ctx])

  //* Handle next episode order & meta, auto skip
  useEffect(() => {
    const nextEpisodeOrder = episode.order + 1;
    const episodeMeta = title.episodesMeta.find(el => el.order === nextEpisodeOrder);

    setNextEpisodeOrder(nextEpisodeOrder);
    setEpisodeMeta(episodeMeta);

    if (currentScreen !== 'episode_end') {
      clearInterval(skipWithinInterval.current);

      return;
    };

    //* Handle auto skip
    setSkipWithin(SKIP_WITHIN_DEFAULT);
    clearInterval(skipWithinInterval.current);

    let remain = SKIP_WITHIN_DEFAULT;

    skipWithinInterval.current = setInterval(() => {
      if (remain > 1) {
        remain -= 1;
        setSkipWithin(remain);
      } else {
        clearInterval(skipWithinInterval.current);
        skipEpisode(nextEpisodeOrder);
      }
    }, 1000);
  }, [currentScreen])



  function skipEpisode(order: number) {
    const video = videoRef.current;
    if (!video) return;

    const nextEpisode = title.episodes.find(el => el.dubberID === episode.dubberID && el.order === order)
    if (!nextEpisode) return console.error(`Next episode is not found in EpisodeEnd screen`);

    changeEpisode(nextEpisode);
  }



  return <div className={cn(`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] z-[20] gap-[24px]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <p className="text-white text-[32px] font-bold max-[680px]:text-[24px]">Епізод завершено</p>

    <div className="bg-darkGrey px-[24px] py-[16px] flex justify-between items-center max-[680px]:flex-col duration-200 hover:bg-purple focus-visible:bg-purple w-full rounded-[2px]" role="button" onClick={() => skipEpisode(nextEpisodeOrder)}>
      <div className="flex items-center max-[680px]:flex-col gap-[32px] w-full">
        <p className="text-white text-[32px] font-bold">#{nextEpisodeOrder}</p>
        <div className="flex flex-col gap-[4px]">
          <p className="text-white text-[24px] text-ellipsis line-clamp-[1] max-[700px]:line-clamp-3" title={episodeMeta?.names.ukr || 'Наступний епізод'}>{episodeMeta?.names.ukr || 'Наступний епізод'}</p>
          <p className="text-lightGrey text-[16px] text-ellipsis line-clamp-[1] max-[700px]:line-clamp-3" title={episodeMeta?.names.eng || 'Next episode'}>{episodeMeta?.names.eng || 'Next episode'}</p>
        </div>
      </div>
    </div>

    <p className="text-white text-[24px] font-extralight text-center">Автоматично через: {skipWithin} {wordDeclination(skipWithin, ['секунду', 'секунди', 'секунд'])}</p>
  </div>
}

/** Title end screen
 * @requires KekwPlayerContext
 */
export const TitleEnd: NextPage<IKekwPlayerScreenProps> = ({ }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  useEffect(() => {
    setIsVisible(ctx.currentScreen === 'title_end')
  }, [ctx])



  return <div className={cn(`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] gap-[24px] z-[7]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <p className="text-white text-[32px] font-bold max-[680px]:text-[24px]">Тайтл завершено!</p>

    <p className="text-white text-[16px] font-extralight">Дякуємо, що обрали nekomi!</p>
  </div>
}