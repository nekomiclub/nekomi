import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFreeCancellation: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M662-60 520-202l42-42 99 99 184-184 42 43zM289-287l-42-42 71-71-71-71 42-42 71 71 71-71 42 42-71 71 71 71-42 42-71-71zM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v352l-60 60v-222H180v430h317l60 60zm0-550h600v-130H180zm0 0v-130z" /></svg>;
export default MaterialFreeCancellation;