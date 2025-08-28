import { NekoplayerLocalStoragePreferences, NekoplayerLocalstorageRecord } from '~/components/Nekoplayer/NPTypes';
import { LocalStorageKeys } from '~/interfaces/types';



/** Get local nekoplayer watch progress data */
export function GetNekoplayerData(): NekoplayerLocalstorageRecord[] {
  if (typeof window === 'undefined') return [];

  return JSON.parse(localStorage.getItem(LocalStorageKeys.NekoplayerData) ?? '[]');
}

/** Get local nekoplayer preferences data */
export function GetNekoplayerPreferences(): NekoplayerLocalStoragePreferences[] {
  if (typeof window === 'undefined') return [];

  return JSON.parse(localStorage.getItem(LocalStorageKeys.NekoplayerPreferences) ?? '[]') as NekoplayerLocalStoragePreferences[];
}

/** Set nekoplayer preferences */
export function SetNekoplayerPreferences(pref: NekoplayerLocalStoragePreferences) {
  if (typeof window === 'undefined') return;

  const prefArray = GetNekoplayerPreferences();

  localStorage.setItem(LocalStorageKeys.NekoplayerPreferences, JSON.stringify([...prefArray.filter(el => el.uuid !== pref.uuid), pref]));
}