import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed075: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M200-277v-60h60v60zm370 0v-60h170v-115H570v-231h230v60H630v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18zm-227-1 92-345H265v-60h170q24 0 42 16t18 40q0 3-2 13l-90 336z" /></svg>;
export default MaterialSpeed075;