import { Metadata } from 'next';

import { HandleServerError } from '~/components/Errors';
import { RSCProps } from '~/interfaces/types';
import API from '~/services/ApiService';
import { metaObject } from '../../../../../config';
import { UserPageProps } from '../../page';
import { UserHeader } from '../../UserPage';

import { UserLibOthers, UserLibSection } from './UserLibPage';




export async function generateMetadata(
  props: RSCProps<{ username: string, libID: string }>,
): Promise<Metadata> {
  const { username } = await props.params;

  return metaObject({
    title: `Тека @${username}`,
    description: `Список аніме цього користувача`
  })
}



export default async function RSC(props: RSCProps<UserPageProps>) {
  const params = await props.params;
  const { username, libID } = params;

  try {
    const { user, parsedLib } = await API.getUser({ query: username, detailed: true, parseLibId: libID });
    const lib = user.libs.find(el => el.id === params.libID);

    return <div className="w-full h-full min-h-screen bg-dark flex flex-col gap-[40px]">
      <UserHeader user={user} />

      <div className="wrapper gap-[40px]">
        <UserLibSection lib={lib} user={user} hydratedAnimes={parsedLib!} />
        <UserLibOthers user={user} />
      </div>
    </div>
  } catch (e) {
    return HandleServerError(e)
  }
}