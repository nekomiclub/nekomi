import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUpcomingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24 0-42-18t-18-42v-215q0-24 18-42t42-18h211q0 54 37.5 90.5T480-328t91.5-36.5T609-455h211q24 0 42 18t18 42v215q0 24-18 42t-42 18zm573-415-43-43 135-135 43 43zm-466 0L112-670l43-43 135 135zm203-118v-187h60v187z" /></svg>;
export default MaterialUpcomingFill;