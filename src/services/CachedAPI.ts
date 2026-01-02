'use server';

import { cache } from 'react';

import API from './api/API';
import { IUserResponseMisc, UserFullType } from './api/user/GetUser.api';



export const getCachedUser = cache(async (query: string, session?: string): Promise<IUserResponseMisc & UserFullType> => {
  return (await API.getUser({ query }, { view: 'full', get_libs: true, get_timestamps: true }, { sessionToken: session })).user;
});