import { IDubber } from "../interfaces/IDubber";
import { config } from "../config";
import axios from "axios";

/** Send parse dubbers request. Accept any query (id, code, name).
 * @returns Array of dubbers objects
 */
export async function parseTitleDubbers(queries: string[]): Promise<IDubber[]> {
  const { data } = await axios.post<{ results: IDubber[] }>(`${config.services.apiURL}/v1/dubber/parse`, {
    queries
  })

  return data.results;
}

/** Parse country.
 * @example
 * parseTitleCountry('japan') => 'Японія'
 * parseTitleCountry('null') => 'Країна ще неоновлена / невідома'
 * parseTitleCountry('ukraine') => 'Країна ще не перекладена - ukraine'
 */
export function parseTitleCountry(country: string): string {
  switch (country) {
    case 'japan': {
      return 'Японія'
    }

    case 'china': {
      return 'Китай'
    }

    case 'south corea': {
      return 'Східна Корея'
    }

    case 'null': {
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



/** Get object key by value
 * @example 
 * getKeyByValue({a: 42, b: 'boo'}, 'boo') => 'b'
 * getKeyByValue({a: 42, b: 'boo'}, 'foo') => undefined
 */
export function getKeyByValue(object: Object, value: string): string | undefined {
  return Object.keys(object).find(key => object[key] === value);
}