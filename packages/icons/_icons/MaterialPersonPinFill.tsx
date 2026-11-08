import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPersonPinFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-40 359-161H180q-24 0-42-18t-18-42v-600q0-25 18-42.5t42-17.5h600q24 0 42 17.5t18 42.5v600q0 24-18 42t-42 18H601zm100-442q40-40 40-98t-40-98-98-40-98 40-40 98 40 98 98 40 98-40M180-221h600v-37q-60-56-136-90.5T480-383t-164 34.5T180-258z" /></svg>;
export default MaterialPersonPinFill;