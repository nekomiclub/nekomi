'use client';

import { NextPage } from 'next';
import { useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/popup';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import StyledButtonOld from '~/components/Styled/StyledButton.old';
import { P } from '~/components/UI/Typography';
import { Routes } from '~/routes';
import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';

import NavMenuDropdown from './NavMenuDropdown';



interface Props {
  user: IUserState
  searchPopupId: string

  logout(): Promise<void>
  signin(): Promise<void>
  forceFocus(): void

  isDropdownMenuOpen: boolean
  setIsDropdownMenuOpen(val: boolean): void

  isSigningIn: boolean
}



const MobileNav: NextPage<Props> = ({ user, logout, signin, searchPopupId, isDropdownMenuOpen, forceFocus, setIsDropdownMenuOpen, isSigningIn }) => {
  const pathname = usePathname();
  const dropdownMenuId = useId().replaceAll(':', '');



  return <nav className="fixed w-full h-[var(--header-height)] bg-dark-primary bottom-0 left-0 z-[110] flex items-center sm:hidden">
    <Link href={Routes.home.path()} className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]">
      <MaterialSymbol icon="home" className="text-white" size={24} />
      <P text="Головна" className="font-bold" size={14} />
    </Link>

    <PopupButton className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]" popupId={searchPopupId} onClick={forceFocus}>
      <MaterialSymbol icon="search" className="text-white" size={24} />
      <P text="Пошук" className="font-bold" size={14} />
    </PopupButton>

    {/* Authorized */}
    {user.id && <>
      <Link href={`/u/${user.username}#user-libs`} className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]">
        <MaterialSymbol icon="folder_copy" className="text-white" size={24} />
        <P text="Теки" className="font-bold" size={14} />
      </Link>

      <Menu gap={16} settings={{ align: 'end', direction: 'top' }} className="ui-dropdownMenu--scaleAnimation w-full" state={isDropdownMenuOpen} stateSetter={setIsDropdownMenuOpen} id={dropdownMenuId}>
        <MenuTrigger className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px]" anchor>
          <div className="w-[24px] h-[24px] relative">
            <MaterialSymbol icon="menu" className={cn('text-white duration-200 absolute top-0 left-0', isDropdownMenuOpen && 'opacity-0')} size={24} />
            <MaterialSymbol icon="close" className={cn('text-white duration-200 absolute top-0 left-0', !isDropdownMenuOpen && 'opacity-0')} size={24} />
          </div>

          <P text="Меню" className="font-bold" size={14} />
        </MenuTrigger>

        <NavMenuDropdown user={user} logout={logout} className="!right-[8px]" />
      </Menu>
    </>}

    {/* Unauthorized */}
    {!user.id && <>
      <StyledButtonOld className="w-full flex flex-col gap-[2px] items-center duration-200 px-[12px] py-[4px] bg-transparent border-none hover:bg-transparent" onClick={signin} disabled={isSigningIn}>
        <MaterialSymbol icon="login" className="text-white" size={24} />
        <P text="Увійти" className="font-bold" size={14} />
      </StyledButtonOld>
    </>}
  </nav>;
};

export default MobileNav;