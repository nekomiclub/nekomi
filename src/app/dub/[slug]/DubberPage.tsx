'use client'

import { useEffect, useState } from 'react';
import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoSocialTelegram } from '~/assets/Social';
import AnimeItem from '~/components/AnimeItem';
import { HandleClientError } from '~/components/Errors';
import StyledImage from '~/components/StyledImage';
import { NotifySuccess } from '~/components/UI/NotifyToast';
import { UIReportButton } from '~/components/UI/Report';
import { UIText } from '~/components/UI/Text.ui';
import Tooltip from '~/components/UI/Tooltip';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { IDubber, IDubberMember } from '~/interfaces/IDubber';
import { IUser } from '~/interfaces/IUser';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import { wordDeclination } from '~/utils/handlers';
import { cn, copyToClipboard } from '~/utils/utils';



interface IDubberAboutLinkProps {
  link: string
  label: 'telegram' | 'tiktok' | 'youtube' | 'instagram' | 'monobank' | 'diaka' | 'bymeacoffee' | 'patreon'
}



export const DubberAnswerInvite: NextPage<{ dubber: IDubber, invite?: 'accept' | 'decline' }> = ({ dubber, invite }) => {
  const router = useRouter();
  const pathname = usePathname();

  const dialogId = 'dubber-invite-answerDialog';
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [inviteType, setInviteType] = useState<'accept' | 'decline' | 'invalid'>('invalid');



  useEffect(() => {
    if (invite !== 'accept' && invite !== 'decline') return router.replace(pathname, { scroll: false });

    (async function () {
      try {
        await API.dubberGetInvite({ dubberId: dubber.id })
      } catch (e) {
        setIsPopupShowing(true);
        setInviteType('invalid');

        return
      }

      try {
        if (invite === 'accept') {
          setInviteType('accept');
          await API.dubberInviteAccept({ dubberId: dubber.id, userId: '' })
        };

        if (invite === 'decline') {
          setInviteType('decline');
          await API.dubberInviteDecline({ dubberId: dubber.id, userId: '' })
        };

        setIsPopupShowing(true);
      } catch (e) {
        HandleClientError(e);
      }
    })();

    router.replace(pathname, { scroll: false })
  }, [])



  return isPopupShowing && <PopupLayer className="flex justify-center items-center">
    <PopupDialog className="max-w-[720px] w-full h-[500px] rounded-[4px] overflow-hidden bg-dark-primary block" id={dialogId} state>
      <StyledImage src={dubber.banner} width="100%" height="250px" />

      <div className="flex flex-col items-center gap-[16px] relative top-[-64px]">
        <StyledImage src={dubber.avatar} width="128px" height="128px" className="rounded-[128px] overflow-hidden" />

        <div className="flex flex-col gap-[8px] items-center">
          <p className="text-white text-[24px] font-bold text-center">{dubber.nameUkr}</p>
          <p className="text-grey-new font-manrope text-center">
            {inviteType === 'accept' && 'Ти прийняв запрошення в цю команду озвучення'}
            {inviteType === 'decline' && 'Ти відхилив запрошення в цю команду озвучення'}
            {inviteType === 'invalid' && 'Ти не був запрошений в цю команду озвучення або в тебе нема акаунту'}
          </p>
        </div>
      </div>

      <PopupButton togglePopupId={dialogId} className="absolute bottom-[24px] left-[50%] translate-x-[-50%] flex items-center gap-[16px] px-[16px] py-[8px] rounded-[4px] bg-dark-medium border border-dark-light duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        {inviteType === 'accept' && <MaterialSymbol icon="how_to_reg" size={24} className="text-white" />}
        {inviteType === 'decline' && <MaterialSymbol icon="archive" size={24} className="text-white" />}
        {inviteType === 'invalid' && <MaterialSymbol icon="sentiment_sad" size={24} className="text-white" />}

        <p className="text-white font-manrope uppercase">{inviteType === 'accept' ? 'Чудово' : 'зрозуміло'}</p>
      </PopupButton>
    </PopupDialog>
  </PopupLayer>
}

