import { AxiosError } from 'axios';
import { cookies } from 'next/headers';

import { HappenedWrongScreen } from '../../components/Components';
import { getUTC, randomNumber } from '../../components/handlers';
import { $api } from '../../components/http';
import { metaObject } from '../../config';
import { IUserWatchProgress } from '../../interfaces/IUser';

import Home, { IHomeWrapped } from './Home';



interface IHomeWrappedResponse extends IHomeWrapped {
  watchProgress?: IUserWatchProgress[]
}



export const metadata = metaObject({
  title: 'Головна',
  description: 'Nekomi - безкоштовний онлайн-кінотеатр аніме з великою кількістю озвучення на українській мові!'
})



export default async function RSC() {
  const cookieData = await cookies();

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
        Cookie: cookieData.toString()
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

  return <Home data={DATA} watchProgress={watchProgress} featuredAnime={DATA.featured[randomNumber(0, DATA.featured.length - 1)]} />
}