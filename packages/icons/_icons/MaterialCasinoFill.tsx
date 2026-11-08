import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCasinoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M335.5-264.62q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62m0-360q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62m180 180q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62m180 180q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62m0-360q14.5-14.62 14.5-35.5t-14.62-35.38-35.5-14.5-35.38 14.62-14.5 35.5 14.62 35.38 35.5 14.5 35.38-14.62M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialCasinoFill;