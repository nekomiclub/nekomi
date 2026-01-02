
import { MaterialSymbol } from 'material-symbols-rc';

import siteMetadata from '~/utils/site-metadata';


export const metadata = siteMetadata({ title: 'Спільний перегляд' });

// export default async function RSC({ params }: IRSCProps) {
//   const { id } = await params as { id: string };

//   const userId = id.split('__')[0];
//   const roomId = id.split('__')[1];
//   const userSessionToken = cookies().get(config.vars.SessionCookie)?.value;

//   if (!userId || !roomId) return notFound()

//   let user: IUser | undefined = undefined;
//   let room: IUserTogetherRoom | undefined = undefined;
//   let title: ITitle | undefined = undefined;
//   let dubbers: IDubber[] = [];

//   try {
//     const { data } = await $api.get<{ user: IUser }>(`/user/${userId}`, {
//       params: {
//         detailed: true,
//         togetherRoomId: roomId,
//       }
//     });

//     user = data.user;
//     room = user.togetherRooms.find(el => el.id === roomId)!;

//     const { data: titleData } = await $api.get<{ title: ITitle, parsedDubbers: IDubber[] | null }>(`/title/${room.titleId}`, {
//       params: {
//         detailed: true,
//         parseDubbers: true
//       }
//     });

//     title = titleData.title;
//     dubbers = titleData.parsedDubbers || [];
//   } catch (e) {
//     return HandleServerError(e)
//   }

//   if (!user || !room || !title) notFound();

//   return <TogetherRoomSecurityLayer user={user} dubbers={dubbers} room={room} title={title} userSessionToken={userSessionToken || '_NULL'} />
// }

export default async function RSC() {
  return <div className="w-full h-screen bg-dark-primary flex justify-center items-center">
    <div className="wrapper !flex-row items-center justify-center h-full">
      <div className="flex gap-[40px]">
        <MaterialSymbol icon="power_off" className="text-white" size={55} />

        <div className="flex flex-col gap-[8px] max-w-[666px]">
          <h1 className="text-white text-[40px] font-manrope font-bold w-fit">СПІЛЬНИЙ ПЕРЕГЛЯД ВИМКНЕНО</h1>

          <p className="text-grey-new font-manrope w-full">Перша версія спільного перегляду була не в найкращому вигляді, з великою кількістю багів та обмежень. Ми вирішили вимкнути спільний перегляд для економії ресурсів та його переробки, щоб випустити стабільну версію з повним функціоналом. Перепрошуємо за незручності</p>
        </div>
      </div>
    </div>
  </div>;
}