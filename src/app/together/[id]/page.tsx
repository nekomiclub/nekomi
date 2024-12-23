import { AxiosError } from 'axios';

import { HappenedWrongScreen, NotFoundScreen } from '~/components/Components';
import { getUTC } from '~/components/handlers';
import { $api } from '~/components/http';
import { devMode, metaObject } from '~/config';
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

  if (!userId || !roomId) return <HappenedWrongScreen cause="Неправильний ID кімнати" />

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
    if (e instanceof AxiosError) {
      const code = e.response?.data?.code || 500;

      devMode ? console.error(e.response?.data) : null;

      if (code === 404) {
        return <NotFoundScreen />
      } else if (code === 400) {
        return <HappenedWrongScreen cause={`[${e.code}]: ${e.response?.data?.msg || e.response?.data?.message || 'No message provided'}`} />
      } else {
        return <HappenedWrongScreen cause={e.message} />
      }
    } else {
      const date = `${getUTC().date} ${getUTC().time}`
      console.error(`[${date}]: Server error occured at w/query - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`);
      return <HappenedWrongScreen cause={`Server error occured at w/query. See logs at ${date}`} />;
    }
  }

  if (!user || !room || !title) return <NotFoundScreen />

  return <TogetherRoomSecurityLayer user={user} dubbers={dubbers} room={room} title={title} />
}