'use server';

/* =========================

Team router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



export const getSearch = APIMethodFactory(`/team/search`, APIOptionsSchemaFactory({
  method: 'get',
  searchParams: OpenAPI.GetTeamSearchQueryParams,
  response: OpenAPI.GetTeamSearchResponse,
}));



export const getTeam = APIMethodFactory(`/team/:query`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetTeamQrParams,
  searchParams: OpenAPI.GetTeamQrQueryParams,
  response: OpenAPI.GetTeamQrResponse,
}));