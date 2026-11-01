'use server';

import jwt from 'jsonwebtoken';

import { conf } from '~/conf';
import { IDv7 } from '~/shared/utilities/utilities';



/** Sign CSRF token */
export default async function signCSRF(): Promise<string> {
  return jwt.sign({
    origin: conf.domain,
    token_id: IDv7()
  }, conf.env.CSRF_SK.replace(/\\n/g, '\n'), {
    algorithm: 'RS256'
  });
}