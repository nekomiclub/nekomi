'use client';

import { FC, useMemo, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import StyledImage from '~/components/Styled/StyledImage';
import { useAppSelector } from '~/hooks/redux';
import { IAnimePlayer } from '~/interfaces/IAnime';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { Routes } from '~/routes';
import { AnimeFullType } from '~/services/api/anime/GetAnime.api';
import cn from '~/utils/classnames';
import { isEmpty } from '~/utils/utils';



interface IProps {
  anime: AnimeFullType
  player: IAnimePlayer
}



export const WatchActions: FC<IProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);

  const [isUserAuth] = useState(Boolean(currentUser.id));
  const [isTogetherRoomCreating, setIsTogetherRoomCreating] = useState(false);
  const [hasEpisodes, setHasEpisodes] = useState(false);

  const [canEditAnime] = useState(
    currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE)
    // || currentUser.permissions.includes('admin')
    // || currentUser.permissions.includes('editor')
    // || currentUser.permissions.includes('titleEdit')
    // || currentUser.permissions.includes('seriesAdd')
  );

  const isDMCARestricted = props.anime.is_DMCA_restricted && !currentUser.id;



  useMemo(() => {
    setHasEpisodes([...props.player.dubbed, ...props.player.subbed].some(el => !isEmpty(el.vods)));
  }, []);



  return (hasEpisodes || canEditAnime) && <div className={cn(`flex gap-[8px] max-sm:flex-col max-sm:gap-[4px]`)}>
    {/* Anime has episodes and does not infringing dmca */}
    {hasEpisodes && !isDMCARestricted && <Link href={'#player'} scroll className="ui-button watch-meta-action">
      <MaterialSymbol icon="live_tv" size={24} className="text-white max-sm:text-[20px]" />
      <p className="text-white font-manrope uppercase max-sm:text-[14px]">розпочати перегляд</p>
    </Link>}

    <Link href={`https://hikka.io/edit/new?slug=${props.anime.hikka_slug}&content_type=anime`} target="_blank" className="ui-button watch-meta-action">
      <StyledImage src="https://avatars.githubusercontent.com/u/48723041?s=200&v=4" width="24px" height="24px" rounded={4} useImg />
      <p className="text-white font-manrope uppercase max-sm:text-[14px]">Редагувати на hikka.io</p>
    </Link>

    {canEditAnime && <Link href={Routes.patcher.path({ uuid: props.anime.id })} className="ui-button watch-meta-action bg-transparent border-none" prefetch={false}>
      <MaterialSymbol icon="edit" size={24} className="text-grey-new max-sm:text-[20px]" />
      <p className="text-grey-new font-manrope uppercase max-sm:text-[14px]">РЕДАГУВАТИ</p>
    </Link>}
  </div>;
};