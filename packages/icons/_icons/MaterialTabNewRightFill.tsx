import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabNewRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m774-40-42-42 73-74H624v-60h181l-73-74 42-42 146 146zm-594-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v398q-17-5-33.5-8t-33.5-3q-86 0-146 63.5T567-180q1 16 3.5 31t7.5 29zm270-160h60v-170h170v-60H510v-170h-60v170H280v60h170z" /></svg>;
export default MaterialTabNewRightFill;