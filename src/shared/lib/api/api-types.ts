import { Method } from 'axios';
import z, { ZodAny, ZodObject, ZodOptional } from 'zod';

import { NormalizedErrorType } from '~/shared/utilities/normalize-error';

import * as OpenAPI from './routes/@generated.schema';



// =======================================================
// API types
// =======================================================
export type APISchemaType = {
  method: Method;

  /** Path params (/:id) */
  params?: ZodObject | ZodOptional | ZodAny;

  /** Query params (?abc=123) */
  searchParams?: ZodObject | ZodOptional | ZodAny;

  /** Body params */
  body?: ZodObject | ZodOptional | ZodAny;

  /** Headers */
  headers?: ZodObject | ZodOptional | ZodAny;

  /** Response body */
  response?: any;
}

export type APIPayloadType = Pick<APISchemaType, 'body' | 'headers' | 'params' | 'searchParams'>

export type APIOptionsType = {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}



// =======================================================
// Normalized error
// =======================================================
export type NormalizedSuccessResponseType<T> = {
  success: true
  response: Required<T>
  error?: never
}

export type NormalizedErrorResponseType = {
  success: false
  response?: never
  error: NormalizedErrorType
}

export type NormalizedResponseType<TSchema> = NormalizedSuccessResponseType<TSchema> | NormalizedErrorResponseType



// =======================================================
// OpenAPI inferred types
// =======================================================
export type THomeFeedHero = z.infer<typeof OpenAPI.HomeFeedHero>

// === Anime entity ===
export type TAnime = z.infer<typeof OpenAPI.Anime>
export type TAnimeMinified = z.infer<typeof OpenAPI.AnimeMinified>
export type TAnimeExtended = z.infer<typeof OpenAPI.AnimeExtended>

export type TAnimeStudio = z.infer<typeof OpenAPI.AnimeStudio>
export type TAnimeType = z.infer<typeof OpenAPI.AnimeType>
export type TAnimeSeason = z.infer<typeof OpenAPI.AnimeSeason>
export type TAnimeStatus = z.infer<typeof OpenAPI.AnimeStatus>
export type TAnimeRating = z.infer<typeof OpenAPI.AnimeRating>
export type TAnimeGenre = z.infer<typeof OpenAPI.AnimeGenre>

// === Team entity ===
export type TTeam = z.infer<typeof OpenAPI.Team>
export type TTeamMinified = z.infer<typeof OpenAPI.TeamMinified>

export type TTeamMember = z.infer<typeof OpenAPI.TeamMember>
export type TTeamMemberExtended = z.infer<typeof OpenAPI.TeamMemberExtended>

// === User entity ===
export type TUser = z.infer<typeof OpenAPI.User>
export type TUserMinified = z.infer<typeof OpenAPI.UserMinified>

export type TUserLib = z.infer<typeof OpenAPI.UserLib>
export const USER_LIB_TYPE_ENUM = OpenAPI.UserLibTypeEnum.enum;
