'use client'

import Link from 'next/link';

import { NextPage } from 'next';
import { useState, useEffect, useRef, useMemo } from 'react'
import { Layer, Dialog, Trigger } from '@fullkekw/fkw-popup';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Tooltip from '../../../components/Tooltip';

import { IUser, IUserLib } from '../../../interfaces/IUser';
import { LoadingImage, cn, copyToClipboard } from '../../../components/Components';
import { IcoCalendar, IcoCan, IcoChain, IcoExternalLink, IcoInfo, IcoSettings, IcoStack, IcoStar, IcoUpdate, IcoUser, IcoWatched } from '../../../assets/Icons';
import { addZeroIfNumberSingle, makeStringID } from '../../../components/handlers';
import { config } from '../../../config';
import { IcoEyeHidden, IcoEyeVisible } from '../../../assets/Eye';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoClockFilled } from '../../../assets/Clock';
import { useAppSelector } from '../../../hooks/redux';
import { IcoSocialTelegram } from '../../../assets/Social';
import axios, { AxiosError } from 'axios';
import { $api } from '../../../components/http';
import { PatcherErrorWrapper } from '../../patcher/[id]/Components';
import Image from 'next/image';



type TTelegramLinkStatus = 'connected' | 'notConnected' | 'pending' | 'error';


/** User header
 * @param primaryPage Defines if current page primary. If not, at the menu will appear button navigates to primary page
 */
