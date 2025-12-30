import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { UserLibItem } from '~/app/u/[username]/UserPage';
import AnimeItem from '~/components/AnimeItem';
import { HandleServerError } from '~/components/Errors';
import Tooltip from '~/components/UI/Tooltip';
import { H2, H3, P } from '~/components/UI/Typography';
import UserLayout from '~/components/UserLayout';
import { UserLibPageProps } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import { UserLib } from '~/interfaces/UserIntf';
import { getCachedUser, getSessionToken } from '~/services/CachedAPI';
import CheckUserAccess from '~/utils/check-user-access';
import { parseLibTitle } from '~/utils/parse-user-lib-ui';
import siteMetadata from '~/utils/site-metadata';



export async function generateMetadata(
  props: RSCProps<UserLibPageProps>,
): Promise<Metadata> {
  const params = await props.params;
  const { username, libId } = params;



  try {
    const { user, parsedLib } = await getCachedUser(username, libId, await getSessionToken());
    const lib = user.libs.find(el => el.id === params.libId);
    if (!lib || !parsedLib) return notFound();

    return siteMetadata({
      overwriteTitle: `${lib.settings.name} ― тека @${user.username} на nekomi`,
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



export default async function RSC(props: RSCProps<UserLibPageProps>) {
  const params = await props.params;
  const { username, libId } = params;
  const session = await getSessionToken();



  try {
    const { user: currentUser } = await CheckUserAccess({ session });
    const { user, parsedLib } = await getCachedUser(username, libId, session);
    const lib = user.libs.find(el => el.id === params.libId);
    if (!lib || !parsedLib) return notFound();

    const isOwner = user.id === currentUser?.id;
    const isLibHidden = lib.settings.hidden;

    const sortedLibs: UserLib[] = [
      user.libs.find(el => el.type === 'favorite'),
      user.libs.find(el => el.type === 'watching'),
      user.libs.find(el => el.type === 'watched'),
      user.libs.find(el => el.type === 'plans'),
      user.libs.find(el => el.type === 'delayed'),
      ...user.libs.filter(el => el.type === 'custom')
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
            {lib.titles.length !== 0 && <P text={`(${lib.titles.length})`} size={24} className="text-grey-new" />}
          </div>

          <div className="w-full h-[2px] bg-dark-light"></div>
        </div>

        {parsedLib.length === 0 && <div className="w-full flex justify-center items-center gap-[16px] py-[24px]">
          <MaterialSymbol icon="extension_off" size={64} className="text-white" />

          <div className="flex flex-col gap-[8px]">
            <H3 text={`Ця тека порожня`} size={24} bold />
            <P text={`Вона оновиться після того як сюди буде додане аніме`} size={16} className={`text-grey-new`} />
          </div>
        </div>}

        {parsedLib.length !== 0 && <div className="grid gap-[16px] grid-cols-6 max-[1470px]:grid-cols-5 max-[1250px]:grid-cols-4 max-[940px]:grid-cols-3 max-[720px]:grid-cols-2">
          {parsedLib.toReversed().map((hydrated, i) => {
            return <AnimeItem className="max-[720px]:!min-w-[160px]" hydrated={hydrated} key={`userlib-${lib.id}--${i}`} libControls />;
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