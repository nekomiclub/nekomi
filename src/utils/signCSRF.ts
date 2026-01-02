'use server';

import jwt from 'jsonwebtoken';

import { conf } from '~/conf';
import { createStringID } from '~/utils/utils';



/** Sign CSRF token */
export default async function signCSRF(): Promise<string> {
  return jwt.sign({
    origin: conf.domain,
    token_id: createStringID(32)
  }, conf.env.CSRF_SK.replace(/\\n/g, '\n'), {
    algorithm: 'RS256'
  });
}