'use client';

import { FC, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import { HandleClientError } from '~/components/Errors';
import StyledImage from '~/components/Styled/StyledImage';
import { NotifyError, NotifyWarn } from '~/components/UI/NotifyToast';
import { useAppSelector } from '~/hooks/redux';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { Routes } from '~/routes';
import { AnimeFullType } from '~/services/api/anime/GetAnime.api';
import cn from '~/utils/classnames';



interface IProps {
  anime: AnimeFullType
}



export const WatchActions: FC<IProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);

  const [isUserAuth] = useState(Boolean(currentUser.id));
  const [isTogetherRoomCreating, setIsTogetherRoomCreating] = useState(false);

  const [canEditAnime] = useState(
    currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE)
    // || currentUser.permissions.includes('admin')
    // || currentUser.permissions.includes('editor')
    // || currentUser.permissions.includes('titleEdit')
    // || currentUser.permissions.includes('seriesAdd')
  );

  const haveEpisodes = true;
  const isDMCARestricted = props.anime.is_DMCA_restricted && !currentUser.id;



  async function watchTogether() {
    let timeout: NodeJS.Timeout;

    try {
      if (!isUserAuth) return NotifyWarn({ title: 'Потрібна авторизація!', message: 'Нажаль, ти не можеш дивитися аніме з кимось, не маючи акаунту :(' });
      if (isTogetherRoomCreating) return NotifyWarn({ title: `Ми пам'ятаємо!`, message: 'Ми вже створюємо кімнату, вона буде з секунди на секунду!' });

      setIsTogetherRoomCreating(true);

      timeout = setTimeout(() => {
        NotifyError({ title: 'Ой!', message: 'Ми не змогли створити кімнату впродовж 6 секунд, спробуй ще раз!' });
        setIsTogetherRoomCreating(false);
      }, 6000);

      // TODO: create together room
      console.log(`create together room for ${props.anime.id}`);

      //* async shit...
      setTimeout(() => {
        clearTimeout(timeout);
      }, 2000);

      // TODO: navigate
    } catch (e) {
      setIsTogetherRoomCreating(false);
      return HandleClientError(e);
    }
  }



  return (haveEpisodes || canEditAnime) && <div className={cn(`flex gap-[8px] max-sm:flex-col max-sm:gap-[4px]`)}>
    {haveEpisodes && !isDMCARestricted && <>
      <Link href={'#player'} scroll className="ui-button watch-meta-action">
        <MaterialSymbol icon="live_tv" size={24} className="text-white max-sm:text-[20px]" />
        <p className="text-white font-manrope uppercase max-sm:text-[14px]">розпочати перегляд</p>
      </Link>

      {/* <button className={cn(`ui-button watch-meta-action`, isTogetherRoomCreating && 'cursor-not-allowed')} disabled={isTogetherRoomCreating} onClick={watchTogether}>
      {!isTogetherRoomCreating && <>
        <MaterialSymbol icon="group" size={24} className="text-white max-sm:text-[20px]" />
        <p className="text-white font-manrope uppercase max-sm:text-[14px]">СПІЛЬНИЙ ПЕРЕГЛЯД</p>
      </>}

      {isTogetherRoomCreating && <>
        <div className="max-sm:hidden"><Loader.Ring color="#555" size={24} /></div>
        <div className="sm:hidden"><Loader.Ring color="#555" size={20} /></div>

        <p className="text-grey-new font-manrope uppercase max-sm:text-[14px]">Створюємо кімнату...</p>
      </>}
    </button> */}
    </>}

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