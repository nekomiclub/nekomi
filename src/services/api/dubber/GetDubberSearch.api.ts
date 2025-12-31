import z from 'zod';

import IDubber from '~/interfaces/IDubber';
import { APISearchQueryParamsSchema, IAPISearchPagination } from '~/services/api/APIDefinitions';
import { $api } from '~/utils/http';



export type DubberSearchResultType = Pick<IDubber, 'id' | 'slug' | 'name' | 'about' | 'avatar'>



interface IRespone {
  message: string
  results: DubberSearchResultType[]
  pagination?: IAPISearchPagination
}



export default async function _GetDubberSearch(query: z.infer<typeof APISearchQueryParamsSchema>): Promise<IRespone> {
  return (await $api.get<IRespone>(`/dubber/search`, { params: query })).data;
}