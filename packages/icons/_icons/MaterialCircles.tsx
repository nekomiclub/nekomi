import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCircles: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M690-390q28-1 55-6t53-13q-15 140-117.5 234.5T438-80q-74 0-139.5-28t-114-76.5-76.5-114T80-438q0-142 95-245.5T412-798q-12 26-16.5 54t-5.5 57q-89 21-147 89.5T185-438q0 106 73.5 179.5T438-185q91 0 161.5-57.5T690-390m-5-530q97.5 0 165.75 68.35 68.25 68.36 68.25 166 0 97.65-68.35 166.15-68.36 68.5-166 68.5-97.65 0-166.15-68.54T450-686q0-97.5 68.54-165.75T685-920m-.5 364q51.5 0 90.5-39t39-90.5-39-90.5-90.5-39-90.5 39-39 90.5 39 90.5 90.5 39M439-437" /></svg>;
export default MaterialCircles;