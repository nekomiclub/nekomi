'use client'


import { useEffect, useId, useRef, useState } from 'react'
import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { HandleClientError } from '~/components/Errors';
import { getUTC, wordDeclination } from '~/components/handlers';
import StyledImage from '~/components/StyledImage';
import { UIReportButton } from '~/components/UI/Report';
import { UIText } from '~/components/UI/Text.ui';
import { useAppSelector } from '~/hooks/redux';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoEyeHidden, IcoEyeVisible } from '../../../assets/Eye';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoCalendar, IcoCan, IcoChain, IcoExternalLink, IcoInfo, IcoPeople, IcoSettings, IcoStack, IcoStar, IcoUpdate, IcoUser, IcoWatched } from '../../../assets/Icons';
import { IcoSocialTelegram } from '../../../assets/Social';
import { copyToClipboard } from '../../../components/Components';
import { $api } from '../../../components/http';
import Tooltip from '../../../components/UI/Tooltip';
import { config } from '../../../config';
import { IUser, IUserLib, IUserTogetherRoom } from '../../../interfaces/IUser';



interface UserSectionProps {
  user: IUser
}

interface UserHeaderProps extends UserSectionProps {
  /** Defines if current page primary. If not, at the menu will appear button navigates to primary page */
  primaryPage?: boolean
}

interface UserLibItemProps extends UserSectionProps {
  lib: IUserLib
}

interface UserDivider extends UserSectionProps {
  label: string
  hidden: boolean
}

type TTelegramLinkStatus = 'connected' | 'notConnected' | 'pending' | 'error';



