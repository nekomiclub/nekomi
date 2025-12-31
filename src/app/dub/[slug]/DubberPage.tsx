'use client';

import { NextPage } from 'next';
import { useState } from 'react';
import { PopupButton, PopupWindow } from '@fullkekw/popup';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoSocialTelegram } from '~/assets/Social';
import StyledImage from '~/components/Styled/StyledImage';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { Dubber } from '~/interfaces/DubberIntf';
import IDubber from '~/interfaces/IDubber';
import { Routes } from '~/routes';
import { DubberFullType, IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import { cn } from '~/utils/classnames';
import { wordDeclination } from '~/utils/utils';




interface IDubberAboutLinkProps {
  link: string
  label: 'telegram' | 'tiktok' | 'youtube' | 'instagram' | 'monobank' | 'diaka' | 'bymeacoffee' | 'patreon'
}



export const DubberAnswerInvite: NextPage<{ dubber: Dubber, invite?: 'accept' | 'decline' }> = ({ dubber, invite }) => {
  const router = useRouter();
  const pathname = usePathname();

  const dialogId = 'dubber-invite-answerDialog';
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [inviteType, setInviteType] = useState<'accept' | 'decline' | 'invalid'>('invalid');



  // useEffect(() => {
  //   if (invite !== 'accept' && invite !== 'decline') return router.replace(pathname, { scroll: false });

  //   (async function () {
  //     try {
  //       await APIOld.dubberGetInvite({ dubberId: dubber.id });
  //     } catch (e) {
  //       setIsPopupShowing(true);
  //       setInviteType('invalid');

  //       return;
  //     }

  //     try {
  //       if (invite === 'accept') {
  //         setInviteType('accept');
  //         await APIOld.dubberInviteAccept({ dubberId: dubber.id, userId: '' });
  //       };

  //       if (invite === 'decline') {
  //         setInviteType('decline');
  //         await APIOld.dubberInviteDecline({ dubberId: dubber.id, userId: '' });
  //       };

  //       setIsPopupShowing(true);
  //     } catch (e) {
  //       HandleClientError(e);
  //     }
  //   })();

  //   router.replace(pathname, { scroll: false });
  // }, []);



  return isPopupShowing && <PopupWindow className="max-w-[720px] w-full h-[500px] rounded-[4px] overflow-hidden bg-dark-primary block" id={dialogId} isOpen>
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

    <PopupButton popupId={dialogId} className="absolute bottom-[24px] left-[50%] translate-x-[-50%] flex items-center gap-[16px] px-[16px] py-[8px] rounded-[4px] bg-dark-medium border border-dark-light duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      {inviteType === 'accept' && <MaterialSymbol icon="how_to_reg" size={24} className="text-white" />}
      {inviteType === 'decline' && <MaterialSymbol icon="archive" size={24} className="text-white" />}
      {inviteType === 'invalid' && <MaterialSymbol icon="sentiment_sad" size={24} className="text-white" />}

      <p className="text-white font-manrope uppercase">{inviteType === 'accept' ? 'Чудово' : 'зрозуміло'}</p>
    </PopupButton>
  </PopupWindow>;
};

export const DubberAbout: NextPage<{ dubber: DubberFullType }> = ({ dubber }) => {
  return <div className="flex flex-col gap-[24px]">
    <ul className="w-full flex items-center justify-center flex-wrap gap-[8px]">
      {dubber.socials?.telegram && <DubberAboutLink link={dubber.socials?.telegram ?? '#'} label="telegram" />}
      {dubber.socials?.tiktok && <DubberAboutLink link={dubber.socials?.tiktok ?? '#'} label="tiktok" />}
      {dubber.socials?.youtube && <DubberAboutLink link={dubber.socials?.youtube ?? '#'} label="youtube" />}
      {dubber.socials?.instagram && <DubberAboutLink link={dubber.socials?.instagram ?? '#'} label="instagram" />}
      {dubber.support?.monobank && <DubberAboutLink link={dubber.support?.monobank ?? '#'} label="monobank" />}
      {dubber.support?.diaka && <DubberAboutLink link={dubber.support?.diaka ?? '#'} label="diaka" />}
      {dubber.support?.bymeacoffee && <DubberAboutLink link={dubber.support?.bymeacoffee ?? '#'} label="bymeacoffee" />}
      {dubber.support?.patreon && <DubberAboutLink link={dubber.support?.patreon ?? '#'} label="patreon" />}
    </ul>

    <div className="w-full h-[1px] bg-dark-light"></div>

    {dubber.about && <p className="w-full text-white text-[20px] font-manrope max-lg:text-[16px]">{dubber.about}</p>}
    {!dubber.about && <p className="w-full text-grey-new font-manrope italic">Опис відсутній</p>}
  </div>;
};

export const DubberAnimeDubbed: NextPage<{ dubber: IDubber, animes: HydratedAnime[] }> = ({ animes, dubber }) => {
  return <div className="flex flex-col gap-[16px]">
    <div className="flex items-center gap-[24px] justify-between">
      <h3 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">З озвученням {dubber.name}</h3>
    </div>

    <div className="grid gap-[16px] grid-cols-6 max-[1440px]:grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 grid-rows-1">
      {/* {hydratedAnimes.slice(0, 6).map((hydrated, i) => {
        return <AnimeItem anime={hydrated} key={`dubbed_anime-${dubber.id}--${i}`} />;
      })} */}
    </div>
  </div>;
};

export const DubberTeam: NextPage<{ members: IDubberMemberCard[] }> = ({ members }) => {
  return <div className="flex flex-col gap-[16px]">
    <h3 className="text-white text-[32px] font-bold font-manrope max-lg:text-[24px]">Команда - {members.length} {wordDeclination(members.length, ['учасник', 'учасника', 'учасників'])}</h3>

    <div className="flex flex-wrap gap-[16px]">
      {members.filter(el => el.role === 'leader').map(member => {
        return <DubberTeamMember member={member} key={`member--${member.id}`} />;
      })}

      {members.filter(el => el.role === 'editor').map(member => {
        return <DubberTeamMember member={member} key={`member--${member.id}`} />;
      })}

      {members.filter(el => el.role === 'member').map(member => {
        return <DubberTeamMember member={member} key={`member--${member.id}`} />;
      })}
    </div>
  </div>;
};



function DubberAboutLink({ link, label }: IDubberAboutLinkProps) {
  return <li>
    <Link href={link} className="dubber-about_link flex items-center gap-[16px] py-[6px] px-[16px]" prefetch={false}>
      {label === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#555" />}
      {label !== 'telegram' && <MaterialSymbol icon="ungroup" size={24} color="#555" />}

      <p className="text-grey-new text-[24px] font-space-grotesk max-lg:text-[16px]">{`${label.charAt(0).toUpperCase()}${label.slice(1)}`}</p>
    </Link>
  </li>;
}

function DubberTeamMember({ member }: { member: IDubberMemberCard }) {
  return <Link href={Routes.user.path({ username: member.username })} className="p-[16px] flex grow min-w-[250px] basis-[270px] max-w-[420px] gap-[16px] items-center bg-dark-medium rounded-[4px] w-full duration-200 border border-dark-light hover:bg-dark-light focus-visible:bg-dark-light max-sm:max-w-none outline-none" prefetch={false}>
    <StyledImage height="64px" width="64px" src={member.avatar} className="rounded-[4px] overflow-hidden" />

    <div className="flex flex-col gap-[8px] w-full">
      <p className={cn(`text-white font-space-grotesk text-[20px] max-md:text-[20px] line-clamp-1 text-ellipsis break-all w-full`, member.role === 'leader' && 'font-bold !text-primary')}>@{member.username}</p>

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
  </Link>;
}