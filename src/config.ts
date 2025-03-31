



export const devMode = process.env.NODE_ENV === 'development'
export const prodMode = process.env.NODE_ENV === 'production';

const NEKOMI_DOMAIN = 'nekomi.club';
const PROXY_DOMAIN = 'fkgway.cx.ua';
const FULLKEKW_DOMAIN = 'nekomi.club';

export const CONSTS = {
  Domains: {
    proxy: PROXY_DOMAIN,

    nekomi: NEKOMI_DOMAIN,
    nekomi_api: `api.${NEKOMI_DOMAIN}`,
    nekomi_media: `media.${NEKOMI_DOMAIN}`,
    nekomi_websocket: `websocket.${NEKOMI_DOMAIN}`,

    fullkekw: FULLKEKW_DOMAIN,
    fullkekw_usapi: `usapi.${FULLKEKW_DOMAIN}`,
    fullkekw_authority: `authority.${FULLKEKW_DOMAIN}`,
    fullkekw_account: `account.${FULLKEKW_DOMAIN}`,
  },
  social: {
    telegram: 'https://t.me/nekomiclub',
    discord: 'https://discord.gg/UmDfKTpsh5',
    discordCreateTicket: 'https://discord.gg/ZXEHQjevEw',
    tiktok: 'https://tiktok.com/@nekomiclub'
  }
}

/** Site config */
export const config = {
  domain: CONSTS.Domains.nekomi,

  URL: {
    /** Nekomi core URL */
    apiHTTP: prodMode ? `https://${CONSTS.Domains.nekomi_api}` : `http://127.0.0.1`,

    /** Nekomi core proxy URL. You should provide header Authorization to pass session */
    apiProxy: prodMode ? `https://${CONSTS.Domains.proxy}` : `http://127.0.0.1`,

    /** Nekomi bot */
    bot: prodMode ? `https://t.me/nekoomibot` : `https://t.me/eblano3d_testbot`,

    /** Nekomi media URL */
    media: prodMode ? `https://${CONSTS.Domains.nekomi_media}` : `http://127.0.0.1:43120`,

    /** Nekomi-core websocket URL */
    apiWS: prodMode ? `wss://${CONSTS.Domains.nekomi_websocket}` : `ws://127.0.0.1:8080`,

    /** Fullkekw userapi URL */
    fkUsapi: prodMode ? `https://${CONSTS.Domains.fullkekw_usapi}` : `http://127.0.0.1:45660`,

    /** Fullkekw account URL */
    fkAccount: prodMode ? `https://${CONSTS.Domains.fullkekw_account}` : `http://127.0.0.1:3000`,

    /** Site own url */
    baseURL: prodMode ? `https://${CONSTS.Domains.nekomi}` : `http://127.0.0.1:3001`,
  },

  /** Site vatiables */
  vars: {
    /** Nekomi security cookie */
    SessionCookie: 'SEC_31N',

    /** CSRF token expiration */
    CSRF_EXPIRE: 180000,

    PATCHER_FILE_MAX_SIZE: 5368709120, // 5368709120 // 5gb

    PATCHER_POSTER_MAX_SIZE: 2097152 // 2097152 // 2mb
  }
}

/** Site metadata @deprecated use siteMetadata instead */
export { default as metaObject } from '~/utils/site-metadata'