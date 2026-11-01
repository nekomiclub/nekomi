import { Metadata } from 'next';
import { MaterialSymbol } from 'material-symbols-rc';
import { notFound } from 'next/navigation';

import { UserLibItem } from '~/app/user/[username]/_components/UserUI';
import AnimeItem from '~/shared/components/AnimeItem';
import { StyledH2, StyledH3, StyledM } from '~/shared/components/styled/StyledText';
import Tooltip from '~/shared/components/Tooltip';
import UserLayout from '~/shared/components/UserLayout';
import { TUserLib } from '~/shared/lib/api/api-types';
import { getCachedUserLib } from '~/shared/lib/cached-api';
import { IRSCProps, IUserLibPageProps } from '~/shared/types/PagesParams';
import { parseLibTitle } from '~/shared/utilities/data-mappers';
import { HandleMetadataNormalizedError, HandleServerNormalizedError } from '~/shared/utilities/handle-normalized-errors';
import siteMetadata from '~/shared/utilities/site-metadata';



type PagePropsType = IRSCProps<IUserLibPageProps>



// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(props: PagePropsType): Promise<Metadata> {
  const { username, lib_id } = await props.params;

  const targetUserLibRes = await getCachedUserLib(username, lib_id);
  if (!targetUserLibRes.success) return HandleMetadataNormalizedError(targetUserLibRes.error);

  const { user, libs } = targetUserLibRes.response.data;

  const lib = libs.find(lib => lib.id === lib_id);
  if (!lib) return notFound(); // Throw not found if target user lib is not found

  return siteMetadata({
    overwriteTitle: `${parseLibTitle(lib.type)} ― тека @${user.username} на nekomi`,
    description: `Список аніме @${user.username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function ULibPageRSC(props: PagePropsType) {
  const { username, lib_id } = await props.params;

  const userLibRes = await getCachedUserLib(username, lib_id);
  if (!userLibRes.success) return HandleServerNormalizedError(userLibRes.error);
  const { catalog, libs, user, is_owner } = userLibRes.response.data;

  const lib = libs.find(el => el.id === lib_id);
  if (!lib) return notFound(); // Throw not found if target user lib is not found

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
        {is_owner && !lib.is_public && <Tooltip content="Прихована тека, вона доступна тільки вам" className="flex items-center">
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