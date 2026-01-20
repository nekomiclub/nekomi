'use client';

import { FC, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import StyledImage from '~/components/styled/StyledImage';
import { DubberRoleType } from '~/interfaces/IDubber';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import routes from '~/routes';
import { DubberFullType, IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';
import { DubberParseRoleName } from '~/utils/data-mappers';
import { getUTC, timestampToDayMonth } from '~/utils/utils';



interface IProps {
  member: IDubberMemberCard
  currentUser: IUserState
  dubber: DubberFullType

  kickMember: (id: string, username: string) => void
}



const TSettingsMember: FC<IProps> = (props) => {
  const canKick = props.currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE) /* || currentUser.permissions.includes('admin') || currentUser.permissions.includes('dubberEditEditors') */;
  const canRedactRole = canKick && props.currentUser.id !== props.member.id || (props.currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE)) /* || currentUser.permissions.includes('admin')) */;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberRole, setMemberRole] = useState(props.member.role);



  async function changeRole(role: DubberRoleType) {

  }



  return <div className="w-full rounded-[2px] border border-dark-medium flex justify-between gap-[16px] items-center p-[8px] max-md:items-start">
    <div className="w-full">
      <Link href={routes.user.path({ username: props.member.username })} className="flex items-center gap-[24px] w-fit max-md:flex-col max-md:items-start max-md:gap-[8px]" prefetch={false}>
        <StyledImage src={props.member.avatar} width="48px" height="48px" className="rounded-[4px] overflow-hidden" />

        <div className="flex flex-col gap-[4px]">
          <p className="text-white font-space-grotesk">@{props.member.username}</p>

          <div className="flex items-center gap-[8px]">
            <MaterialSymbol icon="calendar_add_on" size={16} color="#555" />
            <p className="text-grey-new text-[12px] font-manrope">Учасник з: {timestampToDayMonth(getUTC(props.member.member_since).timestamp)}</p>
          </div>
        </div>
      </Link>
    </div>

    <Menu stateSetter={setIsMenuOpen} settings={{ align: 'end' }} id={`dubber-settings-memberSettings--${props.member.id}`}>
      <MenuTrigger anchor className="flex items-center gap-[16px] p-[8px]" disabled={!canRedactRole}>
        <div className="flex items-center gap-[8px]">
          {memberRole === 'leader' && <MaterialSymbol icon="star" size={16} color="#fff" />}
          {memberRole === 'editor' && <MaterialSymbol icon="edit" size={16} color="#fff" />}
          {memberRole === 'member' && <MaterialSymbol icon="group" size={16} color="#fff" />}

          <p className="text-white font-manrope">{DubberParseRoleName(memberRole)}</p>
        </div>

        {canRedactRole && <MaterialSymbol icon="arrow_drop_down" size={16} color="#fff" className={cn(`duration-200`, isMenuOpen && 'rotate-180')} />}
      </MenuTrigger>

      <MenuWrapper className="flex flex-col w-[160px] bg-dark-bright border border-dark-light rounded-[2px]">
        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('leader')}>
          <MaterialSymbol icon="star" size={16} color="#fff" />
          <p className="text-white font-manrope">Лідер</p>
        </button>

        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('editor')}>
          <MaterialSymbol icon="edit" size={16} color="#fff" />
          <p className="text-white font-manrope">Редактор</p>
        </button>

        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('member')}>
          <MaterialSymbol icon="group" size={16} color="#fff" />
          <p className="text-white font-manrope">Учасник</p>
        </button>
      </MenuWrapper>
    </Menu>

    {/* {canKick && <Tooltip content="Видалити учасника">
      <button className="p-[8px] flex justify-center items-center rounded-[2px] duration-200 hover:bg-info-error focus-visible:bg-info-error" onClick={() => kickMember(user.id, user.username)}>
        <MaterialSymbol icon="person_remove" size={24} color="#fff" />
      </button>
    </Tooltip>} */}
  </div>;
};

export default TSettingsMember;