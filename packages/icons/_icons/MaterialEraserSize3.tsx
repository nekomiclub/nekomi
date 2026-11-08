import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEraserSize3: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M335-200q-56 0-95.5-39T200-334q0-26 10-50.5t30-44.5l291-292q20-20 44.5-29.5T626-760q56 0 95 39t39 95q0 26-9.5 50.5T721-531L429-239q-20 20-44 29.5t-50 9.5" /></svg>;
export default MaterialEraserSize3;