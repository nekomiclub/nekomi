import { Metadata, NextPage, ResolvingMetadata } from 'next';
import { cookies } from 'next/headers';
import axios, { AxiosError } from 'axios';

import { IRSCProps } from '../../../../../interfaces/IRSC';
import { config, devMode } from '../../../../../config';
import { decodeToken, getUTC } from '../../../../../components/handlers';
import { ISessionCookieData } from '../../../../../interfaces/ITokenData';
import { IUsapiUser, IUser } from '../../../../../interfaces/IUser';
import { HappenedWrongScreen, NotFoundScreen } from '../../../../../components/Components';
import { UserHeader } from '../../ClientComponents';
import { UserLib, UserLibOthers } from './ClientComponents';
import { ITitle } from '../../../../../interfaces/ITitle';
import { $api } from '../../../../../components/http';



export const metadata: Metadata = {
  title: 'Тека — animee',
  description: 'Чиясь тека з тайтлами',
  robots: 'none',
  openGraph: {
    title: `Тека — animee`,
    description: `Чиясь тека з тайтлами`,
  }
}



const RSC: NextPage<IRSCProps<{ id: string, username: string }>> = async ({ params }) => {
  const { username, id } = params;
  const token = cookies().get(config.vars.animeeCookie)?.value;

  let userId = '';
  let isOwner = false;
  let user: IUser | null = null
  let titles: ITitle[] = [];

  // Get current user ID by token
  if (token) {
    try {
      userId = decodeToken<ISessionCookieData>(token).payload.userId;
    } catch (e) { }
  }

  try {
    const { data } = await $api.get<{ user: IUser, parsedLib: ITitle[] }>(`/user/${username}`, {
      params: {
        detailed: true,
        parseLib: id
      }
    });

    user = data.user;
    isOwner = user.id === userId;
    titles = data.parsedLib;
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

  const lib = user?.libs.find(el => el.id === params.id);

  if (!lib) {
    return <NotFoundScreen />
  }

  return (
    <>
      <div className='w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]'>
        <UserHeader user={user!} isOwner={isOwner} />

        <div className="wrapper gap-[40px]">
          {/* Lib */}
          <UserLib lib={lib} isOwner={isOwner} titles={titles} />

          {/* Other libs */}
          <UserLibOthers user={user!} isOwner={isOwner} currentLibID={params.id} />
        </div>
      </div>
    </>
  );
}

export default RSC;