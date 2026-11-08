import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBeenhere: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-40 184-262q-11.25-8.25-17.62-21-6.38-12.75-6.38-27v-510q0-24 18-42t42-18h520q24 0 42 18t18 42v510q0 14.25-6.37 27-6.38 12.75-17.63 21zm0-75 260-200v-505H220v505zm-42-245 226-226-43-42-184 184-99-99-42 42zm42-460H220h520z" /></svg>;
export default MaterialBeenhere;