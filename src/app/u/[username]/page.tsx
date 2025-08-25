import '~/styles/pages/user.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleServerError } from '~/components/Errors';
import Tooltip from '~/components/UI/Tooltip';
import { P } from '~/components/UI/Typography';
import UserLayout from '~/components/UserLayout';
import { config, DevelopmentMode, metaObject } from '~/config';
import { UserPageProps } from '~/interfaces/PagesParams';
import { UserGetByQuery } from '~/interfaces/services/ApiServiceIntf';
import { RSCProps } from '~/interfaces/types';
import { UserLib } from '~/interfaces/UserIntf';
import { Routes } from '~/routes';
import API from '~/services/ApiService';
import { getUTC, timestampToDayMonth, wordDeclination } from '~/utils/utils';

import { UserLibItem, UserStatisticsItem, UserTitle } from './UserPage';




const getUser = cache(async (query: string): Promise<UserGetByQuery> => {
  return await API.getUser({ query, detailed: true });
});



export async function generateMetadata(
  props: RSCProps<UserPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  try {
    const { user } = await getUser(username);
    const title = `@${user.username}`;
    const description = `Профіль користувача`;

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
    });
  } catch (e) {
    if (DevelopmentMode) console.error(`User page generateMetadata error`, e);

    return metaObject({ title: 'Користувач не знайдений', robots: ['nofollow', 'noindex'] });
  }
}



export default async function RSC(props: RSCProps<UserPageProps>) {
  const params = await props.params;
  const { username } = params;

  try {
    const { user } = await getUser(username);

    const animeSeen = user.libs.find(el => el.type === 'watched')?.titles.length ?? 0;
    const viewtime = Math.floor(user.statistics.viewtime / 60 / 60);
    const hasVisibleLibs = user.libs.some(el => !el.settings.hidden);
    const daysOnNekomi = Math.round((getUTC().timestamp - user.statistics.accountCreated) / 60000 / 60 / 24);

    const sortedLibs: UserLib[] = [
      user.libs.find(el => el.type === 'favorite'),
      user.libs.find(el => el.type === 'watching'),
      user.libs.find(el => el.type === 'watched'),
      user.libs.find(el => el.type === 'plans'),
      user.libs.find(el => el.type === 'delayed'),
      ...user.libs.filter(el => el.type === 'custom')
    ].filter(el => el !== undefined);



    return <>
      <UserLayout type="user_profile" user={user} />

      <div className="wrapper pt-[24px] gap-[24px]">
        <div className="flex gap-[8px] w-full overflow-x-auto ui-hideScroll">
          <UserStatisticsItem animeSeen={animeSeen} />
          <UserStatisticsItem viewtime={viewtime} />
        </div>

        {hasVisibleLibs && <div className="flex flex-col gap-[16px]">
          <UserTitle title="Теки" />

          <div className="flex flex-wrap gap-[8px]">
            {sortedLibs.map(lib => {
              return <UserLibItem lib={lib} user={user} key={`user-libitem--${lib.id}`} />;
            })}
          </div>
        </div>}

        <div className="flex items-center gap-[8px]">
          <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
          <Tooltip content={`Акаунт зареєстровано: ${timestampToDayMonth(user.statistics.accountCreated)}`}>
            <P text={`${daysOnNekomi} ${wordDeclination(daysOnNekomi, ['день', 'дні', 'днів'])} на nekomi!`} size={12} className="text-grey-new" />
          </Tooltip>
        </div>
      </div>
    </>;
  } catch (e) {
    return HandleServerError(e);
  }
}