import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDateRange: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M277.5-405.5Q266-417 266-434t11.5-28.5T306-474t28.5 11.5T346-434t-11.5 28.5T306-394t-28.5-11.5m177 0Q443-417 443-434t11.5-28.5T483-474t28.5 11.5T523-434t-11.5 28.5T483-394t-28.5-11.5m170 0Q613-417 613-434t11.5-28.5T653-474t28.5 11.5T693-434t-11.5 28.5T653-394t-28.5-11.5M180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18zm0-60h600v-430H180zm0-490h600v-130H180zm0 0v-130z" /></svg>;
export default MaterialDateRange;