import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElectricBolt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m286-79 171-307-337-40 495-455h59L503-574l337 40L345-79zm167-187 252-223-297-36 99-169-253 224 297 35zm27-214" /></svg>;
export default MaterialElectricBolt;