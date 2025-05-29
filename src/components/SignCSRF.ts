'use server'

import jwt from 'jsonwebtoken';

import { config } from '~/config';

import { getUTC } from './handlers';



/** Sign CSRF token */
export default async function SignCSRFToken(): Promise<string> {
  return jwt.sign({
    origin: config.domain,
    expire: getUTC().timestamp + config.vars.CSRF_EXPIRE
  }, process.env['CSRF_PRIVATE_KEY']!, {
    algorithm: 'RS256'
  });
}