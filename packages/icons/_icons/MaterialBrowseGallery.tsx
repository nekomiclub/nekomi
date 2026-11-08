import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrowseGallery: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m472-326 42-42-124-123.9V-670h-60v202zm255 182v-68q79-37 126-109t47-159.5-47-160T727-749v-68q104 42 168.5 133.03 64.5 91.04 64.5 203Q960-369 896-277.5T727-144m-507.5-5.5q-65.5-28.5-114-77t-77-114T0-481t28.5-140.5 77-114 114-77T360-841t140.5 28.5 114 77 77 114T720-481t-28.5 140.5-77 114-114 77T360-121t-140.5-28.5M360-181q124 0 212-87.32T660-481q0-124-88-212t-212-88q-125.36 0-212.68 88T60-481q0 125.36 87.32 212.68T360-181m0-300" /></svg>;
export default MaterialBrowseGallery;