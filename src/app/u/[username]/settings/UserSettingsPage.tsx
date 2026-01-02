'use client';

import { NextPage } from 'next';
import { FC, useEffect, useState } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import { useRouter } from 'next/navigation';

import { HandleClientError } from '~/components/Errors';
import StyledButton from '~/components/Styled/StyledButton';
import { IUIFieldState, UIField } from '~/components/UI/Input';
import { NotifySuccess, NotifyWarn } from '~/components/UI/NotifyToast';
import Tooltip from '~/components/UI/Tooltip';
import { H3, P } from '~/components/UI/Typography';
import { User } from '~/interfaces/UserIntf';
import API from '~/services/api/API';
import { UserFullType } from '~/services/api/user/GetUser.api';
import cn from '~/utils/classnames';



interface ISettingsGroupProps {
  title: string
  children: React.ReactNode

  description?: string
}

interface IUserSettingsLinkProps {
  user: User
}

interface IControlsProps {
  resetChanges: () => void
  saveChanges: () => void
  isSomethingChanged: boolean
  isSaving: boolean
}




type LinkSocialStatusType = 'not_connected' | 'connecting' | 'error' | 'connected'

interface IUserSettingsLinkSocialProps {
  name: string
  status: LinkSocialStatusType
  onLink(): Promise<void>
  onUnlink(): Promise<void>
}



export const UserSettingsGroup: FC<ISettingsGroupProps> = ({ title, description, children }) => {
  return <div className="w-full flex justify-between pt-[16px] border-t border-dark-light gap-[16px] max-lg:flex-col">
    <div className="w-[300px] flex flex-col gap-[4px] shrink-0 max-lg:w-auto">
      <H3 text={title} size={24} className="text-white" bold />
      {description && <P text={description} className="text-grey-new" />}
    </div>

    {children}
  </div>;
};

export const UserSettingsLinkTelegram: FC<IUserSettingsLinkProps> = ({ user }) => {
  const router = useRouter();

  const [status, setStatus] = useState<LinkSocialStatusType>(user.statistics.isTelegramLinked ? 'connected' : 'not_connected');



  async function onLink() {
    // try {
    //   setStatus('connecting');

    //   const { token } = await APIOld.userLinkTelegramToken();

    //   router.push(`${conf.URL.telegramBot}?start=linkAccount=${token}`);
    // } catch (e) {
    //   HandleClientError(e);

    //   setStatus('error');
    //   setTimeout(() => {
    //     setStatus('not_connected');
    //   }, 6000);
    // }
  }

  async function onUnlink() {
    if (!confirm(`Ви бажаєте відв'язати Telegram?`)) return;

    try {
      setStatus('not_connected');
    } catch (e) {
      HandleClientError(e);

      setStatus('error');
      setTimeout(() => {
        setStatus('connected');
      }, 6000);
    }
  }



  return <UserSettingsLinkSocial name="Telegram" onLink={onLink} onUnlink={onUnlink} status={status} />;
};



export const UserSettingsContent: NextPage<{ user: UserFullType }> = ({ user }) => {
  const router = useRouter();

  const [username, setUsername] = useState<IUIFieldState>({ initialValue: user.username });
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

      await API.patchUser({ id: user.id }, {
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

      <Controls resetChanges={resetChanges} saveChanges={saveChanges} isSomethingChanged={isSomethingChanged} isSaving={isSaving} />
    </div>

    <UserSettingsGroup title="Загальна інформація" description="Хто я?">
      <div className="w-full flex items-center">
        <div className="flex flex-col gap-[8px] w-full max-w-[500px]">
          <div className="flex flex-col gap-[4px] w-full">
            <p className="text-grey-new font-manrope"><span className="text-info-error font-bold">*</span> Юзернейм</p>
            <UIField fieldType="input" state={username} stateSetter={setUsername} symbolsLimited={24} required />
          </div>
        </div>
      </div>
    </UserSettingsGroup>

    {/* <UserSettingsGroup title={`Під'єднання`}>
  <div className="w-full flex flex-col gap-[8px]">
    <UserSettingsLinkTelegram user={user} />
  </div>
</UserSettingsGroup> */}
  </>;
};



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



const UserSettingsLinkSocial: FC<IUserSettingsLinkSocialProps> = ({ name, onLink, onUnlink, status }) => {
  let statusText = `~~~`;

  if (status === 'not_connected') statusText = `${name} не прив'язано`;
  if (status === 'connecting') statusText = `Продовжуйте в ${name}`;
  if (status === 'error') statusText = `Помилка з'єднання з ${name}`;
  if (status === 'connected') statusText = `${name} прив'язано`;



  return <div className={cn(`flex items-center gap-[8px]`)}>
    <div className={cn(`p-[12px] rounded-[4px] duration-200`, status === 'not_connected' && 'bg-dark-medium', status === 'connecting' && 'bg-info-warn', status === 'error' && 'bg-info-error', status === 'connected' && 'bg-info-success')}>
      <P text={statusText} />
    </div>

    {/* Link */}
    {status === 'not_connected' && <StyledButton onClick={onLink} className="w-[48px] h-[48px]">
      <MaterialSymbol icon="add_link" size={20} className="text-white" />
    </StyledButton>}

    {/* Unlink */}
    {status === 'connected' && <StyledButton onClick={onUnlink} className="w-[48px] h-[48px]">
      <MaterialSymbol icon="link_off" size={20} className="text-white" />
    </StyledButton>}
  </div>;
};
