'use client';

import { FC, useMemo } from 'react';
import { MaterialSymbol } from 'material-symbols-rc';

import useMixedState from '~/shared/hooks/useMixedState';
import { StateSetter } from '~/shared/types/types';
import cn from '~/shared/utilities/classnames';

import { StyledS } from './StyledText';



export interface IStyledCheckboxProps {
  isChecked?: boolean
  setIsChecked?: StateSetter<boolean>

  label?: string
  className?: string
  disabled?: boolean
}



const StyledCheckbox: FC<IStyledCheckboxProps> = (props) => {
  const [isChecked, setIsChecked] = useMixedState<boolean>(props.isChecked ?? false, props.setIsChecked);



  // Force default state update
  useMemo(() => {
    if (props.isChecked !== undefined && props.setIsChecked === undefined) setIsChecked(props.isChecked);
  }, [props.isChecked]);



  function toggle() {
    if (props.disabled) return;

    setIsChecked(prev => !prev);
  }



  return <button className={cn(`sui-checkbox`, isChecked && 'sui-checkbox--checked', props.disabled && 'sui-checkbox--disabled')} role="checkbox" tabIndex={0} aria-checked={isChecked} disabled={props.disabled} onClick={toggle}>
    <div className="sui-checkbox_item">
      {props.disabled && <MaterialSymbol icon="close_small" color={props.isChecked ? 'var(--color-text)' : 'var(--color-text-muted)'} size={16} />}
      {!props.disabled && <MaterialSymbol icon="check_small" className="sui-checkbox_mark" size={16} />}
    </div>

    {props.label && <StyledS text={props.label} color={!props.disabled ? 'text-secondary' : 'text-muted'} />}
  </button>;
};

export default StyledCheckbox;