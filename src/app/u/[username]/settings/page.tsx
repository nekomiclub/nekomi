import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import StyledButton from '~/components/Styled/StyledButton';
import { H2, P } from '~/components/UI/Typography';
import UserLayout from '~/components/UserLayout';
import { conf } from '~/conf';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { UserPageProps, UserSettingsPageProps } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import { getCachedUser, getSessionToken } from '~/services/CachedAPI';
import CheckUserAccess from '~/utils/check-user-access';
import siteMetadata from '~/utils/site-metadata';

import { UserSettingsGroup } from './UserSettingsPage';



export async function generateMetadata({ params, searchParams }: RSCProps<UserPageProps>,): Promise<Metadata> {
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



export default async function RSC({ params }: RSCProps<UserSettingsPageProps>) {
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
        <H2 text={`Налаштування профілю`} size={32} bold />

        <UserSettingsGroup title="Загальна інформація" description="Аватар, юзернейм ...">
          <div className="w-full flex items-center">
            <Link href={`${conf.URL.fullkekw_account}/me`} target="_blank">
              <StyledButton as="div">
                <MaterialSymbol icon="account_circle" size={20} className="text-white" />
                <P text={`Редагувати акаунт Fullkekw`} />
              </StyledButton>
            </Link>
          </div>
        </UserSettingsGroup>

        {/* <UserSettingsGroup title={`Під'єднання`}>
          <div className="w-full flex flex-col gap-[8px]">
            <UserSettingsLinkTelegram user={user} />
          </div>
        </UserSettingsGroup> */}
      </div>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}