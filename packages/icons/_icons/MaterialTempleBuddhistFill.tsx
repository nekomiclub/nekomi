import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTempleBuddhistFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m316-700 164-220 164 220zm-76 160v-74q-50-12-83.5-48.5T120-749h61q3 33 28.5 56t59.5 23h422q34 0 59.5-23t28.5-56h61q-3 50-36 86.5T720-614v74zM160-80v-374q-50-12-83.5-48.5T40-589h61q3 33 28.5 56t59.5 23h582q34 0 59.5-23t28.5-56h61q-3 50-36 86.5T800-454v374H530v-160q0-21-14.5-35.5T480-290t-35.5 14.5T430-240v160z" /></svg>;
export default MaterialTempleBuddhistFill;