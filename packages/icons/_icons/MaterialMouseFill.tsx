import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMouseFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80q-117 0-198.5-81.5T200-360v-200h560v200q0 117-81.5 198.5T480-80M200-620q0-108 71.5-187.5T450-898v278zm310 0v-278q107 11 178.5 90.5T760-620z" /></svg>;
export default MaterialMouseFill;