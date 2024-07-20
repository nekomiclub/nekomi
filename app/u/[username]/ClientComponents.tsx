'use client'

import { NextPage } from 'next';
import { useState, useEffect } from 'react'

import { IUser, IUserLib } from '../../../interfaces/IUser';
import { LoadingImage, copyToClipboard } from '../../../components/Components';
import { IcoCalendar, IcoCan, IcoChain, IcoSettings, IcoStack, IcoUser, IcoWatched } from '../../../assets/Icons';
import Tooltip from '../../../components/Tooltip';
import { addZeroIfNumberSingle } from '../../../components/handlers';
import Link from 'next/link';
import { config } from '../../../config';
import { IcoEyeHidden, IcoEyeVisible } from '../../../assets/Eye';
import { IcoHeartFilled } from '../../../assets/Heart';
import { IcoClockFilled } from '../../../assets/Clock';

// export const ClientComponents: NextPage = (props) => {
//   return (
//     <div className="ClientComponents">

//     </div>
//   );
// }

/** User header
 * @param primaryPage Defines if current page primary. If not, at the menu will appear button navigates to primary page
 */
export const UserHeader: NextPage<{ user: IUser, isOwner: boolean, primaryPage?: boolean }> = ({ user, primaryPage, isOwner }) => {
  const [urlCopied, setUrlCopied] = useState(false)

  function copyProfileURL() {
    copyToClipboard(`${config.URL.baseURL}/u/${user.username}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }

  return (
    <div className='bg-dark'>
      {/* Image */}
      <div className='w-full h-[400px] flex justify-center items-center bg-darkGrey'>
        <p className='text-[60px] gradient--primary-text font-bold uppercase max-[600px]:text-[40px] select-none'>animee.club</p>
      </div>

      <div className={`wrapperNew h-[128px] max-[820px]:h-[270px]`}>
        {/* Profile */}
        <div className={`flex gap-[32px] w-full relative -top-[128px] max-[820px]:flex-col max-[820px]:items-center`}>
          {/* Avatar */}
          <LoadingImage src={user.avatar} width='256px' height='256px' parentClassName='shrink-0' />

          {/* Container */}
          <div className={`flex justify-between items-center w-full relative top-[64px] max-[820px]:top-0`}>
            {/* User */}
            <div className='flex flex-col gap-[8px]'>
              <div className='flex items-center gap-[16px]'>
                <p className='text-white text-[32px] font-bold max-[1140px]:text-[24px] break-all' title={user.username}>@{user.username}</p>

                {/* Badges */}
                <div></div>
              </div>

              <Tooltip content='Дата реєстрації акаунту'>
                <div className='flex items-center gap-[16px]'>
                  <IcoCalendar width={32} height={32} />
                  <p className='text-white'>{addZeroIfNumberSingle(new Date(user.statistics.accountCreated).getUTCDate())}.{addZeroIfNumberSingle(new Date(user.statistics.accountCreated).getUTCMonth() + 1)}.{new Date(user.statistics.accountCreated).getUTCFullYear()}</p>
                </div>
              </Tooltip>
            </div>

            {/* Settings */}
            <div className='flex gap-[8px]'>
              <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на профіль'}>
                <button className={`p-[16px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px] max-[600px]:p-[12px]`} onClick={() => copyProfileURL()}>
                  <IcoChain width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                </button>
              </Tooltip>

              {isOwner && <Tooltip content='Налаштування (в розробці)'>
                <button className='p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]' disabled>
                  <IcoSettings width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                </button>
              </Tooltip>}

              {!primaryPage && <Link href={`${config.URL.baseURL}/u/${user.username}`}>
                <Tooltip content='На головну профілю'>
                  <button className={`p-[16px] duration-200 bg-darkGrey hover:bg-gradientPrimaryFallback focus-visible:bg-gradientPrimaryFallback rounded-[4px] max-[600px]:p-[12px]`}>
                    <IcoUser width={32} height={32} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
                  </button>
                </Tooltip>
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** User section divider */
export const UserDivider: NextPage<{ label: string, hidden: boolean, isOwner: boolean }> = ({ label, hidden, isOwner }) => {
  return (
    <Tooltip content={`Цей розділ ${hidden ? 'прихований' : 'публічний'}`} className='flex items-center gap-[16px]'>
      <p className='text-white text-[32px] font-bold flex-shrink-0 max-[600px]:text-[24px]'>{label}</p>

      {isOwner && <div className='flex-shrink-0'>
        {hidden ? <IcoEyeHidden width={24} height={24} className='max-[600px]:w-[16px] max-[600px]:h-[16px]' /> : <IcoEyeVisible width={24} height={24} />}
      </div>}

      <span className='block w-full h-[3px] bg-darkGrey'></span>
    </Tooltip>
  );
}

export const UserSectionLibs: NextPage<{ user: IUser, isOwner: boolean }> = ({ isOwner, user }) => {
  return (
    <div className='flex flex-col gap-[24px]' id='user-libs'>
      <UserDivider label='Теки' hidden={false} isOwner={isOwner} />

      <div className='grid gap-[16px]' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
        {user.libs.some(el => !el.settings.hidden) ? <>
          <UserLibCard lib={user.libs.find(el => el.type === 'favorite')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'watching')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'plans')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'watched')!} isOwner={isOwner} username={user.username} />
          <UserLibCard lib={user.libs.find(el => el.type === 'delayed')!} isOwner={isOwner} username={user.username} />
        </> : <p className='text-lightGrey'>Всі теки цього користувача приватні</p>}
      </div>
    </div>
  );
}

/** User lib card */
export const UserLibCard: NextPage<{ lib: IUserLib, isOwner: boolean, username: string }> = ({ lib, isOwner, username }) => {
  return (
    <>
      {!lib.settings.hidden || isOwner ? <Link href={`${config.URL.baseURL}/u/${username}/lib/${lib.id}`} className='p-[24px] bg-darkGrey rounded-[4px] flex flex-col items-center gap-[24px] w-full duration-200 hover:bg-grey focus-visible:bg-grey'>
        {lib.type === 'favorite' && <IcoHeartFilled width={128} height={128} fill='#FF464E' className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'watching' && <IcoStack width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'plans' && <IcoClockFilled width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'watched' && <IcoWatched width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}
        {lib.type === 'delayed' && <IcoCan width={128} height={128} className='max-[480px]:w-[80px] max-[480px]:h-[80px]' />}

        <div className='flex items-center gap-[8px]'>
          <p className='text-white text-center text-[24px]'>
            {lib.type === 'favorite' && `Улюблені (${lib.titles.length})`}
            {lib.type === 'watching' && `Переглядаю (${lib.titles.length})`}
            {lib.type === 'plans' && `Плани (${lib.titles.length})`}
            {lib.type === 'watched' && `Переглянуті (${lib.titles.length})`}
            {lib.type === 'delayed' && `Відкладені (${lib.titles.length})`}
          </p>

          {isOwner ? <>
            {lib.settings.hidden ? <Tooltip content='Прихована тека'>
              <IcoEyeHidden width={24} height={24} />
            </Tooltip> : <Tooltip content='Публічна тека'>
              <IcoEyeVisible width={24} height={24} />
            </Tooltip>}
          </> : <></>}
        </div>
      </Link> : <></>}
    </>
  )
}

export const UserSectionStats: NextPage<{ user: IUser, isOwner: boolean }> = ({ isOwner, user }) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <UserDivider label='Статистика' hidden={false} isOwner={isOwner} />
      <p className='text-lightGrey text-[16px] text-center'>Статистика буде згодом</p>
    </div>
  );
}

export const UserSectionTakePart: NextPage<{ user: IUser, isOwner: boolean }> = ({ isOwner, user }) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <UserDivider label='Команди озвучення' hidden={false} isOwner={isOwner} />
      <p className='text-lightGrey text-[16px] text-center'>Участь у командах озвучення буде згодом</p>
    </div>
  );
}