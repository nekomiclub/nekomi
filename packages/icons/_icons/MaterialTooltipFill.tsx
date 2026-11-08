import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTooltipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 376-237H140q-25 0-42.5-17.5T80-297v-523q0-25 17.5-42.5T140-880h680q25 0 42.5 17.5T880-820v523q0 25-17.5 42.5T820-237H584z" /></svg>;
export default MaterialTooltipFill;