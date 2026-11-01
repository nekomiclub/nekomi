'use client';

import React, { FC, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';
import Link from 'next/link';

import routes from '~/routes';
import { useAppDispatch, useAppSelector } from '~/shared/hooks/redux';
import API from '~/shared/lib/api';
import { TAnimeMinified, USER_LIB_TYPE_ENUM } from '~/shared/lib/api/api-types';
import userSlice, { IUserState } from '~/shared/store/reducers/userSlice';
import { HandleClientNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import { cn } from '~/utils/classnames';
import parseUserLibUI from '~/utils/parse-user-lib-ui';

import { NotifyWarn } from './nofity/NotifyStatus';
import StyledCheckbox from './styled/StyledCheckbox';
import StyledImage from './styled/StyledImage';



interface IProps {
  anime: TAnimeMinified

  className?: string
  libControls?: boolean
}

interface IAnimeItemEditMenuProps {
  animeId: string
}

interface IAnimeItemEditMenuLibProps {
  animeId: string
  type: USER_LIB_TYPE_ENUM
}



const AnimeItem: FC<IProps> = ({ anime, className, libControls }) => {
  const editLibsMenuId = useId();
  const currentUser = useAppSelector(state => state.user);

  const [isEditLibsMenuOpen, setIsEditLibsMenuOpen] = useState(false);

  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  const topOffset = 4;
  const bottomOffset = 8;



  useEffect(() => {
    const card = cardRef.current;
    const bottom = bottomRef.current;

    if (!card || !bottom) return;

    let inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

    window.addEventListener('resize', () => {
      inactiveHeight = (bottom.querySelector('.titleCardNew-heading') as HTMLParagraphElement).offsetHeight + topOffset + bottomOffset;

      bottom.style.maxHeight = `${inactiveHeight}px`;
    });

    bottom.style.maxHeight = `${inactiveHeight}px`;
    bottom.style.paddingTop = `${topOffset}px`;
    bottom.style.paddingBottom = `${bottomOffset}px`;

    card.addEventListener('contextmenu', e => {
      e.preventDefault();

      setIsEditLibsMenuOpen(true);
    });

    // Hide
    card.addEventListener('mouseleave', hide);
    card.addEventListener('touchend', hide);
    card.addEventListener('focusout', hide);

    // Show
    card.addEventListener('touchstart', show);
    card.addEventListener('touchmove', show);
    card.addEventListener('mouseenter', show);
    card.addEventListener('focusin', show);



    function hide() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '2';
      bottom.style.maxHeight = `${inactiveHeight}px`;
    }

    function show() {
      const bottom = bottomRef.current;
      const title = titleRef.current;

      if (!bottom || !title) return;

      title.style.webkitLineClamp = '6';
      bottom.style.maxHeight = `${bottom.scrollHeight + topOffset + bottomOffset}px`;
    }
  }, []);





  return <div className="relative">
    {currentUser.id && libControls && <div className="!absolute p-[4px] w-full touch-none pointer-events-none z-[3]">
      <Menu id={editLibsMenuId} className="w-full flex justify-end" settings={{ align: 'stretch' }} gap={4} state={isEditLibsMenuOpen} stateSetter={setIsEditLibsMenuOpen}>
        <MenuTrigger className="w-[32px] h-[20px] flex justify-center items-center bg-dark-medium border border-dark-light rounded-[2px] opacity-[.7] duration-100 hover:opacity-100 touch-auto pointer-events-auto" anchor>
          <MaterialSymbol className="text-white" icon="more_horiz" size={16} />
        </MenuTrigger>

        <AnimeItemEditMenu animeId={anime.id} />
      </Menu>
    </div>}

    <Link href={routes.anime.path({ query: anime.slug })} className={cn(`flex flex-col justify-end relative min-w-[200px] w-full h-auto min-h-[240px] aspect-[.7] rounded-[4px] overflow-hidden outline-none max-md:min-w-[170px]`, className)} ref={cardRef} prefetch={false}>
      <StyledImage src={anime.poster} className="!absolute top-0 left-0" width="100%" height="100%" />

      <div className="flex flex-col">
        <div className={`px-[8px] backdrop-blur-[40px] relative z-[2] duration-200 max-h-0 flex flex-col gap-[12px] bg-dark-primary/[.8]`} ref={bottomRef}>
          <div className="flex flex-col gap-[4px]">
            <p className="titleCardNew-heading text-white text-[14px] font-bold text-ellipsis line-clamp-[2]  max-md:text-[14px]" title={anime.title} ref={titleRef}>{anime.title}</p>

            <p className="text-[var(--color-text-secondary)] text-[12px] whitespace-break-spaces ">
              {anime.genres.length ? anime.genres.slice(0, 3).map((genre, i) => {
                let immutableI = i;

                return `${genre.name}${immutableI + 1 < anime.genres.slice(0, 3).length ? ' • ' : ''}`;
              }) : 'Жанри відсутні'}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="acute" size={16} color="#fff" />
              <p className="text-white text-[12px] ">{anime.episodes_total ?? '—'}</p>
            </div>

            <div className="flex items-center gap-[4px]">
              <MaterialSymbol icon="star_half" size={16} color="#FF464E" />
              <p className="text-primary text-[12px] font-bold ">{anime.score ?? '—'}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>;
};

export default AnimeItem;



export const AnimeItemEditMenu: FC<IAnimeItemEditMenuProps> = ({ animeId }) => {
  return <MenuWrapper className="w-full min-w-fit bg-dark-primary rounded-[4px] flex flex-col border border-dark-light">
    <AnimeItemEditMenuLib type={USER_LIB_TYPE_ENUM.favorite} animeId={animeId} />
    <AnimeItemEditMenuLib type={USER_LIB_TYPE_ENUM.watching} animeId={animeId} />
    <AnimeItemEditMenuLib type={USER_LIB_TYPE_ENUM.watched} animeId={animeId} />
    <AnimeItemEditMenuLib type={USER_LIB_TYPE_ENUM.plans} animeId={animeId} />
    <AnimeItemEditMenuLib type={USER_LIB_TYPE_ENUM.delayed} animeId={animeId} />
  </MenuWrapper>;
};



const AnimeItemEditMenuLib: FC<IAnimeItemEditMenuLibProps> = ({ type, animeId }) => {
  const currentUser = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const [isUserAuth] = useState(Boolean(currentUser.id));
  const [title, setTitle] = useState('—');
  const [icon, setIcon] = useState<SymbolCodepoints>('question_mark');
  const [isChecked, setIsChecked] = useState(false);



  useMemo(() => {
    parseUserLibUI({ type, setTitle, setIcon });

    if (currentUser.id) {
      const lib = currentUser.libs.find(el => el.type === type)!;
      setIsChecked(lib.anime_ids.includes(animeId));
    }
  }, []);



  async function toggleLib() {
    if (!isUserAuth) return NotifyWarn({ title: 'Потрібна авторизація!', message: 'Нажаль, ви не можете додати аніме в теку, не маючи акаунту :(' });

    setIsChecked(prev => !prev);

    const state = JSON.parse(JSON.stringify(currentUser)) as IUserState;
    const lib = state.libs.find(el => el.type === type)!;

    let errored = false;

    if (lib.anime_ids.includes(animeId)) {
      // remove
      const patchRes = await API.User.patchUserById({
        params: {
          id: currentUser.id
        },
        body: {
          remove_lib_anime: {
            lib_id: lib.id,
            anime_id: animeId
          }
        }
      });

      if (!patchRes.success) {
        errored = true;

        HandleClientNormalizedError(patchRes.error);
      } else lib.anime_ids = lib.anime_ids.filter(el => el !== animeId);
    } else {
      // add
      const patchRes = await API.User.patchUserById({
        params: {
          id: currentUser.id
        },
        body: {
          add_lib_anime: {
            lib_id: lib.id,
            anime_id: animeId
          }
        }
      });

      if (!patchRes.success) {
        errored = true;

        HandleClientNormalizedError(patchRes.error);
      } else lib.anime_ids.push(animeId);
    }

    if (errored) {
      setIsChecked(prev => !prev);

      return;
    }

    dispatch(userSlice.actions.reducer(state));
  }



  return <button className="flex items-center gap-[16px] p-[12px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={toggleLib}>
    <StyledCheckbox isChecked={isChecked} />

    <MaterialSymbol icon={icon} size={24} className="text-white" />

    <p className="text-white ">{title}</p>
  </button>;
};