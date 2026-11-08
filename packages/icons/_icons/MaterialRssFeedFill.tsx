import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRssFeedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M142-142.04q-22-22.05-22-53Q120-226 142.04-248q22.05-22 53-22Q226-270 248-247.96q22 22.05 22 53Q270-164 247.96-142q-22.05 22-53 22Q164-120 142-142.04M710-120q0-123-46-229.5T537-537 349.42-664Q242.85-710 120-710v-90q142 0 265 53t216 146 146 216 53 265zm-258 0q0-70-25.8-131.48T355-360q-45-47-105.03-73.5Q189.95-460 120-460v-90q89 0 165.5 33.5t133.64 92.42q57.15 58.93 90 137Q542-209 542-120z" /></svg>;
export default MaterialRssFeedFill;