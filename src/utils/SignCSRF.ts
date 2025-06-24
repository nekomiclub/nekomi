'use server'

import jwt from 'jsonwebtoken';

import { config } from '~/config'

import { getUTC } from './handlers';



export default async function SignCSRFToken() {
  return jwt.sign({
    origin: config.domain,
    expire: getUTC().timestamp + config.vars.CSRF_EXPIRE
  }, config.env.CSRF_PRIVATE_KEY, {
    algorithm: 'RS256'
  });
}