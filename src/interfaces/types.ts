import Anime, { HydratedAnime } from './AnimeIntf';

export enum LocalStorageKeys {
  NekoplayerData = 'np-data',
  NekoplayerPreferences = 'np-preferences',
}


export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface AnimeWithMedia extends Anime {
  videoURL: string
  backgroundURL: string
}

export interface AnimeFeatured {
  headliners: AnimeWithMedia[]
  hot: HydratedAnime[]
  rated: HydratedAnime[]
  updatedRecently: HydratedAnime[]
}

/**
 * Next Layout interface
 * 
 * @generic QUERY - Query params intf
 */
export interface LayoutProps<QUERY = {
  [param: string]: string
}> {
  params: Promise<QUERY>
  children: React.ReactElement
}

/**
 * Next React Server Component interface
 * 
 * @generic QUERY - Query params intf
 * @generic SEARCH - Search params intf
 */
export interface RSCProps<QUERY = {
  [param: string]: string
}, SEARCH = {
  [searchParam: string]: string
}> {
  params: Promise<QUERY>
  searchParams: Promise<SEARCH>
}

export type EpisodeQualityType = 'q240' | 'q480' | 'q720' | 'q1080' | 'q4k';
export type NumEpisodeQualityType = 240 | 480 | 720 | 1080 | 2160;