import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialUpiPayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M455-357h50v-89h100q23 0 36.5-14.38Q655-474.75 655-496v-57q0-21.25-13.5-35.63Q628-603 605-603H455zm240 0h50v-246h-50zM505-496v-57h100v57zM265-357h100q21.25 0 35.63-14.38Q415-385.75 415-407v-196h-50v196H265v-196h-50v196q0 21.25 14.38 35.62Q243.75-357 265-357M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18z" /></svg>;
export default MaterialUpiPayFill;