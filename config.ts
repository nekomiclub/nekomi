import CSRF_TOKEN from './secrets/CSRF'

import { TAnimeGenre } from './interfaces/ITitle';

export const devMode = process.env.NODE_ENV === 'development'
export const prodMode = process.env.NODE_ENV === 'production';

const NEKOMI_DOMAIN = 'nekomi.club';
const PROXY_DOMAIN = 'fkgway.cx.ua';
const FULLKEKW_DOMAIN = 'nekomi.club';

/** Development machine IP */
const devIP = '192.168.0.106'

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
    tiktok: 'https://www.tiktok.com/@nekomiclub'
  }
}

/** Site config */
export const config = {
  devIP,

  /** Site domain */
  domain: CONSTS.Domains.nekomi,

  URL: {
    /** Nekomi core URL */
    apiHTTP: prodMode ? `https://${CONSTS.Domains.nekomi_api}` : `http://${devIP}`,

    /** Nekomi core proxy URL. You should provide header Authorization to pass session */
    apiProxy: prodMode ? `https://${CONSTS.Domains.proxy}` : `http://${devIP}`,

    /** Nekomi bot */
    bot: prodMode ? `https://t.me/nekoomibot` : `https://t.me/eblano3d_testbot`,

    /** Nekomi media URL */
    media: prodMode ? `https://${CONSTS.Domains.nekomi_media}` : `http://${devIP}:43120`,

    /** Nekomi-core websocket URL */
    apiWS: prodMode ? `wss://${CONSTS.Domains.nekomi_websocket}` : `ws://${devIP}:8080`,

    /** Fullkekw userapi URL */
    fkUsapi: prodMode ? `https://${CONSTS.Domains.fullkekw_usapi}` : `http://${devIP}:45660`,

    /** Fullkekw account URL */
    fkAccount: prodMode ? `https://${CONSTS.Domains.fullkekw_account}` : `http://${devIP}:3000`,

    /** Site own url */
    baseURL: prodMode ? `https://${CONSTS.Domains.nekomi}` : `http://${devIP}:3001`,

    /** Fullkekw uptime
     * @deprecated
     */
    uptime: prodMode ? `https://uptime.${CONSTS.Domains.fullkekw}` : `http://${devIP}:45322`,
  },

  /** Site vatiables */
  vars: {
    /** Nekomi security cookie */
    SessionCookie: 'SEC_31N',

    /** CSRF token expiration */
    CSRF_EXPIRE: 180000,

    PATCHER_FILE_MAX_SIZE: 5368709120, // 5368709120 // 5gb

    PATCHER_POSTER_MAX_SIZE: 2097152 // 2097152 // 2mb
  },

  /** Site secrets */
  secrets: {
    /** CSRF Token */
    CSRF_TOKEN,
  }
}

export const animeGenres = {
  chinese: 'Китайські',
  '3D': '3D',
  shonen: 'Шьонен',
  shounenAi: 'Шьонен-аї',
  seinen: 'Сейнен',
  shoujoAi: 'Шьодзьо-аї',
  shoujo: 'Шьоджьо',
  comedy: 'Комедія',
  romance: 'Романтика',
  school: 'Школа',
  martialArts: 'Бойові мистецтва',
  vampires: 'Вампіри',
  military: 'Бойовик',
  harem: 'Гарем',
  demons: 'Демони',
  detective: 'Детектив',
  drama: 'Драма',
  games: 'Ігри',
  historical: 'Історія',
  isekai: 'Ісекай',
  magic: 'Магія',
  mecha: 'Меха',
  music: 'Музичний',
  parody: 'Пародія',
  sliceOfLife: 'Буденність',
  adventure: 'Пригоди',
  psychological: 'Психологія',
  samurai: 'Самураї',
  supernatural: 'Надприродне',
  sports: 'Спорт',
  superpower: 'Суперсила',
  horror: 'Жахи',
  sciFi: 'Фантастика',
  fantasy: 'Фентезі',
  action: 'Екшен',
  ecchi: 'Еччі',
  thriller: 'Триллер',
  erotica: 'Еротика',
  gourmet: 'Кулінарія',
}

