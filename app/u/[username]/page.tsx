import { NextPage } from 'next';
import axios from 'axios';
import { decode } from 'jsonwebtoken';
import { cookies, headers } from 'next/headers';

import { IExtendedUser, IUsapiUser, IUser, IUserList } from '../../../interfaces/IUser';
import { LibItem, UserListsContent } from './content';
import { config } from '../../../config';
import { ISessionCookieData, ITokenData } from '../../../interfaces/ITokenData';
import { IRSCProps } from '../../../interfaces/IRSC';
import { $api } from '../../../components/http';



export default async function RSC({ params }: IRSCProps<{ username: string }>) {
  let isErrored = false;
  let emsg = ''

  const { username } = params;
  // @ts-expect-error Need empty object
  let user: IExtendedUser = {}
  let isOwner = false;

  try {
    const { data: usapiData } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${params.username}`)
    const { data } = await $api.get<IUser>(`/user/${usapiData.user.id}`)

    user = Object.assign({ ...data, ...usapiData.user })
  } catch (e) {
    isErrored = true;
  }

  if (!user.id) {
    emsg = 'User id is not found at /u/[username]/page.tsx'
    isErrored = true;
  }

  const token = cookies().get('SEC_31N')?.value;

  if (token) {
    try {
      const payload = decode(token) as ISessionCookieData;

      if (payload.userId === user.id) {
        isOwner = true
      } else {
        isOwner = false
      }
    } catch (e) {
      isOwner = false
      isErrored = true;
      emsg = `An error occured while decoding token at /u/[username]/page.tsx - ${JSON.stringify(e, Object.getOwnPropertyNames(e), 2)}`
    }
  }

  return isErrored ? <p className='text-[24px] text-white font-bold'>Отакої. Створіть в діскорді animee тікет про це, будь ласка! Помилка - {emsg}</p> : (
    <>
      <UserListsContent user={user} isOwner={isOwner} />
    </>
  );
}