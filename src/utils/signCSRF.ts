'use server';

/**
 * @fileoverview server-side function to sign CSRF token
 */

import jwt from 'jsonwebtoken';

import { conf } from '~/conf';
import { createStringID, getUTC } from '~/utils/utils';



/** Sign CSRF token */
export default async function signCSRF(): Promise<string> {
  return jwt.sign({
    origin: conf.domain,
    hash: createStringID(32),
    expire: getUTC().timestamp + conf.vars.CSRF_TOKEN_LIFETIME_MS
  }, conf.env.CSRF_SK, {
    algorithm: 'RS256'
  });
}