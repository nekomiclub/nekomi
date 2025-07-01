'use server'

import jwt, { JwtPayload } from 'jsonwebtoken';




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
}