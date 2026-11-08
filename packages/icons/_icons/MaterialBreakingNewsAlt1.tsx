import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBreakingNewsAlt1: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-290h180v-60H250zm400 0h60v-60h-60zM250-450h180v-60H250zm400 0h60v-220h-60zM250-610h180v-60H250zM132-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h696q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-60h696v-600H132zm0 0v-600z" /></svg>;
export default MaterialBreakingNewsAlt1;