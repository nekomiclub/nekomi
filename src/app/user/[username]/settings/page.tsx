import { Metadata } from 'next';
import { cache } from 'react';
import { notFound } from 'next/navigation';

import UserLayout from '~/components/UserLayout';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { IUserPageProps, IUserSettingsPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import API from '~/shared/lib/api';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import CheckUserAccess from '~/utils/check-user-access';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';

import USettingsPage from './USettingsPage';



const getCachedUser = cache(async (query: string) => {
  return await API.User.getUserByQuery({
    params: {
      qr: query
    },
    searchParams: {
      is_extended: true
    }
  });
});



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata({ params, searchParams }: IRSCProps<IUserPageProps>,): Promise<Metadata> {
  const { username } = await params;

  const userRes = await getCachedUser(username);
  if (!userRes.success) {
    if (userRes.error.status === 404) return siteMetadata({
      title: `Користувач не знайдений`,
      robots: ['nofollow', 'noindex']
    });

    return siteMetadata({
      title: `Щось пішло не так ...`,
      robots: ['nofollow', 'noindex']
    });
  }

  return siteMetadata({
    title: `Налаштування @${username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function RSC({ params }: IRSCProps<IUserSettingsPageProps>) {
  const { username } = await params;
  const session = await getSessionToken();

  const userRes = await getCachedUser(username);
  if (!userRes.success) return HandleServerNormalizedError(userRes.error);

  const user = userRes.response.data.user;
  const { user: currentUser, permissions: capabilities } = await CheckUserAccess({ session });

  const isOwner = currentUser?.id === user.id;
  if (!isOwner && !capabilities?.includes(ROLE_PERMISSION.ABSOLUTE) /* && !capabilities?.includes('admn') && !capabilities?.includes('mod') */) return notFound();



  return <>
    <UserLayout type="user_settings" user={user} />

    <div className="wrapper pt-[24px] pb-[80px] gap-[24px]">
      <USettingsPage user={user} />
    </div>
  </>;
}