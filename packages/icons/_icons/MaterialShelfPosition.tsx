import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShelfPosition: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-121q-24 0-42-18t-18-42v-599q0-24 18-42t42-18h600q24 0 42 18t18 42v599q0 24-18 42t-42 18zm600-201H180v141h600zm-130-60h130v-398H650zm-470 0h130v-398H180zm190 0h220v-398H370z" /></svg>;
export default MaterialShelfPosition;