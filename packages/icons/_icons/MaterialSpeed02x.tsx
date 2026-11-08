import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed02x: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-277v-60h60v60zm120 0v-175q0-24 18-42t42-18h110v-111H240v-60h170q24 0 42 18t18 42v111q0 24-18 42t-42 18H300v115h170v60zm299-3 114-206-109-194h65l80 143 79-143h65L725-486l115 206h-64l-87-154-85 154z" /></svg>;
export default MaterialSpeed02x;