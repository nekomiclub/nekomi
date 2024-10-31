import { Metadata, NextPage } from 'next';
import Home, { IHomeWrapped } from './Home';
import { ITitle } from '../interfaces/ITitle';
import { config, CONSTS, devMode, prodMode } from '../config';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';
import { HappenedWrongScreen, NotFoundScreen } from '../components/Components';
import { getUTC } from '../components/handlers';
import { $api } from '../components/http';
import { IUserWatchProgress } from '../interfaces/IUser';
import { cookies } from 'next/headers';



interface IHomeWrappedResponse extends IHomeWrapped {
  watchProgress?: IUserWatchProgress[]
}



export const metadata: Metadata = {
  title: 'Nekomi - Онлайн кінотеатр аніме українською',
  description: 'Поринь у світ україномовного аніме разом з nekomi!',
  applicationName: 'Nekomi',
  keywords: ['anime', 'аніме на українській мові', 'дивитись аніме онлайн', 'некомі', 'аніме', 'некомі клаб', 'nekomi', 'nekomi club'],
  metadataBase: new URL(config.URL.media),
  openGraph: {
    title: `Nekomi - Онлайн кінотеатр аніме українською`,
    description: `Поринь у світ україномовного аніме разом з nekomi!`,
    url: `https://${CONSTS.Domains.nekomi}`,
    siteName: CONSTS.Domains.nekomi,
    type: 'website',
    images: './icon.png'
  }
}



export default async function RSC() {
  let watchProgress: IUserWatchProgress[] = []

  let DATA: IHomeWrapped = {
    featured: [],
    hightRated: [],
    popular: [],
    updatedRecently: []
  }

  try {
    const { data } = await $api.get<IHomeWrappedResponse>(`/title/home_wrapped`, {
      headers: {
        Cookie: cookies().toString()
      }
    });

    DATA.featured = data.featured;
    DATA.hightRated = data.hightRated;
    DATA.popular = data.popular;
    DATA.updatedRecently = data.updatedRecently;
    watchProgress = data.watchProgress || [];
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      console.error(e)

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

  return <Home data={DATA} watchProgress={watchProgress} />
}