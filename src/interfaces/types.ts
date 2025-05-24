import Anime, { HydratedAnime } from './AnimeIntf';

export enum LocalStorageKeys {
  NekoplayerData = 'np-data',
  NekoplayerPreferences = 'np-preferences',
}



export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface Metadata {
  title: string
  description: string
  keywords: string[]
  photo: string
}

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