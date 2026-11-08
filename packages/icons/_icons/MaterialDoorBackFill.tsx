import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorBackFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-60h80v-600q0-24 18-42t42-18h440q24 0 42 18t18 42v600h80v60zm297-339q10-10 10-24t-10-24-24-10-24 10-10 24 10 24 24 10 24-10" /></svg>;
export default MaterialDoorBackFill;