import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTripFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M714-120v-600h106q24 0 42 18t18 42v480q0 24-18 42t-42 18zM380-720h200v-100H380zm-74 600v-600h14v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h14v600zm-166 0q-24 0-42-18t-18-42v-480q0-24 18-42t42-18h106v600z" /></svg>;
export default MaterialTripFill;