'use client';

import { FC } from 'react';
import { MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import StyledAvatar from '~/components/styled/StyledAvatar';
import routes from '~/routes';
import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';




interface IProps {
  user: IUserState
  logout(): Promise<void>

  className?: string
}



const NavMenuDropdown: FC<IProps> = ({ user, logout, className }) => {
  return <MenuWrapper className={cn(`bg-dark-primary border border-dark-light rounded-[4px] w-[200px] flex flex-col`, className)}>
    <Link href={routes.user.path({ username: user.username })} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <StyledAvatar avatar={user.avatar} initials={user.username} borderRadius={4} width={`24px`} height={`24px`} className="rounded-[2px] overflow-hidden" alt="avatar" />
      <p className="text-white w-full ">Профіль</p>
    </Link>

    <Link href={`${routes.user.path({ username: user.username })}#user-libs`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <MaterialSymbol icon="folder_copy" size={24} className="text-white" />
      <p className="text-white w-full ">Теки</p>
    </Link>

    <Link href={routes.user_settings.path({ username: user.username })} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <MaterialSymbol icon="settings" size={24} className="text-white" />
      <p className="text-white w-full ">Налаштування</p>
    </Link>

    {/* Divider */}
    <span className="w-full h-[1px] block bg-grey"></span>

    <button className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={logout}>
      <MaterialSymbol icon="logout" size={24} className="text-primary" />
      <p className="text-white text-center w-full font-bold ">Вийти</p>
    </button>
  </MenuWrapper>;
};

export default NavMenuDropdown;