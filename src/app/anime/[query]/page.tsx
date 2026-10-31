import '~/styles/pages/anime-page.scss';

import { Metadata } from 'next';
import { cache, Suspense } from 'react';
import { headers } from 'next/headers';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';

import AnimeItem from '~/components/AnimeItem';
import Carousel from '~/components/Carousel';
import StyledImage from '~/components/styled/StyledImage';
import conf from '~/conf';
import { IAnimePageParams, IAnimePageSearchParams } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import routes from '~/routes';
import API from '~/shared/lib/api';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/utils/site-metadata';
import { isEmpty, isUserAgentMobile } from '~/utils/utils';

import AnimePlayer from './_components/AnimePlayer';
import { WatchActions } from './_components/WatchActions';
import WatchCheckMobile from './_components/WatchCheckMobile';
import WatchDetail from './_components/WatchDetail';
import WatchEditLibs from './_components/WatchEditLibs';
import { WatchRating, WatchSectionLabel } from './_components/WatchUI';




const getCachedAnime = cache(async (query: string) => {
  return await API.Anime.getAnime({
    params: {
      qr: query
    },
    searchParams: {
      is_extended: true,
      get_episodes: true,
    }
  });
});



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(
  props: IRSCProps<IAnimePageParams>,
): Promise<Metadata> {
  const params = await props.params;
  const { query } = params;

  const animeRes = await getCachedAnime(query);
  if (!animeRes.success) {
    if (animeRes.error.status === 404) return siteMetadata({ title: 'Аніме не знайдено', robots: ['nofollow', 'noindex'] });

    return siteMetadata({ title: 'Щось пішло не так ...', robots: ['nofollow', 'noindex'] });
  }

  const anime = animeRes.response.data.anime;

  const title = `${anime.title_ua ?? anime.title_en} (${anime.year})`;
  const description = anime.synopsis_ua ?? anime.synopsis_en ?? 'Опис відсутній';

  return siteMetadata({
    title,
    description,
    keywords: [anime.title_ua, anime.title_en, anime.title_ja, ...anime.title_synonims].filter(el => el !== null && el?.length) as string[],
    openGraph: {
      title,
      description,
      type: 'video.tv_show',
      images: anime.poster,
      url: routes.anime.path({ query }),
      locale: 'uk_UA',
      siteName: conf.domain.split('.')[0],
    }
  });
}



