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

const headlinerQuery = 'konosuba-god-s-blessing-on-this-wonderful-world-3';
const titlesWatchingQueries = [
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

      console.error(e.response?.data)

      if (code === 400) {
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