import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSports: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-200q-101 0-170.5-69.5T200-440q0-11 1-23t3-21q-5 2-12 3t-12 1q-44 0-72-28t-28-72 28-72 72-28q31 0 57 18.5t37 46.5q31-28 74.5-46.5T441-680h439v120H680v120q0 101-69.5 170.5T440-200M209-551q11-11 11-29t-11-29-29-11-29 11-11 29 11 29 29 11 29-11m331 211q40-40 40-100t-40-100-100-40-100 40-40 100 40 100 100 40 100-40m-43.5-43.5Q520-407 520-440t-23.5-56.5T440-520t-56.5 23.5T360-440t23.5 56.5T440-360t56.5-23.5M440-440" /></svg>;
export default MaterialSports;