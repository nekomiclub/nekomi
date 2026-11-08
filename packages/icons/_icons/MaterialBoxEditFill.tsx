import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBoxEditFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-529q0-9.88 3-19.06t9-16.94l52-71q8-11 20.94-17.5T232-840h495q14.12 0 27.06 6.5T775-816l53 71q6 7.76 9 16.94t3 19.06v168q-30 0-55 7t-47 29l-98 98v-267H320v342l160-80 109 55-89 89v148zm380 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22-4.5 22.5-13.41 20.5L683-120zm263-224 37-39-37-37-38 38zM197-734h565l-36.41-46H233z" /></svg>;
export default MaterialBoxEditFill;