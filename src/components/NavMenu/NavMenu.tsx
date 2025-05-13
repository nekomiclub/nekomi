'use client'

import { useId, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import API from '~/services/ApiService';
import userSlice, { userStateDefault } from '~/store/reducers/userSlice';
import { HandleClientError } from '../Errors';
import { NotifySuccess } from '../UI/NotifyToast';

import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';
import NavMenuSearch from './NavMenuSearch';



const NavMenu: NextPage = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchPopupId = useId().replaceAll(':', '')

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)



  async function logout() {
    try {
      await API.userLogout();

      NotifySuccess({ title: 'Ти вийшов з акаунту', message: 'Ти ж повернешся ще, так?' })
      dispatch(userSlice.actions.reducer(userStateDefault))
      setIsDropdownMenuOpen(false)

      setTimeout(() => {
        router.refresh();
      }, 500);
    } catch (e) {
      HandleClientError(e);
    }
  }

  function forceFocus() {
    const search = document.querySelector('#search-searchBar') as HTMLInputElement;
    if (!search) return

    let i = 0;

    setInterval(() => {
      if (i !== 5) {
        i += 1;
        search.focus();
      }
    }, 50);
  }



  return <>
    <HeaderNav user={user} logout={logout} forceFocus={forceFocus} searchPopupId={searchPopupId} isDropdownMenuOpen={isDropdownMenuOpen} setIsDropdownMenuOpen={setIsDropdownMenuOpen} />
    <MobileNav user={user} logout={logout} forceFocus={forceFocus} searchPopupId={searchPopupId} isDropdownMenuOpen={isDropdownMenuOpen} setIsDropdownMenuOpen={setIsDropdownMenuOpen} />

    <NavMenuSearch dialogId={searchPopupId} />
  </>
}

export default NavMenu;