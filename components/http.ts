import axios, { AxiosError } from 'axios';
import { env } from '../config'

export const $api = axios.create({
  withCredentials: true,
  baseURL: env.apiUrl,
})

$api.interceptors.request.use(cfg => {
  if (localStorage.getItem('token')) {
    cfg.headers.Authorization = `bearer=${localStorage.getItem('token')}`;
  }

  return cfg;
})

let triedRefresh = false
$api.interceptors.response.use(cfg => {
  if (cfg.status === 200) {
    triedRefresh = false;
  }

  return cfg;
}, async (err: AxiosError) => {
  const status = err.response?.status;

  // Return if bad request or forbidden or not found or server error
  if (status === 400 || status === 403 || status === 404 || status === 500) {
    return Promise.reject(err)
  }


  if (status === 401 && !triedRefresh && localStorage.getItem('token')) {
    const originalRequest = err.config;
    triedRefresh = true;

    try {
      const newToken = await axios.get<{ token: string }>(`${env.apiUrl}/v1/auth/refresh`, { withCredentials: true })
      localStorage.setItem('token', newToken.data.token);

      return $api.request(originalRequest!)
    } catch (e) {
      return Promise.reject(e)
    }
  }

  return Promise.reject(err)
})

export default $api;