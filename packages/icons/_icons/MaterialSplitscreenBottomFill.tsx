import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenBottomFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-210q0-24 18-42t42-18h600q24 0 42 18t18 42v210q0 24-18 42t-42 18zm0-390q-24 0-42-18t-18-42v-210q0-24 18-42t42-18h600q24 0 42 18t18 42v210q0 24-18 42t-42 18zm600-270H180v210h600z" /></svg>;
export default MaterialSplitscreenBottomFill;