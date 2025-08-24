'use client';

import { NextPage } from 'next';
import { createContext, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import * as Loader from '@uiball/loaders';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { HandleClientError } from '~/components/Errors';
import StyledImage from '~/components/Styled/StyledImage';
import { UIField, UIFieldProps, UIFieldState } from '~/components/UI/Input';
import { NotifyError, NotifySuccess } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import UICheckbox from '~/components/UI/UICheckbox';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { ANIME_MEDIA_TYPES, ANIME_RATES, ANIME_SEASONS, ANIME_STATUSES, AnimeEpisode, AnimeMediaType, AnimeRateType, AnimeRecordType, AnimeSeasonType, AnimeStatusType, HydratedAnime } from '~/interfaces/AnimeIntf';
import { DubberCompact } from '~/interfaces/DubberIntf';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import { cn } from '~/utils/classnames';
import { DubberCompactMapper } from '~/utils/data-mappers';
import { alphabeticSort, copyToClipboard, createStringID, getUTC } from '~/utils/utils';

import PatcherStack from './PatcherStack';
import { PatcherEpisode } from './PatcherTypes';



interface PatcherGenerciProps {
  hydratedAnime: HydratedAnime
  capabilities: PatcherCapabilities
}

interface PatcherEpisodesProps extends PatcherGenerciProps {
  dubbers: DubberCompact[]
  session: string
}

export interface PatcherCapabilities {
  admin: boolean
  canDelete: boolean
  canEdit: boolean
  canSeriesUpload: boolean
  canSeriesDelete: boolean
  canUploadQ2160: boolean
}

interface MetaSaveButtonProps {
  save(): Promise<void>
  saveStatus: SaveMetaStatusType
}

interface PatcherLabelProps {
  title: string

  note?: string
  autosync?: boolean
  disabled?: boolean
}

type PatcherFieldProps = UIFieldProps & PatcherLabelProps

interface PatcherSelectProps<T = string> extends PatcherLabelProps {
  options: AnimeRecordType

  slug: T
  setSlug(slug: any): void
}

interface PatcherSelectDubberProps {
  selectedId: string
  setSelectedId(id: string): void

  dubbers: DubberCompact[]
  setDubbers(val: DubberCompact[]): void

  title: string
  disabled?: boolean

  capabilities: PatcherCapabilities

  /** Initial fetch dubber id. Null value will disable initial fetch */
  initialDubberFetch?: string | null
}

interface PatcherCheckboxProps {
  checked: boolean
  setChecked(val: boolean): void
  label: string

  disabled?: boolean
}

interface PatcherEpisodesUploadButtonProps {
  processQ2160: boolean
  setProcessQ2160(val: boolean): void
  canUpload: boolean
  upload(): void

  capabilities: PatcherCapabilities
  className?: string
}

interface EpisodesDubbing {
  dubber: DubberCompact
  episodes: PatcherEpisode[]
}

interface PatcherEpisodesDubbingProps extends PatcherGenerciProps, EpisodesDubbing {
  selectedDubberId: string
}

interface PatcherEpisodesContextProps {
  deleteEpisode(id: string): Promise<void>
  capabilities: PatcherCapabilities
}

type SaveMetaStatusType = 'default' | 'error' | 'saving' | 'saved' | 'noChanges';



// @ts-ignore
const PatcherEpisodesContext = createContext<PatcherEpisodesContextProps>({});



export const PatcherMeta: NextPage<PatcherGenerciProps> = ({ hydratedAnime, capabilities }) => {
  const router = useRouter();
  const [saveStatus, setSaveStatus] = useState<SaveMetaStatusType>('default');

  // Fields
  const [nameUkr, setNameUkr] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.ukr });
  const [nameEng, setNameEng] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.eng });
  const [nameAlt, setNameAlt] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.alt.join(', ') });
  const [malId, setMalId] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.malId) });
  const [imdbId, setImdbId] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.imdbId) });
  const [scoreIMDB, setScoreIMDB] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.imdb) });
  const [scoreMAL, setScoreMAL] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.mal) });
  const [malScoredBy, setMalScoredBy] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.malScoredBy) });
  const [episodesCount, setEpisodesCount] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.episodesCount) });
  const [year, setYear] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.year) });
  const [studios, setStudios] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.studios.map(el => el.name).join(', ') });
  const [genres, setGenres] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.genres.join(', ') });
  const [description, setDescription] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.description) });
  const [details, setDetails] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.details) });

  const fieldsData = [nameUkr, nameEng, nameAlt, malId, scoreIMDB, scoreMAL, malScoredBy, episodesCount, year, studios, genres, description, details];
  const fieldsSetters = [setNameUkr, setNameEng, setNameAlt, setMalId, setScoreIMDB, setScoreMAL, setMalScoredBy, setEpisodesCount, setYear, setStudios, setGenres, setDescription, setDetails];

  // Selects
  const [status, setStatus] = useState<AnimeStatusType>(hydratedAnime.anime.status);
  const [season, setSeason] = useState<AnimeSeasonType>(hydratedAnime.anime.season);
  const [mediaType, setMediaType] = useState<AnimeMediaType>(hydratedAnime.anime.media);
  const [rate, setRate] = useState<AnimeRateType>(hydratedAnime.anime.rate);
  const [posterAdaptedId, setPosterAdaptedId] = useState<string>(hydratedAnime.anime.posterAdapt ?? '');

  // Checkboxes
  const [malSync, setMalSync] = useState<boolean>(hydratedAnime.anime.malId ? !hydratedAnime.anime.stopSync.mal : false);
  const [isDMCARestricted, setIsDMCARestricted] = useState<boolean>(hydratedAnime.anime.isDMCARestricted);
  const [shikimoriSync, setShikimoriSync] = useState<boolean>(hydratedAnime.anime.malId ? !hydratedAnime.anime.stopSync.shikimori : false);

  const [posterAdaptDubbers, setPosterAdaptDubbers] = useState<DubberCompact[]>([]);



  async function save() {
    try {
      // if (!fieldsData.some(el => el.status === 'changes_pending')) return setSaveStatus('noChanges')



      setSaveStatus('saving');

      await API.patchAnime({
        uuid: hydratedAnime.anime.uuid,
        nameUkr: m(nameUkr),
        nameEng: m(nameEng),
        description: m(description),
        details: m(details),
        imdbId: m(imdbId),

        scoreIMDB: mn(scoreIMDB),
        malId: mn(malId),
        scoreMAL: mn(scoreMAL),
        episodesCount: mn(episodesCount),
        malScoredBy: mn(malScoredBy),
        year: mn(year),
        isDMCARestricted,

        nameAlt: ma(nameAlt),
        studios: ma(studios),
        genres: ma(genres),

        status: ms(status, hydratedAnime.anime.status),
        season: ms(season, hydratedAnime.anime.season),
        media: ms(mediaType, hydratedAnime.anime.media),
        rate: ms(rate, hydratedAnime.anime.rate),

        posterAdapt: ms(posterAdaptedId, hydratedAnime.anime.posterAdapt ?? ''),
      });

      fieldsData.forEach((field, i) => {
        if (field.status !== 'changes_pending') return;

        fieldsSetters[i]({
          ...field,
          status: 'success'
        });
      });

      setSaveStatus('saved');
      NotifySuccess({ title: 'Збережено!', message: 'Контент оновлено' });
    } catch (e) {
      HandleClientError(e);
      setSaveStatus('error');
    } finally {
      setTimeout(() => {
        setSaveStatus('default');

        fieldsData.forEach((field, i) => {
          fieldsSetters[i]({
            ...field,
            status: 'waiting'
          });
        });
      }, 3000);
    }
  }

  async function remove() {
    try {
      const token = prompt(`Enter token:`) ?? '';

      await API.deleteAnime({ token, uuid: hydratedAnime.anime.uuid });

      router.replace(`${config.URL.nekomi_site}`);
    } catch (e) {
      HandleClientError(e);
    }
  }

  async function copyText(text: string) {
    copyToClipboard(text);
    NotifySuccess({ title: 'Скопійовано!', message: `Текст скопійовано в буфер обміну - ${text}` });
  }



  return <>
    <section className="flex gap-[32px] max-xl:flex-col max-xl:items-center">
      {/* Poster */}
      <section className="flex flex-col gap-[16px] w-[500px] flex-shrink-0 max-sm:w-[320px]">
        <MetaPoster hydratedAnime={hydratedAnime} capabilities={capabilities} />

        <div className="flex flex-col gap-[4px]">
          {capabilities.canEdit && <MetaSaveButton save={save} saveStatus={saveStatus} />}

          <Link href={Routes.watch.path({ query: hydratedAnime.anime.slug })} className="ui-button patcher-button">
            <MaterialSymbol className="text-white" icon="slideshow" size={20} />
            <p className="text-white font-manrope uppercase">НА СТОРІНКУ ПЕРЕГЛЯДУ</p>
          </Link>
        </div>

        {capabilities.canDelete && <button className="ui-button patcher-button" onClick={remove}>
          <MaterialSymbol className="text-white" icon="delete" size={20} />
          <p className="text-white font-manrope uppercase">ВИДАЛИТИ</p>
        </button>}
      </section>

      {/* Meta */}
      <section className="flex flex-wrap gap-[16px] w-full">
        {/* Fields */}
        <PatcherField state={nameUkr} stateSetter={setNameUkr} title="Назва Українською" disabled={!capabilities.canEdit} symbolsLimited={256} />
        <PatcherField state={nameEng} stateSetter={setNameEng} title="Назва Англійською" disabled={!capabilities.canEdit} symbolsLimited={256} />
        {capabilities.canEdit && <PatcherField state={nameAlt} stateSetter={setNameAlt} fieldType="textarea" title="Альтернативні назви" note="(Японська..., через кому)" disabled={!capabilities.canEdit} symbolsLimited={256} />}
        <PatcherField state={malId} stateSetter={setMalId} title="MyAnimeList ID" disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={imdbId} stateSetter={setImdbId} title="IMDB ID" disabled={!capabilities.canEdit} type="text" autosync={malSync} />
        <PatcherField state={scoreMAL} stateSetter={setScoreMAL} title="Рейтинг MyAnimeList" note="(0 - 10)" autosync={malSync} disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={malScoredBy} stateSetter={setMalScoredBy} title="Кількість рецензій MyAnimeList" autosync={malSync} disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={episodesCount} stateSetter={setEpisodesCount} title="Кількість епізодів" note="(1 - 9999)" autosync={malSync} disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={year} stateSetter={setYear} title="Рік виробництва" note={`(2007 - ${getUTC().year + 1})`} autosync={malSync} disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={studios} stateSetter={setStudios} title="Студії" note="(Через кому)" autosync={malSync} disabled={!capabilities.canEdit} />
        <PatcherField state={genres} stateSetter={setGenres} title="Жанри" note="(Через кому)" autosync={malSync} disabled={!capabilities.canEdit} />

        {/* Selects */}
        <PatcherSelectDubber title="Адаптація постеру" dubbers={posterAdaptDubbers} setDubbers={setPosterAdaptDubbers} selectedId={posterAdaptedId} setSelectedId={setPosterAdaptedId} initialDubberFetch={hydratedAnime.anime.posterAdapt ?? null} capabilities={capabilities} disabled={!capabilities.canEdit} />

        <PatcherSelect title="Статус" options={ANIME_STATUSES} slug={status} setSlug={setStatus} autosync={malSync} disabled={!capabilities.canEdit} />
        <PatcherSelect title="Сезон" options={ANIME_SEASONS} slug={season} setSlug={setSeason} autosync={malSync} disabled={!capabilities.canEdit} />
        <PatcherSelect title="Тип" options={ANIME_MEDIA_TYPES} slug={mediaType} setSlug={setMediaType} autosync={malSync} disabled={!capabilities.canEdit} />
        <PatcherSelect title="Віковий рейтинг" options={ANIME_RATES} slug={rate} setSlug={setRate} autosync={malSync} disabled={!capabilities.canEdit} />

        {/* // TODO: Broadcast */}
        {/* <div className="flex items-center gap-[8px] w-full">
          <PatcherSelect title="День трансляції" options={ANIME_RATES} slug={rate} setSlug={setRate} autosync={malSync} disabled={!capabilities.canEdit} />
          <PatcherField state={description} stateSetter={setDescription} title="Час трансляції" note="(HH:MM)" autosync={malSync} disabled={!capabilities.canEdit} className="w-full" />
        </div> */}

        <PatcherField state={description} stateSetter={setDescription} fieldType="textarea" title="Опис" symbolsLimited={2200} disabled={!capabilities.canEdit} className="w-full" />
        <PatcherField state={details} stateSetter={setDetails} fieldType="textarea" title="Деталі" symbolsLimited={500} disabled={!capabilities.canEdit} className="w-full" />

        {/* Checkboxes */}
        <div className="flex items-center justify-center w-full gap-[16px] max-lg:flex-col">
          {/* <PatcherCheckbox label="Синхронізація інформації про аніме з MyAnimeList" checked={malSync} setChecked={setMalSync} disabled={!capabilities.canEdit || !hydratedAnime.anime.malId} /> */}
          <PatcherCheckbox label="DMCA Restricted" checked={isDMCARestricted} setChecked={setIsDMCARestricted} disabled={!capabilities.admin} />
          {/* <PatcherCheckbox label="Синхронізація зображень з Shikimori" checked={shikimoriSync} setChecked={setShikimoriSync} disabled={!capabilities.canEdit || !hydratedAnime.anime.malId} /> */}
        </div>
      </section>
    </section>

    <section className="w-full flex justify-center items-center gap-[16px] flex-wrap" style={{ rowGap: 8 }}>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.uuid)} title="Скопіювати UUID">UUID: {hydratedAnime.anime.uuid}</p>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.slug)} title="Скопіювати SLUG">SLUG: {hydratedAnime.anime.slug}</p>
      <p className="text-grey-new font-space-grotesk">Created At: {new Date(hydratedAnime.anime.createdAt).toUTCString()}</p>
      <p className="text-grey-new font-space-grotesk">Updated At: {new Date(hydratedAnime.anime.updatedAt ?? 0).toUTCString()}</p>
      {hydratedAnime.anime.malSyncedAt && <p className="text-grey-new font-space-grotesk">MAL Synced At: {new Date(hydratedAnime.anime.malSyncedAt ?? 0).toUTCString()}</p>}
      {/* <p className="text-grey-new font-space-grotesk">Shikimori Synced At: null</p> */}
    </section>
  </>;
};

