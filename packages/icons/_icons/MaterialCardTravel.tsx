import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardTravel: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-277v97h680v-97zm153-443v-100q0-24 18-42t42-18h253q24 0 42 18t18 42v100h154q24 0 42 18t18 42v480q0 24-18 42t-42 18H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18zM140-385h680v-275H666v75h-60v-75H353v75h-60v-75H140zm213-335h253v-100H353zM140-180v-480 75-75 75-75z" /></svg>;
export default MaterialCardTravel;