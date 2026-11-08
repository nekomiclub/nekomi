import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMarginFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm162-498q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m138 11q17 0 28.5-11t11.5-28-11.5-28-28.5-11q-16 0-27 11.5T442-646t11 27.5 27 11.5m195-11q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m0 166q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11m-195 11q17 0 28.5-11t11.5-28-11.5-28-28.5-11q-16 0-27 11.5T442-480t11 27.5 27 11.5m-138-11q11-11 11-28t-11-28-28-11-28 11-11 28 11 28 28 11 28-11" /></svg>;
export default MaterialMarginFill;