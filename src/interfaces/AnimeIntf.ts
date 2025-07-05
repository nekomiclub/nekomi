import { DayOfWeek } from '~/interfaces/types';




export interface Anime {
  uuid: string
  slug: string
  poster: string
  year: number
  episodesCount: number | null
  description: string | null
  details: string | null
  broadcast: AnimeBroadcast | null
  genres: ANIME_GENRE[]
  rate: ANIME_RATE
  status: ANIME_STATUS
  season: ANIME_SEASON
  media: ANIME_MEDIA_TYPE
  studios: AnimeStudio[]
  malId: number | null

  /** @since 2.1.2 */
  imdbId: string | null
  /** @since 2.1.2 */
  isDMCARestricted: boolean

  /** UTC timestamp @private */
  updatedAt: number
  /** UTC timestamp @since 2.1.0 @private */
  createdAt: number
  /** @private */
  episodes: AnimeEpisode[]
  /** @private */
  episodesMeta: AnimeEpisodeMeta[]
  /** MAL sync UTC-0 timestamp @private */
  malSyncedAt: number | null
  /** Anime pictures URL's @private */
  pictures: string[]
  /** Related animes ID's @private */
  related: string[]
  /** Poster adapted by dubber ID */
  posterAdapt: string | null

  /** Prevent services sync @private */
  stopSync: {
    /** Can be true to prevent sync at all */
    mal?: boolean
    /** Can be true to prevent sync at all */
    shikimori?: boolean
  }

  score: {
    imdb: number | null
    mal: number | null
    malScoredBy: number | null
  }

  names: {
    eng: string
    ukr: string
    alt: string[]
  }
}

export interface HydratedAnime {
  anime: Anime
  genres: AnimeGenre[]
  media: AnimeMedia
  rate: AnimeRate
  season: AnimeSeason
  status: AnimeStatus
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



export const ANIME_RATES: Record<ANIME_RATE, AnimeRate> = {
  [ANIME_RATE.G]: {
    slug: ANIME_RATE.G,
    name: 'G',
    description: 'Аніме, для глядачів будь-якого віку.',
  },
  [ANIME_RATE.PG]: {
    slug: ANIME_RATE.PG,
    name: 'PG',
    description: 'Аніме, для дітей.',
  },
  [ANIME_RATE.PG13]: {
    slug: ANIME_RATE.PG13,
    name: 'PG-13',
    description: 'Аніме, для підлітків. (13+)',
  },
  [ANIME_RATE.R17]: {
    slug: ANIME_RATE.R17,
    name: 'R-17',
    description: 'Аніме, що містить сцени насильства. (17+)',
  },
  [ANIME_RATE.RPLUS]: {
    slug: ANIME_RATE.RPLUS,
    name: 'R+',
    description: 'Аніме, що містить елементи еротики. (18+)',
  },
  [ANIME_RATE.RX]: {
    slug: ANIME_RATE.RX,
    name: 'Rx',
    description: 'Аніме з відвертими еротичними сценами. (18+)',
  },
};

export const ANIME_STATUSES: Record<ANIME_STATUS, AnimeStatus> = {
  [ANIME_STATUS.CURRENTLY_AIRING]: {
    slug: ANIME_STATUS.CURRENTLY_AIRING,
    name: 'Онґоїнг',
  },
  [ANIME_STATUS.NOT_YET_AIRED]: {
    slug: ANIME_STATUS.NOT_YET_AIRED,
    name: 'Анонс',
  },
  [ANIME_STATUS.FINISHED_AIRING]: {
    slug: ANIME_STATUS.FINISHED_AIRING,
    name: 'Вийшов',
  }
};

export const ANIME_SEASONS: Record<ANIME_SEASON, AnimeSeason> = {
  [ANIME_SEASON.FALL]: {
    slug: ANIME_SEASON.FALL,
    name: 'Осінь',
  },
  [ANIME_SEASON.SPRING]: {
    slug: ANIME_SEASON.SPRING,
    name: 'Весна',
  },
  [ANIME_SEASON.SUMMER]: {
    slug: ANIME_SEASON.SUMMER,
    name: 'Літо',
  },
  [ANIME_SEASON.WINTER]: {
    slug: ANIME_SEASON.WINTER,
    name: 'Зима',
  },
};

export const ANIME_MEDIA_TYPES: Record<ANIME_MEDIA_TYPE, AnimeMedia> = {
  [ANIME_MEDIA_TYPE.MOVIE]: {
    slug: ANIME_MEDIA_TYPE.MOVIE,
    name: 'Фільм',
  },
  [ANIME_MEDIA_TYPE.ONA]: {
    slug: ANIME_MEDIA_TYPE.ONA,
    name: 'ОНА',
  },
  [ANIME_MEDIA_TYPE.OVA]: {
    slug: ANIME_MEDIA_TYPE.OVA,
    name: 'ОВА',
  },
  [ANIME_MEDIA_TYPE.SPECIAL]: {
    slug: ANIME_MEDIA_TYPE.SPECIAL,
    name: 'Спешл',
  },
  [ANIME_MEDIA_TYPE.TV]: {
    slug: ANIME_MEDIA_TYPE.TV,
    name: 'Серіал',
  },
  [ANIME_MEDIA_TYPE.UNKNOWN]: {
    slug: ANIME_MEDIA_TYPE.UNKNOWN,
    name: 'Невідомо',
  },
};

export type AnimeRecordType = Record<any, KeyValue<any>>







export default Anime;