import '~/styles/components/StyledComponent.scss';

import React, { FC, JSX, ReactNode } from 'react';
import { IMaterialSymbolProps, MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';

import cn from '~/utils/classnames';

import { StyledM, StyledTypoFontType } from './StyledTypo';



interface IProps {
  text?: string
  icon?: SymbolCodepoints
  iconProps?: Omit<IMaterialSymbolProps, keyof Pick<IMaterialSymbolProps, 'icon'>>
  textProps?: StyledTypoFontType

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



const StyledButton: FC<IProps> = (props) => {
  const style = props.disabled ? 'default' : props.style ?? 'default';
  const Tag: keyof JSX.IntrinsicElements = props.as ?? 'button';
  const isIconOnly = props.icon && !props.children && !props.text;



  return <Tag className={cn(`styled-button styled-button--${style}`, isIconOnly && `styled-button--icon`, props.disabled && `styled-button--disabled`, props.className)} tabIndex={0} disabled={props.disabled} id={props.id} onClick={props.onClick} type={props.type}>
    {props.icon && <MaterialSymbol icon={props.icon} size={20} {...props.iconProps} />}
    {props.text && <StyledM text={props.text} className="styled-button_text" bold {...props.textProps} />}

    {props.children}
  </Tag>;
};

export default StyledButton;