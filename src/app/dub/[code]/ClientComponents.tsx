'use client'



import { useEffect, useMemo, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import { Dialog, Layer, Trigger } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useDebounce } from 'use-debounce';

import { addZeroIfNumberSingle, wordDeclination } from '~/components/handlers';
import { ISearchExtended } from '~/components/Header';
import { $api } from '~/components/http';
import GroupLabel from '~/components/UI/GroupLabel';
import Input from '~/components/UI/Input';
import StyledImage from '~/components/UI/StyledImage';
import { useAppSelector } from '~/hooks/redux';
import { TRoleCapability } from '~/interfaces/IRoles';
import { IUser } from '~/interfaces/IUser';
import { Routes } from '~/routes';
import { IcoArrow, IcoCalendar, IcoCan, IcoChain, IcoCheckmark, IcoCrown, IcoPen, IcoPeople, IcoSettings } from '../../../assets/Icons';
import { copyToClipboard } from '../../../components/Components';
import Tooltip from '../../../components/UI/Tooltip';
import { config } from '../../../config';
import { IDubber, IDubberMember, TDubberMemberRole } from '../../../interfaces/IDubber';



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

export const DubberMembers: NextPage<{ dubber: IDubber }> = ({ dubber }) => {
  return <>
    <GroupLabel label="Команда" className="text-[32px]" />
    <div className="flex gap-[16px] flex-wrap justify-center">
      {dubber.members.length ? dubber.members.map(member => {
        return <DubberMemberComponent member={member} key={`dubber-member--${member.id}`} />
      }) : <p className="text-lightGrey">Команда відсутня</p>}
    </div>
  </>
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

function DubberMemberComponent({ member }: { member: IDubberMember }) {
  const [user, setUser] = useState<IUser>()
  const [userAvatar, setUserAvatar] = useState('')



  useMemo(() => {
    (async function () {
      try {
        const { data } = await $api.get<{ user: IUser }>(`/user/${member.id}`);

        setUser(data.user);
        setUserAvatar(data.user.avatar)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])



  return <Link href={`${Routes.user_profile.path}/${user?.username}`} className="relative w-[256px] h-[256px]">
    <Tooltip content={
      member.role === 'leader' ? 'Лідер' :
        member.role === 'editor' ? 'Редактор' :
          member.role === 'member' ? 'Учасник' :
            'Роль невідома'
    }>
      <div className="absolute top-0 right-0 p-[8px] bg-dark/[.8] backdrop-blur-[40px] z-[3]">
        {member.role === 'leader' && <IcoCrown width={24} height={24} />}
        {member.role === 'editor' && <IcoPen width={24} height={24} />}
        {member.role === 'member' && <IcoPeople width={24} height={24} />}
      </div>
    </Tooltip>

    <div className="absolute bottom-0 left-0 px-[8px] py-[8px] bg-dark/[.8] backdrop-blur-[40px] z-[3] w-full">
      <p className="text-white text-center">@{user?.username}</p>
    </div>

    <StyledImage src={userAvatar} width="100%" height="100%" className="absolute top-0 left-0" />
  </Link>
}

function SettingsComponent({ dubber, settingsPopupID, canEditTeam }: { dubber: IDubber, settingsPopupID: string, canEditTeam: boolean }) {
  const user = useAppSelector(state => state.user);
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

    {user.capabilities.includes('root') && <Tooltip content="Налаштування">
      <Trigger id={settingsPopupID} className="p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]">
        <IcoSettings width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </Trigger>
    </Tooltip>}
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

      <div className="flex flex-col gap-[8px] relative">
        <p className="text-white">Додати нового учасника</p>

        <Menu className="w-full" settings={{ align: 'stretch' }}>
          <MenuTrigger className="w-full" primary>
            <Input state={addUsername} stateSetter={setAddUsername} placeholder="@username" className="!bg-darkGrey w-full" />
          </MenuTrigger>

          <MenuWrapper className="bg-darkGrey px-[12px] py-[8px] flex flex-col gap-[4px]">
            {usersResult.map(user => {
              return <SettingsInviteUser user={user} dubber={dubber} key={`dubber-member-add--${user.id}`} />
            })}
          </MenuWrapper>
        </Menu>

        <span className="w-full h-[3px] bg-darkGrey"></span>

        <div className="flex flex-col gap-[4px]">
          {dubber.members.map(user => {
            return <SettingsEditUser member={user} dubber={dubber} key={`dubber-member--${user.id}`} />
          })}
        </div>
      </div>
    </Dialog>
  </Layer>
}

function SettingsInviteUser({ user, dubber }: { user: IUser, dubber: IDubber }) {
  async function sendInvite() {
    try {
      await $api.post(`/dubber/invite/send`, {
        dubber_id: dubber.id,
        user_id: user.id
      })

      alert(`Запрошення ${user.username} відправлено!`)
    } catch (e) {
      console.error(`Помилка при надсиланні запрошення`, e)
    }
  }

  return <button className="flex items-center gap-[16px] duration-200 hover:bg-grey" onClick={sendInvite}>
    <StyledImage src={user.avatar} width="64px" height="64px" className="rounded-[4px] overflow-hidden" />

    <div className="flex flex-col gap-[8px]">
      <p className="text-white">@{user.username}</p>

      <div className="flex items-center gap-[8px]">
        {/* {user.userDubberTeamStatus === 'invite_free' && <IcoCheckmark width={16} height={16} fill="#2ecc71" />}
        {user.userDubberTeamStatus === 'telegram_not_linked' && <IcoCheckmark width={16} height={16} />}
        {user.userDubberTeamStatus === 'other_team_member' && <IcoCheckmark width={16} height={16} />}

        {user.userDubberTeamStatus === 'invite_free' && <p className="text-green">Ви можете додати цього користувача у команду</p>}
        {user.userDubberTeamStatus === 'telegram_not_linked' && <p className="text-orange">Корисувач ще не прив’язав телеграм до свого акаунту</p>}
        {user.userDubberTeamStatus === 'other_team_member' && <p className="text-red">Користувач вже є учасником іншої команди</p>} */}
      </div>
    </div>
  </button>
}

function SettingsEditUser({ member, dubber }: { member: IDubberMember, dubber: IDubber }) {
  const currentUser = useAppSelector(state => state.user);

  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    (async function () {
      try {
        const { data } = await $api.get<{ user: IUser, parsedRoles: TRoleCapability[] }>(`/user/${member.id}`, {
          params: {
            detailed: true
          }
        });

        setUser(data.user);
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])



  async function excludeUser() {
    if (!currentUser.capabilities.includes('root')) return

    try {
      await $api.post('/dubber/settings/member/exclude', {
        dubber_id: dubber.id,
        user_id: user?.id
      })

      alert(`Юзера ${user?.username} виключено з команди`)
    } catch (e) {
      console.error(`Помилка при виключенні юзера`, e)
    }
  }

  return <div className="px-[16px] py-[8px] rounded-[2px] bg-darkGrey flex justify-between items-center gap-[16px]">
    <div className="flex items-center gap-[40px]">
      <div className="w-[340px] flex gap-[8px] items-center">
        <StyledImage src={user?.avatar ?? ''} width="32px" height="32px" />
        <p className="text-white font-bold">{user?.username}</p>
      </div>

      <Menu settings={{ align: 'left' }}>
        <MenuTrigger primary className="flex items-center gap-[16px]" disabled={!currentUser.capabilities.includes('root')}>
          {member.role === 'leader' && <IcoCrown width={16} height={16} />}
          {member.role === 'editor' && <IcoPen width={16} height={16} />}
          {member.role === 'member' && <IcoPeople width={16} height={16} />}

          <p className="text-white">
            {member.role === 'leader' && 'Лідер'}
            {member.role === 'editor' && 'Редактор'}
            {member.role === 'member' && 'Учасник'}
          </p>

          {currentUser.capabilities.includes('root') && <IcoArrow width={16} height={16} />}
        </MenuTrigger>

        <MenuWrapper className="!w-[200px] px-[12px] py-[8px] bg-darkGrey flex flex-col gap-[4px]">
          <SettingsEditUserRole role="leader" dubber={dubber} member={member} />
          <SettingsEditUserRole role="editor" dubber={dubber} member={member} />
          <SettingsEditUserRole role="member" dubber={dubber} member={member} />
        </MenuWrapper>
      </Menu>
    </div>

    {currentUser.capabilities.includes('root') && <button onClick={excludeUser}>
      <IcoCan width={24} height={24} />
    </button>}
  </div>
}

function SettingsEditUserRole({ member, dubber, role }: { member: IDubberMember, dubber: IDubber, role: TDubberMemberRole }) {
  const router = useRouter()

  async function editRole() {
    try {
      await $api.patch(`/dubber/settings/member/edit`, {
        dubber_id: dubber.id,
        user_id: member.id,
        role
      })

      router.refresh();
    } catch (e) {
      console.error(e)
    }
  }

  return <button className="flex gap-[16px] items-center duration-200 hover:bg-grey px-[8px] py-[4px]" onClick={editRole}>
    {role === 'leader' && <IcoCrown width={16} height={16} className="shrink-0" />}
    {role === 'editor' && <IcoPen width={16} height={16} className="shrink-0" />}
    {role === 'member' && <IcoPeople width={16} height={16} className="shrink-0" />}

    <p className="text-white">
      {role === 'leader' && 'Лідер'}
      {role === 'editor' && 'Редактор'}
      {role === 'member' && 'Учасник'}
    </p>
  </button>
}

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