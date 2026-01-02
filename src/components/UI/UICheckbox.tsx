'use client';

import { NextPage } from 'next';
import { MaterialSymbol } from 'material-symbols-rc';

import { cn } from '~/utils/classnames';



interface Props {
  isChecked: boolean
  setIsChecked: (val: boolean) => void

  className?: string

  /** E.g prevent double check (on>off) when handling state out of checkbox */
  disableDefaultToggle?: boolean

  disabled?: boolean
}



const UICheckbox: NextPage<Props> = ({ isChecked, setIsChecked, className, disableDefaultToggle, disabled }) => {
  function toggle() {
    if (disableDefaultToggle) return;
    if (disabled) return;

    setIsChecked(!isChecked);
  }

  return <div className={cn(`ui-checkbox`, isChecked && 'ui-checkbox--checked', disabled && 'cursor-not-allowed', className)} role="checkbox" aria-checked={isChecked} onClick={toggle}>
    <MaterialSymbol icon="check" size={16} className={cn(`ui-checkbox_checkmark`)} />
  </div>;
};



export default UICheckbox;