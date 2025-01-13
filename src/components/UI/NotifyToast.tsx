import { MaterialSymbol } from 'react-material-symbols';
import { Slide, toast, ToastContent, ToastContentProps } from 'react-toastify';

import { createID } from '../handlers';



interface INotifyProps {
  message: string
  title: string
  type: 'success' | 'warn' | 'error';
}

interface INotifyInnerProps {
  data: INotifyProps
  component: ToastContent<INotifyProps>
}



export const NotifySuccess = (props: INotifyProps) => NotifyTrigger({ data: props, component: Toast });
export const NotifyWarn = (props: INotifyProps) => NotifyTrigger({ data: props, component: Toast });
export const NotifyError = (props: INotifyProps) => NotifyTrigger({ data: props, component: Toast });



function NotifyTrigger({ component, data }: INotifyInnerProps) {
  toast(component, {
    data,
    position: 'bottom-right',
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    customProgressBar: true,
    closeButton: false,
    theme: 'dark',
    className: 'bg-transparent p-0 h-fit',
    transition: Slide,
  })
}



function Toast({ closeToast, data }: ToastContentProps) {
  const id = createID();
  const { message, title, type } = data as INotifyProps;

  setTimeout(() => {
    try {
      closeToast(false)
    } catch (e) {
      // ignore
    }
  }, 2900);

  return <div className="w-[400px] bg-dark-light rounded-[2px] overflow-hidden flex flex-col gap-[8px] px-[16px] py-[8px] relative">
    <div className={`w-[2px] h-full absolute bottom-0 left-0 ui-notifyToast_progressBar--${type} opacity-[.5]`}></div>
    <div className={`ui-notifyToast_progressBar w-[2px] h-full absolute bottom-0 left-0 z-[2] ui-notifyToast_progressBar--${type}`} id={id}></div>

    <div className="flex items-center gap-[16px]">
      {type === 'success' && <MaterialSymbol icon="check_circle" size={24} color={`var(--color-info-${type})`} />}
      {type === 'warn' && <MaterialSymbol icon="error" size={24} color={`var(--color-info-${type})`} />}
      {type === 'error' && <MaterialSymbol icon="cancel" size={24} color={`var(--color-info-${type})`} />}

      <p className="text-white text-[20px] font-space-grotesk">{title}</p>
    </div>

    <p className="text-grey-new font-manrope">{message}</p>
  </div>
}