import { AxiosError } from 'axios';
import { NextPage } from 'next';
import { cookies } from 'next/headers'

import { IRSCProps } from '../../../interfaces/IRSC';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { getUTC } from '../../../components/handlers';
import { devMode } from '../../../config';
import { ITitle } from '../../../interfaces/ITitle';
import { $api } from '../../../components/http';
import { IUser } from '../../../interfaces/IUser';
import { TRoleCapability } from '../../../interfaces/IRoles';
import Patcher from './Patcher';
import { IDubber } from '../../../interfaces/IDubber';

// Fetch title
export default async function RSC({ params }: IRSCProps<{ id: string }>) {
  let title: ITitle | null = null;
  let dubbers: IDubber[] = [];
  let isEditor = false;
  let totalTitles = 0;
  let totalUpdated = 0;
  let user: IUser | null = null
  let capabilities: TRoleCapability[] = [];

  let pass = false;

  try {
    const { data: userData } = await $api.get<{ user: IUser, parsedCapabilities: TRoleCapability[] }>(`/user/*`, {
      params: {
        detailed: true
      },
      headers: {
        Cookie: cookies().toString()
      }
    });

    user = userData.user;
    capabilities = userData.parsedCapabilities;

    isEditor = userData.parsedCapabilities.includes('root') || userData.parsedCapabilities.includes('editor');
    pass = userData.parsedCapabilities.includes('dubber') || isEditor;

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

  return pass ? <Patcher totalTitles={totalTitles} totalUpdated={totalUpdated} isEditor={isEditor} title={title!} dubbers={dubbers} user={user!} capabilities={capabilities} /> : <NotFoundScreen />
}