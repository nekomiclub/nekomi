'use client'

import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol, SymbolCodepoints } from 'react-material-symbols';

import { useAppDispatch, useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { TUserLibType } from '~/interfaces/IUser';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import userSlice, { IUserState } from '~/store/reducers/userSlice';
import parseUserLibUI from '~/utils/parse-user-lib-ui';

import { cn } from './Components';
import { HandleClientError } from './Errors';
import { secondsToReadable } from './KekwPlayer/KekwPlayer';
import StyledImage from './StyledImage';
import { NotifyWarn } from './UI/NotifyToast';
import UICheckbox from './UI/UICheckbox';



interface AnimeItemProps {
  hydrated: HydratedAnime

  className?: string
  libControls?: boolean
}

interface AnimeItemEditMenuProps {
  hydratedAnime: HydratedAnime
}

interface AnimeItemEditMenuLibProps {
  hydratedAnime: HydratedAnime
  type: TUserLibType
}



const AnimeItem: NextPage<AnimeItemProps> = ({ hydrated, className, libControls }) => {
  const { anime, genres, media, rate, season } = hydrated;

  const editLibsMenuId = useId().replaceAll(':', '');
  const currentUser = useAppSelector(state => state.user);

  const [isEditLibsMenuOpen, setIsEditLibsMenuOpen] = useState(false)

  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null)

  const topOffset = 4;
  const bottomOffset = 8;
  const watchProgress = currentUser.watchProgress.find(el => el.titleID === anime.uuid);



  useEffect(() => {
    const card = cardRef.current;
    const bottom = bottomRef.current;

    if (!card || !bottom) return;

    let inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

    window.addEventListener('resize', () => {
      inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

      bottom.style.maxHeight = `${inactiveHeight}px`;
    })

    bottom.style.maxHeight = `${inactiveHeight}px`;
    bottom.style.paddingTop = `${topOffset}px`;
    bottom.style.paddingBottom = `${bottomOffset}px`;

    card.addEventListener('contextmenu', e => {
      e.preventDefault()

      setIsEditLibsMenuOpen(true);
    });

    // Hide
    card.addEventListener('mouseleave', hide)
    card.addEventListener('touchend', hide)
    card.addEventListener('focusout', hide)

    // Show
    card.addEventListener('touchstart', show)
    card.addEventListener('touchmove', show)
    card.addEventListener('mouseenter', show)
    card.addEventListener('focusin', show)



    function hide() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '2'
      bottom.style.maxHeight = `${inactiveHeight}px`;
    }

    function show() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '6';
      bottom.style.maxHeight = `${bottom.scrollHeight + topOffset + bottomOffset}px`;
    }
  }, [])





  return <div className="relative">
    {currentUser.id && libControls && <div className="!absolute p-[4px] w-full touch-none pointer-events-none z-[3]">
      <Menu id={editLibsMenuId} className="w-full flex justify-end" settings={{ align: 'stretch' }} gap={4} state={isEditLibsMenuOpen} stateSetter={setIsEditLibsMenuOpen}>
        <MenuTrigger className="w-[32px] h-[20px] flex justify-center items-center bg-dark-medium border border-dark-light rounded-[2px] opacity-[.7] duration-100 hover:opacity-100 touch-auto pointer-events-auto" anchor>
          <MaterialSymbol className="text-white" icon="more_horiz" size={16} />
        </MenuTrigger>

        <AnimeItemEditMenu hydratedAnime={hydrated} />
      </Menu>
    </div>}

    <Link href={`${Routes.watch_title.path}/${anime.slug}`} className={cn(`flex flex-col justify-end relative min-w-[200px] w-full h-auto min-h-[240px] aspect-[.7] rounded-[4px] overflow-hidden outline-none max-md:min-w-[170px]`, className)} ref={cardRef}>
      <StyledImage src={anime.poster} className="!absolute top-0 left-0" width="100%" height="100%" />

      <div className="flex flex-col">
        <div className={`px-[8px] backdrop-blur-[40px] relative z-[2] duration-200 max-h-0 flex flex-col gap-[12px] bg-dark/[.8]`} ref={bottomRef}>
          <div className="flex flex-col gap-[4px]">
            <p className="titleCardNew-heading text-white text-[14px] font-bold text-ellipsis line-clamp-[2] font-manrope max-md:text-[14px]" title={anime.names.ukr} ref={titleRef}>{anime.names.ukr}</p>

            <p className="text-lightGrey text-[12px] whitespace-break-spaces font-manrope">
              {genres.length ? genres.slice(0, 3).map((genre, i) => {
                let immutableI = i;

                return `${genre.name}${++immutableI < genres?.slice(0, 3).length! ? ' • ' : ''}`
              }) : 'Жанри відсутні'}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="acute" size={16} color="#fff" />
              <p className="text-white text-[12px] font-space-grotesk">{anime.episodesCount ?? '—'}</p>
            </div>

            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="star_half" size={16} color="#FF464E" />
              <p className="text-gradientPrimaryFallback text-[12px] font-bold font-space-grotesk">{anime.score.mal ?? anime.score.imdb ?? '—'}</p>
            </div>
          </div>
        </div>

        {watchProgress && watchProgress.progress > 3 && <div className="gradient--primary z-[2] px-[8px] py-[4px] flex items-center justify-between gap-[4px]">
          <p className="text-[12px] text-white font-manrope font-bold">Продовжити: {watchProgress.episodeOrder} еп, {secondsToReadable(watchProgress.progress).pretty}</p>

          <MaterialSymbol icon="resume" size={16} color="#fff" />
        </div>}
      </div>
    </Link>
  </div>
}

