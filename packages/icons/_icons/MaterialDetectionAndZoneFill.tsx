import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDetectionAndZoneFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-688v-132q0-24 18-42t42-18h132v60H140v132zM272-80H140q-24 0-42-18t-18-42v-132h60v132h132zm416 0v-60h132v-132h60v132q0 24-18 42t-42 18zm132-608v-132H688v-60h132q24 0 42 18t18 42v132zm-331.5 72.58q-21.5-21.42-21.5-51.5t21.42-51.58 51.5-21.5 51.58 21.42 21.5 51.5-21.42 51.58-51.5 21.5-51.58-21.42M500-235H357l46-235-100 47v134h-60v-175l164-69q32-14 45.5-17.5t27.1-3.5q20.4 0 35.9 8.5T542-520l42 67q26 42 71 73t105 31v60q-67 0-119.5-31T543-413z" /></svg>;
export default MaterialDetectionAndZoneFill;