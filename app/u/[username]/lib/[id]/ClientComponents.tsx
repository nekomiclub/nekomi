'use client'

import { NextPage } from 'next';
import { useState, useEffect } from 'react'
import { IExtendedUser, IUserLib } from '../../../../../interfaces/IUser';
import { UserDivider, UserLibCard } from '../../ClientComponents';
import { TitleCardNew } from '../../../../../components/GeneralComponents';
import { ITitle } from '../../../../../interfaces/ITitle';
import { getUTC } from '../../../../../components/handlers';

// export const ClientComponents: NextPage = (props) => {
//   return (
//     <div className="ClientComponents">

//     </div>
//   );
// }

/** User lib section */
export const UserLib: NextPage<{ lib: IUserLib, isOwner: boolean, titles: ITitle[] }> = ({ isOwner, lib, titles }) => {
  return (
    <div className='flex flex-col gap-[24px]'>
      <UserDivider label={lib.settings.name} isOwner={isOwner} hidden={lib.settings.hidden} />

      {isOwner || !lib.settings.hidden ? <div className='grid gap-[16px]' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {titles.map(title => {
          return <TitleCardNew title={title} key={`${title.id}-${Math.random().toFixed(3).split('.')[1]}`} />
        })}
      </div> : <p className='text-lightGrey text-center'>Ця тека приватна</p>}
    </div>
  );
}

/** User other libs */
export const UserLibOthers: NextPage<{ user: IExtendedUser, isOwner: boolean, currentLibID: string }> = ({ isOwner, user, currentLibID }) => {
  return (
    <div className='flex flex-col gap-[24px]'>
      <UserDivider label={'Інші теки'} isOwner={isOwner} hidden={false} />

      <div className='grid gap-[16px]' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
        {user.libs.some(el => !el.settings.hidden) ? <>
          {user.libs.filter(el => el.id !== currentLibID).map(lib => {
            return <UserLibCard lib={lib} isOwner={isOwner} username={user.username} key={`otherLib-${lib.id}`} />
          })}
        </> : <p className='text-lightGrey text-center'>Всі теки цього користувача приватні</p>}
      </div>
    </div>
  );
}