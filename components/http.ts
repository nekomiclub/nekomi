import axios from 'axios';
import { env } from '../config'

export const $api = axios.create({
  withCredentials: true,
  baseURL: env.apiUrl,
})

$api.interceptors.request.use(cfg => {
  cfg.headers.Authorization = `bearer=${localStorage.getItem('token')}`;
  return cfg;
})

export default $api;