import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilePresent: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18zm0-60h520v-494H554v-186H220zm260.26-80q58.74 0 99.24-41.13Q620-302.25 620-360v-140h-40v140q0 42-28.75 71T480-260q-42 0-71-29t-29-71v-220q0-18 11.5-29t28.5-11q18 0 29 11t11 29v200h40v-200q0-33.6-23.08-56.8-23.07-23.2-56.5-23.2-33.42 0-56.92 23.2T340-580v220q0 57.75 41.2 98.87Q422.41-220 480.26-220M220-820v186zv680z" /></svg>;
export default MaterialFilePresent;