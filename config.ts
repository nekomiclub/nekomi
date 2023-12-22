export const devMode = process.env.NODE_ENV === 'development';
export const prodMode = process.env.NODE_ENV === 'production';

interface IEnv {
  NODE_ENV: 'development' | 'production' | 'test',
  FIREBASE_APIKEY: string,
  FIREBASE_APPID: string,
  FIREBASE_MSI: string,
  apiUrl: string
}
// @ts-ignore
export const env: IEnv = {
  NODE_ENV: process.env.NODE_ENV,
  FIREBASE_APIKEY: 'AIzaSyAonyJixltRbgINqakQYPqkj_yuAb2g4rI',
  FIREBASE_APPID: '1:563218119856:web:c0dca24f5df0531d754f75',
  FIREBASE_MSI: '563218119856',
  apiUrl: devMode ? 'http://192.168.0.106' : 'https://api.animee.club'
  // apiUrl: 'https://api.animee.club'
}

export const HIDE_IN_PROD = true;