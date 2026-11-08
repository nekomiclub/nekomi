import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHideSource: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m813-61-95-95q-50 36-110 56T480-80q-85 0-158-30.5T195-195t-84.5-127T80-480q0-68 20-128t56-110l-95-95 43-43 752 752zm-333-79q55 0 104-15.5t91-43.5L199-675q-28 42-43.5 91T140-480q0 145 97.5 242.5T480-140m324-102-43-43q28-42 43.5-91T820-480q0-145-97.5-242.5T480-820q-55 0-104 15.5T285-761l-43-43q50-36 110-56t128-20q84 0 157 31t127 85 85 127 31 157q0 68-20 128t-56 110M437-437" /></svg>;
export default MaterialHideSource;