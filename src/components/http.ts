import axios from 'axios';
import { KJUR } from 'jsrsasign'

import { config } from '../config';

/** Axios HTTP instance with csrf token specified & creds */
export const $api = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP,
  timeout: 10000,
})

$api.interceptors.request.use(async cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})

/** Same as $api, but with longer timeout */
export const $upload = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP,
  timeout: 420000,
})

$upload.interceptors.request.use(async cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})

/** Sign CSRF token */
export function signCSRF(): string {
  const alg = 'RS256'

  return KJUR.jws.JWS.sign(alg, { alg }, {
    origin: config.domain,
    expire: new Date().getTime() + config.vars.CSRF_EXPIRE
  }, config.secrets.CSRF_TOKEN)
}