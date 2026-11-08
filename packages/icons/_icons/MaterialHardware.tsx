import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardware: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M394-120q-16 0-25-13.5t-9-30.5v-476H160q0-83 58.5-141.5T360-840h240v142l140-142h60v344h-60L600-638v474q0 18-13 31t-31 13zm26-60h120v-237H420zm0-297h120v-303H360q-39 0-75 22t-51 58h186zm60-3" /></svg>;
export default MaterialHardware;