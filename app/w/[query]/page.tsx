import { NextPage, Metadata, ResolvingMetadata } from "next";
import { ITitle } from "../../../interfaces/ITitle";
import NotFound from "@/oops/404/page";
import Watch from "./Watch";
import { config, devMode } from "../../../config";
import axios from "axios";
import { IDubber } from "../../../interfaces/IDubber";
import { parseTitleDubbers } from "../../../components/handlers";
import { IRSCProps } from "../../../interfaces/IRSC";
import { $api } from "../../../components/http";

export async function generateMetadata(
  { params, searchParams }: IRSCProps<{ query: string }>,
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
    devMode ? console.error(e) : null;

    return {
      title: 'Аніме не знайдено'
    }
  }
}



// Fetch title
const RSC: NextPage<IRSCProps<{ query: string }>> = async ({ params, searchParams }) => {
  let title: ITitle | null = null;
  let isErrored = false;
  let totalEps = 0;
  let dubbers: IDubber[] | null = null

  try {
    const res = await $api.get<{ title: ITitle }>(`/title/${params.query}`)

    title = res.data.title;

    title.dubs?.forEach(dub => {
      if (dub.eps.length > totalEps) totalEps = dub.eps.length;
    })

    if (title.dubs?.length) {
      dubbers = await parseTitleDubbers(title.dubs!.map(el => el.id))
    } else {
      dubbers = null
    }
  } catch (e) {
    devMode ? console.error(e) : null;
    isErrored = true;
  }

  return isErrored ? <NotFound /> : <Watch title={title!} dubbers={dubbers} totalEps={totalEps} />
}

export default RSC;