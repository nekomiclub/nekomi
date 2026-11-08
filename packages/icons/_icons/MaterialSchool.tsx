import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSchool: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479-120 189-279v-240L40-600l439-240 441 240v317h-60v-282l-91 46v240zm0-308 315-172-315-169-313 169zm0 240 230-127v-168L479-360 249-485v170zm0-166" /></svg>;
export default MaterialSchool;