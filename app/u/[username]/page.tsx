'use client'

import { NextPage } from 'next';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { IUser, IUserList } from '../../../interfaces/IUser';
import { LibItem } from './content';
import $api from '../../../components/http';
import { env } from '../../../config';
import Loading from '../../../components/Loading';
import { useAppSelector } from '../../../hooks/redux';
import { useAppSelector } from '../../../hooks/redux';

const UserLists: NextPage = () => {
  const params = useParams<{ username: string }>()
  const [isErrored, setIsErrored] = useState(false)
  const [user, setUser] = useState<IUser>()
  const userData = useAppSelector(state => state.user)
  const userData = useAppSelector(state => state.user)

  useEffect(() => {
    try {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`).then(res => {
        const user = res.data;
        let tmpLists: IUserList[] = []
        tmpLists.unshift(user!.lists.slice(user.lists.findIndex(el => el.id.match(/watching/g)))[0])
        tmpLists.unshift(user!.lists.slice(user.lists.findIndex(el => el.id.match(/favorite/g)))[0])

        user.lists = [...tmpLists, ...user.lists.filter(el => !tmpLists.some(list => el.id === list.id))]

        setUser(user)
      })
    } catch (e) {
      console.error(e)
      setIsErrored(true)
    }
  }, [])

  useEffect(() => {
    if (!user) return;
  }, [user])

  return isErrored ? <p className='text-[24px] text-white font-bold'>Йой, ви не повинні були цього бачити! Створіть будь ласка тікет з темою: UserLists data fetch error та прікріпіть лог консолі (F12 - Консоль)</p> : (
    <>
      {user ? <>
        {user.lists.some(el => !el.hidden) || userData.username === params.username ? <>
          <div className='user-library gap-[8px] w-full'>
            {user.lists.map(list => {
              return <LibItem list={list} username={params.username} key={list.id} />
            })}
          </div>
        </> : <h3 className='text-[24px] text-white font-bold'>Всі теки цього користувача приховані</h3>}
      </> : <div className='py-[80px] bg-dark w-full'><Loading h='full' w='full' /></div>}
    </>

  );
}

export default UserLists;