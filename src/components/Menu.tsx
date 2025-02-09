'use client'

import { useEffect, useId, useRef, useState } from 'react'
import * as DropMenu from '@fullkekw/fkw-menu';
import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { createStringID } from '~/utils/create-string-id';
import { IcoGhost, IcoInfo, IcoMicrophone, IcoNekomiLogo, IcoStarRating, IcoUser } from '../assets/Icons';
import { config } from '../config';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IDubber } from '../interfaces/IDubber';
import { ITitle } from '../interfaces/ITitle';
import { IUser } from '../interfaces/IUser';
import { Routes, routes } from '../routes';
import userSlice, { IUserState, userStateDefault } from '../store/reducers/userSlice';

import { cn } from './Components';
import { HandleClientError } from './Errors';
import { parseTitleType, randomNumber } from './handlers';
import { $api } from './http';
import { getRoute } from './ServerComponents';
import { NotifySuccess } from './UI/NotifyToast';
import StyledImage from './UI/StyledImage';
import { UIText } from './UI/Text.ui';



/** Global search engines */
type TSearchEngine = 'dubber' | 'user' | 'title';

/** Extended gloabl search result object with it's type */
export interface ISearchExtended<T = any> {
  type: TSearchEngine
  item: T
}

interface ITitleSearched extends ITitle {
  episodesDubbed: number
}

interface ISearchProps {
  dialogId: string
}

interface ISearchResultProps {
  result?: ISearchExtended
  usePatcherRouting: boolean
}

interface MenuDropProps {
  isUserAuthorized: boolean
  user: IUserState
  logout: () => void
  pathname: string

  className?: string
}



