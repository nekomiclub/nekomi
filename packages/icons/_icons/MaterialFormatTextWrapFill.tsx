import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFormatTextWrapFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-161v-639h60v639zm580 0v-639h60v639zM384-263 256-390l128-127 42 42-55 55h179q42 0 71-29t29-71-29-71-71-29H250v-60h300q66 0 113 47t47 113-47 113-113 47H371l55 55z" /></svg>;
export default MaterialFormatTextWrapFill;