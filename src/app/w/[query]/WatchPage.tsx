'use client'

import { useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import * as Loader from '@uiball/loaders';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { AnimeItemEditMenu } from '~/components/AnimeItem';
import { cn } from '~/components/Components';
import { HandleClientError } from '~/components/Errors';
import { getUTC, wordDeclination } from '~/components/handlers';
import StyledImage from '~/components/StyledImage';
import { NotifyError, NotifyWarn } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { ANIME_MEDIA_TYPE, AnimeGenre, AnimeMedia, AnimeRate, AnimeSeason, AnimeStatus, AnimeStudio, HydratedAnime } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { Routes } from '~/routes';



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

  className?: string
}

interface WatchNextEpisodeProps {
  timestamp: number
}

interface WatchSectionLabelProps {
  label: string
  icon: SymbolCodepoints
}

interface WatchDubberProps {
  dubber: DubberCompact

  posterAdapt?: boolean
}



export const WatchEditLibs: NextPage<WatchProps> = ({ hydratedAnime }) => {
  const currentUser = useAppSelector(state => state.user);
  const id = useId().replaceAll(':', '')

  const [icon, setIcon] = useState<SymbolCodepoints>('create_new_folder')
  const [title, setTitle] = useState('В ТЕКИ')
  const [isFavorite, setIsFavorite] = useState(false)
  const [isChanged, setIsChanged] = useState(false)



  useMemo(() => {
    if (!currentUser.id) return
    let isChanged = false;

    setTitle('В ТЕКИ')
    setIcon('create_new_folder')
    setIsChanged(false);
    setIsFavorite(false);

    currentUser.libs.filter(el => el.titles.includes(hydratedAnime.anime.uuid)).forEach(lib => {
      if (lib.type === 'favorite') {
        setIsFavorite(true)
        setTitle('УЛЮБЛЕНЕ')
        setIcon('favorite')
      }

      if (isChanged) return;

      if (lib.type === 'delayed') {
        setTitle('ВІДКЛАДЕНЕ')
        setIcon('auto_delete')
      }

      if (lib.type === 'plans') {
        setTitle('ЗАПЛАНОВАНЕ')
        setIcon('stack')
      }

      if (lib.type === 'watched') {
        setTitle('ПЕРЕГЛЯНУТЕ')
        setIcon('bookmark_added')
      }

      if (lib.type === 'watching') {
        setTitle('ПЕРЕГЛЯДАЄМЕ')
        setIcon('visibility')
      }

      isChanged = true;
    })

    setIsChanged(isChanged);
  }, [currentUser])



  return <Menu className="w-full" id={id}>
    <MenuTrigger className={cn(`ui-button w-full px-[16px] py-[12px] rounded-[4px] flex items-center justify-center gap-[16px]`, isChanged && 'bg-green', isFavorite && 'bg-primary')} anchor>
      <MaterialSymbol icon={icon} size={24} className="text-white" />

      <p className={cn(`text-white font-manrope uppercase`, isChanged && 'font-bold')}>{title}</p>
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

    {canEditAnime && <Link href={`${config.URL.baseURL}${Routes.patcher_title.path}/${hydratedAnime.anime.uuid}`} className="ui-button watch-meta-action bg-transparent border-none">
      <MaterialSymbol icon="edit" size={24} className="text-grey-new" />
      <p className="text-grey-new font-manrope uppercase">РЕДАГУВАТИ</p>
    </Link>}
  </div>
}

export const WatchDetail: NextPage<WatchDetailProps> = ({ name, genres, media, rate, season, status, studios, value, year, className }) => {
  if (season && year) value = `${season.name} ${year}`;
  if (media) value = media.slug === ANIME_MEDIA_TYPE.UNKNOWN ? null : media.name
  if (status) value = status.name

  return <div className={cn(`watch-meta-detail`, className)}>
    {value && <p className="text-white font-manrope uppercase">{value}</p>}
    {value === null && <p className="text-grey-new font-manrope uppercase">—</p>}

    {rate && <Tooltip content={rate.description}><p className="text-white font-manrope uppercase">{rate.name}</p></Tooltip>}

    {genres && <>
      {genres.length > 0 ? <div className="watch-meta-detail_container">
        {genres.map((genre, i) => {
          let immutableI = i;

          return <Tooltip content={genre.description} key={`animemeta-genre--${i}`}>
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

          return <span className="text-white" key={`animemeta-studio--${i}`}>
            {studio.name}
            {++immutableI < studios.length ? ',' : ''}
          </span>
        })}
      </div> : <p className="text-grey-new text-center">—</p>}
    </>}

    <p className="text-grey-new text-[14px] font-manrope uppercase">{name}</p>
  </div>
}

export const WatchNextEpisode: NextPage<WatchNextEpisodeProps> = ({ timestamp }) => {
  const [date, setDate] = useState('')
  const [within, setWithin] = useState('')



  // TODO: handle local timezone
  useMemo(() => {
    const utc = getUTC(timestamp);
    const now = getUTC();


    if (utc.date === now.date) {
      // now
      setDate('сьогодні')
      setTodayWithin();

      setInterval(() => setTodayWithin(), 1000);
    } else if (utc.date - 1 === now.date) {
      // tomorrow
      setDate('завтра')
      setWithin(`(в ${utc.hrs}:${utc.mins})`)
    } else {
      // in future
      const offset = utc.date - now.date

      setDate(`${String(utc.date).padStart(2, '0')}.${String(utc.month).padStart(2, '0')}`)
      setWithin(`(через ${offset} ${wordDeclination(offset, ['день', 'дні', 'днів'])})`)
    }
  }, [])



  function setTodayWithin() {
    if (getUTC().timestamp > getUTC(timestamp).timestamp) return setWithin(`(вже вийшла)`)

    const diffMs = Math.abs(getUTC(timestamp).timestamp - getUTC().timestamp);

    const hrs = Math.floor(diffMs / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    setWithin(`(через ${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')})`)
  }



  return <Tooltip className="w-full" content="Вказано час та дату виходу епізоду в Японії. Переклад та озвучення вийдуть пізніше.">
    <div className="watch-meta-detail_outlined">
      <MaterialSymbol icon="hourglass_bottom" size={24} className="text-grey-new" />

      <p className="text-grey-new font-manrope flex items-center gap-[4px]">
        Наступна серія вийде:

        <span className="text-white font-manrope inline">{date}</span>

        {within}
      </p>
    </div>
  </Tooltip>
}

export const WatchSectionLabel: NextPage<WatchSectionLabelProps> = ({ label, icon }) => {
  return <div className="flex items-center gap-[16px]">
    <MaterialSymbol icon={icon} size={24} className="text-white" />

    <h3 className="text-white text-[24px] font-manrope font-bold">{label}</h3>
  </div>
}

export const WatchDubber: NextPage<WatchDubberProps> = ({ dubber, posterAdapt }) => {
  return <Link className="ui-button p-[8px] pr-[16px] rounded-[4px] flex grow basis-[205px] items-center gap-[16px] min-w-[180px] max-w-[280px]" href={`${config.URL.baseURL}${Routes.dubber_profile.path}/${dubber.slug}`}>
    <StyledImage src={dubber.avatarURL} width="48px" height="48px" className="rounded-[2px] overflow-hidden" />

    <div className="flex flex-col gap-[4px]">
      <p className="text-white font-manrope font-bold">{dubber.nameUkr}</p>

      {posterAdapt && <p className="text-grey-new font-manrope">Адаптація постеру</p>}
    </div>
  </Link>
}