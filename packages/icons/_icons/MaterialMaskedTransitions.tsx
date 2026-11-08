import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMaskedTransitions: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M162.5-162.5Q80-245 80-360t82.5-197.5T360-640t197.5 82.5T640-360t-82.5 197.5T360-80t-197.5-82.5m353-42Q580-269 580-360t-64.5-155.5T360-580t-155.5 64.5T140-360t64.5 155.5T360-140t155.5-64.5M668-328q1-7 1.5-15.5t.5-16.5q0-127-91.5-218.5T360-670q-8 0-16 .5t-15 1.5q22-90 98-151t173-61q115 0 197.5 82.5T880-600q0 97-60.5 172.5T668-328" /></svg>;
export default MaterialMaskedTransitions;