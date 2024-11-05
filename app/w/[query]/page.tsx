import { Metadata, ResolvingMetadata } from "next";
import axios, { AxiosError } from "axios";

import Watch from "./Watch";

import { ITitle } from "../../../interfaces/ITitle";
import { config, CONSTS, devMode } from "../../../config";
import { IDubber } from "../../../interfaces/IDubber";
import { getUTC } from "../../../components/handlers";
import { IRSCProps } from "../../../interfaces/IRSC";
import { $api } from "../../../components/http";
import { HappenedWrongScreen, NotFoundScreen } from "../../../components/Components";



export async function generateMetadata(
  props: IRSCProps,
): Promise<Metadata> {
  const params = await props.params;

  try {
    const { data } = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${params.query}`)
    const { title } = data

    return {
      title: `${title.names.ukr} — nekomi`,
      description: title.description,
      keywords: [title.names.ukr, title.names.eng, ...title.names.alt || [], 'дивитись аніме українською'],
      openGraph: {
        title: `${title.names.ukr} — nekomi`,
        description: title.description,
        url: `https://${CONSTS.Domains.nekomi}/w/${title.code}`,
        siteName: CONSTS.Domains.nekomi,
        type: 'video.tv_show',
        images: title.poster
      }
    }
  } catch (e) {
    return {
      title: 'Аніме не знайдено',
      description: ''
    }
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