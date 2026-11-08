import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEvStationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-552h269v-228H220zm-60 432v-660q0-24 18-42t42-18h269q24 0 42 18t18 42v288h65q20.71 0 35.36 14.64Q664-462.71 664-442v219q0 22 17.5 36.5T722-172t43-14.5 20-36.5v-387h-15q-12.75 0-21.37-8.63Q740-627.25 740-640v-90h20v-50h30v50h40v-50h30v50h20v90q0 12.75-8.62 21.37Q862.75-610 850-610h-15v386.69Q835-180 801-150t-79.18 30q-44.16 0-75.99-30T614-223v-219h-65v322zm177-94 88-140h-53v-105l-87 140h52z" /></svg>;
export default MaterialEvStationFill;