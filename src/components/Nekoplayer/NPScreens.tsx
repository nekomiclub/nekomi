'use client'

import { FC, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { NextPage } from 'next';

import { AnimeEpisodeMeta } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { ITitleEpisodeMeta } from '~/interfaces/ITitle';
import prettySeconds from '~/utils/pretty-seconds';
import { cn } from '../Components';
import { wordDeclination } from '../handlers';
import StyledImage from '../StyledImage';

import { NekoplayerContext, NekoplayerContextProps } from './NPTypes';



/** Player screens wrapper
 * @requires KekwPlayerContext
 */
const NPScreens: FC = ({ }) => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  // Handle container visibility
  useMemo(() => {
    setIsVisible(ctx.currentScreen !== 'none');
  }, [ctx])



  return <div className={cn(`w-full h-full absolute top-0 left-0 flex justify-center items-center z-[15] bg-dark/[.5] backdrop-blur-[32px] duration-200`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <ProgressContinue />
    <ContinueWatch />
    <LastDubbedEpisode />
    <AnimeEnd />
  </div>
}



const ProgressContinue: FC = ({ }) => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
  const { currentScreen, anime, dubbers, watchProgress, passProgress, loadProgress } = ctx;

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [progressDubber, setProgressDubber] = useState<DubberCompact | null>(null)
  const [episodeMeta, setEpisodeMeta] = useState<AnimeEpisodeMeta | null>(null)



  //* Sync currentScreen
  useMemo(() => {
    setIsVisible(ctx.currentScreen === 'progress_continue')
  }, [currentScreen])

  //* Sync watch progress
  useMemo(() => {
    if (!watchProgress) return;

    const dubber = dubbers.find(el => el.id === watchProgress.dub);
    const episodeMeta = anime.episodesMeta.find(el => el.order === watchProgress.ep);

    if (dubber) setProgressDubber(dubber);
    if (episodeMeta) {
      // Replace "~~~" name with "—"
      episodeMeta.names.ukr = episodeMeta.names.ukr === '~~~' ? '—' : episodeMeta.names.ukr;

      setEpisodeMeta(episodeMeta)
    }
  }, [watchProgress])



  return watchProgress && progressDubber && <div className={cn(`w-full bg-dark-primary p-[32px] flex flex-col items-center gap-[32px] duration-200 max-sm:p-[16px]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <div className="flex flex-col gap-[8px] items-center">
      <h4 className="text-white text-[32px] text-center font-manrope font-bold max-sm:text-[24px]">Продовжуємо перегляд?</h4>

      <div className="flex gap-[16px] items-center">
        <StyledImage src={progressDubber.avatarURL} width="32px" height="32px" className="rounded-[4px] overflow-hidden" />

        <p className="text-white text-[24px] font-manrope max-sm:text-[16px]">{progressDubber.nameUkr}</p>
      </div>
    </div>

    <button className="ui-button flex justify-between items-center gap-[8px] px-[16px] py-[12px] max-w-[700px] w-full max-sm:flex-col-reverse max-sm:items-start max-sm:gap-[16px]" onClick={loadProgress}>
      <div className="flex gap-[24px] items-center">
        <p className="text-white text-[32px] font-space-grotesk font-bold max-sm:hidden">#{String(watchProgress.ep).padStart(2, '0')}</p>

        <div className="flex flex-col items-start gap-[4px]">
          <p className="text-white font-manrope line-clamp-1 text-start max-sm:line-clamp-3" title={episodeMeta?.names.ukr}>{episodeMeta?.names.ukr ?? ''}</p>
          <p className="text-grey-new font-space-grotesk line-clamp-1 text-start max-sm:line-clamp-3" title={episodeMeta?.names.eng}>{episodeMeta?.names.eng ?? ''}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[8px] max-sm:w-full">
        <p className="text-white text-[24px] font-space-grotesk font-bold sm:hidden">#{String(watchProgress.ep).padStart(2, '0')}</p>
        <p className="text-white text-[24px] font-space-grotesk font-bold">{prettySeconds(watchProgress.moment).pretty}</p>
      </div>
    </button>

    <p className="text-grey-new font-manrope text-center max-sm:text-[16px]">Чи може, <button className="font-bold" onClick={passProgress}>почнемо спочатку</button>?</p>
  </div>
}

const LastDubbedEpisode: FC = ({ }) => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  useMemo(() => {
    setIsVisible(ctx.currentScreen === 'last_dubbed_episode')
  }, [ctx])



  return <div className={cn(`w-full bg-dark-primary p-[32px] flex flex-col items-center gap-[16px] duration-200`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <h4 className="text-white text-[24px] font-manrope font-bold">Епізод завершено</h4>
    <p className="text-grey-new text-[16px] font-manrope">Це останній епізод в цьому озвученні</p>
  </div>
}

const ContinueWatch: FC = ({ }) => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;
  const { currentScreen, anime, episode, videoRef, changeEpisode } = ctx;

  const SKIP_WITHIN_DEFAULT = 5;

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [skipWithin, setSkipWithin] = useState(SKIP_WITHIN_DEFAULT)
  const [episodeMeta, setEpisodeMeta] = useState<ITitleEpisodeMeta | undefined>(undefined)
  const [nextEpisodeOrder, setNextEpisodeOrder] = useState(episode.order)

  const skipWithinInterval = useRef<NodeJS.Timeout | undefined>(undefined)



  useEffect(() => {
    setIsVisible(currentScreen === 'continue_watch')
  }, [ctx])

  //* Handle next episode order & meta, auto skip
  useEffect(() => {
    const nextEpisodeOrder = episode.order + 1;
    const episodeMeta = anime.episodesMeta.find(el => el.order === nextEpisodeOrder);

    setNextEpisodeOrder(nextEpisodeOrder);
    setEpisodeMeta(episodeMeta);

    if (currentScreen !== 'continue_watch') {
      clearInterval(skipWithinInterval.current);

      return;
    };

    // Handle auto skip
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

    const nextEpisode = anime.episodes.find(el => el.dubberID === episode.dubberID && el.order === order)
    if (!nextEpisode) return console.error(`Next episode is not found in EpisodeEnd screen`);

    changeEpisode(nextEpisode);
  }



  return <div className={cn(`w-full bg-dark-primary p-[32px] flex flex-col items-center gap-[32px] duration-200 max-sm:p-[16px]`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <h4 className="text-white text-[32px] text-center font-manrope font-bold max-sm:text-[24px]">Можливо, ще один епізод?</h4>

    <div className="flex flex-col gap-[8px] items-center w-full">
      <button className="ui-button flex justify-between items-center gap-[8px] px-[16px] py-[12px] grow max-w-[700px] w-full max-sm:flex-col-reverse max-sm:items-start max-sm:gap-[16px]" onClick={() => skipEpisode(nextEpisodeOrder)}>
        <div className="flex gap-[24px] items-center">
          <p className="text-white text-[32px] font-space-grotesk font-bold max-sm:text-[24px]">#{String(nextEpisodeOrder).padStart(2, '0')}</p>

          <div className="flex flex-col items-start gap-[4px]">
            <p className="text-white font-manrope line-clamp-1 text-start max-sm:line-clamp-3" title={episodeMeta?.names.ukr}>{episodeMeta?.names.ukr ?? ''}</p>
            <p className="text-grey-new font-space-grotesk line-clamp-1 text-start max-sm:line-clamp-3" title={episodeMeta?.names.eng}>{episodeMeta?.names.eng ?? ''}</p>
          </div>
        </div>
      </button>

      <p className="text-grey-new font-manrope text-center">Через: {skipWithin} {wordDeclination(skipWithin, ['секунду', 'секунди', 'секунд'])}</p>
    </div>
  </div>
}

const AnimeEnd: NextPage = ({ }) => {
  const ctx = useContext(NekoplayerContext) as NekoplayerContextProps;

  const [isVisible, setIsVisible] = useState<boolean>(false)



  useMemo(() => {
    setIsVisible(ctx.currentScreen === 'anime_end')
  }, [ctx])



  return <div className={cn(`w-full bg-dark-primary p-[32px] flex flex-col items-center gap-[16px] duration-200`, !isVisible && 'opacity-0 invisible absolute touch-none pointer-events-none')}>
    <h4 className="text-white text-[24px] font-manrope font-bold">Ти переглянув останній епізод</h4>
    <p className="text-grey-new text-[16px] font-manrope">Дякуємо за вибір nekomi!</p>
  </div>
}



export default NPScreens