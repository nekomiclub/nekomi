'use client'

import { useId } from 'react';
import { Menu, MenuTrigger } from '@fullkekw/fkw-menu';
import { PopupButton } from '@fullkekw/popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoNekomiLogo } from '~/assets/Icons';
import { config } from '~/config';
import { useAppDispatch } from '~/hooks/redux';
import { Routes } from '~/routes';
import userSlice, { IUserState, userStateDefault } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';
import StyledImage from '../Styled/StyledImage';
import Tooltip from '../UI/Tooltip';

import NavMenuDropdown from './NavMenuDropdown';



interface Props {
  user: IUserState
  searchPopupId: string

  logout(): Promise<void>
  forceFocus(): void

  isDropdownMenuOpen: boolean
  setIsDropdownMenuOpen(val: boolean): void
}



const HeaderNav: NextPage<Props> = ({ user, logout, searchPopupId, forceFocus, isDropdownMenuOpen, setIsDropdownMenuOpen }) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch()
  const dropdownMenuId = useId().replaceAll(':', '')



  function a() {
    const b = { ...userStateDefault };
    b.id = '122112'

    dispatch(userSlice.actions.reducer(b))
  }



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
          <Link href={`${config.URL.fullkekw_account}/sso?ref=${config.URL.nekomi_site}${pathname}`} className="ui-button px-[12px] py-[8px] bg-dark-primary border-none">
            <p className="text-white font-manrope font-bold">Увійти</p>
          </Link>

          <Link href={`${config.URL.fullkekw_account}/sso?ref=${config.URL.nekomi_site}${pathname}`} className="ui-button px-[12px] py-[8px] bg-primary border-none">
            <p className="text-white font-manrope font-bold">Реєстрація</p>
          </Link>
        </div>
      </div>}
    </div>
  </header>
}

export default HeaderNav;