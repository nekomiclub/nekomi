import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialServerPersonFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H611l-41-82H390l-42 82zm100-281h320v-19q0-51-50.5-69.5T480-468t-109.5 18.5T320-380zm211.5-195.5Q553-578 553-608t-21.5-51.5T480-681t-51.5 21.5T407-608t21.5 51.5T480-535t51.5-21.5" /></svg>;
export default MaterialServerPersonFill;