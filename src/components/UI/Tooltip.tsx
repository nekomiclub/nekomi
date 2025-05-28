'use client'

import { useId } from 'react';
import { NextPage } from 'next';
import { Tooltip as RT } from 'react-tooltip'

import { cn } from '~/utils/utils';



interface Props {
  children: any
  content: string

  fitWrapper?: boolean
  className?: string
}

/** Tooltip component
 * @prop fitWrapper will fit tooltip in parent width & center content
 */
const Tooltip: NextPage<Props> = ({ content, children, fitWrapper, className }) => {
  const id = useId();

  return (
    <div data-tooltip-id={id} data-tooltip-content={content} className={cn(`relative z-[5]`, className)}>
      <RT id={id} className={cn(fitWrapper && '!w-fit text-center')} />
      {children}
    </div>
  );
}

export default Tooltip;