const Menu: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const searchPopupId = useId().replaceAll(':', '')
  const userDesktopMenuId = useId().replaceAll(':', '')
  const userMobileMenuId = useId().replaceAll(':', '')

  const user = useAppSelector(state => state.user)

  const [isUserAuthorized] = useState(Boolean(user.id));
  const [userDetailsOpened, setUserDetailsOpened] = useState(false)



  /** Exit from account */
  async function logout() {
    try {
      await $api.get('/user/logout');

      NotifySuccess({ title: 'Ви вийшли з акаунту', message: 'Ви ж повернетесь ще, так?' })
      dispatch(userSlice.actions.reducer(userStateDefault))
      setUserDetailsOpened(false)
      router.refresh();
    } catch (e) {
      HandleClientError(e);
    }
  }

  function focusSearch() {
    const search = document.querySelector('#search-searchBar') as HTMLInputElement;

    if (!search) return console.error(`Search #search-searchBar is not found`);
    let i = 0;

    setInterval(() => {
      if (i !== 5) {
        i += 1;
        search.focus();
      }
    }, 50);
  }



  return (
    <>
      <Search dialogId={searchPopupId} />

      {/* Header menu */}
      <header className={`fixed top-0 left-0 w-full py-[16px] backdrop-blur-[12px] z-[110] duration-200 max-sm:hidden h-[var(--header-height)]`}>
        <div className="wrapper !flex-row items-center justify-between w-full">
          <div className="flex items-center gap-[40px]">
            <Link href={routes.home.path} className="duration-200 hover:rotate-[5deg] focus-visible:rotate-[5deg] outline-none">
              <IcoNekomiLogo width={60} height={60} fill="#fff" />
            </Link>

            <div className="flex items-center gap-[0px]">
              <Link href={routes.home.path} className={`p-[8px] [&>span]:hover:text-primary h-[56px]`} title="На головну">
                <MaterialSymbol icon="home" size={40} className={cn('duration-200', pathname === routes.home.path ? 'text-primary' : 'text-white')} />
              </Link>

              <PopupButton className="p-[8px] [&>span]:hover:text-primary h-[48px]" togglePopupId={searchPopupId} onClick={focusSearch}>
                <MaterialSymbol icon="search" size={32} className={cn('text-white duration-200')} />
              </PopupButton>
            </div>
          </div>

          <DropMenu.Menu gap={16} settings={{ align: 'end' }} className="ui-dropdownMenu--scaleAnimation" state={userDetailsOpened} stateSetter={setUserDetailsOpened} id={userDesktopMenuId}>
            <DropMenu.MenuTrigger className="flex items-center gap-[8px] duration-200 relative" anchor>
              {isUserAuthorized && <>
                {/* User authorized */}
                <StyledImage src={user.avatar} width={`64px`} height={`64px`} priority className="rounded-[4px] overflow-hidden" alt="avatar" />
              </>}

              {!isUserAuthorized && <>
                {/* User is not authorized */}
                <div className="w-[64px] h-[64px] rounded-[4px] bg-dark-medium flex items-center justify-center">
                  <MaterialSymbol icon="no_accounts" size={40} className="text-white" />
                </div>
              </>}

              <MaterialSymbol icon="arrow_drop_down" size={24} className={cn(`text-white duration-200 p-[8px]`, userDetailsOpened && 'rotate-180')} />
            </DropMenu.MenuTrigger>

            <MenuDrop isUserAuthorized={isUserAuthorized} user={user} logout={logout} pathname={pathname} />
          </DropMenu.Menu>
        </div >
      </header>

      {/* Mobile menu */}
      <div className={`fixed bottom-0 left-0 w-full z-[110] bg-dark duration-200 hidden justify-between items-center max-sm:flex`}>
        <Link href={Routes.home.path} className="ui-menu-mobile_navItem">
          <MaterialSymbol icon="home" className="text-white" size={24} />
          <UIText text="Головна" className="font-bold" type="mini" />
        </Link>

        <PopupButton className="ui-menu-mobile_navItem" togglePopupId={searchPopupId} onClick={focusSearch}>
          <MaterialSymbol icon="search" className="text-white" size={24} />
          <UIText text="Пошук" className="font-bold" type="mini" />
        </PopupButton>

        <Link href={`/u/${user.username}#user-libs`} className="ui-menu-mobile_navItem">
          <MaterialSymbol icon="folder_copy" className="text-white" size={24} />
          <UIText text="Теки" className="font-bold" type="mini" />
        </Link>

        <DropMenu.Menu gap={16} settings={{ align: 'end', direction: 'top' }} className="ui-dropdownMenu--scaleAnimation w-full" state={userDetailsOpened} stateSetter={setUserDetailsOpened} id={userMobileMenuId}>
          <DropMenu.MenuTrigger className="ui-menu-mobile_navItem" anchor>
            <div className="w-[24px] h-[24px] relative">
              <MaterialSymbol icon="menu" className={cn('text-white duration-200 absolute top-0 left-0', userDetailsOpened && 'opacity-0')} size={24} />
              <MaterialSymbol icon="close" className={cn('text-white duration-200 absolute top-0 left-0', !userDetailsOpened && 'opacity-0')} size={24} />
            </div>

            <UIText text="Меню" className="font-bold" type="mini" />
          </DropMenu.MenuTrigger>

          <MenuDrop isUserAuthorized={isUserAuthorized} user={user} logout={logout} pathname={pathname} className="!right-[8px]" />
        </DropMenu.Menu>
      </div>
    </>
  );
}

