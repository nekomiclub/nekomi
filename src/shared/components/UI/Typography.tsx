import { FC, JSX } from 'react';

import { cn } from '~/utils/classnames';



interface TextProps {
  text: string | number | undefined
  tag: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'b' | 'i'

  size?: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
  bold?: boolean
  italic?: boolean
  center?: boolean
  children?: React.ReactNode | React.ReactNode[]
  className?: string
}

type FontProps = Omit<TextProps, 'tag'>



/** @deprecated use StyledType */
const Text: FC<TextProps> = ({ tag, size, text, className, bold, italic, center, children }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  size = size ?? 16;

  return <Tag className={cn(`ui-typo ui-typo--${size}`, bold && 'ui-typo--bold', italic && 'ui-typo--italic', center && 'ui-typo--center', className)}>
    {text}
    {children}
  </Tag>;
};

/** @deprecated use StyledType */
export const H2: FC<FontProps> = ({ ...props }) => {
  return <Text tag="h2" {...props} />;
};

/** @deprecated use StyledType */
export const P: FC<FontProps> = ({ ...props }) => {
  return <Text tag="p" {...props} />;
};