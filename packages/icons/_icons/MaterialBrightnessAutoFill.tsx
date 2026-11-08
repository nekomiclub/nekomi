import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBrightnessAutoFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M310-305h55l37-109h159l38 109h53L505-697h-48zm107-157 61-163h5l62 163zm64 433L346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614z" /></svg>;
export default MaterialBrightnessAutoFill;