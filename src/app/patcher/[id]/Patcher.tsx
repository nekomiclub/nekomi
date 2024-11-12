'use client'


import Link from 'next/link';
import gsap from 'gsap';
import { AxiosError } from 'axios';
import { Menu, MenuItem, MenuList } from 'uvc-menu';
import { NextPage } from 'next';
import { createContext, memo, useContext, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import Tooltip from '../../../components/Tooltip';
import { $api } from '../../../components/http';
import { AnimeAgeRates, ITitle, ITitleEpisode, ITitleEpisodeMeta, TAnimeAgeRate, TAnimeGenre, TAnimeSeason, TAnimeStatus, TTitleCountry, TTitleType } from '../../../interfaces/ITitle';
import { CONSTS, config, prodMode } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { IUser } from '../../../interfaces/IUser';
import { IcoArrow, IcoCan, IcoCheckmark, IcoCross, IcoExternalLink, IcoGhost, IcoLock, IcoNekomiLogo, IcoPlay, IcoPlus, IcoUpdate } from '../../../assets/Icons';
import { LoadingImage, cn } from '../../../components/Components';
import { TRoleCapability } from '../../../interfaces/IRoles';
import { getUTC, wordDeclination } from '../../../components/handlers';
import { routes } from '../../../routes';

import { IPatcherSelectOption, PatcherErrorWrapper, PatcherField, PatcherSelect } from './Components';
import { PactherStack } from './PatcherStack';

import './styles.scss'



interface IProps {
  totalTitles: number
  totalUpdated: number
  title: ITitle
  dubbers: IDubber[]
  user: IUser
  capabilities: TRoleCapability[]
  totalDubbers: IDubber[]
  session: string
}

interface IFieldProps {
  label: string
  type: 'title' | 'meta' | 'metaParse' | 'episode'
  /** Will add "patcher-" prefix */
  id: TFieldID
  initialValue?: string
  /** Small text near label */
  note?: string
  isLarge?: boolean
  symbolsLimited?: number
  isLocked?: boolean
  placeholder?: string
  disablePending?: boolean
  /** Out useState value. Out value will sync inner & set it like initial value */
  outValue?: string
  outValueSetter?: (value: string) => void
}

/** Patcher episodes group */
export interface IPatcherEpisodesGroup {
  dubber: IDubber,
  episodes: IPatcherEpisode[]
}

/** Patcher episode */
export interface IPatcherEpisode {
  id: string
  episode: ITitleEpisode
  type: TEpisodeType
  progress: number | null
  file: File | null
  uploadOrder: number | null
}

interface ISelectOption<T = any> {
  label: string
  code: T
}

interface ISelectProps {
  label: string
  value: any
  valueSetter: (value: any) => void
  options: ISelectOption[]
  disablePending?: boolean
  isDubbers?: boolean
  dubbers?: IDubber[]
  isLocked?: boolean
}

interface IHeaderSectionProps {
  title: ITitle
  session: string
}

interface IEpisodesMetaSection {
  title: ITitle
}

interface IEpisodesSection {
  title: ITitle
  dubbers: IDubber[]
  totalDubbers: IDubber[]
  session: string
}

interface IPatcherMetaContext {
  meta: {
    /** @readonly */
    id: string
    /** @readonly */
    code: string

    nameUkr: string
    nameEng: string
    nameAlt: string
    posterURL: string
    IMDBRating: number
    description: string
    status: TAnimeStatus
    episodesCount: number
    genres: string
    ageRate: TAnimeAgeRate
    season: TAnimeSeason
    type: TTitleType
    year: number
    studios: string
    country: TTitleCountry
    details: string
  }
  capability: {
    isRoot: boolean
    canTitleDelete: boolean
    canTitleAdd: boolean
    canEditEpsMeta: boolean
    canSeriesAdd: boolean
    canSeriesDelete: boolean
    canTitleEdit: boolean
  }
}

interface IPatchTitleBody {
  names?: {
    eng?: string
    ukr?: string
    alt?: string[]
  }
  ageRate?: TAnimeAgeRate
  country?: TTitleCountry
  description?: string
  details?: string
  genres?: TAnimeGenre[]
  season?: TAnimeSeason
  status?: TAnimeStatus
  studios?: string[]
  type?: TTitleType
  year?: number
  episodesCount?: number
  IMDBRating?: number
  AnimeeRating?: number

  editEpMeta?: IChangeEpMeta
  parseIMDBEpisodesMeta?: string
}

export interface IChangeEpMeta extends ITitleEpisodeMeta {
  action: 'edit' | 'delete'
}

export interface IFieldStatus {
  id: TPatcherMetaKey
  status: 'errror' | 'pending' | 'saved';
}

export type TPatcherMetaKey = keyof IPatcherMetaContext['meta']

type TSaveStatus = 'save' | 'saved' | 'saveError' | 'nothingChanged';
type TFieldID = 'ukrName' | 'engName' | 'altNames' | 'imdbRating' | 'description' | 'details' | 'year' | 'episodesCount' | 'studios' | 'metaImdbParse' | 'metaOrder' | 'metaEngName' | 'metaUkrName' | 'metaDateOut' | 'epOrder' | 'genres';
export type TEpisodeType = 'uploaded' | 'uploading' | 'pending';


// @ts-expect-error Need an empty object
export const PatcherMetaContext = createContext<IPatcherMetaContext>({})



const titleStatusOptions: IPatcherSelectOption<TAnimeStatus>[] = [{
  code: 'announcement',
  label: 'Анонс'
}, {
  code: 'delayed',
  label: 'Відкладений'
}, {
  code: 'ongoing',
  label: 'Онґоїнг'
}, {
  code: 'out',
  label: 'Вийшов'
}]

const titleTypeOptions: IPatcherSelectOption<TTitleType>[] = [{
  code: 'ONA',
  label: 'ОНА'
}, {
  code: 'OVA',
  label: 'ОВА'
}, {
  code: 'film',
  label: 'Фільм'
}, {
  code: 'serial',
  label: 'Серіал'
}, {
  code: 'special',
  label: 'Спешл'
}]

const titleCountryOptions: IPatcherSelectOption<TTitleCountry>[] = [{
  code: 'China',
  label: 'Китай'
}, {
  code: 'Japan',
  label: 'Японія'
}, {
  code: 'South Corea',
  label: 'Південна Корея'
}, {
  code: 'Other',
  label: 'Інша'
}]

const titleSeasonOptions: IPatcherSelectOption<TAnimeSeason>[] = [{
  code: 'autumn',
  label: 'Осінь'
}, {
  code: 'spring',
  label: 'Весна'
}, {
  code: 'summer',
  label: 'Літо'
}, {
  code: 'winter',
  label: 'Зима'
}]

const titleAgeRateOptions: IPatcherSelectOption<TAnimeAgeRate>[] = AnimeAgeRates.map(rate => {
  return {
    code: rate,
    label: rate
  }
})



const Field = memo(function Field({ isLarge, label, note, symbolsLimited, initialValue, id, isLocked, type, placeholder, disablePending, outValue, outValueSetter }: IFieldProps) {
  const [value, setValue] = useState(initialValue || '')
  const [currentValue, setCurrentValue] = useState(initialValue) // Like initial
  const [isPending, setIsPending] = useState(false)
  const [isError, setIsError] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const prevValue = useRef(currentValue)

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      textarea.style.height = `${textarea.offsetHeight + 5}px`;
    }
  }, [])

  useEffect(() => {
    const textarea = textareaRef.current;
    const input = inputRef.current;

    if (input) {
      if (input.classList.contains('patcher-field--saved')) {
        setCurrentValue(prevValue.current)
        input.classList.remove('patcher-field--saved')
      }
    }

    if (value !== currentValue && !disablePending) {
      setIsPending(true)
    } else {
      setIsPending(false)
    }

    if (symbolsLimited) {
      if (value.length > symbolsLimited) {
        setIsError(true)
      } else {
        setIsError(false)
      }
    }

    if (textarea) {
      gsap.to(textarea, {
        duration: .2,
        height: `${textarea.scrollHeight}px`
      })
    }

    if (outValueSetter) outValueSetter(value);
    prevValue.current = value;
  }, [value, currentValue])

  // Sync out value with inner
  useEffect(() => {
    if (!outValue) return

    setValue(outValue)
    setCurrentValue(outValue)
  }, [outValue])

  return (
    <div className='flex flex-col gap-[8px] w-full'>
      <div className='flex items-end gap-[8px]'>
        <div className='flex items-center gap-[4px]'>
          {isLocked && <IcoLock fill='#747474' width={16} height={16} />}

          <p className={`${isLocked ? 'text-lightGrey' : 'text-white'}`}>{label}</p>
        </div>

        {note && <p className='text-lightGrey text-[12px]'>({note})</p>}
      </div>

      {isLarge
        ? <textarea value={value} onChange={e => setValue(e.target.value)} className={`patcher-field ${isError ? 'patcher-field--error' : ''} ${isPending ? 'patcher-field--pending' : ''} ${isLocked ? 'patcher-field--locked' : ''}  patcher-${type} min-h-[120px]`} id={`patcher-${id}`} disabled={isLocked} placeholder={placeholder || '...'} autoComplete='off' ref={textareaRef} />
        : <input type='text' value={value} onChange={e => setValue(e.target.value)} className={`patcher-field ${isError ? 'patcher-field--error' : ''} ${isPending ? 'patcher-field--pending' : ''} ${isLocked ? 'patcher-field--locked' : ''} patcher-${type} `} id={`patcher-${id}`} disabled={isLocked} placeholder={placeholder || '...'} autoComplete='off' ref={inputRef} />
      }

      {symbolsLimited && <p className='text-lightGrey text-[12px] w-full text-end'>{value.length} / {symbolsLimited}</p>}
    </div>
  )
})

