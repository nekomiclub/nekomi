'use client'

import { NextPage } from 'next';
import { useParams } from 'next/navigation'
import React, { useEffect, useState, useRef, RefObject } from 'react'
import { IUser, IUserList } from '../../../interfaces/IUser';
import { IcoAccordionArrow, IcoArrow, IcoCalendar, IcoFolder, IcoHome, IcoSettings, IcoStats, IcoWatching } from '../../../assets/ico/Icos';
import Tooltip from '../../../components/Tooltip';
import { useAppSelector } from '../../../hooks/redux';
import gsap from 'gsap';
import Link from 'next/link';
import { IcoFilledCan, IcoFilledClock, IcoFilledHeart, IcoFilledPlans } from '../../../assets/ico/filled';
import { IcoEyeHidden, IcoEyeSuccess, IcoEyeVisible } from '../../../assets/ico/eye';

import './styles.scss'
import { routes } from '../../../routes';
import { HashImage } from 'hash-image';

type TTab = 'home' | 'stats' | 'library' | 'settings';

export const SidebarItem: NextPage<{ currTab: TTab, tab: TTab, setTab: (tab: TTab) => void }> = ({ setTab, tab, currTab }) => {
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

export const LibItem: NextPage<{ list: IUserList, isOwner: boolean, link: string }> = ({ list, isOwner, link }) => {
  return (
    <>
      {!list.hidden || list.hidden && isOwner ? <Link className='px-[16px] pt-[24px] pb-[8px] flex items-center flex-col gap-[16px] border border-white rounded-[2px] duration-200 hover:bg-dark/[.1]' href={link}>
        {list.id.match(/^fav/gi) && <IcoFilledHeart width={128} height={128} />}
        {list.id.match(/^watched/gi) && <IcoEyeSuccess width={128} height={128} />}
        {list.id.match(/^plans/gi) && <IcoFilledPlans width={128} height={128} />}
        {list.id.match(/^delayed/gi) && <IcoFilledClock width={128} height={128} />}
        {list.id.match(/^watching/gi) && <IcoWatching width={128} height={128} />}

        <div className='flex items-center gap-[8px]'>
          <p className='text-[16px] text-white font-extralight'>{list.name} ({list.titles.length})</p>

          <Tooltip content={`Ця тека ${list.hidden ? 'прихована' : 'видима'} для всіх користувачів`}>
            {list.hidden ? <IcoEyeHidden width={16} height={16} /> : <IcoEyeVisible width={16} height={16} />}
          </Tooltip>
        </div>
      </Link> : null}
    </>
  )
}

export const UserHeader: NextPage<{ user: IUser }> = ({ user }) => {
  return (
    <>
      <div className='flex w-full items-center gap-[40px] pb-[16px] max-[550px]:flex-col'>
        <HashImage src={user.avatar} alt={`Аватар ${user.username}`} width={128} height={128} parentClassName='rounded-[4px] overflow-hidden' />

        <div className='flex flex-col gap-[4px]'>
          <div className='flex gap-[24px] items-center max-[550px]:justify-center'>
            <h1 className='text-[32px] text-white font-bold'>@{user.username}</h1>

            {/* Badges */}
            <div className='flex items-center gap-[4px]'></div>
          </div>

          <div className='flex items-center gap-[8px] max-[550px]:justify-center'>
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
    </>
  )
}

export const UserContent: NextPage<{ user: IUser, children: any, type: 'lists' | 'list' }> = ({ user, children, type }) => {
  const params = useParams<{ username: string }>()
  const state = useAppSelector(state => state.user)
  const [tab, setTab] = useState<TTab>('library')
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!state.uid) return;

    setIsOwner(state.username === params.username)
  }, [state])

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
    <div className='flex flex-col w-full' ref={root}>
      <div className='flex pt-[8px] gap-[8px] w-full max-[550px]:flex-col'>
        <div className='flex flex-col gap-[4px]' ref={root}>
          <button onClick={() => setMenuCollapsed(!menuCollapsed)} className={`w-full flex justify-end px-[8px] py-[4px] duration-200 hover:bg-dark/[.2] max-[550px]:hidden`}>
            <IcoArrow width={24} height={24} className={`duration-200 ${menuCollapsed ? 'rotate-[180deg]' : ''}`} />
          </button>

          <SidebarItem currTab={tab} tab='home' setTab={setTab} />
          <SidebarItem currTab={tab} tab='stats' setTab={setTab} />
          <SidebarItem currTab={tab} tab='library' setTab={setTab} />
          {isOwner && <SidebarItem currTab={tab} tab='settings' setTab={setTab} />}
        </div>

        <span className='block w-[1px] rounded-[2px] bg-white/[.2]'></span>

        <div className='w-full h-full'>
          {tab === 'home' && <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[24px] text-white font-bold'>Головна в розробці</h3>
          </div>}

          {tab === 'stats' && <div className='w-full h-full flex justify-center items-center'>
            <h3 className='text-[24px] text-white font-bold'>Статистика в розробці</h3>
          </div>}

          {tab === 'library' && <div className='w-full h-full flex items-center flex-col gap-[24px]'>
            {children}
          </div>}

          {tab === 'settings' && <div className='w-full h-full flex items-center flex-col gap-[8px]'>
            <h3 className='text-[24px] text-white font-bold'>Налаштування в розробці</h3>
          </div>}
        </div>
      </div>
    </div>
  );
}

export const UserBackground: NextPage<{ src: string }> = ({ src }) => {
  return (
    <>
      <HashImage src={src} alt="..." fill parentClassName='!h-full' initialHash='L025[Uj[fQj[j[fQfQfQfQfQfQfQ' />
    </>
  )
}

export const UserListsContent: NextPage<{ user: IUser, isOwner: boolean }> = ({ user, isOwner }) => {
  return (
    <>
      {user.lists.some(el => !el.hidden) || isOwner ? <>
        <div className='user-library gap-[8px] w-full'>
          {user.lists.map(list => {
            return <LibItem list={list} isOwner={isOwner} link={routes.userList.path.replace('*', user.username).replace('*', list.id)} key={list.id} />
          })}
        </div>
      </> : <h3 className='text-[24px] text-white font-bold'>Всі теки цього користувача приховані</h3>}
    </>
  )
}