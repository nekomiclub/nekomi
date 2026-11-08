import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSiren: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-180h680v-105H140zm187-259h60v-123q0-38.78 27-66.39T480-656v-60q-64 0-108.5 45.24Q327-625.53 327-562zm-64 94h434v-217.5q0-90.26-63-153.88T480-780t-154 63.62-63 153.88zM140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-105q0-24.75 17.63-42.38Q115.25-345 140-345h63v-217q0-115 81-196.5T480-840t196 81.5T757-562v217h63q24.75 0 42.38 17.62Q880-309.75 880-285v105q0 24.75-17.62 42.37Q844.75-120 820-120zm340-225" /></svg>;
export default MaterialSiren;