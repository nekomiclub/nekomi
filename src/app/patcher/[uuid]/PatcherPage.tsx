'use client'

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import * as Loader from '@uiball/loaders'
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { cn, copyToClipboard } from '~/components/Components';
import { HandleClientError } from '~/components/Errors';
import { getUTC } from '~/components/handlers';
import StyledImage from '~/components/StyledImage';
import { UIField, UIFieldProps, UIFieldState } from '~/components/UI/Input';
import { NotifyError, NotifySuccess } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import UICheckbox from '~/components/UI/UICheckbox';
import { config } from '~/config';
import { ANIME_MEDIA_TYPES, ANIME_RATES, ANIME_SEASONS, ANIME_STATUSES, AnimeMediaType, AnimeRateType, AnimeRecordType, AnimeSeasonType, AnimeStatusType, HydratedAnime } from '~/interfaces/AnimeIntf';
import { routes } from '~/routes';



interface PatcherGenerciProps {
  hydratedAnime: HydratedAnime
  capabilities: PatcherCapabilities
}

export interface PatcherCapabilities {
  canDelete: boolean
  canEdit: boolean
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

interface PatcherCheckboxProps {
  checked: boolean
  setChecked(val: boolean): void
  label: string

  disabled?: boolean
}

type SaveMetaStatusType = 'default' | 'error' | 'saving' | 'saved' | 'noChanges';



export const PatcherMeta: NextPage<PatcherGenerciProps> = ({ hydratedAnime, capabilities }) => {
  const [saveStatus, setSaveStatus] = useState<SaveMetaStatusType>('default')

  const [nameUkr, setNameUkr] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.ukr })
  const [nameEng, setNameEng] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.eng })
  const [nameAlt, setNameAlt] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.names.alt.join(', ') })
  const [malId, setMalId] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.malId) })
  const [scoreImdb, setScoreImdb] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.imdb) })
  const [scoreMal, setScoreMal] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.mal) })
  const [scoredByMal, setScoredByMal] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.score.malScoredBy) })
  const [episodesCount, setEpisodesCount] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.episodesCount) })
  const [year, setYear] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.year) })
  const [studios, setStudios] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.studios.map(el => el.name).join(', ') })
  const [genres, setGenres] = useState<UIFieldState>({ initialValue: hydratedAnime.anime.genres.join(', ') })
  const [description, setDescription] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.description) })
  const [details, setDetails] = useState<UIFieldState>({ initialValue: x(hydratedAnime.anime.details) })

  const [status, setStatus] = useState<AnimeStatusType>(hydratedAnime.anime.status)
  const [season, setSeason] = useState<AnimeSeasonType>(hydratedAnime.anime.season)
  const [mediaType, setMediaType] = useState<AnimeMediaType>(hydratedAnime.anime.media)
  const [rate, setRate] = useState<AnimeRateType>(hydratedAnime.anime.rate)

  const [malSync, setMalSync] = useState(!Boolean(hydratedAnime.anime.stopSync.mal))
  const [shikimoriSync, setShikimoriSync] = useState(!Boolean(hydratedAnime.anime.stopSync.shikimori))



  async function save() {
    try {
      // TODO: Check if something changed, if not set status noChanges

      setSaveStatus('saving')

      await new Promise(res => setTimeout(() => {
        res(1)
      }, 3000))

      setSaveStatus('saved')
      NotifySuccess({ title: 'Збережено!', message: 'Контент оновлено' })
    } catch (e) {
      HandleClientError(e)
      setSaveStatus('error')
    } finally {
      setTimeout(() => {
        setSaveStatus('default')
      }, 5000);
    }
  }

  async function remove() {
    try {
      // TODO: Issue key

      const key = prompt(`The key has been issued:`)
      if (!key) return NotifyError({ title: 'Не авторизовано', message: 'Запит на видалення відхилено' })

      // TODO: Delete
      // TODO: Redirect home
    } catch (e) {
      HandleClientError(e)
    }
  }

  async function copyText(text: string) {
    copyToClipboard(text)
    NotifySuccess({ title: 'Скопійовано!', message: `Текст скопійовано в буфер обміну - ${text}` })
  }



  return <>
    <div className="flex gap-[32px]">
      {/* Poster */}
      <section className="flex flex-col gap-[16px] w-[500px] flex-shrink-0">
        <MetaPoster hydratedAnime={hydratedAnime} capabilities={capabilities} />

        <div className="flex flex-col gap-[4px]">
          {capabilities.canEdit && <MetaSaveButton save={save} saveStatus={saveStatus} />}

          <Link href={`${config.URL.baseURL}${routes.watch_title.path}/${hydratedAnime.anime.slug}`} className="ui-button patcher-button">
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
      <section className="flex flex-col gap-[16px] max-w-[800px] w-full">
        <PatcherField state={nameUkr} stateSetter={setNameUkr} title="Назва Українською" disabled={!capabilities.canEdit} symbolsLimited={256} />
        <PatcherField state={nameEng} stateSetter={setNameEng} title="Назва Англійською" disabled={!capabilities.canEdit} symbolsLimited={256} />
        <PatcherField state={nameAlt} stateSetter={setNameAlt} fieldType="textarea" title="Альтернативні назви" note="(Японська..., через кому)" disabled={!capabilities.canEdit} symbolsLimited={256} />
        <PatcherField state={malId} stateSetter={setMalId} title="MyAnimeList ID" disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={scoreImdb} stateSetter={setScoreImdb} title="Рейтинг IMDB" note="(0 - 10)" disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={scoreMal} stateSetter={setScoreMal} title="Рейтинг MyAnimeList" note="(0 - 10)" autosync disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={scoredByMal} stateSetter={setScoredByMal} title="Кількість рецензій MyAnimeList" autosync disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={episodesCount} stateSetter={setEpisodesCount} title="Кількість епізодів" note="(1 - 9999)" autosync disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={year} stateSetter={setYear} title="Рік виробництва" note={`(2007 - ${getUTC().year + 1})`} autosync disabled={!capabilities.canEdit} type="number" />
        <PatcherField state={studios} stateSetter={setStudios} title="Студії" note="(Через кому)" autosync disabled={!capabilities.canEdit} />
        <PatcherField state={genres} stateSetter={setGenres} title="Жанри" note="(Через кому)" autosync disabled={!capabilities.canEdit} />
      </section>
    </div>

    <section className="w-full flex justify-center items-center gap-[16px] flex-wrap" style={{ rowGap: 8 }}>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.uuid)} title="Скопіювати UUID">UUID: {hydratedAnime.anime.uuid}</p>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.slug)} title="Скопіювати SLUG">SLUG: {hydratedAnime.anime.slug}</p>
      <p className="text-grey-new font-space-grotesk">Created At: {hydratedAnime.anime.malSyncedAt ? new Date(hydratedAnime.anime.malSyncedAt ?? 0).toUTCString() : null}</p>
      <p className="text-grey-new font-space-grotesk">Updated At: {new Date(hydratedAnime.anime.updatedAt ?? 0).toUTCString()}</p>
      <p className="text-grey-new font-space-grotesk">MAL Synced At: {hydratedAnime.anime.malSyncedAt ? new Date(hydratedAnime.anime.malSyncedAt ?? 0).toUTCString() : null}</p>
      <p className="text-grey-new font-space-grotesk">Shikimori Synced At: null</p>
    </section>

    <section className="flex gap-[32px]">
      <div className="flex flex-col gap-[8px] max-w-[800px] w-full shrink-0">
        <PatcherSelect title="Статус" options={ANIME_STATUSES} slug={status} setSlug={setStatus} autosync disabled={!capabilities.canEdit} />
        <PatcherSelect title="Сезон" options={ANIME_SEASONS} slug={season} setSlug={setSeason} autosync disabled={!capabilities.canEdit} />
        <PatcherSelect title="Тип" options={ANIME_MEDIA_TYPES} slug={mediaType} setSlug={setMediaType} autosync disabled={!capabilities.canEdit} />
        <PatcherSelect title="Віковий рейтинг" options={ANIME_RATES} slug={rate} setSlug={setRate} autosync disabled={!capabilities.canEdit} />

        <PatcherCheckbox label="Синхронізація інформації про аніме з MyAnimeList" checked={malSync} setChecked={setMalSync} disabled={!capabilities.canEdit} />
        <PatcherCheckbox label="Синхронізація зображень з Shikimori" checked={shikimoriSync} setChecked={setShikimoriSync} disabled={!capabilities.canEdit} />
      </div>

      <div className="flex flex-col gap-[8px] w-full">
        {/* <div className="flex items-center gap-[8px] w-full">
          <PatcherSelect title="День трансляції" options={ANIME_RATES} slug={rate} setSlug={setRate} autosync disabled={!capabilities.canEdit} />
          <PatcherField state={description} stateSetter={setDescription} title="Час трансляції" note="(HH:MM)" autosync disabled={!capabilities.canEdit} className="w-full" />
        </div> */}

        <PatcherField state={description} stateSetter={setDescription} fieldType="textarea" title="Опис" symbolsLimited={2200} disabled={!capabilities.canEdit} className="w-full" />
        <PatcherField state={details} stateSetter={setDetails} fieldType="textarea" title="Деталі" symbolsLimited={500} disabled={!capabilities.canEdit} className="w-full" />
      </div>
    </section>
  </>
}



