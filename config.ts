import { TAnimeGenres } from "./interfaces/ITitle";

export const devMode = process.env.NODE_ENV === 'development'
export const prodMode = process.env.NODE_ENV === 'production';

interface IEnv {
  NODE_ENV: 'development' | 'production' | 'test',
  FIREBASE_APIKEY: string,
  FIREBASE_APPID: string,
  FIREBASE_MSI: string,
  apiUrl: string,
  wsPort: number
}
// @ts-ignore
export const env: IEnv = {
  NODE_ENV: process.env.NODE_ENV,
  FIREBASE_APIKEY: 'AIzaSyAonyJixltRbgINqakQYPqkj_yuAb2g4rI',
  FIREBASE_APPID: '1:563218119856:web:c0dca24f5df0531d754f75',
  FIREBASE_MSI: '563218119856',
  apiUrl: devMode ? 'http://192.168.0.106' : 'https://api.animee.club',
  wsPort: 8080
}

export const WS_URL = devMode ? `ws://192.168.0.106:${env.wsPort}` : `wss://api.animee.club:${env.wsPort}`;

export const HIDE_IN_PROD = false;

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

export const dubsIDs = {
  'Amanogawa': 'd979d465-1407-452f-8955-a7692480f9ac',
  'Дідько Студіо': 'fd203550-19cc-4fd0-af4c-10050104a4d6',
  'Кіото Аніме': '6f194501-fbb5-423c-a065-e8774a7486ce',
  'InariTV (Дзузьки)': 'd92b0be9-5068-472a-b4b7-f0c77b3c7c3c',
  'FanVoxUa': '4b792d83-e650-4fe8-a9fc-d9a283dfb6af',
  'Студія Качур': 'bc08931d-a8d4-4bcb-9c82-3def865872d9',
  'Студія Сокира': '8236263b-f434-4081-87cd-a5b8692b25dc',
  'Lifecycle': 'fd9439bb-8cf9-4fbd-b7df-e9e20b64327e',
  'Inari': '075fb2d0-73f3-4738-953b-59fd0484412c',
  'Клан Кайзоку': '881f2bd1-429d-4f69-9159-2087f42a485b',
  'Кізукі': '8ae494ce-0fc0-4898-8f09-5b51a3804386',
  'Unimay': '2e259095-9b18-4032-9484-f968dc559025',
  'VRDub': 'f9dfcc69-0028-4934-b0d7-50ab6ab2f841',
  'Uamax Media': '825ec906-5dbc-4a11-9bd2-fb746ae3a17d',
  'Bulbul Media': '19bcd0b8-1136-4ba7-a004-5c305346d22e',
  'Espada studio': '3903c614-3f66-4c46-b4af-27e0ee6e137e',
  'Ufdub': '319ec974-3116-43e9-8966-51237f0479ae',
  'Кіцуне': '275342e8-a6be-47bc-86f6-c3084b9867f9',
  'Лісовий Вітер': '1d8b59c1-3e11-49fc-99ab-f3e080a099bd',
  'Справжня Козацька Озвучка (СКО)': 'c0bafd73-0a38-46f8-a5ef-b8e6aa150020',
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