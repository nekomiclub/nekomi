import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDesktopWindowsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M335-120v-60h86v-100H141q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18H541v100h86v60z" /></svg>;
export default MaterialDesktopWindowsFill;