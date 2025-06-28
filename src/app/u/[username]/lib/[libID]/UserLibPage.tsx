'use client'

import { useEffect, useState } from 'react'
import { NextPage } from 'next';
import { useParams, usePathname } from 'next/navigation'
import { MaterialSymbol } from 'react-material-symbols';

import AnimeItem from '~/components/AnimeItem';
import LoadingContent from '~/components/LoadingContent';
import { useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import { cn } from '~/utils/classnames';
import { copyToClipboard } from '~/utils/utils';
import Tooltip from '../../../../../components/UI/Tooltip';
import { config } from '../../../../../config';
import { User, UserLib } from '../../../../../interfaces/UserIntf';
import { UserPageProps } from '../../page';
import { UserDivider, UserLibItem } from '../../UserPage';



interface UserSectionProps {
  user: User
}

interface UserLibProps extends UserSectionProps {
  lib: UserLib | undefined
  hydratedAnimes: HydratedAnime[]
}



export const UserLibSection: NextPage<UserLibProps> = ({ lib, user, hydratedAnimes }) => {
  const pathname = usePathname();
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);
  const [isLibVisible] = useState(isOwner || !lib?.settings.hidden)
  const [urlCopied, setUrlCopied] = useState(false)



  // Define title
  useEffect(() => {
    if (!lib) {
      window.document.title = `Не знайдена тека ― @${user.username} ― nekomi`;
      return;
    }

    if (isLibVisible) {
      window.document.title = `${lib.settings.name} ― @${user.username} ― nekomi`
    } else {
      window.document.title = `Приватна тека ― @${user.username} ― nekomi`
    }
  }, [])



  function copyLibURL() {
    copyToClipboard(`${config.URL.nekomi_site}${pathname}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }



  return isLibVisible && lib ? <div className="flex flex-col gap-[24px]">
    <div className="flex items-center w-full gap-[16px]">
      <div className="w-full flex-1">
        <UserDivider label={`${lib.settings.name} (${lib.titles.length})`} user={user} hidden={lib.settings.hidden} />
      </div>

      <div className="flex gap-[8px]">
        <Tooltip content={!lib.settings.hidden ? urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на теку' : 'Неможливо поділитися приватною текою'}>
          <button className={cn(`ui-button w-[40px] h-[40px] flex justify-center items-center rounded-[4px]`, urlCopied ? 'bg-green' : 'bg-transparent border-none hover:!bg-purple focus-visible:!bg-purple', lib.settings.hidden && 'hover:!bg-red focus-visible:!bg-red cursor-not-allowed')} onClick={copyLibURL} disabled={lib.settings.hidden}>
            <MaterialSymbol className={lib.settings.hidden ? 'text-grey-new' : 'text-white'} icon="link" size={24} />
          </button>
        </Tooltip>
      </div>
    </div>

    <div className="grid gap-[16px] grid-cols-6 max-[1470px]:grid-cols-5 max-[1250px]:grid-cols-4 max-[940px]:grid-cols-3 max-[720px]:grid-cols-2">
      {hydratedAnimes.length ? hydratedAnimes.toReversed().map((hydrated, i) => {
        return <AnimeItem className="max-[720px]:!min-w-[160px]" hydrated={hydrated} key={`userlib-${lib.id}--${i}`} libControls />
      }) : <LoadingContent />}
    </div>
  </div> : <div className="w-full flex justify-center items-center gap-[16px]">
    <MaterialSymbol icon="lock" size={20} className="text-grey-new" />
    <p className="text-grey-new">Ви не можете переглядати цю теку, або її просто не існує</p>
  </div>
}

export const UserLibOthers: NextPage<UserSectionProps> = ({ user }) => {
  const { libID: currentLibId } = useParams<UserPageProps>()



  return <div className="flex flex-col gap-[24px]">
    <UserDivider label={'Інші теки'} />

    <div className="flex flex-wrap gap-[16px]">
      {user.libs.some(el => !el.settings.hidden) ? <>
        {user.libs.filter(el => el.id !== currentLibId).map(lib => {
          return <UserLibItem lib={lib} user={user} key={`userlib-${user.id}--${lib.id}`} />
        })}
      </> : <div className="w-full flex justify-center items-center gap-[16px]">
        <MaterialSymbol icon="lock" size={20} className="text-grey-new" />
        <p className="text-grey-new">Здається, ви не можете переглядати жодну з його тек...</p>
      </div>}
    </div>
  </div>
}