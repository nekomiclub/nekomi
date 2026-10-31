import { Metadata } from 'next';
import { cache } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import { notFound } from 'next/navigation';

import { UserLibItem } from '~/app/user/[username]/_components/UserUI';
import AnimeItem from '~/components/AnimeItem';
import { StyledH2, StyledH3, StyledM } from '~/components/styled/StyledText';
import Tooltip from '~/components/Tooltip';
import UserLayout from '~/components/UserLayout';
import { IUserLibPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import API from '~/shared/lib/api';
import { TUserLib } from '~/shared/lib/api/api-types';
import { HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import CheckUserAccess from '~/utils/check-user-access';
import { parseLibTitle } from '~/utils/parse-user-lib-ui';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';


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
  props: IRSCProps<IUserLibPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username, libId } = params;

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

  const user = {
    ...userRes.response.data.user,
    ...userRes.response.data.user_extended!
  };

  const lib = user.libs.find(el => el.id === params.libId);
  if (!lib) return siteMetadata({
    title: `Тека не існує`,
    robots: ['nofollow', 'noindex']
  });

  return siteMetadata({
    overwriteTitle: `${parseLibTitle(lib.type)} ― тека @${user.username} на nekomi`,
    description: `Список аніме @${username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function ULibPageRSC(props: IRSCProps<IUserLibPageProps>) {
  const params = await props.params;
  const { username, libId } = params;
  const session = await getSessionToken();

  const userLibRes = await API.User.getLib({
    params: {
      qr: username,
      libId
    }
  });
  if (!userLibRes.success) return HandleServerNormalizedError(userLibRes.error);
  const { catalog, libs, user } = userLibRes.response.data;

  const lib = libs.find(el => el.id === libId);
  if (!lib) return notFound();

  const { user: currentUser } = await CheckUserAccess({ session });

  const isOwner = user.id === currentUser?.id;
  const isLibHidden = !lib.is_public;

  const sortedLibs: TUserLib[] = [
    libs.find(el => el.type === 'favorite'),
    libs.find(el => el.type === 'watching'),
    libs.find(el => el.type === 'watched'),
    libs.find(el => el.type === 'plans'),
    libs.find(el => el.type === 'delayed'),
  ].filter(el => el !== undefined).filter(el => el.type !== lib.type);



  return <>
    <UserLayout type="user_lib" user={user} />

    <div className="wrapper pt-[24px] gap-[24px]">
      {/* Title */}
      <div className="flex items-center gap-[16px]">
        {isOwner && isLibHidden && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
          <MaterialSymbol icon={'visibility_lock'} size={20} className="text-grey-new" />
        </Tooltip>}

        <div className="flex items-center gap-[8px]">
          <StyledH2 text={parseLibTitle(lib.type)} bold className="text-[24px] flex-shrink-0" />
          {lib.anime_ids.length !== 0 && <StyledM text={`(${lib.anime_ids.length})`} className="text-[24px] flex-shrink-0" color="text-muted" />}
        </div>

        <div className="w-full h-[2px] bg-dark-light"></div>
      </div>

      {catalog.length === 0 && <div className="w-full flex justify-center items-center gap-[16px] py-[24px]">
        <MaterialSymbol icon="extension_off" size={64} className="text-white" />

        <div className="flex flex-col gap-[8px]">
          <StyledH3 text={`Ця тека порожня`} className="text-[24px]" bold />
          <StyledM text={`Вона оновиться після того як сюди буде додане аніме`} color="text-muted" />
        </div>
      </div>}

      {catalog.length !== 0 && <div className="grid gap-[16px] grid-cols-6 max-[1470px]:grid-cols-5 max-[1250px]:grid-cols-4 max-[940px]:grid-cols-3 max-[720px]:grid-cols-2">
        {catalog.toReversed().map((anime, i) => {
          return <AnimeItem className="max-[720px]:!min-w-[160px]" anime={anime} key={`userlib-${lib.id}--${i}`} libControls />;
        })}
      </div>}

      <div className="flex flex-wrap gap-[8px]">
        {sortedLibs.map(lib => {
          return <UserLibItem lib={lib} user={user} key={`user-libitem--${lib.id}`} />;
        })}
      </div>
    </div>
  </>;
}