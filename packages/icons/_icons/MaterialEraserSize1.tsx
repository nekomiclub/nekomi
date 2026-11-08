import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialEraserSize1: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M272-200q-29 0-50.5-21.27-21.5-21.28-21.5-51.15 0-13.58 5-26.08t16-23.5l417-417q11-11 24.18-16t26.82-5q29.29 0 50.14 21.15Q760-717.7 760-688q0 14-5.02 27.21Q749.96-647.57 739-637L323-221q-10.74 10.96-23.71 15.98T272-200" /></svg>;
export default MaterialEraserSize1;