export default async function WatchPageRSC(props: IRSCProps<IAnimePageParams, IAnimePageSearchParams>) {
  const { query } = await props.params;
  const { mobile } = await props.searchParams;

  const userAgent = (await headers()).get('user-agent') || '';
  const isMobile = mobile ?? isUserAgentMobile(userAgent) ?? true;

  const animeRes = await getCachedAnime(query);
  if (!animeRes.success) return HandleServerNormalizedError(animeRes.error);

  const anime = {
    ...animeRes.response.data.anime,
    ...animeRes.response.data.anime_episodes!,
    ...animeRes.response.data.anime_extended!,
  };

  const titleH1 = anime.title_ua ?? anime.title_en ?? `Untitled`;
  const titleH2 = titleH1 ? anime.title_en : null;
  const hasEpisodes = [...anime.player.dubbed, ...anime.player.subbed].some(el => !isEmpty(el.vods));
  const synopsis = anime.synopsis_ua ?? anime.synopsis_en;
  const poster = anime.posters.find(el => el.is_hero) ?? anime.posters[0];




  return isMobile ? <>
    {/* MOBILE */}
    <main>
      <div className="w-full h-[500px] pt-[32px] flex justify-center relative">
        {/* Background */}
        <div className="watch-mobile-poster" style={{ backgroundImage: `url(${poster.medium})` }}></div>

        <div className="flex flex-col items-center gap-[4px] z-[10] w-fit px-[24px]">
          <StyledImage src={poster.medium} width="270px" height="370px" className="rounded-[4px] overflow-hidden" loading="eager" />

          <WatchEditLibs anime={anime} />

          <div className="flex items-center justify-between w-full">
            <WatchRating anime={anime} />
          </div>
        </div>
      </div>

      <section className="wrapper gap-[16px]">
        <div className="flex flex-col gap-[4px]">
          <h1 className="text-white  font-bold text-[20px]">{titleH1}</h1>
          {titleH2 && <h2 className="text-grey-new ">{titleH2}</h2>}
        </div>

        {/* {nextBroadcast && <WatchNextEpisode timestamp={nextBroadcast} />} */}

        <WatchActions anime={anime} hasEpisodes={hasEpisodes} />

        <div className="watch-section_divider"></div>

        {/* Meta */}
        <div className="flex flex-col gap-[6px]">
          <WatchDetail name="епізоди" value={`${anime.episodes_released ?? '—'} / ${anime.episodes_total ?? '—'}`} />
          {anime.status && <WatchDetail name="Cтатус:" status={anime.status} />}
          {anime.rating && <WatchDetail name="Рейтинг:" rate={anime.rating} />}
          {anime.season && <WatchDetail name="Cезон:" season={anime.season} year={anime.year} />}
          {anime.type && <WatchDetail name="Тип:" type={anime.type} />}

          <WatchDetail name="Жанри:" genres={anime.genres} />
          <WatchDetail name="Студії:" studios={anime.studios} />
        </div>

        {/* Description */}
        {synopsis && <p className="text-white text-[14px] ">{synopsis}</p>}
        {!synopsis && <p className="text-grey-new text-[14px] ">Опис відсутній</p>}

        {/* Divider */}
        <div className="watch-section_divider"></div>

        {/* Screenshots */}
        {anime.screenshots && anime.screenshots.length > 0 && <div className="wrapper gap-[16px]">
          <WatchSectionLabel icon="gallery_thumbnail" label={`Кадри`} />

          <Carousel>
            {anime.screenshots.map((screenshot, i) => {
              return <Link href={screenshot.original} target="_blank" title="Відкрити велике зображення" key={`screenshot-${i}`}>
                <StyledImage src={screenshot.preview} width="192px" height="108px" borderRadius={2} />
              </Link>;
            })}
          </Carousel>
        </div>}

        {/* Related */}
        {anime.relations && anime.relations?.length > 0 && <div className="wrapper gap-[16px]">
          <WatchSectionLabel icon="link" label={`Пов’язане аніме`} />

          <Carousel>
            {anime.relations.map((hydrated, i) => {
              return <AnimeItem anime={hydrated} className="!w-[170px]" key={`relation-${anime.id}--${i}`} />;
            })}
          </Carousel>
        </div>}

        {/* Player */}
        {hasEpisodes && <Suspense fallback={<Skeleton width={'100%'} height={'60vh'} />}>
          <AnimePlayer player={anime.player} player_teams={anime.player_teams} episodes={anime.episodes_meta ?? []} episodes_total={anime.episodes_total} anime_id={anime.id} />
        </Suspense>}
      </section>
    </main>
  </> : <>
    {/* DESKTOP */}
    <WatchCheckMobile />

    <div style={{ height: `calc(32px + var(--header-height))` }}></div>

    <main className="flex flex-col gap-[40px]">
      {/* Meta */}
      <section className="wrapper !flex-row gap-[32px] max-lg:!flex-col max-lg:items-center">
        {/* Poster */}
        <div className="flex flex-col gap-[8px] w-[500px] shrink-0 max-xl:w-[400px]">
          <div className="watch-poster w-full h-[700px] bg-dark-medium rounded-[4px] overflow-hidden max-xl:h-[600px]">
            <Link href={poster.original} target="_blank" title="Відкрити велике зображення">
              <StyledImage src={poster.medium} width="100%" height="100%" loading="eager" />
            </Link>
          </div>

          <WatchEditLibs anime={anime} />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-[32px] w-full">
          {/* Heading */}
          <div className="flex items-center justify-between w-full gap-[24px]">
            <div className="flex flex-col gap-[4px]">
              <h1 className="text-white text-[32px]  font-bold" title={titleH1}>{titleH1}</h1>
              {titleH2 && <h2 className="text-grey-new text-[24px] " title={titleH2}>{titleH2}</h2>}
            </div>

            <div className="flex flex-col items-center gap-[4px]">
              <WatchRating anime={anime} />
            </div>
          </div>

          {/* Actions */}
          <WatchActions anime={anime} hasEpisodes={hasEpisodes} />

          {/* Divider */}
          <div className="watch-section_divider"></div>

          {/* Details */}
          <div className="flex flex-col gap-[8px]">
            <div className="flex flex-wrap gap-[8px] max-2xl:grid-cols-3">
              <WatchDetail name="епізоди" value={`${anime.episodes_released ?? '—'} / ${anime.episodes_total ?? '—'}`} />
              {anime.status && <WatchDetail name="статус" status={anime.status} />}
              {anime.rating && <WatchDetail name="рейтинг" rate={anime.rating} />}
              {anime.season && <WatchDetail name="сезон" season={anime.season} year={anime.year} />}
              {anime.type && <WatchDetail name="тип" type={anime.type} />}
            </div>

            <div className="flex flex-wrap gap-[8px] max-lg:grid-cols-1">
              <WatchDetail name="жанри" genres={anime.genres} />
              <WatchDetail name="студії" studios={anime.studios} />
            </div>

            {/* <div className="flex gap-[8px] max-2xl:flex-col">
                {nextBroadcast && <WatchNextEpisode timestamp={nextBroadcast} />}
              </div> */}
          </div>

          {/* Description */}
          {synopsis && <p className="text-white ">{synopsis}</p>}
          {!synopsis && <p className="text-grey-new ">Опис відсутній</p>}
        </div>
      </section>

      {/* Screenshots */}
      {anime.screenshots && anime.screenshots.length > 0 && <div className="wrapper gap-[16px]">
        <WatchSectionLabel icon="gallery_thumbnail" label={`Кадри`} />

        <Carousel>
          {anime.screenshots.map((screenshot, i) => {
            return <Link href={screenshot.original} target="_blank" title="Відкрити велике зображення" key={`screenshot-${i}`}>
              <StyledImage src={screenshot.preview} width="384px" height="216px" borderRadius={2} />
            </Link>;
          })}
        </Carousel>
      </div>}

      {/* Related */}
      {anime.relations && anime.relations?.length > 0 && <div className="wrapper gap-[16px]">
        <WatchSectionLabel icon="link" label={`Пов’язане аніме`} />

        <Carousel>
          {anime.relations.map((anime, i) => {
            return <AnimeItem anime={anime} className="!w-[230px]" key={`relation-${i}`} />;
          })}
        </Carousel>
      </div>}

      {/* Player */}
      {hasEpisodes && <Suspense fallback={<Skeleton width={'100%'} height={'60vh'} />}>
        <AnimePlayer player={anime.player} player_teams={anime.player_teams} episodes={anime.episodes_meta ?? []} episodes_total={anime.episodes_total} anime_id={anime.id} />
      </Suspense>}
    </main>
  </>;
}