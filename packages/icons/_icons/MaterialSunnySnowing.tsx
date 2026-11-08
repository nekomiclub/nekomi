import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSunnySnowing: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-420v-60h160v60zm221-207L148-740l42-42 113 113zm-49.5 410.36q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64M290-420v-30q0-78.85 55.61-134.42Q401.21-640 480.11-640q78.89 0 134.39 55.58Q670-528.85 670-450v30h-60v-30q0-54.17-37.88-92.08-37.88-37.92-92-37.92T388-542.08q-38 37.91-38 92.08v30zm41.5 368.36Q320-63.28 320-80.14t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64m120-165q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64M450-730v-160h60v160zM571.5-51.64Q560-63.28 560-80.14t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64M698-626l-42-42 114-114 42 42zm-6.5 409.36q-11.5-11.64-11.5-28.5t11.64-28.36 28.5-11.5 28.36 11.64 11.5 28.5-11.64 28.36-28.5 11.5-28.36-11.64M760-420v-60h160v60zm-280 0" /></svg>;
export default MaterialSunnySnowing;