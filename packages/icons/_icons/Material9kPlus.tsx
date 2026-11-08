import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material9kPlus: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M233-360h136.76q14.24 0 23.74-9.49T403-393v-173q0-14.45-9.49-24.22Q384.02-600 370-600H266q-14.02 0-23.51 9.78Q233-580.45 233-566v70q0 14.02 9.49 23.51T266-463h87v53H233zm50-136v-71h70v71zm183 136h50v-90l84 90h66L554-480l112-120h-66l-84 90v-90h-50zm210-40h40v-63h64v-33h-64v-64h-40v64h-63v33h63zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default Material9kPlus;