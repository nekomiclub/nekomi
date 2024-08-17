'use client'

import './styles.scss'

import Link from 'next/link';
import gsap from 'gsap';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { useAppSelector } from '../../../hooks/redux';
import { ITitle } from '../../../interfaces/ITitle';
import { IDubber } from '../../../interfaces/IDubber';
import { IUser } from '../../../interfaces/IUser';
import { LoadingImage } from '../../../components/Components';
import { memo, useEffect, useRef, useState } from 'react';
import { IcoAnimeeLogo, IcoCan, IcoCross, IcoGhost, IcoLock, IcoUpdate } from '../../../assets/Icons';
import { config } from '../../../config';
import { routes } from '../../../routes';
import { TRoleCapability } from '../../../interfaces/IRoles';
import { DeepPartial } from '../../../interfaces/Interfaces';



interface IProps {
  totalTitles: number
  totalUpdated: number
  isEditor: boolean
  title: ITitle
  dubbers: IDubber[]
  user: IUser
  capabilities: TRoleCapability[]
}

interface IFieldProps {
  label: string
  /** Will add "patcher-" prefix */
  id: TFieldID
  initialValue?: string
  /** Small text near label */
  note?: string
  isLarge?: boolean
  symbolsLimited?: number
  isLocked?: boolean
}

type TSaveStatus = 'save' | 'saved' | 'saveError';
type TFieldID = 'ukrName' | 'engName' | 'imdbRating' | 'description' | 'details' | 'year' | 'episodesCount'




const Field = memo(function Field({ isLarge, label, note, symbolsLimited, initialValue, id, isLocked }: IFieldProps) {
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

    if (value !== currentValue) {
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

    prevValue.current = value;
  }, [value, currentValue])

  return (
    <div className='flex flex-col gap-[8px]'>
      <div className='flex items-end gap-[8px]'>
        <div className='flex items-center gap-[4px]'>
          {isLocked && <IcoLock fill='#747474' width={16} height={16} />}

          <p className={`${isLocked ? 'text-lightGrey' : 'text-white'}`}>{label}</p>
        </div>

        {note && <p className='text-lightGrey text-[12px]'>({note})</p>}
      </div>

      {isLarge
        ? <textarea value={value} onChange={e => setValue(e.target.value)} className={`patcher-field ${isError ? 'patcher-field--error' : ''} ${isPending ? 'patcher-field--pending' : ''} ${isLocked ? 'patcher-field--locked' : ''} min-h-[120px]`} id={`patcher-${id}`} disabled={isLocked} placeholder='...' autoComplete='off' ref={textareaRef} />
        : <input type='text' value={value} onChange={e => setValue(e.target.value)} className={`patcher-field ${isError ? 'patcher-field--error' : ''} ${isPending ? 'patcher-field--pending' : ''} ${isLocked ? 'patcher-field--locked' : ''}`} id={`patcher-${id}`} disabled={isLocked} placeholder='...' autoComplete='off' ref={inputRef} />
      }

      {symbolsLimited && <p className='text-lightGrey text-[12px] w-full text-end'>{value.length} / {symbolsLimited}</p>}
    </div>
  )
})

