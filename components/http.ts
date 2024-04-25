import axios from 'axios';
import { config } from '../config';

/** Axios HTTP instance with creds for animee-api only */
export const $api = axios.create({
  withCredentials: true,
  baseURL: config.URL.apiHTTP
})