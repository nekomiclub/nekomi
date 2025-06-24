'use client'

import { MenuWrapper } from '@fullkekw/fkw-menu';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';
import StyledImage from '../StyledImage';




interface NavMenuDropdownProps {
  user: IUserState
  logout(): Promise<void>

  className?: string
}



const NavMenuDropdown: NextPage<NavMenuDropdownProps> = ({ user, logout, className }) => {
  return <MenuWrapper className={cn(`bg-dark-primary border border-dark-light rounded-[4px] w-[200px] flex flex-col`, className)}>
    <Link href={`/u/${user.username}`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <StyledImage src={user.avatar} width={`24px`} height={`24px`} priority className="rounded-[2px] overflow-hidden" alt="avatar" />
      <p className="text-white w-full font-manrope">Профіль</p>
    </Link>

    <Link href={`/u/${user.username}#user-libs`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <MaterialSymbol icon="folder_copy" size={24} className="text-white" />
      <p className="text-white w-full font-manrope">Теки</p>
    </Link>

    <Link href={`/u/${user.username}?openSettings`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      <MaterialSymbol icon="settings" size={24} className="text-white" />
      <p className="text-white w-full font-manrope">Налаштування</p>
    </Link>

    {/* Divider */}
    <span className="w-full h-[1px] block bg-grey"></span>

    <button className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={logout}>
      <MaterialSymbol icon="logout" size={24} className="text-primary" />
      <p className="text-white text-center w-full font-bold font-manrope">Вийти</p>
    </button>
  </MenuWrapper>
}

export default NavMenuDropdown