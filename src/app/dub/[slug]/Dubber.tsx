'use client'

import { useState } from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoSocialTelegram } from '~/assets/Social';
import { cn, copyToClipboard, TitleCard } from '~/components/Components';
import { wordDeclination } from '~/components/handlers';
import { NotifySuccess } from '~/components/UI/NotifyToast';
import StyledImage from '~/components/UI/StyledImage';
import Tooltip from '~/components/UI/Tooltip';
import { config } from '~/config';
import { useAppSelector } from '~/hooks/redux';
import { IDubber, IDubberMember } from '~/interfaces/IDubber';
import { ITitle } from '~/interfaces/ITitle';
import { IUser } from '~/interfaces/IUser';
import { Routes } from '~/routes';



interface IDubberAboutLinkProps {
  link: string
  label: 'telegram' | 'tiktok' | 'youtube' | 'instagram' | 'monobank' | 'diaka' | 'bymeacoffee' | 'patreon'
}



export const DubberBanner: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="w-full h-fit aspect-[3.8] relative rounded-[4px] overflow-hidden max-h-[500px] min-h-[200px]">
    <Image src={dubber.banner} fill alt={`Team banner`} />
  </div>
}

export const DubberHeader: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  const user = useAppSelector(state => state.user);
  const canEdit = user.capabilities.includes('admin') || user.capabilities.includes('root') || dubber.members.find(el => el.id === user.id)?.role === 'leader';

  return <div className="flex gap-[24px] absolute top-0 w-full pr-[32px]">
    {/* Avatar placeholder */}
    <div className="relative w-[256px] h-[128px] shrink-0">
      <Image src={dubber.avatar} width={256} height={256} alt="Dubber avatar" className="absolute left-0 bottom-0 rounded-[4px] overflow-hidden -top-[128px]" />
    </div>

    <div className="w-full flex items-center justify-between gap-[24px]">
      <div className="flex flex-col gap-[8px]">
        <h2 className="text-white text-[32px] font-bold font-manrope">{dubber.nameUkr}</h2>
        <h4 className="text-grey-new text-[24px] font-space-grotesk">@{dubber.slug}</h4>
      </div>

      <div className="flex gap-[4px]">
        {canEdit && <DubberHeaderOpenSettings />}
        <DubberHeaderCopyLink />
      </div>
    </div>
  </div>
}

export const DubberAbout: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <div className="flex gap-[24px]">
    {dubber.description && <p className="w-full text-white text-[24px] font-manrope">{dubber.description}</p>}
    {!dubber.description && <p className="w-full text-grey-new font-manrope italic">Опис відсутній</p>}

    <div className="w-[1px] h-auto bg-dark-light"></div>

    <ul className="w-[400px] flex flex-col gap-[4px]">
      {dubber.socials.telegram && <DubberAboutLink link={dubber.socials.telegram ?? '#'} label="telegram" />}
      {dubber.socials.tiktok && <DubberAboutLink link={dubber.socials.tiktok ?? '#'} label="tiktok" />}
      {dubber.socials.youtube && <DubberAboutLink link={dubber.socials.youtube ?? '#'} label="youtube" />}
      {dubber.socials.instagram && <DubberAboutLink link={dubber.socials.instagram ?? '#'} label="instagram" />}
      {dubber.support.monobank && <DubberAboutLink link={dubber.support.monobank ?? '#'} label="monobank" />}
      {dubber.support.diaka && <DubberAboutLink link={dubber.support.diaka ?? '#'} label="diaka" />}
      {dubber.support.bymeacoffee && <DubberAboutLink link={dubber.support.bymeacoffee ?? '#'} label="bymeacoffee" />}
      {dubber.support.patreon && <DubberAboutLink link={dubber.support.patreon ?? '#'} label="patreon" />}
    </ul>
  </div>
}

export const DubberAnimeDubbed: NextPage<{ dubber: IDubber, dubbedAnime: ITitle[] }> = ({ dubbedAnime, dubber }) => {
  return <div className="flex flex-col gap-[16px]">
    <div className="flex items-center gap-[24px] justify-between">
      <h3 className="text-white text-[32px] font-bold font-manrope">З озвученням {dubber.nameUkr}</h3>
    </div>

    <div className="grid gap-[16px] grid-cols-6 max-[1440px]:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 grid-rows-1">
      {dubbedAnime.slice(0, 6).map(title => {
        return <TitleCard title={title} key={`dubber-dubbed--${title.code}`} className="max-md:min-w-[180px]" />
      })}
    </div>
  </div>
}

export const DubberTeam: NextPage<{ dubber: IDubber, members: IUser[] }> = ({ dubber, members }) => {
  return <div className="flex flex-col gap-[16px]">
    <h3 className="text-white text-[32px] font-bold font-manrope">Команда - {dubber.members.length} {wordDeclination(dubber.members.length, ['учасник', 'учасника', 'учасників'])}</h3>

    <div className="flex flex-wrap gap-[16px]">
      {members.map(user => {
        return <DubberTeamMember user={user} member={dubber.members.find(el => el.id === user.id)!} key={`dubber-team-member--${user.id}`} />
      })}
    </div>
  </div>
}




function DubberHeaderOpenSettings() {
  return <Tooltip content="Редагувати налаштування">
    <button className="p-[16px] rounded-[4px] bg-dark-medium flex justify-center items-center shrink-0 duration-200 hover:bg-dark-light focus-visible:bg-dark-light active:scale-[.95]">
      <MaterialSymbol icon="settings" size={24} color="#fff" />
    </button>
  </Tooltip>
}

function DubberHeaderCopyLink() {
  const pathname = usePathname();

  const [isLinkCopied, setIsLinkCopied] = useState(false);

  function copyLink() {
    copyToClipboard(pathname);
    setIsLinkCopied(true);

    NotifySuccess({ title: 'Copied!', message: 'Посилання на команду скопійовано в буфер обміну' })

    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  }

  return <Tooltip content="Скопіювати посилання на команду">
    <button className={cn('p-[16px] rounded-[4px] flex justify-center items-center shrink-0 duration-200 active:scale-[.95]', isLinkCopied ? 'bg-info-success' : 'bg-dark-medium hover:bg-dark-light focus-visible:bg-dark-light')} onClick={copyLink}>
      <MaterialSymbol icon="link" size={24} color="#fff" />
    </button>
  </Tooltip>
}

function DubberAboutLink({ link, label }: IDubberAboutLinkProps) {
  return <li>
    <Link href={link} target="_blank" className="dubber-about_link flex items-center gap-[16px] py-[6px]">
      {label === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#555" />}
      {label !== 'telegram' && <MaterialSymbol icon="ungroup" size={24} color="#555" />}

      <p className="text-grey-new font-space-grotesk">{`${label.charAt(0).toUpperCase()}${label.slice(1)}`}</p>
    </Link>
  </li>
}

function DubberTeamMember({ user, member }: { user: IUser, member: IDubberMember }) {
  return <Link href={`${config.URL.baseURL}/${Routes.user_profile.path}/${user.username}`} target="_blank" className="p-[16px] flex gap-[16px] items-center bg-dark-medium rounded-[4px] basis-[25%] grow max-w-[500px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
    <StyledImage height="64px" width="64px" src={user.avatar} className="rounded-[64px] overflow-hidden" />

    <div className="flex flex-col gap-[8px]">
      <p className={cn(`text-white font-space-grotesk text-[24px] line-clamp-1`, member.role === 'leader' && 'font-bold text-primary')}>@{user.username}</p>

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