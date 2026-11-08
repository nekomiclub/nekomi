import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCleaningFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m373-680 45-105v-35h-58v-60h245q16 0 25.5 9.5T640-845v40l-40 80H493v-45l-85 90zM320-80v-263q0-18 3.5-30t12.5-29l157-283h107q23 20 31.5 45t8.5 55v505z" /></svg>;
export default MaterialCleaningFill;