export const PatcherEpisodes: NextPage<PatcherEpisodesProps> = ({ capabilities, hydratedAnime, dubbers: parsedDubbers, session }) => {
  const canSeriesUpload = capabilities.canSeriesUpload;

  const [order, setOrder] = useState<UIFieldState>({ initialValue: '' });
  const [selectedDubberId, setSelectedDubberId] = useState(parsedDubbers[0]?.id ?? '');
  const [dubbers, setDubbers] = useState<DubberCompact[]>(parsedDubbers);
  const [episodesDubbing, setEpisodesDubbing] = useState<EpisodesDubbing[]>([]);
  const [episodes, setEpisodes] = useState<PatcherEpisode[]>(hydratedAnime.anime.episodes.map(ep => AnimeEpisodeToPatcherEpisode(ep)));

  const [processQ2160, setProcessQ2160] = useState<boolean>(false);
  const [filename, setFilename] = useState('');
  const [canUpload, setCanUpload] = useState(false);

  const [Stack] = useState(new PatcherStack({
    anime: hydratedAnime.anime,
    episodes,
    session,
    patchEpisode: patchEpisodeState,
    throwError: throwStackError
  }));

  const fileInputRef = useRef<HTMLInputElement>(null);



  // Handle can upload
  useEffect(() => {
    let canUpload = false;

    // Check if every field filled
    if (Boolean(order.value && filename && selectedDubberId)) canUpload = true;

    // Check if episode is not exist
    if (episodes.some(el => el.episode.dubberID === selectedDubberId && el.episode.order === Number(order.value))) canUpload = false;

    setCanUpload(canUpload);
  }, [order, filename, selectedDubberId, episodes]);

  // Handle episodes dubbing
  useMemo(() => {
    const episodesDubbing: EpisodesDubbing[] = [];

    episodes.forEach(ep => {
      const exist = episodesDubbing.find(el => el.dubber.id === ep.episode.dubberID);

      if (exist) {
        // append

        exist.episodes.push(ep);
      } else {
        // create

        episodesDubbing.push({
          dubber: dubbers.find(el => el.id === ep.episode.dubberID)!,
          episodes: [ep]
        });
      }
    });

    setEpisodesDubbing(episodesDubbing);
  }, [episodes, dubbers]);



  function handleFilename() {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files?.length) return;

    const file = fileInput.files[0];

    setFilename(file.name);
  }

  function selectFile() {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    fileInput.value = '';
    fileInput.click();
  }

  function upload() {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files) return;

    const file = fileInput.files[0];

    const episode: PatcherEpisode = {
      id: createStringID(6),
      File: file,
      newUpload: true,
      stackOrder: -1,
      progress: -1,
      status: 'pending',
      q2160: processQ2160,
      episode: {
        dubberID: selectedDubberId,
        frames: [],
        order: Number(order.value),
        qualities: {
          q4k: processQ2160 ? '' : null,
          q1080: '',
          q720: null,
          q480: '',
          q240: null,
        }
      }
    };

    setProcessQ2160(false);
    setEpisodes([...episodes, episode]);

    Stack.append(episode);
  }

  function throwStackError(e: any, id?: string) {
    HandleClientError(e);
    setEpisodes(prev => prev.filter(el => el.id !== id));
  }

  function patchEpisodeState(episode: PatcherEpisode) {
    setEpisodes(prev => [...prev.filter(el => el.id !== episode.id), episode]);
  }

  async function deleteEpisode(id: string) {
    const episode = episodes.find(el => el.id === id);
    if (!episode) return NotifyError({ title: 'Не знайдено', message: 'Ми не знайшли епізод який ти хочеш видалити' });

    try {
      await API.deleteAnimeEpisode({ dubberId: episode.episode.dubberID, order: episode.episode.order, uuid: hydratedAnime.anime.uuid });

      Stack.remove(id);
      setEpisodes(prev => prev.filter(el => el.id !== id));
      NotifySuccess({ title: 'Видалено!', message: 'Ми видалили цей епізод' });
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <section className="wrapper bg-dark-bright gap-[32px] py-[32px]">
    <h2 className="text-white text-[32px] font-manrope font-bold max-md:text-[24px]">Завантаження епізодів — {hydratedAnime.anime.names.eng}</h2>

    <section className="flex items-end gap-[16px] max-xl:flex-col-reverse max-xl:items-stretch">
      <div className="flex items-end gap-[16px] max-md:flex-col">
        {/* Order */}
        <div className="w-[250px] flex-shrink-0 max-xl:w-full max-xl:flex-shrink">
          <PatcherField title="Номер серії" note="(1 - 9999)" state={order} stateSetter={setOrder} type="number" disablePending disabled={!canSeriesUpload} />
        </div>

        {/* Dub select */}
        <div className="w-[300px] flex-shrink-0 max-xl:w-full max-xl:flex-shrink">
          <PatcherSelectDubber title="Команда Озвучення" selectedId={selectedDubberId} setSelectedId={setSelectedDubberId} capabilities={capabilities} dubbers={dubbers} setDubbers={setDubbers} disabled={!canSeriesUpload} />
        </div>

        <PatcherEpisodesUploadButton processQ2160={processQ2160} setProcessQ2160={setProcessQ2160} className="xl:hidden" canUpload={canSeriesUpload ? canUpload : false} upload={upload} capabilities={capabilities} />
      </div>

      {/* File select */}
      <div className="flex flex-col gap-[8px] w-full">
        <p className="text-white font-manrope">Файл</p>

        <input type="file" accept=".mp4,.webm,.mov,.mkv,.m4v" style={{ display: 'none' }} onChange={handleFilename} ref={fileInputRef} />

        <button className={cn(`ui-button patcher-button w-full flex !justify-start`, !canSeriesUpload && 'cursor-not-allowed')} disabled={!canSeriesUpload} onClick={selectFile}>
          <p className={cn(`text-white font-manrope line-clamp-1`, !canSeriesUpload && '!text-grey-new')}>{filename || '-- файл не вибрано --'}</p>
        </button>
      </div>

      <PatcherEpisodesUploadButton processQ2160={processQ2160} setProcessQ2160={setProcessQ2160} className="max-xl:hidden" canUpload={canSeriesUpload ? canUpload : false} upload={upload} capabilities={capabilities} />
    </section>

    <PatcherEpisodesContext.Provider value={{
      capabilities,
      deleteEpisode
    }}>
      <section className="flex flex-col gap-[32px]">
        {/* Render selected dub */}
        {[episodesDubbing.find(el => el.dubber.id === selectedDubberId)].map((dub) => {
          return dub && <PatcherEpisodesDubbing dubber={dub.dubber} episodes={dub.episodes} capabilities={capabilities} hydratedAnime={hydratedAnime} selectedDubberId={selectedDubberId} key={`patcherepisodes-${dub.dubber.id}`} />;
        })}

        {/* Render other dubs */}
        {episodesDubbing.filter(el => el.dubber.id !== selectedDubberId).toSorted((a, b) => alphabeticSort(a.dubber.nameUkr, b.dubber.nameUkr)).map((dub) => {
          return <PatcherEpisodesDubbing dubber={dub.dubber} episodes={dub.episodes} capabilities={capabilities} hydratedAnime={hydratedAnime} selectedDubberId={selectedDubberId} key={`patcherepisodes-${dub.dubber.id}`} />;
        })}
      </section>
    </PatcherEpisodesContext.Provider>
  </section>;
};



export const PatcherCreateNewAnime: NextPage = () => {
  const router = useRouter();

  const [isCreating, setIsCreating] = useState(false);



  async function createNew() {
    try {
      setIsCreating(true);

      const { anime } = await API.postAnime();

      NotifySuccess({ title: 'Створено!', message: 'Нове аніме створено, заміняємо сторінку...' });

      router.replace(Routes.patcher.path({ uuid: anime.uuid }));
    } catch (e) {
      HandleClientError(e);
      setIsCreating(false);
    }
  }



  return <button className={cn(`ui-button flex items-center gap-[16px] px-[16px] py-[8px] border-none bg-transparent`, isCreating && 'cursor-not-allowed')} onClick={createNew} disabled={isCreating}>
    {isCreating && <Loader.Ring size={20} color="#555" />}
    {!isCreating && <MaterialSymbol icon="add" size={20} className="text-grey-new" />}

    <p className="text-grey-new font-manrope">
      {!isCreating && 'СТВОРИТИ НОВЕ'}
      {isCreating && 'СТВОРЮЄМО...'}
    </p>
  </button>;
};

export const PatcherWithoutMalId: NextPage = () => {
  const router = useRouter();

  const [isFetching, setIsFetching] = useState(false);



  async function getRandAnime() {
    try {
      setIsFetching(true);

      const { results } = await API.searchAnime({ q: '~all' }, { woMalId: true });
      router.replace(Routes.patcher.path({ uuid: results[0].anime.uuid }));

      NotifySuccess({ title: 'Знайшли!', message: 'Ми знайшли аніме без mal id, удачі!' });
    } catch (e) {
      HandleClientError(e);
      setIsFetching(false);
    }
  }



  return <button className={cn(`ui-button flex items-center gap-[16px] px-[16px] py-[8px]`, isFetching && 'cursor-not-allowed')} onClick={getRandAnime} disabled={isFetching}>
    {isFetching && <Loader.Ring size={20} color="#555" />}
    {!isFetching && <MaterialSymbol icon="update" size={20} className="text-white" />}

    <p className={cn(`text-white font-manrope`, isFetching && '!text-grey-new')}>
      {!isFetching && 'БЕЗ MAL ID'}
      {isFetching && 'ШУКАЄМО...'}
    </p>
  </button>;
};

const MetaSaveButton: NextPage<MetaSaveButtonProps> = ({ save, saveStatus }) => {
  const [icon, setIcon] = useState<SymbolCodepoints>('cloud_done');
  const [label, setLabel] = useState('ЗБЕРЕГТИ');
  const [isSaving, setIsSaving] = useState(false);



  useEffect(() => {
    setIsSaving(saveStatus === 'saving');

    if (saveStatus === 'default') {
      setIcon('cloud_done');
      setLabel('ЗБЕРЕГТИ');
    }

    if (saveStatus === 'saved') {
      setIcon('cloud_done');
      setLabel('ЗБЕРЕЖЕНО!');
    }

    if (saveStatus === 'saving') {
      setIcon('cloud_done');
      setLabel('ЗБЕРЕЖЕННЯ...');
    }

    if (saveStatus === 'error') {
      setIcon('emergency_home');
      setLabel('ПОМИЛКА');
    }

    if (saveStatus === 'noChanges') {
      setIcon('question_exchange');
      setLabel('відсутні зміни');
    }
  }, [saveStatus]);



  return <button className={cn(`ui-button patcher-button`, `patcher-button-saveMeta--${saveStatus}`)} disabled={saveStatus !== 'default'} onClick={save}>
    {isSaving && Loader.Ring({ size: 20, color: '#555' })}
    {!isSaving && <MaterialSymbol className="text-white" icon={icon} size={20} />}

    <p className={cn(`patcher-button-saveMeta_text text-white font-manrope uppercase duration-200`)}>{label}</p>
  </button>;
};

const MetaPoster: NextPage<PatcherGenerciProps> = ({ hydratedAnime, capabilities }) => {
  const [posterURL, setPosterURL] = useState(hydratedAnime.anime.poster);
  const [isUploading, setIsUploading] = useState(false);
  const [isNekomiPoster, setIsNekomiPoster] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);



  useMemo(() => {
    setIsNekomiPoster(posterURL.includes(config.URL.nekomi_media));
  }, [posterURL]);



  async function uploadPoster() {
    const fileInput = fileInputRef.current;
    if (!fileInput || !fileInput.files) return;

    const file = fileInput.files[0];

    try {
      setIsUploading(true);

      const { url } = await API.putAnimePoster({ file, uuid: hydratedAnime.anime.uuid });

      setPosterURL(url);
      NotifySuccess({ title: 'Завантажено!', message: 'Новий постер завантажено' });
      setIsUploading(false);
    } catch (e) {
      HandleClientError(e);
      setIsUploading(false);
    }
  }

  function selectFile() {
    const fileInput = fileInputRef.current;
    if (!fileInput) return;

    fileInput.value = '';
    fileInput.click();
  }



  return <div className="flex flex-col gap-[4px]">
    <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={uploadPoster} />

    <button className={cn(`patcher-poster_wrapper w-full h-[700px] relative max-sm:h-[520px]`, isUploading && 'patcher-poster_wrapper--uploading')} onClick={selectFile} disabled={isUploading || !capabilities.canEdit}>
      <StyledImage src={posterURL} width="100%" height="100%" rounded={4} loading="eager" />

      {capabilities.canEdit && <>
        <div className={cn(`patcher-poster patcher-poster-uploading`, isUploading && 'patcher-poster--uploading')}>
          <Loader.Ring size={80} color="#fff" />
        </div>

        <div className={cn(`patcher-poster patcher-poster-upload`)}>
          <MaterialSymbol icon="cloud_upload" size={80} className="text-white" />
          <p className="text-white text-[32px] text-center font-manrope font-bold max-w-[240px]">ЗАВАНТАЖИТИ ПОСТЕР</p>
        </div>
      </>}
    </button>

    {!isNekomiPoster && <p className="text-info-warn text-[14px] font-manrope">* Постер не на сервері nekomi</p>}
  </div>;
};

