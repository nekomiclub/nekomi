import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRoundaboutRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M290-120v-242q-91-11-150.5-79T80-600q0-100 70-170t170-70q91 0 159 59.5T558-630h208l-90-90 42-42 162 162-162 162-42-42 90-90H559q-23 0-40.5-13.5T499-619q-8-69-59-115t-120-46q-75 0-127.5 52.5T140-600q0 69 45.5 119.5T300-422q22 3 36 20t14 40v242z" /></svg>;
export default MaterialRoundaboutRight;