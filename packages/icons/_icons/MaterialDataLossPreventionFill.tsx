import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDataLossPreventionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430-580q29 0 49.5-20.5T500-650t-20.5-49.5T430-720t-49.5 20.5T360-650t20.5 49.5T430-580m0 160q39 0 75-16t63-45q-32-20-67-29.5t-71-9.5-71 9.5-67 29.5q28 29 64 45t74 16m408 300L627-331q-40 32-91.5 51.5T430-260q-129 0-219.5-90.5T120-570t90.5-219.5T430-880t219.5 90.5T740-570q0 54-19.5 105.5T669-373l211 211z" /></svg>;
export default MaterialDataLossPreventionFill;