import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNewsmode: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h680q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h680v-600H140zm109-106h462v-60H249zm0-166h155v-222H249zm259 0h203v-60H508zm0-162h203v-60H508zM140-180v-600z" /></svg>;
export default MaterialNewsmode;