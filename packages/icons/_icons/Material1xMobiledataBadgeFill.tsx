import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const Material1xMobiledataBadgeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h760q24 0 42 18t18 42v600q0 24-18 42t-42 18zm182-160h60v-399H200v60h82zm178 0h65l85-154 87 154h64L646-486l108-194h-65l-79 143-80-143h-65l109 194z" /></svg>;
export default Material1xMobiledataBadgeFill;