export const UserHeader: NextPage<{ user: IUser, isOwner: boolean, primaryPage?: boolean }> = ({ user, primaryPage, isOwner }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [telegramLinkError, setTelegramLinkError] = useState('');
  const [urlCopied, setUrlCopied] = useState(false)
  const [settingsPopupID, setSettingsPopupID] = useState('')
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [settingsLinkTelegramStatus, setSettingsLinkTelegramStatus] = useState<TTelegramLinkStatus>(user.statistics.isTelegramLinked ? 'connected' : 'notConnected')
  const [bannerURL, setBannerURL] = useState(user.banner);
  const [bannerUploadError, setBannerUploadError] = useState('');
  const [headerHeight, setHeaderHeight] = useState(92);


  const bannerSelectRef = useRef<HTMLInputElement>(null)
  const bannerWrapperRef = useRef<HTMLDivElement>(null)
  const bannerButtonRef = useRef<HTMLButtonElement>(null)

  // Calc header height
  useMemo(() => {
    setHeaderHeight(document.querySelector('header')?.offsetHeight || 92)
  }, [])

  // Set popups ids & handle banner hover + dragNdrop
  useEffect(() => {
    setSettingsPopupID(makeStringID(16, true))

    // Handle banner hover
    if (user.id) {
      const input = bannerSelectRef.current;
      const bannerWrapper = bannerWrapperRef.current;
      const bannerButton = bannerButtonRef.current;
      if (!input || !bannerWrapper || !bannerButton) return;

      bannerWrapper.addEventListener('mouseenter', bannerShow)
      // bannerWrapper.addEventListener('dragenter', bannerShow)

      bannerWrapper.addEventListener('mouseleave', bannerHide)
      // bannerWrapper.addEventListener('dragleave', bannerHide)

      // bannerButton.addEventListener('drop', e => {
      //   console.log('drop')

      //   e.preventDefault();
      //   input.files = e.dataTransfer?.files!;
      // })
    }

    function bannerShow(e: MouseEvent) {
      e.preventDefault();

      const bannerButton = bannerButtonRef.current;
      if (!bannerButton) return;

      bannerButton.style.opacity = '1';
      bannerButton.style.visibility = 'visible';
    }

    function bannerHide(e: MouseEvent) {
      e.preventDefault();

      const bannerButton = bannerButtonRef.current;
      if (!bannerButton) return;

      bannerButton.style.opacity = '0';
      bannerButton.style.visibility = 'invisible';
    }
  }, [])

  // Open settings popup
  useEffect(() => {
    if (searchParams.get('openSettings') === null) return;

    setIsSettingsOpen(true)
  }, [searchParams])

  // Remove open settings param
  useEffect(() => {
    if (!isSettingsOpen && searchParams.has('openSettings')) router.replace(pathname)
  }, [isSettingsOpen])



  function copyProfileURL() {
    copyToClipboard(`${config.URL.baseURL}/u/${user.username}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }

  function Label({ label }: { label: string }) {
    return <div className='flex items-center gap-[16px]'>
      <h3 className='text-white text-[24px] font-bold shrink-0'>{label}</h3>
      <span className='w-full h-[3px] bg-grey'></span>
    </div>
  }

  async function linkTelegram() {
    try {
      setTelegramLinkError('');
      setSettingsLinkTelegramStatus('pending')
      const { data } = await $api.get<{ token: string }>(`/user/linkTelegram/token`);
      router.push(`${config.URL.bot}?start=linkAccount=${data.token}`)
    } catch (e) {
      setSettingsLinkTelegramStatus('error')
      console.error(e)

      if (e instanceof AxiosError) {
        setTelegramLinkError(e.response?.data.message || e.response?.data.msg)
      } else {
        setTelegramLinkError(`Дивна помилка, відправ лог консолі браузера в тікет на сервері діскорд будь ласка`)
      }
    } finally {
      setTimeout(() => {
        setSettingsLinkTelegramStatus('notConnected')
      }, 3000);
    }
  }

  function selectBannerFile() {
    const input = bannerSelectRef.current;
    if (!input) return;

    input.value = '';
    input.click();
  }

  async function uploadBanner() {
    const input = bannerSelectRef.current;
    if (!input || !input.files?.length) return;

    const file = input.files[0];
    if (!file) return;

    if (!confirm(`Завантажуючи банер профілю ти погоджуєшся з Угодою Користувача (Agreement) та Політикою Конфіденційності (Privacy policy) сайту nekomi.club. Ознайомитись з ними можна внизу сайту`)) return;

    setBannerUploadError('');

    try {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('method', 'upload_banner');

      await $api.patch(`${config.URL.apiHTTP}/user`, formData);

      const { data } = await $api.get<{ user: IUser }>(`${config.URL.apiHTTP}/user/${user.id}`);
      setBannerURL(data.user.banner)
    } catch (e) {
      if (e instanceof AxiosError) {
        setBannerUploadError(`Помилка при оновленні банера - ${e.code}; ${JSON.stringify(e.response?.data)}`)
      } else {
        setBannerUploadError(`Помилка при оновленні банера - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`)
      }
    }
  }



  return (
    <>
      {user.id && <Layer className='bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center overflow-y-auto px-[8px] py-[40px]'>
        <Dialog id={settingsPopupID} className='px-[24px] py-[16px] rounded-[4px] bg-dark flex flex-col gap-[16px] flex-1 max-h-full max-w-[1170px] overflow-y-auto overflow-x-hidden' state={isSettingsOpen} stateSetter={setIsSettingsOpen}>
          <Label label='Налаштування акаунту' />
          <Link href={`${config.URL.fkAccount}/me`} className='flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple'>
            <IcoExternalLink width={24} height={24} />
            <p className='text-white text-center'>Редагувати акаунт Fullkekw</p>
          </Link>

          <Label label='Банер профілю' />
          {bannerUploadError && <PatcherErrorWrapper errors={[bannerUploadError]} section='upload_banner' />}

          <div className='w-full max-h-[400px] aspect-[16/7] relative shrink-0' ref={bannerWrapperRef}>
            <button className='w-full h-full absolute top-0 left-0 flex justify-center items-center gap-[16px] z-[3] bg-dark/[.3] duration-200 opacity-0 invisible' onClick={selectBannerFile} ref={bannerButtonRef}>
              <IcoUpdate width={80} height={80} className='max-[640px]:w-[64px] max-[640px]:h-[64px]' />
              <p className='uppercase text-[40px] font-bold text-white max-[640px]:text-[24px]'>завантажити</p>
            </button>

            <input type="file" accept='.png,.jpg,.webp' ref={bannerSelectRef} className='hidden absolute -z-[1]' onChange={uploadBanner} />
            <LoadingImage src={bannerURL} width='100%' height='100%' priority />
          </div>

          <Label label={`Під'єднання`} />
          {settingsLinkTelegramStatus === 'connected' ?
            <div className='flex flex-col gap-[8px]'>
              <div className='flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey'>
                <IcoStar width={24} height={24} fill='#FF464E' />
                <p className='text-white text-center'>Акаунт Telegram прив’язано! </p>
              </div>

              <div className={`flex gap-[8px] items-center`}>
                <IcoInfo width={16} height={16} fill='#747474' />
                <p className='text-[12px] text-lightGrey'>Ти будеш отримувати сповіщення в телеграм</p>
              </div>
            </div> :

            <div className='flex flex-col gap-[8px]'>
              <button className={`flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] duration-200 ${settingsLinkTelegramStatus === 'pending' ? 'bg-orange' : settingsLinkTelegramStatus === 'error' ? 'bg-red' : 'bg-darkGrey hover:bg-purple focus-visible:bg-purple'}`} onClick={linkTelegram}>
                <IcoSocialTelegram width={24} height={24} />
                <p className='text-white'>
                  {settingsLinkTelegramStatus === 'notConnected' && 'Прив’язати акаунт Telegram'}
                  {settingsLinkTelegramStatus === 'error' && 'Помилка!'}
                  {settingsLinkTelegramStatus === 'pending' && 'Генеруємо токен...'}
                </p>
              </button>

              {telegramLinkError && <p className='text-red'>{telegramLinkError}</p>}
            </div>
          }
        </Dialog>
      </Layer>}

      <div className={`bg-dark relative`} style={{ paddingTop: `${headerHeight}px` }}>
        {/* Image */}
        <div className='w-full h-fit max-h-[500px] aspect-[16/9] relative max-[1140px]:aspect-[16/7]'>
          <Image src={bannerURL} fill priority alt="banner" className='w-full h-full object-cover' />
        </div>

        {/* Layouts */}
        <div className='wrapper'>
          {/* PC */}
          <div className={`min-[670px]:flex hidden flex-row justify-between absolute bottom-0 left-0 w-full bg-dark/[.3] backdrop-blur-[32px] px-[32px] py-[16px]`}>
            <div className='flex gap-[32px] min-[670px]'>
              <AvatarComponent />

              <UserComponent />
            </div>

            <SettingsComponent />
          </div>

          {/* Mobile */}
          <div className='max-[670px]:flex hidden gap-[16px] items-center pt-[40px]'>
            <AvatarComponent />

            <div className='flex justify-between items-center gap-[16px] w-full'>
              <UserComponent />
              <SettingsComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function AvatarComponent() {
    return <div className='w-[256px] h-full relative max-[820px]:w-[160px] max-[670px]:h-[32px]'>
      <Image src={user.avatar} width={256} height={256} className='absolute bottom-0 left-0 rounded-[4px] w-full h-fit aspect-square' priority alt='avatar' />
    </div>
  }

  function UserComponent() {
    return <div className='flex flex-col gap-[8px]'>
      <div className='flex items-center gap-[16px]'>
        <p className='text-white text-[32px] font-bold max-[1140px]:text-[24px] break-all' title={user.username}>@{user.username}</p>
      </div>

      <Tooltip content='Дата реєстрації акаунту'>
        <div className='flex items-center gap-[16px]'>
          <IcoCalendar width={32} height={32} />
          <p className='text-white'>{addZeroIfNumberSingle(new Date(user.statistics.accountCreated).getUTCDate())}.{addZeroIfNumberSingle(new Date(user.statistics.accountCreated).getUTCMonth() + 1)}.{new Date(user.statistics.accountCreated).getUTCFullYear()}</p>
        </div>
      </Tooltip>
    </div>
  }

  function SettingsComponent() {
    return <div className='flex items-center gap-[8px]'>
      <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на профіль'}>
        <button className={`p-[16px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px] max-[600px]:p-[12px]`} onClick={() => copyProfileURL()}>
          <IcoChain width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
        </button>
      </Tooltip>

      {isOwner && <Tooltip content='Налаштування'>
        <Trigger id={settingsPopupID} className='p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]'>
          <IcoSettings width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
        </Trigger>
      </Tooltip>}

      {!primaryPage && <Link href={`${config.URL.baseURL}/u/${user.username}`}>
        <Tooltip content='На головну профілю'>
          <button className={`p-[16px] duration-200 bg-darkGrey hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback rounded-[4px] max-[600px]:p-[12px]`}>
            <IcoUser width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
          </button>
        </Tooltip>
      </Link>}
    </div>
  }
}


/** User section divider */
export const UserDivider: NextPage<{ label: string, hidden: boolean, isOwner: boolean }> = ({ label, hidden, isOwner }) => {
  return (
    <Tooltip content={isOwner ? `Цей розділ ${hidden ? 'прихований' : 'публічний'}` : '—'} className='flex items-center gap-[16px]'>
      <p className='text-white text-[32px] font-bold flex-shrink-0 max-[600px]:text-[24px]'>{label}</p>

      {isOwner && <div className='flex-shrink-0'>
        {hidden ? <IcoEyeHidden width={24} height={24} className='max-[600px]:w-[16px] max-[600px]:h-[16px]' /> : <IcoEyeVisible width={24} height={24} />}
      </div>}

      <span className='block w-full h-[3px] bg-darkGrey'></span>
    </Tooltip>
  );
}



export const UserSectionLibs: NextPage<{ user: IUser, isOwner: boolean }> = ({ isOwner, user }) => {
  return (
    <div className='flex flex-col gap-[24px]' id='user-libs'>
      <UserDivider label='Теки' hidden={false} isOwner={isOwner} />

      <div className='flex flex-wrap gap-[16px]'>
        {user.libs.some(el => !el.settings.hidden) ? <>
          <UserLibCard lib={user.libs.find(el => el.type === 'favorite')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'watching')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'plans')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'watched')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'delayed')!} isOwner={isOwner} username={user.username} />
        </> : <p className='text-lightGrey'>Всі теки цього користувача приватні</p>}
      </div>
    </div>
  );
}



