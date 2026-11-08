import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocationChip: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-320q4 0 13-8l3-6q16-32 44-55t48-52q11-17 16.5-35.5T610-515q0-53-38-89t-92-36-92.5 36-38.5 89q0 20 6 38.5t17 35.5q20 29 47.5 52t43.5 55l3 6q1 2 14 8m-35.5-154.5Q430-489 430-510t14.5-35.5T480-560t35.5 14.5T530-510t-14.5 35.5T480-460t-35.5-14.5M320-200q-117 0-198.5-81.5T40-480t81.5-198.5T320-760h320q117 0 198.5 81.5T920-480t-81.5 198.5T640-200zm0-60h320q92 0 156-64t64-156-64-156-156-64H320q-92 0-156 64t-64 156 64 156 156 64m160-220" /></svg>;
export default MaterialLocationChip;