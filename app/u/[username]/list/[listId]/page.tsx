'use client'

import { NextPage } from 'next';
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Jelly } from '@uiball/loaders'
import Link from 'next/link';

import { IUsapiUser, IUser, IUserList } from '../../../../../interfaces/IUser';
import { config } from '../../../../../config';
import Tooltip from '../../../../../components/Tooltip';
import { useAppSelector } from '../../../../../hooks/redux';
import { routes } from '../../../../../routes';
import { ITitle } from '../../../../../interfaces/ITitle';
import { TitleCard } from '../../../../../components/GeneralComponents';
import { $api } from '../../../../../components/http';
import axios from 'axios';
import { IcoEyeHidden, IcoEyeVisible } from '../../../../../assets/Eye';
import { IcoArrow, IcoSettings } from '../../../../../assets/Icons';

const UserList: NextPage = (props) => {
  const [isErrored, setIsErrored] = useState(false)
  const [list, setList] = useState<IUserList>()
  const [listNotFound, setListNotFound] = useState(false)
  const params = useParams<{ username: string, listId: string }>()
  const [isOwner, setIsOwner] = useState(false);
  const [rawTitles, setRawTitles] = useState<ITitle[]>([])
  const [titles, setTitles] = useState<ITitle[]>([])

  const state = useAppSelector(state => state.user)

  // Fetch list
  useEffect(() => {
    try {
      (async function () {
        const { data: usapiData } = await axios.get<{ user: IUsapiUser }>(`${config.URL.fkUsapi}/user/${params.username}`)
        const { data } = await $api.get<IUser>(`/user/${usapiData.user.id}`)

        const list = data.lists.find(el => el.id === params.listId);

        if (list) {
          setList(data.lists.find(el => el.id === params.listId))
        } else {
          setListNotFound(true)
        }
      })()
    } catch (e) {
      console.error(e)
      setIsErrored(true)
    }
  }, [])

  // Define if user is account owner
  useEffect(() => {
    if (!state.id) {
      setIsOwner(false)
      return
    };

    if (state.username === params.username) {
      setIsOwner(true);
    }
  }, [state])


  // Fetch titles
  useEffect(() => {
    if (!list) return;

    list.titles.forEach(title => {
      axios.get<{ title: ITitle }>(`${config.URL.apiHTTP}/title/${title}`).catch(e => console.error(e)).then(res => {
        setRawTitles(prev => [...prev.filter(el => el.id !== res!.data.title.id), res!.data.title])
      })
    })
  }, [list])

  // Idk but it works
  useEffect(() => {
    if (rawTitles.length !== list?.titles.length) return;
    setTitles(rawTitles.reverse());
  }, [rawTitles])

  return isErrored ? <p className='text-[24px] text-white font-bold'>Йой, ви не повинні були цього бачити! Створіть будь ласка тікет з темою: UserList data fetch error та прікріпіть лог консолі (F12 - Консоль)</p> : (
    <>
      {list ? <>
        <div className='flex justify-between items-center gap-[16px] w-full'>
          <Tooltip content='Повернутися назад'>
            <Link href={routes.user.path.replace('*', params.username)}>
              <IcoArrow width={24} height={24} className='rotate-[90deg]' />
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
                    return <TitleCard className='!h-[240px]' title={title} key={title.id} />
                  })}
                </div>
              </> : <div className='w-full h-full flex justify-center items-center'>
                <Jelly color='#fff' />
              </div>}
            </> : <h3 className='text-[24px] text-white font-bold text-center'>Ця тека порожня</h3>}
          </div>
        </> : <h3 className='text-[24px] text-white font-bold'>Це приватна тека.</h3>}
      </> : listNotFound ? <>
        <div className='flex justify-between items-center gap-[16px] w-full'>
          <Tooltip content='Повернутися назад'>
            <Link href={routes.user.path.replace('*', params.username)}>
              <IcoArrow width={24} height={24} />
            </Link>
          </Tooltip>

          <div className='flex items-center gap-[16px]'>
            <h3 className='text-[24px] text-white font-bold'>Цієї теки не існує.</h3>
          </div>

          {/* Blank div for justify between */}
          <div></div>
        </div>
      </> : <div className='w-full h-full flex justify-center items-center'>
        <Jelly color='#fff' />
      </div>}
    </>
  );
}

export default UserList;