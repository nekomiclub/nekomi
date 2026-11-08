import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToolsLevelFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-280q-24.75 0-42.37-17.63Q80-315.25 80-340v-280q0-24.75 17.63-42.38Q115.25-680 140-680h680q24.75 0 42.38 17.62Q880-644.75 880-620v280q0 24.75-17.62 42.37Q844.75-280 820-280zm240-180h70v-160h-70q-32 0-56 24t-24 56 24 56 56 24m130 0h70q32 0 56-24t24-56-24-56-56-24h-70z" /></svg>;
export default MaterialToolsLevelFill;