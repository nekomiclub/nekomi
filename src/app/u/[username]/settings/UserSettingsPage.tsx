'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MaterialSymbol } from 'react-material-symbols';

import { HandleClientError } from '~/components/Errors';
import StyledButton from '~/components/Styled/StyledButton';
import { H3, P } from '~/components/UI/Typography';
import { conf } from '~/conf';
import { User } from '~/interfaces/UserIntf';
import APIOld from '~/services/ApiService.old';
import cn from '~/utils/classnames';



interface ISettingsGroupProps {
  title: string
  children: React.ReactNode

  description?: string
}

interface IUserSettingsLinkProps {
  user: User
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
    try {
      setStatus('connecting');

      const { token } = await APIOld.userLinkTelegramToken();

      router.push(`${conf.URL.telegramBot}?start=linkAccount=${token}`);
    } catch (e) {
      HandleClientError(e);

      setStatus('error');
      setTimeout(() => {
        setStatus('not_connected');
      }, 6000);
    }
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