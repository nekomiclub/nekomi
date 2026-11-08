import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvGen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M170-120v-80h-30q-24.75 0-42.37-17.63Q80-235.25 80-260v-480q0-24.75 17.63-42.38Q115.25-800 140-800h680q24.75 0 42.38 17.62Q880-764.75 880-740v480q0 24.75-17.62 42.37Q844.75-200 820-200h-30v80h-23l-26-80H220l-27 80zm-30-140h680v-480H140zm340-240" /></svg>;
export default MaterialTvGen;