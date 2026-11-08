import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBookmarkStarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m389-400 91-55 91 55-24-104 80-69-105-9-42-98-42 98-105 9 80 69zM200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240z" /></svg>;
export default MaterialBookmarkStarFill;