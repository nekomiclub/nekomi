import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTramFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-260v-394q0-90 70.5-119T449-804l32-66H280v-50h400v50H541l-30 66q126 2 207.5 30.5T800-654v394q0 59-40.5 99.5T660-120l60 60v20h-70l-80-80H390l-80 80h-70v-20l60-60q-59 0-99.5-40.5T160-260m362 0q16-16 16-39t-16-39-39-16-39 16-16 39 16 39 39 16 39-16M220-474h519v-155H220z" /></svg>;
export default MaterialTramFill;