const Label = memo(function Label({ label }: { label: string }) {
  return <div className='flex items-center gap-[16px]'>
    <h3 className='text-white text-[32px] font-bold shrink-0 max-[820px]:text-[24px]'>{label}</h3>

    <span className='w-full h-[3px] bg-grey'></span>
  </div>
})

const Select = memo(function Select({ options, value, valueSetter, label, disablePending, isDubbers, dubbers, isLocked }: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const initialValue = useRef(value);

  return <div className='flex flex-col gap-[8px] !w-full'>
    <div className='flex items-center gap-[8px]'>
      {isLocked && <IcoLock width={16} height={16} fill='#747474' className={isLocked ? 'block' : 'hidden'} />}
      <p className={`${isLocked ? 'text-lightGrey' : 'text-white'}`}>{label}</p>
    </div>

    <Menu trigger={<div className={`px-[16px] py-[4px] bg-grey rounded-[2px] flex items-center gap-[16px] justify-between !w-full border ${!disablePending && initialValue.current !== value ? 'border-gradientSecondaryFallback' : 'border-grey'}`}>
      {isDubbers && dubbers && <LoadingImage src={dubbers.find(el => el.code === value)!.thumbURL!} width='24px' height='24px' parentClassName='overflow-hidden rounded-[32px]' />}

      <p className={`${isLocked ? 'text-lightGrey' : 'text-white'}`}>{options.find(el => el.code === value)?.label}</p>

      <IcoArrow className={`duration-200 ${isOpen ? 'rotate-[180deg]' : 'rotate-[0def]'}`} fill={`${isLocked ? '#747474' : '#fff'}`} />
    </div>} menuClassName='!w-full' triggerClassName='!w-full' align='stretch' className='!w-full' animation='slide' closeAfter='any' state={isOpen} stateSetter={setIsOpen} statePriority='outer' disabled={isLocked}>
      <MenuList className='bg-grey w-full max-h-[50vh] overflow-x-hidden overflow-y-auto'>
        {options.map(option => {
          return <MenuItem key={`select-option--${option.code}`} onClick={() => valueSetter(option.code)}>
            <button className={`px-[8px] py-[6px] ${value === option.code ? 'bg-purple' : !disablePending && option.code === initialValue.current ? 'bg-gradientSecondaryFallback' : ''} duration-200 hover:bg-purple focus-visible:bg-purple w-full flex items-center ${isDubbers ? 'justify-start' : 'justify-center'} gap-[16px]`}>
              {isDubbers && dubbers && <LoadingImage src={dubbers.find(el => el.code === option.code)!.thumbURL!} width='32px' height='32px' parentClassName='overflow-hidden rounded-[32px]' />}

              <p className='text-white'>{option.label}</p>
            </button>
          </MenuItem>
        })}
      </MenuList>
    </Menu>
  </div>
})

