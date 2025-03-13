'use client'

import { useEffect, useMemo, useState } from 'react'
import { NextPage } from 'next';
import { useParams, usePathname } from 'next/navigation'
import { MaterialSymbol } from 'react-material-symbols';

import AnimeItem from '~/components/AnimeItem';
import { HandleClientError } from '~/components/Errors';
import { useAppSelector } from '~/hooks/redux';
import { HydratedAnime } from '~/interfaces/AnimeIntf';
import API from '~/services/ApiService';
import { IcoChain } from '../../../../../assets/Icons';
import { copyToClipboard, LoadingContent } from '../../../../../components/Components';
import Tooltip from '../../../../../components/UI/Tooltip';
import { config } from '../../../../../config';
import { IUser, IUserLib } from '../../../../../interfaces/IUser';
import { UserPageProps } from '../../page';
import { UserDivider, UserLibCard } from '../../UserPage';



interface UserSectionProps {
  user: IUser
}

interface UserLibProps extends UserSectionProps {
  lib: IUserLib | undefined
}



export const UserLibSection: NextPage<UserLibProps> = ({ lib, user }) => {
  const pathname = usePathname();
  const currentUser = useAppSelector(state => state.user);

  const [isOwner] = useState(user.id === currentUser.id);
  const [isLibVisible] = useState(isOwner || !lib?.settings.hidden)
  const [urlCopied, setUrlCopied] = useState(false)
  const [hydratedAnimes, setHydratedAnimes] = useState<HydratedAnime[]>([])



  useMemo(() => {
    if (!isLibVisible || !lib) return;

    (async function () {
      try {
        const { results } = await API.getLib({ query: user.id, libId: lib.id })

        setHydratedAnimes(results);
      } catch (e) { HandleClientError(e) }
    })()
  }, [])

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
    copyToClipboard(`${config.URL.baseURL}${pathname}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }



  return isLibVisible && lib ? <div className="flex flex-col gap-[24px]">
    <div className="flex items-center w-full">
      <div className="w-full flex-1">
        <UserDivider label={`${lib.settings.name} (${lib.titles.length})`} user={user} hidden={lib.settings.hidden} />
      </div>

      <div className="flex gap-[8px]">
        <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на теку'}>
          <button className={`p-[8px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px]`} onClick={copyLibURL}>
            <IcoChain width={24} height={24} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
          </button>
        </Tooltip>
      </div>
    </div>

    <div className="grid gap-[16px] grid-cols-6 max-[1470px]:grid-cols-5 max-[1250px]:grid-cols-4 max-[940px]:grid-cols-3 max-[720px]:grid-cols-2">
      {hydratedAnimes.length ? hydratedAnimes.toReversed().map((hydrated, i) => {
        return <AnimeItem className="max-[720px]:!min-w-[160px]" hydrated={hydrated} key={`userlib-${lib.id}--${i}`} />
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
    <UserDivider label={'Інші теки'} user={user} hidden={false} />

    <div className="flex flex-wrap gap-[16px]">
      {user.libs.some(el => !el.settings.hidden) ? <>
        {user.libs.filter(el => el.id !== currentLibId).map(lib => {
          return <UserLibCard lib={lib} user={user} key={`userlib-${user.id}--${lib.id}`} />
        })}
      </> : <div className="w-full flex justify-center items-center gap-[16px]">
        <MaterialSymbol icon="lock" size={20} className="text-grey-new" />
        <p className="text-grey-new">Здається, ви не можете переглядати жодну з його тек...</p>
      </div>}
    </div>
  </div>
}