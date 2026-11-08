import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEvShadowMinusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480q0 16-1.5 31.5T875-418q-30-25-66.5-38.5T730-470q-96 0-163 66.5T500-241q0 45 15.5 83.5T558-88q-19 4-38.5 6T480-80M140-480q0 140 97 238.5T474-140h1q-86-54-138-142.5T285-480t52.5-197.5T476-820q-140 2-238 100.5T140-480m440 270v-60h300v60z" /></svg>;
export default MaterialEvShadowMinusFill;