'use client';

import { FC, useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/popup';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Routes from '~/routes';
import StyledButton from '~/shared/components/styled/StyledButton';
import { P } from '~/shared/components/UI/Typography';
import { IUserState } from '~/shared/store/reducers/userSlice';
import { cn } from '~/shared/utilities/classnames';

import NavMenuDropdown from './NavMenuDropdown';

import StyledIcon from '../styled/StyledIcon';



interface IProps {
  user: IUserState
  searchPopupId: string

  logout(): Promise<void>
  signin(): Promise<void>
  forceFocus(): void

  isDropdownMenuOpen: boolean
  setIsDropdownMenuOpen(val: boolean): void

  isSigningIn: boolean
}



const MobileNav: FC<IProps> = ({ user, logout, signin, searchPopupId, isDropdownMenuOpen, forceFocus, setIsDropdownMenuOpen, isSigningIn }) => {
  const pathname = usePathname();
  const dropdownMenuId = useId();



  return <nav className="fixed w-full h-[var(--header-height)] bg-dark-primary bottom-0 left-0 z-[110] flex items-center sm:hidden">
    <Link href={Routes.home.path()} className="w-full flex flex-col flex-1 gap-[2px] items-center duration-200 px-[12px] py-[4px]">
      <StyledIcon icon="Home" size={24} color="#fff" />

      <P text="Головна" className="font-bold" size={14} />
    </Link>

    <PopupButton className="w-full flex flex-col flex-1 gap-[2px] items-center duration-200 px-[12px] py-[4px]" popupId={searchPopupId} onClick={forceFocus}>
      <StyledIcon icon="Search" size={24} color="#fff" />

      <P text="Пошук" className="font-bold" size={14} />
    </PopupButton>

    {/* Authorized */}
    {user.id && <>
      <Link href={`/u/${user.username}#user-libs`} className="w-full flex flex-col flex-1 gap-[2px] items-center duration-200 px-[12px] py-[4px]">
        <StyledIcon icon="FolderCopy" size={24} color="#fff" />

        <P text="Теки" className="font-bold" size={14} />
      </Link>

      <Menu gap={16} settings={{ align: 'end', direction: 'top' }} className="ui-dropdownMenu--scaleAnimation w-full" state={isDropdownMenuOpen} stateSetter={setIsDropdownMenuOpen} id={dropdownMenuId}>
        <MenuTrigger className="w-full flex flex-col flex-1 gap-[2px] items-center duration-200 px-[12px] py-[4px]" anchor>
          <div className="w-[24px] h-[24px] relative">
            <StyledIcon icon="Menu" size={24} color="#fff" className={cn('duration-200 absolute inset-0', isDropdownMenuOpen && 'opacity-0')} />
            <StyledIcon icon="Close" size={24} color="#fff" className={cn('duration-200 absolute inset-0', !isDropdownMenuOpen && 'opacity-0')} />
          </div>

          <P text="Меню" className="font-bold" size={14} />
        </MenuTrigger>

        <NavMenuDropdown user={user} logout={logout} className="!right-[8px]" />
      </Menu>
    </>}

    {/* Unauthorized */}
    {!user.id && <>
      <StyledButton className="w-full flex flex-col flex-1 gap-[2px] items-center duration-200 px-[12px] py-[4px] bg-transparent border-none hover:bg-transparent" onClick={signin} disabled={isSigningIn}>
        <StyledIcon icon="Login" size={24} color="#fff" />

        <P text="Увійти" className="font-bold" size={14} />
      </StyledButton>
    </>}
  </nav>;
};

export default MobileNav;