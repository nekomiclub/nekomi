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

const TitleItem: NextPage<{ title: ITitle }> = ({ title }) => {
  return (
    <Link href={routes.watchTitle.path.replace('*', title.code)}>
      <div className='w-full flex flex-col items-center justify-between relative h-[240px] rounded-[4px]'>
        <img src={title.poster} alt="poster" className='absolute top-0 left-0 w-full h-full' />

        <div className='w-full flex justify-end'>
          <div className='px-[4px] py-[2px] rounded-[2px] relative top-[2px] right-[4px] gradient--primary'>
            <p className='text-[12px] text-white font-bold'>{title.rating}</p>
          </div>
        </div>

        <div className='bg-dark/[.2] backdrop-blur-[10px] px-[8px] py-[4px] w-full'>
          <p className='text-[16px] text-white text-center'>{title.names.ukr || title.code}</p>
        </div>
      </div>
    </Link>
  )
}

const UserList: NextPage = (props) => {
  const [isErrored, setIsErrored] = useState(false)
  const [user, setUser] = useState<IUser>()
  const [list, setList] = useState<IUserList>()
  const [listType, setListType] = useState<TUserListType>()
  const params = useParams<{ username: string, listId: string }>()
  const [isOwner, setIsOwner] = useState(false);
  const userData = useAppSelector(state => state.user)
  const [rawTitles, setRawTitles] = useState<ITitle[]>([])
  const [titles, setTitles] = useState<ITitle[]>([])

  useEffect(() => {
    try {
      $api.get<IUser>(`${env.apiUrl}/v1/user/${params.username}`).then(res => {
        setUser(res.data)
        setIsOwner(res.data.username === userData.username)
        setList(res.data.lists.find(el => el.id === params.listId))
      })
    } catch (e) {
      console.error(e)
      setIsErrored(true)
    }
  }, [])

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
    console.log(rawTitles)
  }, [rawTitles])

  useEffect(() => console.log(titles), [titles])

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
            <h3 className='text-[24px] text-white font-bold'>{list?.name}</h3>
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
          <div>

          </div>

          <div className='w-full'>
            {list.titles.length ? <>
              {titles.length ? <>
                <div className='user-library-titles gap-[16px]'>
                  {titles.map(title => {
                    return <TitleItem title={title} key={title.id} />
                  })}
                </div>
              </> : <p className='text-[16px] text-white'>Завантажуємо...</p>}
            </> : <h3 className='text-[24px] text-white font-bold text-center'>Ця тека порожня</h3>}
          </div>
        </> : <h3 className='text-[24px] text-white font-bold'>Це приватна тека.</h3>}
      </> : <Loading w='full' h='full' />}
    </>
  );
}

export default UserList;