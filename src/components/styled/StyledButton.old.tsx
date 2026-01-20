'use client';

import React, { FC, JSX, ReactNode } from 'react';

import { P } from '~/components/UI/Typography';
import cn from '~/utils/classnames';



interface ButtonProps extends React.DetailsHTMLAttributes<HTMLElement> {
  text?: string
  disabled?: boolean
  children?: ReactNode | ReactNode[]
  type?: 'button' | 'submit' | 'reset'
  width?: string
  height?: string

  /** Whether component is icon (remove paddings & make it round) */
  isIcon?: boolean

  /** 
   * Color of the button
   * "none" - mean no styling at all, just a button with some features
   * 
   * @default "default"
   */
  color?: 'none' | 'default'

  /** Rendered tag @default "button" */
  as?: 'div' | 'button'
}



/** 
 * Pretty button
 * Children will be rendered at the beginning
 * 
 * @deprecated use StyledButton instead
 */
const StyledButtonOld: FC<ButtonProps> = ({ text, color, className, children, disabled, as, type, isIcon, width, height, style, ...props }) => {
  const Tag: keyof JSX.IntrinsicElements = as ?? 'button';
  color = color ?? 'default';

  return <Tag className={cn(`ui-buttonJam ui-button ui-button--${color}`, disabled && 'ui-button--disabled', isIcon && 'ui-button--icon', className)} disabled={disabled} aria-disabled={disabled} style={{ width, height, ...style }} {...props} type={type}>
    {children}

    {text && <P text={text} bold />}
  </Tag>;
};

export default StyledButtonOld;