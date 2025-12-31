import z from 'zod';

import conf from '~/conf';
import { AnimeCardType } from '~/interfaces/IAnime';
import { IUserLib, UserCardType } from '~/interfaces/IUser';
import { IAPISearchPagination } from '~/services/api/APIDefinitions';
import { $api } from '~/utils/http';



interface IResponse {
  message: string
  libs: IUserLib[]
  user: UserCardType
  catalog: AnimeCardType[]
  pagination: IAPISearchPagination
}

const ParamsSchema = z.object({
  userId: z.string().nonempty(),
  libId: z.string().nonempty(),
});



export default async function _GetUserLib(
  params: z.infer<typeof ParamsSchema>,
  props?: { sessionToken?: string }
): Promise<IResponse> {
  return (await $api.get<IResponse>(`/user/${params.userId}/lib/${params.libId}`, {
    headers: {
      Cookie: props?.sessionToken ? `${conf.vars.SessionCookie}=${props?.sessionToken}` : undefined
    }
  })).data;
}