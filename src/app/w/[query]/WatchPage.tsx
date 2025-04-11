'use client'

import { useEffect, useId, useMemo, useState } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { AnimeItemEditMenu } from '~/components/AnimeItem';
import { cn } from '~/components/Components';
import { HandleClientError } from '~/components/Errors';
import { getUTC, timestampToDayMonth } from '~/components/handlers';
import Nekoplayer from '~/components/Nekoplayer/Nekoplayer';
import StyledImage from '~/components/StyledImage';
import { NotifyError, NotifyWarn } from '~/components/UI/NotifyToast';
import { UIReportButton } from '~/components/UI/Report';
import Tooltip from '~/components/UI/Tooltip';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { ANIME_MEDIA_TYPE, AnimeGenre, AnimeMedia, AnimeRate, AnimeSeason, AnimeStatus, AnimeStudio, HydratedAnime } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { Routes } from '~/routes';



interface WatchGenericProps {
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

interface WatchPlayerProps extends WatchGenericProps {
  dubbers: DubberCompact[]
}



export const WatchCheckMobile: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (window.innerWidth >= 640) {
      router.replace(pathname)
    } else {
      router.replace(`${pathname}?mobile=1`)
    }
  }, [])



  return <></>
}

export const WatchEditLibs: NextPage<WatchGenericProps> = ({ hydratedAnime }) => {
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
        setTitle('УЛЮБЛЕНІ')
        setIcon('favorite')
      }

      if (isChanged) return;

      if (lib.type === 'delayed') {
        setTitle('ВІДКЛАДЕНІ')
        setIcon('auto_delete')
      }

      if (lib.type === 'plans') {
        setTitle('ЗАПЛАНОВАНІ')
        setIcon('stack')
      }

      if (lib.type === 'watched') {
        setTitle('ПЕРЕГЛЯНУТІ')
        setIcon('bookmark_added')
      }

      if (lib.type === 'watching') {
        setTitle('ПЕРЕГЛЯДАЮ')
        setIcon('visibility')
      }

      isChanged = true;
    })

    setIsChanged(isChanged);
  }, [currentUser])



  return <Menu className="w-full" id={id} settings={{ animation: 'slide', align: 'start' }}>
    <MenuTrigger className={cn(`ui-button w-full px-[16px] py-[12px] rounded-[4px] flex items-center justify-center gap-[16px] max-sm:py-[8px]`, isChanged && 'bg-green', isFavorite && 'bg-primary max-sm:py-[8px]')} anchor>
      <MaterialSymbol icon={icon} size={24} className={cn(`text-white max-sm:text-[20px]`)} />

      <p className={cn(`text-white font-manrope uppercase max-sm:text-[14px]`, isChanged && 'font-bold')}>{title}</p>
    </MenuTrigger>

    <AnimeItemEditMenu hydratedAnime={hydratedAnime} />
  </Menu>
}

