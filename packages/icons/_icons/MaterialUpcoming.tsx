import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUpcoming: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-215q0-24 18-42t42-18h211q0 54 37.68 90.5 37.67 36.5 91.5 36.5 53.82 0 91.32-36.5T609-455h211q24 0 42 18t18 42v215q0 24-18 42t-42 18zm0-60h680v-215H656q-18 57-65.5 92T480-268t-112.5-35-63.5-92H140zm573-355-43-43 135-135 43 43zm-466 0L112-670l43-43 135 135zm203-118v-187h60v187zM140-180h680z" /></svg>;
export default MaterialUpcoming;