export const DubberBanner: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[200px]">
    <StyledImage src={dubber.banner} width="100%" height="100%" alt={`Team banner`} />

    <UIReportButton className="!absolute top-[8px] right-[8px] opacity-[.5] duration-200 hover:opacity-100 focus-visible:opacity-100" type="icon" text="Поскаржитися на команду озвучення" />
  </div>
}

export const DubberHeader: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  const user = useAppSelector(state => state.user);
  const canEdit = user.capabilities.includes('admin') || user.capabilities.includes('root') || dubber.members.find(el => el.id === user.id)?.role === 'leader';

  return <div className="flex gap-[24px] absolute top-0 w-full pr-[32px] max-md:sm-[16px] max-md:flex-col">
    {/* Avatar placeholder */}
    <div className="relative w-[256px] h-[128px] shrink-0 max-md:w-[128px] max-md:h-[64px]">
      <StyledImage src={dubber.avatar} width={'256px'} height={'256px'} alt="Dubber avatar" className="absolute left-0 bottom-0 rounded-[4px] overflow-hidden -top-[128px] max-md:w-[128px] max-md:h-[128px] max-md:top-[-64px]" />
    </div>

    <div className="w-full flex items-center justify-between gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <UIText text={dubber.nameUkr} type="h1" className="break-all" />
        <UIText text={`@${dubber.slug}`} type="h3" className="text-grey-new font-space-grotesk break-all font-normal" />
      </div>

      <div className="flex gap-[4px] max-md:absolute max-md:top-[16px] max-md:right-[32px] max-sm:right-[16px]">
        {canEdit && <DubberHeaderOpenSettings />}
        <DubberHeaderCopyLink />
      </div>
    </div>
  </div>
}

export const DubberAbout: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="flex flex-col gap-[24px]">
    <ul className="w-full flex items-center justify-center flex-wrap gap-[8px]">
      {dubber.socials.telegram && <DubberAboutLink link={dubber.socials.telegram ?? '#'} label="telegram" />}
      {dubber.socials.tiktok && <DubberAboutLink link={dubber.socials.tiktok ?? '#'} label="tiktok" />}
      {dubber.socials.youtube && <DubberAboutLink link={dubber.socials.youtube ?? '#'} label="youtube" />}
      {dubber.socials.instagram && <DubberAboutLink link={dubber.socials.instagram ?? '#'} label="instagram" />}
      {dubber.support.monobank && <DubberAboutLink link={dubber.support.monobank ?? '#'} label="monobank" />}
      {dubber.support.diaka && <DubberAboutLink link={dubber.support.diaka ?? '#'} label="diaka" />}
      {dubber.support.bymeacoffee && <DubberAboutLink link={dubber.support.bymeacoffee ?? '#'} label="bymeacoffee" />}
      {dubber.support.patreon && <DubberAboutLink link={dubber.support.patreon ?? '#'} label="patreon" />}
    </ul>

    <div className="w-full h-[1px] bg-dark-light"></div>

    {dubber.description && <p className="w-full text-white text-[20px] font-manrope max-lg:text-[16px]">{dubber.description}</p>}
    {!dubber.description && <p className="w-full text-grey-new font-manrope italic">Опис відсутній</p>}
  </div>
}

export const DubberAnimeDubbed: NextPage<{ dubber: IDubber, hydratedAnimes: HydratedAnime[] }> = ({ hydratedAnimes, dubber }) => {
  return <div className="flex flex-col gap-[16px]">
    <div className="flex items-center gap-[24px] justify-between">
      <h3 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">З озвученням {dubber.nameUkr}</h3>
    </div>

    <div className="grid gap-[16px] grid-cols-6 max-[1440px]:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 grid-rows-1">
      {hydratedAnimes.slice(0, 6).map((hydrated, i) => {
        return <AnimeItem hydrated={hydrated} key={`dubbed_anime-${dubber.id}--${i}`} />
      })}
    </div>
  </div>
}

