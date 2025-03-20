import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

import { HandleServerError } from '~/components/Errors';
import { $api } from '~/components/http';
import { config, metaObject } from '~/config';
import { IDubber } from '~/interfaces/IDubber';
import { IRSCProps } from '~/interfaces/IRSC';
import { ITitle } from '~/interfaces/ITitle';
import { IUser, IUserTogetherRoom } from '~/interfaces/IUser';

import { TogetherRoomSecurityLayer } from './Room';

export const metadata = metaObject({ title: 'Спільний перегляд' })

export default async function RSC({ params }: IRSCProps) {
  const { id } = await params as { id: string };

  const userId = id.split('__')[0];
  const roomId = id.split('__')[1];
  const userSessionToken = cookies().get(config.vars.SessionCookie)?.value;

  if (!userId || !roomId) return notFound()

  let user: IUser | undefined = undefined;
  let room: IUserTogetherRoom | undefined = undefined;
  let title: ITitle | undefined = undefined;
  let dubbers: IDubber[] = [];

  try {
    const { data } = await $api.get<{ user: IUser }>(`/user/${userId}`, {
      params: {
        detailed: true,
        togetherRoomId: roomId,
      }
    });

    user = data.user;
    room = user.togetherRooms.find(el => el.id === roomId)!;

    const { data: titleData } = await $api.get<{ title: ITitle, parsedDubbers: IDubber[] | null }>(`/title/${room.titleId}`, {
      params: {
        detailed: true,
        parseDubbers: true
      }
    });

    title = titleData.title;
    dubbers = titleData.parsedDubbers || [];
  } catch (e) {
    return HandleServerError(e)
  }

  if (!user || !room || !title) notFound();

  return <TogetherRoomSecurityLayer user={user} dubbers={dubbers} room={room} title={title} userSessionToken={userSessionToken || '_NULL'} />
}