'use client'

import '~/styles/pages/user.scss';

import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { PopupButton, PopupWindow } from '@fullkekw/popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { HandleClientError } from '~/components/Errors';
import StyledImage from '~/components/Styled/StyledImage';
import { UIReportButton } from '~/components/UI/Report';
import { UIText } from '~/components/UI/Text.ui';
import { useAppSelector } from '~/hooks/redux';
import API from '~/services/ApiService';
import { cn } from '~/utils/classnames';
import parseUserLibUI from '~/utils/parse-user-lib-ui';
import { copyToClipboard, getUTC, wordDeclination } from '~/utils/utils';
import { IcoSocialTelegram } from '../../../assets/Social';
import Tooltip from '../../../components/UI/Tooltip';
import { config } from '../../../config';
import { User, UserLib, UserTogetherRoom } from '../../../interfaces/UserIntf';
import { $api } from '../../../utils/http';



interface UserSectionProps {
  user: User
}

interface UserHeaderProps extends UserSectionProps {
  /** Defines if current page primary. If not, at the menu will appear button navigates to primary page */
  primaryPage?: boolean
}

interface UserLibItemProps extends UserSectionProps {
  lib: UserLib
}

interface UserDividerProps {
  label: string

  user?: User
  hidden?: boolean
}

interface UserStatItemProps {
  label: 'favs' | 'watched' | 'watching' | 'viewtime'
  value: number

  className?: string
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
      router.push(`${config.URL.telegramBot}?start=linkAccount=${data.token}`)
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

      await $api.patch(`${config.URL.nekomi_api}/user`, formData);

      const { user } = await API.getUser({ query: '*' })
      setBannerURL(user?.banner ?? '')
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <>
    {/* Return dialog only if user is account owner */}
    {isOwner && <PopupWindow id={settingsPopupID} className="px-[24px] py-[16px] rounded-[4px] bg-dark flex flex-col gap-[16px] max-h-full w-full max-w-[1170px] overflow-y-auto overflow-x-hidden" layerClassName="bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center overflow-y-auto px-[16px] py-[40px]" isOpen={isSettingsOpen} setIsOpen={setIsSettingsOpen}>
      <Label label="Налаштування акаунту" />
      <Link href={`${config.URL.fullkekw_account}/me`} className="flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey duration-200 hover:bg-purple focus-visible:bg-purple">
        <p className="text-white text-center">Редагувати акаунт Fullkekw</p>
      </Link>

      <Label label="Банер профілю" />

      <div className="up-banner w-full max-h-[400px] aspect-[16/7] relative shrink-0">
        <button className="up-banner_upload w-full h-full absolute top-0 left-0 flex justify-center items-center gap-[16px] z-[3] bg-dark/[.3] duration-200 opacity-0 invisible" onClick={selectBannerFile}>
          <p className="uppercase text-[40px] font-bold text-white max-[640px]:text-[24px]">завантажити</p>
        </button>

        <input type="file" accept=".png,.jpg,.webp" ref={bannerSelectRef} className="hidden absolute -z-[1]" onChange={uploadBanner} />
        <StyledImage src={bannerURL} width="100%" height="100%" loading="eager" />
      </div>

      <Label label={`Під'єднання`} />
      {settingsLinkTelegramStatus === 'connected' ?
        <div className="flex flex-col gap-[8px]">
          <div className="flex justify-center items-center gap-[24px] px-[16px] py-[12px] rounded-[2px] bg-darkGrey">
            <MaterialSymbol icon="star" size={24} fill className="text-[#FF464E]" />
            <p className="text-white text-center">Акаунт Telegram прив’язано! </p>
          </div>

          <div className={`flex gap-[8px] items-center`}>
            <MaterialSymbol icon="info" size={16} className="text-lightGrey" />
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
    </PopupWindow>}

    <div className={`bg-dark relative pt-[16px] sm:pt-[var(--header-height)]`}>
      {/* Image */}
      <div className="w-full h-fit max-h-[500px] aspect-[16/9] relative max-[1140px]:aspect-[16/7]">
        <StyledImage src={bannerURL} width="100%" height="100%" loading="eager" alt="banner" className="w-full h-full object-cover" />

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
    <UserDivider label="Теки" />

    <div className="flex flex-wrap gap-[16px]">
      {user.libs.some(el => !el.settings.hidden) ? <>
        <UserLibItem lib={user.libs.find(el => el.type === 'favorite')!} user={user} />
        <UserLibItem lib={user.libs.find(el => el.type === 'watching')!} user={user} />
        <UserLibItem lib={user.libs.find(el => el.type === 'watched')!} user={user} />
        <UserLibItem lib={user.libs.find(el => el.type === 'plans')!} user={user} />
        <UserLibItem lib={user.libs.find(el => el.type === 'delayed')!} user={user} />
      </> : <p className="text-lightGrey">Всі теки цього користувача приватні</p>}
    </div>
  </div>
}

export const UserSectionWTRooms: NextPage<UserSectionProps> = ({ user }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);



