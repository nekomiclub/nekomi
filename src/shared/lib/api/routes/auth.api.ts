'use server';

/* =========================

Auth router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



/** Logout authorized user */
export const getLogout = APIMethodFactory(`/auth/logout`, APIOptionsSchemaFactory({
  method: 'get',
  response: OpenAPI.GetAuthLogoutResponse,
}));



/** Logout specified session */
export const getLogoutSession = APIMethodFactory(`/auth/logout/:sessionId`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetAuthLogoutSessionIdParams,
  response: OpenAPI.GetAuthLogoutSessionIdResponse,
}));



export const postAuth = APIMethodFactory(`/auth`, APIOptionsSchemaFactory({
  method: 'post',
  body: OpenAPI.PostAuthBody,
  response: OpenAPI.PostAuthResponse,
}));