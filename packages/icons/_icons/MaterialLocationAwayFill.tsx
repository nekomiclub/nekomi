import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationAwayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M400-120v-76q0-21 10.5-39.5T439-265q46-27 96.5-41T640-320t104.5 14 96.5 41q18 11 28.5 29.5T880-196v76zm-320 0v-480l320-240 240 180q-74 0-127 52.5T460-480q0 35 12 65.5t34 54.5q-26 8-50.5 18.5T408-317q-32 18-50 51t-18 70v76zm475-275q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35" /></svg>;
export default MaterialLocationAwayFill;