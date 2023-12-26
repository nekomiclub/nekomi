import { ITitle } from "../interfaces/ITitle";

const genresTranslation = {
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
  erotica: 'Еротика'
}

export const dubsIDs = {
  'amanogawa': 'd979d465-1407-452f-8955-a7692480f9ac',
  'didko studio': 'fd203550-19cc-4fd0-af4c-10050104a4d6',
  'kioto': '6f194501-fbb5-423c-a065-e8774a7486ce',
  'dzuski': 'd92b0be9-5068-472a-b4b7-f0c77b3c7c3c',
  'fanvoxua': '4b792d83-e650-4fe8-a9fc-d9a283dfb6af',
  'kachur': 'bc08931d-a8d4-4bcb-9c82-3def865872d9',
  'sokyra': '8236263b-f434-4081-87cd-a5b8692b25dc',
  'lifecycle': 'fd9439bb-8cf9-4fbd-b7df-e9e20b64327e'
}

export function getDubberById(id: string) {
  let dubber = '';

  for (const key in dubsIDs) {
    if (dubsIDs[key] === id) {
      dubber = key;
    }
  }

  return dubber;
}

export default function localizeTitle(title: ITitle): ITitle {
  switch (title.status) {
    case 'out': {
      // @ts-ignore
      title.status = 'Вийшов'
      break;
    }

    case 'announcement': {
      // @ts-ignore
      title.status = 'Анонс'
      break;
    }

    case 'delayed': {
      // @ts-ignore
      title.status = 'Відкладений'
      break;
    }

    case 'ongoing': {
      // @ts-ignore
      title.status = 'Виходить'
      break;
    }
  }

  switch (title.country) {
    case 'japan': {
      title.country = 'Японія'
      break;
    }

    case 'china': {
      title.country = 'Китай'
      break;
    }

    case 'south corea': {
      title.country = 'Північна Корея'
      break;
    }
  }

  switch (title.type) {
    case 'film': {
      // @ts-ignore
      title.type = 'Фільм'
      break;
    }

    case 'serial': {
      // @ts-ignore
      title.type = 'Серіал'
      break;
    }

    case 'special': {
      // @ts-ignore
      title.type = 'Спешл'
      break;
    }
  }

  switch (title.season) {
    case 'autumn': {
      // @ts-ignore
      title.season = 'Осінь'
      break;
    }

    case 'spring': {
      // @ts-ignore
      title.season = 'Весна'
      break;
    }

    case 'summer': {
      // @ts-ignore
      title.season = 'Літо'
      break;
    }

    case 'winter': {
      // @ts-ignore
      title.season = 'Зима'
      break;
    }
  }

  let tmp: any[] = []

  title.genres.forEach(el => {
    tmp.push(genresTranslation[el])
  })

  // @ts-ignore
  title.genres = tmp;
  tmp = [];

  title.dubs?.forEach(dub => {
    // @ts-ignore
    dub.name = getDubberById(dub.id)
    tmp.push(dub)
  })

  title.dubs = tmp;
  tmp = [];

  return title
}