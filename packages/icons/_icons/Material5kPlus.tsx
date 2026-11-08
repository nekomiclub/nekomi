import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material5kPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M676-400h40v-63h64v-33h-64v-64h-40v64h-63v33h63zm-210 40h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50zm-233 0h133q14.45 0 24.23-9.49Q400-378.98 400-393v-70q0-14.02-9.77-23.51Q380.45-496 366-496h-83v-54h117v-50H233v137h117v53H233zm-53 240q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default Material5kPlus;