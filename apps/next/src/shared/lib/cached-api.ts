'use server';

import { cache } from 'react';

import API from '~/shared/lib/api';



export const getCachedUser = cache(async (query?: string, get_permissions?: boolean) => {
  if (query) {
    return await API.User.getUserByQuery({
      params: {
        qr: query
      },
      searchParams: {
        is_extended: true,
        get_permissions
      }
    });
  } else {
    return await API.User.getUser({
      searchParams: {
        is_extended: true,
        get_permissions
      }
    });
  }
});



export const getCachedUserLib = cache(async (query: string, lib_id: string) => {
  return await API.User.getLib({
    params: {
      qr: query,
      libId: lib_id
    }
  });
});



export const getCachedTeam = cache(async (query: string) => {
  return await API.Team.getTeam({
    params: {
      qr: query
    },
    searchParams: {
      is_extended: true
    }
  });
});