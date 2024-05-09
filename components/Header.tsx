'use client'

import '../styles/components/Header.scss';
import '../styles/components/serachPopup.scss'

import { NextPage } from 'next';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useRef } from 'react'
import { HeaderAccount, HeaderLogout } from '../assets/assets';
import { Popup } from 'react-uvc'
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import { HashImage } from 'hash-image';

import { ITitle } from '../interfaces/ITitle';
import { config } from '../config';
import Loading from './Loading';
import { routes } from '../routes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice, { IUserState, defaultUserState } from '../store/reducers/userSlice';
import { ITokenData } from '../interfaces/ITokenData';
import { parseTitleType } from './handlers';
import { IcoAnimeeLogo, IcoArrow, IcoHome, IcoLibrary, IcoSearch, IcoStarRating, IcoUser } from '../assets/ico/Icos';
import { LoadingImage } from './GeneralComponents';
import { $api } from './http';
import { AxiosError } from 'axios';


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

  /** Exit from account (animee only) */
  async function signOut() {
    try {
      await $api.get('/user/logout')
    } catch (e) {
      if (e instanceof AxiosError) {
        console.error(`An HTTP error occured while exiting account.\nError occured at - Providers/Storage.\nError - ${e.code}: ${e.response?.data.msg}.`)
      } else {
        // @ts-ignore
        const emsg = e?.message || e?.msg;

        console.error(`An error occured while exiting account.\nError occured at - Providers/Storage.\nError message - ${emsg}`)
      }
    }

    dispatch(userSlice.actions.reducer(defaultUserState))
    setUserDetailsOpened(false)
    router.refresh();
  }

  return (
    <>
      <header className={`fixed top-0 left-0 w-full py-[16px] backdrop-blur-[12px] z-[110] duration-200`}>
        <div className="wrapperNew !flex-row items-center justify-between w-full">
          <div className='flex items-center gap-[40px]'>
            <Link href={routes.home.path}>
              <IcoAnimeeLogo width={60} height={60} gradient='primary' />
            </Link>

            <div className='flex items-center gap-[16px]'>
              <Link href={routes.home.path} className={`header-ico focus-visible:outline-none ${pathname === routes.home.path ? 'header-ico--active' : 'duration-200 hover:bg-purple focus-visible:bg-purple rounded-[2px]'}`}>
                <IcoHome width={32} height={32} />
              </Link>

              <Link href={routes.lib.path} className={`header-ico focus-visible:outline-none ${pathname === routes.lib.path ? 'header-ico--active' : 'duration-200 hover:bg-purple focus-visible:bg-purple rounded-[2px]'}`}>
                <IcoLibrary width={32} height={32} />
              </Link>

              <div className='flex items-center gap-[16px]'>
                <button className='uvc-popup-trigger duration-200 hover:bg-purple focus-visible:bg-purple rounded-[2px]' data-uvc-popup-openid="search-popup" onClick={() => { popup.open() }}>
                  <IcoSearch width={32} height={32} />
                </button>
              </div>
            </div>
          </div>

          {user.id ? <>
            <div className='flex items-center gap-[8px]'>
              <button className={`relative flex items-center gap-[4pxT]`} onClick={() => setUserDetailsOpened(!userDetailsOpened)}>
                <div className='relative w-[40px] h-[40px] rounded-[32px] overflow-hidden'>
                  <LoadingImage src={user.avatarURL!} alt='...' />
                </div>

                <button className='px-[8px] py-[8px] duration-200 hover:bg-purple focus-visible:bg-purple rounded-[2px]'>
                  <IcoArrow width={16} height={16} />
                </button>



                <div className={`absolute top-[48px] right-0 bg-dark rounded-[2px] duration-200 ${userDetailsOpened ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  <div className='flex flex-col'>
                    <Link className='flex items-center gap-[8px] px-[16px] py-[8px] duration-200 hover:bg-white/[.1]' href={`${routes.user.path.replace('/*', '')}/${user.username}`}>
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
            </div>
          </> : <>
            <Link href={`${config.URL.fkAccount}/continue?ref=${config.URL.baseURL}${pathname}`}>
              <IcoUser width={40} height={40} />
            </Link>
          </>}
        </div>
      </header>

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
                          <IcoStarRating width={16} height={16} gradient='primary' />
                          <p className='text-[16px] font-bold gradient--primary-text'>{title.rating}</p>
                        </div>
                        <p className='text-[16px] font-extralight text-white'>{parseTitleType(title.type)}</p>
                        <p className='text-[16px] font-extralight text-white'>{title.year}</p>
                      </div>

                      <div className='flex gap-[16px] max-[560px]:flex-col items-start max-[560px]:gap-[8px]'>
                        {title.dubs?.length ? <span className='font-bold gradient--primary-text'>Має озвучення</span> : <span className='font-extralight text-white'>Озвучення відсутня</span>}
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