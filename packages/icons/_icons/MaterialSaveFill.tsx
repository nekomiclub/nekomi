import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSaveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M840-683v503q0 24-18 42t-42 18H180q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h503zM553.5-275.5Q584-306 584-349t-30.5-73.5T480-453t-73.5 30.5T376-349t30.5 73.5T480-245t73.5-30.5M233-584h358v-143H233z" /></svg>;
export default MaterialSaveFill;