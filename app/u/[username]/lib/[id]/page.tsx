import { Metadata, NextPage, ResolvingMetadata } from 'next';
import { IRSCProps } from '../../../../../interfaces/IRSC';
import { cookies } from 'next/headers';
import { config, devMode } from '../../../../../config';
import { decodeToken, getUTC } from '../../../../../components/handlers';
import { ISessionCookieData } from '../../../../../interfaces/ITokenData';
import { IUsapiUser, IUser } from '../../../../../interfaces/IUser';
import axios, { AxiosError } from 'axios';
import { HappenedWrongScreen, NotFoundScreen } from '../../../../../components/Components';
import Header from '../../../../../components/Header';
import Footer from '../../../../../components/Footer';
import { UserHeader } from '../../ClientComponents';
import { UserLib, UserLibOthers } from './ClientComponents';
import { ITitle } from '../../../../../interfaces/ITitle';
import { $api } from '../../../../../components/http';

export function generateMetadata(
  { params }: IRSCProps<{ username: string }>,
  parent: ResolvingMetadata
): Metadata {
  return {
    title: `Тека @${params.username}`,
    description: ``,
    openGraph: {
      title: `Тека @${params.username}`,
      description: ``
    },
    robots: 'noindex,nofollow'
  }
}

const RSC: NextPage<IRSCProps<{ id: string, username: string }>> = async ({ params }) => {
  const { username } = params;
  const token = cookies().get(config.vars.animeeCookie)?.value;

  let userId = '';

  if (token) {
    try {
      userId = decodeToken<ISessionCookieData>(token).payload.userId;
    } catch (e) {

    }
  }

  let isOwner = false;
  let user: IUser | null = null

  try {
    const { data } = await $api.get<{ user: IUser }>(`/user/${username}?detailed=true`);

    user = data.user;
    isOwner = user.id === userId;
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

  const titles: ITitle[] = [];

  for (const i in lib.titles) {
    const id = lib.titles[i];

    try {
      titles.push((await axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${id}`)).data.title)
    } catch (e) {
      if (e instanceof AxiosError) {
        devMode ? console.error(e?.response?.data) : null
      } else {
        devMode ? console.error(e) : null
      }
    }
  }

  return (
    <>
      <Header />

      <div className='w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]'>
        <UserHeader user={user!} isOwner={isOwner} />

        <div className="wrapper gap-[40px]">
          {/* Lib */}
          <UserLib lib={lib} isOwner={isOwner} titles={titles} />

          {/* Other libs */}
          <UserLibOthers user={user!} isOwner={isOwner} currentLibID={params.id} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RSC;