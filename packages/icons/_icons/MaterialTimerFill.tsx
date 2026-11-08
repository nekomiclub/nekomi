import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-860v-60h240v60zm90 447h60v-230h-60zM340.5-109.5Q275-138 226-187t-77.5-114.5T120-441t28.5-139.5T226-695t114.5-77.5T480-801q67 0 125.5 22T710-717l51-51 43 43-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187t-114.5 77.5T480-81t-139.5-28.5" /></svg>;
export default MaterialTimerFill;