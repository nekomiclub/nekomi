import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardDiskFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm100-164h320v-60H320zm160-164q64 0 109.5-45T635-562q0-65-45-110.5T480-718t-110 45.5T325-562t45 109.5T480-408m0-99q-23 0-39-16t-16-39 16-39 39-16 39 16 16 39-16 39-39 16" /></svg>;
export default MaterialHardDiskFill;