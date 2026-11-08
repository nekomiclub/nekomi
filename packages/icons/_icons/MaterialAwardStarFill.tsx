import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAwardStarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m363-310 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90zM481-29 346-160H160v-186L26-480l134-134v-186h186l135-134 133 134h186v186l134 134-134 134v186H614z" /></svg>;
export default MaterialAwardStarFill;