import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddRowBelow: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-551h600v-269H180zm-60 391v-720h720v720H690v-60h90v-271H180v271h90v60zm360-391v60zM450-80v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddRowBelow;