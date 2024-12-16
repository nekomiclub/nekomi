'use client'



import { useEffect, useState } from 'react';
import { Dialog, Layer, Trigger } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import { addZeroIfNumberSingle, wordDeclination } from '~/components/handlers';
import { ISearchExtended } from '~/components/Header';
import { $api } from '~/components/http';
import GroupLabel from '~/components/UI/GroupLabel';
import StyledImage from '~/components/UI/StyledImage';
import { useAppSelector } from '~/hooks/redux';
import { IUser } from '~/interfaces/IUser';
import { IcoCalendar, IcoChain, IcoCheckmark, IcoSettings } from '../../../assets/Icons';
import { copyToClipboard } from '../../../components/Components';
import Tooltip from '../../../components/UI/Tooltip';
import { config } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';



interface IProps {
  dubber: IDubber
}

export const DubberHeader: NextPage<IProps> = ({ dubber }) => {
  const settingsPopupID = 'dubber-settings-popup'
  const user = useAppSelector(state => state.user);

  const [canEditTeam] = useState(user.dubberTeamMember === dubber.id || user.capabilities.includes('root'))

  return (
    <>
      {canEditTeam && <SettingsPopup dubber={dubber} settingsPopupID={settingsPopupID} />}

      <div className={`bg-dark relative`} style={{ paddingTop: `92px` }}>
        {/* Image */}
        <div className="w-full h-fit max-h-[500px] aspect-[16/9] relative max-[1140px]:aspect-[16/7]">
          <StyledImage src={dubber.banner} width="100%" height="100%" priority alt="banner" className="w-full h-full object-cover" />
        </div>

        {/* Layouts */}
        <div className="wrapper z-[2]">
          {/* PC */}
          <div className={`min-[670px]:flex hidden flex-row justify-between absolute bottom-0 left-0 w-full bg-dark/[.3] backdrop-blur-[32px] px-[32px] py-[16px]`}>
            <div className="flex gap-[32px] min-[670px]">
              <AvatarComponent dubber={dubber} />

              <DubberComponent dubber={dubber} />
            </div>

            <SettingsComponent dubber={dubber} settingsPopupID={settingsPopupID} canEditTeam={canEditTeam} />
          </div>

          {/* Mobile */}
          <div className="max-[670px]:flex flex-col hidden gap-[16px] items-center pt-[40px]">
            <AvatarComponent dubber={dubber} />

            <div className="flex justify-between items-center gap-[16px] w-full">
              <DubberComponent dubber={dubber} />
              <SettingsComponent dubber={dubber} settingsPopupID={settingsPopupID} canEditTeam={canEditTeam} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AvatarComponent({ dubber }: { dubber: IDubber }) {
  return <div className="w-[256px] h-full relative max-[820px]:w-[160px] max-[670px]:h-[32px]">
    <StyledImage src={dubber.avatar} width={'256px'} height={'256px'} className="!absolute bottom-0 left-0 rounded-[4px] w-full h-fit aspect-square max-[820px]:!w-[160px] max-[820px]:!h-[160px]" priority alt="avatar" />
  </div>
}

function DubberComponent({ dubber }: { dubber: IDubber }) {
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[16px]">
      <p className="text-white text-[32px] font-bold max-[1140px]:text-[24px] break-all" title={dubber.nameUkr}>{dubber.nameUkr}</p>
    </div>

    <Tooltip content="Дата реєстрації команди">
      <div className="flex items-center gap-[16px]">
        <IcoCalendar width={32} height={32} />
        <p className="text-white">{addZeroIfNumberSingle(new Date(dubber.statistics.createdAt).getUTCDate())}.{addZeroIfNumberSingle(new Date(dubber.statistics.createdAt).getUTCMonth() + 1)}.{new Date(dubber.statistics.createdAt).getUTCFullYear()}</p>
      </div>
    </Tooltip>
  </div>
}

function SettingsComponent({ dubber, settingsPopupID, canEditTeam }: { dubber: IDubber, settingsPopupID: string, canEditTeam: boolean }) {
  const [urlCopied, setUrlCopied] = useState(false)



  function copyProfileURL() {
    copyToClipboard(`${config.URL.baseURL}/dub/${dubber.code}`);
    setUrlCopied(true);

    setTimeout(() => {
      setUrlCopied(false);
    }, 3000);
  }

  return <div className="flex items-center gap-[8px]">
    <Tooltip content={urlCopied ? 'Посилання скопійовано!' : 'Копіювати посилання на профіль'}>
      <button className={`p-[16px] duration-200 ${urlCopied ? 'bg-green' : 'hover:bg-purple focus-visible:bg-purple'} rounded-[4px] max-[600px]:p-[12px]`} onClick={() => copyProfileURL()}>
        <IcoChain width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </button>
    </Tooltip>

    {/* {canEditTeam && <Tooltip content="Налаштування">
      <Trigger id={settingsPopupID} className="p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]">
        <IcoSettings width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </Trigger>
    </Tooltip>} */}
  </div>
}

function SettingsPopup({ dubber, settingsPopupID }: { settingsPopupID: string, dubber: IDubber }) {
  const [addUsername, setAddUsername] = useState('')
  const [debouncedUsername] = useDebounce(addUsername, 500)
  const [usersResult, setUsersResult] = useState<IUser[]>([])



  useEffect(() => {
    if (!debouncedUsername) return;

    (async function () {
      try {
        const { data } = await $api.get<{ results: ISearchExtended[] }>(`/search`, {
          params: {
            q: debouncedUsername,
            engines: JSON.stringify('user')
          }
        })

        setUsersResult(data.results.map(el => el.item))
      } catch (e) {
        console.error(`Помилка при пошуку юзерів`, e)
      }
    })()
  }, [debouncedUsername])



  return <Layer className="bg-dark/[.1] backdrop-blur-[64px] flex justify-center items-center overflow-y-auto px-[8px] py-[40px]">
    <Dialog id={settingsPopupID} className="px-[24px] py-[16px] rounded-[4px] bg-dark flex flex-col gap-[16px] flex-1 h-[70vh] max-w-[1170px] overflow-y-auto overflow-x-hidden">
      <div className="flex items-center gap-[16px]">
        <IcoSettings width={24} height={24} />
        <GroupLabel label={`Налаштування ${dubber.nameUkr}`} />
      </div>

      <GroupLabel label={`Команда (${dubber.members.length} ${wordDeclination(dubber.members.length, ['людина', 'людини', 'людей'])})`} />

      {/* <div className="flex flex-col gap-[8px] relative">
        <p className="text-white">Додати нового учасника</p>
        <Input state={addUsername} stateSetter={setAddUsername} placeholder="@username" className="!bg-darkGrey" />

        <div className="absolute top-0 left-0 w-full px-[12px] py-[8px] flex flex-col gap-[8px] max-h-[400px] rounded-[2px] bg-darkGrey">
          {usersResult.map(user => {
            return <SettingsAddUserResult user={user} key={`add-user--${user.id}`} />
          })}
        </div>
      </div> */}
    </Dialog>
  </Layer>
}

// function SettingsAddUserResult({ user }: { user: IUser }) {
//   return <button className="flex items-center gap-[16px]">
//     <StyledImage src={user.avatar} width="64px" height="64px" className="rounded-[4px] overflow-hidden" />

//     <div className="flex flex-col gap-[8px]">
//       <p className="text-white">@{user.username}</p>

//       <div className="flex items-center gap-[8px]">
//         {user.userDubberTeamStatus === 'invite_free' && <IcoCheckmark width={16} height={16} fill="#2ecc71" />}
//         {user.userDubberTeamStatus === 'telegram_not_linked' && <IcoCheckmark width={16} height={16} />}
//         {user.userDubberTeamStatus === 'other_team_member' && <IcoCheckmark width={16} height={16} />}

//         {user.userDubberTeamStatus === 'invite_free' && <p className="text-green">Ви можете додати цього користувача у команду</p>}
//         {user.userDubberTeamStatus === 'telegram_not_linked' && <p className="text-orange">Корисувач ще не прив’язав телеграм до свого акаунту</p>}
//         {user.userDubberTeamStatus === 'other_team_member' && <p className="text-red">Користувач вже є учасником іншої команди</p>}
//       </div>
//     </div>
//   </button>
// }

export const DubberAnswerInvite: NextPage<{ dubber: IDubber, invite: 'accept' | 'decline' }> = ({ dubber, invite }) => {
  const router = useRouter();
  const pathname = usePathname();

  const dialog_invite_id = 'dubber-invite-accept'

  const [is_dialog_open, setIsDialogOpen] = useState(invite === 'accept' || invite === 'decline');



  async function closeDialog() {
    try {
      if (invite === 'accept') {
        await $api.post(`/dubber/invite/accept`, {
          dubber_id: dubber.id
        });
      } else if (invite === 'decline') {
        await $api.post(`/dubber/invite/decline`, {
          dubber_id: dubber.id
        });
      }
    } catch (e) {
      console.error(e);
    }

    router.replace(pathname, { scroll: false });
  }

  return (
    <Layer className="flex justify-center items-center px-[24px] py-[32px]" settings={{ exitOnEscape: false, exitOnLayer: false }}>
      <Dialog id={dialog_invite_id} state={is_dialog_open} stateSetter={setIsDialogOpen} className="max-w-[720px] w-full h-[500px] bg-dark rounded-[4px] overflow-hidden px-[32px] py-[24px] pt-0 flex flex-col items-center justify-between">
        <div className="flex flex-col gap-[80px]">
          <div className="w-full h-[200px] absolute top-0 left-0">
            <StyledImage height="100%" width="100%" src={dubber.banner} />

            <StyledImage width="128px" height="128px" src={dubber.avatar} className="rounded-[128px] overflow-hidden absolute -translate-y-[50%] left-[50%] -translate-x-[50%] z-[2]" />
          </div>

          {/* Header placeholder */}
          <div className="w-full h-[200px]"></div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="text-white text-[24px] font-bold text-center">{dubber.name}</h3>
            <p className="text-lightGrey text-center">
              {invite === 'accept' && 'Ти доєднався до команди озвучення, вітаємо!'}
              {invite === 'decline' && 'Ти відхилив запрошення в команду озвучення'}
            </p>
          </div>
        </div>

        <Trigger id={dialog_invite_id} className="flex gap-[16px] items-center px-[16px] py-[8px] rounded-[4px] bg-darkGrey duration-200 hover:bg-gradientPrimaryFallback" onClick={closeDialog}>
          <p className="uppercase text-white">зрозуміло</p>
          <IcoCheckmark width={24} height={24} />
        </Trigger>
      </Dialog>
    </Layer>
  );
}