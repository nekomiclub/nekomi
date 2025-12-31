import z from 'zod';

import { $api } from '~/utils/http';



export enum AUTH_METHOD {
  GOOGLE = 'provider:google'
}



const BodyParser = z.object({
  method: z.nativeEnum(AUTH_METHOD),

  /**
   * Authorization token
   * 
   * @requires AUTH_METHOD.GOOGLE
   */
  token: z.string().optional()
});



interface IResponse {
  message: string
  user: {
    id: string
    username: string
    avatar: string
    cover: string
  }
}



export default async function _PostAuth(body: z.infer<typeof BodyParser>): Promise<IResponse> {
  return (await $api.post<IResponse>('/auth', body)).data;
}