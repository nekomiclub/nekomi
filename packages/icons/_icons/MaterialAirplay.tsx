import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAirplay: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m273-120 207-206 206 206zM80-260v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24.75-17.62 42.37Q844.75-200 820-200H700v-60h120v-520H140v520h119v60H140q-24.75 0-42.37-17.63Q80-235.25 80-260m400-230" /></svg>;
export default MaterialAirplay;