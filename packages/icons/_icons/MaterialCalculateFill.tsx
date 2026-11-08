import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalculateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88zm215-35h201v-49H529zm0-107h201v-50H529zM241-605h196v-50H241zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm386-413 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61z" /></svg>;
export default MaterialCalculateFill;