import { initializeApp } from 'firebase/app';



export const IsDevelopment = process.env.NODE_ENV === 'development';
export const IsProduction = process.env.NODE_ENV === 'production';



/** @deprecated */
const env = {
  API_KEY_SK: String(process.env['API_KEY_SK']),

  NEXT_PUBLIC_NEKOMI_API_URL: String(process.env['NEXT_PUBLIC_NEKOMI_API_URL']),
  NEXT_PUBLIC_TELEGRAM_BOT_URL: String(process.env['NEXT_PUBLIC_TELEGRAM_BOT_URL']),
  NEXT_PUBLIC_NEKOMI_NEXTJS_URL: String(process.env['NEXT_PUBLIC_NEKOMI_NEXTJS_URL']),
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
  /** @deprecated */
  URL: {
    nekomiRepository: 'https://github.com/nekomiclub/nekomi',
    nekomiSite: env.NEXT_PUBLIC_NEKOMI_NEXTJS_URL,
    nekomiApi: env.NEXT_PUBLIC_NEKOMI_API_URL,

    telegram: 'https://t.me/nekomiclub',
    telegramChat: 'https://t.me/nekomiclub',
    telegramBot: env.NEXT_PUBLIC_TELEGRAM_BOT_URL,
    discord: 'https://discord.gg/UmDfKTpsh5',
    discordCreateTicket: 'https://discord.gg/ZXEHQjevEw',
    tiktok: 'https://tiktok.com/@nekomiclub'
  },
  vars: {
    authorization_cookie_name: 'nekomi:auth',

    breakpoints: {
      breakSM: 640,
      breakMD: 768,
      breakLG: 1024,
      breakXL: 1280,
      breakXXL: 1536,
    }
  }
};



export default conf;