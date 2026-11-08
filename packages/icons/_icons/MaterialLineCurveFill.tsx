import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLineCurveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M730-160q0-118.17-45-222.09Q640-486 563-563T382.09-685Q278.17-730 160-730v-60q131 0 245.44 49.61 114.43 49.6 199.89 135.06t135.06 199.89Q790-291 790-160z" /></svg>;
export default MaterialLineCurveFill;