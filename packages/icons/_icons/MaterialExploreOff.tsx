import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExploreOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m656-656-63 203-140-140zM813-61l-95-95q-50 36-110 56T480-80q-85 0-158-30.5T195-195t-84.5-127T80-480q0-68 20-128t56-110l-95-95 43-43 752 752zm-9-181-43-43q28-42 43.5-91T820-480q0-145-97.5-242.5T480-820q-55 0-104 15.5T285-761l-43-43q50-36 110-56t128-20q84 0 157 31t127 85 85 127 31 157q0 68-20 128t-56 110M480-140q55 0 104-15.5t91-43.5L508-366l-205 63 63-205-167-167q-28 42-43.5 91T140-480q0 145 97.5 242.5T480-140" /></svg>;
export default MaterialExploreOff;