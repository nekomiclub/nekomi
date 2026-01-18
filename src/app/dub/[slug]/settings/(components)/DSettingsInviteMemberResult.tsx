'use client';

import { FC, useState } from 'react';

import { Dubber } from '~/interfaces/DubberIntf';



interface IProps {
  dubber: Dubber
}



/** @deprecated */
const DSettingsInviteMemberResult: FC<IProps> = (props) => {
  const [isInvited, setIsInvited] = useState(false);



  async function inviteMember() {
    // if (invitationStatus !== 'can_be_invited' || isInvited) return NotifyWarn({ title: 'Неможливо запросити', message: 'Користувача неможливо запросити в команду' });

    // try {
    //   setIsInvited(true);

    //   await APIOld.dubberSendInvite({
    //     dubberId: dubber.id,
    //     userId: user.id
    //   });

    //   NotifySuccess({ title: 'Запрошення надіслано', message: `Ми надіслали @${user.username} запрошення в команду, тепер залишилося почекати на його розгляд` });
    //   setIsInvited(true);
    // } catch (e) {
    //   setIsInvited(false);
    //   HandleClientError(e);
    // }
  }



  // return <button className={cn('px-[12px] py-[8px] flex items-center gap-[16px] duration-200 hover:bg-dark-light focus-visible:hover:bg-dark-light', (props.invitationStatus !== 'can_be_invited' || isInvited) && 'cursor-not-allowed')} disabled={invitationStatus !== 'can_be_invited' || isInvited} onClick={inviteMember}>
  //   <StyledImage src={props.user.avatar} width="64px" height="64px" className="rounded-[4px] overflow-hidden" />

  //   <div className="flex flex-col items-start gap-[4px]">
  //     <p className="text-white font-space-grotesk">@{props.user.username}</p>

  //     <div className="flex items-center gap-[8px]">
  //       {!isInvited && props.invitationStatus === 'can_be_invited' && <MaterialSymbol icon="person_add" size={16} className="text-white" />}
  //       {!isInvited && props.invitationStatus === 'invite_pending' && <MaterialSymbol icon="hourglass_bottom" size={16} className="text-grey-new" />}
  //       {!isInvited && props.invitationStatus === 'telegram_not_linked' && <MaterialSymbol icon="link_off" size={16} className="text-grey-new" />}
  //       {!isInvited && props.invitationStatus === 'others_member_already' && <MaterialSymbol icon="interpreter_mode" size={16} className="text-grey-new" />}
  //       {isInvited && <MaterialSymbol icon="mark_email_read" size={16} className="text-info-success" />}

  //       <p className={cn('font-manrope max-md:text-[14px]', props.invitationStatus === 'can_be_invited' ? 'text-white' : 'text-grey-new', isInvited && '!text-info-success')}>
  //         {!isInvited && props.invitationStatus === 'can_be_invited' && 'Ти можеш запросити цього користувача у команду'}
  //         {!isInvited && props.invitationStatus === 'invite_pending' && 'Запрошення очікує на розгляд користувачем'}
  //         {!isInvited && props.invitationStatus === 'telegram_not_linked' && 'Користувач ще не прив’язав телеграм до свого акаунту'}
  //         {!isInvited && props.invitationStatus === 'others_member_already' && 'Користувач вже є учасником іншої команди'}
  //         {isInvited && 'Запрошення надіслано!'}
  //       </p>
  //     </div>
  //   </div>
  // </button>;

  return <></>;
};

export default DSettingsInviteMemberResult;