/** User lib card */
export const UserLibCard: NextPage<{ lib: IUserLib, isOwner: boolean, username: string }> = ({ lib, isOwner, username }) => {
  return (
    <>
      {!lib.settings.hidden || isOwner ? <Link href={`${config.URL.baseURL}/u/${username}/lib/${lib.id}`} className='grow basis-[290px] p-[24px] bg-darkGrey rounded-[4px] flex flex-col items-center gap-[24px] w-full duration-200 hover:bg-grey focus-visible:bg-grey outline-none max-[1140px]:basis-[250px] max-[880px]:basis-[220px] max-[620px]:basis-[160px]'>
        {lib.type === 'favorite' && <IcoHeartFilled width={128} height={128} fill='#FF464E' className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'watching' && <IcoStack width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'plans' && <IcoClockFilled width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'watched' && <IcoWatched width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'delayed' && <IcoCan width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}

        <div className='flex items-center gap-[8px] max-[480px]:flex-col-reverse'>
          <p className='text-white text-center text-[24px] max-[620px]:text-[16px]'>
            {lib.type === 'favorite' && `Улюблені (${lib.titles.length})`}
            {lib.type === 'watching' && `Переглядаю (${lib.titles.length})`}
            {lib.type === 'plans' && `Плани (${lib.titles.length})`}
            {lib.type === 'watched' && `Переглянуті (${lib.titles.length})`}
            {lib.type === 'delayed' && `Відкладені (${lib.titles.length})`}
          </p>

          {isOwner ? <>
            {lib.settings.hidden ? <Tooltip content='Прихована тека'>
              <IcoEyeHidden width={24} height={24} />
            </Tooltip> : <Tooltip content='Публічна тека'>
              <IcoEyeVisible width={24} height={24} />
            </Tooltip>}
          </> : <></>}
        </div>
      </Link> : <></>}
    </>
  )
}