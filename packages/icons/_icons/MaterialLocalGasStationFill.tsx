import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalGasStationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-120v-660q0-24 18-42t42-18h269q24 0 42 18t18 42v288h65q20.63 0 35.31 14.69Q664-462.63 664-442v219q0 21.68 15.5 36.34T717-172t37.5-14.66T770-223v-295q-11 6-23 9t-24 3q-39.48 0-66.74-27.26T629-600q0-31.61 18-56.81Q665-682 695-690l-95-95 36-35 153 153q14 14 22.5 30.5T820-600v377q0 43.26-29.82 73.13-29.81 29.87-73 29.87Q674-120 644-149.87T614-223v-219h-65v322zm60-432h269v-228H220zm503-4q18 0 31-13t13-31-13-31-31-13-31 13-13 31 13 31 31 13" /></svg>;
export default MaterialLocalGasStationFill;