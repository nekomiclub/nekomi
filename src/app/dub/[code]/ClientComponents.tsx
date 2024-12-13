'use client'



import { useState } from 'react';
import { Dialog, Layer, Trigger } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import { usePathname, useRouter } from 'next/navigation';

import { addZeroIfNumberSingle } from '~/components/handlers';
import { $api } from '~/components/http';
import StyledImage from '~/components/UI/StyledImage';
import { IcoCalendar, IcoChain, IcoCheckmark } from '../../../assets/Icons';
import { copyToClipboard } from '../../../components/Components';
import Tooltip from '../../../components/UI/Tooltip';
import { config } from '../../../config';
import { IDubber } from '../../../interfaces/IDubber';



interface IProps {
  dubber: IDubber
}


export const DubberHeader: NextPage<IProps> = ({ dubber }) => {
  return (
    <>
      <div className={`bg-dark relative`} style={{ paddingTop: `92px` }}>
        {/* Image */}
        <div className="w-full h-fit max-h-[500px] aspect-[16/9] relative max-[1140px]:aspect-[16/7]">
          {/* // TODO Add dubber banner */}
          <StyledImage src={`https://media.nekomi.club/efe3322f-69db-4084-b21b-5e139978292c`} width="100%" height="100%" priority alt="banner" className="w-full h-full object-cover" />
        </div>

        {/* Layouts */}
        <div className="wrapper z-[2]">
          {/* PC */}
          <div className={`min-[670px]:flex hidden flex-row justify-between absolute bottom-0 left-0 w-full bg-dark/[.3] backdrop-blur-[32px] px-[32px] py-[16px]`}>
            <div className="flex gap-[32px] min-[670px]">
              <AvatarComponent dubber={dubber} />

              <DubberComponent dubber={dubber} />
            </div>

            <SettingsComponent dubber={dubber} />
          </div>

          {/* Mobile */}
          <div className="max-[670px]:flex flex-col hidden gap-[16px] items-center pt-[40px]">
            <AvatarComponent dubber={dubber} />

            <div className="flex justify-between items-center gap-[16px] w-full">
              <DubberComponent dubber={dubber} />
              <SettingsComponent dubber={dubber} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AvatarComponent({ dubber }: { dubber: IDubber }) {
  return <div className="w-[256px] h-full relative max-[820px]:w-[160px] max-[670px]:h-[32px]">
    <StyledImage src={dubber.thumbURL} width={'256px'} height={'256px'} className="!absolute bottom-0 left-0 rounded-[4px] w-full h-fit aspect-square max-[820px]:!w-[160px] max-[820px]:!h-[160px]" priority alt="avatar" />
  </div>
}

function DubberComponent({ dubber }: { dubber: IDubber }) {
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[16px]">
      <p className="text-white text-[32px] font-bold max-[1140px]:text-[24px] break-all" title={dubber.name}>{dubber.name}</p>
    </div>

    <Tooltip content="Дата реєстрації команди">
      <div className="flex items-center gap-[16px]">
        <IcoCalendar width={32} height={32} />
        <p className="text-white">{addZeroIfNumberSingle(new Date(dubber.createdAt).getUTCDate())}.{addZeroIfNumberSingle(new Date(dubber.createdAt).getUTCMonth() + 1)}.{new Date(dubber.createdAt).getUTCFullYear()}</p>
      </div>
    </Tooltip>
  </div>
}

function SettingsComponent({ dubber }: { dubber: IDubber }) {
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

    {/* {isOwner && <Tooltip content="Налаштування">
      <Trigger id={settingsPopupID} className="p-[16px] duration-200 bg-darkGrey hover:bg-grey focus-visible:bg-grey rounded-[4px] max-[600px]:p-[12px]">
        <IcoSettings width={32} height={32} className="max-[600px]:w-[24px] max-[600px]:h-[24px]" />
      </Trigger>
    </Tooltip>} */}
  </div>
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
            {/* // TODO Add dubber banner */}
            <StyledImage height="100%" width="100%" src="https://media.nekomi.club/efe3322f-69db-4084-b21b-5e139978292c" />

            <StyledImage width="128px" height="128px" src={dubber.thumbURL} className="rounded-[128px] overflow-hidden absolute -translate-y-[50%] left-[50%] -translate-x-[50%] z-[2]" />
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