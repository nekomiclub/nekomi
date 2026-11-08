import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRateReviewFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-400h123l199-200q9-9 13.5-20.5T580-643t-4-22-13-20l-37-37q-9-9-20-13.5t-23-4.5q-11 0-22 4t-20 13L240-523zm280-243-37 39-38-38 38-38zm-85 243h285v-60H495zM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240z" /></svg>;
export default MaterialRateReviewFill;