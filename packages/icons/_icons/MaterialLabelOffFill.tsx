import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLabelOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M747-300 247-800h364q14 0 27 6.5t21 17.5l222 296zM867 18 660-184q-8 11-21 17.5t-27 6.5H140q-25 0-42.5-17.5T80-220v-520q0-7 1.5-13t3.5-11l-99-99 43-42L910-24z" /></svg>;
export default MaterialLabelOffFill;