'use client';

import { FC, useEffect, useMemo, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import { useAppSelector } from '~/hooks/redux';
import { IHomeFeedHero } from '~/interfaces/types';
import { Routes } from '~/routes';
import cn from '~/utils/classnames';
import { GetNekoplayerData } from '~/utils/nekoplayer-utils';
import { prettySeconds } from '~/utils/utils';



interface IProps {
  hero: IHomeFeedHero

  className?: string
}



const HomeHeroWatch: FC<IProps> = ({ hero, className }) => {
  const currentUser = useAppSelector(state => state.user);

  const [label, setLabel] = useState('');
  const [continueWatch, setContinueWatch] = useState(false);



  // Get user watch progress from state
  useMemo(() => {
    const watchProgress = currentUser.view_progress.find(el => el.anime_id === hero.id);

    if (watchProgress && watchProgress.progress > 3) {
      setLabel(`продовжити (${watchProgress.episode} еп, ${prettySeconds(watchProgress.progress).pretty})`);
      setContinueWatch(true);
    } else {
      setLabel('розпочати перегляд');
    }
  }, [currentUser]);



  // Get user watch progress from local storage
  useEffect(() => {
    if (continueWatch) return;

    const localData = GetNekoplayerData();
    const localCurrent = localData.find(el => el.id === hero.id);

    if (localCurrent && localCurrent.moment > 3) {
      setLabel(`продовжити (${localCurrent.ep} еп, ${prettySeconds(localCurrent.moment).pretty})`);
      setContinueWatch(true);
    }
  }, []);



  return <Link href={Routes.watch.path({ query: hero.slug })} className={cn(`ui-button flex items-center justify-center gap-[24px] bg-dark-medium px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 max-sm:px-[16px] max-sm:py-[12px]`, className)} tabIndex={0}>
    {continueWatch && <MaterialSymbol icon="resume" size={40} className="text-white max-sm:!text-[24px]" />}
    {!continueWatch && <MaterialSymbol icon="live_tv" size={40} className="text-white max-sm:!text-[24px]" />}
    <p className="text-white text-[24px] uppercase max-sm:text-[16px] font-manrope break-all">{label}</p>
  </Link>;
};

export default HomeHeroWatch;