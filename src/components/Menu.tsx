'use client'

import '~/styles/components/Menu.scss';

import { useEffect, useId, useRef, useState } from 'react'
import * as DropMenu from '@fullkekw/fkw-menu';
import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import { MaterialSymbol } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { HydratedAnime } from '~/interfaces/AnimeIntf';
import API from '~/services/ApiService';
import { IcoNekomiLogo } from '../assets/Icons';
import { config } from '../config';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IDubber } from '../interfaces/IDubber';
import { IUser } from '../interfaces/IUser';
import { Routes, routes } from '../routes';
import userSlice, { IUserState, userStateDefault } from '../store/reducers/userSlice';

import { cn } from './Components';
import { HandleClientError } from './Errors';
import { randomNumber } from './handlers';
import { $api } from './http';
import { getRoute } from './ServerComponents';
import StyledImage from './StyledImage';
import { NotifySuccess } from './UI/NotifyToast';
import { UIText } from './UI/Text.ui';



/** Global search engines */
type TSearchEngine = 'dubber' | 'user' | 'title';

/** Extended gloabl search result object with it's type */
export interface ISearchExtended<T = any> {
  type: TSearchEngine
  item: T
}

interface MenuSearchProps {
  dialogId: string
}

interface MenuDropProps {
  isUserAuthorized: boolean
  user: IUserState
  logout: () => void
  pathname: string

  className?: string
}

type MenuSearchType = 'user' | 'dubber' | 'anime'

interface MenuSearchSelectTypeButtonProps {
  type: MenuSearchType

  setType?: (val: MenuSearchType) => void
  className?: string
}

interface SearchAnime extends HydratedAnime {
  dubbedEpisodes: number | null
}

type MenuSearchResultType = IDubber | SearchAnime | IUser | null

interface MenuSearchResultProps {
  item: MenuSearchResultType
  type: MenuSearchType
  usePatcherRouting: boolean
}



const SearchStartTypingDictionary = [
  'Тільки я візьму новий рівень (2 сезон)',
  'Студія Качур',
  '@unniiiverse',
  '@nekomiclub',
  'резеро 3',
  'кордон шангріла',
  'Кайджу номер 8',
  'dandadan',
  'jujutsu kaisen 2'
]



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
      <MenuSearch dialogId={searchPopupId} />

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
                <StyledImage src={user.avatar} width={`64px`} height={`64px`} loading="eager" priority className="rounded-[4px] overflow-hidden" alt="avatar" />
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

        {isUserAuthorized && <Link href={`/u/${user.username}#user-libs`} className="ui-menu-mobile_navItem">
          <MaterialSymbol icon="folder_copy" className="text-white" size={24} />
          <UIText text="Теки" className="font-bold" type="mini" />
        </Link>}

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



