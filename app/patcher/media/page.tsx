import { NextPage } from 'next';
import { ILayoutProps, IRSCProps } from '../../../interfaces/IRSC';
import { cookies } from 'next/headers';
import { config, devMode } from '../../../config';
import { IUser } from '../../../interfaces/IUser';
import { TRoleCapability } from '../../../interfaces/IRoles';
import { $api } from '../../../components/http';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/Components';
import { AxiosError } from 'axios';
import { getUTC } from '../../../components/handlers';
import { MediaClient } from './Client';

const RSC: NextPage<IRSCProps> = async () => {
  let user: IUser | undefined = undefined
  let capabilities: TRoleCapability[] = []
  let pass = false

  try {
    const { data: userData } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/*`, {
      params: {
        detailed: true,
        parseRoles: true
      },
      headers: {
        Cookie: cookies().toString()
      }
    });

    user = userData.user;
    capabilities = userData.parsedRoles;
    pass = userData.parsedRoles.includes('root');
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

  if (!pass) return <NotFoundScreen />

  return <MediaClient user={user!} />;
}

export default RSC;