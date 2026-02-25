import 'ldrs/react/Ring.css';

import React, { FC, JSX, ReactNode } from 'react';
import { Ring } from 'ldrs/react';
import { IMaterialSymbolProps, MaterialSymbol, SymbolCodepoints } from 'material-symbols-rc';

import cn from '~/utils/classnames';

import { StyledM, StyledTextFontType } from './StyledText';



export interface IStyledButtonProps {
  text?: string
  iconProps?: Omit<IMaterialSymbolProps, keyof Pick<IMaterialSymbolProps, 'icon'>>
  textProps?: StyledTextFontType

  /** Icon before text */
  icon?: SymbolCodepoints

  /** Icon after text & children */
  iconAfter?: SymbolCodepoints

  /**
   * Button type
   * 
   * @default "default"
   */
  style?: 'default' | 'primary' | 'secondary' | 'transparent' | 'inline'

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
  isLoading?: boolean
  className?: string
}



const StyledButton: FC<IStyledButtonProps> = (props) => {
  const style = props.disabled ? 'default' : props.style ?? 'default';
  const Tag: keyof JSX.IntrinsicElements = props.as ?? 'button';
  const isIconOnly = props.icon && !props.children && !props.text;
  const disabled = props.disabled || props.isLoading;



  return <Tag className={cn(`sui-button sui-button--${style}`, isIconOnly && `sui-button--icon`, disabled && `sui-button--disabled`, props.isLoading && 'sui-button--loading', props.className)} tabIndex={0} disabled={disabled} id={props.id} onClick={props.onClick} type={props.type}>
    {props.icon && <MaterialSymbol icon={props.icon} size={20} {...props.iconProps} />}

    {props.text && <StyledM text={props.text} className="sui-button_text" bold {...props.textProps} lineClamp={1} />}
    {props.children}

    {props.iconAfter && <MaterialSymbol icon={props.iconAfter} size={20} {...props.iconProps} />}

    <div className={cn(`sui-button_loader`, !props.isLoading && 'sui-button_loader--hidden')}>
      <Ring
        size="15"
        stroke="3"
        bgOpacity="0"
        speed="2"
        color="#fff"
      />
    </div>
  </Tag>;
};

export default StyledButton;