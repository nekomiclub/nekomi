import { Metadata, ResolvingMetadata } from 'next';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import { CheckUserAccess } from '~/helpers/Authorization';
import { Routes } from '~/routes';
import { $api } from '../../../components/http';
import { config, metaObject } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';
import { IRSCProps } from '../../../interfaces/IRSC';
import { ITitle } from '../../../interfaces/ITitle';

import Patcher from './Patcher';



export async function generateMetadata(
  props: IRSCProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;

  try {
    const { data } = await $api.get<{ title: ITitle }>(`/title/${params.id}`)
    const { title } = data;

    return metaObject({
      title: `${title.names.ukr} - патчер`,
      robots: ['nofollow', 'noindex']
    })
  } catch (e) {
    return metaObject({ title: '404' })
  }
}



// Fetch title
export default async function RSC(props: IRSCProps<{ id: string }>) {
  const params = await props.params;

  let title: ITitle | null = null;
  let dubbers: IDubber[] = [];
  let totalDubbers: IDubber[] = [];
  let totalTitles = -1;
  let totalUpdated = -1;

  let session = cookies().get(config.vars.SessionCookie)?.value ?? '';

  const { user } = await CheckUserAccess({ capabilities: ['titleEdit', 'seriesAdd'], checkMode: 'OR', session })
  if (!user) return redirect(Routes.home.path);

  try {
    const { data: titleData } = await $api.get<{ title: ITitle, parsedDubbers: IDubber[] }>(`/title/${params.id}`, {
      params: {
        detailed: true,
        parseDubbers: true
      }
    })

    // const { data: totalData } = await $api.get<{ total: number, renewed: number }>(`/title/total`, {
    //   params: {
    //     detailed: true
    //   }
    // })

    const { data: totalDubbersData } = await $api.get<{ dubbers: IDubber[] }>(`/dubber/all`)

    totalDubbers = totalDubbersData.dubbers;



    title = titleData.title;
    dubbers = titleData.parsedDubbers;

    // totalTitles = totalData.total
    // totalUpdated = totalData.renewed
  } catch (e) {
    return HandleServerError(e)
  }

  return <Patcher totalTitles={totalTitles} totalUpdated={totalUpdated} title={title!} dubbers={dubbers} totalDubbers={totalDubbers} session={session} />
}