  return isOwner && <div className="flex flex-col gap-[24px]" id="user-libs">
    <UserDivider label={`Спільний перегляд (${user.togetherRooms.length} / 5)`} />

    <div className="flex flex-wrap gap-[16px]">
      {user.togetherRooms.map(room => {
        return <UserWTRoom room={room} user={user} key={`user-wtroom-${room.id}`} />
      })}
    </div>
  </div>
}

export const UserLibItem: NextPage<UserLibItemProps> = ({ lib, user }) => {
  const currentUser = useAppSelector(state => state.user);

  const [icon, setIcon] = useState<SymbolCodepoints>('favorite')
  const [title, setTitle] = useState('Тека')
  const [isFavorite] = useState(lib.type === 'favorite')
  const [isOwner] = useState(user.id === currentUser.id);
  const [isLibVisible] = useState(!lib.settings.hidden || isOwner);



  useMemo(() => {
    parseUserLibUI({ type: lib.type, setTitle, setIcon })
    setTitle(lib.settings.name);
  }, [])



  return isLibVisible && <Link href={`${config.URL.nekomi_site}/u/${user.username}/lib/${lib.id}`} className="ui-button grow basis-[290px] p-[24px] flex flex-col items-center gap-[24px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px] max-sm:px-[4px] max-sm:py-[8px]">
    <MaterialSymbol className={cn(`text-white max-sm:!text-[80px]`, isFavorite && '!text-primary')} fill={isFavorite} icon={icon} size={128} />

    <div className="flex items-center gap-[8px] max-sm:flex-col-reverse">
      <p className="text-white font-manrope text-center text-[24px] max-sm:text-[16px]">{title} <span className="text-grey-new">({lib.titles.length})</span></p>
    </div>
  </Link>
}

export const UserStatItem: NextPage<UserStatItemProps> = ({ label, value, className }) => {
  const [icon, setIcon] = useState<SymbolCodepoints>('favorite')
  const [title, setTitle] = useState('—')
  const [isFavorite] = useState(label === 'favs')



  useMemo(() => {
    if (label === 'favs') {
      setTitle(wordDeclination(value, ['Улюблене аніме', 'Улюблених аніме', 'Улюблених аніме']))
      setIcon('favorite')
    }

    if (label === 'viewtime') {
      setTitle(wordDeclination(value, ['Година перегляду', 'Години перегляду', 'Годин перегляду']))
      setIcon('hourglass_bottom')
    }

    if (label === 'watched') {
      parseUserLibUI({ type: 'watched', setIcon, setTitle })
      setTitle(wordDeclination(value, ['Переглянуте аніме', 'Переглянутих аніме', 'Переглянутих аніме']))
    }

    if (label === 'watching') {
      parseUserLibUI({ type: 'watching', setIcon, setTitle })
      setTitle(wordDeclination(value, ['Переглядаєме аніме', 'Переглядаємих аніме', 'Переглядаємих аніме']))
    }
  }, [])



  return (
    <div className={`grow basis-[280px] min-w-[280px] ${isFavorite ? 'bg-primary' : 'bg-dark-bright'} p-[16px] rounded-[4px] flex items-center gap-[8px] ${className ? className : ''}`}>
      <div className="flex-shrink-0">
        <MaterialSymbol className={cn(`text-white max-sm:!text-[64px]`)} fill={isFavorite} icon={icon} size={80} />
      </div>

      <div className="w-full flex flex-col gap-[8px]">
        <p className="text-white font-manrope text-[32px] font-bold text-center w-full max-sm:text-[24px]">{value}</p>
        <p className="text-white font-manrope w-full text-center">{title}</p>
      </div>
    </div>
  )
}

