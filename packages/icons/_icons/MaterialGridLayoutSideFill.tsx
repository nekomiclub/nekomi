import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridLayoutSideFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M840-120v-720zm-660 0h350v-720H180q-24 0-42 18t-18 42v600q0 24 18 42t42 18m660-60v-600q0-24-18-42t-42-18H590v720h190q24 0 42-18t18-42" /></svg>;
export default MaterialGridLayoutSideFill;