export const AnimeItemEditMenu: NextPage<AnimeItemEditMenuProps> = ({ hydratedAnime }) => {
  return <MenuWrapper className="w-full min-w-fit bg-dark-primary rounded-[4px] flex flex-col border border-dark-light">
    <AnimeItemEditMenuLib type="favorite" hydratedAnime={hydratedAnime} />
    <AnimeItemEditMenuLib type="watching" hydratedAnime={hydratedAnime} />
    <AnimeItemEditMenuLib type="watched" hydratedAnime={hydratedAnime} />
    <AnimeItemEditMenuLib type="plans" hydratedAnime={hydratedAnime} />
    <AnimeItemEditMenuLib type="delayed" hydratedAnime={hydratedAnime} />
  </MenuWrapper>
}



const AnimeItemEditMenuLib: NextPage<AnimeItemEditMenuLibProps> = ({ type, hydratedAnime }) => {
  const currentUser = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const [isUserAuth] = useState(Boolean(currentUser.id));
  const [title, setTitle] = useState('—')
  const [icon, setIcon] = useState<SymbolCodepoints>('question_mark')
  const [isChecked, setIsChecked] = useState(false)



  useMemo(() => {
    parseUserLibUI({ type, setTitle, setIcon })

    if (currentUser.id) {
      const lib = currentUser.libs.find(el => el.type === type)!;
      setIsChecked(lib.titles.includes(hydratedAnime.anime.uuid))
    }
  }, [])



  async function toggleLib() {
    try {
      if (!isUserAuth) return NotifyWarn({ title: 'Потрібна авторизація!', message: 'Нажаль, ви не можете додати аніме в теку, не маючи акаунту :(' })

      setIsChecked(prev => !prev);

      await API.editLibItem({ titleId: hydratedAnime.anime.uuid, folderId: currentUser.libs.find(el => el.type === type)!.id })
      const state = JSON.parse(JSON.stringify(currentUser)) as IUserState;

      const lib = state.libs.find(el => el.type === type)!

      if (lib.titles.includes(hydratedAnime.anime.uuid)) {
        // remove
        lib.titles = lib.titles.filter(el => el !== hydratedAnime.anime.uuid);
      } else {
        // add
        lib.titles.push(hydratedAnime.anime.uuid)
      }

      dispatch(userSlice.actions.reducer(state))
    } catch (e) {
      setIsChecked(prev => !prev);

      return HandleClientError(e)
    }
  }



  return <button className="flex items-center gap-[16px] p-[12px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={toggleLib}>
    <UICheckbox isChecked={isChecked} setIsChecked={setIsChecked} disableDefaultToggle />

    <MaterialSymbol icon={icon} size={24} className="text-white" />

    <p className="text-white font-manrope">{title}</p>
  </button>
}



export default AnimeItem