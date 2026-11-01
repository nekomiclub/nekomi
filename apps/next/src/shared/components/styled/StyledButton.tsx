import 'ldrs/react/Ring.css';

import React, { CSSProperties, FC, JSX, ReactNode } from 'react';
import { Ring } from 'ldrs/react';
import { IMaterialSymbolProps, MaterialSymbol, MaterialSymbolIconType } from 'material-symbols-rc';

import cn from '~/shared/utilities/classnames';

import { StyledM, StyledTextFontType } from './StyledText';



export interface IStyledButtonProps {
  text?: string
  iconProps?: Omit<IMaterialSymbolProps, keyof Pick<IMaterialSymbolProps, 'icon'>>
  textProps?: StyledTextFontType

  /** Icon before text */
  icon?: MaterialSymbolIconType

  /** Icon after text & children */
  iconAfter?: MaterialSymbolIconType

  /**
   * Button color
   * 
   * @default "default"
   */
  color?: 'default' | 'primary' | 'secondary' | 'transparent' | 'inline'

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
  style?: CSSProperties
  isLoading?: boolean
  className?: string
  size?: string
}



const StyledButton: FC<IStyledButtonProps> = (props) => {
  const color = props.disabled ? 'default' : props.color ?? 'default';
  const Tag: keyof JSX.IntrinsicElements = props.as ?? 'button';
  const isIconOnly = props.icon && !props.children && !props.text;
  const disabled = props.disabled || props.isLoading;
  const style: CSSProperties = { ...props.style, width: props.size, height: props.size };



  return <Tag className={cn(`sui-button sui-button--${color}`, isIconOnly && `sui-button--icon`, disabled && `sui-button--disabled`, props.isLoading && 'sui-button--loading', props.className)} tabIndex={0} disabled={disabled} id={props.id} onClick={props.onClick} type={props.type} style={style}>
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