import { MaterialSymbol } from 'react-material-symbols';
import { toast, ToastContent, ToastContentProps } from 'react-toastify';

import { createStringID } from '~/utils/utils';



interface INotifyProps {
  message: string
  title: string
  type?: 'success' | 'warn' | 'error'
}

interface INotifyInnerProps {
  data: INotifyProps
  component: ToastContent<INotifyProps>
}



export const NotifySuccess = (props: INotifyProps) => NotifyTrigger({ data: { ...props, type: 'success' }, component: Toast });
export const NotifyWarn = (props: INotifyProps) => NotifyTrigger({ data: { ...props, type: 'warn' }, component: Toast });
export const NotifyError = (props: INotifyProps) => NotifyTrigger({ data: { ...props, type: 'error' }, component: Toast });



function NotifyTrigger({ component, data }: INotifyInnerProps) {
  toast(component, {
    data,
    position: 'bottom-right',
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    customProgressBar: true,
    closeButton: false,
    theme: 'dark',
    className: 'bg-transparent p-0 h-fit w-[40vw] min-w-[300px] rounded-[2px] overflow-hidden',
  });
}



function Toast({ closeToast, data }: ToastContentProps) {
  const id = createStringID(8);
  const { message, title, type } = data as INotifyProps;

  const duration = type === 'error' ? 6000 : 3000;

  setTimeout(() => {
    try {
      closeToast(false);
    } catch (e) {
      // ignore
    }
  }, duration - 200);

  return <div className="w-full bg-dark-bright border border-dark-light flex flex-col gap-[8px] px-[16px] py-[8px] relative">
    <div className={`ui-notifyToast_progressBar w-[2px] h-full absolute bottom-0 left-0 z-[2] ui-notifyToast_progressBar--${type}`} id={id}></div>

    <div className="flex items-center gap-[16px]">
      {type === 'success' && <MaterialSymbol icon="check_circle" size={24} color={`var(--color-info-${type})`} />}
      {type === 'warn' && <MaterialSymbol icon="error" size={24} color={`var(--color-info-${type})`} />}
      {type === 'error' && <MaterialSymbol icon="cancel" size={24} color={`var(--color-info-${type})`} />}

      <p className="text-white text-[20px] font-manrope">{title}</p>
    </div>

    <p className="text-grey-new font-manrope whitespace-pre-wrap">{message}</p>
  </div>;
}