import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import UserLayout from '~/shared/components/UserLayout';
import { TUser } from '~/shared/lib/api/api-types';
import { hasAnyPermission } from '~/shared/lib/auth-lib';
import { getCachedUser } from '~/shared/lib/cached-api';
import { IRSCProps,IUserSettingsPageProps  } from '~/shared/types/PagesParams';
import { HandleMetadataNormalizedError, HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/utils/site-metadata';

import USettingsPage from './USettingsPage';



type PagePropsType = IRSCProps<IUserSettingsPageProps>;



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(props: PagePropsType): Promise<Metadata> {
  const { username } = await props.params;

  const targetUserRes = await getCachedUser(username);
  if (!targetUserRes.success) return HandleMetadataNormalizedError(targetUserRes.error);

  const currentUserRes = await getCachedUser(undefined, true);
  if (!currentUserRes.success) return HandleMetadataNormalizedError(currentUserRes.error);

  await checkRSCPermissions(targetUserRes.response.data.user, currentUserRes.response.data.user);



  return siteMetadata({
    title: `Налаштування @${username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function UserSettingsRSC(props: PagePropsType) {
  const { username } = await props.params;

  const targetUserRes = await getCachedUser(username);
  if (!targetUserRes.success) return HandleServerNormalizedError(targetUserRes.error);
  const targetUser = targetUserRes.response.data.user;

  const currentUserRes = await getCachedUser(undefined, true);
  if (!currentUserRes.success) return HandleServerNormalizedError(currentUserRes.error);

  await checkRSCPermissions(targetUser, currentUserRes.response.data.user);



  return <>
    <UserLayout type="user_settings" user={targetUser} />

    <div className="wrapper pt-[24px] pb-[80px] gap-[24px]">
      <USettingsPage user={targetUser} />
    </div>
  </>;
}



/** 
 * Check user permissions. 
 * 
 * @throws notFound if user is not permitted
 * @returns whether is user is owner
 */
async function checkRSCPermissions(targetUser: TUser, currentUser: TUser) {
  const isOwner = currentUser.id === targetUser.id;
  if (!isOwner && !await hasAnyPermission(['sys:absolute'])) return notFound(); // Throw not found if user is not permitted

  return isOwner;
}