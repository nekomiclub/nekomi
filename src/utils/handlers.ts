import jwt from 'jsonwebtoken';

import { EpisodeQualityType } from '~/interfaces/Interfaces';



/** Timestamp to date
 * @returns localizedMonth is month on ukranian
 */
export function timestampToDate(timestamp: number): { day: number, month: number, year: number, localizedMonth: string } {
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
  const localizedMonth = months[month]

  return {
    day: new Date(timestamp).getDate(),
    localizedMonth,
    month,
    year: new Date(timestamp).getFullYear()
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
  const localizedMonth = months[month]
  const day = String(new Date(timestamp).getDate()).padStart(2, '0');
  const year = new Date(timestamp).getFullYear();

  return `${day} ${localizedMonth}${getUTC().year !== year ? ` ${year}` : ''}`
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

/** Get UTC date
 * @param timestamp Timestamp to start from. Default - now
 */
export function getUTC(timestamp?: number | null): {
  year: number
  /** January is first month, december is 12 */
  month: number
  date: number
  weekDay: number
  hrs: number
  mins: number
  secs: number
  ms: number
  timestamp: number
  /** Time
   * @returns 'hh:mm'
   */
  time: string
  /** Accurate time
   * @returns 'hh:mm:ss.mss'
   */
  timeAccurate: string
  /** European fulldate
   * @returns 'dd.mm.yyyy'
   */
  fulldate: string
} {
  const now = timestamp ? new Date(timestamp) : new Date();

  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, '0');
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
    time: `${hrs}:${mins}`,
    timeAccurate: `${hrs}:${mins}:${secs}.${ms}`,
  };
}
interface ITokenPayload<T> {
  /** Can be null if method not provided */
  verified: boolean | null

  /** Token headers */
  headers: jwt.JwtHeader | null

  /** Token payload */
  payload: T
}

const JWTHeaders = ['iss', 'sub', 'aud', 'exp', 'nbf', 'iat', 'jti'];

/** Decode JWT token */
export function decodeToken<T = any>(token: string): ITokenPayload<T> {
  try {
    const decoded = jwt.decode(token);
    let payload: any = {};
    let headers: any = {};
    let verified: boolean | null = null;

    if (typeof decoded === 'string') {
      payload = decoded;
    } else {
      for (const key in decoded) {
        if (!JWTHeaders.includes(key)) {
          payload[key] = decoded[key];
        } else {
          headers[key] = decoded[key];
        }
      }
    }

    // if (method) {
    //   verified = verifyToken(token, method);
    // }

    return {
      headers,
      payload,
      verified
    };
  } catch (e) {
    const emsg = `An error occured while decoding token: ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`;

    throw new Error(emsg);
  }
}

export function parseVideoQuality(quality: EpisodeQualityType) {
  switch (quality) {
    case 'q4k': return '2160p';
    case 'q1080': return '1080p';
    case 'q720': return '720p';
    case 'q480': return '480p';
    case 'q240': return '240p';
  }
}