'use client';

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';

import { USettingsLinkSocialStatusType } from '~/app/u/[username]/settings/USettingsPageData';
import { HandleClientError } from '~/components/Errors';
import { User } from '~/interfaces/UserIntf';

import { USettingsLink } from './USettingsUI';



interface IProps {
  user: User
}



/** @deprecated */
const USettingsTelegram: FC<IProps> = (props) => {
  const router = useRouter();

  const [status, setStatus] = useState<USettingsLinkSocialStatusType>(props.user.statistics.isTelegramLinked ? 'connected' : 'not_connected');



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



  return <USettingsLink name="Telegram" onLink={onLink} onUnlink={onUnlink} status={status} />;
};

export default USettingsTelegram;