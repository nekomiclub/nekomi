import { cookies } from 'next/headers';

import conf from '~/conf';



/** Retrieve session token from cookies @deprecated */
export async function getSessionToken(): Promise<string | undefined> {
  const cooks = await cookies();
  const token = cooks.get(conf.vars.SESSION_COOKIE_NAME)?.value;

  return token;
}