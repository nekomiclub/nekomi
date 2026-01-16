import z from 'zod';

import { AnimePlayerDataSchema } from '~/schemas/LocalStorageSchemas';

import Anime, { HydratedAnime } from './AnimeIntf';



export enum LOCAL_STORAGE_KEY {
  NekoplayerData = 'np-data',
  NekoplayerPreferences = 'np-preferences',

  AnimePlayerData = 'apd'
}



export type StateSetter<S = any> = React.Dispatch<React.SetStateAction<S>>;
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

export type EpisodeQualityType = 'q240' | 'q480' | 'q720' | 'q1080' | 'q4k';
export type NumEpisodeQualityType = 240 | 480 | 720 | 1080 | 2160;



export interface IHomeFeedHero {
  id: string
  slug: string
  title: string
  synopsys: string | null

  poster: CDNString
  cover: CDNString
  video: CDNString
}

export const zBoolean = z.preprocess((value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}, z.boolean());

/** ISO Date string */
export type ISODateString = string;

/** Nekomi CDN string */
export type CDNString = string;

export type IAnimePlayerData = z.infer<typeof AnimePlayerDataSchema>