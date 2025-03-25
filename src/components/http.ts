import axios from 'axios';
import { KJUR } from 'jsrsasign'

import XNcZbkZyomwTPdcY from '../../someBoringData/XNcZbkZyomwTPdcY'
import { config } from '../config';

/** Axios HTTP instance with csrf token specified & creds */
export const $api = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP,
  timeout: 10000,
})

$api.interceptors.request.use(cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})

$api.interceptors.response.use(undefined, e => {
  if (e.code === 'ECONNRESET' && !e.config.__isRetryRequest) {
    e.config.__isRetryRequest = true;

    return axios(e.config);
  }

  throw e;
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

  const KEY = `-----BEGIN PRIVATE KEY-----\n` + XNcZbkZyomwTPdcY + `-----END PRIVATE KEY-----\n`;

  return KJUR.jws.JWS.sign(alg, { alg }, {
    origin: config.domain,
    expire: new Date().getTime() + config.vars.CSRF_EXPIRE
  }, KEY)
}