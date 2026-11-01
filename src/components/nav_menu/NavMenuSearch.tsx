'use client';

import { NextPage } from 'next';
import { useEffect, useId, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { PopupWindow } from '@fullkekw/popup';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import { useDebounce } from 'use-debounce';

import StyledImage from '~/components/styled/StyledImage';
import IUser from '~/interfaces/IUser';
import routes from '~/routes';
import { AnimeSearchResultType } from '~/services/api/anime/GetAnimeSearch.api';
import { DubberSearchResultType } from '~/services/api/dubber/GetDubberSearch.api';
import API from '~/shared/lib/api';
import { TAnimeSearchResult, TTeamSearchResult, TUserSearchResult } from '~/shared/lib/api/api-types';
import { HandleClientNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import { cn } from '~/utils/classnames';
import { randomNumber } from '~/utils/utils';



interface IProps {
  dialogId: string
}

interface IMenuSearchSelectTypeButtonProps {
  type: MenuSearchType

  setType?: (val: MenuSearchType) => void
  className?: string
}

interface IMenuSearchResultProps {
  item: MenuSearchResultType
  type: MenuSearchType
  usePatcherRouting: boolean
}

type MenuSearchType = 'user' | 'dubber' | 'anime'
type MenuSearchResultType = TTeamSearchResult | TAnimeSearchResult | TUserSearchResult | null



const SearchStartTypingDictionary: Record<MenuSearchType, string[]> = {
  anime: ['JuJutsu kaisen', 'атака титанів', 'Цей прекрасний світ, благословенний Богом!: Багряна легенда'],
  dubber: ['Студія Качур', 'amanogawa'],
  user: ['@nekomiclub']
};



const NavMenuSearch: NextPage<IProps> = ({ dialogId }) => {
  const pathname = usePathname();
  const selectSearchTypeMenuId = useId();

  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState<MenuSearchResultType[]>([]);
  const [searchType, setSearchType] = useState<MenuSearchType>('anime');
  const [startTypingText, setStartTypingText] = useState('');
  const [showStartTyping, setShowStartTyping] = useState(true);
  const [showNotFound, setShowNotFound] = useState(false);
  const [usePatcherRouting, setUserPatcherRouting] = useState(false);
  const [isSelectSearchTypeOpen, setIsSelectSearchTypeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const [searchTextDebounce] = useDebounce(searchText, 700);

  const contentRef = useRef<HTMLDivElement>(null);
  const searchingQueryRef = useRef('');



  async function search(e?: React.FormEvent) {
    if (e) e.preventDefault();

    // Reset states
    if (searchText.length === 0) {
      setShowStartTyping(true);
      setShowNotFound(false);
      setSearchResults([]);

      return;
    }

    // Skip if already searching this query
    if (searchingQueryRef.current === searchText) return;
    searchingQueryRef.current = searchText;

    let errored = false;

    if (searchType === 'anime') {
      const searchRes = await API.Anime.getSearch({
        searchParams: {
          q: searchText
        }
      });

      if (!searchRes.success) {
        errored = true;
        HandleClientNormalizedError(searchRes.error);
      } else setSearchResults(searchRes.response.data.results);
    }

    if (searchType === 'user') {
      const searchRes = await API.User.getSearch({
        searchParams: {
          q: searchText
        }
      });

      if (!searchRes.success) {
        errored = true;
        HandleClientNormalizedError(searchRes.error);
      } else setSearchResults(searchRes.response.data.results);
    }

    if (searchType === 'dubber') {
      const searchRes = await API.Team.getSearch({
        searchParams: {
          q: searchText
        }
      });

      if (!searchRes.success) {
        errored = true;
        HandleClientNormalizedError(searchRes.error);
      } else setSearchResults(searchRes.response.data.results);
    }

    if (errored) {
      setShowStartTyping(true);
      setShowNotFound(false);
      setSearchResults([]);

      return;
    }

    setShowStartTyping(false);
  }



  // Handle startTypingText
  useEffect(() => {
    const dictionary = SearchStartTypingDictionary[searchType];

    setStartTypingText(dictionary[randomNumber(0, dictionary.length - 1)]);
  }, [searchType]);

  // Handle typing search effect
  useEffect(() => {
    setShowStartTyping(false);
    setShowNotFound(false);

    if (searchText.length === 0) {
      setShowStartTyping(true);
      setSearchResults([]);

      return;
    }

    setSearchResults([null, null, null, null, null]);
  }, [searchText]);

  // Handle patcher routing & hide dialog on route change
  useEffect(() => {
    setUserPatcherRouting(pathname.includes('/patcher'));
    setIsSearchOpen(false);
  }, [pathname]);

  // Handle search via debounce query
  useEffect(() => {
    setShowStartTyping(false);
    setShowNotFound(false);

    if (searchTextDebounce.length === 0) {
      setShowStartTyping(true);
      setSearchResults([]);

      return;
    }

    search();
  }, [searchTextDebounce]);

  // Handle search results
  useEffect(() => {
    if (searchResults.length === 0 && !showStartTyping) return setShowNotFound(true);

    contentRef.current?.scrollTo({ top: 0, behavior: 'instant' });
  }, [searchResults]);

  // Close select search type on select 
  useEffect(() => {
    setIsSelectSearchTypeOpen(false);
    setSearchResults([]);
  }, [searchType]);



  return <PopupWindow className="w-full max-w-[800px] px-[24px] py-[32px] max-md:px-[8px]" layerClassName="bg-dark/[.3] backdrop-blur-[4px] flex justify-center items-center max-md:items-start" id={dialogId} isOpen={isSearchOpen} setIsOpen={setIsSearchOpen}>
    <div className="w-full bg-dark-primary flex flex-col gap-[16px] pb-[12px] rounded-[4px]">
      {/* Search box */}
      <div className="w-full flex justify-between items-center border-b border-b-dark-light">
        <Menu id={selectSearchTypeMenuId} gap={0} settings={{ align: 'start', animation: 'slide' }} state={isSelectSearchTypeOpen} stateSetter={setIsSelectSearchTypeOpen}>
          <MenuTrigger className="flex gap-[12px] items-center p-[12px] border-r border-dark-medium" anchor>
            <MenuSearchSelectTypeButton type={searchType} />

            <MaterialSymbol className="text-grey-new" icon="expand_all" size={12} />
          </MenuTrigger>

          <MenuWrapper className="bg-dark-primary border rounded-t-none border-dark-light flex flex-col rounded-[4px] overflow-hidden min-w-fit w-full">
            <MenuSearchSelectTypeButton className="cui-nav-search_selectType" type={'anime'} setType={setSearchType} />
            <MenuSearchSelectTypeButton className="cui-nav-search_selectType" type={'dubber'} setType={setSearchType} />
            <MenuSearchSelectTypeButton className="cui-nav-search_selectType" type={'user'} setType={setSearchType} />
          </MenuWrapper>
        </Menu>

        <form onSubmit={search} className="w-full flex justify-between items-center">
          <input className="p-[12px] bg-transparent w-full  text-white placeholder: placeholder:text-grey-new" type="text" value={searchText} onChange={e => setSearchText(e.target.value)} placeholder="Що шукаємо?" autoComplete="off" id="search-searchBar" />

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

            <p className="text-grey-new ">Наприклад: {startTypingText}</p>
          </div>}

          {/* Not found */}
          {showNotFound && <div className="flex items-center gap-[16px] px-[12px]">
            <MaterialSymbol className="text-grey-new" icon="live_help" size={16} />

            <p className="text-grey-new ">Здається, в нас такого нема...</p>
          </div>}

          {/* Patcher hint */}
          {usePatcherRouting && searchType === 'anime' && !showNotFound && <div className="flex items-center gap-[16px] px-[12px]">
            <MaterialSymbol className="text-grey-new" icon="edit" size={16} />

            <p className="text-grey-new ">Нове аніме буде відкрито в редакторі</p>
          </div>}
        </div>

        {searchResults.map((result, i) => {
          return <MenuSearchResult item={result} type={searchType} usePatcherRouting={usePatcherRouting} key={`menusearch-result--${i}`} />;
        })}
      </div>
    </div>
  </PopupWindow>;
};



const MenuSearchSelectTypeButton: NextPage<IMenuSearchSelectTypeButtonProps> = ({ type, className, setType }) => {
  return <div role="button" className={cn(`flex items-center gap-[8px]`, className)} onClick={() => setType && setType(type)}>
    <MaterialSymbol className="text-white" icon={
      type === 'anime' ? 'slideshow'
        : type === 'user' ? 'person'
          : type === 'dubber' ? 'mic'
            : 'question_mark'
    } size={16} />

    <p className="text-white ">
      {type === 'anime' && 'Аніме'}
      {type === 'user' && 'Користувач'}
      {type === 'dubber' && 'Озвучення'}
    </p>
  </div>;
};



const MenuSearchResult: NextPage<IMenuSearchResultProps> = ({ item, type, usePatcherRouting }) => {
  const [firstLineWidth] = useState(randomNumber(80, 320));
  const [secondLineWidth] = useState(randomNumber(40, 250));

  const [animeResult, setAnimeResult] = useState<AnimeSearchResultType | null>(null);
  const [userResult, setUserResult] = useState<IUser | null>(null);
  const [dubberResult, setDubberResult] = useState<DubberSearchResultType | null>(null);



  useEffect(() => {
    setAnimeResult(type === 'anime' ? item as AnimeSearchResultType : null);
    setUserResult(type === 'user' ? item as IUser : null);
    setDubberResult(type === 'dubber' ? item as DubberSearchResultType : null);
  }, [item]);



  return item === null ? <>
    {/* === Result placeholder */}

    {/* Anime type */}
    {type === 'anime' && <div className="cui-nav-search-result">
      <Skeleton width={'100%'} height={'100%'} containerClassName="w-[120px] h-[160px] relative flex-shrink-0" className="absolute top-0" />

      <div className="cui-nav-search-result_content">
        <Skeleton width={firstLineWidth} height={27} className="max-w-full" />
        <Skeleton width={secondLineWidth} height={20} className="max-w-full" />
        <Skeleton width={260} height={22} className="max-w-full" />
      </div>
    </div>}

    {/* User type */}
    {(type === 'user' || type === 'dubber') && <div className="cui-nav-search-result">
      <Skeleton width={'100%'} height={'100%'} containerClassName="w-[128px] h-[128px] relative flex-shrink-0" className="absolute top-0" />

      <div className="cui-nav-search-result_content">
        <Skeleton width={firstLineWidth} height={27} />
        <Skeleton width={secondLineWidth} height={20} />
      </div>
    </div>}
  </> : <>
    {/* === Result ready */}

    {/* Anime type */}
    {type === 'anime' && animeResult && <Link href={routes.anime.path({ query: animeResult.slug })} className="cui-nav-search-result">
      <StyledImage src={animeResult.poster} width="120px" height="160px" />

      <div className="cui-nav-search-result_content">
        {animeResult.title_ua && <>
          <h4 className="text-white text-[20px]  font-bold line-clamp-2" title={animeResult.title_ua}>{animeResult.title_ua}</h4>
          {animeResult.title_en && <h5 className="text-grey-new  line-clamp-2" title={animeResult.title_en}>{animeResult.title_en}</h5>}
        </>}

        {!animeResult.title_ua && <>
          <h4 className="text-white text-[20px]  font-bold line-clamp-2" title={animeResult.title_en ?? 'Untitled'}>{animeResult.title_en ?? 'Untitled'}</h4>
        </>}

        <div className="flex items-center gap-[8px] flex-wrap">
          <div className="flex items-center gap-[8px]">
            <MaterialSymbol className="text-primary" icon="star_half" size={16} />
            <p className="text-primary  font-bold whitespace-nowrap">{animeResult.score.toFixed(2) ?? '—'}</p>
          </div>
          <span className="text-grey-new ">•</span>

          <div className="flex items-center gap-[8px]">
            <MaterialSymbol className="text-white" icon="acute" size={16} />
            <p className="text-white  whitespace-nowrap">{`${animeResult.episodes_released ?? '—'} / ${animeResult.episodes_total ?? '—'}`}</p>
          </div>
          <span className="text-grey-new ">•</span>

          <p className="text-white ">{animeResult.type?.name}</p>
          <span className="text-grey-new ">•</span>

          <p className="text-white  whitespace-nowrap">{animeResult.year}</p>
        </div>
      </div>
    </Link>}

    {/* User type */}
    {(type === 'user' && userResult) && <Link href={routes.user.path({ username: userResult.username })} className="cui-nav-search-result">
      <StyledImage src={userResult.avatar} width="128px" height="128px" />

      <div className="cui-nav-search-result_content">
        <h4 className="text-white text-[20px]  font-bold line-clamp-1" title={userResult.username}>@{userResult.username}</h4>
      </div>
    </Link>}

    {/* Dubber type */}
    {(type === 'dubber' && dubberResult) && <Link href={routes.team.path({ slug: dubberResult.slug })} className="cui-nav-search-result">
      <StyledImage src={dubberResult.avatar} width="128px" height="128px" />

      <div className="cui-nav-search-result_content">
        <h4 className="text-white text-[20px]  font-bold line-clamp-1" title={dubberResult.name}>{dubberResult.name}</h4>
        {dubberResult.about && <p className="text-grey-new  line-clamp-2" title={dubberResult.about}>{dubberResult.about}</p>}
      </div>
    </Link>}
  </>;
};

export default NavMenuSearch;