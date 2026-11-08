import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBatteryStatusGoodFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m638-127-99-99 42-42 57 56 141-141 42 42zM310-80q-13 0-21.5-8.5T280-110v-676q0-13 8.5-21.5T310-816h90v-64h160v64h90q13 0 21.5 8.5T680-786v333q-8 0-15 .5t-14 1.5q-78 11-130.5 71T468-239q0 46 18.5 87T539-80z" /></svg>;
export default MaterialBatteryStatusGoodFill;