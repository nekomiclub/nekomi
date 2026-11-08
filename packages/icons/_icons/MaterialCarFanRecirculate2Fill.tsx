import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarFanRecirculate2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m368-372 28-27-39-40h108q45 0 76-31.5t31-76.5-31-76.5-76-31.5H297v39h168q28 0 47.5 20t19.5 49q0 28-19.5 48T465-479H357l39-40-28-28-87 88zM255-160q-40 0-72.5-23.5T133-243H0v-249q0-24 18-42t42-18h60l64-181q8-21 26-34t41-13h306q19 0 35 9t26 26l102 172 180 15q24 2 42 21.5t18 43.5v250H827q-17 37-49.5 60T705-160t-72.5-23.5T583-243H377q-17 37-49.5 60T255-160" /></svg>;
export default MaterialCarFanRecirculate2Fill;