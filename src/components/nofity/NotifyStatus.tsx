'use client';

import { FC } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';
import { ToastContentProps } from 'react-toastify';

import { createStringID } from '~/utils/utils';

import { TriggerNotify } from './Notify';



interface IData {
  title: string
  type: 'success' | 'warn' | 'error'

  message?: string
}

interface INotifyPayload extends Omit<IData, keyof Pick<IData, 'type'>> { }

interface IProps extends ToastContentProps<IData> { }



const Notification: FC<IProps> = (props) => {
  const id = createStringID(8);
  const { message, title, type } = props.data;

  const duration = type === 'error' ? 6000 : 3000;

  setTimeout(() => {
    try {
      props.closeToast(false);
    } catch (e) {
      // ignore
    }
  }, duration - 200);



  return <div className="w-full bg-dark-bright border border-dark-light flex flex-col gap-[8px] px-[16px] py-[8px] relative">
    <div className={`cui-notify_progressBar w-[2px] h-full absolute bottom-0 left-0 z-[2] cui-notify_progressBar--${type}`} id={id}></div>

    <div className="flex items-center gap-[16px]">
      {type === 'success' && <MaterialSymbol icon="check_circle" size={24} color={`var(--color-info-${type})`} />}
      {type === 'warn' && <MaterialSymbol icon="error" size={24} color={`var(--color-info-${type})`} />}
      {type === 'error' && <MaterialSymbol icon="cancel" size={24} color={`var(--color-info-${type})`} />}

      <p className="text-white text-[20px] font-manrope">{title}</p>
    </div>

    <p className="text-grey-new font-manrope whitespace-pre-wrap">{message}</p>
  </div>;
};



export const NotifySuccess = (payload: INotifyPayload) => TriggerNotify<IData>({ data: { ...payload, type: 'success' }, component: props => <Notification {...props} /> });
export const NotifyWarn = (payload: INotifyPayload) => TriggerNotify<IData>({ data: { ...payload, type: 'warn' }, component: props => <Notification {...props} /> });
export const NotifyError = (payload: INotifyPayload) => TriggerNotify<IData>({ data: { ...payload, type: 'error' }, component: props => <Notification {...props} /> });
