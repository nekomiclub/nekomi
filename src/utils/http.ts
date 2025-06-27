import axios from 'axios';

import { config } from '../config';

import signCSRF from './signCSRF';




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



$api.interceptors.request.use(async cfg => {
  cfg.headers['X-CSRF-Token'] = await signCSRF()

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
  cfg.headers['X-CSRF-Token'] = await signCSRF()

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