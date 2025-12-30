import z from 'zod';

import IAnime, { AnimeCardType, AnimeGenreType, AnimeRateType, AnimeSeasonType, AnimeStatusType, AnimeType, IAnimeEpisode, IAnimeEpisodeMeta, IAnimePosterNode, IAnimeScreenshotNode } from '~/interfaces/IAnime';
import { ISODateString, zBoolean } from '~/interfaces/types';
import { $api } from '~/utils/http';



const ParamSchema = z.object({
  query: z.string().nonempty()
});

const QuerySchema = z.object({
  view: z.enum(['full', 'card', 'empty']).default('card'),
  get_timestamps: zBoolean.optional(),
  drop_synopsis_markdown: zBoolean.default(true),

  /** @requires Authorization (CSRF) */
  get_details: zBoolean.optional(),

  /** @requires Authorization (CSRF) */
  get_episodes: zBoolean.optional(),
});



const FullPublicResponseKeys = ['id', 'mal_id', 'imdb_id', 'slug', 'hikka_slug', 'year', 'episodes_total', 'episodes_released', 'title_en', 'title_ja', 'title_ua', 'title_synonims', 'synopsis_en', 'synopsis_ua', 'score', 'scored_by', 'studios', 'schedule', 'is_DMCA_restricted'] as const;
type FullPublicResponseType = Pick<IAnime, typeof FullPublicResponseKeys[number]>

export type AnimeFullType = FullPublicResponseType & {
  genres: AnimeGenreType[]
  season: AnimeSeasonType | null
  status: AnimeStatusType | null
  rating: AnimeRateType | null
  type: AnimeType | null
}

type ViewType = z.infer<typeof QuerySchema>['view']



interface IResponseMisc {
  /** @method get_details */
  relations?: AnimeCardType[]



  /** @method get_episodes */
  episodes?: IAnimeEpisode[]

  /** @method get_episodes */
  episodes_meta?: IAnimeEpisodeMeta[]



  /** @method get_details */
  posters?: IAnimePosterNode[]

  /** @method get_details */
  hero_poster_author?: string | null

  /** @method get_details */
  screenshots?: IAnimeScreenshotNode[]



  /** @method get_timestamps */
  updated_at?: ISODateString

  /** @method get_timestamps */
  created_at?: ISODateString

  /** @method get_timestamps */
  hikka_sync?: ISODateString | null

  /** @method get_timestamps */
  myanimelist_sync?: ISODateString | null
}

type ResponseTypeMap = {
  full: AnimeFullType
  card: AnimeCardType
  empty: object
}

interface IResponse<T extends object> {
  message: string

  anime: IResponseMisc & T
}



export default async function _GetAnime<V extends ViewType>(
  params: z.infer<typeof ParamSchema>,
  query: Partial<z.infer<typeof QuerySchema>> & { view: V }
): Promise<IResponse<ResponseTypeMap[V]>> {
  return (await $api.get<IResponse<ResponseTypeMap[V]>>(`/anime/${params.query}`, { params: query })).data;
}