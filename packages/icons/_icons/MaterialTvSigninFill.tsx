import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTvSigninFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-360h320v-19q0-38-45.5-63T480-467t-114.5 25-45.5 63zm211.5-195.5Q553-577 553-607t-21.5-51.5T480-680t-51.5 21.5T407-607t21.5 51.5T480-534t51.5-21.5M330-120v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80z" /></svg>;
export default MaterialTvSigninFill;