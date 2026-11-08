import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDvrFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303.5-416.5Q313-426 313-440t-9.5-23.5T280-473t-23.5 9.5T247-440t9.5 23.5T280-407t23.5-9.5m0-160Q313-586 313-600t-9.5-23.5T280-633t-23.5 9.5T247-600t9.5 23.5T280-567t23.5-9.5M360-410h360v-60H360zm0-160h360v-60H360zm-30 450v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80z" /></svg>;
export default MaterialDvrFill;