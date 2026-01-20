'use client';

import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { HandleClientError } from '~/components/Errors';
import { NotifySuccess, NotifyWarn } from '~/components/nofity/NotifyStatus';
import { UIField,UIFieldState } from '~/components/UI/Input';
import API from '~/services/api/API';
import { UserFullType } from '~/services/api/user/GetUser.api';

import { USettingsControls, USettingsGroup } from './_components/USettingsUI';



interface IProps {
  user: UserFullType
}



const USettingsPage: FC<IProps> = (props) => {
  const router = useRouter();

  const [username, setUsername] = useState<UIFieldState>({ initialValue: props.user.username });
  const [isSomethingChanged, setIsSomethingChanged] = useState(false);
  const [isSaving, setIsSaving] = useState(false);



  //! MUST INCLUDE ALL OF THE CHANGING STATES
  const UserParams = [username];
  const UserParamsSetters = [setUsername];



  // Handle isSomethingChanged
  useEffect(() => {
    setIsSomethingChanged(UserParams.some(el => el.status === 'changes_pending' || el.status === 'error'));
  }, [UserParams]);

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



  async function saveChanges() {
    if (!isSomethingChanged) return NotifyWarn({ title: 'Нема що зберігати', message: 'Ніяких змін не сталося' });

    try {
      setIsSaving(true);

      await API.patchUser({ id: props.user.id }, {
        set_username: username.mutated ? {
          username: username.value!
        } : undefined
      });

      UserParamsSetters.forEach(setter => {
        setter(prev => {
          if (prev.status === 'changes_pending' || prev.status === 'error') {
            const instance = { ...prev };
            instance.status = 'success';

            return instance;
          } else return prev;
        });
      });

      NotifySuccess({ title: 'Збережено!', message: 'Зміни збережені' });

      setTimeout(() => {
        UserParamsSetters.forEach(setter => {
          setter(prev => {
            if (prev.status === 'success') {
              const instance = { ...prev };
              instance.status = 'waiting';

              return instance;
            } else return prev;
          });
        });
      }, 3000);

      router.refresh();
    } catch (e) {
      HandleClientError(e);

      UserParamsSetters.forEach(setter => {
        setter(prev => {
          if (prev.status === 'changes_pending') {
            const instance = { ...prev };
            instance.status = 'error';

            return instance;
          } else return prev;
        });
      });
    } finally {
      setIsSaving(false);
    }
  }

  function resetChanges() {
    NotifySuccess({ title: 'Зміни відхилені', message: 'Ми прибрали нові зміни за вас' });

    UserParamsSetters.forEach(setter => {
      setter(prev => {
        const instance = { ...prev };

        instance.status = 'waiting';
        instance.value = instance.initialValue ?? '';

        return instance;
      });
    });
  }



  return <>
    <div className="w-full flex justify-between items-center gap-[16px] max-md:flex-col">
      <h2 className="text-white text-[32px] font-manrope max-md:text-[24px] font-bold">Налаштування профілю</h2>

      <USettingsControls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>

    <USettingsGroup title="Загальна інформація" description="Хто я?">
      <div className="w-full flex items-center">
        <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
          <div className="flex flex-col gap-[4px] w-full">
            <p className="text-grey-new font-manrope"><span className="text-info-error font-bold">*</span> Юзернейм</p>
            <UIField fieldType="input" state={username} stateSetter={setUsername} symbolsLimited={24} required />
          </div>
        </div>
      </div>
    </USettingsGroup>

    {/* <UserSettingsGroup title={`Під'єднання`}>
  <div className="w-full flex flex-col gap-[8px]">
    <UserSettingsLinkTelegram user={user} />
  </div>
</UserSettingsGroup> */}
  </>;
};

export default USettingsPage;