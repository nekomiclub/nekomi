import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHallway: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h141l160.5-160L642-800h138q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h600v-600H180zm55-99h492L579-438 447-264l-93-129zm153-561h186l-93-93zM180-140v-600z" /></svg>;
export default MaterialHallway;