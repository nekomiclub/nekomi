import { NextPage } from 'next';
import React, { FC, JSX } from 'react';

import cn from '~/utils/classnames';




export interface IStyledTypoProps {
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'b' | 'i'
  size: StyledTypoSizeType

  id?: string
  className?: string
  title?: string
  style?: React.CSSProperties
  center?: boolean
  color?: StyledTypoColorType
  lineClamp?: number
  bold?: boolean
  fontWeight?: 'inherit' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

  /** @default "manrope" */
  fontFamily?: 'manrope' | 'space-grotesk'

  /** If children specified, text will not be rendered */
  text?: string | number | undefined

  /** If text specified, children will not be rendered */
  children?: React.ReactElement | React.ReactElement[]
}

export type StyledTypoColorType = 'inherit' | 'text' | 'text-muted'
export type StyledTypoSizeType = 'heading' | 'h2' | 'h3' | 'm' | 's' | 'xs'
export type StyledTypoFontType = Omit<IStyledTypoProps, 'tag' | 'size'>



const StyledTypo: NextPage<IStyledTypoProps> = (props) => {
  const Tag: keyof JSX.IntrinsicElements = props.tag;
  const fontWeight = props.bold ? 700 : props.fontWeight;
  const fontFamily = props.fontFamily ?? 'manrope';
  const textAlign = props.center ? 'center' : undefined;
  const color = props.color && props.color !== 'inherit' ? `var(--color-${props.color})` : undefined;
  const lineClamp = props.lineClamp;



  return <Tag className={cn(`styled-text styled-text--${props.size}`, lineClamp && 'styled-text--clamp', props.className)} suppressHydrationWarning style={{
    fontWeight,
    fontFamily: `var(--font-${fontFamily})`,
    textAlign,
    color,
    lineClamp,
    WebkitLineClamp: lineClamp,
  }}>
    {props.text || props.children}
  </Tag>;
};

export default StyledTypo;



export const StyledHeading: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="h1" size="heading" {...props} />;
};

export const StyledH2: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="h2" size="h2" {...props} />;
};

export const StyledH3: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="h3" size="h3" {...props} />;
};

export const StyledM: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="p" size="m" {...props} />;
};

export const StyledS: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="p" size="s" {...props} />;
};

export const StyledXS: FC<StyledTypoFontType> = (props) => {
  return <StyledTypo tag="p" size="xs" {...props} />;
};