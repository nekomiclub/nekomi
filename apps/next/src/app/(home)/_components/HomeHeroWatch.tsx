import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import Routes from '~/routes';
import { TFeedHydrated } from '~/shared/lib/api/api-types';
import cn from '~/shared/utilities/classnames';



interface IProps {
  hero: TFeedHydrated

  className?: string
}



const HomeHeroWatch: FC<IProps> = (props) => {
  return <Link href={Routes.anime.path({ query: props.hero.slug })} className={cn(`ui-button flex items-center justify-center gap-[24px] bg-dark-medium px-[24px] py-[16px] rounded-[4px] z-[3] duration-200 max-sm:px-[16px] max-sm:py-[12px]`, props.className)} tabIndex={0}>
    <MaterialSymbol icon="live_tv" size={40} className="text-white max-sm:!text-[24px]" />
    <p className="text-white text-[24px] uppercase max-sm:text-[16px]  break-all">РОЗПОЧАТИ ПЕРЕГЛЯД</p>
  </Link>;
};

export default HomeHeroWatch;