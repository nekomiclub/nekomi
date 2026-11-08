import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSatellite: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M234-280h490L577-476 445-305l-93-127zm6-218q93 0 157.5-64.75T462-720h-54q0 70-48.84 119-48.83 49-119.16 49zm0-131q39 0 67-26.69T335-720h-95zm-60 509q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0 0v-600z" /></svg>;
export default MaterialSatellite;