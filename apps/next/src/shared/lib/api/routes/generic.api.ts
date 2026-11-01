'use server';

/* =========================

Generic router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



export const getPing = APIMethodFactory(`/`, APIOptionsSchemaFactory({
  method: 'get',
  response: OpenAPI.GetResponse,
}));



export const getHomeFeed = APIMethodFactory(`/home-feed`, APIOptionsSchemaFactory({
  method: 'get',
  response: OpenAPI.GetHomeFeedResponse,
}));