'use client';

import { FC, useMemo, useState } from 'react';
import Link from 'next/link';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import StyledButton from '~/components/Styled/StyledButton';
import StyledImage from '~/components/Styled/StyledImage';
import Tooltip from '~/components/UI/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import { useAppSelector } from '~/hooks/redux';
import { Dubber, DubberMember } from '~/interfaces/DubberIntf';
import { User, UserLib } from '~/interfaces/UserIntf';
import { Routes } from '~/routes';
import { DubberParseRoleName } from '~/utils/data-mappers';
import parseUserLibUI from '~/utils/parse-user-lib-ui';



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
  lib: UserLib
  user: User
}



export const UserStatisticsItem: FC<IUserStatisticsItemProps> = ({ animeSeen, dubber, viewtime }) => {
  return <>
    {dubber && <Link href={Routes.dubber.path({ slug: dubber.team.slug })}>
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
    </Link>}

    {!dubber && <div className="pgu-stat-item">
      <MaterialSymbol icon={animeSeen ? 'bookmark_added' : viewtime ? 'acute' : 'question_answer'} size={80} className="text-white shrink-0 max-lg:!text-[64px]" />

      <div className="pgu-stat-item-content">
        <P text={animeSeen ?? viewtime ?? ''} size={32} bold className="text-white font-manrope" />
        <P text={animeSeen ? 'Аніме переглянуто' : viewtime ? 'Час перегляду (год)' : ''} size={16} center className="text-grey-new font-manrope" />
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

  const [title, setTitle] = useState(lib.settings.name);
  const [icon, setIcon] = useState<SymbolCodepoints>('favorite');

  const isOwner = currentUser.id === user.id;
  const isLibHidden = lib.settings.hidden;
  const showLib = isOwner || !isLibHidden;



  useMemo(() => {
    parseUserLibUI({ type: lib.type, setTitle, setIcon });
  }, []);



  return showLib && <Link href={'#'} className="grow basis-[290px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <StyledButton as="div" className="w-full flex flex-col items-center gap-[8px] p-[16px]">
      <MaterialSymbol icon={icon} size={80} className="text-white" fill={icon === 'favorite'} />

      <div className="flex items-center gap-[16px]">
        {isOwner && isLibHidden && <Tooltip content="Прихована тека, доступна тільки вам" className="flex items-center">
          <MaterialSymbol icon={'visibility_lock'} size={20} className="text-grey-new" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <P text={title} size={16} bold className="text-white" />
          <P text={`(${lib.titles.length})`} size={16} className="text-grey-new" />
        </div>
      </div>
    </StyledButton>
  </Link>;
};