'use client';

import { FC, useEffect, useState } from 'react';

import { IUIFieldState, UIField } from '~/components/UI/Input';
import { NotifySuccess } from '~/components/UI/NotifyToast';
import { UIReportButton } from '~/components/UI/Report';
import { useAppSelector } from '~/hooks/redux';
import { DubberFullType, IDubberMemberCard } from '~/services/api/dubber/GetDubber.api';
import { cn } from '~/utils/classnames';

import TSettingsMember from './_components/TSettingsMember';
import { TSettingLink, TSettingsControls, TSettingsGroup } from './_components/TSettingsUI';



interface IProps {
  dubber: DubberFullType
  members: IDubberMemberCard[]
}



const TSettingsPage: FC<IProps> = (props) => {
  const currentUser = useAppSelector(state => state.user);

  const [nameUkr, setNameUkr] = useState<IUIFieldState>({ initialValue: props.dubber.name });
  const [description, setDescription] = useState<IUIFieldState>({ initialValue: props.dubber.about });

  const [telegramLink, setTelegramLink] = useState<IUIFieldState>({ initialValue: props.dubber.socials?.telegram ?? '' });
  const [instagramLink, setInstagramLink] = useState<IUIFieldState>({ initialValue: props.dubber.socials?.instagram ?? '' });
  const [tiktokLink, setTiktokLink] = useState<IUIFieldState>({ initialValue: props.dubber.socials?.tiktok ?? '' });
  const [youtubeLink, setYoutubeLink] = useState<IUIFieldState>({ initialValue: props.dubber.socials?.youtube ?? '' });

  const [patreonLink, setPatreonLink] = useState<IUIFieldState>({ initialValue: props.dubber.support?.patreon ?? '' });
  const [bmcLink, setBmcLink] = useState<IUIFieldState>({ initialValue: props.dubber.support?.bymeacoffee ?? '' });
  const [monobankLink, setMonobankLink] = useState<IUIFieldState>({ initialValue: props.dubber.support?.monobank ?? '' });
  const [diakaLink, setDiakaLink] = useState<IUIFieldState>({ initialValue: props.dubber.support?.diaka ?? '' });

  const [dubberMembers, setDubberMembers] = useState<IDubberMemberCard[]>(props.members);
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

      <TSettingsControls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>

    <TSettingsGroup title="Назва та опис" description="Розкажіть світу хто ви є">
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
    </TSettingsGroup>

    <TSettingsGroup title="Посилання" description="Мережі команди та підтримка (без www.)">
      <div className="flex gap-[4px] w-full max-md:flex-col max-md:gap-[16px]">
        <div className="flex flex-col gap-[4px] w-full">
          <TSettingLink state={telegramLink} setState={setTelegramLink} type="telegram" />
          <TSettingLink state={instagramLink} setState={setInstagramLink} type="instagram" />
          <TSettingLink state={tiktokLink} setState={setTiktokLink} type="tiktok" />
          <TSettingLink state={youtubeLink} setState={setYoutubeLink} type="youtube" />
        </div>

        <div className="flex flex-col gap-[4px] w-full">
          <TSettingLink state={patreonLink} setState={setPatreonLink} type="patreon" />
          <TSettingLink state={bmcLink} setState={setBmcLink} type="bymeacoffee" />
          <TSettingLink state={monobankLink} setState={setMonobankLink} type="monobank" />
          <TSettingLink state={diakaLink} setState={setDiakaLink} type="diaka" />
        </div>
      </div>
    </TSettingsGroup>

    {/* <SettingsGroup title={`Команда (${dubberMembers.length} ${wordDeclination(dubberMembers.length, ['учасник', 'учасника', 'учасників'])})`} description="Керування складом команди">
      <DSettingsInviteMembers dubber={dubber} />
    </SettingsGroup> */}

    <div className={cn('grid gap-[8px] max-lg:grid-cols-1', dubberMembers.length === 1 ? 'grid-cols-1' : 'grid-cols-2')}>
      {dubberMembers.filter(el => el.role === 'leader').map(member => {
        return <TSettingsMember member={member} currentUser={currentUser} dubber={props.dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}

      {dubberMembers.filter(el => el.role === 'editor').map(member => {
        return <TSettingsMember member={member} currentUser={currentUser} dubber={props.dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}

      {dubberMembers.filter(el => el.role === 'member').map(member => {
        return <TSettingsMember member={member} currentUser={currentUser} dubber={props.dubber} kickMember={kickMember} key={`dubber-settings-member--${member.id}`} />;
      })}
    </div>

    <div className="w-full flex justify-between gap-[16px] max-md:flex-col-reverse">
      <UIReportButton type="text" text="Виникли проблеми?" />

      <TSettingsControls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>
  </div>;
};

export default TSettingsPage;