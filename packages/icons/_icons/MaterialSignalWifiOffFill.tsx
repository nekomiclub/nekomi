import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalWifiOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M703-343 277-768q49-16 99.5-24t103.5-8q137 0 259 53t221 147zM837-37 617-257 480-120 0-600q36-35 75.5-64t82.5-52L37-837l43-43L880-80z" /></svg>;
export default MaterialSignalWifiOffFill;