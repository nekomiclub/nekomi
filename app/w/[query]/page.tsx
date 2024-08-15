import { NextPage, Metadata, ResolvingMetadata } from "next";
import axios, { AxiosError } from "axios";

import Watch from "./Watch";

import { ITitle } from "../../../interfaces/ITitle";
import { config, devMode } from "../../../config";
import { IDubber } from "../../../interfaces/IDubber";
import { getUTC } from "../../../components/handlers";
import { IRSCProps } from "../../../interfaces/IRSC";
import { $api } from "../../../components/http";
import { HappenedWrongScreen, NotFoundScreen } from "../../../components/Components";



export async function generateMetadata(
  { params }: IRSCProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const res = await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${params.query}`)
    const data = res.data.title

    return {
      title: data.names.ukr || data.names.eng,
      description: data.description,
      metadataBase: new URL(`https://api.animee.club`),
      keywords: [data.names.ukr, data.names.eng, ...data.names.alt || []],
      openGraph: {
        title: `${data.names.ukr || data.names.eng} на animee`,
        description: data.description,
        url: `https://animee.club/w/${data.code}`,
        siteName: 'Animee',
        type: 'video.tv_show',
        images: data.poster
      }
    }
  } catch (e) {
    return {
      title: 'Аніме не знайдено'
    }
  }
}



// Fetch title
export default async function RSC({ params }: IRSCProps<{ query: string }>) {
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