export const UserDivider: NextPage<UserDividerProps> = ({ label, user, hidden }) => {
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user?.id === currentUser.id);



  return <Tooltip content={isOwner ? `Цей розділ ${hidden ? 'прихований' : 'публічний'}` : ''} className="flex items-center gap-[16px]">
    <p className="text-white font-manrope text-[32px] font-bold flex-shrink-0 max-sm:text-[24px]">{label}</p>

    {isOwner && <div className="flex-shrink-0">
      {!hidden && <MaterialSymbol icon="visibility" size={24} className="text-white max-sm:!text-[16px]" />}
      {hidden && <MaterialSymbol icon="visibility_off" size={24} className="text-white max-sm:!text-[16px]" />}
    </div>}

    <div className="block w-full h-[3px] bg-dark-light"></div>
  </Tooltip>
}

function UserWTRoom({ room, user }: { room: UserTogetherRoom, user: User }) {
  return <Link href={`/`} className="ui-button grow basis-[290px] p-[24px] flex flex-col items-center gap-[24px] w-full duration-200 max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <MaterialSymbol className="text-white max-sm:!text-[80px]" icon="groups" size={128} />

    <p className="text-white font-manrope text-center text-[24px] max-sm:text-[16px] text-ellipsis line-clamp-3">{room.settings.name}</p>
  </Link>
}

function Label({ label }: { label: string }) {
  return <div className="flex items-center gap-[16px]">
    <h3 className="text-white text-[24px] font-bold shrink-0">{label}</h3>
    <span className="w-full h-[3px] bg-grey"></span>
  </div>
}

function AvatarComponent({ user }: { user: User }) {
  return <div className="w-[256px] h-full relative max-[820px]:w-[160px] max-[670px]:h-[32px] flex-shrink-0">
    <StyledImage src={user.avatar} width={'256px'} height={'256px'} className="!absolute bottom-0 left-0 rounded-[4px] w-full h-fit aspect-square max-[820px]:!w-[160px] max-[820px]:!h-[160px]" loading="eager" alt="avatar" />
  </div>
}

function UserComponent({ user }: { user: User }) {
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[16px]">
      <UIText text={`@${user.username}`} type="h1" className="break-all font-space-grotesk" />
    </div>

    <Tooltip content="На nekomi з:">
      <div className="flex items-center gap-[8px]">
        <MaterialSymbol className="text-white opacity-70" icon="calendar_add_on" size={24} />
        <p className="text-white font-manrope opacity-70">{getUTC(user.statistics.accountCreated).fulldate}</p>
      </div>
    </Tooltip>
  </div>
}

function SettingsComponent({ user, isOwner, primaryPage, settingsPopupID }: { user: User, isOwner: boolean, settingsPopupID: string, primaryPage: boolean }) {
  const [urlCopied, setUrlCopied] = useState(false)



  function copyProfileURL() {
    copyToClipboard(`${config.URL.nekomi_site}/u/${user.username}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }



  return <div className="flex items-center gap-[8px]">
    <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на профіль'}>
      <button className={`ui-button w-[64px] h-[64px] flex justify-center items-center ${urlCopied ? 'bg-green' : 'bg-transparent border-none hover:!bg-purple focus-visible:!bg-purple'} rounded-[4px] max-sm:w-[48px] max-sm:h-[48px]`} onClick={copyProfileURL}>
        <MaterialSymbol className="text-white max-sm:!text-[24px]" icon="link" size={32} />
      </button>
    </Tooltip>

    {isOwner && <Tooltip content="Налаштування">
      <PopupButton popupId={settingsPopupID} className="ui-button w-[64px] h-[64px] flex justify-center items-center max-sm:w-[48px] max-sm:h-[48px]">
        <MaterialSymbol className="text-white max-sm:!text-[24px]" icon="settings" size={32} />
      </PopupButton>
    </Tooltip>}

    {!primaryPage && <Link href={`${config.URL.nekomi_site}/u/${user.username}`}>
      <Tooltip content="На головну профілю">
        <button className={`ui-button w-[64px] h-[64px] flex justify-center items-center hover:!bg-primary focus-visible:!bg-primary max-sm:w-[48px] max-sm:h-[48px]`}>
          <MaterialSymbol className="text-white max-sm:!text-[24px]" icon="person" size={32} />
        </button>
      </Tooltip>
    </Link>}
  </div>
}