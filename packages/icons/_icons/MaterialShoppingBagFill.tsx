import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShoppingBagFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880t106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18zm170-640h180v-10q0-38-26-64t-64-26-64 26-26 64zm231.5 171.5Q630-557 630-570v-90h-60v90q0 13 8.5 21.5T600-540t21.5-8.5m-240 0Q390-557 390-570v-90h-60v90q0 13 8.5 21.5T360-540t21.5-8.5" /></svg>;
export default MaterialShoppingBagFill;