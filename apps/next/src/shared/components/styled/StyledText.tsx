import React, { FC, JSX } from 'react';

import cn from '~/shared/utilities/classnames';




export interface IStyledTextProps {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'b' | 'i'
  size: StyledTextSizeType

  id?: string
  className?: string
  title?: string
  style?: React.CSSProperties
  center?: boolean
  color?: StyledTextColorType
  lineClamp?: number
  bold?: boolean
  fontWeight?: 'inherit' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

  /** If children specified, text will not be rendered */
  text?: string | number | undefined

  /** If text specified, children will not be rendered */
  children?: React.ReactElement | React.ReactElement[]
}

export type StyledTextColorType = 'inherit' | 'text' | 'text-secondary' | 'text-muted' | 'accent'
export type StyledTextSizeType = 'heading' | 'h2' | 'h3' | 'm' | 's' | 'xs'
export type StyledTextFontType = Omit<IStyledTextProps, 'tag' | 'size'>



const StyledText: FC<IStyledTextProps> = (props) => {
  const Tag: keyof JSX.IntrinsicElements = props.tag;
  const fontWeight = props.bold ? 700 : props.fontWeight;
  const textAlign = props.center ? 'center' : undefined;
  const color = props.color ? props.color !== 'inherit' ? `var(--color-${props.color})` : 'inherit' : undefined;
  const lineClamp = props.lineClamp;



  return <Tag className={cn(`sui-text sui-text--${props.size}`, lineClamp && 'sui-text--clamp', props.className)} suppressHydrationWarning style={{
    fontWeight,
    fontFamily: `var(--font-manrope)`,
    textAlign,
    width: textAlign === 'center' ? '100%' : undefined,
    color,
    lineClamp,
    WebkitLineClamp: lineClamp,
  }}>
    {props.text || props.children}
  </Tag>;
};

export default StyledText;



export const StyledHeading: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="h1" size="heading" {...props} />;
};

export const StyledH2: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="h2" size="h2" {...props} />;
};

export const StyledH3: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="h3" size="h3" {...props} />;
};

export const StyledM: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="p" size="m" {...props} />;
};

export const StyledS: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="p" size="s" {...props} />;
};

export const StyledXS: FC<StyledTextFontType> = (props) => {
  return <StyledText tag="p" size="xs" {...props} />;
};