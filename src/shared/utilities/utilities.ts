import * as uuid from 'uuid';

import { StateSetter, StateTuple } from '../types/types';



/** Get uuid v4 */
export const IDv4 = () => uuid.v4();



/** Get uuid v7 */
export const IDv7 = () => uuid.v7();



export const isUserAgentMobile = (userAgent: string) => /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);


/** Copy given text to clipboard */
export function copyToClipboard(textToCopy: string) {
  if (typeof window === 'undefined') return;

  // Navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy);
  } else {
    // Use the 'out of viewport hidden text area' trick
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;

    // Move textarea out of the viewport so it's not visible
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';

    document.body.prepend(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (error) {
      console.error(error);
    } finally {
      textArea.remove();
    }
  }
}



/** Transform timestamp to date
 * @returns DD Month YYYY (if not current)
*/
export function timestampToDayMonth(timestamp: number) {
  const month = new Date(timestamp).getMonth();
  const months: string[] = [
    'січня',
    'лютого',
    'березня',
    'квітня',
    'травня',
    'червня',
    'липня',
    'серпня',
    'вересня',
    'жовтня',
    'листопада',
    'грудня'
  ];
  const localizedMonth = months[month];
  const day = String(new Date(timestamp).getDate()).padStart(2, '0');
  const year = new Date(timestamp).getFullYear();

  return `${day} ${localizedMonth}${getUTC().year !== year ? ` ${year}` : ''}`;
}



/** Get random number in range */
export const randomNumber = (min: number, max: number) => Math.floor(min + Math.random() * (max + 1 - min));



/** Word declination
 * @example
 * wordDeclination(1, ['чашка', 'чашки', 'чашок']) => чашка
 * wordDeclination(2, ['чашка', 'чашки', 'чашок']) => чашки
 */
export function wordDeclination(number: number, words_arr: string[]) {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    let options = [2, 0, 1, 1, 1, 2];
    return words_arr[(number % 100 > 4 && number % 100 < 20) ? 2 : options[(number % 10 < 5) ? number % 10 : 5]];
  }
  return words_arr[1];
}



/**
 * Get UTC date
 *
 * @param ts ISO/UTC string, timestamp or Date
 */
export function getUTC(ts?: string | number | Date) {
  const now = new Date(ts ?? new Date());

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth()).padStart(2, '0');
  const date = String(now.getUTCDate()).padStart(2, '0');
  const weekDay = now.getUTCDay();
  const hrs = String(now.getUTCHours()).padStart(2, '0');
  const mins = String(now.getUTCMinutes()).padStart(2, '0');
  const secs = String(now.getUTCSeconds()).padStart(2, '0');
  const ms = String(now.getUTCMilliseconds()).padStart(4, '0');

  return {
    year,
    month: +month,
    date: +date,
    weekDay,
    hrs: +hrs,
    mins: +mins,
    secs: +secs,
    ms: +ms,
    timestamp: now.getTime(),
    fulldate: `${date}.${month}.${year}`,
    time: `${hrs}:${mins}:${secs}`,

    /** Stringified values (with pads) */
    str: { month, hrs, mins, secs, ms },

    ISO: now.toISOString(),
  };
}



/** Wether provided array is empty */
export const isEmpty = (arr?: any[]) => Boolean(arr?.length === 0);



/** Join strings with space & filter foolish */
export const joinStrings = (...values: (string | boolean | undefined | null)[]) => values.filter(Boolean).join(' ');



/** State alias for tuples */
export const state = <T>(tuple: StateTuple<T>) => tuple[0];



/** Weak state alias for tuples. Accept optional tuple and return optional value */
export const weakState = <T>(tuple?: StateTuple<T>) => tuple?.[0];



/** State setter function alias for tuples */
export const setterFn = <T>(tuple: StateTuple<T>): StateSetter<T> => tuple[1];



/** State setter alias for tuples */
export const setter = <T>(tuple: StateTuple<T>, value: React.SetStateAction<T>) => setterFn<T>(tuple)(value);