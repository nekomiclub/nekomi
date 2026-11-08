import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHeartBrokenFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M481-84Q346-220 266.5-303t-121-137.5T92-534t-12-86q0-92 64-156t156-64q45 0 87 16.5t75 47.5l-62 216h121l-46 383 127-423H480l71-212q25-14 52.5-21t56.5-7q92 0 156 64t64 156q0 46-11.5 84.5T816-442 696-304 481-84" /></svg>;
export default MaterialHeartBrokenFill;