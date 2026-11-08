import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPieChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M510-510v-309q123 8 210.5 97.5T819-510zm-60 369q-131-11-220.5-109T140-480t89.5-230T450-819zm60 0v-309h309q-11 122-98.5 211.5T510-141" /></svg>;
export default MaterialPieChartFill;