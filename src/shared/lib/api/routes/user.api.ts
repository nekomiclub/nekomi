'use server';

/* =========================

User router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



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



/** Patch user by id */
export const patchUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'patch',
  params: OpenAPI.PatchUserIdParams,
  body: OpenAPI.PatchUserIdBody,
  response: OpenAPI.PatchUserIdResponse,
}));



/** Delete user by id */
export const deleteUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'delete',
  params: OpenAPI.DeleteUserIdParams,
  response: OpenAPI.DeleteUserIdResponse,
}));