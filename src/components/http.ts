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

/** Same as $api, but with longer timeout */
export const $upload = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiProxy,
  timeout: 420000,
})



$api.interceptors.request.use(cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})

$api.interceptors.response.use(undefined, e => {
  // Retry ECONNRESET & ECONNABORTED
  if ((e.code === 'ECONNRESET' || e.code === 'ECONNABORTED') && !e.config.__isRetryRequest) {
    e.config.__isRetryRequest = true;

    return axios(e.config);
  }

  throw e;
})

$upload.interceptors.request.use(async cfg => {
  cfg.headers['X-CSRF-Token'] = signCSRF();

  return cfg;
})

$upload.interceptors.response.use(undefined, e => {
  // Retry ECONNRESET & ECONNABORTED
  if ((e.code === 'ECONNRESET' || e.code === 'ECONNABORTED') && !e.config.__isRetryRequest) {
    e.config.__isRetryRequest = true;

    return axios(e.config);
  }

  throw e;
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