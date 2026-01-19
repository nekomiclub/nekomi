'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { conf } from '~/conf';
import { useAppSelector } from '~/hooks/redux';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { UserCardType } from '~/interfaces/IUser';
import routes from '~/routes';
import API from '~/services/api/API';
import { DubberFullType } from '~/services/api/dubber/GetDubber.api';
import cn from '~/utils/classnames';
import { copyToClipboard } from '~/utils/utils';

import { HandleClientError } from './Errors';
import { NotifySuccess, NotifyWarn } from './nofity/NotifyStatus';
import { ReportButton } from './Report';
import StyledButtonOld from './Styled/StyledButton.old';
import StyledImage from './Styled/StyledImage';
import Tooltip from './Tooltip';
import { H1, H2, P } from './UI/Typography';



interface IProps {
  type: 'user_profile' | 'user_settings' | 'user_lib' | 'dubber_profile' | 'dubber_settings'

  user?: UserCardType
  dubber?: DubberFullType
}

interface IUserBannerProps {
  bannerUrl: string

  isEdit?: boolean
  entityType?: 'user' | 'dubber'

  /** User / Dubber ID */
  entityId?: string
}

interface IUserAvatarProps {
  avatarUrl: string

  isEdit?: boolean
  entityType?: 'user' | 'dubber'
  className?: string

  /** User / Dubber ID */
  entityId?: string
}



const UserLayout: FC<IProps> = ({ type, dubber, user }) => {
  const pathname = usePathname();
  const currentUser = useAppSelector(state => state.user);

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const isUser = Boolean(user);
  const isDubber = Boolean(dubber);

  const avatarUrl = user?.avatar ?? dubber?.avatar ?? '';
  const coverUrl = user?.cover ?? dubber?.cover ?? '';
  const entityId = user?.id ?? dubber?.id ?? '';
  const entityType = user ? 'user' : dubber ? 'dubber' : 'user';
  const isEdit = type === 'dubber_settings' || type === 'user_settings';

  const profileUrl = user ? routes.user.path({ username: user.username }) : dubber ? routes.team.path({ slug: dubber.slug }) : '#';
  const settingsUrl = user ? routes.user_settings.path({ username: user.id }) : dubber ? routes.team_settings.path({ slug: dubber.slug }) : '#';

  const canEditUser = currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE) || user?.id === currentUser.id /* || currentUser.permissions.includes('admin') */;
  const canEditDubber = currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE); /* || currentUser.permissions.includes('admin') */ /* || dubber?.members.find(el => el.id === currentUser.id)?.role === 'leader'; */
  const showSettings = isUser ? canEditUser : isDubber ? canEditDubber : false;



  function copyLink() {
    copyToClipboard(`${conf.URL.nekomiSite}${pathname}`);
    setIsLinkCopied(true);

    NotifySuccess({ title: 'Copied!', message: 'Посилання на команду скопійовано в буфер обміну' });

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  }




  return <section className="wrapper relative pt-[16px] sm:pt-[var(--header-height)] gap-0">
    <UserBanner bannerUrl={coverUrl} isEdit={isEdit} entityId={entityId} entityType={entityType} />

    <div className="flex items-end gap-[24px] relative px-[16px] max-md:flex-col max-md:items-start max-md:gap-[8px]">
      <div className="w-[256px] h-[128px] flex-shrink-0 max-lg:h-[64px] max-lg:w-[128px]">
        <UserAvatar avatarUrl={avatarUrl} isEdit={isEdit} entityId={entityId} entityType={entityType} className="!absolute bottom-0 max-md:-top-[64px]" />
      </div>

      <div className="w-full flex items-center justify-between gap-[24px] pb-[24px] max-lg:pb-[4px] max-lg:pt-[12px] max-md:p-0">
        <div className="flex flex-col gap-[8px] max-lg:gap-[4px]">
          <H1 text={user?.username ?? dubber?.name} size={32} className={cn(`text-white font-bold break-all`, isUser && 'font-space-grotesk', isDubber && 'font-manrope')} />
          {isDubber && <H2 text={`@${dubber?.slug}`} size={20} className="text-grey-new font-space-grotesk line-clamp-1 text-ellipsis break-all" />}
        </div>

        <div className="flex items-center gap-[4px]">
          {/* Settings */}
          {(type === 'dubber_profile' || type === 'user_profile') && showSettings && <Tooltip content="Налаштування">
            <Link href={settingsUrl}>
              <StyledButtonOld className="cui-ul-action">
                <MaterialSymbol icon="settings" size={24} className="cui-ul-action_icon" />
              </StyledButtonOld>
            </Link>
          </Tooltip>}

          {/* Copy link */}
          {(type === 'dubber_profile' || type === 'user_profile' || type === 'user_lib') && <Tooltip content={isLinkCopied ? 'Посилання скопійовано!' : 'Скопіювати посилання'}>
            <StyledButtonOld className={cn(`cui-ul-action`, isLinkCopied && 'cui-ul-action--succeed')} disabled={isLinkCopied} onClick={copyLink}>
              <MaterialSymbol icon="link" size={24} className="cui-ul-action_icon" />
            </StyledButtonOld>
          </Tooltip>}

          {/* Back to profile */}
          {(type === 'dubber_settings' || type === 'user_settings' || type === 'user_lib') && <Tooltip content="В профіль">
            <Link href={profileUrl}>
              <StyledButtonOld className="cui-ul-action">
                <MaterialSymbol icon="account_box" size={24} className="cui-ul-action_icon" />
              </StyledButtonOld>
            </Link>
          </Tooltip>}
        </div>
      </div>
    </div>
  </section>;
};



