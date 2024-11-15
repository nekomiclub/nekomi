import { NextPage } from 'next'

import { cn } from '../Components'



interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state: any
  stateSetter: (prop: any) => void
}



const Input: NextPage<IInputProps> = ({ state, stateSetter, className, placeholder, ...props }) => {
  return <input {...props} className={cn('px-[12px] py-[8px] bg-grey text-white text-[16px] placeholder:text-lightGrey placeholder:text-[16px]', className)} value={state} onChange={e => stateSetter(e.target.value)} placeholder={placeholder ?? '...'} />
}

export default Input;