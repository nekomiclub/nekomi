import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwitchOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M740-880q24 0 42 18t18 42v680q0 24-18 42t-42 18H220q-24 0-42-18t-18-42v-680q0-24 18-42t42-18zM635-675H326v389h309zm-60 60v187H386v-187zm-94.47 412q-8.46 0-14 5.53-5.53 5.54-5.53 14 0 8.47 5.53 14.47 5.54 6 14 6 8.47 0 14.47-6t6-14.47q0-8.46-6-14-6-5.53-14.47-5.53m0-595q-8.46 0-14 5.53-5.53 5.54-5.53 14 0 8.47 5.53 14.47 5.54 6 14 6 8.47 0 14.47-6t6-14.47q0-8.46-6-14-6-5.53-14.47-5.53" /></svg>;
export default MaterialSwitchOffFill;