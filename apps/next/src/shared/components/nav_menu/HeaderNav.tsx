'use client';

import { FC, useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/popup';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Routes from '~/routes';
import { IcoNekomiLogoWhite } from '~/shared/components/Icons';
import StyledAvatar from '~/shared/components/styled/StyledAvatar';
import StyledButton from '~/shared/components/styled/StyledButton';
import Tooltip from '~/shared/components/Tooltip';
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



const HeaderNav: FC<IProps> = ({ user, logout, signin, searchPopupId, forceFocus, isDropdownMenuOpen, setIsDropdownMenuOpen, isSigningIn }) => {
  const pathname = usePathname();
  const dropdownMenuId = useId();



  return <header className="fixed w-full h-[var(--header-height)] bg-dark-primary top-0 left-0 z-[110] max-sm:hidden">
    <div className="wrapper w-full h-full !flex-row justify-between items-center gap-[40px]">
      <Tooltip content="Головна">
        <Link href={Routes.home.path()} className="outline-none">
          <IcoNekomiLogoWhite width={40} height={40} fill="#fff" />
        </Link>
      </Tooltip>

      <PopupButton popupId={searchPopupId} onClick={forceFocus} className="ui-button max-w-[500px] w-full flex flex-row items-center gap-[8px] px-[12px] py-[8px]">
        <StyledIcon icon="Search" size={16} color="#555" />

        <p className="text-grey-new">Пошук...</p>
      </PopupButton>

      {/* Authorized */}
      {user.id && <>
        <Menu gap={16} settings={{ align: 'end' }} className="ui-dropdownMenu--scaleAnimation" state={isDropdownMenuOpen} stateSetter={setIsDropdownMenuOpen} id={dropdownMenuId}>
          <MenuTrigger className="flex items-center gap-[8px] duration-200 relative" anchor>
            <StyledAvatar avatar={user.avatar} initials={user.username} borderRadius={4} width={`40px`} height={`40px`} priority className="rounded-[4px] overflow-hidden" alt="avatar" />

            <StyledIcon icon="ArrowDropDown" size={24} color="#fff" className={cn(`duration-200`, isDropdownMenuOpen && 'rotate-180')} />
          </MenuTrigger>

          <NavMenuDropdown user={user} logout={logout} />
        </Menu>
      </>}

      {/* Unauthorized */}
      {!user.id && <div className="relative h-full">
        <div className="flex gap-[4px] absolute top-[50%] right-0 translate-y-[-50%] max-lg:relative">
          <StyledButton className="px-[12px] py-[8px] border-none bg-transparent" onClick={signin} disabled={isSigningIn}>
            <p className="text-white  font-bold">Увійти</p>
          </StyledButton>

          <StyledButton className="px-[12px] py-[8px] bg-primary border-none" onClick={signin} disabled={isSigningIn}>
            <p className="text-white  font-bold">Реєстрація</p>
          </StyledButton>
        </div>
      </div>}
    </div>
  </header>;
};

export default HeaderNav;