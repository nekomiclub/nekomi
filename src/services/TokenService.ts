import jwt, { JwtPayload } from 'jsonwebtoken';

import { config } from '~/config';
import { getUTC } from '~/utils/utils';



export interface TokenPayload<T = object> {
  payload: JwtPayload & T

  /** Will be null if verify method is not specified */
  verified: boolean | null
}



export default class TokenService {
  /** 
   * Decode token
   */
  static decode<T = object>(token: string): TokenPayload<T> {
    const payload = jwt.decode(token) as JwtPayload & T;
    if (typeof payload !== 'object') throw new Error('Token payload datatype invalid');

    return {
      verified: null,
      payload,
    };
  }



  /** Sign CSRF token */
  static signCSRF(): string {
    return jwt.sign({
      origin: config.domain,
      expire: getUTC().timestamp + config.vars.CSRF_EXPIRE
    }, config.env.CSRF_PRIVATE_KEY, {
      algorithm: 'RS256'
    });
  }
}