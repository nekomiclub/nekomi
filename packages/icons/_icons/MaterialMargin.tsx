import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMargin: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm0-600v600zm162 162q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m138 11q17 0 28.5-11.21T520-646t-11.5-27.79T480-685q-16 0-27 11.5T442-646t10.92 27.5Q463.85-607 480-607m195-11q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m0 166q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m-195 11q17 0 28.5-11.21T520-480t-11.5-27.79T480-519q-16 0-27 11.5T442-480t10.92 27.5Q463.85-441 480-441m-138-11q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11" /></svg>;
export default MaterialMargin;