const MetaSaveButton: NextPage<MetaSaveButtonProps> = ({ save, saveStatus }) => {
  const [icon, setIcon] = useState<SymbolCodepoints>('cloud_done')
  const [label, setLabel] = useState('ЗБЕРЕГТИ')
  const [isSaving, setIsSaving] = useState(false);



  useEffect(() => {
    setIsSaving(saveStatus === 'saving')

    if (saveStatus === 'default') {
      setIcon('cloud_done')
      setLabel('ЗБЕРЕГТИ')
    }

    if (saveStatus === 'saved') {
      setIcon('cloud_done')
      setLabel('ЗБЕРЕЖЕНО!')
    }

    if (saveStatus === 'saving') {
      setIcon('cloud_done')
      setLabel('ЗБЕРЕЖЕННЯ...')
    }

    if (saveStatus === 'error') {
      setIcon('emergency_home')
      setLabel('ПОМИЛКА')
    }

    if (saveStatus === 'noChanges') {
      setIcon('question_exchange')
      setLabel('відсутні зміни')
    }
  }, [saveStatus])



  return <button className={cn(`ui-button patcher-button`, `patcher-button-saveMeta--${saveStatus}`)} disabled={isSaving} onClick={save}>
    {isSaving && Loader.Ring({ size: 20, color: '#555' })}
    {!isSaving && <MaterialSymbol className="text-white" icon={icon} size={20} />}

    <p className={cn(`patcher-button-saveMeta_text text-white font-manrope uppercase duration-200`)}>{label}</p>
  </button>
}

