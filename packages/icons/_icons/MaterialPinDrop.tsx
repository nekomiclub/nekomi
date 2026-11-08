import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPinDrop: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-276q109-83 164.5-169.5T700-600q0-97-61.5-158.5T480-820t-158.5 61.5T260-600q0 67 55.5 153.5T480-276m0 76Q338-303 269-406t-69-194q0-123 78.5-201.5T480-880t201.5 78.5T760-600q0 91-69 194T480-200m-1-320q34 0 57.5-23.5T560-600t-23.5-56.5T479-680q-33 0-56 23.5T400-600t23 56.5 56 23.5M200-80v-60h560v60zm280-520" /></svg>;
export default MaterialPinDrop;