import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStarShineFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M852-226 746-332l42-42 106 106zM708-706l-42-42 106-106 42 42zm-456 0L146-812l42-42 106 106zM108-226l-42-42 106-106 42 42zm125 106 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149z" /></svg>;
export default MaterialStarShineFill;