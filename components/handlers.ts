import axios from "axios";
import jwt from 'jsonwebtoken';

import { IDubber } from "../interfaces/IDubber";
import { config } from "../config";
import { TAnimeSeason } from "../interfaces/ITitle";

/** Parse country.
 * @example
 * parseTitleCountry('japan') => 'Японія'
 * parseTitleCountry('null') => 'Країна ще неоновлена / невідома'
 * parseTitleCountry('ukraine') => 'Країна ще не перекладена - ukraine'
 */
export function parseTitleCountry(country: string): string {
  switch (country) {
    case 'Japan': {
      return 'Японія'
    }

    case 'Chine': {
      return 'Китай'
    }

    case 'South Corea': {
      return 'Східна Корея'
    }

    case 'Other': {
      return 'Країна ще неоновлена / невідома'
    }
  }

  return `Країна ще не перекладена - ${country}`
}

/** Parse type
 * @example
 * parseTitleType('serial') => 'Серіал'
 */
export function parseTitleType(type: 'serial' | 'ONA' | 'OVA' | 'film' | 'special'): string {
  switch (type) {
    case ('serial'): {
      return 'Серіал'
    }

    case ('ONA'): {
      return 'ОНА'
    }

    case ('OVA'): {
      return 'ОВА'
    }

    case ('film'): {
      return 'Фільм'
    }

    case ('special'): {
      return 'Спешл'
    }
  }
}

/** Parse title status
 * @example
 * parseTitleStatus('out') => 'Вийшов'
 */
export function parseTitleStatus(status: 'announcement' | 'ongoing' | 'out' | 'delayed'): string {
  switch (status) {
    case ('announcement'): {
      return 'Анонс'
    }

    case ('delayed'): {
      return 'Відкладений'
    }

    case ('ongoing'): {
      return 'Онґоїнг'
    }

    case ('out'): {
      return 'Вийшов'
    }
  }
}

/** Parse title season
 * @example
 * parseTitleSeason('summer') => 'Літо'
 */
export function parseTitleSeason(season: TAnimeSeason): string {
  switch (season) {
    case ('autumn'): {
      return 'Осінь'
    }

    case ('spring'): {
      return 'Весна'
    }

    case ('summer'): {
      return 'Літо'
    }

    case ('winter'): {
      return 'Зима'
    }
  }
}



/** Get object key by value
 * @example 
 * getKeyByValue({a: 42, b: 'boo'}, 'boo') => 'b'
 * getKeyByValue({a: 42, b: 'boo'}, 'foo') => undefined
 */
export function getKeyByValue(object: Object, value: string): string | undefined {
  return Object.keys(object).find(key => object[key] === value);
}

/** @returns ID */
export function createID(): string {
  return (Math.random() + 1).toString(36).substring(8)
}

/** Timestamp to date
 * @returns localizedMonth is month on ukranian
 */
export function timestampToDate(timestamp: number): { day: number, month: number, year: number, localizedMonth: string } {
  const month = new Date(timestamp).getMonth();
  const months: string[] = [
    "Січень",
    "Лютий",
    "Березень",
    "Квітень",
    "Травень",
    "Червень",
    "Липень",
    "Серпень",
    "Вересень",
    "Жовтень",
    "Листопад",
    "Грудень"
  ];
  const localizedMonth = months[month]

  return {
    day: new Date(timestamp).getDate(),
    localizedMonth,
    month,
    year: new Date(timestamp).getFullYear()
  }
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

/** Turn number to string & add zero before number if it less than 10
 * @version re-1.0.0
 */
export function addZeroIfNumberSingle(num: number): string {
  return num <= 9 ? `0${num}` : `${num}`;
}

/** Get full UTC0 time
 * @requires addZeroIfNumberSingle()
 * @version re-1.0.0
 */
export function getUTC() {
  const now = new Date();

  return {
    y: now.getUTCFullYear(),
    m: now.getUTCMonth() + 1,
    d: now.getUTCDate(),
    hrs: now.getUTCHours(),
    mins: now.getUTCMinutes(),
    secs: now.getUTCSeconds(),
    ms: now.getUTCMilliseconds(),
    date: `${now.getUTCFullYear()}.${addZeroIfNumberSingle(now.getUTCMonth() + 1)}.${addZeroIfNumberSingle(now.getUTCDate())}`,
    time: `${addZeroIfNumberSingle(now.getUTCHours())}:${addZeroIfNumberSingle(now.getUTCMinutes())}`,
    timestamp: now.getTime()
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