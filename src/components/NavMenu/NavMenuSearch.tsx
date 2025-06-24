'use client'

import '~/styles/components/Menu.scss';

import { useEffect, useId, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import { MaterialSymbol } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { config } from '~/config';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { Dubber } from '~/interfaces/DubberIntf';
import { User } from '~/interfaces/UserIntf';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import { cn } from '~/utils/classnames';
import { randomNumber } from '~/utils/utils';
import { HandleClientError } from '../Errors';
import StyledImage from '../Styled/StyledImage';



interface Props {
  dialogId: string
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

type MenuSearchResultType = Dubber | SearchAnime | User | null

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



const NavMenuSearch: NextPage<Props> = ({ dialogId }) => {
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



  // Init
  useEffect(() => {
    setStartTypingText(SearchStartTypingDictionary[randomNumber(0, SearchStartTypingDictionary.length - 1)])
  }, [])

  // Handle typing search effect
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

  // Handle patcher routing & hide dialog on route change
  useEffect(() => {
    setUserPatcherRouting(pathname.includes('/patcher'))
    setIsSearchOpen(false);
  }, [pathname])

  // Handle search via debounce query
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

  // Handle search results
  useEffect(() => {
    if (searchResults.length === 0 && !showStartTyping) return setShowNotFound(true);

    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }, [searchResults])

  // Close select search type on select 
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
          <Menu id={selectSearchTypeMenuId} gap={0} settings={{ align: 'start', animation: 'slide' }} state={isSelectSearchTypeOpen} stateSetter={setIsSelectSearchTypeOpen}>
            <MenuTrigger className="flex gap-[12px] items-center p-[12px] border-r border-dark-medium" anchor>
              <MenuSearchSelectTypeButton type={searchType} />

              <MaterialSymbol className="text-grey-new" icon="expand_all" size={12} />
            </MenuTrigger>

            <MenuWrapper className="bg-dark-primary border rounded-t-none border-dark-light flex flex-col rounded-[4px] overflow-hidden min-w-fit w-full">
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'anime'} setType={setSearchType} />
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'dubber'} setType={setSearchType} />
              <MenuSearchSelectTypeButton className="menu-search_selectType" type={'user'} setType={setSearchType} />
            </MenuWrapper>
          </Menu>

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
  const [userResult, setUserResult] = useState<User | null>(null)
  const [dubberResult, setDubberResult] = useState<Dubber | null>(null)



  useEffect(() => {
    setAnimeResult(type === 'anime' ? item as SearchAnime : null)
    setUserResult(type === 'user' ? item as User : null)
    setDubberResult(type === 'dubber' ? item as Dubber : null)
  }, [item])



  return item === null ? <>
    {/* === Result placeholder */}

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
    {/* === Result ready */}

    {/* Anime type */}
    {type === 'anime' && animeResult && <Link href={
      `${config.URL.baseURL}${usePatcherRouting
        ? Routes.patcher_title.path
        : Routes.watch_title.path}/${usePatcherRouting
          ? animeResult.anime.uuid
          : animeResult.anime.slug
      }`
    } className="menu-search-result">
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

export default NavMenuSearch;