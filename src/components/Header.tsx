'use client'







import '../styles/components/Header.scss';

import { useEffect, useRef, useState } from 'react'
import * as DropMenu from '@fullkekw/fkw-menu';
import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { AxiosError } from 'axios';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import { IcoFolderPlain } from '../assets/Folder';
import { IcoArrow, IcoExit, IcoGhost, IcoHome, IcoInfo, IcoMicrophone, IcoNekomiLogo, IcoSearch, IcoSettings, IcoStarRating, IcoUser } from '../assets/Icons';
import { config } from '../config';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IDubber } from '../interfaces/IDubber';
import { ITitle } from '../interfaces/ITitle';
import { IUser } from '../interfaces/IUser';
import { routes } from '../routes';
import userSlice, { userStateDefault } from '../store/reducers/userSlice';

import { createID, makeStringID, parseTitleType, randomNumber } from './handlers';
import { $api } from './http';
import { getRoute } from './ServerComponents';
import StyledImage from './UI/StyledImage';



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

const Header: NextPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const user = useAppSelector(state => state.user)

  const [userDetailsOpened, setUserDetailsOpened] = useState(false)
  const [isSearchErrored, setIsSearchErrored] = useState(false);
  const [isHintShowed, setIsHintShowed] = useState(true)
  const [isPatcherHintShowed, setIsPatcherHintShowed] = useState(false)

  const [searchPopupID, setSearchPopupID] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<ISearchExtended[]>([])
  const [usePatcherRouting, setUsePatcherRouting] = useState(false)

  const [debouncedSearchQuery] = useDebounce(searchQuery, 500)
  const [placeholderSearchQuery] = useDebounce(searchQuery, 50)

  const resultsRef = useRef<HTMLUListElement>(null)



  // Init
  useEffect(() => {
    setSearchPopupID(makeStringID(16, true));
  }, [])

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
        console.error(`Search error - `, e)
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



  /** Exit from account */
  async function logout() {
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

    dispatch(userSlice.actions.reducer(userStateDefault))
    setUserDetailsOpened(false)
    router.refresh();
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
      <PopupLayer className="bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center max-[700px]:items-start">
        <PopupDialog id={searchPopupID} className="bg-dark w-[800px] max-w-[800px] rounded-[4px] mx-[24px] my-[32px] max-[700px]:mx-[8px]">
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
                return <SearchResult result={result} key={`search-placeholder--${result.item?.id || createID()}`} />
              })}
            </ul>
          </div>
        </PopupDialog>
      </PopupLayer>

      <header className={`fixed top-0 left-0 w-full py-[16px] backdrop-blur-[12px] z-[110] duration-200`}>
        <div className="wrapper !flex-row items-center justify-between w-full">
          <div className="flex items-center gap-[40px]">
            <Link href={routes.home.path} className="duration-200 hover:rotate-[5deg] focus-visible:rotate-[5deg] outline-none">
              <IcoNekomiLogo width={60} height={60} fill="#fff" />
            </Link>

            <div className="flex items-center gap-[16px]">
              <Link href={routes.home.path} className={`header-ico focus-visible:outline-none ${pathname === routes.home.path ? 'header-ico--active' : ''}`} title="На головну">
                <IcoHome width={32} height={32} />
              </Link>

              <div className="flex items-center gap-[16px]">
                <PopupButton className="header-ico duration-200" togglePopupId={searchPopupID} onClick={focusSearch}>
                  <IcoSearch width={32} height={32} />
                </PopupButton>
              </div>
            </div>
          </div>

          {user.id ? <>
            {/* User authorized */}

            <DropMenu.Menu gap={16} settings={{ align: 'end', animation: 'slide' }} state={userDetailsOpened} stateSetter={setUserDetailsOpened} id="header-menu-authorized">
              <DropMenu.MenuTrigger className="flex items-center gap-[16px] duration-200 rounded-[2px] overflow-hidden pr-[8px]" anchor>
                <div className="flex justify-center items-center gap-[8px]">
                  <StyledImage src={user.avatar} priority width={`60px`} height={`60px`} className="rounded-[4px]" alt="avatar" />

                  <IcoArrow width={24} height={24} className={`duration-200 ${userDetailsOpened ? 'rotate-180' : 'rotate-0'}`} />
                </div>
              </DropMenu.MenuTrigger>

              <DropMenu.MenuWrapper className="bg-darkGrey rounded-[2px] !w-[180px] overflow-hidden !top-[70px] flex flex-col">
                <Link href={`/u/${user.username}`} className="flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey">
                  <IcoUser width={24} height={24} />
                  <p className="text-white w-full">Профіль</p>
                </Link>

                <Link href={`/u/${user.username}#user-libs`} className="flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey">
                  <IcoFolderPlain width={24} height={24} />
                  <p className="text-white w-full">Теки</p>
                </Link>

                <Link href={`/u/${user.username}?openSettings`} className="flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey">
                  <IcoSettings width={24} height={24} />
                  <p className="text-white w-full">Акаунт</p>
                </Link>

                {/* Divider */}
                <span className="w-full h-[1px] block bg-grey"></span>

                <div className="flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey" role="button" onClick={logout}>
                  <IcoExit width={24} height={24} fill="#FF464E" />
                  <p className="text-white text-center w-full font-bold">Вийти</p>
                </div>
              </DropMenu.MenuWrapper>
            </DropMenu.Menu>
          </> : <>
            {/* User not authorized */}

            <DropMenu.Menu gap={16} settings={{ align: 'end', animation: 'slide' }} id="header-menu-notAuthorized">
              <DropMenu.MenuTrigger className="flex justify-center items-center gap-[8px] duration-200 rounded-[2px] overflow-hidden pr-[8px]" anchor>
                <div className="p-[10px]">
                  <IcoUser width={40} height={40} />
                </div>

                <IcoArrow width={24} height={24} className={`duration-200 ${userDetailsOpened ? 'rotate-180' : 'rotate-0'}`} />
              </DropMenu.MenuTrigger>

              <DropMenu.MenuWrapper className="bg-darkGrey rounded-[2px] !w-[180px] overflow-hidden flex flex-col">
                <Link href={`${config.URL.fkAccount}/login?ref=${config.URL.baseURL}${pathname}`} className="flex items-center gap-[8px] p-[8px] cursor-pointer duration-200 hover:bg-grey focus-visible:bg-grey">
                  <IcoExit width={24} height={24} fill="#FF464E" />
                  <p className="text-white text-center w-full">Увійти</p>
                </Link>
              </DropMenu.MenuWrapper>
            </DropMenu.Menu>
          </>}
        </div >
      </header>
    </>
  );

  /** @param result If not provided will return placeholder variant */
  function SearchResult({ result }: { result?: ISearchExtended }) {
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
}

export default Header;