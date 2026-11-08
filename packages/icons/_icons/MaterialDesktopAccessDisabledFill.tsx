import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDesktopAccessDisabledFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-840v86L28-866l43-43 790 789-43 43-163-163H540v100h86v60H334v-60h86v-100H140q-24 0-42-18t-18-42v-480q0-24 18.5-42t41.5-18m685 599L225-840h596q23 0 41.5 18.5T881-780v480q0 24-16.5 42T825-241" /></svg>;
export default MaterialDesktopAccessDisabledFill;