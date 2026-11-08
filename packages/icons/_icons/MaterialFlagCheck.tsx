import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlagCheck: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-120v-680h284q-5 14-7.5 29.5T472-740H260v251h316l19 85h145v-63q15-1 30.5-3.5T800-478v134H544l-19-85H260v309zm498-516 141-142-28-28-113 114-59-60-28 29zm164.5-222.5Q919-802 919-721t-56.5 137.5T725-527t-137.5-56.5T531-721t56.5-137.5T725-915t137.5 56.5" /></svg>;
export default MaterialFlagCheck;