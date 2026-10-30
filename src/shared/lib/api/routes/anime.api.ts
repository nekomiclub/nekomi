'use server';

/* =========================

Anime router API endpoints from nekomi OpenAPI

========================= */

import { APIMethodFactory, APIOptionsSchemaFactory } from '~/shared/lib/api/api-client';
import * as OpenAPI from '~/shared/lib/api/routes/@generated.schema';



export const getSearch = APIMethodFactory(`/anime/search`, APIOptionsSchemaFactory({
  method: 'get',
  searchParams: OpenAPI.GetAnimeSearchQueryParams,
  response: OpenAPI.GetAnimeSearchResponse,
}));



export const getAnime = APIMethodFactory(`/anime/:query`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetAnimeQrEpisodesParams,
  response: OpenAPI.GetAnimeQrResponse,
}));



export const getEpisodes = APIMethodFactory(`/anime/:query/episodes`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetAnimeQrEpisodesParams,
  response: OpenAPI.GetAnimeQrEpisodesResponse,
}));



export const getForceParse = APIMethodFactory(`/anime/:query/parse`, APIOptionsSchemaFactory({
  method: 'get',
  params: OpenAPI.GetAnimeQrParseParams,
  response: OpenAPI.GetAnimeQrParseResponse,
}));