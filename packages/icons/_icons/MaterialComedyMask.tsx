import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialComedyMask: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-285q61.46 0 105.23-41T633-428H326q5 61 48.77 102T480-285M285-603h142q0-29-20.8-50-20.79-21-50-21-29.2 0-50.2 20.86-21 20.85-21 50.14m247 0h143q0-29-20.86-50-20.85-21-50.14-21-29.7 0-50.85 20.86Q532-632.29 532-603M480-80q-75 0-140.5-28.5t-114-77-77-114T120-439v-441h720v441q0 74-28.5 139.5t-77 114-114 77T480-80m0-60q125 0 212.5-87T780-439v-381H180v381q0 125 87.5 212T480-140m0-340" /></svg>;
export default MaterialComedyMask;