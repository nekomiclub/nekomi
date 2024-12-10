'use client'

import './styles.scss'

import { createContext, memo, useContext, useEffect, useRef, useState } from 'react';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { getUTC } from '~/components/handlers';
import ErrorWrapper from '~/components/UI/ErrorWrapper';
import GroupLabel from '~/components/UI/GroupLabel';
import StyledImage from '~/components/UI/StyledImage';
import { useAppSelector } from '~/hooks/redux';
import { IcoArrow, IcoCan, IcoCheckmark, IcoCross, IcoExternalLink, IcoGhost, IcoNekomiLogo, IcoPlus, IcoUpdate } from '../../../assets/Icons';
import { cn } from '../../../components/Components';
import { $api } from '../../../components/http';
import Tooltip from '../../../components/UI/Tooltip';
import { config, CONSTS } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { AnimeAgeRates, ITitle, ITitleEpisode, ITitleEpisodeMeta, TAnimeAgeRate, TAnimeGenre, TAnimeSeason, TAnimeStatus, TTitleCountry, TTitleType } from '../../../interfaces/ITitle';
import { routes } from '../../../routes';

import { IPatcherSelectOption, PatcherEpisodeGroup, PatcherEpisodeMeta, PatcherField, PatcherSelect } from './Components';
import { PactherStack } from './PatcherStack';



interface IProps {
  totalTitles: number
  totalUpdated: number
  title: ITitle
  dubbers: IDubber[]
  totalDubbers: IDubber[]
  session: string
}

/** Patcher episodes group */
export interface IPatcherEpisodeGroup {
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

interface IPatcherMetaContext {
  title: ITitle
  dubbers: IDubber[]
  session: string
  totalDubbers: IDubber[]

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

export interface IPatcherFieldStatus {
  id: string
  status: TPatcherFieldStatus;
}

type TPatcherFieldStatus = 'errror' | 'pending' | 'saved';
type TMetaSaveStatus = 'default' | 'saved' | 'error' | 'nothing_changed';
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




const TitleMetaSection = memo(function TitleMetaSection() {
  const router = useRouter();

  const MetaCtx = useContext(PatcherMetaContext);
  const { title, session } = MetaCtx
  const { canTitleEdit, canTitleDelete } = MetaCtx.capability

  const [errors, setErrors] = useState<string[]>([])
  const [FieldsStatus, SetFieldsStatus] = useState<IPatcherFieldStatus[]>([])
  const [MetaSaveStatus, SetMetaSaveStatus] = useState<TMetaSaveStatus>('default')
  const [poster, setPoster] = useState(title.poster);
  const [isPosterStored, setIsPosterStored] = useState(poster.includes(CONSTS.Domains.nekomi_media))

  const fileRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)




  const [name_ukr, setNameUkr] = useState(title.names.ukr)
  const [name_eng, setNameEng] = useState(title.names.eng)
  const [status, setStatus] = useState(title.status)
  const [type, setType] = useState(title.type)
  const [rating_imdb, setRatingImdb] = useState(title.rating.IMDB)
  const [age_rate, setAgeRate] = useState(title.ageRate)
  const [episodes_count, setEpisodesCount] = useState(title.episodesCount)
  const [country, setCountry] = useState(title.country)
  const [season, setSeason] = useState(title.season)
  const [year, setYear] = useState(title.year)
  const [description, setDescription] = useState(title.description)
  const [details, setDetails] = useState(title.details)

  const [name_alt, setNameAlt] = useState(title.names.alt.join(', '))
  const [studios, setStudios] = useState(title.studios.join(', '))
  const [genres, setGenres] = useState(title.genres.join(', '))



  /** Prevent unload if some of fields are pending changes */
  useEffect(() => {
    window.addEventListener('beforeunload', e => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const pendingInputs = (wrapper.querySelectorAll('.patcher-field--pending') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>);
      const pendingSelects = (wrapper.querySelectorAll('.patcher-select--pending') as NodeListOf<HTMLButtonElement>);

      if (pendingInputs.length || pendingSelects.length) e.preventDefault();
    })
  }, [])



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

    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');

    const pendingInputs = (wrapper.querySelectorAll('.patcher-field--pending') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>);
    const pendingSelects = (wrapper.querySelectorAll('.patcher-select--pending') as NodeListOf<HTMLButtonElement>);

    const FieldsStatus: IPatcherFieldStatus[] = []
    const patchBody: IPatchTitleBody = {};



