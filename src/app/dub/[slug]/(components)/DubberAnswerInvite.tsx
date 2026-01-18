'use client';

import { FC, useState } from 'react';
import { PopupButton, PopupWindow } from '@fullkekw/popup';
import { MaterialSymbol } from 'material-symbols-rc';
import { usePathname, useRouter } from 'next/navigation';

import StyledImage from '~/components/Styled/StyledImage';
import { Dubber } from '~/interfaces/DubberIntf';



interface IProps {
  dubber: Dubber
  invite?: 'accept' | 'decline'
}



const DubberAnswerInvite: FC<IProps> = (props) => {
  const router = useRouter();
  const pathname = usePathname();

  const dialogId = 'dubber-invite-answerDialog';
  const [isPopupShowing, setIsPopupShowing] = useState(false);
  const [inviteType, setInviteType] = useState<'accept' | 'decline' | 'invalid'>('invalid');



  // useEffect(() => {
  //   if (invite !== 'accept' && invite !== 'decline') return router.replace(pathname, { scroll: false });

  //   (async function () {
  //     try {
  //       await APIOld.dubberGetInvite({ dubberId: dubber.id });
  //     } catch (e) {
  //       setIsPopupShowing(true);
  //       setInviteType('invalid');

  //       return;
  //     }

  //     try {
  //       if (invite === 'accept') {
  //         setInviteType('accept');
  //         await APIOld.dubberInviteAccept({ dubberId: dubber.id, userId: '' });
  //       };

  //       if (invite === 'decline') {
  //         setInviteType('decline');
  //         await APIOld.dubberInviteDecline({ dubberId: dubber.id, userId: '' });
  //       };

  //       setIsPopupShowing(true);
  //     } catch (e) {
  //       HandleClientError(e);
  //     }
  //   })();

  //   router.replace(pathname, { scroll: false });
  // }, []);



  return isPopupShowing && <PopupWindow className="max-w-[720px] w-full h-[500px] rounded-[4px] overflow-hidden bg-dark-primary block" id={dialogId} isOpen>
    <StyledImage src={props.dubber.banner} width="100%" height="250px" />

    <div className="flex flex-col items-center gap-[16px] relative top-[-64px]">
      <StyledImage src={props.dubber.avatar} width="128px" height="128px" className="rounded-[128px] overflow-hidden" />

      <div className="flex flex-col gap-[8px] items-center">
        <p className="text-white text-[24px] font-bold text-center">{props.dubber.nameUkr}</p>
        <p className="text-grey-new font-manrope text-center">
          {inviteType === 'accept' && 'Ти прийняв запрошення в цю команду озвучення'}
          {inviteType === 'decline' && 'Ти відхилив запрошення в цю команду озвучення'}
          {inviteType === 'invalid' && 'Ти не був запрошений в цю команду озвучення або в тебе нема акаунту'}
        </p>
      </div>
    </div>

    <PopupButton popupId={dialogId} className="absolute bottom-[24px] left-[50%] translate-x-[-50%] flex items-center gap-[16px] px-[16px] py-[8px] rounded-[4px] bg-dark-medium border border-dark-light duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
      {inviteType === 'accept' && <MaterialSymbol icon="how_to_reg" size={24} className="text-white" />}
      {inviteType === 'decline' && <MaterialSymbol icon="archive" size={24} className="text-white" />}
      {inviteType === 'invalid' && <MaterialSymbol icon="sentiment_sad" size={24} className="text-white" />}

      <p className="text-white font-manrope uppercase">{inviteType === 'accept' ? 'Чудово' : 'зрозуміло'}</p>
    </PopupButton>
  </PopupWindow>;
};

export default DubberAnswerInvite;