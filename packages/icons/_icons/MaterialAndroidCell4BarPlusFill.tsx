import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAndroidCell4BarPlusFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M60-160v-308h100v308zm247 0v-411h100v411zm493-300v-339h100v344q-24-8-49.5-9t-50.5 4M553-160v-515h100v325q-11 22-17 46t-6 50q0 26.13 5.5 49.56Q641-181 652-160zm257 16v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAndroidCell4BarPlusFill;