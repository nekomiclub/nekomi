import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import UserLayout from '~/components/UserLayout';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { IUserPageProps, IUserSettingsPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import { getCachedUser } from '~/services/CachedAPI';
import CheckUserAccess from '~/utils/check-user-access';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';

import USettingsPage from './USettingsPage';



export async function generateMetadata({ params, searchParams }: IRSCProps<IUserPageProps>,): Promise<Metadata> {
  const { username } = await params;

  try {
    await getCachedUser(username);

    return siteMetadata({
      title: `Налаштування @${username}`,
      robots: ['nofollow', 'noindex']
    });
  } catch (e) {
    return siteMetadata({
      title: `Акаунта не існує`,
      robots: ['nofollow', 'noindex']
    });
  }
}



export default async function RSC({ params }: IRSCProps<IUserSettingsPageProps>) {
  const { username } = await params;
  const session = await getSessionToken();

  try {
    const user = await getCachedUser(username, session);
    const { user: currentUser, permissions: capabilities } = await CheckUserAccess({ session });

    const isOwner = currentUser?.id === user.id;
    if (!isOwner && !capabilities?.includes(ROLE_PERMISSION.ABSOLUTE) /* && !capabilities?.includes('admn') && !capabilities?.includes('mod') */) return notFound();



    return <>
      <UserLayout type="user_settings" user={user} />

      <div className="wrapper pt-[24px] pb-[80px] gap-[24px]">
        <USettingsPage user={user} />
      </div>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}