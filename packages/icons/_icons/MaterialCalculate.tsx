import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCalculate: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M314-228h50v-88h88v-50h-88v-88h-50v88h-88v50h88zm215-35h201v-49H529zm0-107h201v-50H529zm37-163 61-61 61 61 36-36-61-61 61-61-36-36-61 61-61-61-36 36 61 61-61 61zm-325-72h196v-50H241zm-61 485q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600z" /></svg>;
export default MaterialCalculate;