export const WatchActions: NextPage<WatchGenericProps> = ({ hydratedAnime }) => {
  const currentUser = useAppSelector(state => state.user);
  const haveEpisodes = hydratedAnime.anime.episodes.length > 0;

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



  return (haveEpisodes || canEditAnime) && <div className={cn(`flex gap-[8px] max-sm:flex-col max-sm:gap-[4px]`)}>
    {haveEpisodes && <>
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

    {canEditAnime && <Link href={`${config.URL.baseURL}${Routes.patcher_title.path}/${hydratedAnime.anime.uuid}`} className="ui-button watch-meta-action bg-transparent border-none">
      <MaterialSymbol icon="edit" size={24} className="text-grey-new max-sm:text-[20px]" />
      <p className="text-grey-new font-manrope uppercase max-sm:text-[14px]">РЕДАГУВАТИ</p>
    </Link>}
  </div>
}

export const WatchDetail: NextPage<WatchDetailProps> = ({ name, genres, media, rate, season, status, studios, value, year, className }) => {
  if (season && year) value = `${season.name} ${year}`;
  if (media) value = media.slug === ANIME_MEDIA_TYPE.UNKNOWN ? null : media.name
  if (status) value = status.name

  return <div className={cn(`watch-meta-detail`, className)}>
    {value && <p className="watch-meta-detail_value font-manrope">{value}</p>}
    {value === null && <p className="watch-meta-detail_value !text-grey-new font-manrope">—</p>}

    {rate && <Tooltip content={rate.description}><p className="watch-meta-detail_value font-manrope">{rate.name}</p></Tooltip>}

    {genres && <>
      {genres.length > 0 ? <div className="watch-meta-detail_container">
        {genres.map((genre, i) => {
          let immutableI = i;

          return <Tooltip content={genre.description} key={`animemeta-genre--${i}`}>
            <span className="watch-meta-detail_value font-bold font-manrope">
              {genre.name}
              {++immutableI < genres.length ? ',' : ''}
            </span>
          </Tooltip>
        })}
      </div> : <p className="text-grey-new text-center font-manrope max-sm:text-start">—</p>}
    </>}

    {studios && <>
      {studios.length > 0 ? <div className="watch-meta-detail_container">
        {studios.map((studio, i) => {
          let immutableI = i;

          return <span className="text-white max-sm:text-[14px]" key={`animemeta-studio--${i}`}>
            {studio.name}
            {++immutableI < studios.length ? ',' : ''}
          </span>
        })}
      </div> : <p className="text-grey-new text-center font-manrope max-sm:text-start">—</p>}
    </>}

    <p className="watch-meta-detail_label font-manrope">{name}</p>
  </div>
}

export const WatchNextEpisode: NextPage<WatchNextEpisodeProps> = ({ timestamp }) => {
  return <Tooltip className="w-full" content="Вказано час та дату виходу епізоду в Японії. Переклад та озвучення вийдуть пізніше.">
    <div className="watch-meta-detail_outlined">
      <MaterialSymbol icon="hourglass_bottom" size={24} className="text-grey-new max-sm:text-[20px]" />

      <div className="flex items-center gap-[8px] flex-wrap">
        <p className="text-grey-new font-manrope max-sm:text-[14px] whitespace-nowrap">Наступна серія вийде:</p>
        <p className="text-white font-manrope max-sm:text-[14px]">
          {`
          ${timestampToDayMonth(timestamp)},
          ${String(getUTC(timestamp).hrs).padStart(2, '0')}:${String(getUTC(timestamp).mins).padStart(2, '0')}
          `}
        </p>
      </div>
    </div>
  </Tooltip>
}

export const WatchSectionLabel: NextPage<WatchSectionLabelProps> = ({ label, icon }) => {
  return <div className="flex items-center gap-[16px]">
    <MaterialSymbol icon={icon} size={24} className="text-white max-sm:text-[20px]" />

    <h3 className="text-white text-[24px] font-manrope font-bold max-sm:text-[20px]">{label}</h3>
  </div>
}

export const WatchDubber: NextPage<WatchDubberProps> = ({ dubber, posterAdapt }) => {
  return <Link className="ui-button p-[8px] pr-[16px] rounded-[4px] flex grow items-center gap-[16px] max-sm:min-w-0 max-sm:p-[4px] max-sm:pr-[8px] max-sm:basis-[160px]" href={`${config.URL.baseURL}${Routes.dubber_profile.path}/${dubber.slug}`}>
    <StyledImage src={dubber.avatarURL} width="48px" height="48px" className="rounded-[2px] overflow-hidden max-sm:w-[40px] max-sm:h-[40px]" />

    <div className="flex flex-col gap-[4px]">
      <p className={cn(`text-white font-manrope font-bold max-sm:text-[14px]`, posterAdapt ? 'line-clamp-1' : 'line-clamp-2')}>{dubber.nameUkr}</p>

      {posterAdapt && <p className="text-grey-new font-manrope max-sm:text-[12px] whitespace-nowrap">Адаптація постеру</p>}
    </div>
  </Link>
}

export const WatchRating: NextPage<WatchGenericProps> = ({ hydratedAnime }) => {
  const scoredByFormatter = Intl.NumberFormat('en', { notation: 'compact' });

  return <>
    <div className="flex items-center gap-[8px]">
      <p className={cn('text-primary text-[24px] font-bold font-space-grotesk max-sm:text-[16px]')}>{hydratedAnime.anime.score.mal?.toFixed(2) ?? hydratedAnime.anime.score.imdb?.toFixed(2) ?? '―'}</p>

      <MaterialSymbol icon="star_half" size={24} className={cn(`text-primary max-sm:text-[20px]`)} />
    </div>

    <p className="text-grey-new font-manrope whitespace-nowrap">{hydratedAnime.anime.score.malScoredBy ? scoredByFormatter.format(hydratedAnime.anime.score.malScoredBy) : 'Немає'} оцінок</p>
  </>
}

export const WatchDetails: NextPage<WatchGenericProps> = ({ hydratedAnime }) => {
  return <div className="watch-meta-detail_outlined">
    <MaterialSymbol icon="info" size={24} className="text-grey-new max-sm:text-[20px]" />

    <p className="text-grey-new font-manrope max-sm:text-[14px]">{hydratedAnime.anime.details}</p>
  </div>
}

export const WatchPlayer: NextPage<WatchPlayerProps> = ({ hydratedAnime, dubbers }) => {
  const haveEpisodes = hydratedAnime.anime.episodes.length > 0;

  return <div className="flex flex-col gap-[16px]">
    <div className="w-screen h-[90svh] bg-black">
      {haveEpisodes && <Nekoplayer anime={hydratedAnime.anime} dubbers={dubbers ?? []} />}
      {!haveEpisodes && <div className="w-full h-full bg-dark-bright flex gap-[32px] items-center justify-center px-[32px] py-[40px] rounded-[2px] max-lg:flex-col">
        <StyledImage src={'/assets/cat-standing.png'} width="100%" height="100%" className="shrink-0 rounded-[4px] overflow-hidden !w-[512px] !h-[512px] max-lg:!w-[386px] max-lg:!h-[386px] max-sm:!w-[256px] max-sm:!h-[256px]" />

        <div className="flex flex-col gap-[8px] items-center w-full">
          <p className="text-white text-[40px] font-manrope font-bold max-sm:text-[24px]">А серій нема</p>
          <p className="text-grey-new font-manrope">Отак бува, та...</p>
        </div>
      </div>}
    </div>

    {haveEpisodes && <div className="wrapper items-start">
      <UIReportButton type="text" text="Епізоди завантажені неправильно?" />
    </div>}
  </div>
}