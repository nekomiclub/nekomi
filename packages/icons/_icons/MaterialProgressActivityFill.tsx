import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialProgressActivityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M323-111q-73-31-127-85t-85-127-31-157 31-157 85-127 127-85 157-31q12 0 21 9t9 21-9 21-21 9q-141 0-240.5 99.5T140-480t99.5 240.5T480-140t240.5-99.5T820-480q0-12 9-21t21-9 21 9 9 21q0 84-31 157t-85 127-127 85-157 31-157-31" /></svg>;
export default MaterialProgressActivityFill;