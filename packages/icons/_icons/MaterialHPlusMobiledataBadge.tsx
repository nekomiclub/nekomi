import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHPlusMobiledataBadge: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h760v-600H100zm0 0v-600zm80-100h60v-170h200v170h60v-400h-60v170H240v-170h-60zm455-85h60v-85h85v-60h-85v-85h-60v85h-85v60h85z" /></svg>;
export default MaterialHPlusMobiledataBadge;