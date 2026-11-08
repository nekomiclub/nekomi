import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChessKnightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M201-79v-161q0-17 9-31t24-22l217-108v-97l-161 79q-11 5-23 8t-24 3q-29 0-55-15t-40-43q-13-26-11.5-54t17.5-51l133-197-76-113h229q134 0 227.5 93T761-562v483z" /></svg>;
export default MaterialChessKnightFill;