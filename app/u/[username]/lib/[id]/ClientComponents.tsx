'use client'

import { NextPage } from 'next';
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { IUser, IUserLib } from '../../../../../interfaces/IUser';
import { UserDivider, UserLibCard } from '../../ClientComponents';
import { TitleCardNew, copyToClipboard } from '../../../../../components/GeneralComponents';
import { ITitle } from '../../../../../interfaces/ITitle';
import { getUTC } from '../../../../../components/handlers';
import Tooltip from '../../../../../components/Tooltip';
import { IcoChain } from '../../../../../assets/Icons';
import { config } from '../../../../../config';

// export const ClientComponents: NextPage = (props) => {
//   return (
//     <div className="ClientComponents">

//     </div>
//   );
// }

/** User lib section */
export const UserLib: NextPage<{ lib: IUserLib, isOwner: boolean, titles: ITitle[] }> = ({ isOwner, lib, titles }) => {
  const pathname = usePathname();
  const [urlCopied, setUrlCopied] = useState(false)

  function copyLibURL() {
    copyToClipboard(`${config.URL.baseURL}${pathname}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }

  return (
    <div className='flex flex-col gap-[24px]'>
      <div className='flex items-center w-full'>
        <div className='w-full flex-1'>
          <UserDivider label={`${lib.settings.name} (${lib.titles.length})`} isOwner={isOwner} hidden={lib.settings.hidden} />
        </div>

        <div className='flex gap-[8px]'>
          <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на теку'}>
            <button className={`p-[8px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px]`} onClick={() => copyLibURL()}>
              <IcoChain width={24} height={24} className='max-[600px]:w-[24px] max-[600px]:h-[24px]' />
            </button>
          </Tooltip>

          {/* Settings */}
        </div>
      </div>

      {isOwner || !lib.settings.hidden ? <div className='grid gap-[16px]' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        {titles.map(title => {
          return <TitleCardNew title={title} key={`${title.id}-${Math.random().toFixed(3).split('.')[1]}`} />
        })}
      </div> : <p className='text-lightGrey text-center'>Ця тека приватна</p>}
    </div>
  );
}

/** User other libs */
export const UserLibOthers: NextPage<{ user: IUser, isOwner: boolean, currentLibID: string }> = ({ isOwner, user, currentLibID }) => {
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