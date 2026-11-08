import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabMove: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-182h60v182h600v-543H180v181h-60v-238q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm280-166-42-42 93-94H120v-60h391l-93-94 42-42 166 166z" /></svg>;
export default MaterialTabMove;