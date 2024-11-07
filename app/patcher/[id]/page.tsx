import { AxiosError } from 'axios';
import { Metadata, ResolvingMetadata } from 'next';
import { cookies } from 'next/headers'

import { $api } from '../../../components/http';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { IDubber } from '../../../interfaces/IDubber';
import { IRSCProps } from '../../../interfaces/IRSC';
import { ITitle } from '../../../interfaces/ITitle';
import { IUser } from '../../../interfaces/IUser';
import { TRoleCapability } from '../../../interfaces/IRoles';
import { config, devMode, metaObject } from '../../../config';
import { getUTC } from '../../../components/handlers';

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
  let totalTitles = 0;
  let totalUpdated = 0;
  let user: IUser | null = null
  let capabilities: TRoleCapability[] = [];
  let session = '';

  let pass = false;

  try {
    session = (await cookies()).get(config.vars.SessionCookie)?.value || '';

    const { data: userData } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/*`, {
      params: {
        detailed: true,
        parseRoles: true
      },
      headers: {
        Cookie: (await cookies()).toString()
      }
    });

    user = userData.user;
    capabilities = userData.parsedRoles;
    pass = userData.parsedRoles.includes('root') || userData.parsedRoles.includes('dubber') || userData.parsedRoles.includes('editor');

    if (pass) {
      const { data: titleData } = await $api.get<{ title: ITitle, parsedDubbers: IDubber[] }>(`/title/${params.id}`, {
        params: {
          detailed: true,
          parseDubbers: true
        }
      })

      const { data: totalData } = await $api.get<{ total: number, renewed: number }>(`/title/total`, {
        params: {
          detailed: true
        }
      })

      const { data: totalDubbersData } = await $api.get<{ dubbers: IDubber[] }>(`/dubber/all`)

      totalDubbers = totalDubbersData.dubbers;



      title = titleData.title;
      dubbers = titleData.parsedDubbers;

      totalTitles = totalData.total
      totalUpdated = totalData.renewed
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      devMode ? console.error(e.response?.data) : null;

      if (code === 401 || code === 403) {
        pass = false;
      } else if (code === 404) {
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

  return pass ? <Patcher totalTitles={totalTitles} totalUpdated={totalUpdated} title={title!} dubbers={dubbers} user={user!} capabilities={capabilities} totalDubbers={totalDubbers} session={session} /> : <NotFoundScreen />
}