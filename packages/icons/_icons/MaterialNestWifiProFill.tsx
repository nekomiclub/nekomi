import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiProFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M515.5-304.5Q530-319 530-340t-14.5-35.5T480-390t-35.5 14.5T430-340t14.5 35.5T480-290t35.5-14.5M360-80q-75 0-121.5-41T166-223q-27-60-36.5-129.5T120-479q0-100 16-175t57-125q42-51 111-76t176-25 176 25 111 76q41 50 57 125t16 175q0 57-9.5 126.5T794-223q-26 61-72.5 102T600-80z" /></svg>;
export default MaterialNestWifiProFill;