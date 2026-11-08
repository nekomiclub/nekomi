import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridOn: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620zM180-400h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620zM180-620h160v-160H180zm220 0h160v-160H400zm220 0h160v-160H620z" /></svg>;
export default MaterialGridOn;