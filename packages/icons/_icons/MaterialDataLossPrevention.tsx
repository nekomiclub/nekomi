import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDataLossPrevention: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M430.09-580q28.91 0 49.41-20.59t20.5-49.5-20.59-49.41-49.5-20.5-49.41 20.59-20.5 49.5 20.59 49.41 49.5 20.5m.41 160q38.5 0 74.71-15.88Q541.42-451.75 568-481q-32-20-67-29.5t-71-9.5-71 9.5-67 29.5q28 29 64 45t74.5 16M838-120 627-331q-40 32-91.5 51.5T430.06-260Q301-260 210.5-350.5T120-570t90.5-219.5T430-880t219.5 90.5T740-569.94q0 53.94-19.5 105.44T669-373l211 211zM430.5-320Q534-320 607-393.5t73-177T607.08-747Q534.17-820 430-820q-103 0-176.5 72.92Q180-674.17 180-570q0 103 73.5 176.5t177 73.5m-.5-250" /></svg>;
export default MaterialDataLossPrevention;