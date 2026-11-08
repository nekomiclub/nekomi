import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiPro2Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M360-80q-75 0-121.5-41T166-223q-27-60-36.5-129.5T120-479q0-100 16-175t57-125q42-51 111-76t176-25 176 25 111 76q41 50 57 125t16 175q0 57-9.5 126.5T794-223q-26 61-72.5 102T600-80zm301-394q12 0 21-8.5t9-21.5q0-94-66-160t-160-66q-13 0-21.5 9t-8.5 21q0 13 8.5 21.5T465-670q69 0 117.5 48.5T631-504q0 13 8.5 21.5T661-474" /></svg>;
export default MaterialNestWifiPro2Fill;