export const UserHeader: NextPage<UserHeaderProps> = ({ user, primaryPage }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const settingsPopupID = useId().replaceAll(':', '');
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [settingsLinkTelegramStatus, setSettingsLinkTelegramStatus] = useState<TTelegramLinkStatus>(user.statistics.isTelegramLinked ? 'connected' : 'notConnected')
  const [bannerURL, setBannerURL] = useState(user.banner);

  const bannerSelectRef = useRef<HTMLInputElement>(null)
  const bannerWrapperRef = useRef<HTMLDivElement>(null)
  const bannerButtonRef = useRef<HTMLButtonElement>(null)




  // Set popups ids & handle banner hover + dragNdrop
  useEffect(() => {
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



  async function linkTelegram() {
    try {
      setSettingsLinkTelegramStatus('pending')
      const { data } = await $api.get<{ token: string }>(`/user/linkTelegram/token`);
      router.push(`${config.URL.bot}?start=linkAccount=${data.token}`)
    } catch (e) {
      setSettingsLinkTelegramStatus('error')
      HandleClientError(e);
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

    try {
      const formData = new FormData();

      formData.append('file', file);
      formData.append('method', 'upload_banner');

      await $api.patch(`${config.URL.apiHTTP}/user`, formData);

      const { user } = await API.getUser({ query: '*' })
      setBannerURL(user?.banner ?? '')
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <>
    {/* Return dialog only if user is account owner */}
    {isOwner && <PopupLayer className="bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center overflow-y-auto px-[16px] py-[40px]">
      <PopupDialog id={settingsPopupID} className="px-[24px] py-[16px] rounded-[4px] bg-dark flex flex-col gap-[16px] max-h-full w-full max-w-[1170px] overflow-y-auto overflow-x-hidden" state={isSettingsOpen} stateSetter={setIsSettingsOpen}>
        <Label label="Налаштування акаунту" />
        <Link href={`${config.URL.fkAccount}/me`} className="flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple">
          <IcoExternalLink width={24} height={24} />
          <p className="text-white text-center">Редагувати акаунт Fullkekw</p>
        </Link>

        <Label label="Банер профілю" />

        <div className="w-full max-h-[400px] aspect-[16/7] relative shrink-0" ref={bannerWrapperRef}>
          <button className="w-full h-full absolute top-0 left-0 flex justify-center items-center gap-[16px] z-[3] bg-dark/[.3] duration-200 opacity-0 invisible" onClick={selectBannerFile} ref={bannerButtonRef}>
            <IcoUpdate width={80} height={80} className="max-[640px]:w-[64px] max-[640px]:h-[64px]" />
            <p className="uppercase text-[40px] font-bold text-white max-[640px]:text-[24px]">завантажити</p>
          </button>

          <input type="file" accept=".png,.jpg,.webp" ref={bannerSelectRef} className="hidden absolute -z-[1]" onChange={uploadBanner} />
          <StyledImage src={bannerURL} width="100%" height="100%" priority />
        </div>

        <Label label={`Під'єднання`} />
        {settingsLinkTelegramStatus === 'connected' ?
          <div className="flex flex-col gap-[8px]">
            <div className="flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey">
              <IcoStar width={24} height={24} fill="#FF464E" />
              <p className="text-white text-center">Акаунт Telegram прив’язано! </p>
            </div>

            <div className={`flex gap-[8px] items-center`}>
              <IcoInfo width={16} height={16} fill="#747474" />
              <p className="text-[12px] text-lightGrey">Ти будеш отримувати сповіщення в телеграм</p>
            </div>
          </div> :

          <div className="flex flex-col gap-[8px]">
            <button className={`flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] duration-200 ${settingsLinkTelegramStatus === 'pending' ? 'bg-orange' : settingsLinkTelegramStatus === 'error' ? 'bg-red' : 'bg-darkGrey hover:bg-purple focus-visible:bg-purple'}`} onClick={linkTelegram}>
              <IcoSocialTelegram width={24} height={24} />
              <p className="text-white">
                {settingsLinkTelegramStatus === 'notConnected' && 'Прив’язати акаунт Telegram'}
                {settingsLinkTelegramStatus === 'error' && 'Помилка!'}
                {settingsLinkTelegramStatus === 'pending' && 'Генеруємо токен...'}
              </p>
            </button>
          </div>
        }
      </PopupDialog>
    </PopupLayer>}

    <div className={`bg-dark relative pt-[16px] sm:pt-[var(--header-height)]`}>
      {/* Image */}
      <div className="w-full h-fit max-h-[500px] aspect-[16/9] relative max-[1140px]:aspect-[16/7]">
        <StyledImage src={bannerURL} width="100%" height="100%" priority alt="banner" className="w-full h-full object-cover" />

        <div className="wrapper !absolute w-full top-[8px] items-end">
          <UIReportButton type="icon" text="Поскаржитися на користувача" className="opacity-[.5] duration-200 hover:opacity-100 focus-visible:opacity-100" />
        </div>
      </div>

      {/* Layouts */}
      <div className="wrapper z-[2]">
        {/* PC */}
        <div className={`min-[670px]:flex hidden flex-row justify-between absolute bottom-0 left-0 w-full bg-dark/[.3] backdrop-blur-[32px] px-[32px] py-[16px]`}>
          <div className="flex gap-[32px] min-[670px]">
            <AvatarComponent user={user} />

            <UserComponent user={user} />
          </div>

          <SettingsComponent user={user} isOwner={isOwner} primaryPage={Boolean(primaryPage)} settingsPopupID={settingsPopupID} />
        </div>

        {/* Mobile */}
        <div className="max-[670px]:flex flex-col hidden gap-[16px] items-center pt-[40px]">
          <AvatarComponent user={user} />

          <div className="flex justify-between items-center gap-[16px] w-full">
            <UserComponent user={user} />
            <SettingsComponent user={user} isOwner={isOwner} primaryPage={Boolean(primaryPage)} settingsPopupID={settingsPopupID} />
          </div>
        </div>
      </div>
    </div>
  </>
}

export const UserSectionLibs: NextPage<UserSectionProps> = ({ user }) => {
  return <div className="flex flex-col gap-[24px]" id="user-libs">
    <UserDivider label="Теки" hidden={false} user={user} />

    <div className="flex flex-wrap gap-[16px]">
      {user.libs.some(el => !el.settings.hidden) ? <>
        <UserLibCard lib={user.libs.find(el => el.type === 'favorite')!} user={user} />
        <UserLibCard lib={user.libs.find(el => el.type === 'watching')!} user={user} />
        <UserLibCard lib={user.libs.find(el => el.type === 'plans')!} user={user} />
        <UserLibCard lib={user.libs.find(el => el.type === 'watched')!} user={user} />
        <UserLibCard lib={user.libs.find(el => el.type === 'delayed')!} user={user} />
      </> : <p className="text-lightGrey">Всі теки цього користувача приватні</p>}
    </div>
  </div>
}

export const UserSectionWTRooms: NextPage<UserSectionProps> = ({ user }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);



  return isOwner && <div className="flex flex-col gap-[24px]" id="user-libs">
    <UserDivider label={`Кімнати спільного перегляду (${user.togetherRooms.length}/5)`} hidden={true} user={user} />

    <div className="flex flex-wrap gap-[16px]">
      {user.togetherRooms.map(room => {
        return <UserWTRoom room={room} user={user} key={`user-wtroom-${room.id}`} />
      })}
    </div>
  </div>
}

export const UserLibCard: NextPage<UserLibItemProps> = ({ lib, user }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);



  return <>
    {!lib.settings.hidden || isOwner ? <Link href={`${config.URL.baseURL}/u/${user.username}/lib/${lib.id}`} className="ui-button grow basis-[290px] p-[24px] flex flex-col items-center gap-[24px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px] max-sm:px-[4px] max-sm:py-[8px]">
      {lib.type === 'favorite' && <IcoHeartFilled width={128} height={128} fill="#FF464E" className="max-sm:w-[80px] max-sm:h-[80px]" />}
      {lib.type === 'watching' && <IcoStack width={128} height={128} className="max-sm:w-[80px] max-sm:h-[80px]" />}
      {lib.type === 'plans' && <IcoClockFilled width={128} height={128} className="max-sm:w-[80px] max-sm:h-[80px]" />}
      {lib.type === 'watched' && <IcoWatched width={128} height={128} className="max-sm:w-[80px] max-sm:h-[80px]" />}
      {lib.type === 'delayed' && <IcoCan width={128} height={128} className="max-sm:w-[80px] max-sm:h-[80px]" />}

      <div className="flex items-center gap-[8px] max-sm:flex-col-reverse">
        <p className="text-white text-center text-[24px] max-sm:text-[16px]">
          {lib.type === 'favorite' && `Улюблені (${lib.titles.length})`}
          {lib.type === 'watching' && `Переглядаю (${lib.titles.length})`}
          {lib.type === 'plans' && `Плани (${lib.titles.length})`}
          {lib.type === 'watched' && `Переглянуті (${lib.titles.length})`}
          {lib.type === 'delayed' && `Відкладені (${lib.titles.length})`}
        </p>

        {isOwner ? <>
          {lib.settings.hidden ? <Tooltip content="Прихована тека">
            <IcoEyeHidden width={24} height={24} />
          </Tooltip> : <Tooltip content="Публічна тека">
            <IcoEyeVisible width={24} height={24} />
          </Tooltip>}
        </> : <></>}
      </div>
    </Link> : <></>}
  </>
}

export const UserStatCard: NextPage<{ label: 'favs' | 'watched' | 'watching' | 'viewtime', value: number, className?: string }> = ({ label, value, className }) => {
  return (
    <div className={`grow basis-[280px] min-w-[280px] ${label === 'favs' ? 'bg-primary' : 'bg-dark-bright'} p-[16px] rounded-[4px] flex items-center gap-[8px] ${className ? className : ''}`}>
      <div className="flex-shrink-0">
        {label === 'favs' && <IcoHeartFilled width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
        {label === 'watched' && <IcoWatched width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
        {label === 'watching' && <IcoStack width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
        {label === 'viewtime' && <IcoClockFilled width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <p className="text-white text-[32px] font-bold text-center w-full max-sm:text-[24px]">{value}</p>
        <p className="text-white w-full text-center">
          {label === 'favs' && `${wordDeclination(value, ['Улюблений тайтл', 'Улюблених тайтли', 'Улюблених тайтлів'])}`}
          {label === 'watched' && `${wordDeclination(value, ['Переглянутий тайтл', 'Переглянутих тайтли', 'Переглянутих тайтлів'])}`}
          {label === 'watching' && `${wordDeclination(value, ['Переглядаємий тайтл', 'Переглядаємих тайтли', 'Переглядаємих тайтлів'])}`}
          {label === 'viewtime' && `${wordDeclination(value, ['Година перегляду', 'Години перегляду', 'Годин перегляду'])}`}
        </p>
      </div>
    </div>
  )
}

export const UserDivider: NextPage<UserDivider> = ({ label, user, hidden }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);



  return <Tooltip content={isOwner ? `Цей розділ ${hidden ? 'прихований' : 'публічний'}` : ''} className="flex items-center gap-[16px]">
    <p className="text-white text-[32px] font-bold flex-shrink-0 max-[600px]:text-[24px]">{label}</p>

    {isOwner && <div className="flex-shrink-0">
      {hidden ? <IcoEyeHidden width={24} height={24} className="max-[600px]:w-[16px] max-[600px]:h-[16px]" /> : <IcoEyeVisible width={24} height={24} />}
    </div>}

    <span className="block w-full h-[3px] bg-darkGrey"></span>
  </Tooltip>
}

function UserWTRoom({ room, user }: { room: IUserTogetherRoom, user: IUser }) {
  return <Link href={`${config.URL.baseURL}${Routes.watch_together.path}/${user.id}__${room.id}`} className="ui-button grow basis-[290px] p-[24px] flex flex-col items-center gap-[24px] w-full duration-200 max-[1140px]:basis-[250px] max-[880px]:basis-[220px] max-[620px]:basis-[160px]">
    <IcoPeople width={128} height={128} fill="#fff" className="max-[480px]:w-[80px] max-[480px]:h-[80px]" />

    <p className="text-white text-center text-[24px] max-[620px]:text-[16px] text-ellipsis line-clamp-3">{room.settings.name}</p>
  </Link>
}

function Label({ label }: { label: string }) {
  return <div className="flex items-center gap-[16px]">
    <h3 className="text-white text-[24px] font-bold shrink-0">{label}</h3>
    <span className="w-full h-[3px] bg-grey"></span>
  </div>
}

function AvatarComponent({ user }: { user: IUser }) {
  return <div className="w-[256px] h-full relative max-[820px]:w-[160px] max-[670px]:h-[32px] flex-shrink-0">
    <StyledImage src={user.avatar} width={'256px'} height={'256px'} className="!absolute bottom-0 left-0 rounded-[4px] w-full h-fit aspect-square max-[820px]:!w-[160px] max-[820px]:!h-[160px]" priority alt="avatar" />
  </div>
}

function UserComponent({ user }: { user: IUser }) {
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[16px]">
      <UIText text={`@${user.username}`} type="h1" className="break-all" />
    </div>

    <Tooltip content="Дата реєстрації акаунту">
      <div className="flex items-center gap-[16px]">
        <IcoCalendar width={32} height={32} />
        <p className="text-white">{getUTC(user.statistics.accountCreated).fulldate}</p>
      </div>
    </Tooltip>
  </div>
}

function SettingsComponent({ user, isOwner, primaryPage, settingsPopupID }: { user: IUser, isOwner: boolean, settingsPopupID: string, primaryPage: boolean }) {
  const [urlCopied, setUrlCopied] = useState(false)



  function copyProfileURL() {
    copyToClipboard(`${config.URL.baseURL}/u/${user.username}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }



  return <div className="flex items-center gap-[8px]">
    <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на профіль'}>
      <button className={`p-[16px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px] max-[600px]:p-[12px]`} onClick={() => copyProfileURL()}>
        <IcoChain width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </button>
    </Tooltip>

    {isOwner && <Tooltip content="Налаштування">
      <PopupButton togglePopupId={settingsPopupID} className="p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]">
        <IcoSettings width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </PopupButton>
    </Tooltip>}

    {!primaryPage && <Link href={`${config.URL.baseURL}/u/${user.username}`}>
      <Tooltip content="На головну профілю">
        <button className={`p-[16px] duration-200 bg-darkGrey hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback rounded-[4px] max-[600px]:p-[12px]`}>
          <IcoUser width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
        </button>
      </Tooltip>
    </Link>}
  </div>
}