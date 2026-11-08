import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTouchAppFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M445-80q-29 0-56-12t-45-35L127-403l21-23q14-15 34.5-18.5T221-438l99 53v-365q0-13 8.5-21.5T350-780t21.5 8.5T380-750v230h300q50 0 85 35t35 85v170q0 63-43.5 106.5T650-80zM203-665q-11-19-17-40.5t-6-44.5q0-71 49.5-120.5T350-920t120.5 49.5T520-750q0 23-6 44.5T497-665l-52-30q7-12 11-26t4-29q0-46-32-78t-78-32-78 32-32 78q0 15 4 29t11 26z" /></svg>;
export default MaterialTouchAppFill;