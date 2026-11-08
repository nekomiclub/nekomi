import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTexture: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M161-120q-18-8-26-17.5T120-165l678-675q15 5 26.5 16.5T840-796zm-41-278v-86l356-356h86zm0-320v-62q0-24 18-42t42-18h62zm598 598 122-122v62q0 24-18 42t-42 18zm-320 0 442-442v86L484-120z" /></svg>;
export default MaterialTexture;