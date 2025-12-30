'use server';

import { cache } from 'react';
import { cookies } from 'next/headers';

import { conf } from '~/conf';
import { UserGetByQuery } from '~/interfaces/services/ApiServiceIntf';

import APIOld from './ApiService.old';



export async function getSessionToken(): Promise<string | undefined> {
  return cookies().get(conf.vars.SessionCookie)?.value;
}

export const getCachedUser = cache(async (query: string, libId?: string, session?: string): Promise<UserGetByQuery> => {
  return await APIOld.getUser({ query, detailed: true, parseLibId: libId }, { session });
});