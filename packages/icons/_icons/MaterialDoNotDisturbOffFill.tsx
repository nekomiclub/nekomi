import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoNotDisturbOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-95-95q-50 36-110 56T480-80q-85 0-158-30.5T195-195t-84.5-127T80-480q0-68 20-128t56-110l-95-95 43-43 752 752zM280-453h141l-60-60h-81zm524 211L593-453h87v-60H533L242-804q50-36 110-56t128-20q84 0 157 31t127 85 85 127 31 157q0 68-20 128t-56 110" /></svg>;
export default MaterialDoNotDisturbOffFill;