const EpisodesGroup = memo(function EpisodesGroup({ group, dubbingSelectedCode, title, deleteEpisode, canSeriesDelete }: { group: IPatcherEpisodesGroup, dubbingSelectedCode: string, title: ITitle, deleteEpisode: (specified: number, dubber: string) => void, canSeriesDelete: boolean }) {
  const isActive = group.dubber.code === dubbingSelectedCode;
  const [isCollapsed, setIsCollapsed] = useState(!isActive)

  const Episode = memo(function Episode({ episode }: { episode: IPatcherEpisode }) {
    let order = 1;
    let progress = 0;
    let source = episode.episode.qualities.q1080;
    let type = episode.type;

    if (episode.type !== 'uploaded') {
      order = episode.uploadOrder || 1
      progress = episode.progress || 0;
      episode.type = episode.type;
      source = episode.episode.qualities.q1080;
    }

    return <div className='px-[24px] py-[16px] flex items-center gap-[16px] rounded-[2px] bg-grey'>
      {/* Order */}
      <p className='text-white text-[24px] font-bold w-[100px] shrink-0'>#{episode.episode.order}</p>

      {/* Content */}
      <div className='flex items-center gap-[16px] w-full'>
        {type === 'uploaded' && <Link href={source} target='_blank' className='flex items-center gap-[16px]'>
          <IcoPlay width={32} height={32} fill='#6C5CE7' />

          <p className='text-purple'>Переглянути</p>
          {episode.file && <p className='text-lightGrey'>Завантажено!</p>}
        </Link>}

        {type === 'pending' && <>
          <IcoUpdate width={32} height={32} fill='#F39C12' />
          <p className='text-white'>В черзі на завантаження</p>
          <p className='text-lightGrey'>{'>'}{order}</p>
        </>}

        {type === 'uploading' && <>
          <IcoUpdate width={32} height={32} fill='#2ECC71' />
          <p className='text-white'>Завантажується...</p>
          <p className='text-lightGrey'>{progress}%</p>
        </>}
      </div>

      {/* Delete */}
      {canSeriesDelete && type !== 'uploading' && <Tooltip content='Видалити'>
        <button className='shrink-0 patcher-episodeMeta' onClick={() => deleteEpisode(episode.episode.order, episode.episode.dubberID)}>
          <IcoCan width={32} height={32} className='patcher-episodeMeta_delete' />
        </button>
      </Tooltip>}
    </div>
  })

  return <div className='flex flex-col gap-[16px]'>
    {/* Label */}
    <div className='flex items-center gap-[16px]'>
      <LoadingImage src={group.dubber.thumbURL} height='32px' width='32px' parentClassName='overflow-hidden rounded-[32px] shrink-0' />

      <h3 className='text-white text-[24px] uppercase shrink-0 font-bold'>{group.dubber.name} ({group.episodes.length} / {title.episodesCount || 0})</h3>

      <span className='w-full h-[3px] bg-grey'></span>

      <Tooltip content={isCollapsed ? 'Розгорнути' : 'Згорунти'}>
        <button className='p-[8px] rounded-[2px] bg-grey duration-200 hover:bg-purple focus-visible:bg-purple' onClick={() => setIsCollapsed(!isCollapsed)}>
          <IcoArrow className={`duration-200 ${isCollapsed ? 'rotate-0' : 'rotate-[180deg]'}`} />
        </button>
      </Tooltip>
    </div>

    {/* Episodes */}
    <div className={`flex flex-col gap-[4px] duration-300 ${isCollapsed ? 'max-h-0' : 'max-h-[600px]'} overflow-x-hidden overflow-y-auto`}>
      {group.episodes.toReversed().map(episode => {
        return <Episode episode={episode} key={`patcher-episodeGroup-${group.dubber.id}--${episode.episode.order}`} />
      })}
    </div>
  </div>
})



