import z from 'zod';

import IAnime, { AnimeType } from '~/interfaces/IAnime';
import { CDNString } from '~/interfaces/types';
import { APISearchQueryParamsSchema, IAPISearchPagination } from '~/services/api/APIDefinitions';
import { $api } from '~/utils/http';



export type AnimeSearchResultType = Pick<IAnime, 'id' | 'slug' | 'title_ua' | 'title_en' | 'score' | 'episodes_released' | 'episodes_total' | 'year'> & {
  poster: CDNString
  type: AnimeType | null
}



interface IRespone {
  message: string
  results: AnimeSearchResultType[]
  pagination?: IAPISearchPagination
}



export default async function _GetAnimeSearch(query: z.infer<typeof APISearchQueryParamsSchema>): Promise<IRespone> {
  return (await $api.get<IRespone>(`/anime/search`, { params: query })).data;
}