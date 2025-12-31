'use client';

import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Menu, MenuTrigger, MenuWrapper } from '@fullkekw/fkw-menu';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';
import { useDebounce } from 'use-debounce';

import { IcoSocialInstagram, IcoSocialTelegram, IcoSocialTiktok, IcoSocialYoutube } from '~/assets/Social';
import { IcoSupportByMeACoffee, IcoSupportDiaka, IcoSupportMonobank, IcoSupportPatreon } from '~/assets/Support';
import StyledImage from '~/components/Styled/StyledImage';
import { IUIFieldState, UIField } from '~/components/UI/Input';
import { NotifySuccess } from '~/components/UI/NotifyToast';
import { UIReportButton } from '~/components/UI/Report';
import Tooltip from '~/components/UI/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import { useAppSelector } from '~/hooks/redux';
import { Dubber, DubberMemberRole } from '~/interfaces/DubberIntf';
import { ROLE_PERMISSION } from '~/interfaces/IRole';
import { Routes } from '~/routes';
import { DubberFullType, IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import { IUserState } from '~/store/reducers/userSlice';
import { cn } from '~/utils/classnames';
import { DubberParseRoleName } from '~/utils/data-mappers';
import { getUTC, timestampToDayMonth } from '~/utils/utils';




interface ISettingsGroupProps {
  title: string
  description: string
  children: React.ReactNode
}

interface ILinkItemProps {
  state: IUIFieldState
  setState: (val: IUIFieldState) => void
  type: keyof Dubber['socials'] | keyof Dubber['support']
}

interface IControlsProps {
  resetChanges: () => void
  saveChanges: () => void
  isSomethingChanged: boolean
  isSaving: boolean
}

interface IDubberMemberProps {
  member: IDubberMemberCard
  currentUser: IUserState
  dubber: DubberFullType

  kickMember: (id: string, username: string) => void
}

interface IMemberInviteResultProps {
  dubber: Dubber
}



export const DubberSettingsContent: NextPage<{ dubber: DubberFullType, members: IDubberMemberCard[] }> = ({ dubber, members }) => {
  const currentUser = useAppSelector(state => state.user);

  const [nameUkr, setNameUkr] = useState<IUIFieldState>({ initialValue: dubber.name });
  const [description, setDescription] = useState<IUIFieldState>({ initialValue: dubber.about });

  const [telegramLink, setTelegramLink] = useState<IUIFieldState>({ initialValue: dubber.socials?.telegram ?? '' });
  const [instagramLink, setInstagramLink] = useState<IUIFieldState>({ initialValue: dubber.socials?.instagram ?? '' });
  const [tiktokLink, setTiktokLink] = useState<IUIFieldState>({ initialValue: dubber.socials?.tiktok ?? '' });
  const [youtubeLink, setYoutubeLink] = useState<IUIFieldState>({ initialValue: dubber.socials?.youtube ?? '' });

  const [patreonLink, setPatreonLink] = useState<IUIFieldState>({ initialValue: dubber.support?.patreon ?? '' });
  const [bmcLink, setBmcLink] = useState<IUIFieldState>({ initialValue: dubber.support?.bymeacoffee ?? '' });
  const [monobankLink, setMonobankLink] = useState<IUIFieldState>({ initialValue: dubber.support?.monobank ?? '' });
  const [diakaLink, setDiakaLink] = useState<IUIFieldState>({ initialValue: dubber.support?.diaka ?? '' });

  const [dubberMembers, setDubberMembers] = useState<IDubberMemberCard[]>(members);
  const [isSomethingChanged, setIsSomethingChanged] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  //! MUST INCLUDE ALL OF THE CHANGING STATES
  const DubberParams = [nameUkr, description, telegramLink, instagramLink, tiktokLink, youtubeLink, patreonLink, bmcLink, monobankLink, diakaLink];
  const DubberParamsSetters = [setNameUkr, setDescription, setTelegramLink, setInstagramLink, setTiktokLink, setYoutubeLink, setPatreonLink, setBmcLink, setMonobankLink, setDiakaLink];


  // Handle isSomethingChanged
  useEffect(() => {
    setIsSomethingChanged(DubberParams.some(el => el.status === 'changes_pending' || el.status === 'error'));
  }, [DubberParams]);

  // Prevent unloading is some changes are pending
  useEffect(() => {
    function unloadHandler(e: BeforeUnloadEvent) {
      if (isSomethingChanged) e.preventDefault();
    }

    window.addEventListener('beforeunload', unloadHandler);

    return () => {
      window.removeEventListener('beforeunload', unloadHandler);
    };
  }, [isSomethingChanged]);



  function resetChanges() {
    NotifySuccess({ title: 'Зміни відхилені', message: 'Ми прибрали нові зміни за вас' });

    DubberParamsSetters.forEach(setter => {
      setter(prev => {
        const instance = { ...prev };

        instance.status = 'waiting';
        instance.value = instance.initialValue ?? '';

        return instance;
      });
    });
  }

  async function saveChanges() {
    // if (!isSomethingChanged) return NotifyWarn({ title: 'Нема що зберігати', message: 'Ніяких змін не сталося' });

    // try {
    //   setIsSaving(true);

    //   // await APIOld.patchDubberSettings({
    //   //   dubberId: dubber.id,
    //   //   nameUkr: nameUkr.newValue,
    //   //   nameEng: nameEng.newValue,
    //   //   description: description.newValue,
    //   //   socialLinks: {
    //   //     telegram: telegramLink.newValue,
    //   //     instagram: instagramLink.newValue,
    //   //     tiktok: tiktokLink.newValue,
    //   //     youtube: youtubeLink.newValue,
    //   //   },
    //   //   supportLinks: {
    //   //     patreon: patreonLink.newValue,
    //   //     bymeacoffee: bmcLink.newValue,
    //   //     monobank: monobankLink.newValue,
    //   //     diaka: diakaLink.newValue,
    //   //   }
    //   // });

    //   DubberParamsSetters.forEach(setter => {
    //     setter(prev => {
    //       if (prev.status === 'changes_pending' || prev.status === 'error') {
    //         const instance = { ...prev };
    //         instance.status = 'success';

    //         return instance;
    //       } else return prev;
    //     });
    //   });

    //   NotifySuccess({ title: 'Збережено!', message: 'Зміни збережені' });

    //   setTimeout(() => {
    //     DubberParamsSetters.forEach(setter => {
    //       setter(prev => {
    //         if (prev.status === 'success') {
    //           const instance = { ...prev };
    //           instance.status = 'waiting';

    //           return instance;
    //         } else return prev;
    //       });
    //     });
    //   }, 3000);
    // } catch (e) {
    //   HandleClientError(e);

    //   DubberParamsSetters.forEach(setter => {
    //     setter(prev => {
    //       if (prev.status === 'changes_pending') {
    //         const instance = { ...prev };
    //         instance.status = 'error';

    //         return instance;
    //       } else return prev;
    //     });
    //   });
    // } finally {
    //   setIsSaving(false);
    // }
  }

  async function kickMember(id: string, username: string) {
    // try {
    //   if (!confirm(`Ви дійсно хочете видалити ${username}?`)) return;

    //   await APIOld.dubberKickMember({
    //     dubberId: dubber.id,
    //     userId: id
    //   });

    //   setDubberMembers(prev => prev.filter(el => el.id !== id));
    //   NotifySuccess({ title: 'Учасник видалений', message: 'Ми видалили цього користувача з команди' });
    // } catch (e) {
    //   HandleClientError(e);
    // }
  }



  return <div className="flex flex-col gap-[24px]">
    <div className="w-full flex justify-between items-center gap-[16px] max-md:flex-col">
      <h2 className="text-white text-[32px] font-manrope max-md:text-[24px] font-bold">Налаштування команди</h2>

      <Controls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>

    <SettingsGroup title="Назва та опис" description="Розкажіть світу хто ви є">
      <div className="flex gap-[32px] w-full max-md:flex-col">
        <div className="flex flex-col gap-[8px] w-full">
          <div className="flex flex-col gap-[4px] w-full">
            <p className="text-grey-new font-manrope"><span className="text-info-error font-bold">*</span> Українська назва</p>
            <UIField fieldType="input" state={nameUkr} stateSetter={setNameUkr} symbolsLimited={32} required />
          </div>
        </div>

        <div className="flex flex-col gap-[4px] w-full h-full">
          <p className="text-grey-new font-manrope">Опис</p>
          <UIField fieldType="textarea" state={description} stateSetter={setDescription} symbolsLimited={500} className="min-h-[42px] h-fit max-h-[500px] outline-none grow" parentClassName="h-full grow" />
        </div>
      </div>
    </SettingsGroup>

    <SettingsGroup title="Посилання" description="Мережі команди та підтримка (без www.)">
      <div className="flex gap-[4px] w-full max-md:flex-col max-md:gap-[16px]">
        <div className="flex flex-col gap-[4px] w-full">
          <LinkItem state={telegramLink} setState={setTelegramLink} type="telegram" />
          <LinkItem state={instagramLink} setState={setInstagramLink} type="instagram" />
          <LinkItem state={tiktokLink} setState={setTiktokLink} type="tiktok" />
          <LinkItem state={youtubeLink} setState={setYoutubeLink} type="youtube" />
        </div>

        <div className="flex flex-col gap-[4px] w-full">
          <LinkItem state={patreonLink} setState={setPatreonLink} type="patreon" />
          <LinkItem state={bmcLink} setState={setBmcLink} type="bymeacoffee" />
          <LinkItem state={monobankLink} setState={setMonobankLink} type="monobank" />
          <LinkItem state={diakaLink} setState={setDiakaLink} type="diaka" />
        </div>
      </div>
    </SettingsGroup>

    {/* <SettingsGroup title={`Команда (${dubberMembers.length} ${wordDeclination(dubberMembers.length, ['учасник', 'учасника', 'учасників'])})`} description="Керування складом команди">
      <InviteMembers dubber={dubber} />
    </SettingsGroup> */}

    <div className={cn('grid gap-[8px] max-lg:grid-cols-1', dubberMembers.length === 1 ? 'grid-cols-1' : 'grid-cols-2')}>
      {dubberMembers.filter(el => el.role === 'leader').map(member => {
        return <DubberMember member={member} currentUser={currentUser} dubber={dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}

      {dubberMembers.filter(el => el.role === 'editor').map(member => {
        return <DubberMember member={member} currentUser={currentUser} dubber={dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}

      {dubberMembers.filter(el => el.role === 'member').map(member => {
        return <DubberMember member={member} currentUser={currentUser} dubber={dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}
    </div>

    <div className="w-full flex justify-between gap-[16px] max-md:flex-col-reverse">
      <UIReportButton type="text" text="Виникли проблеми?" />

      <Controls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>
  </div>;
};

const InviteMembers: NextPage<{ dubber: Dubber }> = ({ dubber }) => {
  const [searchQuery, setSearchQuery] = useState<IUIFieldState>({ status: 'waiting', initialValue: '' });
  const [debouncedSearchQuery] = useDebounce(searchQuery.value ?? '', 500);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isNotFound, setIsNotFound] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [isSearched, setIsSearched] = useState(false);



  useEffect(() => {
    // (async function () {
    //   setIsSearched(true);

    //   const query = debouncedSearchQuery.replace('@', '');
    //   if (query.length < 3) return;

    //   try {
    //     const { results } = await APIOld.searchUsers({ q: query, parseInvitationStatusFor: dubber.id });
    //     setSearchResults(results);
    //     setIsMenuOpen(true);
    //   } catch (e) {
    //     HandleClientError(e);
    //   }
    // })();
  }, [debouncedSearchQuery]);

  // Handle isWaiting
  useEffect(() => {
    if (!isSearched) return;

    const isWaiting = debouncedSearchQuery.length === 0;

    setIsWaiting(isWaiting);

    if (isWaiting) {
      setSearchResults([]);
    }
  }, [debouncedSearchQuery]);

  // Handle isNotFound
  useEffect(() => {
    if (!isSearched) return;

    const isNotFound = debouncedSearchQuery.length !== 0 && searchResults.length === 0;

    setIsNotFound(isNotFound);

    if (isNotFound) {
      setIsMenuOpen(true);
    }
  }, [debouncedSearchQuery, searchResults]);



  return <div className="flex flex-col gap-[4px] w-full">
    <p className="text-grey-new font-manrope">Запросити нового учасника</p>

    <Menu className="w-full" gap={4} state={isMenuOpen} stateSetter={setIsMenuOpen} id="dubber-settings-inviteMemberMenu">
      <MenuTrigger anchor className="w-full">
        <UIField fieldType="input" state={searchQuery} stateSetter={setSearchQuery} placeholder="@username" disablePending className="font-space-grotesk" />
      </MenuTrigger>

      <MenuWrapper className="w-full bg-dark-bright rounded-[2px] flex flex-col border border-dark-light max-h-[300px] overflow-y-auto">
        {searchResults.length ? <>
          {/* {searchResults.map(result => {
            return <InviteMemberResult {...result} dubber={dubber} key={`dubber-settings-result--${result.user.id}`} />;
          })} */}
        </> : <div className="px-[12px] py-[8px]">
          {isNotFound && <div className="flex items-center gap-[16px]">
            <MaterialSymbol icon="indeterminate_question_box" size={16} className="text-info-warn" />
            <p className="text-info-warn font-manrope max-md:text-[14px]">Ми не змогли знайти користувача за цим запитом</p>
          </div>}

          {isWaiting && <div className="flex items-center gap-[16px]">
            <MaterialSymbol icon="alternate_email" size={16} className="text-grey-new" />
            <p className="text-grey-new font-manrope max-md:text-[14px]">Кого шукаємо?</p>
          </div>}
        </div>}
      </MenuWrapper>
    </Menu>
  </div>;
};



function LinkItem({ setState, state, type }: ILinkItemProps) {
  let placeholder: string | undefined = undefined;



  if (type === 'telegram') placeholder = 't.me';
  if (type === 'instagram') placeholder = 'instagram.com';
  if (type === 'tiktok') placeholder = 'tiktok.com';
  if (type === 'youtube') placeholder = 'youtube.com';
  if (type === 'patreon') placeholder = 'patreon.com';
  if (type === 'bymeacoffee') placeholder = 'buymeacoffee.com';
  if (type === 'monobank') placeholder = 'send.monobank.ua';
  if (type === 'diaka') placeholder = 'diaka.ua';



  return <div className="flex w-full">
    <div className="w-[42px] h-[42px] flex justify-center items-center bg-dark-medium shrink-0 rounded-l-[4px]">
      {type === 'telegram' && <IcoSocialTelegram width={24} height={24} fill="#fff" />}
      {type === 'instagram' && <IcoSocialInstagram width={24} height={24} fill="#fff" />}
      {type === 'tiktok' && <IcoSocialTiktok width={24} height={24} fill="#fff" />}
      {type === 'youtube' && <IcoSocialYoutube width={24} height={24} fill="#fff" />}

      {type === 'patreon' && <IcoSupportPatreon width={24} height={24} fill="#fff" />}
      {type === 'bymeacoffee' && <IcoSupportByMeACoffee width={24} height={24} fill="#fff" />}
      {type === 'monobank' && <IcoSupportMonobank width={24} height={24} />}
      {type === 'diaka' && <IcoSupportDiaka width={24} height={24} />}
    </div>

    <UIField fieldType="input" state={state} stateSetter={setState} className="rounded-l-none border-dark-medium font-space-grotesk" placeholder={placeholder} type="url" />
  </div>;
}

function Controls({ resetChanges, saveChanges, isSomethingChanged, isSaving }: IControlsProps) {
  const isDisabled = isSaving || !isSomethingChanged;

  return <Tooltip content={!isSomethingChanged ? 'Відсутні зміни' : isSaving ? 'Зберігаємо..' : ''} className="flex gap-[8px] max-md:w-full">
    <button className={cn('p-[8px] border border-dark-light duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light max-md:w-full', isDisabled && 'cursor-not-allowed')} disabled={isDisabled} onClick={resetChanges}>
      <p className={cn('font-manrope duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>Відхилити</p>
    </button>

    <button className={cn('flex gap-[16px] items-center justify-center w-[190px] shrink-0 px-[16px] py-[8px] border border-dark-light bg-dark-medium duration-200 rounded-[4px] hover:bg-dark-light focus-visible:bg-dark-light', isDisabled && 'cursor-not-allowed', isSaving && '!cursor-wait')} disabled={isDisabled} onClick={saveChanges}>
      <div className="w-[20px] h-[20px] relative max-md:w-full">
        <MaterialSymbol icon="update" size={20} className={cn(`absolute top-0 left-0 duration-200`, !isDisabled ? 'text-white' : 'text-grey-new', isSaving && 'opacity-0')} />
        <MaterialSymbol icon="clock_loader_40" size={20} className={cn(`absolute top-0 left-0 duration-200`, !isSaving && 'opacity-0')} color="#555" />
      </div>

      <p className={cn('font-manrope duration-200 whitespace-nowrap', !isDisabled ? 'text-white' : 'text-grey-new')}>
        {isSaving && 'Зберігаємо...'}
        {!isSaving && 'Зберегти зміни'}
      </p>
    </button>
  </Tooltip>;
}

function SettingsGroup({ title, description, children }: ISettingsGroupProps) {
  return <div className="w-full flex justify-between pt-[24px] border-t border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <H3 text={title} size={24} className="text-white" bold />
      <P text={description} className="text-grey-new" />
    </div>

    {children}
  </div>;
}

// function InviteMemberResult({ user, invitationStatus, dubber }: IMemberInviteResultProps) {
//   const [isInvited, setIsInvited] = useState(false);



//   async function inviteMember() {
//     // if (invitationStatus !== 'can_be_invited' || isInvited) return NotifyWarn({ title: 'Неможливо запросити', message: 'Користувача неможливо запросити в команду' });

//     // try {
//     //   setIsInvited(true);

//     //   await APIOld.dubberSendInvite({
//     //     dubberId: dubber.id,
//     //     userId: user.id
//     //   });

//     //   NotifySuccess({ title: 'Запрошення надіслано', message: `Ми надіслали @${user.username} запрошення в команду, тепер залишилося почекати на його розгляд` });
//     //   setIsInvited(true);
//     // } catch (e) {
//     //   setIsInvited(false);
//     //   HandleClientError(e);
//     // }
//   }



//   return <button className={cn('px-[12px] py-[8px] flex items-center gap-[16px] duration-200 hover:bg-dark-light focus-visible:hover:bg-dark-light', (invitationStatus !== 'can_be_invited' || isInvited) && 'cursor-not-allowed')} disabled={invitationStatus !== 'can_be_invited' || isInvited} onClick={inviteMember}>
//     <StyledImage src={user.avatar} width="64px" height="64px" className="rounded-[4px] overflow-hidden" />

//     <div className="flex flex-col items-start gap-[4px]">
//       <p className="text-white font-space-grotesk">@{user.username}</p>

//       <div className="flex items-center gap-[8px]">
//         {!isInvited && invitationStatus === 'can_be_invited' && <MaterialSymbol icon="person_add" size={16} className="text-white" />}
//         {!isInvited && invitationStatus === 'invite_pending' && <MaterialSymbol icon="hourglass_bottom" size={16} className="text-grey-new" />}
//         {!isInvited && invitationStatus === 'telegram_not_linked' && <MaterialSymbol icon="link_off" size={16} className="text-grey-new" />}
//         {!isInvited && invitationStatus === 'others_member_already' && <MaterialSymbol icon="interpreter_mode" size={16} className="text-grey-new" />}
//         {isInvited && <MaterialSymbol icon="mark_email_read" size={16} className="text-info-success" />}

//         <p className={cn('font-manrope max-md:text-[14px]', invitationStatus === 'can_be_invited' ? 'text-white' : 'text-grey-new', isInvited && '!text-info-success')}>
//           {!isInvited && invitationStatus === 'can_be_invited' && 'Ти можеш запросити цього користувача у команду'}
//           {!isInvited && invitationStatus === 'invite_pending' && 'Запрошення очікує на розгляд користувачем'}
//           {!isInvited && invitationStatus === 'telegram_not_linked' && 'Користувач ще не прив’язав телеграм до свого акаунту'}
//           {!isInvited && invitationStatus === 'others_member_already' && 'Користувач вже є учасником іншої команди'}
//           {isInvited && 'Запрошення надіслано!'}
//         </p>
//       </div>
//     </div>
//   </button>;
// }

function DubberMember({ member, currentUser, dubber, kickMember }: IDubberMemberProps) {
  const canKick = currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE) /* || currentUser.permissions.includes('admin') || currentUser.permissions.includes('dubberEditEditors') */;
  const canRedactRole = canKick && currentUser.id !== member.id || (currentUser.permissions.includes(ROLE_PERMISSION.ABSOLUTE)) /* || currentUser.permissions.includes('admin')) */;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberRole, setMemberRole] = useState(member.role);



  async function changeRole(to: DubberMemberRole) {
    // try {
    //   await APIOld.dubberEditMember({
    //     dubberId: dubber.id,
    //     userId: member.id,
    //     role: to
    //   });

    //   setMemberRole(to);
    //   NotifySuccess({ title: 'Роль змінена', message: `Роль @${user.username} змінена з ${DubberParseRoleName(member.role)} > ${DubberParseRoleName(to)}` });
    // } catch (e) {
    //   HandleClientError(e);
    // }
  }



  return <div className="w-full rounded-[2px] border border-dark-medium flex justify-between gap-[16px] items-center p-[8px] max-md:items-start">
    <div className="w-full">
      <Link href={Routes.user.path({ username: member.username })} className="flex items-center gap-[24px] w-fit max-md:flex-col max-md:items-start max-md:gap-[8px]" prefetch={false}>
        <StyledImage src={member.avatar} width="48px" height="48px" className="rounded-[4px] overflow-hidden" />

        <div className="flex flex-col gap-[4px]">
          <p className="text-white font-space-grotesk">@{member.username}</p>

          <div className="flex items-center gap-[8px]">
            <MaterialSymbol icon="calendar_add_on" size={16} color="#555" />
            <p className="text-grey-new text-[12px] font-manrope">Учасник з: {timestampToDayMonth(getUTC(member.member_since).timestamp)}</p>
          </div>
        </div>
      </Link>
    </div>

    <Menu stateSetter={setIsMenuOpen} settings={{ align: 'end' }} id={`dubber-settings-memberSettings--${member.id}`}>
      <MenuTrigger anchor className="flex items-center gap-[16px] p-[8px]" disabled={!canRedactRole}>
        <div className="flex items-center gap-[8px]">
          {memberRole === 'leader' && <MaterialSymbol icon="star" size={16} color="#fff" />}
          {memberRole === 'editor' && <MaterialSymbol icon="edit" size={16} color="#fff" />}
          {memberRole === 'member' && <MaterialSymbol icon="group" size={16} color="#fff" />}

          <p className="text-white font-manrope">{DubberParseRoleName(memberRole)}</p>
        </div>

        {canRedactRole && <MaterialSymbol icon="arrow_drop_down" size={16} color="#fff" className={cn(`duration-200`, isMenuOpen && 'rotate-180')} />}
      </MenuTrigger>

      <MenuWrapper className="flex flex-col w-[160px] bg-dark-bright border border-dark-light rounded-[2px]">
        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('leader')}>
          <MaterialSymbol icon="star" size={16} color="#fff" />
          <p className="text-white font-manrope">Лідер</p>
        </button>

        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('editor')}>
          <MaterialSymbol icon="edit" size={16} color="#fff" />
          <p className="text-white font-manrope">Редактор</p>
        </button>

        <button className="flex items-center gap-[8px] px-[12px] py-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light" onClick={() => changeRole('member')}>
          <MaterialSymbol icon="group" size={16} color="#fff" />
          <p className="text-white font-manrope">Учасник</p>
        </button>
      </MenuWrapper>
    </Menu>

    {/* {canKick && <Tooltip content="Видалити учасника">
      <button className="p-[8px] flex justify-center items-center rounded-[2px] duration-200 hover:bg-info-error focus-visible:bg-info-error" onClick={() => kickMember(user.id, user.username)}>
        <MaterialSymbol icon="person_remove" size={24} color="#fff" />
      </button>
    </Tooltip>} */}
  </div>;
}