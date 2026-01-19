import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import { IcoSocialTelegram } from '~/assets/Social';
import StyledImage from '~/components/Styled/StyledImage';
import routes from '~/routes';
import { IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import cn from '~/utils/classnames';



interface IDubberAboutLinkProps {
  link: string
  label: 'telegram' | 'tiktok' | 'youtube' | 'instagram' | 'monobank' | 'diaka' | 'bymeacoffee' | 'patreon'
}

interface IDubberTeamMemberProps {
  member: IDubberMemberCard
}



export const DubberAboutLink: FC<IDubberAboutLinkProps> = ({ link, label }) => {
  return <li>
    <Link href={link} className="dpg-about_link flex items-center gap-[16px] py-[6px] px-[16px]" prefetch={false}>
      {label === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#555" />}
      {label !== 'telegram' && <MaterialSymbol icon="ungroup" size={24} color="#555" />}

      <p className="text-grey-new text-[24px] font-space-grotesk max-lg:text-[16px]">{`${label.charAt(0).toUpperCase()}${label.slice(1)}`}</p>
    </Link>
  </li>;
};



export const DubberTeamMember: FC<IDubberTeamMemberProps> = (props) => {
  return <Link href={routes.user.path({ username: props.member.username })} className="p-[16px] flex grow min-w-[250px] basis-[270px] max-w-[420px] gap-[16px] items-center bg-dark-medium rounded-[4px] w-full duration-200 border border-dark-light hover:bg-dark-light focus-visible:bg-dark-light max-sm:max-w-none outline-none" prefetch={false}>
    <StyledImage height="64px" width="64px" src={props.member.avatar} className="rounded-[4px] overflow-hidden" />

    <div className="flex flex-col gap-[8px] w-full">
      <p className={cn(`text-white font-space-grotesk text-[20px] max-md:text-[20px] line-clamp-1 text-ellipsis break-all w-full`, props.member.role === 'leader' && 'font-bold !text-primary')}>@{props.member.username}</p>

      <div className="flex items-center gap-[8px]">
        {props.member.role === 'leader' && <MaterialSymbol icon="star" size={24} color="#fff" />}
        {props.member.role === 'editor' && <MaterialSymbol icon="edit" size={24} color="#555" />}
        {props.member.role === 'member' && <MaterialSymbol icon="supervisor_account" size={24} color="#555" />}

        {props.member.role === 'leader' && <p className="text-white">Лідер</p>}
        {props.member.role !== 'leader' && <p className="text-grey-new">
          {props.member.role === 'editor' && 'Редактор'}
          {props.member.role === 'member' && 'Учасник'}
        </p>}
      </div>
    </div>
  </Link>;
};