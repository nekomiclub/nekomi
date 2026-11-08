import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialGridOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M340-180v-160H180v160zm220 0v-134l-26-26H400v160zM340-400v-134l-26-26H180v160zm440 0v-160H620v134l26 26zM560-620v-160H400v134l26 26zm220 0v-160H620v160zm60 414L206-840h574q24 0 42 18t18 42zm-660 86q-24 0-42-18t-18-42v-660l720 720zm653 79L26-848l43-43L876-84z" /></svg>;
export default MaterialGridOff;