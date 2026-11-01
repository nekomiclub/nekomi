import '~/styles/pages/user-page.scss';

import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import { conf } from '~/conf';
import routes from '~/routes';
import { StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import UserLayout from '~/shared/components/UserLayout';
import API from '~/shared/lib/api';
import { TUserLib } from '~/shared/lib/api/api-types';
import { IRSCProps,IUserPageProps  } from '~/shared/types/PagesParams';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/utils/site-metadata';
import { getUTC, timestampToDayMonth, wordDeclination } from '~/utils/utils';

import { UserLibItem, UserStatisticsItem, UserTitle } from './_components/UserUI';



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
export async function generateMetadata(
  props: IRSCProps<IUserPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  const userRes = await getCachedUser(username);
  if (!userRes.success) {
    if (userRes.error.status === 404) return siteMetadata({ title: 'Користувач не знайдений', robots: ['nofollow', 'noindex'] });

    return siteMetadata({ title: 'Щось пішло не так ...', robots: ['nofollow', 'noindex'] });
  }

  const user = userRes.response.data.user;
  const title = `@${user.username}`;
  const description = `Профіль користувача`;

  return siteMetadata({
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      images: user.avatar,
      username: user.username,
      url: routes.user.path({ username }),
      locale: 'uk_UA',
      siteName: conf.domain.split('.')[0],
    }
  });
}



export default async function UserPageRSC(props: IRSCProps<IUserPageProps>) {
  const params = await props.params;
  const { username } = params;

  const userRes = await getCachedUser(username);
  if (!userRes.success) return HandleServerNormalizedError(userRes.error);

  const user = {
    ...userRes.response.data.user,
    ...userRes.response.data.user_extended!
  };
  const libs = user.libs ?? [];

  const animeSeen = libs.find(el => el.type === 'watched')?.anime_ids.length ?? 0;
  const viewtime = Math.floor(user.total_viewtime / 60 / 60);
  const daysOnNekomi = Math.round((getUTC().timestamp - getUTC(user.created_at).timestamp) / 60000 / 60 / 24);

  const sortedLibs: TUserLib[] = [
    libs.find(el => el.type === 'favorite'),
    libs.find(el => el.type === 'watching'),
    libs.find(el => el.type === 'watched'),
    libs.find(el => el.type === 'plans'),
    libs.find(el => el.type === 'delayed')
  ].filter(el => el !== undefined);



  return <>
    <UserLayout type="user_profile" user={user} />

    <div className="wrapper pt-[24px] gap-[24px]">
      <div className="flex gap-[8px] w-full overflow-x-auto ui-hideScroll">
        <UserStatisticsItem animeSeen={animeSeen} />
        <UserStatisticsItem viewtime={viewtime} />
      </div>

      {libs.length !== 0 && <div className="flex flex-col gap-[16px]" id="user-libs">
        <UserTitle title="Теки" />

        <div className="flex flex-wrap gap-[8px]">
          {sortedLibs.map(lib => {
            return <UserLibItem lib={lib} user={user} key={`user-libitem--${lib.id}`} />;
          })}
        </div>
      </div>}

      <div className="flex items-center gap-[8px]">
        <MaterialSymbol icon="calendar_month" size={16} className="text-grey-new" />
        <Tooltip content={`Акаунт зареєстровано: ${timestampToDayMonth(getUTC(user.created_at).timestamp)}`}>
          <StyledM text={`${daysOnNekomi} ${wordDeclination(daysOnNekomi, ['день', 'дні', 'днів'])} на nekomi!`} className="text-[12px]" color="text-muted" />
        </Tooltip>
      </div>
    </div>
  </>;
}