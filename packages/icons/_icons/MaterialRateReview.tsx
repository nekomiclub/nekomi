import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRateReview: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-400h123l199.08-200q8.96-9 13.44-20.5T580-643t-4-22-13-20l-36.8-37.19Q517-731 506-735.5t-23-4.5q-11 0-22 4t-20.04 13L240-523zm280-243-37-37zM300-460v-38l102-101 19 18 18 19-101 102zm121-121 18 19-37-37zm14 181h285v-60H495zM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240zm134-220h606v-520H140v600zm-74 0v-520z" /></svg>;
export default MaterialRateReview;