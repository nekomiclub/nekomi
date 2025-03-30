import { AxiosProgressEvent } from 'axios'

import Anime, { AnimeEpisode, HydratedAnime } from '../AnimeIntf'
import { DubberCompact } from '../DubberIntf'
import { IDubber, TDubberMemberRole } from '../IDubber'
import { TEpisodeQuality } from '../Interfaces'
import { TRoleCapability } from '../IRoles'
import { ITitle } from '../ITitle'
import { IUser, IUserTogetherRoom } from '../IUser'
import { Metadata } from '../types'

export interface DubberGetOneByQueryProps {
  query: string
  detailed?: boolean
  fetchDubbedAnime?: boolean
  parseMembers?: boolean

  /** Fetch only dubber metadata, will set dubber to null */
  metadataOnly?: boolean

  /** Use cache
   * @default true
   */
  useCache?: boolean
}

export interface DubberGetOneByQuery {
  dubber: IDubber

  dubbedHydratedAnimes?: HydratedAnime[]
  metadata?: Metadata
  parsedMembers?: IUser[]
}

export interface IDubberGetOneByQueryResponse {
  status: number
  message: string

  /** Will be null only if metadataOnly is true */
  dubber: IDubber | null

  dubbedAnime: ITitle[] | undefined
  parsedMembers: IUser[] | undefined
  metadata: {
    title: string
    description: string
    keywords: string[]
    photo: string
  } | undefined
}

export interface IDubberPutAvatarProps {
  file: File
  dubberId: string
}

export interface IDubberPutBannerProps {
  file: File
  dubberId: string
}

export interface DubberGetSearchProps {
  /** Query ~all will return all dubbers */
  q: string
}

export interface DubberGetSearch {
  results: IDubber[]
}

export interface IDubberPatchSettingsProps {
  dubberId: string
  nameUkr?: string
  nameEng?: string
  description?: string
  supportLinks?: Partial<IDubber['support']>
  socialLinks?: Partial<IDubber['socials']>
}

export interface IUserGetSearch {
  /** Query ~all will return all users */
  q: string

  /** Parse user invitation data (can/not be invited, already member) for dubber id */
  parseInvitationStatusFor?: string
}

export interface IUserGetSearchResult {
  user: IUser

  /** @requires parseInvitationStatusFor */
  invitationStatus?: 'can_be_invited' | 'telegram_not_linked' | 'invite_pending' | 'others_member_already'
}

export interface IDubberPostInviteSADProps {
  userId: string
  dubberId: string
}

export interface IDubberPatchMemberByIdProps {
  dubberId: string
  userId: string
  role?: TDubberMemberRole
}

export interface IDubberDeleteMemberByIdProps {
  dubberId: string
  userId: string
}

export interface IDubberGetInviteByIdProps {
  dubberId: string
}

export interface AnimeGetSearchProps {
  /**
   * Query ~all will return all anime documents
   * Query ~wo-mal-id will return anime documents where mal_id: null
  */
  q: string
}

export interface AnimeGetSearch {
  results: HydratedAnime[]
  extended: {
    dubbedEpisodes: {
      [id: string]: number | null
    }
  }
}

export interface AnimeGetByQueryProps {
  query: string

  /** Return only metadata, without hydrated anime */
  metadataOnly?: boolean

  /** Return detailed document */
  detailed?: boolean

  /** @requires detailed mode */
  fetchDubbers?: boolean
  /** @requires detailed mode */
  fetchRelated?: boolean
}

export interface AnimeGetByQuery extends HydratedAnime {
  related?: HydratedAnime[]
  dubbers?: DubberCompact[]
  metadata?: Metadata
  posterAdapt?: DubberCompact

  /** UTC-0 timestamp of next planned broadcast */
  nextBroadcast?: number
}

export interface UserGetByQueryProps {
  query: string

  /** Return only metadata */
  metadataOnly?: boolean
  parseCapabilities?: boolean
  parseLibId?: string
  parseTogetherRoomId?: string
  detailed?: boolean
}

export interface UserGetByQuery {
  /** Will be undefined with metadataOnly specified */
  user: IUser

  capabilities?: TRoleCapability[]
  metadata?: Metadata
  parsedLib?: HydratedAnime[]
  parsedTogetherRoom?: {
    anime: HydratedAnime
    dubbers: DubberCompact[]
  }
}

export interface UserGetLibProps {
  query: string
  libId: string
}

export interface UserGetLib {
  results: HydratedAnime[]
}

export interface UserGetTogetherRoomProps {
  query: string
  roomId: string
}

export interface UserGetTogetherRoom {
  room: IUserTogetherRoom
  anime: HydratedAnime
}

export interface AnimeGetAll {
  total: number

  /** With malId and country */
  fullfilled: number

  /** With country only */
  updated: number
}

export interface AnimePutPosterProps {
  file: File

  /** Anime uuid */
  uuid: string
}

export interface AnimePutPoster {
  url: string
}

export interface AnimeDeleteEpisodeProps {
  uuid: string
  dubberId: string
  order: number
}

export interface AnimePostEpisodeProps {
  uuid: string
  file: File
  order: number
  dubberId: string
  qualities: TEpisodeQuality[]
}

export interface AnimePostEpisode {
  episode: AnimeEpisode
}

export interface AnimePostEpisodeParams {
  session?: string
  onUploadProgress?(e: AxiosProgressEvent): void
}

export interface AnimePost {
  anime: Anime
}

export interface AnimeDeleteByUUIDProps {
  uuid: string
  token: string
}



export * from './NekomiAnimeIntf'; 