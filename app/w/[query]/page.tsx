import { NextPage, Metadata, ResolvingMetadata } from "next";
import { ITitle } from "../../../interfaces/ITitle";
import NotFound from "@/oops/404/page";
import Watch from "./Watch";
import { config, devMode } from "../../../config";
import axios from "axios";
import { IDubber } from "../../../interfaces/IDubber";
import { parseTitleDubbers } from "../../../components/handlers";

interface IProps {
  params: { query: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: IProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data } = await axios.get<ITitle>(`${config.services.apiURL}/v1/title/${params.query}`)

    return {
      title: `Дивитись ${data.names.ukr || data.names.eng} на animee`,
      description: data.description,
      metadataBase: new URL(`https://api.animee.club`),
      keywords: [data.names.ukr, data.names.eng],
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


const RSC: NextPage<IProps> = async ({ params, searchParams }) => {
  let title: ITitle | null = null;
  let isErrored = false;
  let totalEps = 0;
  let dubbers: IDubber[] | null = null

  try {
    const { data: payload } = await axios.get<ITitle>(`${config.services.apiURL}/v1/title/${params.query}`)

    title = payload;

    payload.dubs?.forEach(dub => {
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