const MetaPoster: NextPage<PatcherGenerciProps> = ({ hydratedAnime, capabilities }) => {
  const [posterURL, setPosterURL] = useState(hydratedAnime.anime.poster);
  const [isUploading, setIsUploading] = useState(false)
  const [isNekomiPoster, setIsNekomiPoster] = useState(true)

  const fileInputRef = useRef<HTMLInputElement>(null)



  useMemo(() => {
    setIsNekomiPoster(posterURL.includes(config.URL.media))
  }, [posterURL])



  async function uploadPoster() {
    const fileInput = fileInputRef.current
    if (!fileInput || !fileInput.files) return

    const file = fileInput.files[0];

    try {
      setIsUploading(true)

      // TODO: Upload poster
      await new Promise(res => setTimeout(() => {
        res(1)
      }, 3000))

      setPosterURL('https://media.nekomi.club/6826defd-9f64-4508-80a4-c075313b9c6b')
      NotifySuccess({ title: 'Завантажено!', message: 'Новий постер завантажено' })
      setIsUploading(false);
    } catch (e) {
      HandleClientError(e)
      setIsUploading(false);
    }
  }

  function selectFile() {
    const fileInput = fileInputRef.current
    if (!fileInput) return

    fileInput.value = '';
    fileInput.click();
  }



  return <div className="flex flex-col gap-[4px]">
    <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={uploadPoster} />

    <button className={cn(`patcher-poster_wrapper w-full h-[700px] relative`, isUploading && 'patcher-poster_wrapper--uploading')} onClick={selectFile} disabled={isUploading || !capabilities.canEdit}>
      <StyledImage src={posterURL} width="100%" height="100%" imageClassName="rounded-[4px]" priority />

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

    {!isNekomiPoster && <p className="text-orange text-[14px] font-manrope">* Постер не на сервері nekomi</p>}
  </div>
}

