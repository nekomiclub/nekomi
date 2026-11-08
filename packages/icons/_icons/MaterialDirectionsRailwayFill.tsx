import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDirectionsRailwayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40zm-20-425h520v-155H220zm299 213.94q16-16.06 16-39T518.94-409t-39-16T441-408.94t-16 39T441.06-331t39 16T519-331.06" /></svg>;
export default MaterialDirectionsRailwayFill;