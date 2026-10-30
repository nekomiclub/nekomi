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
  searchParams: OpenAPI.GetUserQrQueryParams,
  response: OpenAPI.GetUserQrResponse,
}));



/** Get user by query */
export const getUserByQuery = APIMethodFactory(`/user/:query`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetUserQueryParams,
  searchParams: OpenAPI.GetUserQrQueryParams,
  response: OpenAPI.GetUserQrResponse,
}));



export const getLib = APIMethodFactory(`/user/:query/lib/:libId`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetUserQrLibLibIdParams,
  response: OpenAPI.GetUserQrLibLibIdResponse,
}));



/** Patch authenticated user */
export const patchUser = APIMethodFactory(`/user`, APIOptionsSchemaFactory({
  method: 'patch',
  body: OpenAPI.PatchUserBody,
  response: OpenAPI.PatchUserResponse,
}));



/** Patch user by id */
export const patchUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'patch',
  params: OpenAPI.PatchUserIdParams,
  body: OpenAPI.PatchUserIdBody,
  response: OpenAPI.PatchUserIdResponse,
}));



/** Delete the authenticated user */
export const deleteUser = APIMethodFactory(`/user`, APIOptionsSchemaFactory({
  method: 'delete',
  response: OpenAPI.DeleteUserResponse,
}));



/** Delete user by id */
export const deleteUserById = APIMethodFactory(`/user/:id`, APIOptionsSchemaFactory({
  method: 'delete',
  params: OpenAPI.DeleteUserIdParams,
  response: OpenAPI.DeleteUserIdResponse,
}));