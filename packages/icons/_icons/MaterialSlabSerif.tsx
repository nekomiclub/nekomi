import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSlabSerif: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M230-240h196v-60h-85l36-95h199l37 95h-84v60h201v-60h-41.19L522-720h-84L272-300h-42zm170-215 71-185h10l72 185zM140-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h680q24 0 42 18t18 42v680q0 24-18 42t-42 18zm0-60h680v-680H140zm0 0v-680z" /></svg>;
export default MaterialSlabSerif;