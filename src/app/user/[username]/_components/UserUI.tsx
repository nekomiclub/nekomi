'use client';

import { FC, useMemo, useState } from 'react';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Link from 'next/link';

import StyledButtonOld from '~/components/styled/StyledButton.old';
import Tooltip from '~/components/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import { useAppSelector } from '~/hooks/redux';
import IDubber, { IDubberMember } from '~/interfaces/IDubber';
import { IUserLib, UserCardType } from '~/interfaces/IUser';
import routes from '~/routes';
import parseUserLibUI, { parseLibTitle } from '~/utils/parse-user-lib-ui';



interface IUserStatisticsItemProps {
  animeSeen?: number
  viewtime?: number

  dubber?: {
    team: IDubber
    member: IDubberMember
  }
}

interface IUserTitleProps {
  title: string
}

interface IUserLibItemProps {
  lib: IUserLib
  user: UserCardType
}



export const UserStatisticsItem: FC<IUserStatisticsItemProps> = (props) => {
  return <>
    {!props.dubber && <div className="pgu-stat-item">
      <MaterialSymbol icon={props.animeSeen !== undefined ? 'bookmark_added' : props.viewtime !== undefined ? 'acute' : 'question_mark'} size={80} className="text-white shrink-0 max-lg:!text-[64px]" />

      <div className="pgu-stat-item-content">
        <P text={props.animeSeen ?? props.viewtime ?? ''} size={32} bold className="text-white font-manrope" />
        <P text={props.animeSeen !== undefined ? 'Аніме переглянуто' : props.viewtime !== undefined ? 'Час перегляду (год)' : ''} size={16} center className="text-grey-new font-manrope" />
      </div>
    </div>}
  </>;
};



export const UserTitle: FC<IUserTitleProps> = (props) => {
  return <div className="flex items-center gap-[16px]">
    <H3 text={props.title} size={32} className="text-white" bold />
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



  return <Link href={routes.user_lib.path({ username: props.user.username, libId: props.lib.id })} className="grow basis-[290px] w-full max-lg:basis-[250px] max-md:basis-[220px] max-sm:basis-[160px]">
    <StyledButtonOld as="div" className="w-full flex flex-col items-center gap-[8px] p-[16px]">
      <MaterialSymbol icon={icon} size={80} className="text-white" fill={icon === 'favorite'} />

      <div className="flex items-center gap-[16px]">
        {isOwner && !isPublic && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
          <MaterialSymbol icon={'visibility_lock'} size={20} className="text-grey-new" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <P text={title} size={16} bold className="text-white" />
          {props.lib.anime_ids.length !== 0 && <P text={`(${props.lib.anime_ids.length})`} size={16} className="text-grey-new" />}
        </div>
      </div>
    </StyledButtonOld>
  </Link>;
};