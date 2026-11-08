import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardwareFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-477v-163H160q0-83 58.5-141.5T360-840h240v142l140-142h60v344h-60L600-638v161zm34 357q-16 0-25-13.5t-9-30.5v-253h240v253q0 18-13 31t-31 13z" /></svg>;
export default MaterialHardwareFill;