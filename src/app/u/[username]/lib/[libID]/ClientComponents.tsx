'use client'



import { useState } from 'react'
import { NextPage } from 'next';
import { usePathname } from 'next/navigation'

import AnimeItem from '~/components/AnimeItem';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { IcoChain } from '../../../../../assets/Icons';
import { copyToClipboard } from '../../../../../components/Components';
import Tooltip from '../../../../../components/UI/Tooltip';
import { config } from '../../../../../config';
import { IUser, IUserLib } from '../../../../../interfaces/IUser';
import { UserDivider, UserLibCard } from '../../ClientComponents';



interface UserLibProps {
  lib: IUserLib
  isOwner: boolean
  hydrateds: HydratedAnime[]
}


/** User lib section */
export const UserLib: NextPage<UserLibProps> = ({ isOwner, lib, hydrateds }) => {
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
    <div className="flex flex-col gap-[24px]">
      <div className="flex items-center w-full">
        <div className="w-full flex-1">
          <UserDivider label={isOwner || !lib.settings.hidden ? `${lib.settings.name} (${lib.titles.length})` : '—'} isOwner={isOwner} hidden={lib.settings.hidden} />
        </div>

        <div className="flex gap-[8px]">
          <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на теку'}>
            <button className={`p-[8px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px]`} onClick={() => copyLibURL()}>
              <IcoChain width={24} height={24} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
            </button>
          </Tooltip>

          {/* Settings */}
        </div>
      </div>

      {isOwner || !lib.settings.hidden ? <div className="grid gap-[16px] grid-cols-6 max-[1470px]:grid-cols-5 max-[1250px]:grid-cols-4 max-[940px]:grid-cols-3 max-[720px]:grid-cols-2">
        {/* {animes.toReversed().map(anime => {
          return <TitleCard className="max-[720px]:!min-w-[160px]" title={anime} key={`${anime.uuid}-${Math.random().toFixed(3).split('.')[1]}`} />
        })} */}

        {hydrateds.toReversed().map((hydrated, i) => {
          return <AnimeItem className="max-[720px]:!min-w-[160px]" hydrated={hydrated} key={`userlib-${lib.id}--${i}`} />
        })}
      </div> : <p className="text-lightGrey text-center">Ця тека приватна</p>}
    </div>
  );
}



/** User other libs */
export const UserLibOthers: NextPage<{ user: IUser, isOwner: boolean, currentLibID: string }> = ({ isOwner, user, currentLibID }) => {
  return (
    <div className="flex flex-col gap-[24px]">
      <UserDivider label={'Інші теки'} isOwner={isOwner} hidden={false} />

      <div className="flex flex-wrap gap-[16px]">
        {user.libs.some(el => !el.settings.hidden) ? <>
          {user.libs.filter(el => el.id !== currentLibID).map(lib => {
            return <UserLibCard lib={lib} isOwner={isOwner} username={user.username} key={`otherLib-${lib.id}`} />
          })}
        </> : <p className="text-lightGrey text-center">Всі теки цього користувача приватні</p>}
      </div>
    </div>
  );
}