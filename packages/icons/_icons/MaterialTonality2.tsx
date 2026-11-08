import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTonality2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M324-111.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M510-819v678q132-14 221-110.5T820-480t-89-228-221-111m-60 47v-47q-38 4-74 16t-70 31zm0 131v-71H231q-14 17-27.5 34T179-641zm0 131v-71H156q-8 17-10 35t-3 36zm0 131v-71H143q1 18 3 36t10 35zm0 131v-71H179q10 20 24 37l28 34zm0 107v-47H306q34 19 70 31.5t74 15.5m60-339" /></svg>;
export default MaterialTonality2;