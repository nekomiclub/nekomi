'use client';

import { FC, useMemo } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import StyledImage from '~/shared/components/styled/StyledImage';
import { useAppSelector } from '~/shared/hooks/redux';
import { TAnime } from '~/shared/lib/api/api-types';
import cn from '~/utils/classnames';



interface IProps {
  anime: TAnime
  hasEpisodes: boolean
}



export const WatchActions: FC<IProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);

  const isDMCARestricted = useMemo(() => {
    return props.anime.is_DMCA_restricted && !currentUser.id;
  }, [props.anime.is_DMCA_restricted, currentUser]);



  return <div className={cn(`flex gap-[8px] max-sm:flex-col max-sm:gap-[4px]`)}>
    {/* Anime has episodes and does not infringing dmca */}
    {props.hasEpisodes && !isDMCARestricted && <Link href={'#player'} scroll className="ui-button watch-meta-action">
      <MaterialSymbol icon="live_tv" size={24} className="text-white max-sm:text-[20px]" />
      <p className="text-white  uppercase max-sm:text-[14px]">розпочати перегляд</p>
    </Link>}

    <Link href={`https://hikka.io/edit/new?slug=${props.anime.hikka_slug}&content_type=anime`} target="_blank" className="ui-button watch-meta-action">
      <StyledImage src="https://avatars.githubusercontent.com/u/48723041?s=200&v=4" width="24px" height="24px" borderRadius={4} unoptimized />
      <p className="text-white  uppercase max-sm:text-[14px]">Редагувати на hikka.io</p>
    </Link>
  </div>;
};