    // Parse inputs
    pendingInputs.forEach(el => {
      const wrapper = el.closest('.patcher-field_wrapper')!;
      const key = wrapper.id.replace('patcher-', '');

      if (key === 'name_ukr') {
        patchBody.names = patchBody.names ?? {}
        patchBody.names.ukr = name_ukr;
      }

      if (key === 'name_eng') {
        patchBody.names = patchBody.names ?? {}
        patchBody.names.eng = name_eng;
      }

      if (key === 'name_alt') {
        patchBody.names = patchBody.names ?? {}
        patchBody.names.alt = name_alt.split(',');
      }

      if (key === 'rating_imdb') patchBody.IMDBRating = rating_imdb ?? undefined;
      if (key === 'episodes_count') patchBody.episodesCount = episodes_count ?? undefined;
      if (key === 'year') patchBody.year = year ?? undefined;
      if (key === 'details') patchBody.details = details ?? undefined;
      if (key === 'description') patchBody.description = description ?? undefined;

      if (key === 'studios') patchBody.studios = studios.split(',') ?? undefined;
      if (key === 'genres') patchBody.genres = genres.split(',') as TAnimeGenre[] ?? undefined;

      FieldsStatus.push({
        id: wrapper.id,
        status: 'saved'
      })
    });

    // Parse selects
    pendingSelects.forEach(el => {
      const wrapper = el.closest('.patcher-select_wrapper')!;
      const key = wrapper.id.replace('patcher-', '');

      if (key === 'status') patchBody.status = status;
      if (key === 'type') patchBody.type = type;
      if (key === 'age_rate') patchBody.ageRate = age_rate;
      if (key === 'country') patchBody.country = country;
      if (key === 'season') patchBody.season = season;

      FieldsStatus.push({
        id: wrapper.id,
        status: 'saved'
      })
    });



    try {
      if (!Object.keys(patchBody).length) return SetMetaSaveStatus('nothing_changed');

      await $api.patch(`/title/${title.id}`, patchBody);

      SetFieldsStatus(FieldsStatus);
      SetMetaSaveStatus('saved')
      setErrors([]);

      setTimeout(() => {
        SetFieldsStatus(prev => prev.filter(el => el.status !== 'saved'));
      }, 3000);
    } catch (e) {
      SetMetaSaveStatus('error')

      if (e instanceof AxiosError) {
        appendError(e.response?.data.message || e.response?.data.msg || e.code)
      } else {
        appendError(`Сталась помилка при оновлені інформації про тайтл. Будь ласка, відправ лог консолі браузера в тікет на діскорд сервері`)
      }
    } finally {
      setTimeout(() => {
        SetMetaSaveStatus('default')
      }, 3000);
    }
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }



  return <section className="flex flex-col gap-[16px]" ref={wrapperRef}>
    {errors.length ? <ErrorWrapper errors={errors} id="patcher-meta" /> : <></>}

    {/* Meta section */}
    <div className="flex gap-[32px] max-[1280px]:flex-col">
      {/* Poster */}
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col gap-[8px] items-center">
          <div className={cn(`patcher-poster w-[600px] h-[800px] max-[670px]:w-full max-[670px]:h-[500px]`, canTitleEdit && 'cursor-pointer')} onClick={canTitleEdit ? chooseFile : undefined}>
            {/* Input */}
            <input type="file" accept=".png,.jpg,.webp" ref={fileRef} className="hidden" onClick={e => (e.target as HTMLInputElement).value = ''} onChange={uploadPoster} />

            <StyledImage src={poster} width="100%" height="100%" className="overflow-hidden rounded-[4px]" />

            {canTitleEdit && <button className="patcher-poster_hover w-full h-full bg-dark/[.4] flex flex-col gap-[16px] items-center justify-center duration-200 absolute top-0 left-0 z-[3] opacity-0 invisible pointer-events-none">
              <IcoUpdate width={256} height={256} className="max-[670px]:w-[128px] max-[670px]:h-[128px]" />

              <p className="text-white text-[32px] uppercase font-bold text-center select-none max-[670px]:text-[24px]">ЗАВАНТАЖИТИ <br /> НОВИЙ</p>
            </button>}
          </div>

          {!isPosterStored && <p className="text-orange">* Постер не на сервері nekomi.club</p>}
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[4px]">
            {canTitleEdit && <button className={`patcher-button_action patcher-button_action--save patcher-button_action--${MetaSaveStatus}`} onClick={patchTitleMeta} disabled={!canTitleEdit}>
              {(MetaSaveStatus === 'default' || MetaSaveStatus === 'saved') && <IcoCheckmark width={32} height={32} />}
              {MetaSaveStatus === 'error' && <IcoCross width={32} height={32} />}
              {MetaSaveStatus === 'nothing_changed' && <IcoGhost width={32} height={32} />}

              <p className="text-white uppercase">
                {MetaSaveStatus === 'default' && 'зберегти'}
                {MetaSaveStatus === 'saved' && 'збережено'}
                {MetaSaveStatus === 'error' && 'помилка'}
                {MetaSaveStatus === 'nothing_changed' && 'нічого не змінилось'}
              </p>
            </button>}

