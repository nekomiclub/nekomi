'use client'

import { NextPage } from 'next';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { IUser, IUserList, TUserListType } from '../../../../../interfaces/IUser';
import { env } from '../../../../../config';
import $api from '../../../../../components/http';
import { IcoArrow, IcoSettings } from '../../../../../assets/ico/Icos';
import Tooltip from '../../../../../components/Tooltip';
import Loading from '../../../../../components/Loading';
import { IcoEyeHidden, IcoEyeVisible } from '../../../../../assets/ico/eye';
import { useAppSelector } from '../../../../../hooks/redux';
import Link from 'next/link';
import { routes } from '../../../../../routes';
import { ITitle } from '../../../../../interfaces/ITitle';
import { Jelly } from '@uiball/loaders'
import { ITokenData } from '../../../../../interfaces/ITokenData';
import { TitleCard } from '../../../../../components/GeneralComponents';

const UserList: NextPage = (props) => {
  const [isErrored, setIsErrored] = useState(false)
  const [user, setUser] = useState<IUser>()
  const [list, setList] = useState<IUserList>()
  const [listType, setListType] = useState<TUserListType>()
  const params = useParams<{ username: string, listId: string }>()
  const [isOwner, setIsOwner] = useState(false);
  const [rawTitles, setRawTitles] = useState<ITitle[]>([])
  const [titles, setTitles] = useState<ITitle[]>([])

  const state = useAppSelector(state => state.user)
  const [userData, setUserData] = useState<ITokenData>()

  useEffect(() => {
    if (!state.username) return;

    try {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`).then(res => {
        setUser(res.data)
        setIsOwner(res.data.username === state.username)
        setList(res.data.lists.find(el => el.id === params.listId))
      })
    } catch (e) {
      console.error(e)
      setIsErrored(true)
    }

    setUserData(state)
  }, [state])

  useEffect(() => {
    if (!list) return;

    list.titles.forEach(title => {
      $api.get<ITitle>(`${env.apiUrl}/v1/title/${title}`).catch(e => console.error(e)).then(res => {
        setRawTitles(prev => [...prev.filter(el => el.id !== res!.data.id), res!.data])
      })
    })

    setListType(list?.id.split('-')[0]! as TUserListType)
  }, [list])

  useEffect(() => {
    if (rawTitles.length !== list?.titles.length) return;
    setTitles(rawTitles);
  }, [rawTitles])

  return isErrored ? <p className='text-[24px] text-white font-bold'>Йой, ви не повинні були цього бачити! Створіть будь ласка тікет з темою: UserList data fetch error та прікріпіть лог консолі (F12 - Консоль)</p> : (
    <>
      {list ? <>
        <div className='flex justify-between items-center gap-[16px] w-full'>
          <Tooltip content='Повернутися назад'>
            <Link href={routes.user.path.replace('*', params.username)}>
              <IcoArrow width={24} height={24} />
            </Link>
          </Tooltip>

          <div className='flex items-center gap-[16px]'>
            <h3 className='text-[24px] text-white font-bold'>{list?.name} ({list.titles.length})</h3>
            {isOwner && <Tooltip content={`Ця тека ${list.hidden ? 'прихована' : 'видима'} для всіх користувачів`}>
              {list.hidden ? <IcoEyeHidden width={16} height={16} /> : <IcoEyeVisible width={16} height={16} />}
            </Tooltip>}
          </div>

          {/* Settings */}
          <div>
            {isOwner && <>
              <Tooltip content='Налаштування теки (в розробці)'>
                <button>
                  <IcoSettings width={24} height={24} />
                </button>
              </Tooltip>
            </>}
          </div>
        </div>

        {!list.hidden || list.hidden && isOwner ? <>
          <div className='w-full'>
            {list.titles.length ? <>
              {titles.length ? <>
                <div className='user-library-titles gap-[16px]'>
                  {titles.map(title => {
                    return <TitleCard title={title} key={title.id} />
                  })}
                </div>
              </> : <div className='w-full h-full flex justify-center items-center'>
                <Jelly color='#fff' />
              </div>}
            </> : <h3 className='text-[24px] text-white font-bold text-center'>Ця тека порожня</h3>}
          </div>
        </> : <h3 className='text-[24px] text-white font-bold'>Це приватна тека.</h3>}
      </> : <div className='w-full h-full flex justify-center items-center'>
        <Jelly color='#fff' />
      </div>}
    </>
  );
}

export default UserList;