const MenuDrop: NextPage<MenuDropProps> = ({ isUserAuthorized, user, logout, pathname, className }) => {
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

const MenuSearch: NextPage<MenuSearchProps> = ({ dialogId }) => {
  const pathname = usePathname();
  const selectSearchTypeMenuId = useId().replaceAll(':', '');

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<MenuSearchResultType[]>([]);
  const [searchType, setSearchType] = useState<MenuSearchType>('anime')
  const [startTypingText, setStartTypingText] = useState('');
  const [showStartTyping, setShowStartTyping] = useState(true);
  const [showNotFound, setShowNotFound] = useState(false);
  const [usePatcherRouting, setUserPatcherRouting] = useState(false);
  const [isSelectSearchTypeOpen, setIsSelectSearchTypeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchTextDebounce] = useDebounce(searchText, 700)

  const contentRef = useRef<HTMLDivElement>(null)
  const searchingQueryRef = useRef('');



  //* Init
  useEffect(() => {
    setStartTypingText(SearchStartTypingDictionary[randomNumber(0, SearchStartTypingDictionary.length - 1)])
  }, [])

  //* Handle typing search effect
  useEffect(() => {
    setShowStartTyping(false);
    setShowNotFound(false)

    if (searchText.length === 0) {
      setShowStartTyping(true)
      setSearchResults([]);

      return
    }

    setSearchResults([null, null, null, null, null])
  }, [searchText])

  //* Handle patcher routing & hide dialog on route change
  useEffect(() => {
    const route = getRoute(pathname)?.path.replace('/*', '');

    setUserPatcherRouting(route === routes.patcher_title.path)
    setIsSearchOpen(false);
  }, [pathname])

  //* Handle search via debounce query
  useEffect(() => {
    setShowStartTyping(false);
    setShowNotFound(false)

    if (searchTextDebounce.length === 0) {
      setShowStartTyping(true)
      setSearchResults([]);

      return
    }

    search();
  }, [searchTextDebounce])

  //* Handle search results
  useEffect(() => {
    if (searchResults.length === 0 && !showStartTyping) return setShowNotFound(true);

    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [searchResults])

  //* Close select search type on select 
  useEffect(() => {
    setIsSelectSearchTypeOpen(false);
    setSearchResults([]);
  }, [searchType])



  async function search(e?: React.FormEvent) {
    e && e.preventDefault();

    // Reset states
    if (searchText.length === 0) {
      setShowStartTyping(true);
      setShowNotFound(false)
      setSearchResults([]);

      return;
    }

    // Skip if already searching this query
    if (searchingQueryRef.current === searchText) return;
    searchingQueryRef.current = searchText;

    try {
      if (searchType === 'anime') {
        const { results, extended } = await API.searchAnime({ q: searchText })

        setSearchResults(results.map(result => {
          return {
            ...result,
            dubbedEpisodes: extended.dubbedEpisodes[result.anime.uuid]
          }
        }))
      }

      if (searchType === 'user') {
        const { results } = await API.searchUsers({ q: searchText })

        setSearchResults(results.map(el => el.user))
      }

      if (searchType === 'dubber') {
        const { results } = await API.searchDubber({ q: searchText })

        setSearchResults(results);
      }

      setShowStartTyping(false);
    } catch (e) {
      setShowStartTyping(true)
      setShowNotFound(false)
      setSearchResults([])
      HandleClientError(e)
    }
  }



  return <PopupLayer className="bg-dark/[.3] backdrop-blur-[4px] flex justify-center items-center max-md:items-start">
    <PopupDialog className="w-full max-w-[800px] px-[24px] py-[32px] max-md:px-[8px]" id={dialogId} state={isSearchOpen} stateSetter={setIsSearchOpen}>
      <div className="w-full bg-dark-primary flex flex-col gap-[16px] pb-[12px] rounded-[4px]">
        {/* Search box */}
        <div className="w-full flex justify-between items-center border-b border-b-dark-light">
          <DropMenu.Menu id={selectSearchTypeMenuId} gap={0} settings={{ align: 'start', animation: 'slide' }} state={isSelectSearchTypeOpen} stateSetter={setIsSelectSearchTypeOpen}>
            <DropMenu.MenuTrigger className="flex gap-[12px] items-center p-[12px] border-r border-dark-medium" anchor>
              <MenuSearchSelectTypeButton type={searchType} />

              <MaterialSymbol className="text-grey-new" icon="expand_all" size={12} />
            </DropMenu.MenuTrigger>

            <DropMenu.MenuWrapper className="bg-dark-primary border rounded-t-none border-dark-light flex flex-col rounded-[4px] overflow-hidden min-w-fit w-full">
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'anime'} setType={setSearchType} />
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'dubber'} setType={setSearchType} />
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'user'} setType={setSearchType} />
            </DropMenu.MenuWrapper>
          </DropMenu.Menu>

          <form onSubmit={search} className="w-full flex justify-between items-center">
            <input className="p-[12px] bg-transparent w-full font-manrope text-white placeholder:font-manrope placeholder:text-grey-new" type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Що шукаємо?" autoComplete="off" id="search-searchBar" />

            <button className="p-[12px] flex justify-center items-center" type="submit">
              <MaterialSymbol className={cn(`duration-100`, searchText.length > 0 ? 'text-primary' : 'text-grey-new')} icon="search" size={24} />
            </button>
          </form>
        </div>

        {/* Search content */}
        <div className="flex flex-col gap-[4px] px-[12px] max-h-[70svh] overflow-y-scroll overflow-x-hidden max-sm:max-h-[80svh]" ref={contentRef}>
          <div className={cn('flex flex-col gap-[4px]', searchResults.length && (showStartTyping || showNotFound || usePatcherRouting) && 'pb-[16px]')}>
            {/* Start typing */}
            {showStartTyping && !usePatcherRouting && <div className="flex items-center gap-[16px] px-[12px]">
              <MaterialSymbol className="text-grey-new" icon="star" size={16} />

              <p className="text-grey-new font-manrope">Наприклад: {startTypingText}</p>
            </div>}

            {/* Not found */}
            {showNotFound && <div className="flex items-center gap-[16px] px-[12px]">
              <MaterialSymbol className="text-grey-new" icon="live_help" size={16} />

              <p className="text-grey-new font-manrope">Здається, в нас такого нема...</p>
            </div>}

            {/* Patcher hint */}
            {usePatcherRouting && searchType === 'anime' && !showNotFound && <div className="flex items-center gap-[16px] px-[12px]">
              <MaterialSymbol className="text-grey-new" icon="edit" size={16} />

              <p className="text-grey-new font-manrope">Нове аніме буде відкрито в редакторі</p>
            </div>}
          </div>

          {searchResults.map((result, i) => {
            return <MenuSearchResult item={result} type={searchType} usePatcherRouting={usePatcherRouting} key={`menusearch-result--${i}`} />
          })}
        </div>
      </div>
    </PopupDialog>
  </PopupLayer>
}

const MenuSearchSelectTypeButton: NextPage<MenuSearchSelectTypeButtonProps> = ({ type, className, setType }) => {
  return <div role="button" className={cn(`flex items-center gap-[8px]`, className)} onClick={() => setType && setType(type)}>
    <MaterialSymbol className="text-white" icon={
      type === 'anime' ? 'slideshow'
        : type === 'user' ? 'person'
          : type === 'dubber' ? 'mic'
            : 'question_mark'
    } size={16} />

    <p className="text-white font-manrope">
      {type === 'anime' && 'Аніме'}
      {type === 'user' && 'Користувач'}
      {type === 'dubber' && 'Озвучення'}
    </p>
  </div>
}

