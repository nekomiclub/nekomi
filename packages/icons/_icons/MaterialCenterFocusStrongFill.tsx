import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCenterFocusStrongFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-172h60v172h172v60zm428 0v-60h172v-172h60v172q0 24-18 42t-42 18zM120-608v-172q0-24 18-42t42-18h172v60H180v172zm660 0v-172H608v-60h172q24 0 42 18t18 42v172zM347.5-347.5Q293-402 293-480t54.5-132.5T480-667t132.5 54.5T667-480t-54.5 132.5T480-293t-132.5-54.5" /></svg>;
export default MaterialCenterFocusStrongFill;