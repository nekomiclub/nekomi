import axios from 'axios';

import { conf } from '~/conf';
import { getUTC } from '~/shared/utilities/utilities';

import signCSRF from './signCSRF';




/** Axios HTTP instance with csrf token specified & creds */
export const $api = axios.create({
  withCredentials: true,
  baseURL: conf.URL.nekomiApi,
  timeout: 9000,
});



$api.interceptors.request.use(async cfg => {
  cfg['timeStart'] = getUTC().timestamp;
  cfg.headers.set('X-CSRF-Token', await signCSRF());

  return cfg;
});

$api.interceptors.response.use(async cfg => {
  const timeStart = cfg.config['timeStart'] as number;
  const timeEnd = getUTC().timestamp;

  console.debug(`[API]: ${cfg.config.method?.toUpperCase()} ${cfg.config.url} executed within ${timeEnd - timeStart} ms`);

  return cfg;
}, async e => {
  // Retry ECONNRESET & ECONNABORTED
  if ((e.code === 'ECONNRESET' || e.code === 'ECONNABORTED') && !e.config.__isRetryRequest) {
    e.config.headers.set('X-CSRF-Token', await signCSRF());
    e.config.__isRetryRequest = true;

    return axios(e.config);
  }

  throw e;
});