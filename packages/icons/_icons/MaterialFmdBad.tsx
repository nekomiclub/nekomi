import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFmdBad: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-520h60v-200h-60zm30 140q12 0 21-9t9-21-9-21-21-9-21 9-9 21 9 21 21 9m0 221q133-121 196.5-219.5T740-552q0-118-75.5-193T480-820t-184.5 75T220-552q0 75 65 173.5T480-159m0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480" /></svg>;
export default MaterialFmdBad;