'use server';

/* =========================

User router API endpoints from nekomi OpenAPI

========================= */

import z from 'zod';

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';
import { $api } from '~/shared/utilities/http';
import normalizeError from '~/shared/utilities/normalize-error';

import { getAuthorizationToken } from '../../auth-lib';
import { NormalizedResponseType } from '../api-types';



export const getSearch = APIMethodFactory(`/user/search`, APIOptionsSchemaFactory({
  method: 'get',
  searchParams: OpenAPI.GetUserSearchQueryParams,
  response: OpenAPI.GetUserSearchResponse,
}));



/** Get authenticated user */
export const getUser = APIMethodFactory(`/user`, APIOptionsSchemaFactory({
  method: 'get',
  searchParams: OpenAPI.GetUserQueryParams,
  response: OpenAPI.GetUserResponse,
}));



/** Get user by query */
export const getUserByQuery = APIMethodFactory(`/user/:qr`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetUserQrParams,
  searchParams: OpenAPI.GetUserQrQueryParams,
  response: OpenAPI.GetUserQrResponse,
}));



export const getLib = APIMethodFactory(`/user/:qr/lib/:libId`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetUserQrLibLibIdParams,
  response: OpenAPI.GetUserQrLibLibIdResponse,
}));



export const patchUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'patch',
  params: OpenAPI.PatchUserIdParams,
  body: OpenAPI.PatchUserIdBody,
  response: OpenAPI.PatchUserIdResponse,
}));



export const deleteUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'delete',
  params: OpenAPI.DeleteUserIdParams,
  response: OpenAPI.DeleteUserIdResponse,
}));



export async function uploadAvatarOrCover(id: string, file: File, type: 'avatar' | 'cover'): Promise<NormalizedResponseType<z.infer<typeof OpenAPI.PutUserIdAvatarResponse>>> {
  const authToken = await getAuthorizationToken();
  const formData = new FormData();

  formData.append('file', file);

  try {
    const res = await $api.put(`/user/${id}/${type}`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    const validation = OpenAPI.PutUserIdAvatarResponse.safeParse(res.data);

    if (!validation.success) {
      return {
        success: false,
        error: await normalizeError(validation.error)
      };
    }

    return {
      success: true,
      response: validation.data as any
    };
  } catch (e) {
    return {
      success: false,
      error: await normalizeError(e)
    };
  }
}