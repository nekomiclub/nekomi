import { initializeApp } from 'firebase/app';
import ms from 'ms';



export const DevelopmentMode = process.env.NODE_ENV === 'development';
export const ProductionMode = process.env.NODE_ENV === 'production';



const env = {
  CSRF_SK: String(process.env['CSRF_SK']),

  NEXT_PUBLIC_NEKOMI_API_URL: String(process.env['NEXT_PUBLIC_NEKOMI_API_URL']),
  NEXT_PUBLIC_TELEGRAM_BOT_URL: String(process.env['NEXT_PUBLIC_TELEGRAM_BOT_URL']),
  NEXT_PUBLIC_NEKOMI_NEXTJS_URL: String(process.env['NEXT_PUBLIC_NEKOMI_NEXTJS_URL']),
};

const URL = {
  /** @deprecated */
  proxy: '/',

  /** @deprecated */
  fullkekw_account: '/',

  /** @deprecated */
  nekomiMedia: 'https://media.nekomi.club',

  nekomiSite: env.NEXT_PUBLIC_NEKOMI_NEXTJS_URL,
  nekomiApi: env.NEXT_PUBLIC_NEKOMI_API_URL,

  telegram: 'https://t.me/nekomiclub',
  telegramBot: env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
  discord: 'https://discord.gg/UmDfKTpsh5',
  discordCreateTicket: 'https://discord.gg/ZXEHQjevEw',
  tiktok: 'https://tiktok.com/@nekomiclub'
};

const vars = {
  SESSION_COOKIE_NAME: 'nekomi-auth',
  CSRF_TOKEN_LIFETIME_MS: ms('1min'),

  breakpoints: {
    breakSM: 640,
    breakMD: 768,
    breakLG: 1024,
    breakXL: 1280,
    breakXXL: 1536,
  }
};

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyD0w3_nOwF59xSx4Ey7yJRbhBxBqGkV4-g',
  authDomain: 'auth.nekomi.club',
  projectId: 'fk-usapi',
  storageBucket: 'fk-usapi.appspot.com',
  messagingSenderId: '122911638615',
  appId: '1:122911638615:web:8b2bb675020b3b48cecf12'
});



export const conf = {
  domain: 'nekomi.club',
  env,
  URL,
  vars
};



export default conf;