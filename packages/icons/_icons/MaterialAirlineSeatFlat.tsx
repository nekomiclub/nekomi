import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatFlat: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-400v-280h368q63 0 107 44t44 107v129zm60-220v160zM80-280v-60h800v60zm35-155q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35m127.5-42.5Q260-495 260-520t-17.5-42.5T200-580t-42.5 17.5T140-520t17.5 42.5T200-460t42.5-17.5M420-460h399v-69q0-37.54-26.73-64.27T728-620H420zm-220-60" /></svg>;
export default MaterialAirlineSeatFlat;