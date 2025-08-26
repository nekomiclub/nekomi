'use server';

import { cache } from 'react';
import { cookies } from 'next/headers';

import { config } from '~/config';
import { UserGetByQuery } from '~/interfaces/services/ApiServiceIntf';

import API from './ApiService';



export async function getSessionToken(): Promise<string | undefined> {
  return cookies().get(config.vars.SessionCookie)?.value;
}

export const getCachedUser = cache(async (query: string, libId?: string, session?: string): Promise<UserGetByQuery> => {
  return await API.getUser({ query, detailed: true, parseLibId: libId }, { session });
});