            <Link href={`${config.URL.baseURL}${routes.watch_title.path}/${title.code}`} className="patcher-button_action">
              <IcoNekomiLogo width={32} height={32} fill="#fff" />
              <p className="text-white uppercase text-center">тайтл на сайті</p>
            </Link>
          </div>

          {/* Delete title */}
          {canTitleDelete && <button className="patcher-button_action patcher-button_action--delete" disabled={!canTitleDelete} onClick={deleteTitle}>
            <IcoCan width={32} height={32} />
            <p className="text-white uppercase">видалити</p>
          </button>}

          <div className="flex flex-col gap-[4px]">
            <p className="text-lightGrey">ID: {title.id}</p>
            <p className="text-lightGrey">CODE: {title.code}</p>
          </div>
        </div>
      </div>

      {/* Meta fields */}
      <div className="flex flex-col gap-[8px] w-full">
        <PatcherField label="Українська назва" id="patcher-name_ukr" symbolsLimited={256} value={name_ukr} setValue={setNameUkr} FieldsStatus={FieldsStatus} />

        <div className="pl-[16px]">
          <PatcherField label="Англійська" id="patcher-name_eng" symbolsLimited={256} value={name_eng} setValue={setNameEng} FieldsStatus={FieldsStatus} />
          <PatcherField label="Альтернативні" id="patcher-name_alt" note="Через кому" type="textarea" value={name_alt} setValue={setNameAlt} symbolsLimited={256} FieldsStatus={FieldsStatus} />
        </div>

        <PatcherSelect label="Статус" id="patcher-status" options={titleStatusOptions} option={status} setOption={setStatus} FieldsStatus={FieldsStatus} />
        <PatcherSelect label="Тип" id="patcher-type" options={titleTypeOptions} option={type} setOption={setType} FieldsStatus={FieldsStatus} />

        <PatcherField label="Рейтинг IMDb" id="patcher-rating_IMDB" note="1 - 10, 0 - відсутній" type="number" symbolsLimited={4} value={rating_imdb} setValue={setRatingImdb} FieldsStatus={FieldsStatus} />

        <PatcherSelect label="Віковий рейтинг" id="patcher-age_rate" options={titleAgeRateOptions} option={age_rate} setOption={setAgeRate} FieldsStatus={FieldsStatus} />

        <PatcherField label="Епізоди" id="patcher-episodes_count" note="1 - 9999, 0 - відсутні" type="number" symbolsLimited={4} value={episodes_count} setValue={setEpisodesCount} FieldsStatus={FieldsStatus} />
        <PatcherField label="Студії" id="patcher-studios" note="Через кому" symbolsLimited={256} value={studios} setValue={setStudios} FieldsStatus={FieldsStatus} />
        <PatcherField label="Жанри" id="patcher-genres" note="Через кому" symbolsLimited={256} value={genres} setValue={setGenres} FieldsStatus={FieldsStatus} />

        <PatcherSelect label="Країна" id="patcher-country" options={titleCountryOptions} option={country} setOption={setCountry} FieldsStatus={FieldsStatus} />
        <PatcherSelect label="Сезон" id="patcher-season" options={titleSeasonOptions} option={season} setOption={setSeason} FieldsStatus={FieldsStatus} />

        <PatcherField label="Рік" id="patcher-year" note="2007 - 2050" type="number" symbolsLimited={4} value={year} setValue={setYear} FieldsStatus={FieldsStatus} />
      </div>
    </div>

    {/* Textareas */}
    <div className="flex gap-[8px] max-[970px]:flex-col">
      <PatcherField label="Опис" id="patcher-description" locked={!canTitleEdit} symbolsLimited={2200} type="textarea" value={description} setValue={setDescription} FieldsStatus={FieldsStatus} />
      {canTitleEdit && <PatcherField id="patcher-details" label="Деталі" note="Не обов`язково" symbolsLimited={500} type="textarea" value={details} setValue={setDetails} FieldsStatus={FieldsStatus} />}
    </div>
  </section>
})

