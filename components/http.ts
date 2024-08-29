import axios from 'axios';
import { KJUR } from 'jsrsasign'
import http from 'http';
import https from 'https';


import { config, prodMode } from '../config';

/** Axios HTTP instance with creds for animee-api only */
export const $api = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP,
  timeout: 600000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
})

$api.interceptors.request.use(async cfg => {
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