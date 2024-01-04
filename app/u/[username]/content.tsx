'use client'

import { NextPage } from 'next';
import { useEffect, useState, useRef } from 'react'
import { IUser } from '../../../interfaces/IUser';
import { IcoAccordionArrow, IcoArrow, IcoCalendar, IcoFolder, IcoHome, IcoSettings, IcoStats } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { useAppSelector } from '../../../hooks/redux';
import gsap from 'gsap';

type TTab = 'home' | 'stats' | 'library' | 'settings';

const SidebarItem: NextPage<{ currTab: TTab, tab: TTab, setTab: (tab: TTab) => void }> = ({ setTab, tab, currTab }) => {
  return (
    <button className={`user-sidebar-item flex gap-[16px] items-center px-[8px] py-[4px] rounded-[2px] duration-200 hover:bg-dark/[.2] ${currTab === tab ? 'bg-dark/[.4]' : ''}`} onClick={() => setTab(tab)}>
      {tab === 'home' && <IcoHome width={24} height={24} />}
      {tab === 'library' && <IcoFolder width={24} height={24} />}
      {tab === 'stats' && <IcoStats width={24} height={24} />}
      {tab === 'settings' && <IcoSettings width={24} height={24} />}

      <p className='text-[16px] text-white'>
        {tab === 'home' && 'Профіль'}
        {tab === 'stats' && 'Статистика'}
        {tab === 'library' && 'Тека'}
        {tab === 'settings' && 'Налаштування'}
      </p>
    </button>
  )
}

const UserContent: NextPage<{ user: IUser }> = ({ user }) => {
  const userData = useAppSelector(state => state.user);
  const [tab, setTab] = useState<TTab>('settings')
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const [isOwner] = useState(userData.username === user.username)

  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ps = root.current!.querySelectorAll('.user-sidebar-item p')
    const btns = root.current!.querySelectorAll('.user-sidebar-item')

    if (menuCollapsed) {
      gsap.to(ps, {
        duration: .2,
        opacity: 0,
        x: -16,
        width: 0
      });
      gsap.to(btns, {
        gap: 0,
        duration: .2,
      })
    } else {
      gsap.to(ps, {
        duration: .2,
        opacity: 1,
        x: 0,
        width: 'auto'
      });
      gsap.to(btns, {
        gap: 16,
        duration: .2,
      })
    }
  }, [menuCollapsed])

  return (
    <div className='flex flex-col' ref={root}>
      <div className='flex w-full items-center gap-[40px] pb-[16px]'>
        <img src={user.avatar} alt={`Аватар ${user.username}`} loading='lazy' />

        <div className='flex flex-col gap-[4px]'>
          <div className='flex gap-[24px] items-center'>
            <h1 className='text-[32px] text-white font-bold'>@{user.username}</h1>

            {/* Badges */}
            <div className='flex items-center gap-[4px]'></div>
          </div>

          <div className='flex items-center gap-[8px]'>
            {/* Level */}
            {/* <div className='flex items-center gap-[8px]'></div> */}

            <Tooltip content={`Дата створення акаунту`}>
              <div className='flex items-center gap-[8px]'>
                <IcoCalendar className='user-created' />
                <p className='text-[16px] text-white font-extralight'>{new Date(user.stats.createdAt).toLocaleString('uk').split(',')[0]}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      <span className='block w-full h-[1px] rounded-[2px] bg-white/[.2]'></span>

      <div className='flex pt-[8px] gap-[8px]'>

        <div className='flex flex-col gap-[4px]'>
          <button onClick={() => setMenuCollapsed(!menuCollapsed)} className={`w-full flex justify-end px-[8px] py-[4px] duration-200 hover:bg-dark/[.2]`}>
            <IcoArrow width={24} height={24} className={`duration-200 ${menuCollapsed ? 'rotate-[180deg]' : ''}`} />
          </button>

          <SidebarItem currTab={tab} tab='home' setTab={setTab} />
          <SidebarItem currTab={tab} tab='stats' setTab={setTab} />
          <SidebarItem currTab={tab} tab='library' setTab={setTab} />
          {isOwner && <SidebarItem currTab={tab} tab='settings' setTab={setTab} />}
        </div>

        <span className='block w-[1px] rounded-[2px] bg-white/[.2]'></span>

        <div className='w-full h-full'>
          {/* Home tab */}
          {tab === 'home' && <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[24px] text-white font-bold'>Головна в розробці</h3>
          </div>}

          {/* Stats tab */}
          {tab === 'stats' && <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[24px] text-white font-bold'>Статистика в розробці</h3>
          </div>}

          {/* Library tab */}
          {tab === 'library' && <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[24px] text-white font-bold'>Тека в розробці</h3>
          </div>}

          {/* Settings tab */}
          {tab === 'settings' && <div className='w-full h-full flex items-center flex-col gap-[8px]'>
            <h3 className='text-[24px] text-white font-bold'>Налаштування в розробці</h3>
          </div>}
        </div>

      </div>
    </div>
  );
}

export default UserContent;