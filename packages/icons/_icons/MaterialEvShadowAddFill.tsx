import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEvShadowAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-90v-120H580v-60h120v-120h60v120h120v60H760v120zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480q0 16-1.5 31.5T875-418q-30-25-66.46-38.5Q772.07-470 730-470q-96 0-163 66.5T500-241q0 44.63 15.5 83.32Q531-119 558-88q-19.5 4-39 6t-39 2M140-480.5q0 140.5 97 239T473.81-140H475q-86-54-138-142.5T285-480t52.5-197.5T476-820q-140 2-238 100.5t-98 239" /></svg>;
export default MaterialEvShadowAddFill;