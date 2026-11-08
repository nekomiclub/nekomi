import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElectricMeterFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-80v-102q-106-37-173-129.5T120-522q0-75 28.5-140.5t77-114 114-77T479-882t140 28.5 115 77 77.5 114T840-522q0 118-67.5 209.5T600-183v103h-60v-87q-15 2-30 3.5t-31 1.5q-15 0-30-1.5t-29-3.5v87zm-40-530h320v-60H320zm123 323 113-113-50-50 57-57-46-46-113 113 50 50-57 57z" /></svg>;
export default MaterialElectricMeterFill;