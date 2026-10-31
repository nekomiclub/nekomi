import z from 'zod';

import { AnimePlayerDataSchema } from '~/schemas/LocalStorageSchemas';



export enum LOCAL_STORAGE_KEY {
  AnimePlayerData = 'apd'
}



export interface IHomeFeedHero {
  id: string
  slug: string
  title: string
  synopsys: string | null

  poster: CDNString
  cover: CDNString
  video: CDNString
}

/** Next.js RSC props */
export interface IRSCProps<P = {
  [param: string]: string;
}, S = {
  [searchParam: string]: string;
}> {
  params: Promise<P>;
  searchParams: Promise<S>;
}

/** Next.js Layout props */
export interface ILayoutProps<P = {
  [param: string]: string;
}> {
  children: React.ReactNode;
  params: Promise<P>;
}



export type StateSetter<S = any> = React.Dispatch<React.SetStateAction<S>>;

/** ISO Date string */
export type ISODateString = string;

/** Nekomi CDN string */
export type CDNString = string;

export type IAnimePlayerData = z.infer<typeof AnimePlayerDataSchema>



export const zBoolean = z.preprocess((value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
}, z.boolean());



/** Type errors to cause NoConnection error */
export const NoConnectionTypeErrorCodes = ['ECONNREFUSED', 'EADDRNOTAVAIL', 'ENETUNREACH', 'ENOTFOUND'];

/** API error codes to cause session timeout */
export const SessionTimeoutErrorCodes = ['auth:session_token_expired', 'auth:session_token_invalid', 'auth:session_not_exist'];

/** Not found metadata statuses */
export const NotFoundErrorStatuses = [401, 403, 404];