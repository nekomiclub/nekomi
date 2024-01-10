import { ITitle } from "../interfaces/ITitle";
import { animeGenres, dubsIDs } from '../config'

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
    tmp.push(animeGenres[el])
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