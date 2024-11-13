import { IcoGhost } from '@/assets/Icons'
import { NextPage } from 'next'
import { cn } from '../Components'



interface IErrorWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string
  errors: string[]
  errorNodeClassName?: string
}



const ErrorWrapper: NextPage<IErrorWrapperProps> = ({ id, className, errorNodeClassName, errors, ...props }) => {
  return <div className={cn(`px-[16px] py-[8px] flex items-start gap-[16px] bg-red/[.2] border border-red rounded-[2px]`, errors.length === 1 && 'items-center', className)} id={`error-wrapper--${id}`} {...props}>
    <IcoGhost width={32} height={32} />

    <ul className="flex flex-col gap-[4px]">
      {errors.map((error, i) => {
        return <li className={cn(`text-white`, errorNodeClassName)} key={`error-wrapper_element--${id}/${i}`}>{error}</li>
      })}
    </ul>
  </div>
}

export default ErrorWrapper;