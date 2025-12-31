import z from 'zod';

import conf from '~/conf';
import { $api } from '~/utils/http';



const ParamSchema = z.object({
  sessionId: z.string().nonempty().optional()
});



export default async function _GetAuthLogout(
  params: z.infer<typeof ParamSchema>,
  props?: { sessionToken?: string }
) {
  const sessionId = params.sessionId ? `/${params.sessionId}` : '';

  return (await $api.get(`/auth/logout${sessionId}`, {
    headers: {
      Cookie: props?.sessionToken ? `${conf.vars.SessionCookie}=${props?.sessionToken}` : undefined
    }
  })).data;
}