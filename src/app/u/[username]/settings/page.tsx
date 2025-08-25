import { Metadata } from 'next';
import { cache } from 'react';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import StyledButton from '~/components/Styled/StyledButton';
import { H2, P } from '~/components/UI/Typography';
import UserLayout from '~/components/UserLayout';
import { config, metaObject } from '~/config';
import { UserPageProps, UserSettingsPageProps } from '~/interfaces/PagesParams';
import { UserGetByQuery } from '~/interfaces/services/ApiServiceIntf';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/ApiService';
import CheckUserAccess from '~/utils/check-user-access';

import { UserSettingsGroup, UserSettingsLinkTelegram } from './UserSettingsPage';

const getUser = cache(async (query: string): Promise<UserGetByQuery> => {
  return await API.getUser({ query, detailed: true });
});



export async function generateMetadata(
  props: RSCProps<UserPageProps>,
): Promise<Metadata> {
  const { username } = await props.params;

  return metaObject({
    title: `Налаштування @${username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function RSC(props: RSCProps<UserSettingsPageProps>) {
  const params = await props.params;
  const { username } = params;

  try {
    const { user } = await getUser(username);
    const { user: currentUser } = await CheckUserAccess({ session: cookies().get(config.vars.SessionCookie)?.value });

    const isOwner = currentUser?.id === user.id;
    if (!isOwner || !currentUser) return notFound();



    return <>
      <UserLayout type="user_settings" user={user} />

      <div className="wrapper pt-[24px] pb-[80px] gap-[24px]">
        <H2 text={`Налаштування профілю`} size={32} bold />

        <UserSettingsGroup title="Загальна інформація" description="Аватар, юзернейм ...">
          <div className="w-full flex items-center">
            <Link href={`${config.URL.fullkekw_account}/me`} target="_blank">
              <StyledButton as="div">
                <MaterialSymbol icon="account_circle" size={20} className="text-white" />
                <P text={`Редагувати акаунт Fullkekw`} />
              </StyledButton>
            </Link>
          </div>
        </UserSettingsGroup>

        <UserSettingsGroup title={`Під'єднання`}>
          <div className="w-full flex flex-col gap-[8px]">
            <UserSettingsLinkTelegram user={user} />
          </div>
        </UserSettingsGroup>
      </div>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}