const EpisodeMetaSection = memo(function EpisodeMetaSection() {
  const MetaCtx = useContext(PatcherMetaContext)
  const { title } = MetaCtx;
  const { canEditEpsMeta } = MetaCtx.capability

  const [errors, setErrors] = useState<string[]>([])
  const [FieldsStatus, SetFieldsStatus] = useState<IPatcherFieldStatus[]>([])

  const [selectedMeta, setSelectedMeta] = useState<ITitleEpisodeMeta | null>(null)
  const [episodesMeta, setEpisodesMeta] = useState(title.episodesMeta);
  const [isFolded, setIsFolded] = useState(true)

  const [parse_url, setParseURL] = useState('')
  const [order, setOrder] = useState(1)
  const [ukr_name, setUkrName] = useState('')
  const [eng_name, setEngName] = useState('')
  const [date_out, setDateOut] = useState('')

  const wrapperRef = useRef<HTMLDivElement>(null)



  // Prevent unloading if meta fields are not empty
  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload)

    function handleUnload(e: Event) {
      if (order !== 1 || ukr_name || eng_name || date_out || parse_url) e.preventDefault();
    }

    return () => {
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [order, ukr_name, eng_name, date_out, parse_url])

  // Handle selected meta
  useEffect(() => {
    if (!selectedMeta) return

    setOrder(selectedMeta.order);
    setUkrName(selectedMeta.names.ukr)
    setEngName(selectedMeta.names.eng)
    setDateOut(getUTC(selectedMeta.dateOut).dateReversed);
  }, [selectedMeta])



  async function addEpisodeMeta() {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');

    if (!date_out.match(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.(\d{4})$/gi)) return setStatus('patcher-episodeMetaDateOut', 'errror', 'Дата виходу не може бути порожньою або не відповідати - ДД.ММ.РРРР (09, 10)'); else setStatus('patcher-patcher-episodeMetaDateOut', 'saved')
    if (!order || isNaN(+order)) return setStatus('patcher-episodeMetaOrder', 'errror', 'Номер серії не може містити букви чи бути порожнім'); else setStatus('patcher-episodeMetaOrder', 'saved')
    if (!ukr_name) return setStatus('patcher-episodeMetaUkrName', 'errror', 'Українська назва відсутня'); else setStatus('patcher-episodeMetaUkrName', 'saved')
    if (!eng_name) return setStatus('patcher-episodeMetaEngName', 'errror', 'Англійська назва відсутня'); else setStatus('patcher-episodeMetaEngName', 'saved')

    const date = new Date()
    date.setFullYear(+date_out.split('.')[2], +date_out.split('.')[1] - 1, +date_out.split('.')[0])

    if (date.getUTCFullYear() > 2050 || date.getUTCFullYear() < 2007) return setStatus('patcher-episodeMetaDateOut', 'errror', 'Рік не може бути менше 2007 чи більше 2050'); else setStatus('patcher-episodeMetaDateOut', 'saved')

    const patchBody: ITitleEpisodeMeta = {
      order: +order,
      names: {
        eng: eng_name,
        ukr: ukr_name,
      },
      dateOut: +date,
    }

    try {
      await $api.patch(`/title/${title!.id}`, {
        editEpMeta: {
          ...patchBody,
          action: 'edit'
        }
      })

      setOrder(1)
      setEngName('');
      setUkrName('');
      setDateOut('');

      setEpisodesMeta(prev => [...prev.filter(el => el.order !== +order), patchBody])

      console.log(`[+]: Meta for episode ${+order} added.`)
      setErrors([]);
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при додаванні епізода - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при додаванні епізода - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      setTimeout(() => {
        SetFieldsStatus(prev => [...prev.filter(el => el.status !== 'saved')]);
      }, 3000);
    }
  }

  async function deleteEpisodeMeta(specified?: number) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');
    setErrors([])

    const episode = specified || +order;

    try {
      await $api.patch(`/title/${title!.id}`, {
        editEpMeta: {
          order: episode,
          names: {
            eng: '_NULL',
            ukr: '_NULL'
          },
          dateOut: 1,
          action: 'delete'
        }
      })

      setEpisodesMeta(episodesMeta => [...episodesMeta.filter(el => el.order !== episode)])

      console.log(`[-]: Meta for ${episode} episode deleted.`)
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при видаленні епізоду - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при видаленні епізоду - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }
  }

  async function parseEpisodesMetas() {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');
    setErrors([])

    let url: URL = new URL('https://example.com');

    try {
      url = new URL(parse_url)
    } catch (e) {
      return setStatus('patcher-parseEpisodeMetaURL', 'errror', `Неправильний URL`)
    }

    if (url.host === 'example.com') return;
    if (url.host !== 'www.imdb.com' && url.host !== 'imdb.com') return setStatus('patcher-parseEpisodeMetaURL', 'errror', `Домен не є IMDB`)

    const { href } = url;

    try {
      console.log('[...]: Episodes meta parsing request sended')

      await $api.patch(`/title/${title.id}`, {
        parseIMDBEpisodesMetas: href
      })

      const { data } = await $api.get<{ title: ITitle }>(`/title/${title.id}`, {
        params: {
          detailed: true
        }
      })

      console.log(`[+]: Episodes meta parsed ${data.title.episodesMeta}`)

      setEpisodesMeta(data.title.episodesMeta)
      setErrors([])
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при парсингу інформації про епізоди - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при парсингу інформації про епізоди - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      setTimeout(() => {
        SetFieldsStatus(prev => [...prev.filter(el => el.status !== 'saved')]);
      }, 3000);
    }
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }

  /** Add status to specified field and append error message */
  function setStatus(id: string, status: TPatcherFieldStatus, emsg?: string) {
    if (emsg) appendError(emsg);

    SetFieldsStatus(prev => {
      const curr = prev.filter(el => el.id !== id);
      curr.push({ id, status })

      return curr;
    })
  }



  return canEditEpsMeta && <section className="flex flex-col gap-[16px]" ref={wrapperRef}>
    <GroupLabel label="Інформація про серії" headingClassName="text-[32px]" />
    {errors.length ? <ErrorWrapper errors={errors} id="patcher-episodes-meta" /> : <></>}

    <div className="flex flex-col gap-[24px]">
      <div className="flex flex-col gap-[16px]">
        {/* Parse */}
        <div className="flex items-center gap-[16px]">
          <PatcherField label="Парс епізодів з IMDB" id="patcher-parseEpisodeMetaURL" placeholder="https://www.imdb.com/title/{ID}/episodes" disablePending value={parse_url} setValue={setParseURL} FieldsStatus={FieldsStatus} />

          <button className="p-[12px] bg-grey rounded-[4px] duration-200 hover:bg-purple focus-visible:bg-purple" onClick={parseEpisodesMetas}>
            <IcoUpdate width={32} height={32} />
          </button>
        </div>

        {/* Panel */}
        <form onSubmit={e => { e.preventDefault(); addEpisodeMeta() }} className="flex flex-col gap-[8px]">
          <div className="flex items-start gap-[16px] w-full">
            {/* Order */}
            <div className="w-[100px] shrink-0">
              <PatcherField label="Номер серії" id="patcher-episodeMetaOrder" type="number" disablePending={true} symbolsLimited={4} value={order} setValue={setOrder} FieldsStatus={FieldsStatus} />
            </div>

            <PatcherField label="Українська назва" id="patcher-episodeMetaUkrName" disablePending={true} symbolsLimited={256} value={ukr_name} setValue={setUkrName} FieldsStatus={FieldsStatus} />
          </div>

          <div className="flex items-center gap-[16px] w-full max-[900px]:flex-col">
            <div className="flex items-start gap-[16px] w-full max-[600px]:flex-col">
              <PatcherField label="Англійска назва" id="patcher-episodeMetaEngName" disablePending={true} symbolsLimited={256} value={eng_name} setValue={setEngName} FieldsStatus={FieldsStatus} />

              {/* Out date */}
              <div className="w-[200px] shrink-0 max-[600px]:w-full">
                <PatcherField label="Дата виходу" note="ДД.ММ.РРРР" id="patcher-episodeMetaDateOut" disablePending={true} symbolsLimited={10} value={date_out} setValue={setDateOut} FieldsStatus={FieldsStatus} />
              </div>
            </div>

            {/* Controls */}
            <div className="flex gap-[4px] max-[900px]:w-full">
              <Tooltip content="Зберегти" className="max-[900px]:w-full">
                <button className="flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-green focus-visible:bg-green w-full" onClick={e => { addEpisodeMeta(); e.preventDefault() }}>
                  <IcoUpdate width={32} height={32} />
                </button>
              </Tooltip>

              <Tooltip content="Видалити" className="max-[900px]:w-full">
                <button className="flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-red focus-visible:bg-red w-full" onClick={e => { deleteEpisodeMeta(); e.preventDefault() }}>
                  <IcoCan width={32} height={32} />
                </button>
              </Tooltip>

              <Tooltip content={isFolded ? 'Розгорнути' : 'Згорнути'} className="max-[900px]:w-full">
                <button className="flex justify-center p-[12px] duration-200 bg-grey rounded-[4px] hover:bg-purple focus-visible:bg-purple w-full" onClick={e => { setIsFolded(!isFolded); e.preventDefault() }}>
                  <IcoArrow width={32} height={32} className={`duration-200 ${isFolded ? 'rotate-0' : 'rotate-[180deg]'}`} />
                </button>
              </Tooltip>
            </div>
          </div>
        </form>
      </div>

      {/* Divider */}
      <span className="w-full h-[3px] bg-grey"></span>

      <div className={`flex flex-col gap-[4px] overflow-y-auto overflow-x-hidden duration-200 ${isFolded ? 'max-h-0' : 'max-h-[600px]'}`}>
        {episodesMeta.length ? episodesMeta.sort((a, b) => b.order - a.order).map(meta => {
          return <PatcherEpisodeMeta meta={meta} deleteEpisodeMeta={deleteEpisodeMeta} selectedMeta={selectedMeta} setSelectedMeta={setSelectedMeta} key={`episodeMeta--${meta.order}`} />
        }) : <div className="w-full flex justify-center items-center gap-[16px]">
          <IcoGhost fill="#747474" />
          <p className="text-lightGrey">Здається, тут нічого нема...</p>
        </div>}
      </div>
    </div>
  </section>
})

