'use client'

import Link from 'next/link';
import { AxiosError } from 'axios';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { NextPage } from 'next';
import { useMemo, useRef, useState } from 'react';

import Tooltip from '../../../components/Tooltip';
import { $upload } from '../../../components/http';
import { IPatcherSelectOption, PatcherErrorWrapper } from '../[id]/Components';
import { IUser } from '../../../interfaces/IUser';
import { IcoArrow, IcoExternalLink, IcoUpdate } from '../../../assets/Icons';
import { cn } from '../../../components/Components';
import { config } from '../../../config';
import { useAppSelector } from 'hooks/redux';



type TUploadType = 'photo/user/avatar' | 'photo/user/banner' | 'video/title/episode' | 'photo/title/poster' | 'photo/raw';
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
  code: 'video/title/episode',
  label: 'Епізод аніме'
}, {
  code: 'photo/raw',
  label: 'Фото без обрізання'
}]



export const MediaClient: NextPage = () => {
  const user = useAppSelector(state => state.user)

  const [headerHeight, setHeaderHeight] = useState(92)
  const [error, setError] = useState('')
  const [file, setFile] = useState<File | undefined>(undefined)

  const [isTypeSelectOpen, setIsTypeSelectOpen] = useState(false)
  const [uploadLink, setUploadLink] = useState('');
  const [uploadType, setUploadType] = useState<TUploadType>('photo/user/avatar')

  const fileRef = useRef<HTMLInputElement>(null)



  // Calc header height
  useMemo(() => {
    if (typeof window === 'undefined') return

    setHeaderHeight(document.querySelector('header')?.offsetHeight || 92)
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
      setFile(undefined)
    } else {
      const file = input.files[0];

      setFile(file);
    }
  }

  async function uploadFile() {
    try {
      if (!file) return;

      setError('');
      setUploadLink('')

      const formData = new FormData();

      formData.append('file', file);
      formData.append('type', uploadType);

      const { data } = await $upload.post(`${config.URL.apiHTTP}/upload`, formData)

      setUploadLink(data.url)
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(`Помилка при завантаженні файлу - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        setError(`Помилка при завантаженні файлу - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }
  }



  return (
    <div className={`wrapper min-h-screen gap-[40px]`} style={{ paddingTop: `${headerHeight}px` }}>
      <div className="flex items-center gap-[32px] max-[784px]:flex-col max-[784px]:gap-[8px] mt-[40px]">
        <h2 className="text-white text-[32px] uppercase font-bold max-[1072px]:text-[24px]">МЕДІА КОНТЕНТ</h2>

        {/* Divider */}
        <span className="w-[200px] h-[3px] bg-grey max-[1072px]:w-[80px] max-[784px]:hidden"></span>

        <p className="text-white text-[24px]">Вітаю, <b>{user.username}</b></p>
      </div>

      {error && <PatcherErrorWrapper errors={[error]} section="media_content" />}

      <div className="flex items-end gap-[16px]">
        <div className="flex flex-col gap-[8px] shrink-0 w-full max-w-[250px]">
          <div className="flex items-center gap-[4px]">
            <p className={cn('text-white')}>Тип завантаження</p>
          </div>

          <Menu className="w-full max-w-[330px]" gap={16} settings={{ align: 'stretch', direction: 'bottom', animation: 'slide', closeOn: 'both' }}>
            <MenuTrigger className={cn(`patcher-select px-[16px] py-[4px] bg-grey rounded-[2px] flex items-center gap-[16px] justify-between w-full`)} primary>
              <p className={cn(`select-none text-white`)}>{uploadTypesOptions.find(el => el.code === uploadType)?.label}</p>

              <IcoArrow className={cn(`duration-200`, isTypeSelectOpen && 'rotate-[180deg]')} fill={'#fff'} />
            </MenuTrigger>

            <MenuWrapper className="flex flex-col bg-grey w-full max-h-[50vh] overflow-x-hidden overflow-y-auto">
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
            <input type="file" accept=".png,.jpg,.webp,.mp4,.webm,.mov,.mkv,.m4v" className="hidden" ref={fileRef} onChange={selectFile} />

            <button className="patcher-field flex justify-center items-center gap-[16px] duration-200 hover:bg-purple focus-visible:bg-purple !py-[4px]" onClick={chooseFile}>
              <IcoUpdate width={32} height={32} />
              <p className={`text-white ${file?.name ? '' : 'uppercase'}`}>{file?.name || 'виберіть файл'}</p>
            </button>
          </div>
        </div>

        <Tooltip content="Додати серію" className="max-[940px]:w-full shrink-0">
          <button className="p-[8px] bg-grey rounded-[4px] flex items-center gap-[8px] duration-200 hover:bg-green focus-visible:bg-green w-full" onClick={uploadFile}>
            <p className="text-white uppercase font-bold">завантажити</p>
            <IcoArrow width={32} height={32} className="-rotate-[90deg]" />
          </button>
        </Tooltip>
      </div>

      {uploadLink && <Link href={uploadLink} target="_blank" className="flex items-center gap-[8px]">
        <IcoExternalLink width={24} height={24} fill="#6C5CE7" />
        <p className="text-purple">Переглянути завантажений файл</p>
      </Link>}
    </div>
  );
}