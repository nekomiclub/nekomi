import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSimCardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M274-193h60v-60h-60zm0-156h60v-166h-60zm174 156h60v-170h-60zm0-262h60v-60h-60zm182 262h60v-60h-60zm0-156h60v-166h-60zM220-80q-24 0-42-18t-18-42v-501l239-239h341q24 0 42 18t18 42v680q0 24-18 42t-42 18z" /></svg>;
export default MaterialSimCardFill;