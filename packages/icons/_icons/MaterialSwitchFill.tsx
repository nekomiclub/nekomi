import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18zm105-205h309v-389H325zm60-60v-187h189v187zm95.47-412q8.46 0 14-5.53 5.53-5.54 5.53-14 0-8.47-5.53-14.47-5.54-6-14-6-8.47 0-14.47 6t-6 14.47q0 8.46 6 14 6 5.53 14.47 5.53m0 595q8.46 0 14-5.53 5.53-5.54 5.53-14 0-8.47-5.53-14.47-5.54-6-14-6-8.47 0-14.47 6t-6 14.47q0 8.46 6 14 6 5.53 14.47 5.53" /></svg>;
export default MaterialSwitchFill;