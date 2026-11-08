import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirlineSeatFlatFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-400v-280h368q63 0 107 44t44 107v129zM80-280v-60h800v60zm35-155q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35" /></svg>;
export default MaterialAirlineSeatFlatFill;