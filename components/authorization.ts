import { env } from '../config'
import { TUserRoles } from '../interfaces/ITokenData'
import axios, { AxiosResponse } from 'axios';
import $api from './http'

interface IAuthResponse {
  token: string
}

export async function signin({ password, username, token }: { username: string, password: string, token?: string }): Promise<AxiosResponse<IAuthResponse>> {
  const res = await $api.post<IAuthResponse>(`${env.apiUrl}/v1/auth`, {
    username,
    password,
    token
  })

  if (res.data.token) {
    localStorage.setItem('token', res.data.token)
  }

  return res;
}

// export async function signup({ password, username }: { username: string, password: string }): Promise<AxiosResponse<IAuthResponse>> {
//   const res = await $api.post<IAuthResponse>(`${env.apiUrl}/v1/user`, {
//     username,
//     password
//   })

//   if (res.data.token) {
//     localStorage.setItem('token', res.data.token)
//   }

//   return res;
// }

export async function logout(): Promise<void> {
  try {
    await $api.get(`${env.apiUrl}/v1/auth/logout`)
    localStorage.removeItem('token')
  } catch (e) {
    console.error(e)
  }
}