import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBreakingNewsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M282-291q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-51-161h60v-231h-60zm219 175h279v-60H450zm0-175h279v-60H450zm0-171h279v-60H450zM132-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h696q24 0 42 18t18 42v600q0 24-18 42t-42 18z" /></svg>;
export default MaterialBreakingNewsFill;