export const DevelopmentMode = process.env.NODE_ENV === 'development'
export const ProductionMode = process.env.NODE_ENV === 'production';

const env = {
  CSRF_PRIVATE_KEY: String(process.env['CSRF_PRIVATE_KEY']),

  // DOMAINS & MICROSERVICE API ENDPOINTS (29.06.2025)
  PROXY_DOMAIN: String(process.env['PROXY_DOMAIN']),
  NEKOMI_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_DOMAIN']),
  NEKOMI_WEBSOCKET_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_WEBSOCKET_DOMAIN']),
  NEKOMI_AUTH_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_AUTH_DOMAIN']),
  NEKOMI_BOT_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_BOT_DOMAIN']),
  NEKOMI_MEDIA_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_MEDIA_DOMAIN']),
  NEKOMI_API_DOMAIN: String(process.env['NEXT_PUBLIC_NEKOMI_API_DOMAIN']),
  FULLKEKW_USERAPI_DOMAIN: String(process.env['NEXT_PUBLIC_FULLKEKW_USERAPI_DOMAIN']),
  FULLKEKW_AUTHORITY_DOMAIN: String(process.env['NEXT_PUBLIC_FULLKEKW_AUTHORITY_DOMAIN']),
  FULLKEKW_ACCOUNT_DOMAIN: String(process.env['NEXT_PUBLIC_FULLKEKW_ACCOUNT_DOMAIN']),

  NEKOMI_API_URL: String(process.env['NEXT_PUBLIC_NEKOMI_API_URL']),
  PROXY_URL: String(process.env['NEXT_PUBLIC_PROXY_URL']),
  TELEGRAM_BOT_URL: String(process.env['NEXT_PUBLIC_TELEGRAM_BOT_URL']),
  NEKOMI_NEXTJS_URL: String(process.env['NEXT_PUBLIC_NEKOMI_NEXTJS_URL']),
  NEKOMI_WEBSOCKET_URL: String(process.env['NEXT_PUBLIC_NEKOMI_WEBSOCKET_URL']),
  NEKOMI_MEDIA_URL: String(process.env['NEXT_PUBLIC_NEKOMI_MEDIA_URL']),
  NEKOMI_BOT_URL: String(process.env['NEXT_PUBLIC_NEKOMI_BOT_URL']),
  NEKOMI_UPLOADS_URL: String(process.env['NEXT_PUBLIC_NEKOMI_UPLOADS_URL']),
  FULLKEKW_AUTHORITY_URL: String(process.env['NEXT_PUBLIC_FULLKEKW_AUTHORITY_URL']),
  FULLKEKW_USERAPI_URL: String(process.env['NEXT_PUBLIC_FULLKEKW_USERAPI_URL']),
  FULLKEKW_ACCOUNT_URL: String(process.env['NEXT_PUBLIC_FULLKEKW_ACCOUNT_URL']),
}

const DOMAIN = {
  proxy: env.PROXY_DOMAIN,
  nekomi: env.NEKOMI_DOMAIN,
  nekomi_auth: env.NEKOMI_AUTH_DOMAIN,
  nekomi_api: env.NEKOMI_API_DOMAIN,
  nekomi_media: env.NEKOMI_MEDIA_DOMAIN,
  nekomi_bot: env.NEKOMI_BOT_DOMAIN,
  nekomi_websocket: env.NEKOMI_WEBSOCKET_DOMAIN,

  fullkekw_authority: env.FULLKEKW_AUTHORITY_DOMAIN,
  fullkekw_userapi: env.FULLKEKW_USERAPI_DOMAIN,
  fullkekw_account: env.FULLKEKW_ACCOUNT_DOMAIN,
};

const URL = {
  proxy: env.PROXY_URL,
  nekomi_site: env.NEKOMI_NEXTJS_URL,
  nekomi_ws: env.NEKOMI_WEBSOCKET_URL,
  nekomi_media: env.NEKOMI_MEDIA_URL,
  nekomi_api: env.NEKOMI_API_URL,
  nekomi_bot: env.NEKOMI_BOT_URL,
  nekomi_uploads: env.NEKOMI_UPLOADS_URL,
  fullkekw_authority: env.FULLKEKW_AUTHORITY_URL,
  fullkekw_userapi: env.FULLKEKW_USERAPI_URL,
  fullkekw_account: env.FULLKEKW_ACCOUNT_URL,

  telegram: 'https://t.me/nekomiclub',
  telegramBot: env.TELEGRAM_BOT_URL,
  discord: 'https://discord.gg/UmDfKTpsh5',
  discordCreateTicket: 'https://discord.gg/ZXEHQjevEw',
  tiktok: 'https://tiktok.com/@nekomiclub'
}

/** Site config */
export const config = {
  domain: DOMAIN.nekomi,

  DOMAIN,
  URL,

  /** Site vatiables */
  vars: {
    /** Nekomi security cookie */
    SessionCookie: 'SEC_31N',

    /** CSRF token expiration */
    CSRF_EXPIRE: 180000,
  },

  env,
}

/** Site metadata @deprecated use siteMetadata instead */
export { default as metaObject } from '~/utils/site-metadata'