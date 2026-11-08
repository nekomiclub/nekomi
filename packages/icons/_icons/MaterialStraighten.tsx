import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStraighten: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-240q-24 0-42-18t-18-42v-360q0-23 18-41.5t42-18.5h680q24 0 42 18.5t18 41.5v360q0 24-18 42t-42 18zm0-60h680v-360H690v180h-60v-180H510v180h-60v-180H330v180h-60v-180H140zm130-180h60zm180 0h60zm180 0h60zm-150 0" /></svg>;
export default MaterialStraighten;