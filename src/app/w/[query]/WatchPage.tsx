'use client'

import { useId, useState } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import * as Loader from '@uiball/loaders';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { AnimeItemEditMenu } from '~/components/AnimeItem';
import { cn } from '~/components/Components';
import { HandleClientError } from '~/components/Errors';
import { NotifyError, NotifyWarn } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import { useAppSelector } from '~/hooks/redux';
import { ANIME_MEDIA_TYPE, AnimeGenre, AnimeMedia, AnimeRate, AnimeSeason, AnimeStatus, AnimeStudio, HydratedAnime } from '~/interfaces/AnimeIntf';



interface WatchProps {
  hydratedAnime: HydratedAnime
}

interface WatchDetailProps {
  name: string

  value?: string | null
  status?: AnimeStatus
  rate?: AnimeRate
  season?: AnimeSeason
  year?: number
  media?: AnimeMedia
  genres?: AnimeGenre[]
  studios?: AnimeStudio[]
}



export const WatchEditLibs: NextPage<WatchProps> = ({ hydratedAnime }) => {
  const id = useId().replaceAll(':', '')

  return <Menu className="w-full" id={id}>
    <MenuTrigger className="ui-button w-full px-[16px] py-[12px] rounded-[4px] flex items-center justify-center gap-[16px]" anchor>
      <MaterialSymbol icon="create_new_folder" size={24} className="text-white" />
      <p className="text-white font-manrope uppercase">В ТЕКИ</p>
    </MenuTrigger>

    <AnimeItemEditMenu hydratedAnime={hydratedAnime} />
  </Menu>
}

export const WatchActions: NextPage<WatchProps> = ({ hydratedAnime }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isUserAuth] = useState(Boolean(currentUser.id));
  const [isTogetherRoomCreating, setIsTogetherRoomCreating] = useState(false)

  const [canEditAnime] = useState(
    currentUser.capabilities.includes('root')
    || currentUser.capabilities.includes('admin')
    || currentUser.capabilities.includes('editor')
    || currentUser.capabilities.includes('titleEdit')
    || currentUser.capabilities.includes('seriesAdd')
  )



  async function watchTogether() {
    let timeout: NodeJS.Timeout;

    try {
      if (!isUserAuth) return NotifyWarn({ title: 'Потрібна авторизація!', message: 'Нажаль, ти не можеш дивитися аніме з кимось, не маючи акаунту :(' })
      if (isTogetherRoomCreating) return NotifyWarn({ title: `Ми пам'ятаємо!`, message: 'Ми вже створюємо кімнату, вона буде з секунди на секунду!' })

      setIsTogetherRoomCreating(true);

      timeout = setTimeout(() => {
        NotifyError({ title: 'Ой!', message: 'Ми не змогли створити кімнату впродовж 6 секунд, спробуй ще раз!' })
        setIsTogetherRoomCreating(false);
      }, 6000);

      // TODO: create together room
      console.log(`create together room for ${hydratedAnime.anime.uuid}`)

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



  return <div className="flex gap-[8px]">
    <Link href={'#nekoplayer'} scroll className="ui-button watch-meta-action">
      <MaterialSymbol icon="live_tv" size={24} className="text-white" />
      <p className="text-white font-manrope uppercase">розпочати перегляд</p>
    </Link>

    <button className={cn(`ui-button watch-meta-action`, isTogetherRoomCreating && 'cursor-not-allowed')} disabled={isTogetherRoomCreating} onClick={watchTogether}>
      {!isTogetherRoomCreating && <>
        <MaterialSymbol icon="group" size={24} className="text-white" />
        <p className="text-white font-manrope uppercase">СПІЛЬНИЙ ПЕРЕГЛЯД</p>
      </>}

      {isTogetherRoomCreating && <>
        <Loader.Ring color="#555" size={24} />
        <p className="text-grey-new font-manrope uppercase">Створюємо кімнату...</p>
      </>}
    </button>

    {canEditAnime && <Link href={'#'} className="ui-button watch-meta-action bg-transparent border-none">
      <MaterialSymbol icon="edit" size={24} className="text-grey-new" />
      <p className="text-grey-new font-manrope uppercase">РЕДАГУВАТИ</p>
    </Link>}
  </div>
}

export const WatchDetail: NextPage<WatchDetailProps> = ({ name, genres, media, rate, season, status, studios, value, year }) => {
  if (season && year) value = `${season.name} ${year}`;
  if (media) value = media.slug === ANIME_MEDIA_TYPE.UNKNOWN ? null : media.name
  if (status) value = status.name

  return <div className="watch-meta-detail">
    {value && <p className="text-white font-manrope uppercase">{value}</p>}
    {value === null && <p className="text-grey-new font-manrope uppercase">—</p>}

    {rate && <Tooltip content={rate.description}><p className="text-white font-manrope uppercase">{rate.name}</p></Tooltip>}

    {genres && <>
      {genres.length > 0 ? <div className="watch-meta-detail_container">
        {genres.map((genre, i) => {
          let immutableI = i;

          return <Tooltip content={genre.description} key={`animemeta-genre--${genre.slug}`}>
            <span className="text-white font-bold uppercase">
              {genre.name}
              {++immutableI < genres.length ? ',' : ''}
            </span>
          </Tooltip>
        })}
      </div> : <p className="text-grey-new text-center">—</p>}
    </>}

    {studios && <>
      {studios.length > 0 ? <div className="watch-meta-detail_container">
        {studios.map((studio, i) => {
          let immutableI = i;

          return <span className="text-white" key={`animemeta-studio--${studio.id}`}>
            {studio.name}
            {++immutableI < studios.length ? ',' : ''}
          </span>
        })}
      </div> : <p className="text-grey-new text-center">—</p>}
    </>}

    <p className="text-grey-new text-[14px] font-manrope uppercase">{name}</p>
  </div>
}