const TitleMetaSection = memo(function TitleMetaSection({ title, session }: IHeaderSectionProps) {
  const router = useRouter();
  const MetaCtx = useContext(PatcherMetaContext);

  const [errors, setErrors] = useState<string[]>([])
  const [saveStatus, setSaveStatus] = useState<TSaveStatus>('save')
  const [poster, setPoster] = useState(title.poster);
  const [isPosterStored, setIsPosterStored] = useState(poster.includes(CONSTS.Domains.nekomi_media))
  const [fieldsStatus, setFieldsStatus] = useState<IFieldStatus[]>([])

  const fileRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { canTitleEdit, canTitleDelete } = MetaCtx.capability



  function chooseFile() {
    const input = fileRef.current;

    if (!input) return;

    input.click();
  }

  async function uploadPoster() {
    setErrors([])

    const input = fileRef.current;
    if (!input || !input.files) return;

    const file = input.files[0];
    if (file.size >= config.vars.PATCHER_POSTER_MAX_SIZE) {
      return appendError('Файл занадто великий (>2MB)');
    };

    try {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('type', 'change_poster');

      const { data } = await $api.patch<{ posterURL: string }>(`${config.URL.apiProxy}/title/${title.id}`, formData, {
        headers: {
          Authorization: session
        }
      })

      setPoster(data.posterURL);
      setIsPosterStored(true);

      console.log(`[+]: Poster uploaded`)
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при оновленні постера - ${e.code}; ${JSON.stringify(e.response?.data.message || e.response?.data.msg)}`)
      } else {
        appendError(`Помилка при оновленні постера. Будь ласка, відправте лог консолі браузера в тікет на діскорд сервері`)
      }
    }
  }

  async function deleteTitle() {
    setErrors([])

    if (confirm('Видалити тайтл?')) {
      const key = prompt('ENTER ISSUED KEY')

      try {
        await $api.delete(`/title/${title.id}`, {
          params: {
            key
          }
        })

        router.refresh();
      } catch (e) {
        if (e instanceof AxiosError) {
          appendError(`Помилка видалення тайтлу - ${e.response?.data?.message || e.response?.data?.msg}`)
        } else {
          appendError(`Помилка видалення тайтлу. Будь ласка, відправте лог консолі браузера в тікет на діскорд сервері`)
        }
      }
    } else {
      console.log('[+]: Title delete aborted')
    }
  }

  async function patchTitleMeta() {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    setErrors([]);
    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');

    const pendingInputs = (wrapper.querySelectorAll('.patcher-field--pending') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>);
    const pendingSelects = (wrapper.querySelectorAll('.patcher-select--pending') as NodeListOf<HTMLButtonElement>);

    const fieldsStatus: IFieldStatus[] = []
    const patchBody: IPatchTitleBody = {};

    // Parse inputs
    pendingInputs.forEach(el => {
      const wrapper = el.closest('.patcher-field_wrapper')!;
      const key = wrapper.id.replace('patcher-field--', '') as TPatcherMetaKey;

      const simpleTypes: TPatcherMetaKey[] = ['description', 'details', 'IMDBRating', 'episodesCount', 'year'];
      if (simpleTypes.includes(key)) {
        fieldsStatus.push({ id: key, status: 'saved' })
        patchBody[key] = MetaCtx.meta[key]
      };

      switch (key) {
        case 'nameEng': {
          patchBody.names = patchBody.names || {};
          patchBody.names.eng = MetaCtx.meta.nameEng
          fieldsStatus.push({ id: key, status: 'saved' })
          break
        }

        case 'nameUkr': {
          patchBody.names = patchBody.names || {};
          patchBody.names.ukr = MetaCtx.meta.nameUkr
          fieldsStatus.push({ id: key, status: 'saved' })
          break
        }

        case 'nameAlt': {
          patchBody.names = patchBody.names || {};
          patchBody.names!.alt = MetaCtx.meta.nameAlt.split(',');
          fieldsStatus.push({ id: key, status: 'saved' })
          break
        }

        case 'studios': {
          patchBody.studios = MetaCtx.meta.studios.split(',');
          fieldsStatus.push({ id: key, status: 'saved' })
          break
        }

        case 'genres': {
          patchBody.genres = MetaCtx.meta.genres.split(',').map(el => el.trim().replaceAll(/\s+/gi, ' ')) as TAnimeGenre[];
          fieldsStatus.push({ id: key, status: 'saved' })
          break
        }
      }
    });

    // Parse selects
    pendingSelects.forEach(el => {
      const wrapper = el.closest('.patcher-select_wrapper')!;
      const key = wrapper.id.replace('patcher-select--', '') as TPatcherMetaKey;

      const simpleTypes: TPatcherMetaKey[] = ['ageRate', 'country', 'season', 'status', 'type'];
      if (simpleTypes.includes(key)) {
        fieldsStatus.push({ id: key, status: 'saved' })
        patchBody[key] = MetaCtx.meta[key];
      }
    });



    try {
      if (!Object.keys(patchBody).length) return setSaveStatus('nothingChanged');

      await $api.patch(`/title/${title.id}`, patchBody);

      setFieldsStatus(fieldsStatus)
      setSaveStatus('saved')
    } catch (e) {
      setSaveStatus('saveError')

      if (e instanceof AxiosError) {
        appendError(e.response?.data.message || e.response?.data.msg || e.code)
      } else {
        appendError(`Сталась помилка при оновлені інформації про тайтл. Будь ласка, відправ лог консолі браузера в тікет на діскорд сервері`)
      }
    } finally {
      setTimeout(() => {
        setSaveStatus('save')
      }, 3000);
    }
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }



  return <section className='flex flex-col gap-[16px]' ref={wrapperRef}>
    <PatcherErrorWrapper errors={errors} section='meta' />

    {/* Meta section */}
    <div className='flex gap-[32px] max-[1280px]:flex-col'>
      {/* Poster */}
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[8px] items-center'>
          <div className={cn(`patcher-poster w-[600px] h-[800px] max-[670px]:w-full max-[670px]:h-[500px]`, canTitleEdit && 'cursor-pointer')} onClick={canTitleEdit ? chooseFile : undefined}>
            {/* Input */}
            <input type="file" accept='.png,.jpg,.webp' ref={fileRef} className='hidden' onClick={e => (e.target as HTMLInputElement).value = ''} onChange={uploadPoster} />

            <LoadingImage src={poster} width='100%' height='100%' parentClassName='overflow-hidden rounded-[4px]' />

            {canTitleEdit && <button className='patcher-poster_hover w-full h-full bg-dark/[.4] flex flex-col gap-[16px] items-center justify-center duration-200 absolute top-0 left-0 z-[3] opacity-0 invisible pointer-events-none'>
              <IcoUpdate width={256} height={256} className='max-[670px]:w-[128px] max-[670px]:h-[128px]' />

              <p className='text-white text-[32px] uppercase font-bold text-center select-none max-[670px]:text-[24px]'>ЗАВАНТАЖИТИ <br /> НОВИЙ</p>
            </button>}
          </div>

          {!isPosterStored && <p className='text-orange'>* Постер не на сервері nekomi.club</p>}
        </div>

        <div className='flex flex-col gap-[24px]'>
          <div className='flex flex-col gap-[4px]'>
            {canTitleEdit && <button className={`patcher-button_action patcher-button_action--save patcher-button_action--${saveStatus}`} onClick={patchTitleMeta} disabled={!canTitleEdit}>
              {(saveStatus === 'save' || saveStatus === 'saved') && <IcoCheckmark width={32} height={32} />}
              {saveStatus === 'saveError' && <IcoCross width={32} height={32} />}
              {saveStatus === 'nothingChanged' && <IcoGhost width={32} height={32} />}

              <p className='text-white uppercase'>
                {saveStatus === 'save' && 'зберегти'}
                {saveStatus === 'saved' && 'збережено'}
                {saveStatus === 'saveError' && 'помилка'}
                {saveStatus === 'nothingChanged' && 'нічого не змінилось'}
              </p>
            </button>}

            <Link href={`${config.URL.baseURL}${routes.watch_title.path}/${title.code}`} className='patcher-button_action'>
              <IcoNekomiLogo width={32} height={32} fill='#fff' />
              <p className='text-white uppercase text-center'>тайтл на сайті</p>
            </Link>
          </div>

          {/* Delete title */}
          {canTitleDelete && <button className='patcher-button_action patcher-button_action--delete' disabled={!canTitleDelete} onClick={deleteTitle}>
            <IcoCan width={32} height={32} />
            <p className='text-white uppercase'>видалити</p>
          </button>}

          <div className='flex flex-col gap-[4px]'>
            <p className='text-lightGrey'>ID: {title.id}</p>
            <p className='text-lightGrey'>CODE: {title.code}</p>
          </div>
        </div>
      </div>

      {/* Meta fields */}
      <div className='flex flex-col gap-[8px] w-full'>
        <PatcherField label='Українська назва' id='nameUkr' symbolsLimited={256} fieldsStatus={fieldsStatus} />

        <div className='pl-[16px]'>
          <PatcherField label='Англійська' id='nameEng' symbolsLimited={256} fieldsStatus={fieldsStatus} />
          <PatcherField label='Альтернативні' id='nameAlt' note='Через кому' type='textarea' value={Array.isArray(MetaCtx.meta.nameAlt) ? MetaCtx.meta.nameAlt.join(', ') : MetaCtx.meta.nameAlt} symbolsLimited={256} fieldsStatus={fieldsStatus} />
        </div>

        <PatcherSelect label='Статус' id='status' options={titleStatusOptions} fieldsStatus={fieldsStatus} />
        <PatcherSelect label='Тип' id='type' options={titleTypeOptions} fieldsStatus={fieldsStatus} />

        <PatcherField label='Рейтинг IMDb' id='IMDBRating' note='1 - 10, 0 - відсутній' type='number' symbolsLimited={3} fieldsStatus={fieldsStatus} />

        <PatcherSelect label='Віковий рейтинг' id='ageRate' options={titleAgeRateOptions} fieldsStatus={fieldsStatus} />

        <PatcherField label='Епізоди' id='episodesCount' note='1 - 9999, 0 - відсутні' type='number' symbolsLimited={4} fieldsStatus={fieldsStatus} />
        <PatcherField label='Студії' id='studios' note='Через кому' symbolsLimited={256} fieldsStatus={fieldsStatus} />
        <PatcherField label='Жанри' id='genres' note='Через кому' value={MetaCtx.meta.genres} symbolsLimited={256} fieldsStatus={fieldsStatus} />

        <PatcherSelect label='Країна' id='country' options={titleCountryOptions} fieldsStatus={fieldsStatus} />
        <PatcherSelect label='Сезон' id='season' options={titleSeasonOptions} fieldsStatus={fieldsStatus} />

        <PatcherField label='Рік' id='year' note='2007 - 2050' type='number' symbolsLimited={4} fieldsStatus={fieldsStatus} />
      </div>
    </div>

    {/* Textareas */}
    <div className='flex gap-[8px] max-[970px]:flex-col'>
      <PatcherField id='description' label='Опис' locked={!canTitleEdit} symbolsLimited={2200} type='textarea' fieldsStatus={fieldsStatus} />
      {canTitleEdit && <PatcherField id='details' label='Деталі' note='Не обов`язково' symbolsLimited={500} type='textarea' fieldsStatus={fieldsStatus} />}
    </div>
  </section>
})

const EpisodeMetaSection = memo(function EpisodeMetaSection({ title }: IEpisodesMetaSection) {
  const MetaCtx = useContext(PatcherMetaContext)

  const [errors, setErrors] = useState<string[]>([])

  const [selectedMeta, setSelectedMeta] = useState<ITitleEpisodeMeta | null>(null)
  const [episodesMeta, setEpisodesMeta] = useState(title.episodesMeta);
  const [isFolded, setIsFolded] = useState(true)

  const { isRoot, canEditEpsMeta } = MetaCtx.capability



  async function addEpisodeMeta() {
    // Reset
    const inputs = document.querySelectorAll('.patcher-field.patcher-meta');
    const errors: string[] = []

    inputs.forEach(el => {
      el.classList.remove('patcher-field--saved')
    })

    setErrors([]);

    const order = (document.querySelector(`#patcher-${'metaOrder' as TFieldID}`) as HTMLInputElement);
    const ukrName = (document.querySelector(`#patcher-${'metaUkrName' as TFieldID}`) as HTMLInputElement);
    const engName = (document.querySelector(`#patcher-${'metaEngName' as TFieldID}`) as HTMLInputElement);
    const dateOut = (document.querySelector(`#patcher-${'metaDateOut' as TFieldID}`) as HTMLInputElement);

    if (!order.value || isNaN(+order.value)) rejectField('Номер серії не може містити букви чи бути порожнім', order, errors); else order.classList.remove('patcher-field--error')
    if (!dateOut.value || !dateOut.value.match(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(\d{4})$/gi)) rejectField('Дата виходу не може бути порожнею або не відповідати - ДД.ММ.РРРР (09, 10)', dateOut, errors); else dateOut.classList.remove('patcher-field--error')
    if (!ukrName.value) rejectField('Українська назва відсутня', ukrName, errors); else ukrName.classList.remove('patcher-field--error')
    if (!engName.value) rejectField('Англійська назва відсутня', engName, errors); else engName.classList.remove('patcher-field--error')

    const date = new Date()

    date.setFullYear(+dateOut.value.split('.')[2], +dateOut.value.split('.')[1] - 1, +dateOut.value.split('.')[0])

    if (date.getUTCFullYear() > 2050 || date.getUTCFullYear() < 2007) rejectField('Рік не може бути менше 2007 чи більше 2050', dateOut, errors)

    if (errors.length) {
      return errors.forEach(err => appendError(err));
    }

    const patchBody: ITitleEpisodeMeta = {
      dateOut: +date,
      names: {
        eng: engName.value,
        ukr: ukrName.value,
      },
      order: +order.value
    }

    try {
      await $api.patch(`/title/${title!.id}`, {
        editEpMeta: {
          ...patchBody,
          action: 'edit'
        }
      })

      setEpisodesMeta(episodesMeta => [...episodesMeta.filter(el => el.order !== +order.value), patchBody])

      console.log(`[+]: Meta for episode ${+order.value} added.`)
    } catch (e) {
      if (e instanceof AxiosError) {
        errors.push(`Помилка при додаванні епізода - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        errors.push(`Помилка при додаванні епізода - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }

    if (!errors.length) {
      inputs.forEach(el => {
        el.classList.remove('patcher-field--error')
        el.classList.add('patcher-field--saved')
      })

      setTimeout(() => {
        inputs.forEach(el => {
          el.classList.remove('patcher-field--saved')
        })
      }, 3000);
    }
  }

  async function deleteEpisodeMeta(specified?: number) {
    const order = specified || (document.querySelector(`#patcher-${'metaOrder' as TFieldID}`) as HTMLInputElement).value;

    try {
      await $api.patch(`/title/${title!.id}`, {
        editEpMeta: {
          order,
          names: {
            eng: 'dummy',
            ukr: 'dummy'
          },
          dateOut: 1,
          action: 'delete'
        }
      })

      setEpisodesMeta(episodesMeta => episodesMeta.filter(el => el.order !== order))

      console.log(`[-]: Meta for ${order} episode deleted.`)
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при видаленні епізоду - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при видаленні епізоду - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }
  }

  async function parseEpisodesMetas() {
    // Reset
    const inputs = document.querySelectorAll('.patcher-field.patcher-metaParse');
    const field = document.querySelector(`#patcher-${'metaImdbParse' as TFieldID}`)! as HTMLInputElement;
    const errors: string[] = []

    inputs.forEach(el => {
      el.classList.remove('patcher-field--saved')
    })

    setErrors([]);

    try {
      let url: URL = new URL('https://example.com');

      try {
        url = new URL((document.querySelector(`#patcher-${'metaImdbParse' as TFieldID}`) as HTMLInputElement).value)
      } catch (e) {
        rejectField(`Неправильний URL`, field, errors)
      }

      if (url.host === 'example.com') return;
      if (url.host !== 'www.imdb.com' && url.host !== 'imdb.com') rejectField(`Домен не є IMDB`, field, errors)
      if (errors.length) return;

      const { href } = url;

      inputs.forEach(el => {
        el.classList.add('patcher-field--saved')
        el.classList.remove('patcher-field--error')
      })

      console.log('[+]: Episodes metas parsing request sended')

      await $api.patch(`/title/${title.id}`, {
        parseIMDBEpisodesMetas: href
      })

      const { data } = await $api.get<{ title: ITitle }>(`/title/${title.id}`, {
        params: {
          detailed: true
        }
      })

      setEpisodesMeta(data.title.episodesMeta)

      setTimeout(() => {
        inputs.forEach(el => {
          el.classList.remove('patcher-field--saved')
        })
      }, 3000);
    } catch (e) {
      if (e instanceof AxiosError) {
        errors.push(`Помилка при парсингу інформації про епізоди - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        errors.push(`Помилка при парсингу інформації про епізоди - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      errors.forEach(err => appendError(err))
    }
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }

  function rejectField(emsg: string, el: HTMLElement, errors: string[]) {
    el.classList.add('patcher-field--error')
    errors.push(emsg)
  } const EpisodeMeta = memo(function EpisodeMeta({ meta }: { meta: ITitleEpisodeMeta }) {
    return <div className={`w-full px-[12px] py-[8px] rounded-[4px] flex items-center justify-between gap-[24px] duration-200 ${selectedMeta?.order === meta.order ? 'bg-green/[.2]' : 'bg-grey'} max-[600px]:flex-col`}>
      <div className='flex gap-[16px]'>
        <div className='flex flex-col gap-[4px]'>
          <p className='text-white text-[24px] font-bold max-[880px]:text-[16px]'>#{meta.order}</p>
          <p className='text-lightGrey'>{getUTC(meta.dateOut).dateReversed}</p>
        </div>

        <div className='flex flex-col gap-[4px]'>
          <p className='text-white text-[24px] max-[880px]:text-[16px]'>{meta.names.ukr}</p>
          <p className='text-lightGrey'>{meta.names.eng}</p>
        </div>
      </div>

      <div className='flex gap-[4px]'>
        <Tooltip content='Вибрати'>
          <button className='patcher-episodeMeta p-[8px]' onClick={() => setSelectedMeta(meta)}>
            <IcoPlus width={32} height={32} className='patcher-episodeMeta_select' />
          </button>
        </Tooltip>

        <Tooltip content='Видалити'>
          <button className='patcher-episodeMeta p-[8px]' onClick={() => deleteEpisodeMeta(meta.order)}>
            <IcoCan width={32} height={32} className='patcher-episodeMeta_delete' />
          </button>
        </Tooltip>
      </div>
    </div>
  })



  return canEditEpsMeta && <section className='flex flex-col gap-[16px]'>
    <Label label='Інформація про серії' />

    <PatcherErrorWrapper errors={errors} section='ep_meta' />

    <div className='flex flex-col gap-[24px]'>
      <div className='flex flex-col gap-[16px]'>
        {/* Parse */}
        {isRoot && <div className='flex items-center gap-[16px]'>
          <Field label='Парс епізодів з IMDB' id='metaImdbParse' type='metaParse' placeholder='https://www.imdb.com/title/{ID}/episodes' disablePending />

          <button className='p-[12px] bg-grey rounded-[4px] duration-200 hover:bg-purple focus-visible:bg-purple' onClick={parseEpisodesMetas}>
            <IcoUpdate width={32} height={32} />
          </button>
        </div>}

        {/* Panel */}
        <div className='flex flex-col gap-[8px]'>
          <div className='flex items-start gap-[16px] w-full'>
            {/* Order */}
            <div className='w-[100px] shrink-0'>
              <Field label='Номер серії' id='metaOrder' type='meta' disablePending={!Boolean(selectedMeta)} outValue={selectedMeta ? `${selectedMeta.order}` : undefined} symbolsLimited={4} />
            </div>

            <Field label='Українська назва' id='metaUkrName' type='meta' disablePending={!Boolean(selectedMeta)} outValue={selectedMeta ? selectedMeta.names.ukr : undefined} symbolsLimited={256} />
          </div>

          <div className='flex items-center gap-[16px] w-full max-[900px]:flex-col'>
            <div className='flex items-start gap-[16px] w-full max-[600px]:flex-col'>
              <Field label='Англійска назва' id='metaEngName' type='meta' disablePending={!Boolean(selectedMeta)} outValue={selectedMeta ? selectedMeta.names.eng : undefined} symbolsLimited={256} />

              {/* Out date */}
              <div className='w-[200px] shrink-0 max-[600px]:w-full'>
                <Field label='Дата виходу' note='ДД.ММ.РРРР' id='metaDateOut' type='meta' disablePending={!Boolean(selectedMeta)} outValue={selectedMeta ? getUTC(selectedMeta.dateOut).dateReversed : undefined} symbolsLimited={10} />
              </div>
            </div>

            {/* Controls */}
            <div className='flex gap-[4px] max-[900px]:w-full'>
              <Tooltip content='Зберегти' className='max-[900px]:w-full'>
                <button className='flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-green focus-visible:bg-green w-full' onClick={addEpisodeMeta}>
                  <IcoUpdate width={32} height={32} />
                </button>
              </Tooltip>

              <Tooltip content='Видалити' className='max-[900px]:w-full'>
                <button className='flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-red focus-visible:bg-red w-full' onClick={() => deleteEpisodeMeta()}>
                  <IcoCan width={32} height={32} />
                </button>
              </Tooltip>

              <Tooltip content={isFolded ? 'Розгорнути' : 'Згорнути'} className='max-[900px]:w-full'>
                <button className='flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-purple focus-visible:bg-purple w-full' onClick={() => setIsFolded(!isFolded)}>
                  <IcoArrow width={32} height={32} className={`duration-200 ${isFolded ? 'rotate-0' : 'rotate-[180deg]'}`} />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <span className='w-full h-[3px] bg-grey'></span>

      <div className={`flex flex-col gap-[4px] overflow-y-auto overflow-x-hidden duration-200 ${isFolded ? 'max-h-0' : 'max-h-[600px]'}`}>
        {episodesMeta.length ? episodesMeta.sort((a, b) => b.order - a.order).map(meta => {
          return <EpisodeMeta meta={meta} key={`episodeMeta--${meta.order}`} />
        }) : <div className='w-full flex justify-center items-center gap-[16px]'>
          <IcoGhost fill='#747474' />
          <p className='text-lightGrey'>Здається, тут нічого нема...</p>
        </div>}
      </div>
    </div>
  </section>
})

const EpisodesSection = memo(function EpisodesSection({ dubbers, totalDubbers, title, session }: IEpisodesSection) {
  const MetaCtx = useContext(PatcherMetaContext);
  const [errors, setErrors] = useState<string[]>([])

  const [episodesGroups, setEpisodesGroups] = useState<IPatcherEpisodesGroup[]>([])

  const [isMobile, setIsMobile] = useState(false);
  const [file, setFile] = useState<File | null>(null)
  const [dubbingSelectedCode, setDubbingSelectedCode] = useState(dubbers.length ? dubbers[0].code : totalDubbers[0].code)
  const [uploadsRemain, setUploadsRemain] = useState<null | number>(null) // If null - no uploads have been uploaded
  const [Stack] = useState(new PactherStack({
    appendError,
    patchEpisode,
    title,
    session
  }))

  const fileRef = useRef<HTMLInputElement>(null)

  const { canSeriesAdd, canSeriesDelete } = MetaCtx.capability;



  useEffect(() => {
    const episodesGroups: IPatcherEpisodesGroup[] = []

    title.episodes.forEach(episode => {
      let group = episodesGroups.find(el => el.dubber.id === episode.dubberID);
      const newEpisode: IPatcherEpisode = {
        id: `${episode.order}/${episode.dubberID}`,
        episode,
        type: 'uploaded',
        file: null,
        progress: null,
        uploadOrder: null
      }

      if (group) {
        // Push
        group.episodes.push(newEpisode)
      } else {
        // Create new
        group = {
          dubber: totalDubbers.find(el => el.id === episode.dubberID)!,
          episodes: [newEpisode]
        }

        episodesGroups.push(group)
      }
    })

    setEpisodesGroups(episodesGroups);

    // Define is mobile
    handleResize()

    window.addEventListener('resize', () => {
      handleResize()
    })

    function handleResize() {
      if (window.innerWidth < 940) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [])



  function chooseFile() {
    const input = fileRef.current;

    if (!input) return;

    input.click();
  }

  function selectFile() {
    const input = fileRef.current;

    if (!input) return;

    if (!input.files?.length) {
      setFile(null)
    } else {
      const file = input.files[0];

      if (file.size >= config.vars.PATCHER_FILE_MAX_SIZE) {
        return appendError('Файл занадто великий (>5GB)');
      }

      setFile(file);
    }
  }

  async function addEpisode() {
    // Reset
    const inputs = document.querySelectorAll('.patcher-field.patcher-episode');
    const errors: string[] = []

    inputs.forEach(el => {
      el.classList.remove('patcher-field--saved')
    })

    setErrors([]);

    if (!canSeriesAdd) return appendError('Ви не можете додавати епізоди')

    try {
      const order = document.querySelector(`#patcher-${'epOrder' as TFieldID}`) as HTMLInputElement
      const dubber = totalDubbers.find(el => el.code === dubbingSelectedCode)!;
      const defaultGroup: IPatcherEpisodesGroup = {
        dubber,
        episodes: []
      }
      let group = { ...episodesGroups.find(el => el.dubber.id === dubber.id) || defaultGroup };

      if (!order.value || isNaN(+order.value)) rejectField('Номер не може містити букви або бути порожнім', order, errors); else order.classList.remove('patcher-field--error')
      if (group.episodes.some(el => el.episode.order === +order.value)) rejectField('Епізод вже існує', order, errors)
      if (!file) rejectField('Файл не вибраний', fileRef.current!, errors)

      if (errors.length) return;

      const episode: IPatcherEpisode = {
        episode: {
          dubberID: dubber.id,
          frames: [],
          order: +order.value,
          qualities: {
            q1080: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            q240: null,
            q480: null,
            q4k: null,
            q720: null
          }
        },
        file,
        id: `${+order.value}/${dubber.id}`,
        progress: null,
        uploadOrder: null,
        type: 'pending'
      }

      Stack.append(episode)
    } catch (e) {
      if (e instanceof AxiosError) {
        errors.push(`Помилка при додаванні епізоду - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        errors.push(`Помилка при додаванні епізоду - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      errors.forEach(err => appendError(err));
    }
  }

  async function deleteEpisode(specified?: number, specifiedDubberID?: string) {
    // Reset
    setErrors([]);

    if (!canSeriesDelete) return appendError('Ви не можете видаляти епізоди')

    const order = specified || 1;
    const dubberID = specifiedDubberID || totalDubbers.find(el => el.code === dubbingSelectedCode)!.id;
    const id = `${order}/${dubberID}`;

    console.log(`[-]: Episode ${order} in ${totalDubbers.find(el => el.id === dubberID)?.name} deleted`)

    try {
      const group = { ...episodesGroups.find(el => el.dubber.id === dubberID) } as IPatcherEpisodesGroup;
      group.episodes = group.episodes.filter(el => el.id !== id);

      await $api.patch(`/title/${title!.id}`, {
        deleteEpisode: {
          episodeOrder: order,
          dubID: dubberID
        }
      })

      Stack.remove(id);
      setEpisodesGroups(prev => {
        return [...prev.filter(el => el.dubber.id !== group.dubber.id), group];
      })
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data?.code === 404) return;
        if (e.response?.data?.code === 503) return;

        errors.push(`Помилка при видаленні серії - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        errors.push(`Помилка при видаленні серії - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      errors.forEach(err => appendError(err));
    }
  }

  function patchEpisode(episode: IPatcherEpisode) {
    if (episode.type === 'pending') {
      setUploadsRemain(prev => {
        return prev === null ? 1 : prev + 1;
      })
    } else if (episode.type === 'uploaded') {
      setUploadsRemain(prev => {
        return prev === null ? 1 : prev - 1;
      })
    }

    setEpisodesGroups(prev => {
      const defaultGroup: IPatcherEpisodesGroup = {
        dubber: totalDubbers.find(el => el.id === episode.episode.dubberID)!,
        episodes: []
      }

      const group = { ...prev.find(el => el.dubber.id === episode.episode.dubberID) || defaultGroup } as IPatcherEpisodesGroup;
      group.episodes = [...group.episodes!.filter(el => el.id !== episode.id), episode].sort((a, b) => a.episode.order - b.episode.order)


      return [...prev.filter(el => el.dubber.id !== episode.episode.dubberID), group].sort((a, b) => a.dubber.name > b.dubber.name ? 1 : -1);
    })
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }

  function rejectField(emsg: string, el: HTMLElement, errors: string[]) {
    el.classList.add('patcher-field--error')
    errors.push(emsg)
  } return <section className='flex flex-col gap-[32px]'>
    {/* Controls */}
    <div className='flex flex-col gap-[16px] w-full'>
      <Label label='Озвучення' />

      <PatcherErrorWrapper errors={errors} section='ep_dubbing' />

      {canSeriesAdd && <div className='flex items-center gap-[16px] max-[940px]:flex-col w-full'>
        {isMobile ? <>
          <IcoGhost width={32} height={32} fill='#747474' />
          <p className='text-lightGrey'>Нажаль, ви не можете додавати епізоди на телефоні</p>
        </> : <>
          <div className='flex items-start gap-[16px] w-full'>
            {/* Order */}
            <div className='w-[100px] shrink-0'>
              <Field id='epOrder' label='Номер серії' type='episode' symbolsLimited={4} disablePending initialValue={'1'} />
            </div>

            {/* Select dubber */}
            <div className='w-[300px] shrink-0'>
              <Select label='Команда' options={totalDubbers.sort((a, b) => a.name > b.name ? 1 : -1).map(dub => { return { code: dub.code, label: dub.name } })} value={dubbingSelectedCode} valueSetter={setDubbingSelectedCode} disablePending isDubbers dubbers={totalDubbers} />
            </div>

            {/* File select */}
            <div className='w-full flex flex-col gap-[8px] overflow-hidden'>
              <p className='text-white'>Файл</p>

              <div className='w-full'>
                <input type="file" accept='.mp4,.webm,.mov,.mkv,.m4v' className='hidden' ref={fileRef} onChange={selectFile} />

                <button className='patcher-field flex justify-center items-center gap-[16px] duration-200 hover:bg-purple focus-visible:bg-purple !py-[4px]' onClick={chooseFile}>
                  <IcoUpdate width={32} height={32} />
                  <p className={`text-white ${file?.name ? '' : 'uppercase'}`}>{file?.name || 'виберіть файл'}</p>
                </button>
              </div>
            </div>
          </div>

          <Tooltip content='Додати серію' className='max-[940px]:w-full shrink-0'>
            <button className='p-[8px] bg-grey rounded-[4px] duration-200 hover:bg-green focus-visible:bg-green w-full' onClick={addEpisode}>
              <IcoArrow width={32} height={32} className='-rotate-[90deg]' />
            </button>
          </Tooltip>
        </>}
      </div>}

      {uploadsRemain !== null && uploadsRemain === 0 && <p className='text-green'>Всі епізоди завантажені!</p>}
      {uploadsRemain !== null && uploadsRemain !== 0 && <p className='text-lightGrey'>Очікується завантаження: {uploadsRemain} {wordDeclination(uploadsRemain, ['епізоду', 'епізодів', 'епізодів'])}</p>}
    </div>

    {/* Groups */}
    {episodesGroups.some(el => el.dubber.code === dubbingSelectedCode) ? <>
      <EpisodesGroup group={{ ...episodesGroups.find(el => el.dubber.code === dubbingSelectedCode)! }} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${dubbingSelectedCode}`} dubbingSelectedCode={dubbingSelectedCode} title={title} canSeriesDelete={canSeriesDelete} />

      {episodesGroups.filter(el => el.dubber.code !== dubbingSelectedCode).map(group => {
        return <EpisodesGroup group={group} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${group.dubber.id}`} dubbingSelectedCode={dubbingSelectedCode} title={title} canSeriesDelete={canSeriesDelete} />
      })}</> : <>
      {episodesGroups.map(group => {
        return <EpisodesGroup group={group} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${group.dubber.id}`} dubbingSelectedCode={dubbingSelectedCode} title={title} canSeriesDelete={canSeriesDelete} />
      })}</>}
  </section>
})


const Patcher: NextPage<IProps> = ({ totalTitles, totalUpdated, dubbers, title, user, capabilities, totalDubbers, session }) => {
  const router = useRouter();

  const isRoot = capabilities.includes('root');
  const canTitleDelete = isRoot || capabilities.includes('titleDelete');
  const canTitleAdd = isRoot || capabilities.includes('titleAdd');
  const canEditEpsMeta = isRoot || capabilities.includes('titleEditEpsMeta');
  const canSeriesAdd = isRoot || capabilities.includes('seriesAdd');
  const canSeriesDelete = isRoot || capabilities.includes('seriesDelete');
  const canTitleEdit = isRoot || capabilities.includes('titleEdit');



  // Prevent unloading if some changes are pending 
  useEffect(() => {
    if (prodMode) {
      window.addEventListener('beforeunload', e => {
        if (document.querySelectorAll('.patcher-field--pending').length) e.preventDefault();
      })
    }
  }, [])



  async function createNewTitle() {
    if (!canTitleAdd) return console.error(`You can not add title`);

    try {
      console.log('[+]: New title created')

      const { data } = await $api.post<{ id: string }>('/title');

      router.push(`${config.URL.baseURL}${routes.title_patcher.path}/${data.id}`)
    } catch (e) {
      console.error(e)
    }

  }



  return <PatcherMetaContext.Provider value={{
    meta: {
      id: title.id,
      code: title.code,
      nameUkr: title.names.ukr,
      nameEng: title.names.eng,
      nameAlt: title.names.alt.join(', '),
      posterURL: title.poster,
      IMDBRating: Number(title.rating.IMDB),
      description: title.description,
      status: title.status,
      episodesCount: Number(title.episodesCount),
      genres: title.genres.join(', '),
      ageRate: title.ageRate,
      season: title.season,
      type: title.type,
      year: title.year,
      studios: title.studios.join(', '),
      country: title.country,
      details: String(title.details),
    },
    capability: {
      isRoot,
      canTitleDelete,
      canTitleAdd,
      canEditEpsMeta,
      canSeriesAdd,
      canSeriesDelete,
      canTitleEdit,
    }
  }}>
    <div className='w-full h-full min-h-screen bg-dark'>
      <div className="wrapper !pt-[132px] !pb-[60px] flex flex-col gap-[24px]">
        {/* Header */}
        <div className='flex flex-col gap-[8px] max-[784px]:gap-[24px]'>
          <div className='flex items-center gap-[32px] max-[784px]:flex-col max-[784px]:gap-[8px]'>
            <h2 className='text-white text-[32px] uppercase font-bold max-[1072px]:text-[24px]'>патчер тайтлів</h2>

            {/* Divider */}
            <span className='w-[200px] h-[3px] bg-grey max-[1072px]:w-[80px] max-[784px]:hidden'></span>

            <p className='text-white text-[24px]'>Вітаю, <b>{user.username}</b></p>
          </div>

          <div className='flex items-center gap-[16px] max-[784px]:flex-col-reverse'>
            {canTitleAdd && <button className='flex items-center px-[16px] py-[8px] rounded-[2px] bg-grey duration-200 hover:bg-purple focus-visible:bg-purple gap-[16px] shrink-0' onClick={createNewTitle}>
              <IcoPlus width={24} height={24} />
              <p className='text-white uppercase'>створити новий</p>
            </button>}

            {/* Divider */}
            <span className='w-full h-[3px] bg-grey'></span>

            <p className='text-lightGrey shrink-0'>Оновлено тайтлів: {totalUpdated} / {totalTitles} ({((totalUpdated / totalTitles) * 100).toFixed(2)}%)</p>
          </div>

          {canTitleEdit && <div className='w-full flex justify-center items-center gap-[16px] flex-wrap'>
            <IcoExternalLink width={32} height={32} fill='#FF464E' />

            <Link href={`https://www.imdb.com/find/?s=tt&q=${title.names.eng}`} target='_blank'>
              <p className='text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple'>IMDB</p>
            </Link>

            <Link href={`https://animego.org/search/all?q=${title.names.eng}`} target='_blank'>
              <p className='text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple'>AnimeGO</p>
            </Link>

            <Link href={`https://anitube.in.ua/anime`} target='_blank'>
              <p className='text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple'>Anitube</p>
            </Link>

            <Link href={`https://myanimelist.net/search/all?q=${title.names.eng}`} target='_blank'>
              <p className='text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple'>MAL</p>
            </Link>
          </div>}
        </div>

        {/* Container */}
        <div className='bg-darkGrey rounded-[4px] px-[32px] py-[40px] flex flex-col gap-[60px]'>
          {/* Title meta */}
          <TitleMetaSection title={title} session={session} />

          {/* Episodes metas */}
          <EpisodeMetaSection title={title} />

          {/* Dubbing */}
          <EpisodesSection dubbers={dubbers} title={title} totalDubbers={totalDubbers} session={session} />
        </div>
      </div>
    </div>
  </PatcherMetaContext.Provider>
}

export default Patcher;