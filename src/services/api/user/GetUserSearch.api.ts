import z from 'zod';

import IUser from '~/interfaces/IUser';
import { APISearchQueryParamsSchema, IAPISearchPagination } from '~/services/api/APIDefinitions';
import { $api } from '~/utils/http';



export type UserSearchResultType = Pick<IUser, 'id' | 'username' | 'avatar'>



interface IRespone {
  message: string
  results: UserSearchResultType[]
  pagination?: IAPISearchPagination
}



export default async function _GetUserSearch(query: z.infer<typeof APISearchQueryParamsSchema>): Promise<IRespone> {
  return (await $api.get<IRespone>(`/user/search`, { params: query })).data;
}