const PatcherLabel: NextPage<PatcherLabelProps> = ({ autosync, disabled, note, title }) => {
  return <div className="flex items-center gap-[8px]">
    {autosync && <Tooltip className="flex items-center" content={`Це поле буде автоматично синхронизовано з MyAnimeList`}><MaterialSymbol className="text-grey-new" icon="sync" size={20} /></Tooltip>}
    {disabled && <MaterialSymbol className="text-grey-new" icon="lock" size={20} />}

    <p className={cn(`text-white font-manrope whitespace-nowrap`, disabled && '!text-grey-new')}>{title}</p>
    {note && <p className="text-grey-new text-[14px] font-manrope">{note}</p>}
  </div>;
};

const PatcherField: NextPage<PatcherFieldProps> = ({ title, autosync, disabled, note, ...props }) => {
  return <div className="flex flex-col gap-[8px] basis-[500px] grow max-[1615px]:basis-[400px]">
    <PatcherLabel title={title} autosync={autosync} disabled={disabled} note={note} />

    <UIField disabled={disabled} {...props} />
  </div>;
};

const PatcherSelect: NextPage<PatcherSelectProps> = ({ options, title, autosync, note, disabled, setSlug, slug }) => {
  const id = useId().replaceAll(':', '');

  const [isOpen, setIsOpen] = useState(false);



  useEffect(() => {
    setIsOpen(false);
  }, [slug]);



  return <div className="flex flex-col gap-[8px] w-full basis-[500px] grow max-[1615px]:basis-[400px]">
    <PatcherLabel title={title} autosync={autosync} disabled={disabled} note={note} />

    <Menu className="w-full" id={id} state={isOpen} stateSetter={setIsOpen} settings={{ align: 'start', animation: 'slide' }} disabled={disabled}>
      <MenuTrigger className={cn(`patcher-button bg-dark-medium border border-dark-light rounded-[4px] w-full !justify-between duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, disabled && 'cursor-not-allowed')} anchor>
        <p className={cn(`text-white font-manrope`, disabled && '!text-grey-new')}>{options[slug]?.name}</p>

        {!disabled && <MaterialSymbol className="text-grey-new" icon="expand_all" size={16} />}
      </MenuTrigger>

      <MenuWrapper className="w-full bg-dark-primary border border-dark-light rounded-[4px] flex flex-col max-h-[300px] overflow-y-auto">
        {Object.keys(options).map((optionSlug) => {
          return <button className={cn(`px-[16px] py-[8px] duration-100 flex items-start hover:bg-dark-light focus-visible:bg-dark-light w-full border-b border-b-dark-light last:border-none`, slug === optionSlug && 'bg-primary')} onClick={() => setSlug(optionSlug)} key={`patcher-select-${id}--${optionSlug}`}>
            <p className="text-white font-manrope">{options[optionSlug].name}</p>
          </button>;
        })}
      </MenuWrapper>
    </Menu>
  </div>;
};

const PatcherSelectDubber: NextPage<PatcherSelectDubberProps> = ({ title, disabled, dubbers, selectedId, setDubbers, setSelectedId, capabilities, initialDubberFetch }) => {
  const id = useId().replaceAll(':', '');
  const currentUser = useAppSelector(state => state.user);

  const canSeriesUpload = currentUser.dubberTeamMember ? capabilities.admin : capabilities.canSeriesUpload;
  disabled = !canSeriesUpload;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedDubber, setSelectedDubber] = useState<DubberCompact | null>(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<DubberCompact[]>(dubbers);

  const [searchTextDebounce] = useDebounce(searchText, 700);




  // Fetch user dubber team
  useEffect(() => {
    if (initialDubberFetch === null) return;
    const dubberFetch = initialDubberFetch ?? currentUser.dubberTeamMember;

    (async function () {
      try {
        if (!dubberFetch) return;

        const { dubber } = await API.getDubberByQuery({ query: dubberFetch });
        const dubberCompact = DubberCompactMapper(dubber);

        setDubbers([...dubbers, dubberCompact]);
        setSelectedId(dubberCompact.id);
        setSearchResults([...dubbers, dubberCompact]);
      } catch (e) {
        HandleClientError(e);
      }
    })();
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [selectedId]);

  useEffect(() => {
    focusSearch();
  }, [isOpen]);

  useEffect(() => {
    setSelectedDubber(dubbers.find(el => el.id === selectedId) ?? null);
  }, [dubbers, selectedId]);

  useEffect(() => {
    search(searchTextDebounce);
  }, [searchTextDebounce]);



  async function search(query: string) {
    try {
      if (query.length === 0) return;

      const { results } = await API.searchDubber({ q: query });

      const dubberResults = results.map(dubber => DubberCompactMapper(dubber));
      const uniqueResults = dubberResults.filter(dubber => !dubbers.some(el => el.id === dubber.id));

      // Push total dubbers fetched
      setDubbers([...dubbers, ...uniqueResults]);
      setSearchResults(dubberResults);
    } catch (e) {
      HandleClientError(e);
    }
  }

  function focusSearch() {
    const search = document.querySelector(`#searchbar-${id}`) as HTMLInputElement;
    if (!search) return console.error(`Search #searchbar-${id} is not found`);

    let i = 0;

    setInterval(() => {
      if (i !== 5) {
        i += 1;
        search.focus();
      }
    }, 50);
  }



  return <div className="flex flex-col gap-[8px] w-full basis-[500px] grow max-[1615px]:basis-[400px]">
    <PatcherLabel title={title} disabled={disabled} />

    <Menu className="w-full" id={id} state={isOpen} stateSetter={setIsOpen} settings={{ align: 'start', animation: 'slide' }} disabled={disabled}>
      <MenuTrigger className={cn(`patcher-button bg-dark-medium border border-dark-light rounded-[4px] w-full !justify-between duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, disabled && 'cursor-not-allowed')} anchor>
        <div className="flex items-center gap-[16px]">
          {selectedDubber && <StyledImage width="20px" height="20px" src={selectedDubber.avatarURL} rounded={2} />}

          <p className={cn(`text-white font-manrope line-clamp-1`, disabled && '!text-grey-new')}>{selectedDubber?.nameUkr ?? '-- команда не вибрана --'}</p>
        </div>

        {!disabled ? <MaterialSymbol className="text-grey-new" icon="expand_all" size={16} /> : <div></div>}
      </MenuTrigger>

      <MenuWrapper className="w-full bg-dark-primary border border-dark-light rounded-[4px] flex flex-col max-h-[300px] overflow-y-auto">
        {/* Search */}
        <div className="flex items-center gap-[8px] p-[8px]">
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <MaterialSymbol icon="search" size={20} className="text-grey-new" />
          </div>

          <input className="p-[6px] bg-transparent w-full font-manrope text-white placeholder:font-manrope placeholder:text-grey-new" type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Введи назву команди" autoComplete="off" id={`searchbar-${id}`} />
        </div>

        {/* Results */}
        {searchResults.map((result, i) => {
          return <button className={cn(`px-[16px] py-[8px] duration-100 flex items-center gap-[8px] hover:bg-dark-light focus-visible:bg-dark-light w-full border-t border-t-dark-light`, result.id === selectedId && 'bg-primary')} onClick={() => setSelectedId(result.id)} key={`patcher-select-${id}--${result.id}`}>
            <StyledImage width="32px" height="32px" src={result.avatarURL} rounded={2} />

            <p className="text-white font-manrope">{result.nameUkr}</p>
          </button>;
        })}
      </MenuWrapper>
    </Menu>
  </div>;
};

const PatcherCheckbox: NextPage<PatcherCheckboxProps> = ({ checked, label, setChecked, disabled }) => {
  function toggle() {
    setChecked(!checked);
  }

  return <button className={cn(`flex items-center gap-[8px]`, disabled && 'cursor-not-allowed')} onClick={toggle} disabled={disabled}>
    <UICheckbox isChecked={checked} setIsChecked={setChecked} disableDefaultToggle />

    {disabled && <MaterialSymbol className="text-grey-new" icon="lock" size={20} />}

    <p className={cn(`text-white font-manrope`, disabled && '!text-grey-new')}>{label}</p>
  </button>;
};

const PatcherEpisodesUploadButton: NextPage<PatcherEpisodesUploadButtonProps> = ({ processQ2160, setProcessQ2160, className, canUpload, upload, capabilities }) => {
  const { canSeriesUpload, canUploadQ2160 } = capabilities;

  return <div className={cn(`flex items-center gap-[16px]`, className)}>
    <button className={cn(`ui-button patcher-button`, !canUpload && 'cursor-not-allowed')} onClick={upload} disabled={!canUpload}>
      <p className={cn(`text-white font-manrope font-bold duration-100`, !canUpload && '!text-grey-new')}>ЗАВАНТАЖИТИ</p>
      <MaterialSymbol icon="backup" size={20} className={cn(`text-white duration-100`, !canUpload && '!text-grey-new')} />
    </button>

    {/* {canUploadQ2160 && <PatcherCheckbox checked={processQ2160} setChecked={setProcessQ2160} label="4K" disabled={!canSeriesUpload} />} */}
  </div>;
};

const PatcherEpisodesDubbing: NextPage<PatcherEpisodesDubbingProps> = ({ dubber, episodes, hydratedAnime, selectedDubberId }) => {
  const [maximumEpisode, setMaximumEpisode] = useState(0);
  const [collapsed, setCollapsed] = useState(true);



  // Handle maximum episode
  useMemo(() => {
    let maximumEpisode = 0;
    episodes.filter(el => el.episode.dubberID === dubber.id).forEach(ep => ep.episode.order > maximumEpisode ? maximumEpisode = ep.episode.order : undefined);

    setMaximumEpisode(maximumEpisode);
  }, [episodes]);

  // Handle collapse
  useEffect(() => {
    setCollapsed(dubber.id !== selectedDubberId);
  }, [selectedDubberId]);



  return <div className="flex flex-col gap-[24px]">
    <div className="flex items-center gap-[24px]">
      <Tooltip content={collapsed ? 'Розгорнути озвучення' : 'Згорнути озвучення'}>
        <button onClick={() => setCollapsed(prev => !prev)}>
          <MaterialSymbol icon="arrow_drop_down" size={24} className={cn(`text-grey-new duration-200`, collapsed && 'rotate-180')} />
        </button>
      </Tooltip>

      <StyledImage width="40px" height="40px" src={dubber.avatarURL} rounded={4} />
      <h3 className="text-white text-[24px] font-manrope font-bold">{dubber.nameUkr}</h3>
      <p className="text-grey-new font-space-grotesk">({maximumEpisode} / {hydratedAnime.anime.episodesCount ?? '—'})</p>
    </div>

    <div className={cn(`flex flex-col gap-[4px] overflow-y-auto duration-200`, collapsed ? 'max-h-0' : 'max-h-[600px]')}>
      {episodes.toSorted((a, b) => b.episode.order - a.episode.order).map(ep => {
        return <PatcherDubbedEpisode {...ep} key={`patcherepisode-${ep.id}`} />;
      })}
    </div>
  </div>;
};

const PatcherDubbedEpisode: NextPage<PatcherEpisode> = ({ File, episode, id, newUpload, stackOrder, progress, status }) => {
  const { capabilities, deleteEpisode } = useContext(PatcherEpisodesContext) as PatcherEpisodesContextProps;
  const currentUser = useAppSelector(state => state.user);

  const canSeriesDelete = currentUser.dubberTeamMember ? capabilities.admin || episode.dubberID === currentUser.dubberTeamMember : capabilities.canSeriesDelete;



  return <div className="w-full px-[16px] py-[12px] rounded-[4px] border border-dark-light flex items-center justify-between gap-[24px]">
    <div className="flex items-center gap-[8px]">
      <p className="text-white text-[20px] font-space-grotesk font-bold w-[80px]">#{String(episode.order).padStart(2, '0')}</p>

      <div className="flex items-center gap-[8px]">
        {status === 'pending' && <>
          <MaterialSymbol icon="pace" size={20} className="text-info-warn" />

          <p className="text-grey-new font-manrope">В черзі на завантаження:</p>
          <p className="text-grey-new text-[14px] font-manrope">{File?.name}</p>
          <p className="text-grey-new text-[14px] font-manrope">{`>${stackOrder}`}</p>
        </>}

        {status === 'uploading' && <>
          <MaterialSymbol icon="clock_loader_20" size={20} className="text-info-success" />

          <p className="text-grey-new font-manrope">Завантажується:</p>
          <p className="text-grey-new text-[14px] font-space-grotesk">{progress.toFixed(2)}%</p>
        </>}

        {status === 'uploaded' && <Link className="flex items-center gap-[8px]" href={episode.qualities.q1080} target="_blank">
          <MaterialSymbol icon="play_arrow" size={20} className="text-primary" fill />

          <p className="text-white font-manrope">Переглянути</p>

          {newUpload && <p className="text-grey-new text-[14px] font-manrope">Завантажено!</p>}
        </Link>}
      </div>
    </div>

    {status !== 'uploading' && canSeriesDelete && <button className="w-[28px] h-[28px] flex justify-center items-center" onClick={() => deleteEpisode(id)}>
      <MaterialSymbol icon="delete" size={20} className="text-grey-new" />
    </button>}
  </div>;
};



/** Parse value into string */
function x(value: string | number | null | undefined): string {
  if (value === null || value === undefined) return '';
  if (typeof value === 'number') return String(value);
  if (typeof value === 'string') return value;

  return '';
}

/** Check if state has been mutated. Return string or undefined */
function m(state: UIFieldState): string | undefined {
  return state.mutated ? state.value : undefined;
}

/** Check if state has been mutated. Return number or undefined */
function mn(state: UIFieldState): number | undefined {
  return state.mutated ? Number(state.value) : undefined;
}

/** Check if state has been mutated. Split value by commas or undefined */
function ma(state: UIFieldState): string[] | undefined {
  return state.mutated ? state.value?.split(',') : undefined;
}

/** Check if value has been mutated. Return new value or undefined */
function ms(curr: string, prev: string): string | undefined {
  return curr !== prev ? curr : undefined;
}

function AnimeEpisodeToPatcherEpisode(episode: AnimeEpisode): PatcherEpisode {
  return {
    id: createStringID(6),
    episode,
    newUpload: false,
    File: null,
    stackOrder: 0,
    progress: 0,
    status: 'uploaded'
  };
}