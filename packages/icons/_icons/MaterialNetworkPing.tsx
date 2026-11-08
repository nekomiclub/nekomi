import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNetworkPing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-240v-60h284L84-660l42-42 353 353 234-233q-6-11-9.5-23.5T700-630q0-38 26-64t64-26 64 26 26 64-26 64-64 26q-8 0-14.5-1t-14.5-4L516-300h284v60z" /></svg>;
export default MaterialNetworkPing;