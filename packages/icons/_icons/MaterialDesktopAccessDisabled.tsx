import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDesktopAccessDisabled: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m140-840 60 60h-60v480h455L28-866l43-43 790 789-43 43-163-163H540v100h86v60H334v-60h86v-100H140q-24 0-42-18t-18-42v-480q0-24 18.5-42t41.5-18m685 599-59-59h55v-480H285l-60-60h596q23 0 41.5 18.5T881-780v480q0 23.64-16.5 41.82T825-241M368-527" /></svg>;
export default MaterialDesktopAccessDisabled;