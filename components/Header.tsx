'use client'

import { NextPage } from 'next';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useRef } from 'react'
import { HeaderAccount, HeaderLogout, HeaderSearch, Logo, IcoRating } from '../assets/assets';
import { Popup } from 'react-uvc'
import { useDebounce } from 'use-debounce';

import '../styles/components/serachPopup.scss'
import { ITitle } from '../interfaces/ITitle';
import $api from './http';
import { config, env } from '../config';
import Loading from './Loading';
import Link from 'next/link';
import { routes } from '../routes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { logout } from './authorization';
import userSlice from '../store/reducers/userSlice';
import { ITokenData } from '../interfaces/ITokenData';
import { HashImage } from 'hash-image';
import { parseTitleType } from './handlers';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';

// Debounced query fired twice with empty string
let firstFirstLoad = true;

const Header: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();

  const state = useAppSelector(state => state.user)
  const [userData, setUserData] = useState<ITokenData>(useAppSelector(state => state.user))
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedQuery] = useDebounce(searchQuery, 350)
  const [userDetailsOpened, setUserDetailsOpened] = useState(false)
  const [searchResults, setSearchResults] = useState<ITitle[]>([])
  const [isAuth, setIsAuth] = useState(state.isAuth)
  const [popup] = useState(new Popup({
    id: 'search-popup'
  }))

  const firstLoad = useRef(true)
  const [userAvatar, setUserAvatar] = useState('')

  useEffect(() => {
    popup.init()
  }, [])

  useEffect(() => {
    if (!state.username) return;

    if (state.isAuth) {
      $api.get(`${env.apiUrl}/v1/user/${state.uid}`).catch(e => console.error(e)).then(res => setUserAvatar(res!.data!.avatar))
    }

    setIsAuth(state.isAuth)
    setUserData(state)
  }, [state])

  useEffect(() => {
    if (!debouncedQuery.length && firstLoad.current && firstFirstLoad) {
      firstFirstLoad = false;
      return
    } else if (!debouncedQuery.length && firstLoad.current) {
      firstLoad.current = false;
      return
    }

    (async function () {
      const res = await $api.get<{ results: ITitle[] }>(`${env.apiUrl}/v1/titles/search?query=${debouncedQuery}`)
      setSearchResults(res.data.results)
    })()
  }, [debouncedQuery])

  const signOut = () => {
    logout()
    dispatch(userSlice.actions.reducer({ isAuth: false, isNewAccount: false, roles: [], uid: '', username: '' }))
    setUserDetailsOpened(false)
    setIsAuth(false)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-[16px] bg-dark/[.4] backdrop-blur-[10px] z-[110] duration-200`}>
        <div className="wrapper flex-row items-center justify-between">
          <Link href={routes.home.path}>
            <Logo width={64} height={48} />
          </Link>

          <Link href={routes.lib.path}>
            <p className='text-[24px] text-white font-extralight'>Тека</p>
          </Link>

          <div className='flex items-center gap-[16px]'>
            <button className='uvc-popup-trigger' data-uvc-popup-openid="search-popup" onClick={() => { popup.open() }}>
              <HeaderSearch width={32} height={32} />
            </button>

            {isAuth ? <>
              <button className={`relative`} onClick={() => setUserDetailsOpened(!userDetailsOpened)}>
                <div className='relative w-[40px] h-[40px]'>
                  <Image src={userAvatar} alt='...' fill className='rounded-[32px] duration-200 opacity-0 absolute top-0 left-0 z-[111]' onLoad={e => e.currentTarget.style.opacity = '1'} />
                  <Skeleton width={'100%'} height={'100%'} className='absolute top-0 left-0 rounded-[32px]' />
                </div>

                <div className={`absolute top-[48px] right-0 bg-dark rounded-[2px] duration-200 ${userDetailsOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className='flex flex-col'>
                    <Link className='flex items-center gap-[8px] px-[16px] py-[8px] duration-200 hover:bg-white/[.1]' href={`${routes.user.path.replace('/*', '')}/${userData.username}`}>
                      <HeaderAccount width={24} height={24} className='flex-shrink-0' />
                      <p className='text-[16px] text-white font-bold'>Акаунт</p>
                    </Link>

                    <button className='flex items-center gap-[8px] px-[16px] py-[8px] duration-200 hover:bg-white/[.1]' onClick={() => signOut()}>
                      <HeaderLogout width={24} height={24} />
                      <p className='text-[16px] text-white font-bold'>Вийти</p>
                    </button>
                  </div>
                </div>
              </button>
            </> : <>
              <Link href={`${routes.authSignin.path}?ref=${config.services.siteURL}${pathname}`}>
                <HeaderAccount width={32} height={32} />
              </Link>
            </>}
          </div>
        </div>
      </header>

      <div className="uvc-popup-close flex flex-col justify-center items-center px-[24px] py-[24px] cursor-pointer" id="uvc-popup-layer" onClick={() => popup.close()}>
        <div className="uvc-popup-dialog max-h-[800px] max-[500px]:max-h-[600px] max-w-[800px] w-full bg-dark rounded-[4px] overflow-y-scroll search-scroll z-[10] cursor-default duration-200" onClick={e => e.stopPropagation()} data-uvc-popup-id="search-popup">
          <input type="text" className='w-full px-[24px] border-b border-b-[#1D1D1D] bg-transparent py-[8px] text-white placeholder:text-white' value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder='...' />

          <div className='px-[24px] py-[16px] flex flex-col gap-[4px]'>
            {searchResults ? <>
              {searchResults.length ? searchResults.map(title => {
                return <Link href={`${routes.watch.path}/${title.code}`} onClick={() => document.documentElement.style.overflow = 'visible'} key={title.id}>
                  <div className='px-[16px] py-[8px] duration-200 w-fit rounded-[4px] hover:bg-grey flex items-start gap-[16px]'>
                    <HashImage src={title.poster} alt={`Poster for ${title.code}`} width={60} height={80} parentClassName='shrink-0' style={{ visibility: 'inherit' }} />

                    <div className='flex flex-col gap-[4px]'>
                      <p className='text-[24px] font-extralight text-white'>{title.names.ukr || title.code}</p>

                      <div className='flex items-center gap-[16px] w-full'>
                        <div className='flex items-center gap-[4px]'>
                          <IcoRating width={16} height={16} />
                          <p className='text-[16px] font-bold gradient--primary-text'>{title.rating}</p>
                        </div>
                        <p className='text-[16px] font-extralight text-white'>{parseTitleType(title.type)}</p>
                        <p className='text-[16px] font-extralight text-white'>{title.year}</p>
                      </div>

                      <div className='flex gap-[16px] max-[560px]:flex-col items-start max-[560px]:gap-[8px]'>
                        {title.dubs?.length ? <span className='font-bold gradient--primary-text'>Має озвучку</span> : <span className='font-extralight text-white'>Озвучка відсутня</span>}
                        {title.dubs?.length ? <span className='font-bold gradient--primary-text'>Тайтл оновлений</span> : <span className='font-extralight text-white'>Тайтл не оновлений</span>}
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