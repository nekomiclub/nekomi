import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChurchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-309l165-73v-131l205-105v-82h-80v-60h80v-80h60v80h80v60h-80v82l205 105v131l165 73v309H560v-130q0-32-24-56t-56-24-56 24-24 56v130zm439-361q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16" /></svg>;
export default MaterialChurchFill;