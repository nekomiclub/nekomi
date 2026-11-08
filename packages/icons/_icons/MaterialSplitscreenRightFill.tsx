import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M570-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18zm-390 0q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18zm0-660v600h210v-600z" /></svg>;
export default MaterialSplitscreenRightFill;