const UserAvatar: FC<IUserAvatarProps> = ({ avatarUrl: initialAvatarUrl, entityId, entityType, isEdit, className }) => {
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl);
  const [isDrag, setIsDrag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSelectRef = useRef<HTMLButtonElement>(null);



  // Handle drag and dtop
  useEffect(() => {
    if (!isEdit) return;

    const select = fileSelectRef.current;
    if (!select) return console.error(`[dev]: File select is not provided`);

    select.addEventListener('dragover', e => {
      e.preventDefault();
      setIsDrag(true);

      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    });

    select.addEventListener('dragend', () => setIsDrag(false));
    select.addEventListener('dragleave', () => setIsDrag(false));

    select.addEventListener('drop', e => {
      e.preventDefault();
      setIsDrag(false);

      const file = e.dataTransfer?.files[0];
      if (!file) return NotifyWarn({ title: 'Файл не завантажено', message: '' });

      uploadFile(file);
    });
  }, []);



  function focusFileSelect() {
    const input = fileInputRef.current;
    if (!input) return;

    input.value = '';
    input.click();
  }

  function handleFileChange() {
    const input = fileInputRef.current;
    if (!input) return console.error(`[dev]: Input not provided to function`);

    const file = input.files && input.files[0];
    if (!file) return NotifyWarn({ title: 'Аватар не завантажено', message: '' });

    uploadFile(file);
  }

  async function uploadFile(file: File) {
    if (!entityId) return console.error(`[dev]: Entity id is not provided to the component`);

    let url: string;

    try {
      NotifySuccess({ title: 'Завантажуємо аватар...', message: file.name });

      if (entityType === 'user') {
        const res = await API.putUserAvatar({ id: entityId }, file);
        url = res.url;
      } else if (entityType === 'dubber') {
        const res = await API.putDubberAvatar({ id: entityId }, file);
        url = res.url;
      } else {
        return console.error(`[dev]: Entity type cannot be handled (${entityType})`);
      }

      setAvatarUrl(url);

      NotifySuccess({ title: 'Аватар оновлено', message: file.name });
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <div className={cn(`relative w-[256px] h-[256px] rounded-[4px] overflow-hidden shrink-0 max-lg:w-[128px] max-lg:h-[128px]`, className)}>
    <StyledImage src={avatarUrl} width={'100%'} height={'100%'} alt="Dubber avatar" rounded={4} />

    {/* Edit layout */}
    {isEdit && <>
      <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />

      <button className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[8px] right-[8px] opacity-[.5] bg-dark-primary">
        <MaterialSymbol icon="edit" size={16} color="#fff" />
      </button>

      <button className={cn(`cui-ub-upload`, isDrag && 'cui-ub-upload--visible')} onClick={focusFileSelect} ref={fileSelectRef}>
        <MaterialSymbol icon="backup" size={64} className="text-white" />

        <div className="flex flex-col items-center gap-[8px]">
          <P text="завантажити" size={24} className="text-white font-manrope font-bold uppercase" />
          <P text=".png .jpg .webp, до 1го мегабайта" size={14} className="text-white font-manrope" />
          <P text="Рекомендований розмір: 256х256" size={12} className="text-white font-manrope" />
        </div>
      </button>
    </>}
  </div>;
};

const UserBanner: FC<IUserBannerProps> = ({ bannerUrl: initialBannerUrl, isEdit, entityId, entityType }) => {
  const [bannerUrl, setBannerUrl] = useState(initialBannerUrl);
  const [isDrag, setIsDrag] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileSelectRef = useRef<HTMLButtonElement>(null);



  // Handle drag and dtop
  useEffect(() => {
    if (!isEdit) return;

    const select = fileSelectRef.current;
    if (!select) return console.error(`[dev]: File select is not provided`);

    select.addEventListener('dragover', e => {
      e.preventDefault();
      setIsDrag(true);

      if (e.dataTransfer) e.dataTransfer.dropEffect = 'move';
    });

    select.addEventListener('dragend', () => setIsDrag(false));
    select.addEventListener('dragleave', () => setIsDrag(false));

    select.addEventListener('drop', e => {
      e.preventDefault();
      setIsDrag(false);

      const file = e.dataTransfer?.files[0];
      if (!file) return NotifyWarn({ title: 'Банер не завантажено', message: '' });

      uploadFile(file);
    });
  }, []);



  function focusFileSelect() {
    const input = fileInputRef.current;
    if (!input) return;

    input.value = '';
    input.click();
  }

  function handleFileChange() {
    const input = fileInputRef.current;
    if (!input) return console.error(`[dev]: Input not provided to function`);

    const file = input.files && input.files[0];
    if (!file) return NotifyWarn({ title: 'Банер не завантажено', message: '' });

    uploadFile(file);
  }

  async function uploadFile(file: File) {
    if (!entityId) return console.error(`[dev]: Entity id is not provided to the component`);

    let url: string;

    try {
      NotifySuccess({ title: 'Завантажуємо банер...', message: file.name });

      if (entityType === 'user') {
        const res = await API.putUserCover({ id: entityId }, file);
        url = res.url;
      } else if (entityType === 'dubber') {
        const res = await API.putDubberCover({ id: entityId }, file);
        url = res.url;
      } else {
        return console.error(`[dev]: Entity type cannot be handled (${entityType})`);
      }

      setBannerUrl(url);

      NotifySuccess({ title: 'Банер оновлено', message: file.name });
    } catch (e) {
      HandleClientError(e);
    }
  }



  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[250px]">
    <StyledImage src={bannerUrl} width="100%" height="100%" alt={`Team banner`} rounded={4} />

    {/* Edit layout */}
    {isEdit && <>
      <input type="file" accept=".png,.jpg,.webp" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />

      <div className="w-[32px] h-[32px] flex justify-center items-center rounded-[32px] absolute top-[16px] right-[16px] opacity-[.5] bg-dark-primary">
        <MaterialSymbol icon="edit" size={16} color="#fff" />
      </div>

      <button className={cn(`cui-ub-upload`, isDrag && 'cui-ub-upload--visible')} onClick={focusFileSelect} ref={fileSelectRef}>
        <MaterialSymbol icon="backup" size={128} className="text-white max-xl:!text-[64px]" />

        <div className="flex flex-col items-center gap-[8px]">
          <P text="завантажити" size={32} className="text-white font-manrope font-bold uppercase" />
          <P text=".png .jpg .webp, до 2х мегабайтів" className="text-white font-manrope" />
          <P text="Рекомендований розмір: 1920x500" className="text-white font-manrope" />
        </div>
      </button>
    </>}

    {/* Report button */}
    {!isEdit && <ReportButton className="!absolute top-[8px] right-[8px] opacity-[.5] duration-200 hover:opacity-100 focus-visible:opacity-100" type="icon" text="Надіслати скаргу" />}
  </div>;
};

export default UserLayout;