'use client'

import '../styles/components/Header.scss';
import '../styles/components/serachPopup.scss'

import { NextPage } from 'next';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useMemo, useState, useRef } from 'react'
import { useDebounce } from 'use-debounce';
import Link from 'next/link';
import * as Menu from 'uvc-menu';
import * as uuid from 'uuid';

import { ITitle } from '../interfaces/ITitle';
import { config } from '../config';
import { routes } from '../routes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import userSlice, { IUserState, defaultUserState } from '../store/reducers/userSlice';
import { ITokenData } from '../interfaces/ITokenData';
import { getUTC, parseTitleType, randomNumber } from './handlers';
import { LoadingImage } from './GeneralComponents';
import { $api } from './http';
import { AxiosError } from 'axios';
import { IcoAnimeeLogo, IcoArrow, IcoBell, IcoExit, IcoGhost, IcoHome, IcoInfo, IcoLibrary, IcoMicrophone, IcoSearch, IcoSettings, IcoStarRating, IcoUser } from '../assets/Icons';
import { IcoFolderPlain } from '../assets/Folder';
import { createUVCID, Layer, Popup, Trigger } from 'uvc-popup';
import { IUser } from '../interfaces/IUser';
import { IDubber } from '../interfaces/IDubber';



/** Global search engines */
type TSearchEngine = 'dubber' | 'user' | 'title';

/** Extended gloabl search result object with it's type */
export interface ISearchExtended<T = any> {
  type: TSearchEngine
  item: T
}