const Patcher: NextPage<IProps> = ({ isEditor, totalTitles, totalUpdated, dubbers, title, user, capabilities }) => {
  const router = useRouter();

  const isRoot = capabilities.includes('root');
  const canTitleDelete = isRoot || capabilities.includes('titleDelete');
  const canTitleEdit = isRoot || capabilities.includes('titleEdit');

  // const canTitleEdit = false;

  const [saveStatus, setSaveStatus] = useState<TSaveStatus>('save')
  const [poster, setPoster] = useState(title.poster);
  const [errors, setErrors] = useState<string[]>([])
  const [isPosterOnAnimee, setIsPosterOnAnimee] = useState(poster.includes('media.animee.club'))

  const errorWrapperRef = useRef<HTMLDivElement>(null)



  useEffect(() => {
    if (!errors.length) return;

    const errorWrapper = errorWrapperRef.current;

    if (!errorWrapper) return;

    document.documentElement.scrollTo({ top: errorWrapper.offsetTop - (document.querySelector('header')?.offsetHeight || 0) - 32, behavior: 'smooth' })
  }, [errors])



  async function patch() {
    // Reset
    const inputs = document.querySelectorAll('.patcher-field') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>

    inputs.forEach(el => {
      el.classList.remove('patcher-field--error')
      el.classList.remove('patcher-field--saved')
    })

    setErrors([]);



    try {
      let isParsingErrored = false;

      const pending = document.querySelectorAll('.patcher-field--pending') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
      const errored = document.querySelectorAll('.patcher-field--error');
      const patchBody: DeepPartial<ITitle> = {};

      if (errored.length) {
        const emsg = 'Деякі поля містять помилки.';

        appendError(emsg);
        setSaveStatus('saveError');

        return;
      }

      pending.forEach(el => {
        const id = el.id.replace('patcher-', '') as TFieldID;
        const value = el.value;

        if (id === 'ukrName') {
          patchBody.names = patchBody.names || {};
          patchBody.names.ukr = value;
        } else if (id === 'engName') {
          patchBody.names = patchBody.names || {};
          patchBody.names.eng = value;
        } else if (id === 'imdbRating') {
          patchBody.rating = patchBody.rating || {};
          if (validateNaN(value, 'Рейтинг IMDB може містити тільки цифри', el)) return isParsingErrored = true;

          patchBody.rating.IMDB = +value;
        } else if (id === 'episodesCount') {
          if (validateNaN(value, 'Епізоди можуть містити тільки цифри', el)) return isParsingErrored = true;

          patchBody.episodesCount = +value;
        } else if (id === 'year') {
          if (validateNaN(value, 'Рік може містити тільки цифри', el)) return isParsingErrored = true;

          patchBody.year = +value;
        } else if (id === 'description') {
          patchBody.description = value
        } else if (id === 'details') {
          patchBody.details = value
        }

        el.classList.add('patcher-field--saved')
      })

      if (isParsingErrored) {
        setSaveStatus('saveError');
        return;
      }

      console.log(patchBody)

      setSaveStatus('saved')
      // router.refresh();
    } catch (e) {
      console.error(e)

      setSaveStatus('saveError')
    } finally {
      setTimeout(() => {
        setSaveStatus('save')
      }, 3000);
    }
  }

  async function deleteTitle() {
    console.log('delete title')

    router.refresh();
  }

  function appendError(emsg: string) {
    console.error(emsg)
    setErrors(errors => [...errors.filter(el => el !== emsg), emsg])
  }

  /** Check if string is NaN
   * @returns true if value is NaN
   */
  function validateNaN(value: string, emsg?: string, field?: HTMLElement): boolean {
    let result = false;

    if (isNaN(+value)) {
      result = true;
      if (emsg) appendError(emsg);
      if (field) field.classList.add('patcher-field--error')
    }

    return result;
  }



  return (
    <div className='w-full h-full min-h-screen bg-dark'>
      <div className="wrapper !pt-[132px] flex flex-col gap-[24px]">
        {/* Header */}
        <div className='flex flex-col gap-[8px]'>
          <div className='flex items-center gap-[32px]'>
            <h2 className='text-white text-[32px] uppercase font-bold'>патчер тайтлів</h2>

            {/* Divider */}
            <span className='w-[200px] h-[3px] bg-grey'></span>

            <p className='text-white text-[24px]'>Вітаю, <b>{user.username}</b></p>
          </div>

          <div className='flex items-center gap-[16px]'>
            {/* Divider */}
            <span className='w-full h-[3px] bg-grey'></span>

            <p className='text-lightGrey shrink-0'>Оновлено тайтлів: {totalUpdated} / {totalTitles} ({((totalUpdated / totalTitles) * 100).toFixed(2)})</p>
          </div>
        </div>

        {/* Container */}
        <div className='bg-darkGrey rounded-[4px] px-[32px] py-[40px] flex flex-col gap-[60px]'>
          {/* Error */}
          <div className={`px-[16px] py-[8px] rounded-[2px] border border-red bg-red/[.2] flex ${errors.length === 1 ? 'items-center' : ''} gap-[24px] ${!errors.length ? 'hidden' : ''}`} ref={errorWrapperRef}>
            <IcoGhost width={32} height={32} />

            <div className='flex flex-col gap-4px h-fit'>
              {errors.map((el, i) => {
                return <p className='text-white' key={`error--${i}`}>{el}</p>
              })}
            </div>
          </div>

          {/* Head */}
          <div className='flex gap-[32px]'>
            {/* Poster section */}
            <div className='flex flex-col gap-[24px]'>
              {/* Poster */}
              <div className='flex flex-col gap-[8px]'>
                <div className='patcher-poster cursor-pointer'>
                  <LoadingImage src={poster} width='500px' height='700px' parentClassName='overflow-hidden rounded-[4px]' />

                  {canTitleEdit && <div className='patcher-poster_hover w-full h-full bg-dark/[.4] flex flex-col gap-[16px] items-center justify-center duration-200 absolute top-0 left-0 z-[3] opacity-0 invisible pointer-events-none'>
                    <IcoUpdate width={256} height={256} />

                    <p className='text-white text-[32px] uppercase font-bold text-center select-none'>ЗАВАНТАЖИТИ <br /> НОВИЙ</p>
                  </div>}
                </div>

                {!isPosterOnAnimee && <p className='text-orange'>* Постер не на сервері animee.club</p>}
              </div>

              {/* Meta section */}
              <div className='flex flex-col gap-[24px]'>
                <div className='flex flex-col gap-[4px]'>
                  {canTitleEdit && <button className={`patcher-button_action patcher-button_action--save patcher-button_action--${saveStatus}`} onClick={patch} disabled={!canTitleEdit}>
                    {(saveStatus === 'save' || saveStatus === 'saved') && <IcoUpdate width={32} height={32} />}
                    {saveStatus === 'saveError' && <IcoCross width={32} height={32} />}

                    <p className='text-white uppercase'>
                      {saveStatus === 'save' && 'зберегти'}
                      {saveStatus === 'saved' && 'збережено'}
                      {saveStatus === 'saveError' && 'помилка'}
                    </p>
                  </button>}

                  <Link href={`${config.URL.baseURL}/${routes.watch.path}/${title.code}`} className='patcher-button_action'>
                    <IcoAnimeeLogo width={32} height={32} />
                    <p className='text-white uppercase'>тайтл на animee.club</p>
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

            {/* Fields */}
            <div className='flex flex-col gap-[8px] w-full'>
              {/* Ukr name */}
              <Field label='Назва' id='ukrName' initialValue={title.names.ukr} isLocked={!canTitleEdit} symbolsLimited={256} />

              {/* Alt names */}
              <div className='pl-[16px]'>
                <Field label='Англійська' id='engName' initialValue={title.names.eng} isLocked={!canTitleEdit} symbolsLimited={256} />

                {canTitleEdit && <>{/* alt names */}</>}
              </div>

              {/* IMDB rating */}
              <Field label='Рейтинг IMDB' id='imdbRating' note='1 - 10, 0 - Відсутній' initialValue={`${title.rating.IMDB || '0'}`} isLocked={!canTitleEdit} symbolsLimited={3} />

              {/* Description */}
              <Field label='Опис' id='description' isLarge initialValue={title.description} isLocked={!canTitleEdit} symbolsLimited={2200} />

              {/* Episodes count */}
              <Field label='Епізоди' id='episodesCount' note='1 - 9999, 0 - Відсутні' initialValue={`${title.episodesCount || '0'}`} isLocked={!canTitleEdit} symbolsLimited={4} />

              {/* Year */}
              <Field label='Рік' id='year' note='2007 - 2050' initialValue={`${title.year}`} isLocked={!canTitleEdit} symbolsLimited={4} />

              {/* Details */}
              {canTitleEdit && <Field label='Деталі' id='details' note='Не обов`язково' isLarge initialValue={title.details || ''} isLocked={!canTitleEdit} symbolsLimited={500} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patcher;