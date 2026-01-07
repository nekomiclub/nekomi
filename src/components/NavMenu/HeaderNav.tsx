'use client';

import { NextPage } from 'next';
import { useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/popup';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { IcoNekomiLogo } from '~/assets/Icons';
import StyledButtonOld from '~/components/Styled/StyledButton.old';
import StyledImage from '~/components/Styled/StyledImage';
import Tooltip from '~/components/UI/Tooltip';
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



const HeaderNav: NextPage<Props> = ({ user, logout, signin, searchPopupId, forceFocus, isDropdownMenuOpen, setIsDropdownMenuOpen, isSigningIn }) => {
  const pathname = usePathname();
  const dropdownMenuId = useId().replaceAll(':', '');



  return <header className="fixed w-full h-[var(--header-height)] bg-dark-primary top-0 left-0 z-[110] max-sm:hidden">
    <div className="wrapper w-full h-full !flex-row justify-between items-center gap-[40px]">
      <Tooltip content="Головна">
        <Link href={Routes.home.path()} className="outline-none">
          <IcoNekomiLogo width={40} height={40} fill="#fff" />
        </Link>
      </Tooltip>

      <PopupButton popupId={searchPopupId} onClick={forceFocus} className="ui-button max-w-[500px] w-full flex flex-row items-center gap-[8px] px-[12px] py-[8px]">
        <MaterialSymbol icon="search" size={16} className="text-grey-new" />
        <p className="text-grey-new">Пошук...</p>
      </PopupButton>

      {/* Authorized */}
      {user.id && <>
        <Menu gap={16} settings={{ align: 'end' }} className="ui-dropdownMenu--scaleAnimation" state={isDropdownMenuOpen} stateSetter={setIsDropdownMenuOpen} id={dropdownMenuId}>
          <MenuTrigger className="flex items-center gap-[8px] duration-200 relative" anchor>
            <StyledImage src={user.avatar} width={`40px`} height={`40px`} loading="eager" className="rounded-[4px] overflow-hidden" alt="avatar" />

            <MaterialSymbol icon="arrow_drop_down" size={24} className={cn(`text-white duration-200 p-[8px]`, isDropdownMenuOpen && 'rotate-180')} />
          </MenuTrigger>

          <NavMenuDropdown user={user} logout={logout} />
        </Menu>
      </>}

      {/* Unauthorized */}
      {!user.id && <div className="relative h-full">
        <div className="flex gap-[4px] absolute top-[50%] right-0 translate-y-[-50%] max-lg:relative">
          <StyledButtonOld className="px-[12px] py-[8px] border-none bg-transparent" onClick={signin} disabled={isSigningIn}>
            <p className="text-white font-manrope font-bold">Увійти</p>
          </StyledButtonOld>

          <StyledButtonOld className="px-[12px] py-[8px] bg-primary border-none" onClick={signin} disabled={isSigningIn}>
            <p className="text-white font-manrope font-bold">Реєстрація</p>
          </StyledButtonOld>
        </div>
      </div>}
    </div>
  </header>;
};

export default HeaderNav;