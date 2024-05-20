'use client'

import { NextPage } from 'next';
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState, useRef, RefObject } from 'react'
import { IExtendedUser, IUser, IUserList } from '../../../interfaces/IUser';
import Tooltip from '../../../components/Tooltip';
import { useAppSelector } from '../../../hooks/redux';
import gsap from 'gsap';
import Link from 'next/link';

import './styles.scss'
import { routes } from '../../../routes';
import { HashImage } from 'hash-image';
import { config } from '../../../config';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { LoadingImage } from '../../../components/GeneralComponents';
import { IcoArrow, IcoCalendar, IcoCan, IcoHome, IcoInfo, IcoSettings, IcoStack, IcoWatched } from '../../../assets/Icons';
import { IcoFolderPlain } from '../../../assets/Folder';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoClockFilled } from '../../../assets/Clock';
import { IcoEyeHidden, IcoEyeVisible } from '../../../assets/Eye';

type TTab = 'home' | 'stats' | 'library' | 'settings';



/** Profile CSR sidebar item */
export const SidebarItem: NextPage<{ currTab: TTab, tab: TTab, setTab: (tab: TTab) => void }> = ({ setTab, tab, currTab }) => {
  return (
    <button className={`user-sidebar-item flex gap-[16px] items-center px-[8px] py-[4px] rounded-[2px] duration-200 hover:bg-dark/[.2] ${currTab === tab ? 'bg-dark/[.4]' : ''}`} onClick={() => setTab(tab)}>
      {tab === 'home' && <IcoHome width={24} height={24} />}
      {tab === 'library' && <IcoFolderPlain width={24} height={24} />}
      {tab === 'stats' && <IcoInfo width={24} height={24} />}
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



/** Profile CSR list item */
export const LibItem: NextPage<{ list: IUserList, isOwner: boolean, link: string }> = ({ list, isOwner, link }) => {
  return (
    <>
      {!list.hidden || list.hidden && isOwner ? <Link className='px-[16px] pt-[24px] pb-[8px] flex items-center flex-col gap-[16px] border border-white rounded-[2px] duration-200 hover:bg-dark/[.1]' href={link}>
        {list.id.match(/^fav/gi) && <IcoHeartFilled width={128} height={128} fill='#FF464E' />}
        {list.id.match(/^watched/gi) && <IcoWatched width={128} height={128} fill='#FF464E' />}
        {list.id.match(/^plans/gi) && <IcoClockFilled width={128} height={128} fill='#FF464E' />}
        {list.id.match(/^delayed/gi) && <IcoCan width={128} height={128} fill='#FF464E' />}
        {list.id.match(/^watching/gi) && <IcoStack width={128} height={128} fill='#FF464E' />}

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



/** User CSR header */
export const UserHeader: NextPage<{ user: IExtendedUser }> = ({ user }) => {
  return (
    <>
      <div className='flex w-full items-center gap-[40px] pb-[16px] max-[550px]:flex-col'>
        <div className='relative w-[128px] h-[128px] rounded-[4px] overflow-hidden'>
          <LoadingImage src={user.photoURL} />
        </div>

        <div className='flex flex-col gap-[4px]'>
          <div className='flex gap-[24px] items-center max-[550px]:justify-center'>
            <h1 className='text-[32px] text-white font-bold'>@{user.username}</h1>
          </div>

          <div className='flex items-center gap-[8px] max-[550px]:justify-center'>
            <Tooltip content={`Дата створення акаунту`}>
              <div className='flex items-center gap-[8px]'>
                <IcoCalendar className='user-created' />
                {/* May be deprecated in future */}
                <p className='text-[16px] text-white font-extralight'>{new Date(user.stats.createdAt).toLocaleString('uk').split(',')[0]}</p>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  )
}



/**  */
export const UserContent: NextPage<{ user: IExtendedUser, children: any }> = ({ user, children }) => {
  const router = useRouter();
  const state = useAppSelector(state => state.user)
  const [tab, setTab] = useState<TTab>('library')
  const [menuCollapsed, setMenuCollapsed] = useState(false)
  const [isOwner, setIsOwner] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Pass if user is not authorized
    if (!state.id) {
      setIsOwner(false);
      return;
    }

    if (state.id === user.id) {
      setIsOwner(true)
    } else {
      setIsOwner(false)
    }
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
            <IcoArrow width={24} height={24} className={`duration-200 ${menuCollapsed ? '-rotate-[90deg]' : 'rotate-[90deg]'}`} />
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



/** User CSR background */
export const UserBackground: NextPage<{ src: string }> = ({ src }) => {
  return <LoadingImage src={src} />
}



/** User CSR lists */
export const UserListsContent: NextPage<{ user: IExtendedUser, isOwner: boolean }> = ({ user, isOwner }) => {
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