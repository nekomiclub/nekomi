'use server';

/* =========================

Team router API endpoints from nekomi OpenAPI

========================= */

import z from 'zod';

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';
import { $api } from '~/shared/utilities/http';
import normalizeError from '~/shared/utilities/normalize-error';

import { getAuthorizationToken } from '../../auth-lib';
import { NormalizedResponseType } from '../api-types';



export const getSearch = APIMethodFactory(`/team/search`, APIOptionsSchemaFactory({
  method: 'get',
  searchParams: OpenAPI.GetTeamSearchQueryParams,
  response: OpenAPI.GetTeamSearchResponse,
}));



export const getTeam = APIMethodFactory(`/team/:qr`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetTeamQrParams,
  searchParams: OpenAPI.GetTeamQrQueryParams,
  response: OpenAPI.GetTeamQrResponse,
}));



export async function uploadAvatarOrCover(id: string, file: File, type: 'avatar' | 'cover'): Promise<NormalizedResponseType<z.infer<typeof OpenAPI.PutTeamIdAvatarResponse>>> {
  const authToken = await getAuthorizationToken();
  const formData = new FormData();

  formData.append('file', file);

  try {
    const res = await $api.put(`/team/${id}/${type}`, formData, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    const validation = OpenAPI.PutTeamIdAvatarResponse.safeParse(res.data);

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