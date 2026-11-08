import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material2kPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M676-400h40v-63h64v-33h-64v-64h-40v64h-63v33h63zm-210 40h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50zm-226 0h166v-50H290v-53h83q14.02 0 23.51-9.49T406-496v-70q0-14.45-9.49-24.22Q387.02-600 373-600H240v50h116v54h-83q-14.02 0-23.51 9.49T240-463zm-60 240q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default Material2kPlus;