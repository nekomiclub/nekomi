import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialInkEraser: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M678-220h203v60H618zm-499 60-81-84q-18-17-17.5-41.5T97-327l458-498q16-17 40.57-17 24.56 0 41.43 17l205 215q17 17 18 42t-16 42L503-160zm301-60 324-352-207-217-455 503 64 66zm0-260" /></svg>;
export default MaterialInkEraser;