export const DubberTeam: NextPage<{ dubber: IDubber, members: IUser[] }> = ({ dubber, members }) => {
  return <div className="flex flex-col gap-[16px]">
    <h3 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">Команда - {dubber.members.length} {wordDeclination(dubber.members.length, ['учасник', 'учасника', 'учасників'])}</h3>

    <div className="flex flex-wrap gap-[16px]">
      {dubber.members.filter(el => el.role === 'leader').map(member => {
        return <DubberTeamMember user={members.find(el => el.id === member.id)!} member={member} key={`dubber-team-member--${member.id}`} />
      })}

      {dubber.members.filter(el => el.role === 'editor').map(member => {
        return <DubberTeamMember user={members.find(el => el.id === member.id)!} member={member} key={`dubber-team-member--${member.id}`} />
      })}

      {dubber.members.filter(el => el.role === 'member').map(member => {
        return <DubberTeamMember user={members.find(el => el.id === member.id)!} member={member} key={`dubber-team-member--${member.id}`} />
      })}
    </div>
  </div>
}




function DubberHeaderOpenSettings() {
  const pathname = usePathname();

  return <Tooltip content="Редагувати налаштування">
    <Link href={`${pathname}${Routes.dubber_settings.path}`} className="p-[16px] rounded-[4px] bg-dark-medium flex justify-center items-center shrink-0 duration-200 hover:bg-dark-light focus-visible:bg-dark-light active:scale-[.95] max-md:p-[12px] border border-dark-light outline-none">
      <MaterialSymbol icon="settings" size={24} color="#fff" />
    </Link>
  </Tooltip>
}

function DubberHeaderCopyLink() {
  const pathname = usePathname();

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  function copyLink() {
    copyToClipboard(`${config.URL.baseURL}${pathname}`);
    setIsLinkCopied(true);

    NotifySuccess({ title: 'Copied!', message: 'Посилання на команду скопійовано в буфер обміну' })

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  }

  return <Tooltip content="Скопіювати посилання на команду">
    <button className={cn('p-[16px] rounded-[4px] flex justify-center items-center shrink-0 duration-200 active:scale-[.95] border outline-none', isLinkCopied ? 'bg-info-success border-info-success' : 'bg-dark-medium hover:bg-dark-light focus-visible:bg-dark-light max-md:p-[12px] border-dark-light')} onClick={copyLink}>
      <MaterialSymbol icon="link" size={24} color="#fff" />
    </button>
  </Tooltip>
}

function DubberAboutLink({ link, label }: IDubberAboutLinkProps) {
  return <li>
    <Link href={link} className="dubber-about_link flex items-center gap-[16px] py-[6px] px-[16px]">
      {label === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#555" />}
      {label !== 'telegram' && <MaterialSymbol icon="ungroup" size={24} color="#555" />}

      <p className="text-grey-new text-[24px] font-space-grotesk max-lg:text-[16px]">{`${label.charAt(0).toUpperCase()}${label.slice(1)}`}</p>
    </Link>
  </li>
}

function DubberTeamMember({ user, member }: { user: IUser, member: IDubberMember }) {
  return <Link href={`${config.URL.baseURL}/${Routes.user_profile.path}/${user.username}`} className="p-[16px] flex grow min-w-[250px] basis-[270px] max-w-[420px] gap-[16px] items-center bg-dark-medium rounded-[4px] w-full duration-200 border border-dark-light hover:bg-dark-light focus-visible:bg-dark-light max-sm:max-w-none outline-none">
    <StyledImage height="64px" width="64px" src={user.avatar} className="rounded-[4px] overflow-hidden" />

    <div className="flex flex-col gap-[8px] w-full">
      <p className={cn(`text-white font-space-grotesk text-[20px] max-md:text-[20px] line-clamp-1 text-ellipsis break-all w-full`, member.role === 'leader' && 'font-bold !text-primary')}>@{user.username}</p>

      <div className="flex items-center gap-[8px]">
        {member.role === 'leader' && <MaterialSymbol icon="star" size={24} color="#fff" />}
        {member.role === 'editor' && <MaterialSymbol icon="edit" size={24} color="#555" />}
        {member.role === 'member' && <MaterialSymbol icon="supervisor_account" size={24} color="#555" />}

        {member.role === 'leader' && <p className="text-white">Лідер</p>}
        {member.role !== 'leader' && <p className="text-grey-new">
          {member.role === 'editor' && 'Редактор'}
          {member.role === 'member' && 'Учасник'}
        </p>}
      </div>
    </div>
  </Link>
}