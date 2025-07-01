
import { cache } from 'react';
import { Metadata } from 'next';

import { HandleServerError } from '~/components/Errors';
import { config, DevelopmentMode, metaObject } from '~/config';
import { UserPageProps } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import { Routes } from '~/routes';
import API from '~/services/ApiService';

import { UserHeader, UserSectionLibs, UserStatItem } from './UserPage';



const getUser = cache(async (query: string) => {
  return await API.getUser({ query, detailed: true });
})



export async function generateMetadata(
  props: RSCProps<UserPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  try {
    const { user } = await getUser(username)
    const title = `@${user.username}`
    const description = `Профіль користувача`

    return metaObject({
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'profile',
        images: user.avatar,
        username: user.username,
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
    const { user } = await getUser(username)

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