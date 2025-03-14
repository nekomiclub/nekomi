'use client'

import { NextPage } from 'next';
import { MaterialSymbol } from 'react-material-symbols';

import { cn } from '../Components';



interface Props {
  isChecked: boolean
  setIsChecked: (val: boolean) => void

  className?: string

  /** E.g prevent double check (on>off) when handling state out of checkbox */
  disableDefaultToggle?: boolean
}



const UICheckbox: NextPage<Props> = ({ isChecked, setIsChecked, className, disableDefaultToggle }) => {
  function toggle() {
    if (disableDefaultToggle) return;

    setIsChecked(!isChecked)
  }

  return <div className={cn(`ui-checkbox`, isChecked && 'ui-checkbox--checked', className)} role="checkbox" aria-checked={isChecked} onClick={toggle}>
    <MaterialSymbol icon="check" size={16} className={cn(`ui-checkbox_checkmark`)} />
  </div>
}



export default UICheckbox;