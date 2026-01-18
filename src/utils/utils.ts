/**
 * @fileoverview utils with zero-dependencies
 */

import crypto from 'crypto';





export interface PrettySeconds {
  hrs: number
  mins: number
  secs: number

  /** Formatted string (H:MM:SS) */
  pretty: string
}



export function prettySeconds(sec: number): PrettySeconds {
  let mins = Math.floor(sec / 60);
  const secs = Math.floor(sec - mins * 60);
  let hrs = 0;

  while (mins >= 60) {
    hrs += 1;
    mins -= 60;
  }

  const prettyMMSS = String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0');
  const pretty = hrs ? `${hrs}:` + prettyMMSS : prettyMMSS;

  return { hrs, mins, secs, pretty };
}



export function isUserAgentMobile(userAgent: string): boolean {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
}



/** Get ID with specified length */
export function createStringID(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const charactersLength = characters.length;

  let result = '';
  let counter = 0;

  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}



export function alphabeticSort(a: string, b: string) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}



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



/** Timestamp to date
 * @returns localizedMonth is month on ukranian
 */
export function timestampToDate(timestamp: number): { day: number; month: number; year: number; localizedMonth: string; } {
  const month = new Date(timestamp).getMonth();
  const months: string[] = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень'
  ];
  const localizedMonth = months[month];

  return {
    day: new Date(timestamp).getDate(),
    localizedMonth,
    month,
    year: new Date(timestamp).getFullYear()
  };
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



/** Get random number in range
 * @version re-1.0.0
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(min + Math.random() * (max + 1 - min));
}



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



export function buffer2hash(data: Buffer) {
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
}




/** Wether provided array is empty */
export function isEmpty(arr?: any[]): boolean {
  return Boolean(arr?.length === 0);
}