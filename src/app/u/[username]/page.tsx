import axios from 'axios';
import { Metadata } from 'next';
import { cookies } from 'next/headers'

import { HandleServerError } from '~/components/Errors';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoStack, IcoWatched } from '../../../assets/Icons';
import { decodeToken, wordDeclination } from '../../../components/handlers';
import { $api } from '../../../components/http';
import { config, CONSTS, metaObject } from '../../../config';
import { IRSCProps } from '../../../interfaces/IRSC';
import { ISessionCookieData } from '../../../interfaces/ITokenData';
import { IUser } from '../../../interfaces/IUser';
import { routes } from '../../../routes';

import { UserHeader, UserSectionLibs, UserSectionWTRooms } from './ClientComponents';

export async function generateMetadata(
  props: IRSCProps<{ username: string }>,
): Promise<Metadata> {
  const params = await props.params;

  try {
    const { data } = await axios.get<{ user: IUser }>(`${config.URL.apiHTTP}/user/${params.username}`);
    const { user } = data;

    const description = `Профіль юзера на ${CONSTS.Domains.nekomi}`;

    return metaObject({
      title: `@${user.username}`,
      description,
      openGraph: {
        title: `Профіль @${user.username} ― nekomi`,
        description,
        type: 'profile',
        images: user.avatar,
        username: user.username,
        url: `${config.URL.baseURL}${routes.user_profile.path}/${user.username}`,
        locale: 'uk_UA',
        siteName: CONSTS.Domains.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    return metaObject({ title: 'Юзер не знайдений', robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC(props: IRSCProps<{ username: string }>) {
  const params = await props.params;

  const { username } = params;
  const token = (await cookies()).get(config.vars.SessionCookie)?.value;

  let userId = '';
  let isOwner = false;
  let user: IUser | null = null

  // Get current user ID by token
  if (token) {
    try {
      userId = decodeToken<ISessionCookieData>(token).payload.userId;
    } catch (e) { }
  }

  try {
    const { data } = await $api.get<{ user: IUser }>(`/user/${username}?detailed=true`);

    user = data.user;
    isOwner = user.id === userId;
  } catch (e) {
    return HandleServerError(e)
  }

  return (
    <>
      <div className="w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]">
        <UserHeader user={user!} isOwner={isOwner} primaryPage />

        <div className="wrapper gap-[40px]">
          {/* Stats */}
          <div className="flex gap-[16px] overflow-x-auto ui-hideScroll">
            <StatCard value={user?.libs.find(el => el.type === 'favorite')?.titles.length!} label="favs" />
            <StatCard value={user?.libs.find(el => el.type === 'watched')?.titles.length!} label="watched" />
            <StatCard value={user?.libs.find(el => el.type === 'watching')?.titles.length!} label="watching" />
            <StatCard value={Math.floor(user?.statistics.viewtime / 60 / 60)} label="viewtime" />
          </div>

          {/* Libs */}
          <UserSectionLibs user={user!} isOwner={isOwner} />

          <UserSectionWTRooms user={user!} isOwner={isOwner} />
        </div>
      </div>
    </>
  );

  function StatCard({ label, value, className }: { label: 'favs' | 'watched' | 'watching' | 'viewtime', value: number, className?: string }) {
    return (
      <div className={`grow basis-[280px] min-w-[280px] ${label === 'favs' ? 'gradient--primary' : 'bg-darkGrey'} p-[16px] rounded-[4px] flex items-center gap-[8px] ${className ? className : ''}`}>
        <div className="flex-shrink-0">
          {label === 'favs' && <IcoHeartFilled width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
          {label === 'watched' && <IcoWatched width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
          {label === 'watching' && <IcoStack width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
          {label === 'viewtime' && <IcoClockFilled width={80} height={80} className="max-sm:h-[64px] max-sm:w-[64px]" />}
        </div>

        <div className="w-full flex flex-col gap-[8px]">
          <p className="text-white text-[32px] font-bold text-center w-full max-sm:text-[24px]">{value}</p>
          <p className="text-white w-full text-center">
            {label === 'favs' && `${wordDeclination(value, ['Улюблений тайтл', 'Улюблених тайтли', 'Улюблених тайтлів'])}`}
            {label === 'watched' && `${wordDeclination(value, ['Переглянутий тайтл', 'Переглянутих тайтли', 'Переглянутих тайтлів'])}`}
            {label === 'watching' && `${wordDeclination(value, ['Переглядаємий тайтл', 'Переглядаємих тайтли', 'Переглядаємих тайтлів'])}`}
            {label === 'viewtime' && `${wordDeclination(value, ['Година перегляду', 'Години перегляду', 'Годин перегляду'])}`}
          </p>
        </div>
      </div>
    )
  }
}