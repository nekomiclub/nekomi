import { NekoplayerLocalStoragePreferences, NekoplayerLocalstorageRecord } from '~/components/Nekoplayer/NPTypes';
import { LOCAL_STORAGE_KEY } from '~/interfaces/types';



/** Get local nekoplayer watch progress data */
export function GetNekoplayerData(): NekoplayerLocalstorageRecord[] {
  if (typeof window === 'undefined') return [];

  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.NekoplayerData) ?? '[]');
}

/** Get local nekoplayer preferences data */
export function GetNekoplayerPreferences(): NekoplayerLocalStoragePreferences[] {
  if (typeof window === 'undefined') return [];

  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY.NekoplayerPreferences) ?? '[]') as NekoplayerLocalStoragePreferences[];
}

/** Set nekoplayer preferences */
export function SetNekoplayerPreferences(pref: NekoplayerLocalStoragePreferences) {
  if (typeof window === 'undefined') return;

  const prefArray = GetNekoplayerPreferences();

  localStorage.setItem(LOCAL_STORAGE_KEY.NekoplayerPreferences, JSON.stringify([...prefArray.filter(el => el.uuid !== pref.uuid), pref]));
}