const Header: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user)

  const [userDetailsOpened, setUserDetailsOpened] = useState(false)
  const [isSearchErrored, setIsSearchErrored] = useState(false);
  const [isHintShowed, setIsHintShowed] = useState(true)

  const [searchPopupID, setSearchPopupID] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ISearchExtended[]>([])

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)
  const [placeholderSearchQuery] = useDebounce(searchQuery, 50)


  // Init
  useEffect(() => {
    setSearchPopupID(createUVCID());
  }, [])

  useEffect(() => {
    if (!searchPopupID) return;

    (document.querySelector(`[data-uvc-popup-target="${searchPopupID}"]`) as HTMLButtonElement).addEventListener('click', () => {
      setTimeout(() => {
        (document.querySelector('#search-searchBar') as HTMLInputElement).focus();
      }, 200);
    })
  }, [searchPopupID])

  // Set / update placeholders
  useEffect(() => {
    if (!placeholderSearchQuery) return;
    if (placeholderSearchQuery.length !== 0 && isHintShowed) setIsHintShowed(false);

    setSearchResults([
      { item: undefined, type: 'title' },
      { item: undefined, type: 'title' },
      { item: undefined, type: 'title' },
      { item: undefined, type: 'title' },
      { item: undefined, type: 'title' },
    ])
  }, [placeholderSearchQuery])

  // Handle search
  useEffect(() => {
    (async function () {
      try {

        const engines: TSearchEngine[] = [];
        let query = debouncedSearchQuery;

        // Skip if not query provided while hint shown (initial effect)
        if (query.length === 0 && isHintShowed) return;

        // Skip if not query provided and hint not shown
        if (query.length === 0 && !isHintShowed) {
          setIsHintShowed(true)
          setSearchResults([])
          return;
        };

        if (debouncedSearchQuery.match(/^\@/gi)) {
          query = query.replace('@', '');
          engines.push('dubber');
          engines.push('user');
        } else {
          engines.push('title')
        }

        const { data } = await $api.get<{ results: ISearchExtended[] }>(`/search`, {
          params: {
            q: query,
            engines: JSON.stringify(engines)
          }
        })

        setSearchResults(data.results)

        if (isHintShowed) setIsHintShowed(false);
        if (isSearchErrored) setIsSearchErrored(false);
      } catch (e) {
        setIsSearchErrored(true);
        console.error(`Search error - `, e)
      }
    })()
  }, [debouncedSearchQuery])



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
      <Layer className='bg-dark/[.1] backdrop-blur-[64px] z-[1000] fixed max-[700px]:items-start'>
        <Popup id={searchPopupID} className='bg-dark w-[800px] max-w-[800px] rounded-[4px] mx-[24px] my-[32px] max-[700px]:mx-[8px]'>
          <input type="text" className='px-[16px] py-[8px] placeholder:text-lightGrey text-white border-b-[1px] border-b-darkGrey bg-transparent w-full' placeholder="Що шукаємо сьогодні?" value={searchQuery} onChange={e => setSearchQuery((e.target as HTMLInputElement).value)} id='search-searchBar' />

          <div className='px-[16px] py-[16px] w-full'>
            {/* Hint */}
            <div className={`flex gap-[8px] items-center ${isHintShowed && !isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
              <IcoInfo width={16} height={16} fill='#747474' />
              <p className='text-[12px] text-lightGrey'>Ти можеш знайти юзера чи даббера через <b className='text-lightGrey font-bold'>@</b></p>
            </div>

            {/* Nothing found */}
            <div className={`flex gap-[16px] items-center justify-center ${searchResults.length === 0 && !isHintShowed && !isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
              <IcoGhost width={32} height={32} />
              <p className='text-white'>Здається, в нас такого нема...</p>
            </div>

            {/* Search error */}
            <div className={`flex gap-[16px] items-center justify-center ${isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
              <IcoGhost width={32} height={32} />

              <div className='flex flex-col gap-[4px]'>
                <p className='text-white'>Йой, пошук тимчасово не працює</p>
                <p className='text-lightGrey text-[12px] text-center'>Спробуй трохи пізніше</p>
              </div>
            </div>

            {/* Results */}
            <ul className='flex flex-col gap-[8px] max-h-[500px] overflow-y-scroll w-full'>
              {searchResults.map(result => {
                return <SearchResult result={result} key={`search-placeholder--${result.item?.id || uuid.v4()}`} />
              })}
            </ul>
          </div>
        </Popup>
      </Layer>

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
                <Trigger className='uvc-popup-trigger header-ico duration-200' id={searchPopupID}>
                  <IcoSearch width={32} height={32} />
                </Trigger>
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
            } className='bg-darkGrey rounded-[2px] w-[180px] overflow-hidden !top-[70px]' align='end' animation='slide' statePriority='outer' state={userDetailsOpened} stateSetter={setUserDetailsOpened}>
              <Menu.MenuList>
                <Menu.MenuItem>
                  <Link href={`${config.URL.baseURL}/u/${user.username}`} className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey'>
                    <IcoUser width={24} height={24} />
                    <p className='text-white w-full'>Профіль</p>
                  </Link>
                </Menu.MenuItem>
                <Menu.MenuItem>
                  <Link href={`${config.URL.baseURL}/u/${user.username}#user-libs`} className='flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey'>
                    <IcoFolderPlain width={24} height={24} />
                    <p className='text-white w-full'>Теки</p>
                  </Link>
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
      </header>
    </>
  );

  /** @param title If not provided will return placeholder variant */
  function SearchResult({ result }: { result?: ISearchExtended }) {
    return (
      <>
        {result?.item ? <>
          {result.type === 'title' && <Link href={`${config.URL.baseURL}/${routes.watch.path}/${(result.item as ITitle).code}`} className='flex gap-[16px] duration-200 hover:bg-grey focus-visible:bg-grey rounded-[2px]'>
            <div className='relative w-[128px] h-[160px] rounded-[2px] overflow-hidden shrink-0 max-[700px]:w-[80px] max-[700px]:h-[120px]'>
              <LoadingImage src={(result.item as ITitle).poster} loading='lazy' />
            </div>

            <div className='flex flex-col gap-[8px]'>
              <p className='text-white text-[20px] font-bold text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[16px]' title={(result.item as ITitle).names.ukr}>{(result.item as ITitle).names.ukr}</p>
              <p className='text-lightGrey text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[12px]' title={(result.item as ITitle).names.eng}>{(result.item as ITitle).names.eng}</p>

              {/* Details */}
              <div className='flex items-center gap-[8px]'>
                <div className='flex items-center gap-[8px]'>
                  <IcoStarRating width={16} height={16} fill='#FF464E' />
                  <p className='gradient--primary-text font-bold max-[700px]:text-[12px]'>{
                    Number((result.item as ITitle).rating.IMDB) > 0 ? (result.item as ITitle).rating.IMDB?.toFixed(1) : '—'
                  }</p>
                </div>

                <span className='text-lightGrey text-[12px]'>•</span>

                <p className='text-white max-[700px]:text-[12px]'>{parseTitleType((result.item as ITitle).type)}</p>

                <span className='text-lightGrey text-[12px]'>•</span>

                <p className='text-white max-[700px]:text-[12px]'>{
                  Number((result.item as ITitle).episodesCount) > 0 ? (result.item as ITitle).episodesCount : '—'
                } / {
                    (result.item as ITitle).episodes.length ? (result.item as ITitle).episodes.sort((a, b) => a.order - b.order)[0].order : '—'
                  }</p>
              </div>
            </div>
          </Link>}

          {(result.type === 'dubber' || result.type === 'user') && <Link href={result.type === 'user' ? `${config.URL.baseURL}/${routes.user.path.replace('/*', '')}/${(result.item as IUser).username}` : `${config.URL.baseURL}/${routes.dubber.path.replace('/*', '')}/${(result.item as IDubber).code}`} className='flex gap-[16px] duration-200 hover:bg-grey focus-visible:bg-grey rounded-[2px]'>
            <div className='relative w-[128px] h-[128px] rounded-[2px] overflow-hidden shrink-0 max-[700px]:w-[80px] max-[700px]:h-[120px]'>
              <LoadingImage src={result.type === 'user' ? (result.item as IUser).avatar : (result.item as IDubber).thumbURL} />
            </div>

            <div className='flex flex-col gap-[8px]'>
              <p className='text-white text-[24px] font-bold text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[16px]'>{result.type === 'user' ? `@${(result.item as IUser).username}` : (result.item as IDubber).name}</p>

              <div className='flex items-center gap-[8px]'>
                {result.type === 'user' ? <IcoUser width={16} height={16} fill='#747474' /> : <IcoMicrophone width={16} height={16} fill='#747474' />}
                <p className='text-lightGrey max-[700px]:text-[12px]'>{result.type === 'user' ? 'Юзер' : 'Команда озвучення'}</p>
              </div>
            </div>
          </Link>}
        </> : <div className='flex gap-[16px]'>
          <div className='w-[128px] h-[160px] bg-darkGrey rounded-[2px] max-[700px]:w-[80px] max-[700px]:h-[120px]'></div>

          <div className='flex flex-col gap-[8px] w-full'>
            <div className={`h-[32px] bg-darkGrey rounded-[2px] max-[700px]:h-[24px]`} style={{ width: `${randomNumber(20, 70)}%` }}></div>
            <div className={`h-[24px] bg-darkGrey rounded-[2px] max-[700px]:h-[16px]`} style={{ width: `${randomNumber(10, 50)}%` }}></div>
          </div>
        </div>}
      </>
    )
  }
}

export default Header;