'use client';

import { FC, JSX, useMemo } from 'react';

import useMixedState from '~/shared/hooks/useMixedState';
import { StateSetter } from '~/shared/types/types';
import cn from '~/shared/utilities/classnames';

import StyledIcon from './StyledIcon';
import { StyledS } from './StyledText';



export interface IStyledCheckboxProps {
  isChecked?: boolean
  setIsChecked?: StateSetter<boolean>

  as?: 'div' | 'button'

  label?: string
  className?: string
  disabled?: boolean
}



const StyledCheckbox: FC<IStyledCheckboxProps> = (props) => {
  const Tag: keyof JSX.IntrinsicElements = props.as ?? 'button';

  const [isChecked, setIsChecked] = useMixedState<boolean>(props.isChecked ?? false, props.setIsChecked);



  // Force default state update
  useMemo(() => {
    if (props.isChecked !== undefined && props.setIsChecked === undefined) setIsChecked(props.isChecked);
  }, [props.isChecked]);



  function toggle() {
    if (props.disabled) return;

    setIsChecked(prev => !prev);
  }



  return <Tag className={cn(`sui-checkbox`, isChecked && 'sui-checkbox--checked', props.disabled && 'sui-checkbox--disabled')} role="checkbox" tabIndex={0} aria-checked={isChecked} disabled={props.disabled} onClick={toggle}>
    <div className="sui-checkbox_item">
      {props.disabled && <StyledIcon icon="CloseSmall" size={16} color={props.isChecked ? 'var(--color-text)' : 'var(--color-text-muted)'} />}
      {!props.disabled && <StyledIcon icon="CheckSmall" size={16} className="sui-checkbox_mark" />}
    </div>

    {props.label && <StyledS text={props.label} color={!props.disabled ? 'text-secondary' : 'text-muted'} />}
  </Tag>;
};

export default StyledCheckbox;