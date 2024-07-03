import { NextPage, Metadata, ResolvingMetadata } from "next";
import { ITitle } from "../../../interfaces/ITitle";
import Watch from "./Watch";
import { config, devMode } from "../../../config";
import axios, { AxiosError } from "axios";
import { IDubber } from "../../../interfaces/IDubber";
import { getUTC } from "../../../components/handlers";
import { IRSCProps } from "../../../interfaces/IRSC";
import { $api } from "../../../components/http";
import { HappenedWrongScreen, NotFoundScreen } from "../../../components/OopsComponents";

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
  let totalEps = 0;
  let dubbers: IDubber[] = []

  try {
    const { data } = await $api.get<{ title: ITitle }>(`/title/${params.query}?detailed=true`)

    title = data.title;

    title.episodes.forEach(ep => {
      if (ep.order > totalEps) totalEps = ep.order;
    })

    if (title.episodes.length) {
      const uniqueDubbers: string[] = []

      title.episodes.forEach(ep => uniqueDubbers.includes(ep.dubberID) ? null : uniqueDubbers.push(ep.dubberID))

      const { data } = await $api.post<{ results: IDubber[] }>(`/v1/dubber/parse`, {
        queries: uniqueDubbers
      })

      dubbers = data.results
    } else {
      dubbers = []
    }

    if (title.episodesCount === null) {
      let maxEp = 0;

      title.episodes.forEach(ep => {
        if (ep.order > maxEp) maxEp = ep.order;
      })

      title.episodesCount = maxEp;
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

  return <Watch title={title!} dubbers={dubbers} totalEps={totalEps} />
}