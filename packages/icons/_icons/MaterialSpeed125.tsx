import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed125: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M262-277v-60h60v60zm408 0v-60h170v-115H670v-231h230v60H730v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18zm-289 0v-175q0-24 18-42t42-18h110v-111H381v-60h170q24 0 42 18t18 42v111q0 24-18 42t-42 18H441v115h170v60zm-238 0v-346H60v-60h143v406z" /></svg>;
export default MaterialSpeed125;