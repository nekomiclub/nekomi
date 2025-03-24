'use client'

import { useEffect, useMemo, useRef, useState } from 'react';
import * as Loader from '@uiball/loaders'
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { cn, copyToClipboard } from '~/components/Components';
import { HandleClientError } from '~/components/Errors';
import StyledImage from '~/components/StyledImage';
import { NotifyError, NotifySuccess } from '~/components/UI/NotifyToast';
import { config } from '~/config';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
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

type SaveMetaStatusType = 'default' | 'error' | 'saving' | 'saved' | 'noChanges'



export const PatcherMeta: NextPage<PatcherGenerciProps> = ({ hydratedAnime, capabilities }) => {
  const [saveStatus, setSaveStatus] = useState<SaveMetaStatusType>('default')




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
      <section></section>
    </div>

    <section className="w-full flex justify-center items-center gap-[16px] flex-wrap" style={{ rowGap: 8 }}>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.uuid)} title="Скопіювати UUID">UUID: {hydratedAnime.anime.uuid}</p>
      <p className="text-grey-new font-space-grotesk cursor-pointer" onClick={() => copyText(hydratedAnime.anime.slug)} title="Скопіювати SLUG">SLUG: {hydratedAnime.anime.slug}</p>
      <p className="text-grey-new font-space-grotesk">Created At: {hydratedAnime.anime.malSyncedAt ? new Date(hydratedAnime.anime.malSyncedAt ?? 0).toUTCString() : null}</p>
      <p className="text-grey-new font-space-grotesk">Updated At: {new Date(hydratedAnime.anime.updatedAt ?? 0).toUTCString()}</p>
      <p className="text-grey-new font-space-grotesk">MAL Synced At: {hydratedAnime.anime.malSyncedAt ? new Date(hydratedAnime.anime.malSyncedAt ?? 0).toUTCString() : null}</p>
      <p className="text-grey-new font-space-grotesk">Shikimori Synced At: null</p>
    </section>

    <section>

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

export const PatcherCreateNew: NextPage = () => {
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