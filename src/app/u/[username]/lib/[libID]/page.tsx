import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { HandleServerError } from '~/components/Errors';
import { Routes } from '~/routes';
import { NotFoundScreen } from '../../../../../components/Components';
import { decodeToken } from '../../../../../components/handlers';
import { $api } from '../../../../../components/http';
import { config, CONSTS, metaObject } from '../../../../../config';
import { IRSCProps } from '../../../../../interfaces/IRSC';
import { ITitle } from '../../../../../interfaces/ITitle';
import { ISessionCookieData } from '../../../../../interfaces/ITokenData';
import { IUser } from '../../../../../interfaces/IUser';
import { UserHeader } from '../../ClientComponents';

import { UserLib, UserLibOthers } from './ClientComponents';



export async function generateMetadata(
  props: IRSCProps<{ username: string, libID: string }>,
): Promise<Metadata> {
  const cookieData = await cookies();
  const params = await props.params;

  try {
    const { data } = await $api.get<{ user: IUser }>(`/user/${params.username}`, {
      params: {
        detailed: true
      },
      headers: {
        Cookie: cookieData.toString()
      }
    });

    const { user } = data;
    const lib = user.libs.find(el => el.id === params.libID)!;

    const description = lib.settings.hidden ? `🔐 Ця тека приватна` : `${CONSTS.Domains.nekomi}`;
    const label = lib.type === 'favorite' ? 'Улюблені'
      : lib.type === 'delayed' ? 'Відкладені'
        : lib.type === 'plans' ? 'В планах'
          : lib.type === 'watched' ? 'Переглянуті'
            : lib.type === 'watching' ? 'Переглядаю'
              : lib.type === 'custom' ? 'Своя тека'
                : 'Тека невідома';

    return metaObject({
      title: lib.settings.hidden ? `Приватна тека @${user.username}` : `${label} @${user.username}`,
      description,
      robots: ['nofollow', 'noindex'],
      openGraph: {
        title: lib.settings.hidden ? `Приватна тека @${user.username}` : `${label} @${user.username} ― nekomi`,
        description,
        type: 'article',
        locale: 'uk_UA',
        url: `${config.URL.baseURL}${Routes.user_list.path}/${lib.id}`,
        siteName: CONSTS.Domains.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    return metaObject({ title: `Тека не знайдена`, description: `Ця тека не знайдена у @${params.username}`, robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC(props: IRSCProps<{ username: string, libID: string }>) {
  const params = await props.params;

  const { username, libID } = params;
  const token = (await cookies()).get(config.vars.SessionCookie)?.value;

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
        parseLib: libID
      }
    });

    user = data.user;
    isOwner = user.id === userId;
    titles = data.parsedLib;
  } catch (e) {
    return HandleServerError(e)
  }

  const lib = user?.libs.find(el => el.id === params.libID);

  if (!lib) {
    return <NotFoundScreen />
  }

  return (
    <>
      <div className="w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]">
        <UserHeader user={user!} isOwner={isOwner} />

        <div className="wrapper gap-[40px]">
          {/* Lib */}
          <UserLib lib={lib} isOwner={isOwner} titles={titles} />

          {/* Other libs */}
          <UserLibOthers user={user!} isOwner={isOwner} currentLibID={params.libID} />
        </div>
      </div>
    </>
  );
}