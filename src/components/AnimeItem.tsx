'use client'

import { useEffect, useRef } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { Routes } from '~/routes';

import { cn } from './Components';
import { secondsToReadable } from './KekwPlayer/KekwPlayer';
import StyledImage from './StyledImage';



interface Props {
  hydrated: HydratedAnime

  className?: string
}



const AnimeItem: NextPage<Props> = ({ hydrated, className }) => {
  const { anime, genres, media, rate, season } = hydrated;

  const user = useAppSelector(state => state.user);

  const cardRef = useRef<HTMLAnchorElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null)

  const topOffset = 4;
  const bottomOffset = 8;
  const watchProgress = user.watchProgress.find(el => el.titleID === anime.uuid);



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

    card.addEventListener('contextmenu', e => e.preventDefault());

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



  return (
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
  );
}

export default AnimeItem