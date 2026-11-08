import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHdrWeakFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M82.5-374.5Q39-418 39-481t43.5-106.5T189-631t106.5 43.5T339-481t-43.5 106.5T189-331 82.5-374.5m429 63Q442-381 442-481t69.5-169.5T681-720t169.5 69.5T920-481t-69.5 169.5T681-242t-169.5-69.5M808-354q52-52 52-127t-52-127-127-52-127 52-52 127 52 127 127 52 127-52" /></svg>;
export default MaterialHdrWeakFill;