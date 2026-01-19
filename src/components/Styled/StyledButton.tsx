import React, { FC, JSX, ReactNode } from 'react';
import { IMaterialSymbolProps, MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';

import cn from '~/utils/classnames';

import { StyledM, StyledTextFontType } from './StyledText';



export interface IStyledButtonProps {
  text?: string
  icon?: SymbolCodepoints
  iconProps?: Omit<IMaterialSymbolProps, keyof Pick<IMaterialSymbolProps, 'icon'>>
  textProps?: StyledTextFontType

  /**
   * Button type
   * 
   * @default "default"
   */
  style?: 'default' | 'primary' | 'secondary' | 'clear'

  /** 
   * Tag 
   * 
   * @default "button"
   */
  as?: 'div' | 'button'



  id?: string
  disabled?: boolean
  children?: ReactNode | ReactNode[]
  type?: 'button' | 'submit' | 'reset'
  onClick?: (e: React.MouseEvent) => void
  className?: string
}



const StyledButton: FC<IStyledButtonProps> = (props) => {
  const style = props.disabled ? 'default' : props.style ?? 'default';
  const Tag: keyof JSX.IntrinsicElements = props.as ?? 'button';
  const isIconOnly = props.icon && !props.children && !props.text;



  return <Tag className={cn(`sui-button sui-button--${style}`, isIconOnly && `sui-button--icon`, props.disabled && `sui-button--disabled`, props.className)} tabIndex={0} disabled={props.disabled} id={props.id} onClick={props.onClick} type={props.type}>
    {props.icon && <MaterialSymbol icon={props.icon} size={20} {...props.iconProps} />}
    {props.text && <StyledM text={props.text} className="sui-button_text" bold {...props.textProps} lineClamp={1} />}

    {props.children}
  </Tag>;
};

export default StyledButton;