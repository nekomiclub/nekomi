import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTooltip: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 376-237H140q-24.75 0-42.37-17.63Q80-272.25 80-297v-523q0-24.75 17.63-42.38Q115.25-880 140-880h680q24.75 0 42.38 17.62Q880-844.75 880-820v523q0 24.75-17.62 42.37Q844.75-237 820-237H584zm0-108 72-109h268v-523H140v523h268zm0-371" /></svg>;
export default MaterialTooltip;