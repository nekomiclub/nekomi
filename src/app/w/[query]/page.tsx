import '~/styles/pages/watch.scss';

import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { MaterialSymbol } from 'react-material-symbols';

import AnimeItem from '~/components/AnimeItem';
import { PrettySwiper } from '~/components/Components';
import { HandleServerError } from '~/components/Errors';
import StyledImage from '~/components/StyledImage';
import { UIReportButton } from '~/components/UI/Report';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import API from '~/services/ApiService';
import { config, CONSTS, metaObject } from '../../../config';
import { IRSCProps } from '../../../interfaces/IRSC';
import { routes } from '../../../routes';

import { WatchActions, WatchDetail, WatchDubber, WatchEditLibs, WatchNextEpisode, WatchSectionLabel } from './WatchPage';



export interface WatchPageParams extends Params {
  query: string
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
        title: `${metadata?.title.replace('Аніме ', '')} — nekomi`,
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



// Fetch title
export default async function RSC(props: IRSCProps<WatchPageParams>) {
  const params = await props.params;
  const { query } = params;



  try {
    const { anime, genres, media, rate, season, status, related, posterAdapt, nextBroadcast, dubbers } = await API.getAnime({ query, detailed: true, fetchDubbers: true, fetchRelated: true })
    const hydratedAnime: HydratedAnime = { anime, genres, media, rate, season, status };

    const scoredByFormatter = Intl.NumberFormat('en', { notation: 'compact' });

    let maximumEpisode = 0;
    anime.episodes.forEach(ep => ep.order > maximumEpisode ? maximumEpisode = ep.order : undefined);



    return <>
      <div style={{ height: `calc(32px + var(--header-height))` }}></div>

      {/* DESKTOP */}
      <main className="max-lg:hidden flex flex-col gap-[40px]">
        {/* Meta */}
        <section className="wrapper !flex-row gap-[32px]">
          {/* Poster */}
          <div className="flex flex-col gap-[8px] w-[500px] shrink-0 max-xl:w-[400px]">
            <div className="watch-poster w-full h-[700px] bg-dark-medium rounded-[4px] overflow-hidden max-xl:h-[600px]">
              <StyledImage src={hydratedAnime.anime.poster} width="100%" height="100%" priority loading="eager" />
            </div>

            <WatchEditLibs hydratedAnime={hydratedAnime} />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-[32px] w-full">
            {/* Heading */}
            <div className="flex items-center justify-between w-full gap-[24px]">
              <div className="flex flex-col gap-[4px]">
                <h1 className="text-white text-[32px] font-manrope font-bold" title={hydratedAnime.anime.names.ukr}>{hydratedAnime.anime.names.ukr}</h1>
                <h3 className="text-grey-new text-[24px] font-space-grotesk" title={hydratedAnime.anime.names.eng}>{hydratedAnime.anime.names.eng}</h3>
              </div>

              <div className="flex flex-col items-center gap-[4px]">
                <div className="flex items-center gap-[8px]">
                  <h2 className="text-primary text-[24px] font-bold font-space-grotesk">{hydratedAnime.anime.score.mal?.toFixed(2) ?? hydratedAnime.anime.score.imdb?.toFixed(2) ?? '―'}</h2>

                  <MaterialSymbol icon="star_half" size={24} className="text-primary" />
                </div>

                <p className="text-grey-new font-manrope whitespace-nowrap">{hydratedAnime.anime.score.malScoredBy ? scoredByFormatter.format(hydratedAnime.anime.score.malScoredBy) : 'Немає'} оцінок</p>
              </div>
            </div>

            {/* Actions */}
            <WatchActions hydratedAnime={hydratedAnime} />

            {/* Divider */}
            <div className="watch-section_divider"></div>

            {/* Details */}
            <div className="flex flex-col gap-[8px]">
              <div className="flex flex-wrap gap-[8px] max-2xl:grid-cols-3">
                <WatchDetail name="епізоди" value={`${maximumEpisode ?? '—'} / ${anime.episodesCount ?? '—'}`} />
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

                {anime.details && <div className="watch-meta-detail_outlined">
                  <MaterialSymbol icon="info" size={24} className="text-grey-new" />

                  <p className="text-grey-new font-manrope">{anime.details}</p>
                </div>}
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
          <WatchSectionLabel icon="link" label={`Пов’язані аніме (${related.length})`} />

          <PrettySwiper>
            {related.map((hydrated, i) => {
              return <AnimeItem hydrated={hydrated} className="!w-[230px]" key={`animerelated-${anime.uuid}--${i}`} />
            })}
          </PrettySwiper>
        </div>}

        {/* Player */}
        <div className="flex flex-col gap-[16px]">
          <div className="w-screen h-screen bg-black">

          </div>

          <div className="wrapper items-start">
            <UIReportButton type="text" text="Епізоди завантажені неправильно?" />
          </div>
        </div>
      </main>



      {/* MOBILE */}
      <main className="lg:hidden">

      </main>
    </>
  } catch (e) {
    return HandleServerError(e)
  }
}