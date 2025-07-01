'use server'

/**
 * @fileoverview server-side function to sign CSRF token
 */

import jwt from 'jsonwebtoken';

import { config } from '~/config';
import { createStringID, getUTC } from '~/utils/utils';



/** Sign CSRF token */
export default async function signCSRF(): Promise<string> {
  return jwt.sign({
    origin: config.domain,
    hash: createStringID(32),
    expire: getUTC().timestamp + config.vars.CSRF_EXPIRE
  }, config.env.CSRF_PRIVATE_KEY, {
    algorithm: 'RS256'
  });
}