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
  erotica: 'Еротика',
  gourmet: 'Кулінарія',
}

export const dubsIDs = {
  'amanogawa': 'd979d465-1407-452f-8955-a7692480f9ac',
  'didko studio': 'fd203550-19cc-4fd0-af4c-10050104a4d6',
  'kioto': '6f194501-fbb5-423c-a065-e8774a7486ce',
  'dzuski': 'd92b0be9-5068-472a-b4b7-f0c77b3c7c3c',
  'fanvoxua': '4b792d83-e650-4fe8-a9fc-d9a283dfb6af',
  'kachur': 'bc08931d-a8d4-4bcb-9c82-3def865872d9',
  'sokyra': '8236263b-f434-4081-87cd-a5b8692b25dc',
  'lifecycle': 'fd9439bb-8cf9-4fbd-b7df-e9e20b64327e',
  'inari': '075fb2d0-73f3-4738-953b-59fd0484412c',
  'clan kaizoku': '881f2bd1-429d-4f69-9159-2087f42a485b',
  'kisuki': '8ae494ce-0fc0-4898-8f09-5b51a3804386',
  'unimay': '2e259095-9b18-4032-9484-f968dc559025',
  'vrdub': 'f9dfcc69-0028-4934-b0d7-50ab6ab2f841',
  'uamax': '825ec906-5dbc-4a11-9bd2-fb746ae3a17d',
  'bulbul': '19bcd0b8-1136-4ba7-a004-5c305346d22e',
  'espada studio': '3903c614-3f66-4c46-b4af-27e0ee6e137e',
  'ufdub': '319ec974-3116-43e9-8966-51237f0479ae',
  'kitsune': '275342e8-a6be-47bc-86f6-c3084b9867f9',
  'lisovyi viter': '1d8b59c1-3e11-49fc-99ab-f3e080a099bd',
  'real cossack dubbing': 'c0bafd73-0a38-46f8-a5ef-b8e6aa150020',
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