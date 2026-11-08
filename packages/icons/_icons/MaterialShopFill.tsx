import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShopFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m384-244 266-175-266-176zM140-120q-24 0-42-18t-18-42v-540h240v-100q0-24 18-42t42-18h200q24 0 42 18t18 42v100h240v540q0 24-18 42t-42 18zm240-600h200v-100H380z" /></svg>;
export default MaterialShopFill;