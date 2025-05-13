'use client'

import { useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { config } from '~/config';
import { Routes } from '~/routes';
import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/utils';
import { UIText } from '../UI/Text.ui';

import NavMenuDropdown from './NavMenuDropdown';



interface Props {
  user: IUserState
  searchPopupId: string

  logout(): Promise<void>
  forceFocus(): void

  isDropdownMenuOpen: boolean
  setIsDropdownMenuOpen(val: boolean): void
}



const MobileNav: NextPage<Props> = ({ user, logout, searchPopupId, isDropdownMenuOpen, forceFocus, setIsDropdownMenuOpen }) => {
  const pathname = usePathname();
  const dropdownMenuId = useId().replaceAll(':', '')



  return <nav className="fixed w-full h-[var(--header-height)] bg-dark-primary bottom-0 left-0 z-[110] flex items-center sm:hidden">
    <Link href={Routes.home.path} className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]">
      <MaterialSymbol icon="home" className="text-white" size={24} />
      <UIText text="Головна" className="font-bold" type="mini" />
    </Link>

    <PopupButton className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]" togglePopupId={searchPopupId} onClick={forceFocus}>
      <MaterialSymbol icon="search" className="text-white" size={24} />
      <UIText text="Пошук" className="font-bold" type="mini" />
    </PopupButton>

    {/* Authorized */}
    {user.id && <>
      <Link href={`/u/${user.username}#user-libs`} className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]">
        <MaterialSymbol icon="folder_copy" className="text-white" size={24} />
        <UIText text="Теки" className="font-bold" type="mini" />
      </Link>

      <Menu gap={16} settings={{ align: 'end', direction: 'top' }} className="ui-dropdownMenu--scaleAnimation w-full" state={isDropdownMenuOpen} stateSetter={setIsDropdownMenuOpen} id={dropdownMenuId}>
        <MenuTrigger className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]" anchor>
          <div className="w-[24px] h-[24px] relative">
            <MaterialSymbol icon="menu" className={cn('text-white duration-200 absolute top-0 left-0', isDropdownMenuOpen && 'opacity-0')} size={24} />
            <MaterialSymbol icon="close" className={cn('text-white duration-200 absolute top-0 left-0', !isDropdownMenuOpen && 'opacity-0')} size={24} />
          </div>

          <UIText text="Меню" className="font-bold" type="mini" />
        </MenuTrigger>

        <NavMenuDropdown user={user} logout={logout} className="!right-[8px]" />
      </Menu>
    </>}

    {/* Unauthorized */}
    {!user.id && <>
      <Link href={`${config.URL.fkAccount}/sso?ref=${config.URL.baseURL}${pathname}`} className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]">
        <MaterialSymbol icon="login" className="text-white" size={24} />
        <UIText text="Увійти" className="font-bold" type="mini" />
      </Link>
    </>}
  </nav>
}

export default MobileNav;