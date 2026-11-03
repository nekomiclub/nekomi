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
// AUTH_METHOD_ENUM
export const AUTH_METHOD_ENUM = OpenAPI.AuthMethodEnum.enum;
export type AUTH_METHOD_ENUM = keyof typeof AUTH_METHOD_ENUM

export type THomeFeedHero = z.infer<typeof OpenAPI.HomeFeedHero>



// === Anime entity ===
export type TAnime = z.infer<typeof OpenAPI.Anime>
export type TAnimeMinified = z.infer<typeof OpenAPI.AnimeMinified>
// export type TAnimeExtended = z.infer<typeof OpenAPI.AnimeExtended>
export type TAnimeSearchResult = z.infer<typeof OpenAPI.AnimeSearchResult>

export type TAnimeStudio = z.infer<typeof OpenAPI.AnimeStudio>
export type TAnimeType = z.infer<typeof OpenAPI.AnimeType>
export type TAnimeSeason = z.infer<typeof OpenAPI.AnimeSeason>
export type TAnimeStatus = z.infer<typeof OpenAPI.AnimeStatus>
export type TAnimeRating = z.infer<typeof OpenAPI.AnimeRating>
export type TAnimeGenre = z.infer<typeof OpenAPI.AnimeGenre>

export type TAnimePlayer = z.infer<typeof OpenAPI.AnimePlayer>
export type TAnimePlayerTeam = z.infer<typeof OpenAPI.AnimePlayerTeam>
export type TAnimePlayerVOD = z.infer<typeof OpenAPI.AnimePlayerVOD>
export type TAnimeEpisode = z.infer<typeof OpenAPI.AnimeEpisode>

// ANIME_TYPE_ENUM
export const ANIME_TYPE_ENUM = OpenAPI.AnimeTypeEnum.enum;
export type ANIME_TYPE_ENUM = keyof typeof ANIME_TYPE_ENUM

// ANIME_SEASON_ENUM
export const ANIME_SEASON_ENUM = OpenAPI.AnimeSeasonEnum.enum;
export type ANIME_SEASON_ENUM = keyof typeof ANIME_SEASON_ENUM

// ANIME_STATUS_ENUM
export const ANIME_STATUS_ENUM = OpenAPI.AnimeStatusEnum.enum;
export type ANIME_STATUS_ENUM = keyof typeof ANIME_STATUS_ENUM

// ANIME_RATING_ENUM
export const ANIME_RATING_ENUM = OpenAPI.AnimeRatingEnum.enum;
export type ANIME_RATING_ENUM = keyof typeof ANIME_RATING_ENUM

// ANIME_GENRE_ENUM
export const ANIME_GENRE_ENUM = OpenAPI.AnimeGenreEnum.enum;
export type ANIME_GENRE_ENUM = keyof typeof ANIME_GENRE_ENUM

// AnimeVODProvider
export const AnimeVODProviderList = {
  moonanime_vod: 'Moonanime',
  ashdi_vod: 'Ashdi',
  tortuga_vod: 'Tortuga',
};
export type TAnimeVODProvider = keyof typeof AnimeVODProviderList



// === Team entity ===
export type TTeam = z.infer<typeof OpenAPI.Team>
export type TTeamMinified = z.infer<typeof OpenAPI.TeamMinified>
export type TTeamSearchResult = z.infer<typeof OpenAPI.TeamSearchResult>

export type TTeamMember = z.infer<typeof OpenAPI.TeamMember>
export type TTeamMemberExtended = z.infer<typeof OpenAPI.TeamMemberExtended>

// TEAM_ROLE_ENUM
export const TEAM_ROLE_ENUM = OpenAPI.TeamRoleEnum.enum;
export type TEAM_ROLE_ENUM = keyof typeof TEAM_ROLE_ENUM



// === User entity ===
export type TUser = z.infer<typeof OpenAPI.User>
export type TUserMinified = z.infer<typeof OpenAPI.UserMinified>
export type TUserSearchResult = z.infer<typeof OpenAPI.UserSearchResult>

export type TUserLib = z.infer<typeof OpenAPI.UserLib>

export type TUserViewProgress = z.infer<typeof OpenAPI.UserViewProgress>

// USER_LIB_TYPE_ENUM
export const USER_LIB_TYPE_ENUM = OpenAPI.UserLibTypeEnum.enum;
export type USER_LIB_TYPE_ENUM = keyof typeof USER_LIB_TYPE_ENUM



// === Role entity ===
// ROLE_PERMISSION_ENUM
export const ROLE_PERMISSION_ENUM = OpenAPI.RolePermissionEnum.enum;
export type ROLE_PERMISSION_ENUM = keyof typeof ROLE_PERMISSION_ENUM