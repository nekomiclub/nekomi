'use client'

import { IKekwPlayerContextProps, KekwPlayerContext, secondsToReadable } from './KekwPlayer';
import { ITitleEpisode, ITitleEpisodeMeta } from '~/interfaces/ITitle';
import { LoadingImage, cn } from '../Components';
import { NextPage } from 'next';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { timestampToDate, wordDeclination } from '../handlers';

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
    console.log(ctx)

    setIsVisible(ctx.currentScreen === 'progress_continue')
  }, [ctx])



  return <div className={cn(`max-w-[800px] w-full bg-dark px-[24px] py-[40px] rounded-[4px] flex flex-col gap-[24px] items-center`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <div className="flex flex-col gap-[8px]">
      <p className="text-white text-[24px] font-bold text-center">Продовжити перегляд</p>
      {dubbers.find(el => el.id === watchProgress?.dub) ? <div className="flex items-center justify-center gap-[16px]">
        <LoadingImage parentClassName="rounded-[32px] overflow-hidden" width="32px" height="32px" src={dubbers.find(el => el.id === watchProgress?.dub)!.thumbURL} />
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
 * TODO: rework. after skipping episode user can not pause video
 * @requires KekwPlayerContext
 */
export const EpisodeEnd: NextPage<IKekwPlayerScreenProps> = ({ }) => {
  const ctx = useContext(KekwPlayerContext) as IKekwPlayerContextProps;
  const { currentScreen, title, episode, setEpisode, videoRef } = ctx;

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [remain, setRemain] = useState(5)
  const [epMeta, setEpMeta] = useState<ITitleEpisodeMeta | null>(null)
  const [nextEp, setNextEp] = useState(episode.order)
  const [date, setDate] = useState('')
  const [int, setInt] = useState<NodeJS.Timeout>()



  useEffect(() => {
    setIsVisible(currentScreen === 'episode_end')
  }, [ctx])

  useEffect(() => {
    let nextEp = episode.order;
    nextEp += 1

    const epMeta = title.episodesMeta.find(el => el.order === nextEp);

    setNextEp(nextEp)

    if (epMeta) {
      const parsed = timestampToDate(epMeta.dateOut);

      setEpMeta(epMeta)
      setDate(`${parsed.day} ${parsed.localizedMonth.slice(0, 3)} ${parsed.year}`)
    }
  }, [episode])

  useEffect(() => {
    setRemain(5)

    clearInterval(int)

    let rem = remain;
    setInt(setInterval(() => {
      if (currentScreen) {
        if (rem > 1) {
          setRemain(prev => --prev)
          rem -= 1;
        } else {
          clearInterval(int);
          skipEp();
        }
      } else {
        clearInterval(int)
      }
    }, 1000))
  }, [currentScreen])



  function skipEp() {
    const video = videoRef.current;

    if (!video) return;

    const nextEpisode = JSON.parse(JSON.stringify(episode)) as ITitleEpisode;
    nextEpisode.order = nextEp;

    setEpisode(nextEpisode);

    setTimeout(() => {
      video.play().catch(e => null)
    }, 1000);
  }



  return <div className={cn(`duration-200 bg-dark px-[24px] py-[40px] rounded-[2px] flex flex-col items-center w-[800px] z-[20] gap-[24px]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <p className="text-white text-[32px] font-bold max-[680px]:text-[24px]">Епізод завершено</p>

    <div className="bg-darkGrey px-[24px] py-[16px] flex justify-between items-center max-[680px]:flex-col duration-200 hover:bg-purple focus-visible:bg-purple w-full rounded-[2px]" role="button" onClick={() => skipEp()}>
      <div className="flex items-center max-[680px]:flex-col gap-[32px] w-full">
        <p className="text-white text-[32px] font-bold">#{nextEp}</p>
        <div className="flex flex-col gap-[4px]">
          <p className="text-white text-[24px] text-ellipsis line-clamp-[1] max-[700px]:line-clamp-3" title={epMeta?.names.ukr || 'Наступний епізод'}>{epMeta?.names.ukr || 'Наступний епізод'}</p>
          <p className="text-lightGrey text-[16px] text-ellipsis line-clamp-[1] max-[700px]:line-clamp-3" title={epMeta?.names.eng || '—'}>{epMeta?.names.eng || '—'}</p>
        </div>
      </div>
    </div>

    <p className="text-white text-[24px] font-extralight text-center">Автоматично через: {remain} {wordDeclination(remain, ['секунду', 'секунди', 'секунд'])}</p>
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