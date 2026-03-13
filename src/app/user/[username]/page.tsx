import '~/styles/pages/user-page.scss';

import { Metadata } from 'next';
import { MaterialSymbol } from 'material-symbols-rc';

import { HandleServerError } from '~/components/Errors';
import { StyledM } from '~/components/styled/StyledText';
import Tooltip from '~/components/Tooltip';
import UserLayout from '~/components/UserLayout';
import { conf, DevelopmentMode } from '~/conf';
import { IUserLib } from '~/interfaces/IUser';
import { IUserPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import routes from '~/routes';
import { getCachedUser } from '~/services/CachedAPI';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';
import { getUTC, timestampToDayMonth, wordDeclination } from '~/utils/utils';

import { UserLibItem, UserStatisticsItem, UserTitle } from './_components/UserUI';



export async function generateMetadata(
  props: IRSCProps<IUserPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username } = params;

  try {
    const user = await getCachedUser(username, await getSessionToken());
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
  } catch (e) {
    if (DevelopmentMode) console.error(`User page generateMetadata error`, e);

    return siteMetadata({ title: 'Користувач не знайдений', robots: ['nofollow', 'noindex'] });
  }
}



export default async function UserPageRSC(props: IRSCProps<IUserPageProps>) {
  const params = await props.params;
  const { username } = params;



  try {
    const user = await getCachedUser(username, await getSessionToken());
    const libs = user.libs ?? [];

    const animeSeen = libs.find(el => el.type === 'watched')?.anime_ids.length ?? 0;
    const viewtime = Math.floor(user.total_viewtime / 60 / 60);
    const daysOnNekomi = Math.round((getUTC().timestamp - getUTC(user.created_at).timestamp) / 60000 / 60 / 24);

    const sortedLibs: IUserLib[] = [
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
  } catch (e) {
    return HandleServerError(e);
  }
}