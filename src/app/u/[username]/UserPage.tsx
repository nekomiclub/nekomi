'use client';

import { FC, useMemo, useState } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Link from 'next/link';

import StyledButtonOld from '~/components/Styled/StyledButton.old';
import Tooltip from '~/components/UI/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import { useAppSelector } from '~/hooks/redux';
import { Dubber, DubberMember } from '~/interfaces/DubberIntf';
import { IUserLib, UserCardType } from '~/interfaces/IUser';
import { Routes } from '~/routes';
import parseUserLibUI, { parseLibTitle } from '~/utils/parse-user-lib-ui';



interface IUserStatisticsItemProps {
  animeSeen?: number
  viewtime?: number

  dubber?: {
    team: Dubber
    member: DubberMember
  }
}

interface IUserTitleProps {
  title: string
}

interface IUserLibItemProps {
  lib: IUserLib
  user: UserCardType
}



export const UserStatisticsItem: FC<IUserStatisticsItemProps> = ({ animeSeen, dubber, viewtime }) => {
  return <>
    {/* {dubber && <Link href={Routes.dubber.path({ slug: dubber.team.slug })}>
      <StyledButton as="div" className="pgu-stat-item rounded-[2px]">
        <StyledImage src={dubber.team.avatar} width="80px" height="80px" rounded={4} />

        <div className="pgu-stat-item-content">
          <P text={dubber.team.nameUkr} size={32} bold className="text-white font-space-grotesk" />

          <div className="flex items-center gap-[8px]">
            <MaterialSymbol icon="query_builder" size={20} className="text-grey-new" />
            <P text={`${DubberParseRoleName(dubber.member.role)} в команді озвучення`} size={16} center className="text-grey-new font-manrope" />
          </div>
        </div>
      </StyledButton>
    </Link>} */}

    {!dubber && <div className="pgu-stat-item">
      <MaterialSymbol icon={animeSeen !== undefined ? 'bookmark_added' : viewtime !== undefined ? 'acute' : 'question_mark'} size={80} className="text-white shrink-0 max-lg:!text-[64px]" />

      <div className="pgu-stat-item-content">
        <P text={animeSeen ?? viewtime ?? ''} size={32} bold className="text-white font-manrope" />
        <P text={animeSeen !== undefined ? 'Аніме переглянуто' : viewtime !== undefined ? 'Час перегляду (год)' : ''} size={16} center className="text-grey-new font-manrope" />
      </div>
    </div>}
  </>;
};

export const UserTitle: FC<IUserTitleProps> = ({ title }) => {
  return <div className="flex items-center gap-[16px]">
    <H3 text={title} size={32} className="text-white" bold />
    <div className="w-full h-[2px] bg-dark-light"></div>
  </div>;
};

export const UserLibItem: FC<IUserLibItemProps> = ({ lib, user }) => {
  const currentUser = useAppSelector(state => state.user);

  const [title, setTitle] = useState(parseLibTitle(lib.type));
  const [icon, setIcon] = useState<SymbolCodepoints>('favorite');

  const isOwner = currentUser.id === user.id;
  const isPublic = lib.is_public;



  useMemo(() => {
    parseUserLibUI({ type: lib.type, setTitle, setIcon });
  }, []);



  return <Link href={Routes.userLib.path({ username: user.username, libId: lib.id })} className="grow basis-[290px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <StyledButtonOld as="div" className="w-full flex flex-col items-center gap-[8px] p-[16px]">
      <MaterialSymbol icon={icon} size={80} className="text-white" fill={icon === 'favorite'} />

      <div className="flex items-center gap-[16px]">
        {isOwner && !isPublic && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
          <MaterialSymbol icon={'visibility_lock'} size={20} className="text-grey-new" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <P text={title} size={16} bold className="text-white" />
          {lib.anime_ids.length !== 0 && <P text={`(${lib.anime_ids.length})`} size={16} className="text-grey-new" />}
        </div>
      </div>
    </StyledButtonOld>
  </Link>;
};