import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialToysFanFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-480q0-91 64.5-155.5T700-700t155.5 64.5T920-480zM104.5-324.5Q40-389 40-480h440q0 91-64.5 155.5T260-260t-155.5-64.5M480-480q-91 0-155.5-64.5T260-700t64.5-155.5T480-920zm0 440v-440q91 0 155.5 64.5T700-260t-64.5 155.5T480-40" /></svg>;
export default MaterialToysFanFill;