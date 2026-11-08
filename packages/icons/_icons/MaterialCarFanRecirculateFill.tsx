import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarFanRecirculateFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M255-160q-40 0-72.5-23.5T133-243H0v-249q0-24 18-42t42-18h60l64-181q8-21 26-34t41-13h306q19 0 35 9t26 26l58 99-99 116h-99l-78-78-128 128 128 128 78-78h144l121-141 157 13q24 2 42 21.5t18 43.5v250H827q-17 37-49.5 60T705-160t-72.5-23.5T583-243H377q-17 37-49.5 60T255-160m145-234 28-28-37-38h218l239-279-30-26-227 265H391l37-38-28-28-86 86z" /></svg>;
export default MaterialCarFanRecirculateFill;