function MenuDrop({ isUserAuthorized, user, logout, pathname, className }: MenuDropProps) {
  return <DropMenu.MenuWrapper className={cn(`bg-dark-primary border border-dark-light rounded-[4px] w-[200px] flex flex-col`, className)}>
    {isUserAuthorized && <>
      <Link href={`/u/${user.username}`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        <StyledImage src={user.avatar} width={`24px`} height={`24px`} priority className="rounded-[2px] overflow-hidden" alt="avatar" />
        <p className="text-white w-full font-manrope">Профіль</p>
      </Link>

      <Link href={`/u/${user.username}#user-libs`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        <MaterialSymbol icon="folder_copy" size={24} className="text-white" />
        <p className="text-white w-full font-manrope">Теки</p>
      </Link>

      <Link href={`/u/${user.username}?openSettings`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        <MaterialSymbol icon="settings" size={24} className="text-white" />
        <p className="text-white w-full font-manrope">Налаштування</p>
      </Link>

      {/* Divider */}
      <span className="w-full h-[1px] block bg-grey"></span>

      <button className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={logout}>
        <MaterialSymbol icon="logout" size={24} className="text-primary" />
        <p className="text-white text-center w-full font-bold font-manrope">Вийти</p>
      </button>
    </>}

    {!isUserAuthorized && <>
      <Link href={`${config.URL.fkAccount}/login?ref=${config.URL.baseURL}${pathname}`} className="flex items-center gap-[16px] px-[16px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        <MaterialSymbol icon="login" size={24} className="text-primary" />
        <p className="text-white text-center w-full font-bold font-manrope">Увійти</p>
      </Link>
    </>}
  </DropMenu.MenuWrapper>
}

const Search: NextPage<ISearchProps> = ({ dialogId }) => {
  const pathname = usePathname();

  const [isSearchErrored, setIsSearchErrored] = useState(false);
  const [isHintShowed, setIsHintShowed] = useState(true)
  const [isPatcherHintShowed, setIsPatcherHintShowed] = useState(false)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ISearchExtended[]>([])
  const [usePatcherRouting, setUsePatcherRouting] = useState(false)

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)
  const [placeholderSearchQuery] = useDebounce(searchQuery, 50)

  const resultsRef = useRef<HTMLUListElement>(null)



  // Set / update placeholders
  useEffect(() => {
    if (!placeholderSearchQuery) return;
    if (placeholderSearchQuery.length !== 0 && isHintShowed) setIsHintShowed(false);

    setIsSearchErrored(false);
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

        if (debouncedSearchQuery.match(/^@/gi)) {
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
        setSearchResults([])
        HandleClientError(e);
      }
    })()
  }, [debouncedSearchQuery])

  // Scroll to top of search results
  useEffect(() => {
    resultsRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [searchResults])

  useEffect(() => {
    const route = getRoute(pathname)?.path.replace('/*', '');

    setIsPatcherHintShowed(route === routes.patcher_title.path)
    setUsePatcherRouting(route === routes.patcher_title.path)
  }, [pathname])



  return <PopupLayer className="bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center max-[700px]:items-start">
    <PopupDialog id={dialogId} className="w-full max-w-[800px] px-[24px] py-[32px] max-[700px]:px-[8px]">
      <div className="bg-dark w-full rounded-[4px]">
        <input type="text" autoComplete="off" className="px-[16px] py-[8px] placeholder:text-lightGrey text-white border-b-[1px] border-b-darkGrey bg-transparent w-full" placeholder="Що шукаємо сьогодні?" value={searchQuery} onChange={e => setSearchQuery((e.target as HTMLInputElement).value)} id="search-searchBar" />

        <div className="px-[16px] py-[16px] w-full flex flex-col gap-[16px]">
          {/* Hint */}
          <div className={`flex gap-[8px] items-center ${isHintShowed && !isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
            <IcoInfo width={16} height={16} fill="#747474" />
            <p className="text-[12px] text-lightGrey">Ти можеш знайти юзера чи даббера через <b className="text-lightGrey font-bold">@</b></p>
          </div>

          {/* Patcher hint */}
          <div className={`flex gap-[8px] items-center ${isPatcherHintShowed && !isSearchErrored && searchResults.length ? '' : 'opacity-0 invisible absolute'}`}>
            <IcoInfo width={16} height={16} fill="#747474" />
            <p className="text-[12px] text-lightGrey">Новий тайтл буде відкрито в патчері</p>
          </div>

          {/* Nothing found */}
          <div className={`flex gap-[16px] items-center justify-center ${searchResults.length === 0 && !isHintShowed && !isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
            <IcoGhost width={32} height={32} />
            <p className="text-white">Здається, в нас такого нема...</p>
          </div>

          {/* Search error */}
          <div className={`flex gap-[16px] items-center justify-center ${isSearchErrored ? '' : 'opacity-0 invisible absolute'}`}>
            <IcoGhost width={32} height={32} />

            <div className="flex flex-col gap-[4px]">
              <p className="text-white">Йой, пошук тимчасово не працює</p>
              <p className="text-lightGrey text-[12px] text-center">Спробуй трохи пізніше</p>
            </div>
          </div>

          {/* Results */}
          <ul className={`flex-col gap-[8px] max-h-[500px] overflow-y-scroll w-full ${searchResults.length ? 'flex' : 'hidden'}`} ref={resultsRef}>
            {searchResults.map(result => {
              return <SearchResult result={result} usePatcherRouting={usePatcherRouting} key={`search-placeholder--${result.item?.id ?? createStringID(6)}`} />
            })}
          </ul>
        </div>
      </div>
    </PopupDialog>
  </PopupLayer>
}



/** @param result If not provided will return placeholder variant */
function SearchResult({ result, usePatcherRouting }: ISearchResultProps) {
  return (
    <>
      {result?.item ? <>
        {result.type === 'title' && <Link href={`${config.URL.baseURL}${usePatcherRouting ? `${routes.patcher_title.path}/${(result.item as ITitle).id}` : `${routes.watch_title.path}/${(result.item as ITitle).code}`}`} className="flex gap-[16px] duration-200 hover:bg-grey focus-visible:bg-grey rounded-[2px]">
          <StyledImage src={(result.item as ITitle).poster} loading="lazy" width="128px" height="160px" className="rounded-[2px] overflow-hidden shrink-0 max-[700px]:w-[80px] max-[700px]:h-[120px]" />

          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[20px] font-bold text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[16px]" title={(result.item as ITitle).names.ukr}>{(result.item as ITitle).names.ukr}</p>
            <p className="text-lightGrey text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[12px]" title={(result.item as ITitle).names.eng}>{(result.item as ITitle).names.eng}</p>

            {/* Details */}
            <div className="flex items-center gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <IcoStarRating width={16} height={16} fill="#FF464E" />
                <p className="gradient--primary-text font-bold max-[700px]:text-[12px]">{
                  Number((result.item as ITitle).rating.IMDB) > 0 ? (result.item as ITitle).rating.IMDB?.toFixed(1) : '—'
                }</p>
              </div>

              <span className="text-lightGrey text-[12px]">•</span>

              <p className="text-white max-[700px]:text-[12px]">{parseTitleType((result.item as ITitle).type)}</p>

              <span className="text-lightGrey text-[12px]">•</span>

              <p className="text-white max-[700px]:text-[12px]">{
                Number((result.item as ITitleSearched).episodesDubbed) > 0 ? (result.item as ITitleSearched).episodesDubbed : '—'
              } / {
                  Number((result.item as ITitle).episodesCount) > 0 ? (result.item as ITitle).episodesCount : '—'
                }</p>
            </div>
          </div>
        </Link>}

        {(result.type === 'dubber' || result.type === 'user') && <Link href={result.type === 'user' ? `${config.URL.baseURL}${routes.user_profile.path}/${(result.item as IUser).username}` : `${config.URL.baseURL}${routes.dubber_profile.path}/${(result.item as IDubber).code}`} className="flex gap-[16px] duration-200 hover:bg-grey focus-visible:bg-grey rounded-[2px]">
          <StyledImage src={result.type === 'user' ? (result.item as IUser).avatar : (result.item as IDubber).avatar} width="128px" height="128px" className="rounded-[2px] overflow-hidden shrink-0 max-[700px]:w-[80px] max-[700px]:h-[120px]" />

          <div className="flex flex-col gap-[8px]">
            <p className="text-white text-[24px] font-bold text-ellipsis line-clamp-[2] pr-[2px] max-[700px]:text-[16px]">{result.type === 'user' ? `@${(result.item as IUser).username}` : (result.item as IDubber).name}</p>

            <div className="flex items-center gap-[8px]">
              {result.type === 'user' ? <IcoUser width={16} height={16} fill="#747474" /> : <IcoMicrophone width={16} height={16} fill="#747474" />}
              <p className="text-lightGrey max-[700px]:text-[12px]">{result.type === 'user' ? 'Юзер' : 'Команда озвучення'}</p>
            </div>
          </div>
        </Link>}
      </> : <div className="flex gap-[16px]">
        <div className="relative w-[128px] h-[160px] bg-darkGrey rounded-[2px] max-[700px]:w-[80px] max-[700px]:h-[120px] shrink-0"></div>

        <div className="flex flex-col gap-[8px] w-full">
          <div className={`h-[32px] bg-darkGrey rounded-[2px] max-[700px]:h-[24px]`} style={{ width: `${randomNumber(20, 70)}%` }}></div>
          <div className={`h-[24px] bg-darkGrey rounded-[2px] max-[700px]:h-[16px]`} style={{ width: `${randomNumber(10, 50)}%` }}></div>
        </div>
      </div>}
    </>
  )
}




export default Menu;