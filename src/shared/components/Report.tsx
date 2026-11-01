'use client';

import { FC } from 'react';
import { PopupButton, PopupWindow } from '@fullkekw/popup';
import { MaterialSymbol } from 'material-symbols-rc';
import Link from 'next/link';

import { conf } from '~/conf';
import { IcoSocialDiscord } from '~/shared/components/Icons';
import { cn } from '~/utils/classnames';

import StyledButton from './styled/StyledButton';
import Tooltip from './Tooltip';



interface IReportButtonProps {
  type: 'icon' | 'text' | 'button'
  text?: string
  className?: string
}



const REPORT_MODAL_ID = `report-modal-generic`;



export const ReportModal: FC = (props) => {
  return <PopupWindow className="px-[24px] py-[40px] max-w-[700px] w-full" id={REPORT_MODAL_ID}>
    <div className="w-full bg-dark-primary flex flex-col gap-[24px] p-[16px] rounded-[4px]">
      <div className="flex flex-col gap-[8px] items-center">
        <MaterialSymbol icon="flag" size={64} className="text-white" />

        <div className="flex flex-col gap-[4px] items-center">
          <p className="text-white text-[24px]  text-center">Створити тікет</p>
          <p className="text-grey-new text-[14px]  text-center">Допоможіть нам покращити nekomi.club</p>
        </div>
      </div>

      <Link href={conf.URL.discordCreateTicket} target="_blank" className="p-[16px] w-full bg-dark-medium rounded-[2px] border border-dark-light flex flex-col items-center gap-[8px] duration-200 hover:bg-dark-light focus-visible:bg-dark-light">
        <IcoSocialDiscord width={64} height={64} fill="#fff" />

        <p className="text-white text-center ">Створити тікет на Discord сервері</p>
        <p className="text-grey-new text-center ">Support {'>'} #тікети</p>
      </Link>
    </div>
  </PopupWindow>;
};



export const ReportButton: FC<IReportButtonProps> = (props) => {
  const text = props.text ?? `Створити тікет`;



  return <>
    {props.type === 'icon' && <Tooltip content={text} className={cn(`z-[5] w-fit h-fit`, props.className)}>
      <PopupButton popupId={REPORT_MODAL_ID}>
        <StyledButton as="div" icon="flag" iconProps={{ size: 24 }} className={cn('w-[40px] h-[40px] flex justify-center items-center rounded-[4px]')} />
      </PopupButton>
    </Tooltip>}

    {props.type === 'text' && <PopupButton className={cn('flex justify-center items-center gap-[8px]')} popupId={REPORT_MODAL_ID}>
      <MaterialSymbol icon="flag" size={24} className="text-grey-new" />

      <p className="text-grey-new ">{text}</p>
    </PopupButton>}

    {props.type === 'button' && <PopupButton popupId={REPORT_MODAL_ID}>
      <StyledButton as="div" className={cn('flex justify-center items-center gap-[8px] px-[16px] py-[8px]')}>
        <MaterialSymbol icon="flag" size={24} className="text-white" />

        <p className="text-white ">{text}</p>
      </StyledButton>
    </PopupButton>}
  </>;
};