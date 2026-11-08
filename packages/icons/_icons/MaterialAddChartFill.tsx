import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M284-277h60v-275h-60zm166 0h60v-406h-60zm166 0h60v-148h-60zm77-328v-87h-88v-60h88v-88h60v88h87v60h-87v87zM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h395v205q0 24.75 17.63 42.37Q610.25-575 635-575h205v395q0 24-18 42t-42 18z" /></svg>;
export default MaterialAddChartFill;