import { NextPage } from 'next';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { IUser, IUserList } from '../../../interfaces/IUser';
import { LibItem, UserListsContent } from './content';
import { env } from '../../../config';
import Loading from '../../../components/Loading';
import { useAppSelector } from '../../../hooks/redux';
import { Jelly } from '@uiball/loaders'
import { routes } from '../../../routes';
import { ITitle } from '../../../interfaces/ITitle';
import axios from 'axios';
import { cookies } from 'next/headers';
import { decode } from 'jsonwebtoken';
import { ITokenData } from '../../../interfaces/ITokenData';

interface IProps {
  params: { username: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const UserLists: NextPage<IProps> = async ({ params, searchParams }) => {
  let isErrored = false;

  const { username } = params;
  // @ts-expect-error Need empty object
  let user: IUser = {}

  try {
    await axios.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`).then(res => {
      const data = res.data;
      let tmpLists: IUserList[] = []
      tmpLists.unshift(data!.lists.slice(data.lists.findIndex(el => el.id.match(/watching/g)))[0])
      tmpLists.unshift(data!.lists.slice(data.lists.findIndex(el => el.id.match(/favorite/g)))[0])

      user.lists = [...tmpLists, ...data.lists.filter(el => !tmpLists.some(list => el.id === list.id))]
      user = data;
    })
  } catch (e) {
    isErrored = true;
  }

  if (!user.uid) {
    isErrored = true;
  }

  const token = cookies().get('refreshToken')?.value;
  // @ts-expect-error Need empty object
  let tokenPayload: ITokenData = {}

  if (token) {
    tokenPayload = decode(token)! as ITokenData;
  }

  const isOwner = tokenPayload.username === username || false;

  return isErrored ? <p className='text-[24px] text-white font-bold'>Йой, ви не повинні були цього бачити! Створіть будь ласка тікет з темою: UserLists data fetch error та прікріпіть лог консолі (F12 - Консоль)</p> : (
    <>
      <UserListsContent user={user} isOwner={isOwner} />
    </>

  );
}

export default UserLists;