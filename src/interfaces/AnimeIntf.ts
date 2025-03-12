import { DayOfWeek } from '~/interfaces/types';

import { TAnimeAgeRate, TAnimeGenre, TAnimeSeason, TAnimeStatus, TTitleCountry, TTitleType } from './ITitle';



export interface Anime {
  uuid: string
  slug: string
  poster: string
  year: number
  episodesCount: number | null
  description: string | null
  details: string | null

  /** UTC-0 timestamp */
  updatedAt: number

  /** @private */
  episodes: AnimeEpisode[]
  /** @private */
  episodesMeta: AnimeEpisodeMeta[]

  names: {
    eng: string
    ukr: string
    alt: string[]
  },

  broadcast: AnimeBroadcast | null
  genres: AnimeGenreType[]
  rate: AnimeRateType
  status: AnimeStatusType
  season: AnimeSeasonType
  media: AnimeMediaType
  studios: AnimeStudio[]
  malId: number | null
  /** MAL sync UTC-0 timestamp @since 2.1.0 */
  malSyncedAt: number | null
  /** Anime pictures URL's @since 2.1.0 */
  pictures: string[]
  /** Related animes ID's @since 2.1.0 */
  related: string[]
  /** Poster adapted by dubber ID @since 2.1.0 */
  posterAdapt: string | null

  /** @since 2.1.0 */
  score: {
    imdb: number | null
    mal: number | null
    malScoredBy: number | null
  }
}

export interface TitleOld {
  poster: string
  year: number
  episodesCount: number | null
  description: string | null
  details: string | null

  /** UTC-0 timestamp */
  updatedAt: number

  /** @private */
  episodes: AnimeEpisode[]
  /** @private */
  episodesMeta: AnimeEpisodeMeta[]

  names: {
    eng: string
    ukr: string
    alt: string[]
  },


  code: string

  rating: {
    IMDB: number | null
    /** @since 1.3.2
     */
    mal: number | null
    /** MAL rated by
     * @since 1.3.2
     */
    mal_poll: number | null
    /** @deprecated 1.3.2 */
    Animee: number | null
  }

  id: string
  mal_id: string | null

  country: TTitleCountry
  genres: TAnimeGenre[]
  ageRate: TAnimeAgeRate
  status: TAnimeStatus
  season: TAnimeSeason
  type: TTitleType
  studios: string[]
}

export interface AnimeEpisode {
  dubberID: string
  order: number
  qualities: {
    /** Primary quality */
    q1080: string

    q4k: string | null
    q720: string | null
    q480: string | null
    q240: string | null
  }

  /** Frames URLs in order from 0 array */
  frames: string[]
}

export interface AnimeEpisodeMeta {
  order: number
  names: {
    ukr: string
    eng: string
  }

  /** UTC-0 timestamp */
  dateOut: number
}

export interface AnimeBroadcast {
  day: DayOfWeek

  /** Time of the broadcast. E.g 19:30 */
  time: string
}

export interface AnimeStudio {
  id: string
  name: string
}

export type AnimeGenre = KeyValueDescription<AnimeGenreType>
export type AnimeRate = KeyValueDescription<AnimeRateType>;
export type AnimeStatus = KeyValue<AnimeStatusType>;
export type AnimeSeason = KeyValue<AnimeSeasonType>;
export type AnimeMedia = KeyValue<AnimeMediaType>;




interface KeyValue<T = string> {
  slug: T
  name: string
}

interface KeyValueDescription<T = string> extends KeyValue<T> {
  description: string
}



export enum ANIME_GENRE {
  ACTION = 'action',
  ADVENTURE = 'adventure',
  CARS = 'cars',
  COMEDY = 'comedy',
  DEMENTIA = 'dementia',
  DEMONS = 'demons',
  DRAMA = 'drama',
  ECCHI = 'ecchi',
  FANTASY = 'fantasy',
  GAME = 'game',
  HAREM = 'harem',
  HENTAI = 'hentai',
  HISTORICAL = 'historical',
  HORROR = 'horror',
  JOSEI = 'josei',
  KIDS = 'kids',
  MAGIC = 'magic',
  MARTIAL_ARTS = 'martialArts',
  MECHA = 'mecha',
  MILITARY = 'military',
  MUSIC = 'music',
  MYSTERY = 'mystery',
  PARODY = 'parody',
  POLICE = 'police',
  PSYCHOLOGICAL = 'psychological',
  ROMANCE = 'romance',
  SAMURAI = 'samurai',
  SCHOOL = 'school',
  SCI_FI = 'sciFi',
  SEINEN = 'seinen',
  SHOUJO = 'shoujo',
  SHOUJO_AI = 'shoujoAi',
  SHOUNEN = 'shounen',
  SHOUNEN_AI = 'shounenAi',
  SLICE_OF_LIFE = 'sliceOfLife',
  SPACE = 'space',
  SPORTS = 'sports',
  SUPER_POWER = 'superPower',
  SUPERNATURAL = 'supernatural',
  THRILLER = 'thriller',
  VAMPIRE = 'vampire',
  YAOI = 'yaoi',
  YURI = 'yuri',
}

export enum ANIME_RATE {
  /** All ages */
  G = 'g',

  /** Children */
  PG = 'pg',

  /** Teens 13+ */
  PG13 = 'pg_13',

  /** 17+ (violence) */
  R17 = 'r',

  /** 18+ (mild nudity) */
  RPLUS = 'r+',

  /** hentai */
  RX = 'rx',
}

export enum ANIME_STATUS {
  FINISHED_AIRING = 'finished_airing',
  CURRENTLY_AIRING = 'currently_airing',
  NOT_YET_AIRED = 'not_yet_aired',
}

export enum ANIME_SEASON {
  SUMMER = 'summer',
  FALL = 'fall',
  WINTER = 'winter',
  SPRING = 'spring',
}

export enum ANIME_MEDIA_TYPE {
  TV = 'tv',
  OVA = 'ova',
  MOVIE = 'movie',
  SPECIAL = 'special',
  ONA = 'ona',
  UNKNOWN = 'unknown',
}



export type AnimeGenreType = `${ANIME_GENRE}`;
export type AnimeRateType = `${ANIME_RATE}`;
export type AnimeStatusType = `${ANIME_STATUS}`;
export type AnimeSeasonType = `${ANIME_SEASON}`;
export type AnimeMediaType = `${ANIME_MEDIA_TYPE}`;








export interface AnimeRelated {
  uuid: Anime['uuid']
  slug: Anime['slug']
  posterURL: Anime['poster']
  genres: AnimeGenre[]
  malScore: Anime['score']['mal']
  nameUkr: Anime['names']['ukr']
  episodesCount: Anime['episodesCount']
}

export interface HydratedAnime {
  anime: Anime
  genres: AnimeGenre[]
  media: AnimeMedia
  rate: AnimeRate
  season: AnimeSeason
}



export default Anime;