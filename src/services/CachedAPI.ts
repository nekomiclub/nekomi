'use server';

import { cache } from 'react';
import { cookies } from 'next/headers';

import { conf } from '~/conf';

import API from './api/API';
import { IUserResponseMisc, UserFullType } from './api/user/GetUser.api';



export async function getSessionToken(): Promise<string | undefined> {
  return cookies().get(conf.vars.SESSION_COOKIE_NAME)?.value;
}

export const getCachedUser = cache(async (query: string, session?: string): Promise<IUserResponseMisc & UserFullType> => {
  return (await API.getUser({ query }, { view: 'full', get_libs: true, get_timestamps: true }, { sessionToken: session })).user;
});