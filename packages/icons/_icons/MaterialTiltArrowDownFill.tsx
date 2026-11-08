import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTiltArrowDownFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h520q24 0 42 18t18 42v600q0 24-18 42t-42 18zm230-293-74-74-42 42 146 146 146-146-42-42-74 74v-227h-60z" /></svg>;
export default MaterialTiltArrowDownFill;