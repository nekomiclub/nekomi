import { NextPage } from 'next';
import Home, { IHomeHeadliner } from './Home';
import { ITitle } from '../interfaces/ITitle';
import { config, devMode, prodMode } from '../config';
import axios, { AxiosError } from 'axios';
import { IcoServerUnavailable } from '../assets/ico/Icos';
import Link from 'next/link';

const headlinerID = prodMode ? '1cbc1ef7-8d88-433a-908b-4df859770ab4' : '1cbc1ef7-8d88-433a-908b-4df859770ab4';
const watchingNowIDS = [
  prodMode ? '69c96816-ea19-4456-80fa-4a0ddf1aa4ae' : '69c96816-ea19-4456-80fa-4a0ddf1aa4ae',
  prodMode ? '8f12a572-2a29-453b-97b9-ef3eaf5ee23d' : 'fcdd55a7-3610-4bc8-a680-bbf32ade7ef4',
  prodMode ? '55d3e879-be58-4b58-bdcf-de560ef2d45c' : '55d3e879-be58-4b58-bdcf-de560ef2d45c',
  prodMode ? '4b4d191f-8db0-45dc-9069-3e61e0016eef' : '4ce2c9c2-d421-4c7b-8a63-e1a9eceb36df',
  prodMode ? 'edf0bdb7-89cc-4461-87d1-e1a5ad09acae' : 'fc6868df-bd76-494e-840f-f7ff3dd67e2d',
  prodMode ? 'fa55ff3c-8351-45ac-a7b8-4769861b0174' : 'a4e72457-0c7f-46c1-8dfc-878540d31c7b'
]



const RSC: NextPage = async (props) => {
  let headliner: IHomeHeadliner | null = null;
  let watchingNow: ITitle[] = [];
  let errored = false;

  if (devMode) {
    headliner = {
      id: headlinerID,
      code: 'sousou-no-frieren',
      poster: 'https://media.animee.club/105725f2-37ac-43b3-9b17-fcc099d9d18c',
      title: 'Фрірен, що проводжає в останню путь',
      video: ''
    }
  } else {
    headliner = {
      id: headlinerID,
      code: 'solo-leveling',
      poster: 'https://media.animee.club/8ee6f087-7ce6-4a6a-8db4-7c2a6294a276',
      title: 'Тільки я візьму новий рівень',
      video: ''
    }
  }

  try {
    for (const i in watchingNowIDS) {
      const id = watchingNowIDS[i];

      const { data } = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${id}`);
      watchingNow.push(data.title)
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.code === 'ECONNREFUSED') {
        console.error('ERROR: Server is unavailable')
        return
      }

      devMode ? console.error(e) : null
    }
  }

  return <Home headliner={headliner!} watchingNow={watchingNow} />
}

export default RSC;