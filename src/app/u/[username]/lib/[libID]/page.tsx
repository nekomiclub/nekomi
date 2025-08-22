import { Metadata } from 'next';
import { cache } from 'react';

import { UserHeader } from '~/app/u/[username]/UserPage';
import { HandleServerError } from '~/components/Errors';
import { metaObject } from '~/config';
import { UserPageLibProps } from '~/interfaces/PagesParams';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/ApiService';

import { UserLibOthers, UserLibSection } from './UserLibPage';



const getUser = cache(async (query: string, libId: string) => {
  return await API.getUser({ query, detailed: true, parseLibId: libId });
});



export async function generateMetadata(
  props: RSCProps<{ username: string, libID: string }>,
): Promise<Metadata> {
  const { username, libID } = await props.params;
  const { user } = await getUser(username, libID);
  const lib = user.libs.find(el => el.id === libID);

  return metaObject({
    overwriteTitle: `"${lib?.settings.name}" ― @${user.username}`,
    description: `Список аніме @${user.username}`,
    robots: ['nofollow', 'noindex']
  });
}



export default async function RSC(props: RSCProps<UserPageLibProps>) {
  const params = await props.params;
  const { username, libID } = params;

  try {
    const { user, parsedLib } = await getUser(username, libID);
    const lib = user.libs.find(el => el.id === params.libID);

    return <div className="w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]">
      <UserHeader user={user} />

      <div className="wrapper gap-[40px]">
        <UserLibSection lib={lib} user={user} hydratedAnimes={parsedLib!} />
        <UserLibOthers user={user} />
      </div>
    </div>;
  } catch (e) {
    return HandleServerError(e);
  }
}