import { Metadata, NextPage, ResolvingMetadata } from 'next';
import axios, { AxiosError } from 'axios';
import { cookies } from 'next/headers'

import { IRSCProps } from '../../../interfaces/IRSC';
import { config, devMode } from '../../../config';
import { HappenedWrongScreen, NotFoundScreen } from '../../../components/OopsComponents';
import { decodeToken, getUTC, wordDeclination } from '../../../components/handlers';
import { IExtendedUser, IUsapiUser, IUser, IUserLib } from '../../../interfaces/IUser';
import { UserDivider, UserHeader, UserSectionLibs, UserSectionStats, UserSectionTakePart } from './ClientComponents';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoCan, IcoStack, IcoWatched } from '../../../assets/Icons';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { ISessionCookieData } from '../../../interfaces/ITokenData';
import Tooltip from '../../../components/Tooltip';
import { IcoEyeHidden, IcoEyeVisible } from '../../../assets/Eye';

import './styles.scss';

export async function generateMetadata(
  { params }: IRSCProps<{ username: string }>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const { data: usapiUser } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${params.username}`);

    return {
      title: `@${params.username}`,
      description: `Профіль ${params.username}`,
      openGraph: {
        type: 'profile',
        title: `@${params.username}`,
        images: usapiUser.user.photoURL,
        description: `Профіль ${params.username}`
      }
    }
  } catch (e) {
    return {
      title: 'Юзер не знайдений'
    }
  }
}



const RSC: NextPage<IRSCProps<{ username: string }>> = async ({ params }) => {
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
  let user: IExtendedUser | null = null

  try {
    const { data: usapiUser } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${username}`);
    const { data: animeeUser } = await axios.get<IUser>(`${config.URL.apiHTTP}/user/${usapiUser.user.id}`);

    user = Object.assign({ ...animeeUser, ...usapiUser.user })
    isOwner = user!.id === userId;
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

  return (
    <>
      <Header />

      <div className='w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]'>
        <UserHeader user={user!} isOwner={isOwner} primaryPage />

        <div className="wrapperNew gap-[40px]">
          {/* Stats */}
          <div className='grid gap-[16px] grid-cols-4 max-[1554px]:grid-cols-3 max-[1210px]:grid-cols-2 max-[820px]:grid-cols-1'>
            <StatCard value={user?.libs.find(el => el.type === 'favorite')?.titles.length!} label='favs' />
            <StatCard value={user?.libs.find(el => el.type === 'watched')?.titles.length!} label='watched' />
            <StatCard value={user?.libs.find(el => el.type === 'watching')?.titles.length!} label='watching' />
            <StatCard value={user?.statistics.timeSpent!} label='timeSpent' className='max-[1554px]:col-span-3 max-[1210px]:col-auto' />
          </div>

          {/* Libs */}
          <UserSectionLibs user={user!} isOwner={isOwner} />

          {/* Stats */}
          <UserSectionStats user={user!} isOwner={isOwner} />

          {/* Dubs take part */}
          <UserSectionTakePart user={user!} isOwner={isOwner} />
        </div>
      </div>

      <Footer />
    </>
  );

  function StatCard({ label, value, className }: { label: 'favs' | 'watched' | 'watching' | 'timeSpent', value: number, className?: string }) {
    return (
      <div className={`card-grid ${label === 'favs' ? 'gradient--primary' : 'bg-darkGrey'} p-[16px] rounded-[4px] min-w-[360px] max-[600px]:min-w-[260px] flex items-center max-[600px]:flex-col ${className ? className : ''}`}>
        <div className='flex-shrink-0'>
          {label === 'favs' && <IcoHeartFilled width={80} height={80} />}
          {label === 'watched' && <IcoWatched width={80} height={80} />}
          {label === 'watching' && <IcoStack width={80} height={80} />}
          {label === 'timeSpent' && <IcoClockFilled width={80} height={80} />}
        </div>

        <div className='w-full flex flex-col gap-[8px]'>
          <p className='text-white text-[32px] font-bold text-center w-full'>{value}</p>
          <p className='text-white w-full text-center'>
            {label === 'favs' && `${wordDeclination(value, ['Улюблений тайтл', 'Улюблених тайтли', 'Улюблених тайтлів'])}`}
            {label === 'watched' && `${wordDeclination(value, ['Переглянутий тайтл', 'Переглянутих тайтли', 'Переглянутих тайтлів'])}`}
            {label === 'watching' && `${wordDeclination(value, ['Переглядаємий тайтл', 'Переглядаємих тайтли', 'Переглядаємих тайтлів'])}`}
            {label === 'timeSpent' && `${wordDeclination(value, ['Година перегляду', 'Години перегляду', 'Годин перегляду'])}`}
          </p>
        </div>
      </div>
    )
  }
}

export default RSC;