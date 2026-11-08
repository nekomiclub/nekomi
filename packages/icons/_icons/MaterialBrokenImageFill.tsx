import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrokenImageFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-272l103 103 172-172 170 170 171-171 104 104v238q0 24-18 42t-42 18zm0-720h600q24 0 42 18t18 42v277L736-607 565-436 395-606 223-434 120-537v-243q0-24 18-42t42-18" /></svg>;
export default MaterialBrokenImageFill;