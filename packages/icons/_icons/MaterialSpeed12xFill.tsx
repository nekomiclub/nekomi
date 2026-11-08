import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed12xFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M245-277v-60h60v60zm122 0v-175q0-24 18-42t42-18h90v-111H367v-60h150q24 0 42 18t18 42v111q0 24-18 42t-42 18h-90v115h150v60zm-244 0v-346H40v-60h143v406zm516-3 114-206-109-194h65l80 143 79-143h65L825-486l115 206h-64l-87-154-85 154z" /></svg>;
export default MaterialSpeed12xFill;