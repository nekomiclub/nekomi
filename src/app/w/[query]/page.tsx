import axios, { AxiosError } from 'axios';
import { Metadata } from 'next';

import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { getUTC, parseTitleType } from '../../../components/handlers';
import { $api } from '../../../components/http';
import { animeGenres, config, CONSTS, devMode, metaObject } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { IRSCProps } from '../../../interfaces/IRSC';
import { ITitle, TAnimeGenre } from '../../../interfaces/ITitle';
import { routes } from '../../../routes';

import Watch from './Watch';



export async function generateMetadata(
  props: IRSCProps,
): Promise<Metadata> {
  const params = await props.params;

  try {
    const { data } = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${params.query}`)
    const { title } = data

    const genres: TAnimeGenre[] = title.genres.map(genre => {
      return animeGenres[genre]
    })

    const description = `${genres.length ? genres.join(', ') : `Жанри відсутні`} • ${title.year} • ${parseTitleType(title.type)}. ${title.description}`

    return metaObject({
      title: title.names.ukr,
      description,
      keywords: [title.names.eng, ...title.names.alt],
      openGraph: {
        title: `Аніме ${title.names.ukr} (${title.year}) — nekomi`,
        description,
        type: 'video.tv_show',
        images: title.poster,
        url: `${config.URL.baseURL}${routes.watch_title.path}/${title.code}`,
        locale: 'uk_UA',
        siteName: CONSTS.Domains.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    return metaObject({ title: 'Аніме не знайдено', robots: ['nofollow', 'noindex'] })
  }
}



// Fetch title
export default async function RSC(props: IRSCProps<{ query: string }>) {
  const params = await props.params;

  let title: ITitle | null = null;
  let dubbers: IDubber[] = []
  let episodesDubbed = 0;

  try {
    const { data } = await $api.get<{ title: ITitle, parsedDubbers: IDubber[] | null }>(`/title/${params.query}`, {
      params: {
        detailed: true,
        parseDubbers: true
      }
    });

    title = data.title;
    dubbers = data.parsedDubbers || [];

    if (title.episodes.length) {
      let tmp = 0;

      title.episodes.forEach(el => el.order > tmp ? tmp = el.order : null)

      episodesDubbed = tmp;
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
      console.error(`[${date}]: Server error occured at w/query - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at w/query. See logs at ${date}`} />;
    }
  }

  return <Watch title={title} dubbers={dubbers} episodesDubbed={episodesDubbed} />
}