const EpisodesSection = memo(function EpisodesSection() {
  const MetaCtx = useContext(PatcherMetaContext);
  const { title, session, dubbers, totalDubbers } = MetaCtx;
  const { canSeriesAdd, canSeriesDelete } = MetaCtx.capability;

  const [errors, setErrors] = useState<string[]>([])
  const [FieldsStatus, SetFieldsStatus] = useState<IPatcherFieldStatus[]>([])

  const [episodeGroups, setEpisodeGroups] = useState<IPatcherEpisodeGroup[]>([])
  const [isMobile, setIsMobile] = useState(false);
  const [file, setFile] = useState<File | null>(null)
  const [Stack] = useState(new PactherStack({
    appendError,
    patchEpisode,
    title,
    session
  }))

  const [episodeOrder, setEpisodeOrder] = useState(1);
  const [dubbingSelectedCode, setDubbingSelectedCode] = useState(dubbers.length ? dubbers[0].code : totalDubbers[0].code)

  const wrapperRef = useRef<HTMLDivElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)



  // Setup episode groups & handle is mobile
  useEffect(() => {
    const episodeGroups: IPatcherEpisodeGroup[] = []

    title.episodes.forEach(episode => {
      let group = episodeGroups.find(el => el.dubber?.id === episode.dubberID);
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

        episodeGroups.push(group)
      }
    })

    setEpisodeGroups(episodeGroups);

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
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (!canSeriesAdd) return appendError('Ви не можете додавати епізоди')
    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');
    setErrors([])

    const dubber = totalDubbers.find(el => el.code === dubbingSelectedCode)!;
    const group = {
      ...episodeGroups.find(el => el.dubber.id === dubber.id) ?? {
        dubber,
        episodes: []
      }
    };

    if (!episodeOrder || isNaN(+episodeOrder)) return setStatus('patcher-dubbingOrder', 'errror', 'Номер не може містити букви або бути порожнім'); else setStatus('patcher-dubbingOrder', 'saved')
    if (group.episodes.some(el => el.episode.order === +episodeOrder)) return setStatus('patcher-dubbingOrder', 'errror', 'Епізод вже існує'); else setStatus('patcher-dubbingOrder', 'saved')
    if (!file) return setStatus('patcher-dubbingOrder', 'errror', 'Файл не вибраний'); else setStatus('patcher-dubbingOrder', 'saved')

    const episode: IPatcherEpisode = {
      episode: {
        dubberID: dubber.id,
        frames: [],
        order: +episodeOrder,
        qualities: {
          q1080: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          q240: null,
          q480: null,
          q4k: null,
          q720: null
        }
      },
      file,
      id: `${+episodeOrder}/${dubber.id}`,
      progress: null,
      uploadOrder: null,
      type: 'pending'
    }

    try {
      Stack.append(episode)
      setErrors([]);
    } catch (e) {
      if (e instanceof AxiosError) {
        appendError(`Помилка при додаванні епізоду - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при додаванні епізоду - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    } finally {
      setTimeout(() => {
        SetFieldsStatus(prev => [...prev.filter(el => el.status !== 'saved')]);
      }, 3000);
    }
  }

  async function deleteEpisode(specified: number, specifiedDubberID: string) {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    if (!canSeriesDelete) return appendError('Ви не можете видаляти епізоди')

    if (!canSeriesAdd) return appendError('Ви не можете додавати епізоди')
    if (wrapper.querySelector('.patcher-field--error')) return appendError('Деякі поля містять помилки');
    setErrors([])

    const order = specified;
    const dubberID = specifiedDubberID;
    const id = `${order}/${dubberID}`;

    console.log(`[-]: Episode ${order} in ${totalDubbers.find(el => el.id === dubberID)?.name} deleted`)

    try {
      const group = { ...episodeGroups.find(el => el.dubber.id === dubberID) } as IPatcherEpisodeGroup;
      group.episodes = group.episodes.filter(el => el.id !== id);

      await $api.patch(`/title/${title!.id}`, {
        deleteEpisode: {
          order: order,
          dubberID: dubberID
        }
      })

      Stack.remove(id);
      setEpisodeGroups(prev => {
        return [...prev.filter(el => el.dubber.id !== group.dubber.id), group];
      })
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data?.code === 404) return;
        if (e.response?.data?.code === 503) return;

        appendError(`Помилка при видаленні серії - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        appendError(`Помилка при видаленні серії - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }
  }

  /** Stack will call this function when upload change it's state */
  function patchEpisode(episode: IPatcherEpisode) {
    setEpisodeGroups(prev => {
      const group = {
        ...prev.find(el => el.dubber.id === episode.episode.dubberID) ?? {
          dubber: totalDubbers.find(el => el.id === episode.episode.dubberID)!,
          episodes: []
        }
      } as IPatcherEpisodeGroup;

      group.episodes = [...group.episodes!.filter(el => el.id !== episode.id), episode].sort((a, b) => a.episode.order - b.episode.order)

      return [...prev.filter(el => el.dubber.id !== episode.episode.dubberID), group].sort((a, b) => a.dubber.name > b.dubber.name ? 1 : -1);
    })
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }

  /** Add status to specified field and append error message */
  function setStatus(id: string, status: TPatcherFieldStatus, emsg?: string) {
    if (emsg) appendError(emsg);

    SetFieldsStatus(prev => {
      const curr = prev.filter(el => el.id !== id);
      curr.push({ id, status })

      return curr;
    })
  }



  return <section className="flex flex-col gap-[32px]" ref={wrapperRef}>
    {/* Controls */}
    <div className="flex flex-col gap-[16px] w-full">
      <GroupLabel label="Озвучення" headingClassName="text-[32px]" />
      {errors.length ? <ErrorWrapper errors={errors} id="patcher-dubbing" /> : <></>}

      {canSeriesAdd && <div className="flex items-center gap-[16px] w-full">
        {isMobile && <div className="flex flex-col gap-[16px] w-full items-center">
          <IcoGhost width={32} height={32} fill="#747474" />
          <p className="text-lightGrey">Нажаль, ви не можете додавати епізоди на телефоні</p>
        </div>}

        {!isMobile && <>
          <div className="flex items-start gap-[16px] w-full">
            {/* Order */}
            <div className="w-[100px] shrink-0">
              <PatcherField label="Номер серії" id="patcher-dubbingOrder" type="number" symbolsLimited={4} disablePending value={episodeOrder} setValue={setEpisodeOrder} FieldsStatus={FieldsStatus} />
            </div>

            {/* Select dubber */}
            <div className="w-[300px] shrink-0">
              <PatcherSelect label="Команда" id="patcher-dubbingSelectDubber" options={totalDubbers.sort((a, b) => a.name > b.name ? 1 : -1).map(dub => { return { code: dub.code, label: dub.name } })} option={dubbingSelectedCode} setOption={setDubbingSelectedCode} disablePending dubbers={totalDubbers} FieldsStatus={FieldsStatus} />
            </div>

            {/* File select */}
            <div className="w-full flex flex-col gap-[8px] overflow-hidden">
              <p className="text-white">Файл</p>

              <div className="w-full">
                <input type="file" accept=".mp4,.webm,.mov,.mkv,.m4v" className="hidden" ref={fileRef} onChange={selectFile} />

                <button className="patcher-field flex justify-center items-center gap-[16px] duration-200 hover:bg-purple focus-visible:bg-purple !py-[9px] w-full" onClick={chooseFile}>
                  <IcoUpdate width={24} height={24} className="shrink-0" />
                  <p className={cn(`text-white break-all w-full line-clamp-2 text-ellipsis ${!file?.name && 'uppercase'}`)}>{file?.name ?? 'виберіть файл'}</p>
                </button>
              </div>
            </div>
          </div>

          <Tooltip content="Додати серію" className="block shrink-0">
            <button className="p-[8px] bg-grey rounded-[4px] duration-200 hover:bg-green focus-visible:bg-green w-full" onClick={addEpisode}>
              <IcoArrow width={32} height={32} className="-rotate-[90deg]" />
            </button>
          </Tooltip>
        </>}
      </div>}
    </div>

    {/* Groups */}
    {episodeGroups.some(el => el.dubber.code === dubbingSelectedCode) ? <>
      <PatcherEpisodeGroup group={{ ...episodeGroups.find(el => el.dubber?.code === dubbingSelectedCode)! }} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${dubbingSelectedCode}`} dubbingSelectedCode={dubbingSelectedCode} />

      {episodeGroups.filter(el => el.dubber?.code !== dubbingSelectedCode).map(group => {
        return <PatcherEpisodeGroup group={group} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${group.dubber?.id}`} dubbingSelectedCode={dubbingSelectedCode} />
      })}</> : <>
      {episodeGroups.map(group => {
        return <PatcherEpisodeGroup group={group} deleteEpisode={deleteEpisode} key={`patcher-episodeGroup--${group.dubber?.id}`} dubbingSelectedCode={dubbingSelectedCode} />
      })}</>}
  </section>
})



const Patcher: NextPage<IProps> = ({ totalTitles, totalUpdated, dubbers, title, totalDubbers, session }) => {
  const user = useAppSelector(state => state.user);
  const router = useRouter();

  const { capabilities } = user;

  const isRoot = capabilities.includes('root');
  const canTitleDelete = isRoot || capabilities.includes('titleDelete');
  const canTitleAdd = isRoot || capabilities.includes('titleAdd');
  const canEditEpsMeta = isRoot || capabilities.includes('titleEditEpsMeta');
  const canSeriesAdd = isRoot || capabilities.includes('seriesAdd');
  const canSeriesDelete = isRoot || capabilities.includes('seriesDelete');
  const canTitleEdit = isRoot || capabilities.includes('titleEdit');



  async function createNewTitle() {
    if (!canTitleAdd) return console.error(`You can not add title`);

    try {
      console.log('[+]: New title created')

      const { data } = await $api.post<{ id: string }>('/title');

      router.push(`${config.URL.baseURL}${routes.patcher_title.path}/${data.id}`)
    } catch (e) {
      console.error(e)
    }

  }



  return <PatcherMetaContext.Provider value={{
    title,
    dubbers,
    session,
    totalDubbers,
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
    <div className="w-full h-full min-h-screen bg-dark">
      <div className="wrapper !pt-[132px] !pb-[60px] flex flex-col gap-[24px]">
        {/* Header */}
        <div className="flex flex-col gap-[8px] max-[784px]:gap-[24px]">
          <div className="flex items-center gap-[32px] max-[784px]:flex-col max-[784px]:gap-[8px]">
            <h2 className="text-white text-[32px] uppercase font-bold max-[1072px]:text-[24px]">патчер тайтлів</h2>

            {/* Divider */}
            <span className="w-[200px] h-[3px] bg-grey max-[1072px]:w-[80px] max-[784px]:hidden"></span>

            <p className="text-white text-[24px]">Вітаю, <b>{user.username}</b></p>
          </div>

          <div className="flex items-center gap-[16px] max-[784px]:flex-col-reverse">
            {canTitleAdd && <button className="flex items-center px-[16px] py-[8px] rounded-[2px] bg-grey duration-200 hover:bg-purple focus-visible:bg-purple gap-[16px] shrink-0" onClick={createNewTitle}>
              <IcoPlus width={24} height={24} />
              <p className="text-white uppercase">створити новий</p>
            </button>}

            {/* Divider */}
            <span className="w-full h-[3px] bg-grey"></span>

            <p className="text-lightGrey shrink-0">Оновлено тайтлів: {totalUpdated} / {totalTitles} ({((totalUpdated / totalTitles) * 100).toFixed(2)}%)</p>
          </div>

          {canTitleEdit && <div className="w-full flex justify-center items-center gap-[16px] flex-wrap">
            <IcoExternalLink width={32} height={32} fill="#FF464E" />

            <Link href={`https://www.imdb.com/find/?s=tt&q=${title.names.eng}`} target="_blank">
              <p className="text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple">IMDB</p>
            </Link>

            <Link href={`https://animego.org/search/all?q=${title.names.eng}`} target="_blank">
              <p className="text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple">AnimeGO</p>
            </Link>

            <Link href={`https://anitube.in.ua/anime`} target="_blank">
              <p className="text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple">Anitube</p>
            </Link>

            <Link href={`https://myanimelist.net/search/all?q=${title.names.eng}`} target="_blank">
              <p className="text-white text-[24px] font-bold duration-200 hover:text-purple focus-visible:text-purple">MAL</p>
            </Link>
          </div>}
        </div>

        <div className="bg-darkGrey rounded-[4px] px-[32px] py-[40px] flex flex-col gap-[60px]">
          <TitleMetaSection />
          <EpisodeMetaSection />
          <EpisodesSection />
        </div>
      </div>
    </div>
  </PatcherMetaContext.Provider>
}

export default Patcher;