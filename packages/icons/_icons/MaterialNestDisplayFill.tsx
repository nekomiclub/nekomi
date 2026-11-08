import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestDisplayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-200q-99 0-169.5-13.5T240-246v-34h-95q-26 0-44-19.5T85-345l31-360q2-23 19-39t40-16h610q23 0 40 16t19 39l31 360q2 26-16 45.5T815-280h-95v34q0 19-70.5 32.5T480-200" /></svg>;
export default MaterialNestDisplayFill;