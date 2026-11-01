'use client';

import { FC, useMemo, useState } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Link from 'next/link';

import routes from '~/routes';
import StyledButton from '~/shared/components/styled/StyledButton';
import { StyledH3, StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import { useAppSelector } from '~/shared/hooks/redux';
import { TTeam, TTeamMemberExtended, TUserLib, TUserMinified } from '~/shared/lib/api/api-types';
import parseUserLibUI, { parseLibTitle } from '~/utils/parse-user-lib-ui';



interface IUserStatisticsItemProps {
  animeSeen?: number
  viewtime?: number

  dubber?: {
    team: TTeam
    member: TTeamMemberExtended
  }
}

interface IUserTitleProps {
  title: string
}

interface IUserLibItemProps {
  lib: TUserLib
  user: TUserMinified
}



export const UserStatisticsItem: FC<IUserStatisticsItemProps> = (props) => {
  return <>
    {!props.dubber && <div className="pgu-stat-item">
      <MaterialSymbol icon={props.animeSeen !== undefined ? 'bookmark_added' : props.viewtime !== undefined ? 'acute' : 'question_mark'} size={80} className="text-white shrink-0 max-lg:!text-[64px]" />

      <div className="pgu-stat-item-content">
        <StyledM text={props.animeSeen ?? props.viewtime ?? ''} bold className="text-[32px]" />
        <StyledM text={props.animeSeen !== undefined ? 'Аніме переглянуто' : props.viewtime !== undefined ? 'Час перегляду (год)' : ''} center color="text-muted" />
      </div>
    </div>}
  </>;
};



export const UserTitle: FC<IUserTitleProps> = (props) => {
  return <div className="flex items-center gap-[16px]">
    <StyledH3 text={props.title} className="text-[32px] flex-shrink-0" bold />
    <div className="w-full h-[2px] bg-dark-light"></div>
  </div>;
};



export const UserLibItem: FC<IUserLibItemProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);

  const [title, setTitle] = useState(parseLibTitle(props.lib.type));
  const [icon, setIcon] = useState<SymbolCodepoints>('favorite');

  const isOwner = currentUser.id === props.user.id;
  const isPublic = props.lib.is_public;



  useMemo(() => {
    parseUserLibUI({ type: props.lib.type, setTitle, setIcon });
  }, []);



  return <Link href={routes.user_lib.path({ username: props.user.username, lib_id: props.lib.id })} className="grow basis-[290px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <StyledButton as="div" className="w-full flex flex-col items-center gap-[8px] p-[16px]">
      <MaterialSymbol icon={icon} size={80} className="text-white" fill={icon === 'favorite'} />

      <div className="flex items-center gap-[16px]">
        {isOwner && !isPublic && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
          <MaterialSymbol icon={'visibility_lock'} size={20} className="text-grey-new" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <StyledM text={title} bold />
          {props.lib.anime_ids.length !== 0 && <StyledM text={`(${props.lib.anime_ids.length})`} color="text-muted" />}
        </div>
      </div>
    </StyledButton>
  </Link>;
};