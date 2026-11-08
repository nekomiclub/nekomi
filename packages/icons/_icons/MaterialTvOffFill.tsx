import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M863-220 243-840h577q24 0 42 18t18 42v517q0 13-5 24t-12 19M158-840v86L29-883l43-43 807 806-43 43-123-123h-83v80H330v-80H140q-24 0-42-18t-18-42v-520q0-24 18.5-42t41.5-18z" /></svg>;
export default MaterialTvOffFill;