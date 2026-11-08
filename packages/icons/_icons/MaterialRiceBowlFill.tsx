import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRiceBowlFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-80v-70q-105-42-172.5-130T80-480q0-83 31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480q0 112-67.5 200T640-150v70zm70-399h180v-329q-22.33-6-44.67-9-22.33-3-45.08-3t-45.5 3-44.75 9zm-250 0h190v-306q-88 43-139 125.5T140-479m490 0h190q0-98-51-180.5T630-785z" /></svg>;
export default MaterialRiceBowlFill;