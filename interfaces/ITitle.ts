export interface ITitle {
  id: string,
  names: {
    eng: string,
    ukr: string,
    alt: string[] | null
  },
  code: string,
  poster: string,
  background: string,
  rating: number | null,
  description: string,
  status: 'announcement' | 'ongoing' | 'out' | 'delayed',
  estimatedEps: number,
  genres: TAnimeGenres[],
  ageRate: TAnimeAgeRatings,
  season: 'summer' | 'autumn' | 'winter' | 'spring',
  type: 'serial' | 'ONA' | 'OVA' | 'film' | 'special',
  year: number,
  studios: string[],
  country: string,
  started: number | null,
  ended: number | null,
  dubs: ITitleEpisodesDub[] | null,
  epsMeta: ITitleEpisodeMeta[] | null,
  linkedTitlesIDs: string[] | null,
  linkedManga: {
    id: string,
    pictureURL: string,
    name: string,
    URL: string
  } | null,
  details: string | null
}

export type TAnimeGenres = 'chinese' | '3D' | 'shonen' | 'shounenAi' | 'seinen' | 'shoujoAi' | 'shoujo' | 'comedy' | 'romance' | 'school' | 'martial arts' | 'vampires' | 'military' | 'harem' | 'demons' | 'detective' | 'drama' | 'games' | 'historical' | 'isekai' | 'magic' | 'mecha' | 'music' | 'parody' | 'sliceOfLife' | 'adventure' | 'psychological' | 'samurai' | 'supernatural' | 'sports' | 'superpower' | 'horror' | 'sciFi' | 'fantasy' | 'action' | 'ecchi' | 'thriller' | 'erotica' | 'gourmet';
export type TAnimeAgeRatings = 'G' | 'PG' | 'PG-13' | 'R-17' | 'R+' // G - All; Ages PG - Children; PG-13 - Teens 13 or older; R17 - 17+ (violence & profanity) R+ - Mild Nudity;

export interface ITitleEpisodesDub {
  id: string,
  includeSub: boolean,
  include2K: boolean,
  eps: ITitleEpisodeDubbed[]
}

export interface ITitleEpisodeDubbed {
  order: number,
  source: {
    q240: string | null,
    q480: string | null,
    q720: string | null,
    q1080: string | null,
    q2k: string | null
  },
  subIDs: string[] | null,
  framesURL: string[] | null
}

export interface ITitleEpisodeMeta {
  order: number,
  names: {
    ukr: string,
    eng: string
  },
  dateOut: number
}