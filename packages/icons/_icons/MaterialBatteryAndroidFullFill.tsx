import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryAndroidFullFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M130-240q-37.5 0-63.75-26.25T40-330v-300q0-37.5 26.25-63.75T130-720h620q37.5 0 63.75 26.25T840-630v300q0 37.5-26.25 63.75T750-240zm740-147v-186h20q12 0 21 9t9 21v126q0 12-9 21t-21 9z" /></svg>;
export default MaterialBatteryAndroidFullFill;