import '~/styles/pages/watch.scss';

import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { headers } from 'next/headers';

import AnimeItem from '~/components/AnimeItem';
import { PrettySwiper } from '~/components/Components';
import { HandleServerError } from '~/components/Errors';
import StyledImage from '~/components/StyledImage';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import API from '~/services/ApiService';
import isUserAgentMobile from '~/utils/is-user-agent-mobile';
import { config, CONSTS, metaObject } from '../../../config';
import { IRSCProps } from '../../../interfaces/IRSC';
import { routes } from '../../../routes';

import { WatchActions, WatchCheckMobile, WatchDetail, WatchDetails, WatchDubber, WatchEditLibs, WatchNextEpisode, WatchPlayer, WatchRating, WatchSectionLabel } from './WatchPage';



export interface WatchPageParams extends Params {
  query: string
}

export interface WatchPageSearchParams extends Params {
  mobile?: any
}


export async function generateMetadata(
  props: IRSCProps<WatchPageParams>,
): Promise<Metadata> {
  const params = await props.params;
  const { query } = params;

  try {
    const { metadata } = await API.getAnime({ query, metadataOnly: true })

    return metaObject({
      title: metadata?.title.replace('Аніме ', ''),
      description: metadata?.description,
      keywords: metadata?.keywords,
      openGraph: {
        title: metadata?.title,
        description: metadata?.description,
        type: 'video.tv_show',
        images: metadata?.photo,
        url: `${config.URL.baseURL}${routes.watch_title.path}/${query}`,
        locale: 'uk_UA',
        siteName: CONSTS.Domains.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    return metaObject({ title: 'Аніме не знайдено', robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC(props: IRSCProps<WatchPageParams, WatchPageSearchParams>) {
  const { query } = await props.params;
  const { mobile } = await props.searchParams;

  const userAgent = headers().get('user-agent') || '';
  const isMobile = mobile ?? isUserAgentMobile(userAgent) ?? true



  try {
    const { anime, genres, media, rate, season, status, related, posterAdapt, nextBroadcast, dubbers } = await API.getAnime({ query, detailed: true, fetchDubbers: true, fetchRelated: true })
    const hydratedAnime: HydratedAnime = { anime, genres, media, rate, season, status };

    let maximumEpisode = 0;
    anime.episodes.forEach(ep => ep.order > maximumEpisode ? maximumEpisode = ep.order : undefined);



    return isMobile ? <>
      {/* MOBILE */}
      <main>
        <div className="w-full h-[500px] pt-[32px] flex justify-center relative">
          {/* Background */}
          <div className="watch-mobile-poster" style={{ backgroundImage: `url(${anime.poster})` }}></div>

          <div className="flex flex-col items-center gap-[4px] z-[10] w-fit px-[24px]">
            <StyledImage src={anime.poster} width="270px" height="370px" className="rounded-[4px] overflow-hidden" priority loading="eager" />

            <WatchEditLibs hydratedAnime={hydratedAnime} />

            <div className="flex items-center justify-between w-full">
              <WatchRating hydratedAnime={hydratedAnime} />
            </div>
          </div>
        </div>

        <section className="wrapper gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <h1 className="text-white font-manrope font-bold text-[20px]">{anime.names.ukr}</h1>
            <h2 className="text-grey-new font-manrope">{anime.names.eng}</h2>
          </div>

          {nextBroadcast && <WatchNextEpisode timestamp={nextBroadcast} />}

          <WatchActions hydratedAnime={hydratedAnime} />

          <div className="watch-section_divider"></div>

          {/* Details */}
          {anime.details && <WatchDetails hydratedAnime={hydratedAnime} />}

          {/* Meta */}
          <div className="flex flex-col gap-[6px]">
            <WatchDetail name="епізоди" value={`${maximumEpisode !== 0 ? maximumEpisode : '—'} / ${anime.episodesCount ?? '—'}`} />
            <WatchDetail name="Cтатус:" status={status} />
            <WatchDetail name="Рейтинг:" rate={rate} />
            <WatchDetail name="Cезон:" season={season} year={anime.year} />
            <WatchDetail name="Тип:" media={media} />
            <WatchDetail name="Жанри:" genres={genres} />
            <WatchDetail name="Студії:" studios={anime.studios} />
          </div>

          {/* Description */}
          {anime.description && <p className="text-white text-[14px] font-manrope">{anime.description}</p>}
          {!anime.description && <p className="text-grey-new text-[14px] font-manrope">Опис відсутній</p>}

          {/* Divider */}
          <div className="watch-section_divider"></div>

          {/* Dubbing */}
          {dubbers && dubbers?.length > 0 && <div className="flex flex-col gap-[8px]">
            <WatchSectionLabel icon="mic" label="Переклад та озвучення" />

            <div className="flex flex-wrap gap-[8px]">
              {posterAdapt && <WatchDubber dubber={posterAdapt} posterAdapt key={`animedub-posterAdapt--${posterAdapt.id}`} />}

              {dubbers?.filter(el => el.id !== anime.posterAdapt).map(dubber => {
                return <WatchDubber dubber={dubber} key={`animedub--${dubber.id}`} />
              })}
            </div>
          </div>}

          {/* Pictures */}

          {/* Related */}
          {related && related?.length > 0 && <div className="wrapper gap-[16px]">
            <WatchSectionLabel icon="link" label={`Пов’язане аніме`} />

            <PrettySwiper>
              {related.map((hydrated, i) => {
                return <AnimeItem hydrated={hydrated} className="!w-[170px]" key={`animerelated-${anime.uuid}--${i}`} />
              })}
            </PrettySwiper>
          </div>}

          {/* Player */}
          <WatchPlayer hydratedAnime={hydratedAnime} dubbers={dubbers ?? []} />
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
              <StyledImage src={anime.poster} width="100%" height="100%" priority loading="eager" />
            </div>

            <WatchEditLibs hydratedAnime={hydratedAnime} />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[32px] w-full">
            {/* Heading */}
            <div className="flex items-center justify-between w-full gap-[24px]">
              <div className="flex flex-col gap-[4px]">
                <h1 className="text-white text-[32px] font-manrope font-bold" title={anime.names.ukr}>{anime.names.ukr}</h1>
                <h2 className="text-grey-new text-[24px] font-space-grotesk" title={anime.names.eng}>{anime.names.eng}</h2>
              </div>

              <div className="flex flex-col items-center gap-[4px]">
                <WatchRating hydratedAnime={hydratedAnime} />
              </div>
            </div>

            {/* Actions */}
            <WatchActions hydratedAnime={hydratedAnime} />

            {/* Divider */}
            <div className="watch-section_divider"></div>

            {/* Details */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-wrap gap-[8px] max-2xl:grid-cols-3">
                <WatchDetail name="епізоди" value={`${maximumEpisode !== 0 ? maximumEpisode : '—'} / ${anime.episodesCount ?? '—'}`} />
                <WatchDetail name="статус" status={status} />
                <WatchDetail name="рейтинг" rate={rate} />
                <WatchDetail name="сезон" season={season} year={anime.year} />
                <WatchDetail name="тип" media={media} />
              </div>

              <div className="flex flex-wrap gap-[8px] max-lg:grid-cols-1">
                <WatchDetail name="жанри" genres={genres} />
                <WatchDetail name="студії" studios={anime.studios} />
              </div>

              <div className="flex gap-[8px] max-2xl:flex-col">
                {nextBroadcast && <WatchNextEpisode timestamp={nextBroadcast} />}
                {anime.details && <WatchDetails hydratedAnime={hydratedAnime} />}
              </div>
            </div>

            {/* Description */}
            {anime.description && <p className="text-white font-manrope">{anime.description}</p>}
            {!anime.description && <p className="text-grey-new font-manrope">Опис відсутній</p>}

            {/* Divider */}
            <div className="watch-section_divider"></div>

            {/* Dubbing */}
            {dubbers && dubbers?.length > 0 && <div className="flex flex-col gap-[8px]">
              <WatchSectionLabel icon="mic" label="Переклад та озвучення" />

              <div className="flex flex-wrap gap-[8px]">
                {posterAdapt && <WatchDubber dubber={posterAdapt} posterAdapt key={`animedub-posterAdapt--${posterAdapt.id}`} />}

                {dubbers?.filter(el => el.id !== anime.posterAdapt).map(dubber => {
                  return <WatchDubber dubber={dubber} key={`animedub--${dubber.id}`} />
                })}
              </div>
            </div>}
          </div>
        </section>

        {/* Pictures */}

        {/* Related */}
        {related && related?.length > 0 && <div className="wrapper gap-[16px]">
          <WatchSectionLabel icon="link" label={`Пов’язане аніме`} />

          <PrettySwiper>
            {related.map((hydrated, i) => {
              return <AnimeItem hydrated={hydrated} className="!w-[230px]" key={`animerelated-${anime.uuid}--${i}`} />
            })}
          </PrettySwiper>
        </div>}

        {/* Player */}
        <WatchPlayer hydratedAnime={hydratedAnime} dubbers={dubbers ?? []} />
      </main>
    </>
  } catch (e) {
    return HandleServerError(e)
  }
}