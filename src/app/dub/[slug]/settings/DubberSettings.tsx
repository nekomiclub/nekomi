'use client'

import { useEffect, useRef, useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { cn } from '~/components/Components';
import { HandleClientError } from '~/components/handlers';
import { NotifySuccess, NotifyWarn } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import { IDubber } from '~/interfaces/IDubber';
import { IUser } from '~/interfaces/IUser';
import { Routes } from '~/routes';
import API from '~/services/ApiService';



export const DubberSettingsBanner: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  const [bannerURL, setBannerURL] = useState(dubber.banner);
  const [isActive, setIsActive] = useState(false);

  const bannerRef = useRef<HTMLDivElement>(null)
  const selectFileRef = useRef<HTMLInputElement>(null)



  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;



    function show() {
      setIsActive(true);
    }

    function hide() {
      setIsActive(false);
    }

    banner.addEventListener('mouseenter', show)
    banner.addEventListener('mouseleave', hide)
  }, [])



  async function uploadBanner() {
    const select = selectFileRef.current;
    if (!select) return;

    if (!select.files?.length) return NotifyWarn({ title: 'Файл відсутній', message: 'Неможливо оновити банер без файлу' })
    const file = select.files[0]

    try {
      NotifySuccess({ message: `Завантажуємо файл: ${file.name}`, title: 'Завантажуємо...' })

      const { url } = await API.putDubberBanner({ dubberId: dubber.id, file });
      setBannerURL(url);

      NotifySuccess({ message: `Завантажено: ${file.name}`, title: 'Банер оновлено!' })
    } catch (e) {
      HandleClientError(e);
    }
  }

  function selectFile() {
    const select = selectFileRef.current;
    if (!select) return;

    select.value = '';
    select.click();
  }



  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[200px]" ref={bannerRef}>
    <Image src={bannerURL} fill alt={`Team banner`} />

    <div className="w-[56px] h-[56px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
      <MaterialSymbol icon="edit" size={24} color="#fff" />
    </div>

    <input type="file" className="hidden" accept=".png,.jpg,.webp" ref={selectFileRef} onChange={uploadBanner} />

    <button onClick={selectFile} className={cn('w-full h-full absolute top-0 left-0 bg-dark-primary/[.5] flex justify-center items-center duration-200', !isActive && 'opacity-0 invisible')}>
      <div className="flex flex-col items-center gap-[24px] max-[1400px]:gap-[16px]">
        <MaterialSymbol icon="backup" size={128} color="#fff" className="max-[1400px]:!text-[84px]" />

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[40px] font-bold font-manrope text-center uppercase max-lg:text-[24px]">завантажити банер</h3>
          <p className="text-white text-[16px] font-manrope text-center">.png,.jpg,.webp до 2х мегабайтів</p>
        </div>
      </div>
    </button>
  </div>
}

export const DubberSettingsHeader: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="flex gap-[24px] absolute top-0 w-full pr-[32px] max-md:sm-[16px] max-md:flex-col">
    {/* Avatar placeholder */}
    <div className="relative w-[256px] h-[128px] shrink-0 max-md:w-[128px] max-md:h-[64px]">
      <DubberSettingsAvatar dubber={dubber} />
    </div>

    <div className="w-full flex items-center justify-between gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">{dubber.nameUkr}</h2>
        <h4 className="text-grey-new text-[24px] font-space-grotesk">@{dubber.slug}</h4>
      </div>

      <div className="flex gap-[4px] max-md:absolute max-md:top-[16px] max-md:right-[32px] max-sm:right-[16px]">
        <Tooltip content="На сторінку команди">
          <Link href={`${Routes.dubber_profile.path}/${dubber.slug}`} className={cn('p-[16px] rounded-[4px] flex justify-center items-center shrink-0 duration-200 bg-dark-medium border border-dark-light active:scale-[.95] hover:bg-primary-bright focus-visible:bg-primary-bright')}>
            <MaterialSymbol icon="account_box" size={24} color="#fff" />
          </Link>
        </Tooltip>
      </div>
    </div>
  </div>
}

export const DubberSettingsContent: NextPage<{ dubber: IDubber, members: IUser[] }> = ({ dubber }) => {
  return <div className="flex flex-col gap-[16px]">
    <div className="w-full flex justify-between items-center pb-[16px] border-b border-dark-light">
      <h2 className="text-white text-[32px] font-bold font-manrope">Налаштування команди</h2>
    </div>
  </div>
}

function DubberSettingsAvatar({ dubber }: { dubber: IDubber }) {
  const [isActive, setIsActive] = useState(false);
  const [avatarURL, setAvatarURL] = useState(dubber.avatar);

  const avatarRef = useRef<HTMLDivElement>(null)
  const selectFileRef = useRef<HTMLInputElement>(null)



  useEffect(() => {
    const avatar = avatarRef.current;
    if (!avatar) return;



    function show() {
      setIsActive(true);
    }

    function hide() {
      setIsActive(false);
    }

    avatar.addEventListener('mouseenter', show)
    avatar.addEventListener('mouseleave', hide)
  }, [])



  async function uploadAvatar() {
    const select = selectFileRef.current;
    if (!select) return;

    if (!select.files?.length) return NotifyWarn({ title: 'Файл відсутній', message: 'Неможливо оновити аватар без файлу' })
    const file = select.files[0]

    try {
      NotifySuccess({ message: `Завантажуємо файл: ${file.name}`, title: 'Завантажуємо...' })

      const { url } = await API.putDubberAvatar({ dubberId: dubber.id, file });

      setAvatarURL(url);
      NotifySuccess({ message: `Файл завантажено`, title: 'Аватар оновлено!' })
    } catch (e) {
      HandleClientError(e);
    }
  }

  function selectFile() {
    const select = selectFileRef.current;
    if (!select) return;

    select.value = '';
    select.click();
  }



  return <div className="w-[256px] h-[256px] absolute left-0 bottom-0 rounded-[4px] overflow-hidden -top-[128px] max-md:w-[128px] max-md:h-[128px] max-md:top-[-64px]" ref={avatarRef}>
    <Image src={avatarURL} fill alt="Dubber avatar" />

    <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
      <MaterialSymbol icon="edit" size={16} color="#fff" />
    </div>

    <input type="file" className="hidden" accept=".png,.jpg,.webp" ref={selectFileRef} onChange={uploadAvatar} />

    <button onClick={selectFile} className={cn('w-full h-full absolute top-0 left-0 bg-dark-primary/[.5] flex justify-center items-center duration-200', !isActive && 'opacity-0 invisible')}>
      <div className="flex flex-col items-center gap-[16px] max-md:gap-[8px]">
        <MaterialSymbol icon="backup" size={64} color="#fff" className="max-md:!text-[24px]" />

        <div className="flex flex-col gap-[8px]">
          <h3 className="text-white text-[24px] font-bold font-manrope text-center uppercase max-md:text-[16px]">завантажити аватар</h3>
          <p className="text-white text-[16px] font-manrope text-center max-md:text-[12px]">.png,.jpg,.webp <br /> до 1го мегабайта</p>
        </div>
      </div>
    </button>
  </div>
}