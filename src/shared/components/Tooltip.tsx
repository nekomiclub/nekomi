'use client';

import { FC, ReactNode, useId } from 'react';
import { PlacesType, Tooltip as RT } from 'react-tooltip';

import { cn } from '~/utils/classnames';



interface IProps {
  children: ReactNode | ReactNode[]
  content: string

  place?: PlacesType
  fitWrapper?: boolean
  className?: string
}



/** Tooltip component
 * @prop fitWrapper will fit tooltip in parent width & center content
 */
const Tooltip: FC<IProps> = (props) => {
  const id = useId();

  return (
    <div data-tooltip-id={id} data-tooltip-content={props.content} className={cn(`relative z-[5]`, props.className)}>
      <RT id={id} place={props.place} className={cn(props.fitWrapper && '!w-fit text-center')} />
      {props.children}
    </div>
  );
};

export default Tooltip;