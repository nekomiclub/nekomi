import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTimer5Shutter: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-200v-80h261v-160H330v-320h341v80H410v160h181q33.33 0 56.67 23.33Q671-473.33 671-440v160q0 33.33-23.33 56.67Q624.33-200 591-200z" /></svg>;
export default MaterialTimer5Shutter;