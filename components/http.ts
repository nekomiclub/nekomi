import axios from 'axios';
import { KJUR } from 'jsrsasign'

import { config, prodMode } from '../config';

/** Axios HTTP instance with creds for animee-api only */
export const $api = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP,
  timeout: 10000,
})

$api.interceptors.request.use(async cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})


/** Sign JWT token
 * CSRF method - will sign CSRF token, with age of 5s (in dev mode 5m). Payload will be ignored
 */
export function signCSRF(): string {
  const alg = 'RS256'

  return KJUR.jws.JWS.sign(alg, { alg }, {
    origin: 'animee.club'
  }, config.CSRF)
}