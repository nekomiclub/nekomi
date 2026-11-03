import { toast, ToastContent } from 'react-toastify';



interface IParams<TData extends object> {
  data: TData
  component: ToastContent<TData>
}



export function TriggerNotify<TData extends object>({ component, data }: IParams<TData>) {
  return toast(component, {
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