export const genresDescription: {
  genre: TAnimeGenre,
  description: string
}[] = [
    {
      genre: 'chinese',
      description: 'Аніме, створене в Китаї або з китайською тематикою.'
    },
    {
      genre: '3D',
      description: 'Анімація в тривимірному просторі.'
    },
    {
      genre: 'shonen',
      description: 'Аніме для юнаків. Зазвичай має енергійний сюжет та бійки.'
    },
    {
      genre: 'shounenAi',
      description: 'Романтичні відносини між хлопцями, спрямовані на аудиторію хлопців.'
    },
    {
      genre: 'seinen',
      description: 'Аніме для дорослої аудиторії чоловіків.'
    },
    {
      genre: 'shoujoAi',
      description: 'Романтичні відносини між дівчатами, спрямовані на аудиторію дівчат.'
    },
    {
      genre: 'shoujo',
      description: 'Аніме для дівчат.'
    },
    {
      genre: 'comedy',
      description: 'Аніме з гумористичним сюжетом.'
    },
    {
      genre: 'romance',
      description: 'Аніме з романтичним сюжетом.'
    },
    {
      genre: 'school',
      description: 'Аніме, дія якого відбувається в шкільному оточенні.'
    },
    {
      genre: 'martial arts',
      description: 'Аніме з бойовим мистецтвом у фокусі.'
    },
    {
      genre: 'vampires',
      description: 'Аніме про вампірів.'
    },
    {
      genre: 'military',
      description: 'Аніме з військовою тематикою.'
    },
    {
      genre: 'harem',
      description: 'Аніме, де головний герой оточений дівчатами (або хлопцями?).'
    },
    {
      genre: 'demons',
      description: 'Аніме про демонів або істот з аду.'
    },
    {
      genre: 'detective',
      description: 'Аніме з елементами детективу або розслідуваннями.'
    },
    {
      genre: 'drama',
      description: 'Аніме з інтенсивним сюжетом та емоційними сценами.'
    },
    {
      genre: 'games',
      description: 'Аніме, де головний сюжет пов’язаний з іграми.'
    },
    {
      genre: 'historical',
      description: 'Аніме з історичною тематикою або відображенням минулих епох.'
    },
    {
      genre: 'isekai',
      description: 'Аніме, де головний герой потрапляє в інший світ або паралельну реальність.'
    },
    {
      genre: 'magic',
      description: 'Аніме про магію та магічні здібності.'
    },
    {
      genre: 'mecha',
      description: 'Аніме з гігантськими роботами або механічними конструкціями.'
    },
    {
      genre: 'music',
      description: 'Аніме, де музика або музична індустрія є важливою частиною сюжету.'
    },
    {
      genre: 'parody',
      description: 'Аніме, яке парадіює на інші твори або жанри.'
    },
    {
      genre: 'sliceOfLife',
      description: 'Аніме, яке відображає повсякденне життя персонажів.'
    },
    {
      genre: 'adventure',
      description: 'Аніме з пригодницьким сюжетом та подорожами.'
    },
    {
      genre: 'psychological',
      description: 'Аніме з фокусом на психологічні аспекти та внутрішній світ персонажів.'
    },
    {
      genre: 'samurai',
      description: 'Аніме про самураїв або феодальну Японію.'
    },
    {
      genre: 'supernatural',
      description: 'Аніме з надприродними аспектами та явищами.'
    },
    {
      genre: 'sports',
      description: 'Аніме про спорт або змагання.'
    },
    {
      genre: 'superpower',
      description: 'Аніме з персонажами, що мають надприродні здібності.'
    },
    {
      genre: 'horror',
      description: 'Аніме, яке створює жах або страх через свою атмосферу та сюжет.'
    },
    {
      genre: 'sciFi',
      description: 'Аніме з науковою фантастикою.'
    },
    {
      genre: 'fantasy',
      description: 'Аніме з фантастичними елементами та світами.'
    },
    {
      genre: 'action',
      description: 'Аніме з активними сценами боротьби та пригод.'
    },
    {
      genre: 'ecchi',
      description: 'Аніме з відвертими сценами або еротичним гумором.'
    },
    {
      genre: 'thriller',
      description: 'Аніме, яке створює напругу та суспільність.'
    },
    {
      genre: 'erotica',
      description: 'Аніме з еротичним вмістом. Як правило є R+.'
    },
    {
      genre: 'gourmet',
      description: 'Аніме про кулінарію та їжу.'
    }
  ];