import { NextPage } from 'next';

import { cn } from '../Components';



interface IGroupLabel extends React.HTMLAttributes<HTMLDivElement> {
  label: string

  /** @default grey */
  dividerColor?: string
  headingClassName?: string
}



const GroupLabel: NextPage<IGroupLabel> = ({ label, className, headingClassName, dividerColor, ...props }) => {
  return (
    <div className={cn(`flex items-center gap-[32px]`, className)} {...props}>
      <h3 className={cn(`text-white font-bold shrink-0 text-[24px]`, headingClassName)}>{label}</h3>

      <span className={cn('w-full h-[1px]', dividerColor ? `bg-[#${dividerColor}]` : `bg-grey`)}></span>
    </div>
  );
}

export default GroupLabel