export const PatcherCreateNewAnime: NextPage = () => {
  const router = useRouter();

  const [isCreating, setIsCreating] = useState(false)



  async function createNew() {
    try {
      setIsCreating(true)

      // TODO: Create new anime
      await new Promise(res => setTimeout(() => {
        res(1)
      }, 3000))

      NotifySuccess({ title: 'Створено!', message: 'Нове аніме створено, заміняємо сторінку...' })

      // TODO: Push new anime ID
      // router.push(``)
    } catch (e) {
      HandleClientError(e)
      setIsCreating(false)
    }
  }



  return <button className={cn(`ui-button flex items-center gap-[16px] px-[16px] py-[8px] border-none bg-transparent`, isCreating && 'cursor-not-allowed')} onClick={createNew} disabled={isCreating}>
    {isCreating && <Loader.Ring size={20} color="#555" />}
    {!isCreating && <MaterialSymbol icon="add" size={20} className="text-grey-new" />}

    <p className="text-grey-new font-manrope">
      {!isCreating && 'СТВОРИТИ НОВЕ'}
      {isCreating && 'СТВОРЮЄМО...'}
    </p>
  </button>
}

const PatcherLabel: NextPage<PatcherLabelProps> = ({ autosync, disabled, note, title }) => {
  return <div className="flex items-center gap-[8px]">
    {autosync && <Tooltip className="flex items-center" content={`Це поле буде автоматично синхронизовано з MyAnimeList`}><MaterialSymbol className="text-grey-new" icon="sync" size={20} /></Tooltip>}
    {disabled && <MaterialSymbol className="text-grey-new" icon="lock" size={20} />}

    <p className={cn(`text-white font-manrope whitespace-nowrap`, disabled && '!text-grey-new')}>{title}</p>
    {note && <p className="text-grey-new text-[14px] font-manrope">{note}</p>}
  </div>
}

const PatcherField: NextPage<PatcherFieldProps> = ({ title, autosync, disabled, note, ...props }) => {
  return <div className="flex flex-col gap-[8px]">
    <PatcherLabel title={title} autosync={autosync} disabled={disabled} note={note} />

    <UIField disabled={disabled} {...props} />
  </div>
}

const PatcherSelect: NextPage<PatcherSelectProps> = ({ options, title, autosync, note, disabled, setSlug, slug }) => {
  const id = useId().replaceAll(':', '');

  const [isOpen, setIsOpen] = useState(false)



  useEffect(() => {
    setIsOpen(false)
  }, [slug])



  return <div className="flex flex-col gap-[8px] w-full">
    <PatcherLabel title={title} autosync={autosync} disabled={disabled} note={note} />

    <Menu className="w-full" id={id} state={isOpen} stateSetter={setIsOpen} settings={{ align: 'start', animation: 'slide' }} disabled={disabled}>
      <MenuTrigger className={cn(`patcher-button bg-dark-medium border border-dark-light rounded-[4px] w-full !justify-between duration-100 hover:bg-dark-light focus-visible:bg-dark-light`, disabled && 'cursor-not-allowed')} anchor>
        <p className={cn(`text-white font-manrope`, disabled && '!text-grey-new')}>{options[slug].name}</p>

        {!disabled && <MaterialSymbol className="text-grey-new" icon="expand_all" size={16} />}
      </MenuTrigger>

      <MenuWrapper className="w-full bg-dark-primary border border-dark-light rounded-[4px] flex flex-col">
        {Object.keys(options).map((optionSlug) => {
          return <button className={cn(`px-[16px] py-[8px] duration-100 flex items-start hover:bg-dark-light focus-visible:bg-dark-light w-full border-b border-b-dark-light last:border-none`, slug === optionSlug && 'bg-primary')} onClick={() => setSlug(optionSlug)} key={`patcher-select-${id}--${optionSlug}`}>
            <p className="text-white font-manrope">{options[optionSlug].name}</p>
          </button>
        })}
      </MenuWrapper>
    </Menu>
  </div>
}

const PatcherCheckbox: NextPage<PatcherCheckboxProps> = ({ checked, label, setChecked, disabled }) => {
  function toggle() {
    setChecked(!checked)
  }

  return <button className={cn(`flex items-center gap-[8px]`, disabled && 'cursor-not-allowed')} onClick={toggle} disabled={disabled}>
    {disabled && <MaterialSymbol className="text-grey-new" icon="lock" size={20} />}

    <UICheckbox isChecked={checked} setIsChecked={setChecked} disableDefaultToggle />

    <p className={cn(`text-white font-manrope`, disabled && '!text-grey-new')}>{label}</p>
  </button>
}


/** Parse input into string */
function x(input: string | number | null | undefined): string {
  if (input === null || input === undefined) return '';
  if (typeof input === 'number') return String(input);
  if (typeof input === 'string') return input;

  return '';
}