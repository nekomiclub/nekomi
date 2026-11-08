import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBuildFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M705-128 447-388q-23 8-46 13t-47 5q-97 0-165-67.5T121-602q0-31 8-60.5t23-55.5l145 145 92-86-149-149q26-15 55-23.5t59-8.5q99 0 168.5 69.5T592-602q0 24-5 47t-13 46l259 258q11 11 11 26.5T833-198l-76 70q-11 11-26 11t-26-11" /></svg>;
export default MaterialBuildFill;