const MenuSearchResult: NextPage<MenuSearchResultProps> = ({ item, type, usePatcherRouting }) => {
  const [firstLineWidth] = useState(randomNumber(80, 320))
  const [secondLineWidth] = useState(randomNumber(40, 250))

  const [animeResult, setAnimeResult] = useState<SearchAnime | null>(null)
  const [userResult, setUserResult] = useState<IUser | null>(null)
  const [dubberResult, setDubberResult] = useState<IDubber | null>(null)



  useEffect(() => {
    setAnimeResult(type === 'anime' ? item as SearchAnime : null)
    setUserResult(type === 'user' ? item as IUser : null)
    setDubberResult(type === 'dubber' ? item as IDubber : null)
  }, [item])



  return item === null ? <>
    {/* Result placeholder */}

    {/* Anime type */}
    {type === 'anime' && <div className="menu-search-result">
      <Skeleton width={'100%'} height={'100%'} containerClassName="w-[120px] h-[160px] relative flex-shrink-0" className="absolute top-0" />

      <div className="menu-search-result_content">
        <Skeleton width={firstLineWidth} height={27} className="max-w-full" />
        <Skeleton width={secondLineWidth} height={20} className="max-w-full" />
        <Skeleton width={260} height={22} className="max-w-full" />
      </div>
    </div>}

    {/* User type */}
    {(type === 'user' || type === 'dubber') && <div className="menu-search-result">
      <Skeleton width={'100%'} height={'100%'} containerClassName="w-[128px] h-[128px] relative flex-shrink-0" className="absolute top-0" />

      <div className="menu-search-result_content">
        <Skeleton width={firstLineWidth} height={27} />
        <Skeleton width={secondLineWidth} height={20} />
      </div>
    </div>}
  </> : <>
    {/* Result ready */}

    {/* Anime type */}
    {type === 'anime' && animeResult && <Link href={`${config.URL.baseURL}${usePatcherRouting ? Routes.patcher_title.path : Routes.watch_title.path}/${animeResult.anime.slug}`} className="menu-search-result">
      <StyledImage src={animeResult.anime.poster} width="120px" height="160px" />

      <div className="menu-search-result_content">
        <h4 className="text-white text-[20px] font-manrope font-bold line-clamp-2" title={animeResult.anime.names.ukr}>{animeResult.anime.names.ukr}</h4>
        <h5 className="text-grey-new font-space-grotesk line-clamp-2" title={animeResult.anime.names.eng}>{animeResult.anime.names.eng}</h5>

        <div className="flex items-center gap-[8px] flex-wrap">
          <div className="flex items-center gap-[8px]">
            <MaterialSymbol className="text-primary" icon="star_half" size={16} />
            <p className="text-primary font-space-grotesk font-bold whitespace-nowrap">{animeResult.anime.score.mal?.toFixed(2) ?? animeResult.anime.score.imdb?.toFixed(2) ?? '—'}</p>
          </div>
          <span className="text-grey-new font-manrope">•</span>

          <div className="flex items-center gap-[8px]">
            <MaterialSymbol className="text-white" icon="acute" size={16} />
            <p className="text-white font-space-grotesk whitespace-nowrap">{`${animeResult.dubbedEpisodes ?? '—'} / ${animeResult.anime.episodesCount ?? '—'}`}</p>
          </div>
          <span className="text-grey-new font-manrope">•</span>

          <p className="text-white font-manrope">{animeResult.media.name}</p>
          <span className="text-grey-new font-manrope">•</span>

          <p className="text-white font-space-grotesk whitespace-nowrap">{animeResult.anime.year}</p>
        </div>
      </div>
    </Link>}

    {/* User type */}
    {(type === 'user' && userResult) && <Link href={`${config.URL.baseURL}${Routes.user_profile.path}/${userResult.username}`} className="menu-search-result">
      <StyledImage src={userResult.avatar} width="128px" height="128px" />

      <div className="menu-search-result_content">
        <h4 className="text-white text-[20px] font-space-grotesk font-bold line-clamp-1" title={userResult.username}>@{userResult.username}</h4>
      </div>
    </Link>}

    {/* Dubber type */}
    {(type === 'dubber' && dubberResult) && <Link href={`${config.URL.baseURL}${Routes.dubber_profile.path}/${dubberResult.slug}`} className="menu-search-result">
      <StyledImage src={dubberResult.avatar} width="128px" height="128px" />

      <div className="menu-search-result_content">
        <h4 className="text-white text-[20px] font-manrope font-bold line-clamp-1" title={dubberResult.nameUkr}>{dubberResult.nameUkr}</h4>
        {dubberResult.description && <p className="text-grey-new font-manrope line-clamp-2" title={dubberResult.description}>{dubberResult.description}</p>}
      </div>
    </Link>}
  </>
}



export default Menu;