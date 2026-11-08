import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed17x: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M245-277v-60h60v60zm-122 0v-346H40v-60h143v406zm496-3 114-206-109-194h65l80 143 79-143h65L805-486l115 206h-64l-87-154-85 154zm-214 2 92-345H327v-60h170q24 0 42 16t18 40q0 3-2 13l-90 336z" /></svg>;
export default MaterialSpeed17x;