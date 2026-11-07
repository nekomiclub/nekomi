'use client';

import { FC, useMemo, useState } from 'react';
import TMaterialSymbolName from '@nekomi/icons/types';
import Link from 'next/link';

import Routes from '~/routes';
import StyledButton from '~/shared/components/styled/StyledButton';
import StyledIcon from '~/shared/components/styled/StyledIcon';
import { StyledH3, StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import { useAppSelector } from '~/shared/hooks/redux';
import { TTeam, TTeamMemberExtended, TUserLib, TUserMinified } from '~/shared/lib/api/api-types';
import { parseLibTitle, parseUserLibUI } from '~/shared/utilities/data-mappers';



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
      <StyledIcon icon={props.animeSeen !== undefined ? 'BookmarkAdded' : props.viewtime !== undefined ? 'Acute' : 'QuestionMark'} size={80} color="#fff" className="shrink-0 max-lg:w-[64px] max-lg:h-[64px]" />

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
  const [icon, setIcon] = useState<TMaterialSymbolName>('Favorite');

  const isOwner = currentUser.id === props.user.id;
  const isPublic = props.lib.is_public;



  useMemo(() => {
    parseUserLibUI({ type: props.lib.type, setTitle, setIcon });
  }, []);



  return <Link href={Routes.user_lib.path({ username: props.user.username, lib_id: props.lib.id })} className="grow basis-[290px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <StyledButton as="div" className="w-full flex flex-col items-center gap-[8px] p-[16px]">
      {icon === 'Favorite' && <StyledIcon icon={'FavoriteFill'} size={80} color="#fff" />}
      {icon !== 'Favorite' && <StyledIcon icon={icon} size={80} color="#fff" />}

      <div className="flex items-center gap-[16px]">
        {isOwner && !isPublic && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
          <StyledIcon icon="VisibilityLock" size={20} color="#555" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <StyledM text={title} bold />
          {props.lib.anime_ids.length !== 0 && <StyledM text={`(${props.lib.anime_ids.length})`} color="text-muted" />}
        </div>
      </div>
    </StyledButton>
  </Link>;
};