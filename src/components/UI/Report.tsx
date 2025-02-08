import { PopupButton, PopupDialog, PopupLayer } from '@fullkekw/fkw-popup';
import { NextPage } from 'next';
import Link from 'next/link';
import { MaterialSymbol } from 'react-material-symbols';

import { IcoSocialDiscord } from '~/assets/Social';
import { CONSTS } from '~/config';
import { cn } from '../Components';

import Tooltip from './Tooltip';



interface IReportButtonProps {
  type: 'icon' | 'text' | 'button'
  text?: string
  className?: string
}



const REPORT_MODAL_ID = `report-modal-generic`;



export const UIReportModal: NextPage = ({ }) => {
  return <PopupLayer className="flex justify-center items-center">
    <PopupDialog className="px-[24px] py-[40px] max-w-[700px] w-full" id={REPORT_MODAL_ID}>
      <div className="w-full bg-dark-primary flex flex-col gap-[24px] p-[16px] rounded-[4px]">
        <div className="flex flex-col gap-[8px] items-center">
          <MaterialSymbol icon="flag" size={64} className="text-white" />

          <div className="flex flex-col gap-[4px] items-center">
            <p className="text-white text-[24px] font-manrope text-center">Створити тікет</p>
            <p className="text-grey-new text-[14px] font-manrope text-center">Допоможіть нам покращити nekomi.club</p>
          </div>
        </div>

        <Link href={CONSTS.social.discordCreateTicket} target="_blank" className="p-[16px] w-full bg-dark-medium rounded-[2px] border border-dark-light flex flex-col items-center gap-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
          <IcoSocialDiscord width={64} height={64} fill="#fff" />

          <p className="text-white text-center font-manrope">Створити тікет на Discord сервері</p>
          <p className="text-grey-new text-center font-manrope">Support {'>'} #тікети</p>
        </Link>
      </div>
    </PopupDialog>
  </PopupLayer>
}

export const UIReportButton: NextPage<IReportButtonProps> = ({ type, text, className }) => {
  text = text ?? `Створити тікет`;

  return <>
    {type === 'icon' && <Tooltip content={text} className={cn(`z-[5] w-fit h-fit`, className)}>
      <PopupButton className={cn('ui-button w-[40px] h-[40px] flex justify-center items-center rounded-[4px]')} togglePopupId={REPORT_MODAL_ID}>
        <MaterialSymbol icon="flag" size={24} className="text-white" />
      </PopupButton>
    </Tooltip>}

    {type === 'text' && <PopupButton className={cn('flex justify-center items-center gap-[8px]')} togglePopupId={REPORT_MODAL_ID}>
      <MaterialSymbol icon="flag" size={24} className="text-grey-new" />

      <p className="text-grey-new font-manrope">{text}</p>
    </PopupButton>}

    {type === 'button' && <PopupButton className={cn('ui-button flex justify-center items-center gap-[8px] px-[16px] py-[8px]')} togglePopupId={REPORT_MODAL_ID}>
      <MaterialSymbol icon="flag" size={24} className="text-white" />

      <p className="text-white font-manrope">{text}</p>
    </PopupButton>}
  </>
}