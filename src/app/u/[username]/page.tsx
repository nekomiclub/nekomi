
import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import { HandleServerError } from '~/components/Errors';
import { config, DevelopmentMode, metaObject } from '~/config';
import { RSCProps } from '~/interfaces/types';
import { Routes } from '~/routes';
import API from '~/services/ApiService';

import { UserHeader, UserSectionLibs, UserStatItem } from './UserPage';



export interface UserPageProps extends Params {
  username: string
}

export async function generateMetadata(
  props: RSCProps<UserPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  try {
    const { metadata } = await API.getUser({ query: username, metadataOnly: true });

    const description = `Профіль користувача на ${config.DOMAIN.nekomi}`;

    return metaObject({
      title: metadata?.title,
      description,
      openGraph: {
        title: `${metadata?.description} ― nekomi`,
        description,
        type: 'profile',
        images: metadata?.photo,
        username: metadata?.title,
        url: Routes.user.path({ username }),
        locale: 'uk_UA',
        siteName: config.DOMAIN.nekomi.split('.')[0],
      }
    })
  } catch (e) {
    if (DevelopmentMode) console.error(`User page generateMetadata error`, e);

    return metaObject({ title: 'Користувач не знайдений', robots: ['nofollow', 'noindex'] })
  }
}



export default async function RSC(props: RSCProps<UserPageProps>) {
  const params = await props.params;
  const { username } = params;

  try {
    const { user } = await API.getUser({ query: username, detailed: true });

    return <div className="w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]">
      <UserHeader user={user} primaryPage />

      <div className="wrapper gap-[40px]">
        <div className="flex gap-[16px] overflow-x-auto ui-hideScroll">
          <UserStatItem value={user?.libs.find(el => el.type === 'favorite')?.titles.length!} label="favs" />
          <UserStatItem value={user?.libs.find(el => el.type === 'watched')?.titles.length!} label="watched" />
          <UserStatItem value={user?.libs.find(el => el.type === 'watching')?.titles.length!} label="watching" />
          <UserStatItem value={Math.floor(user?.statistics.viewtime / 60 / 60)} label="viewtime" />
        </div>

        <UserSectionLibs user={user} />
        {/* <UserSectionWTRooms user={user} /> */}
      </div>
    </div>
  } catch (e) {
    return HandleServerError(e)
  }
}