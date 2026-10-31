'use client';

import { FC, useId, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';

import { HandleClientError } from '~/components/Errors';
import { NotifySuccess } from '~/components/nofity/NotifyStatus';
import { firebaseApp } from '~/conf';
import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { InvokeClientLogout, InvokeGoogleSignin } from '~/shared/lib/auth-lib';
import { HandleClientNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import userSlice, { userStateDefault } from '~/store/reducers/userSlice';

import HeaderNav from './HeaderNav';
import MobileNav from './MobileNav';
import NavMenuSearch from './NavMenuSearch';



const NavMenu: FC = () => {
  const user = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchPopupId = useId();

  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);



  async function signin() {
    if (isSigningIn) return;

    const auth = getAuth(firebaseApp);

    try {
      const data = await signInWithPopup(auth, new GoogleAuthProvider());

      if ('accessToken' in data.user) {
        const token = data.user.accessToken as string;
        const signinRes = await InvokeGoogleSignin(token);
        if (!signinRes.success) return HandleClientNormalizedError(signinRes.error);

        router.refresh();
      } else throw new Error('No access token in provider data');
    } catch (e) {
      HandleClientError(e);
    } finally {
      setIsSigningIn(false);
    }
  }

  async function logout() {
    try {
      NotifySuccess({ title: 'Ви вийшли з акаунту', message: ':(' });
      dispatch(userSlice.actions.reducer(userStateDefault));
      setIsDropdownMenuOpen(false);

      await InvokeClientLogout();

      router.refresh();
    } catch (e) {
      HandleClientError(e);
    }
  }

  function forceFocus() {
    const search = document.querySelector('#search-searchBar') as HTMLInputElement;
    if (!search) return;

    let i = 0;

    setInterval(() => {
      if (i !== 5) {
        i += 1;
        search.focus();
      }
    }, 50);
  }



  return <>
    <HeaderNav user={user} logout={logout} signin={signin} forceFocus={forceFocus} searchPopupId={searchPopupId} isDropdownMenuOpen={isDropdownMenuOpen} setIsDropdownMenuOpen={setIsDropdownMenuOpen} isSigningIn={isSigningIn} />
    <MobileNav user={user} logout={logout} signin={signin} forceFocus={forceFocus} searchPopupId={searchPopupId} isDropdownMenuOpen={isDropdownMenuOpen} setIsDropdownMenuOpen={setIsDropdownMenuOpen} isSigningIn={isSigningIn} />

    <NavMenuSearch dialogId={searchPopupId} />
  </>;
};

export default NavMenu;