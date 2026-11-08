import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEmergencyHomeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M458-75.5Q447-80 438-88L88-438q-8-9-12.5-20T71-480t4.5-22.5T88-522l350-350q9-9 20-13t22-4 22.5 4 19.5 13l350 350q9 8 13 19.5t4 22.5-4 22-13 20L522-88q-8 8-19.5 12.5T480-71t-22-4.5M450-440h60v-240h-60zm51 101q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9" /></svg>;
export default MaterialEmergencyHomeFill;