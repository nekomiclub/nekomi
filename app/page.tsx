import { Metadata, NextPage } from 'next';
import Home from './Home';
import { ITitle } from '../interfaces/ITitle';
import { config, devMode, prodMode } from '../config';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { HappenedWrongScreen, NotFoundScreen } from '../components/Components';
import { getUTC } from '../components/handlers';

export const metadata: Metadata = {
  title: 'Animee',
  description: 'Animee - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!',
  applicationName: 'Animee',
  metadataBase: new URL('https://animee.club'),
  keywords: ['anime', 'аніме на українській мові', 'дивитись аніме онлайн', 'анімі', 'аніме', 'анімі клаб', 'animee', 'animee club'],
  openGraph: {
    title: `Головна - animee`,
    description: `Поринь у світ україномовного аніме разом з animee!`,
    url: 'https://animee.club',
    siteName: 'Animee',
    type: 'website',
    images: './icon.png'
  }
}

const headlinerQuery = prodMode ? '538a4a13-d473-4e7d-be6a-13b26f10c53e' : 'konosuba-god-s-blessing-on-this-wonderful-world-3';
const titlesWatchingQueries = prodMode ? [
  'c6b9b3e3-3c8d-4597-a464-c22bfeb654dd',
  '534d41c4-f5d0-45db-9914-b5d9e649f048',
  '627690b0-f0c1-490d-b50e-c5ace32cd563',
  '0785c640-99ce-4195-863b-01712d794b96',
  'd675e08c-034d-4b8b-b60f-c362c6ebec34',
  'b284cc51-cf3b-4251-a96e-4ce945ac1595'
] : [
  'that-time-i-got-reincarnated-as-a-slime-season-3',
  'wind-breaker',
  'spice-and-wolf-merchant-meets-the-wise-wolf',
  'mushoku-tensei-jobless-reincarnation-season-2-part-2',
  'kaiju-no-8',
  'delicious-in-dungeon'
]



const RSC: NextPage = async (props) => {
  let headliner: ITitle | null = null;
  let watchingNow: ITitle[] = [];

  try {
    const { data } = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${headlinerQuery}`);

    headliner = data.title;

    for (const i in titlesWatchingQueries) {
      const code = titlesWatchingQueries[i];

      const { data } = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${code}`);
      watchingNow.push(data.title)
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      devMode ? console.error(e.response?.data) : null;

      if (code === 404) {
        return <NotFoundScreen />
      } else if (code === 400) {
        return <HappenedWrongScreen cause={`[${e.code}]: ${e.response?.data?.msg || e.response?.data?.message || 'No message provided'}`} />
      } else {
        return <HappenedWrongScreen cause={e.message} />
      }
    } else {
      const date = `${getUTC().date} ${getUTC().time}`
      const at = `/RSC`;

      console.error(`[${date}]: Server error occured at ${at} - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at ${at}. See logs at ${date}`} />;
    }
  }

  return <Home headliner={headliner!} watchingNow={watchingNow} />
}

export default RSC;