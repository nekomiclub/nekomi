'use server';

/* =========================

Generic router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



export const getHealthcheck = APIMethodFactory(`/healthcheck`, APIOptionsSchemaFactory({
  method: 'get',
  response: OpenAPI.GetHealthcheckResponse,
}));



export const getFeed = APIMethodFactory(`/feed`, APIOptionsSchemaFactory({
  method: 'get',
  response: OpenAPI.GetFeedResponse,
}));