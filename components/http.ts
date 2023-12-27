import axios, { AxiosError } from 'axios';
import { env } from '../config'

export const $api = axios.create({
  withCredentials: true,
  baseURL: env.apiUrl,
})

$api.interceptors.request.use(cfg => {
  cfg.headers.Authorization = `bearer=${localStorage.getItem('token')}`;
  return cfg;
})

let triedRefresh = false
$api.interceptors.response.use(cfg => {
  if (cfg.status === 200) {
    triedRefresh = false;
  }

  return cfg;
}, async (err: AxiosError) => {
  if (err.code === 'ERR_NETWORK') {
    return;
  }

  if (err.response!.status === 401 && !triedRefresh) {
    const originalRequest = err.config;
    triedRefresh = true;

    try {
      const newToken = await axios.get<{ token: string }>(`${env.apiUrl}/v1/auth/refresh`, { withCredentials: true })
      localStorage.setItem('token', newToken.data.token)
    } catch (e) {
      console.error(e)
    }

    return $api.request(originalRequest!)
  }
})

export default $api;