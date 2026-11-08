import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTextureMinusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M161-120q-18-8-26-17.5T120-165l678-675q15 5 26.5 16.5T840-796zm237 0 122-122v122zm182-60v-60h300v60zM120-398v-86l356-356h86zm458 98 262-262v86L664-300zM120-718v-62q0-24 18-42t42-18h62z" /></svg>;
export default MaterialTextureMinusFill;