import ip from 'ip';
import { TAnimeGenres } from "./interfaces/ITitle";

export const devMode = process.env.NODE_ENV === 'development'
export const prodMode = process.env.NODE_ENV === 'production';

/** Development machine IP */
const devIP = '192.168.0.106'

/** Site config */
export const config = {
  /** @deprecated use config.URL instead */
  services: {
    apiURL: devMode ? 'http://192.168.0.106' : 'https://api.animee.club',
    apiWS: devMode ? 'ws://192.168.0.106:8080' : 'wss://api.animee.club:8080',
    fkUsapiURL: devMode ? 'http://192.168.0.106:45660' : 'https://usapi.animee.club',
    fkAccount: devMode ? 'http://192.168.0.106:3000' : 'https://account.animee.club',
    siteURL: devMode ? 'http://192.168.0.106:3001' : 'https://animee.club'
  },

  devIP: '192.168.0.106',

  URL: {
    /** Animee-core URL */
    apiHTTP: prodMode ? `https://api.animee.club` : `http://${devIP}`,

    /** Animee-core websocket URL */
    apiWS: prodMode ? `wss://api.animee.club:8080` : `http://${devIP}:8080`,

    /** Fullkekw userapi URL */
    fkUsapi: prodMode ? `https://usapi.animee.club` : `http://${devIP}:45660`,

    /** Fullkekw account URL */
    fkAccount: prodMode ? `https://account.animee.club` : `http://${devIP}:3000`,

    /** Site own url */
    baseURL: prodMode ? `https://animee.club` : `http://${devIP}:3001`,
  },

  /** CSRF Private key */
  CSRF: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDA4t07yJcUw/5A\n/NvP/ErNabkOXULWw30M/Sax9SPx+GmKGtA8BgqH5hLnhWt8xOGz9o7CEq8BdCYG\n4bh5b65PKjAN3ONJC+K6m7Ksja7Vg9aO/3keYlnx5kiu33RP4QfGojr4FRaiEqjv\nkUhlsEYqldOZiZ3jooN+e+KXzYuQo7YL7WZFkPhZesQocrcfO9JrmBnvZGgLttq6\n/kKm8XK1YkmbnmE+T2LXPZ9364DQW/IuFRuTMFT39GIPFFnTufuAfuW+Zw8YMUTe\n07h+fTYf+NK0uyXQ6YEnIgMWqHkYXH1laIkbqx1wZHT1W8flRCWe4ERNdtmKwkuL\nI4+BpHrtAgMBAAECggEAVnSZUxWa2lzrFrf/0p6z7JRptQ2KSvb+kxbZBETroqaE\nr7lLAsx2ZelzKcD8p8UboW1vGYAEXzNvZABCjnPHfoZbWatbWL9yFdB56qvq5Jse\nTaQm5r6QsENW6sMPwEoOETNgGRhit6yDejX1bFbxbF8RpC0xzvll1Qi0TPR9jQt8\n9lHY1Tnv4kNN+VLg65vCGOs/6LN5H88mThPXsPfum8ab4/P3F8ij12fPaH3kcP3t\nCnNZImqQpsVuPybFtp9B0VzAoFi3lXMdNVoF+EG+eg16klQUNZNFBOfjSIaK8f/z\nj5U1MzaCF9ge6COXw6u8mH9Czt1GQ4lG5EK7wTU0RQKBgQDeiFIJ+gSbtClSD0Y3\niqZs5ldJFr7kTM2imAtq2DkIi0j4tCxVF8zKXH4JB9dZ3QOKJmHEE02Um6HSviOK\ntKQmyr/f7lfipk3WfplXedzcg80HqM1kuby8UA8zZHm6LATY8C83AnoF97di5rzi\naaxFzik3V/Q5uVJC4j15EvxUewKBgQDd5SMM0seADXoXA3UkwhzsqA606CEr+cBo\nDIzPoDiSJqMebCp2glmaobT98STH30EaOpwM7aKQzO+GDBNNxYOMLeBC67MuB4+E\nt4F0cO3IwLr9p9mVU8zbN+xDgTBhTZe+iXQEdCkNy3c29CYyK+rWdlETMqLDgdtz\nKyMtzCIVtwKBgQDRGK5diXuDAopA/PExhypR8S3bE3BS/IfMW6l+v6T3jkkGx+VQ\nH4jiLH6Q5blISw/kY6RBpRGkrYgkiVzEHHCRsrkQJNiXs0Q4Y8SaGXuaCI5CwC4e\nkxfwqhleZO6sLGhxn13+Bmm56cV7POwGotyoysqXoiFti+Drz8GLXneSuQKBgFGP\nfK+k9jGKQpsc6T0GoI0YRLeYL0EzvtY/7q4ObVzDGOgAyCbhSMA+ugExVtykohBb\nBKr32e4xdcUmwR2wAOdQoYLXkffUTZtxvAKp060bsl+0B5UMxVq6lnxFixvo4mLl\nsSBF9iUc6Yfoe/WrENmdibVtwkfsflY5v+eAhfLHAoGAIp0ve9wi2iwI5WOlaNnr\nIdSadyefxgwHy/iS0iAh8fIYxH6UNNJhJ/DpsVErGHAbjZyP166WkN0SlTZDPxTv\nC/2jAmFP6hdL5YIreEYPBbuwMUCqA+Q3hup19G+Ku1cFSA9KjI8ZhZEmIX5PUMIZ\n8gAs5qCZpQaL2H7/nAOm8RY=\n-----END PRIVATE KEY-----\n'
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
  genre: TAnimeGenres,
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