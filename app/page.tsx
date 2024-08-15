import { Metadata, NextPage } from 'next';
import Home, { IHomeCategories } from './Home';
import { ITitle } from '../interfaces/ITitle';
import { config, devMode, prodMode } from '../config';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { HappenedWrongScreen, NotFoundScreen } from '../components/Components';
import { getUTC } from '../components/handlers';
import { $api } from '../components/http';

export const metadata: Metadata = {
  title: 'Головна - animee',
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



const RSC: NextPage = async (props) => {
  let headliner: ITitle | null = null;
  let headlinerVideo = '';
  let headlinerPoster = '';

  let categories: IHomeCategories = {
    hightRating: [],
    popular: [],
    updatedRecently: []
  }

  try {
    const { data } = await $api.get<{ headliner: ITitle, headlinerVideo: string, headlinerPoster: string, categories: IHomeCategories }>(`/title/popular`);

    headliner = data.headliner;
    headlinerVideo = data.headlinerVideo;
    categories = data.categories;
    headlinerPoster = data.headlinerPoster;
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      console.error(e.response?.data)

      if (code === 404) {
        return <HappenedWrongScreen cause={`Помилка в отриманні тайтлів - Деякі тайтли не знайдені`} />
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

  return <Home headliner={headliner!} categories={categories} headlinerVideo={headlinerVideo} headlinerPoster={headlinerPoster} />
}

export default RSC;