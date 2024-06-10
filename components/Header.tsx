'use client'

import '../styles/components/Header.scss';
import '../styles/components/serachPopup.scss'

import { NextPage } from 'next';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useRef } from 'react'
import { Popup } from 'react-uvc'
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { HashImage } from 'hash-image';
import * as Menu from 'uvc-menu';

import { ITitle } from '../interfaces/ITitle';
import { config } from '../config';
import { routes } from '../routes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice, { IUserState, defaultUserState } from '../store/reducers/userSlice';
import { ITokenData } from '../interfaces/ITokenData';
import { parseTitleType } from './handlers';
import { LoadingImage } from './GeneralComponents';
import { $api } from './http';
import { AxiosError } from 'axios';
import { IcoAnimeeLogo, IcoArrow, IcoBell, IcoExit, IcoHome, IcoLibrary, IcoSearch, IcoSettings, IcoStarRating, IcoUser } from '../assets/Icons';
import { IcoFolderPlain } from '../assets/Folder';


// Debounced query fired twice with empty string
let firstFirstLoad = true;

const Header: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery] = useDebounce(searchQuery, 350)
  const [popup] = useState(new Popup({
    id: 'search-popup'
  }))

  const [userDetailsOpened, setUserDetailsOpened] = useState(false)
  const [searchResults, setSearchResults] = useState<ITitle[]>([])

  const firstLoad = useRef(true)

  useEffect(() => {
    popup.init()
  }, [])

  useEffect(() => {
    if (!debouncedQuery.length && firstLoad.current && firstFirstLoad) {
      firstFirstLoad = false;
      return
    } else if (!debouncedQuery.length && firstLoad.current) {
      firstLoad.current = false;
      return
    }

    (async function () {
      const res = await $api.get<{ results: ITitle[] }>(`/v1/titles/search?query=${debouncedQuery}`)
      setSearchResults(res.data.results)
    })()
  }, [debouncedQuery])

  /** Exit from account */
  async function signOut() {
    try {
      await $api.get('/user/logout')
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(`An HTTP error occured while exiting account.\nError occured at - Header component.\nError - ${e.code}: ${e.response?.data.msg}.`)
      } else {
        // @ts-ignore
        const emsg = e?.message || e?.msg;

        console.error(`An error occured while exiting account.\nError occured at - Header component.\nError message - ${emsg}`)
      }
    }

    dispatch(userSlice.actions.reducer(defaultUserState))
    setUserDetailsOpened(false)
    router.refresh();
  }

  /** Sign in account */
  function signIn() {
    router.push(`${config.URL.fkAccount}/continue?ref=${config.URL.baseURL}${pathname}`)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-[16px] backdrop-blur-[12px] z-[110] duration-200`}>
        <div className="wrapperNew !flex-row items-center justify-between w-full">
          <div className='flex items-center gap-[40px]'>
            <Link href={routes.home.path}>
              <IcoAnimeeLogo width={60} height={60} fill='#FF464E' />
            </Link>

            <div className='flex items-center gap-[16px]'>
              <Link href={routes.home.path} className={`header-ico focus-visible:outline-none ${pathname === routes.home.path ? 'header-ico--active' : ''}`} title='На головну'>
                <IcoHome width={32} height={32} />
              </Link>

              <Link href={routes.lib.path} className={`header-ico focus-visible:outline-none ${pathname === routes.lib.path ? 'header-ico--active' : ''}`} title='В теку тайтлів'>
                <IcoLibrary width={32} height={32} />
              </Link>

              <div className='flex items-center gap-[16px]'>
                <button className='uvc-popup-trigger header-ico duration-200' data-uvc-popup-openid="search-popup" onClick={() => { popup.open() }} title='Пошук'>
                  <IcoSearch width={32} height={32} />
                </button>
              </div>
            </div>
          </div>

          {user.id ? <>
            {/* User authorized */}

            <Menu.Menu trigger={
              <div className='flex items-center gap-[16px]'>
                {/* // TODO */}
                {/* <IcoBell width={40} height={40} /> */}

                <div className='flex justify-center items-center gap-[8px]'>
                  <div className='relative w-[60px] h-[60px] rounded-[4px] overflow-hidden'>
                    <LoadingImage src={user.avatarURL!} loading='eager' priority />
                  </div>

                  <IcoArrow width={24} height={24} className={`duration-200 ${userDetailsOpened ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </div>
            } className='bg-darkGrey rounded-[2px] w-[180px] overflow-hidden !top-[70px]' align='end' animation='slide' state={userDetailsOpened} stateSetter={setUserDetailsOpened}>
              <Menu.MenuList>
                <Menu.MenuItem className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey' role='button' onClick={() => router.push(`${config.URL.baseURL}/u/${user.username}`)}>
                  <IcoUser width={24} height={24} />
                  <p className='text-white w-full'>Профіль</p>
                </Menu.MenuItem>
                <Menu.MenuItem className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey' role='button' onClick={() => router.push(`${config.URL.baseURL}/u/${user.username}#user-libs`)}>
                  <IcoFolderPlain width={24} height={24} />
                  <p className='text-white w-full'>Теки</p>
                </Menu.MenuItem>

                {/* // TODO */}
                {/* <Menu.MenuItem className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey' role='button'>
                  <IcoSettings width={24} height={24} />
                  <p className='text-lightGrey w-full'>Налаштування</p>
                </Menu.MenuItem> */}

                {/* Divider */}
                <Menu.MenuItem className='w-full h-[1px]'>
                  <span className='w-full h-full block bg-grey'></span>
                </Menu.MenuItem>

                <Menu.MenuItem className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey' role='button' onClick={signOut}>
                  <IcoExit width={24} height={24} fill='#FF464E' />
                  <p className='text-white text-center w-full font-bold'>Вийти</p>
                </Menu.MenuItem>
              </Menu.MenuList>
            </Menu.Menu>
          </> : <>
            {/* User not authorized */}

            <Menu.Menu trigger={
              <div className='flex justify-center items-center gap-[8px]'>
                <IcoUser width={40} height={40} />

                <IcoArrow width={24} height={24} className={`duration-200 ${userDetailsOpened ? 'rotate-180' : 'rotate-0'}`} />
              </div>
            } className='bg-darkGrey rounded-[2px] w-[180px] overflow-hidden' align='end' animation='slide'>
              <Menu.MenuList>
                <Menu.MenuItem className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey' role='button' onClick={signIn}>
                  <IcoExit width={24} height={24} fill='#FF464E' />
                  <p className='text-white text-center w-full'>Увійти</p>
                </Menu.MenuItem>
              </Menu.MenuList>
            </Menu.Menu>
          </>}
        </div >
      </header >

      <div className="uvc-popup-close flex flex-col justify-center items-center px-[24px] py-[24px] cursor-pointer" id="uvc-popup-layer" onClick={() => popup.close()}>
        <div className="uvc-popup-dialog max-h-[800px] max-[500px]:max-h-[600px] max-w-[800px] w-full bg-dark rounded-[4px] overflow-y-scroll search-scroll z-[10] cursor-default duration-200" onClick={e => e.stopPropagation()} data-uvc-popup-id="search-popup">
          <input type="text" className='w-full px-[24px] border-b border-b-[#1D1D1D] bg-transparent py-[8px] text-white placeholder:text-white' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='...' />

          <div className='px-[24px] py-[16px] flex flex-col gap-[4px]'>
            {searchResults ? <>
              {searchResults.length ? searchResults.map(title => {
                return <Link href={`${routes.watch.path}/${title.code}`} onClick={() => document.documentElement.style.overflow = 'visible'} key={title.id}>
                  <div className='px-[16px] py-[8px] duration-200 w-fit rounded-[4px] hover:bg-darkGrey flex items-start gap-[16px]'>
                    <HashImage src={title.poster} alt={`Poster for ${title.code}`} width={60} height={80} parentClassName='shrink-0' style={{ visibility: 'inherit' }} />

                    <div className='flex flex-col gap-[4px]'>
                      <p className='text-[24px] font-extralight text-white'>{title.names.ukr || title.code}</p>

                      <div className='flex items-center gap-[16px] w-full'>
                        <div className='flex items-center gap-[4px]'>
                          <IcoStarRating width={16} height={16} fill='#FF464E' />
                          <p className='text-[16px] font-bold gradient--primary-text'>{title.rating.IMDB || '-'}</p>
                        </div>
                        <p className='text-[16px] font-extralight text-white'>{parseTitleType(title.type)}</p>
                        <p className='text-[16px] font-extralight text-white'>{title.year}</p>
                      </div>

                      <div className='flex gap-[16px] max-[560px]:flex-col items-start max-[560px]:gap-[8px]'>
                        {title.episodes.length ? <span className='font-bold gradient--primary-text'>Має озвучення</span> : <span className='font-extralight text-white'>Озвучення відсутнє</span>}
                      </div>
                    </div>
                  </div>
                </Link>
              }) : <p className='text-[16px] font-bold gradient--primary-text'>
                {!debouncedQuery.length ? 'Почніть водити запит...' : 'Нічого не знайдено (´。＿。｀)'}
              </p>}
            </> : <>
              <p className='text-[16px] font-bold gradient--primary-text'>Завантажуємо...</p>
            </>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;