'use client'

import { useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';

import { IcoClockOutlined } from '~/assets/Clock';
import { HandleClientError } from '~/components/Errors';
import { $api, $upload } from '~/components/http';
import Input from '~/components/UI/Input';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { cn } from '~/utils/utils';
import { IcoArrow, IcoCan, IcoCheckmark, IcoCross, IcoExternalLink, IcoStar, IcoUpdate, IcoUser } from '../../../assets/Icons';




type TActionButtonStatus = 'default' | 'pending' | 'error' | 'success'

export interface IPatcherSelectOption<T = any> {
  label: string
  code: T
}

type TUploadType = 'photo/user/avatar'
  | 'photo/user/banner'
  | 'photo/title/poster'
  | 'photo/raw'
  | 'video/title/episode'
  | 'video/srt'
  | 'video/srt-temp'

const uploadTypesOptions: IPatcherSelectOption<TUploadType>[] = [{
  code: 'photo/title/poster',
  label: 'Постер тайтлу'
}, {
  code: 'photo/user/avatar',
  label: 'Аватар юзера'
}, {
  code: 'photo/user/banner',
  label: 'Баннер юзера'
}, {
  code: 'photo/raw',
  label: 'Фото без обрізання'
}, {
  code: 'video/title/episode',
  label: 'Епізод аніме'
}, {
  code: 'video/srt-temp',
  label: 'Тимчасові субтитри для відео'
}]



export const MediaClient: NextPage = () => {
  const user = useAppSelector(state => state.user)

  const [file, setFile] = useState<File | undefined>(undefined)
  const [isTypeSelectOpen, setIsTypeSelectOpen] = useState(false)
  const [uploadLink, setUploadLink] = useState('');
  const [uploadType, setUploadType] = useState<TUploadType>('photo/user/avatar')
  const [uploadStatus, setUploadStatus] = useState<TActionButtonStatus>('default')

  const [deleteUploadValue, setDeleteUploadValue] = useState('')
  const [deleteUploadErrors, setDeleteUploadErrors] = useState<string[]>([])
  const [deleteStatus, setDeleteStatus] = useState<TActionButtonStatus>('default');


  const fileRef = useRef<HTMLInputElement>(null)



  function chooseFile() {
    const input = fileRef.current;

    if (!input) return;

    input.click();
  }

  function selectFile() {
    const input = fileRef.current;

    if (!input) return;

    if (!input.files?.length) {
      setFile(undefined)
    } else {
      const file = input.files[0];

      setFile(file);
    }
  }

  async function uploadFile() {
    try {
      if (!file) return console.warn(`Prevented submitting due to no file selected`);

      setUploadLink('')
      setUploadStatus('pending')

      console.log('ffsdsfddf')

      const formData = new FormData();

      formData.append('file', file);
      formData.append('type', uploadType);

      const { data } = await $upload.post<{ url: string, srt_id?: string }>(`${config.URL.apiHTTP}/upload`, formData)

      if (uploadType !== 'video/srt-temp') {
        setUploadLink(data.url)
      } else {
        setUploadLink(`${config.URL.media}/${data.srt_id}`);
      }
      setUploadStatus('success')
    } catch (e) {
      HandleClientError(e);
      setUploadStatus('error')
    } finally {
      setTimeout(() => {
        setUploadStatus('default')
      }, 2000);
    }
  }



  async function deleteUploadHandler(e: React.FormEvent) {
    e.preventDefault();

    setDeleteUploadErrors([])
    setDeleteStatus('pending')

    try {
      await $api.delete(`${config.URL.apiHTTP}/upload/${deleteUploadValue}`);

      setDeleteStatus('success')
    } catch (e) {
      HandleClientError(e);
      setDeleteStatus('error')

      if (e instanceof AxiosError) {
        setDeleteUploadErrors([`Сталась HTTP помилка ${e.status} - ${e.response?.data.message || e.response?.data.msg || e.response?.data}`])
      } else {
        setDeleteUploadErrors([`Щось пішло не так... Відправ лог консолі в тікети діскорд сервера (детальніше про тікети можна прочитати на сторінці FAQ)`])
      }
    } finally {
      setTimeout(() => {
        setDeleteStatus('default')
      }, 2000);
    }
  }



  return (
    <div className={`wrapper min-h-screen gap-[40px] pt-[16px] sm:pt-[var(--header-height)]`}>
      <div className="flex flex-col gap-[8px]">
        <div className="w-full h-[200px] flex items-center justify-center gap-[32px] bg-darkGrey p-[32px]">
          <IcoStar fill="#FF464E" width={64} height={64} />

          <h2 className="text-white text-[32px] font-bold uppercase">керування медіа-контентом</h2>
        </div>

        <div className="flex items-center gap-[8px]">
          <IcoUser width={24} height={24} />
          <p className="text-white">Ти увійшов як: <b>@{user.username}</b></p>
        </div>
      </div>

      {/* Upload */}
      <div className="flex flex-col gap-[24px] w-full">
        <GroupLabel label="Завантажити" />

        <div className="flex items-end gap-[8px]">
          <div className="flex flex-col gap-[8px] shrink-0 w-full max-w-[250px]">
            <div className="flex items-center gap-[4px]">
              <p className={cn('text-white')}>Тип завантаження</p>
            </div>

            <Menu className="w-full max-w-[330px]" gap={16} settings={{ align: 'start' }} stateSetter={setIsTypeSelectOpen} id="media-menu-selectType">
              <MenuTrigger className={cn(`patcher-select px-[16px] py-[8px] bg-grey rounded-[2px] flex items-center gap-[16px] justify-between w-full`)} anchor>
                <p className={cn(`select-none text-white line-clamp-1 text-ellipsis`)}>{uploadTypesOptions.find(el => el.code === uploadType)?.label}</p>

                <IcoArrow className={cn(`duration-200`, isTypeSelectOpen && 'rotate-[180deg]')} fill={'#fff'} />
              </MenuTrigger>

              <MenuWrapper className="flex flex-col bg-grey max-h-[50vh] !w-fit overflow-x-hidden overflow-y-auto">
                {uploadTypesOptions.map(el => {
                  return <button className={cn(`px-[16px] py-[6px] duration-200 hover:bg-purple focus-visible:bg-purple w-full flex items-center gap-[16px]`, uploadType === el.code && 'bg-purple')} key={`select-option--${el.code}`} onClick={() => setUploadType(el.code)}>
                    <p className="text-white">{el.label}</p>
                  </button>
                })}
              </MenuWrapper>
            </Menu>
          </div>

          {/* File select */}
          <div className="w-full flex flex-col gap-[8px] overflow-hidden">
            <p className="text-white">Файл</p>

            <div className="w-full">
              <input type="file" className="hidden" ref={fileRef} onChange={selectFile} />

              <button className="patcher-field flex justify-center items-center gap-[16px] bg-grey w-full duration-200 hover:bg-purple focus-visible:bg-purple px-[16px] py-[8px]" onClick={chooseFile}>
                <IcoUpdate width={32} height={32} />
                <p className={`text-white break-words line-clamp-1 text-ellipsis ${file?.name ? '' : 'uppercase'}`}>{file?.name || 'вибери файл'}</p>
              </button>
            </div>
          </div>

          <button className={cn('px-[16px] py-[8px] bg-grey rounded-[4px] flex items-center gap-[8px] duration-200 active:scale-[.95] w-fit', uploadStatus === 'default' && 'hover:bg-green focus-visible:bg-green')} onClick={uploadFile} disabled={uploadStatus !== 'default'}>
            <p className="text-white uppercase font-bold">
              {uploadStatus === 'default' && 'завантажити'}
              {uploadStatus === 'error' && 'помилка'}
              {uploadStatus === 'pending' && 'завантажуємо...'}
              {uploadStatus === 'success' && 'завантажено!'}
            </p>

            {uploadStatus === 'default' && <IcoArrow width={32} height={32} className="-rotate-[90deg]" />}
            {uploadStatus === 'pending' && <IcoClockOutlined width={32} height={32} />}
            {uploadStatus === 'success' && <IcoCheckmark width={32} height={32} />}
            {uploadStatus === 'error' && <IcoCross width={32} height={32} />}
          </button>
        </div>

        {uploadLink && <Link href={uploadLink} target="_blank" className="flex items-center gap-[8px]">
          <IcoExternalLink width={24} height={24} fill="#6C5CE7" />
          <p className="text-purple">Переглянути завантаження</p>
        </Link>}
      </div>

      {/* Delete upload */}
      <div className="flex flex-col gap-[24px]">
        <GroupLabel label="Видалити" />

        <div className="flex flex-col gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <p className="text-white">ID</p>
            <p className="text-[12px] text-lightGrey">Видалення парент аплоадів видалить також його діти</p>
          </div>

          <form className="w-full flex items-center gap-[8px]" onSubmit={deleteUploadHandler}>
            <Input state={deleteUploadValue} stateSetter={setDeleteUploadValue} className="w-full" placeholder={`hello-world-123-45de`} />

            <button type="submit" className={cn('px-[16px] py-[8px] flex items-center gap-[16px] rounded-[2px] bg-grey duration-200 active:scale-[.95]', deleteStatus === 'default' && 'hover:bg-red focus-visible:bg-red')} disabled={deleteStatus !== 'default'}>
              <p className="text-white uppercase">
                {deleteStatus === 'default' && 'видалити'}
                {deleteStatus === 'error' && 'помилка'}
                {deleteStatus === 'success' && 'видалено!'}
                {deleteStatus === 'pending' && 'видаляємо...'}
              </p>

              {deleteStatus === 'default' && <IcoCan width={24} height={24} />}
              {deleteStatus === 'pending' && <IcoClockOutlined width={24} height={24} />}
              {deleteStatus === 'success' && <IcoCheckmark width={24} height={24} />}
              {deleteStatus === 'error' && <IcoCross width={24} height={24} />}
            </button>
          </form>

          {deleteStatus === 'success' && <p className="text-red">Аплоад видалено</p>}
        </div>
      </div>
    </div>
  );
}

interface IGroupLabel extends React.HTMLAttributes<HTMLDivElement> {
  label: string

  /** @default grey */
  dividerColor?: string
  headingClassName?: string
}



const GroupLabel: NextPage<IGroupLabel> = ({ label, className, headingClassName, dividerColor, ...props }) => {
  return (
    <div className={cn(`flex items-center gap-[32px]`, className)} {...props}>
      <h3 className={cn(`text-white font-bold shrink-0 text-[24px]`, headingClassName)}>{label}</h3>

      <span className={cn('w-full h-[1px]', dividerColor ? `bg-[#${dividerColor}]` : `bg-grey`)}></span>
    </div>
  );
}