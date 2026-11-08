import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPanoramaPhotosphereFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M263.5-143.5Q168-207 120-308q-11-5-20-9t-18-9q-20-11-31-29t-11-41v-168q0-23 11-41t31-29q9-5 18-9t20-9q48-101 143.5-164.5T480-880t216.5 63.5T840-652q11 5 20 9t18 9q20 11 31 29.5t11 40.5v168q0 22-11 40.5T878-326q-9 5-18 9t-20 9q-48 101-143.5 164.5T480-80t-216.5-63.5M481-140q79 0 151-38t120-105q-63 19-135 30t-136 11q-65 0-138-11t-136-30q52 68 125 105.5T481-140m0-681q-76 0-149 37.5T207-678q63-19 136-30t138-11q64 0 136 11t135 30q-48-67-120-105t-151-38" /></svg>;
export default MaterialPanoramaPhotosphereFill;