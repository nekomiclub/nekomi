import { Metadata } from 'next';
import { MaterialSymbol } from 'material-symbols-rc';
import { notFound } from 'next/navigation';

import { UserLibItem } from '~/app/user/[username]/_components/UserUI';
import AnimeItem from '~/components/AnimeItem';
import { HandleServerError } from '~/components/Errors';
import Tooltip from '~/components/Tooltip';
import { H2, H3, P } from '~/components/UI/Typography';
import UserLayout from '~/components/UserLayout';
import { IUserLib } from '~/interfaces/IUser';
import { IUserLibPageProps } from '~/interfaces/PagesParams';
import { IRSCProps } from '~/interfaces/types';
import API from '~/services/api/API';
import { getCachedUser } from '~/services/CachedAPI';
import CheckUserAccess from '~/utils/check-user-access';
import { parseLibTitle } from '~/utils/parse-user-lib-ui';
import { getSessionToken } from '~/utils/server-utils';
import siteMetadata from '~/utils/site-metadata';



export async function generateMetadata(
  props: IRSCProps<IUserLibPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username, libId } = params;



  try {
    const user = await getCachedUser(username, await getSessionToken());
    const lib = user.libs!.find(el => el.id === params.libId);
    if (!lib) return notFound();

    return siteMetadata({
      overwriteTitle: `${parseLibTitle(lib.type)} ― тека @${user.username} на nekomi`,
      description: `Список аніме @${username}`,
      robots: ['nofollow', 'noindex']
    });
  } catch (e) {
    return siteMetadata({
      title: 'Цієї теки не існує',
      robots: ['nofollow', 'noindex']
    });
  }
}



export default async function ULibPageRSC(props: IRSCProps<IUserLibPageProps>) {
  const params = await props.params;
  const { username, libId } = params;
  const session = await getSessionToken();



  try {
    const { user: currentUser } = await CheckUserAccess({ session });
    const { user, libs, catalog } = await API.getUserLib({ query: username, libId }, { sessionToken: session });
    const lib = libs.find(el => el.id === libId);
    if (!lib) return notFound();

    const isOwner = user.id === currentUser?.id;
    const isLibHidden = !lib.is_public;

    const sortedLibs: IUserLib[] = [
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
            <H2 text={parseLibTitle(lib.type)} bold size={24} />
            {lib.anime_ids.length !== 0 && <P text={`(${lib.anime_ids.length})`} size={24} className="text-grey-new" />}
          </div>

          <div className="w-full h-[2px] bg-dark-light"></div>
        </div>

        {catalog.length === 0 && <div className="w-full flex justify-center items-center gap-[16px] py-[24px]">
          <MaterialSymbol icon="extension_off" size={64} className="text-white" />

          <div className="flex flex-col gap-[8px]">
            <H3 text={`Ця тека порожня`} size={24} bold />
            <P text={`Вона оновиться після того як сюди буде додане аніме`} size={16} className={`text-grey-new`} />
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
  } catch (e) {
    return HandleServerError(e);
  }
}