import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRestAreaFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M202-80v-80h-82v-60h224v60h-82v80zm248 0v-240H281v-60h398v60H510v240zm248 0v-80h-83v-60h225v60h-82v80zM140-320q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18h-41v-60h41v-86L605-645 440-480 304-605 140-466v86h41v60z" /></svg>;
export default MaterialRestAreaFill;