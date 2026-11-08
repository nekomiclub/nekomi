import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed025: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-277v-60h60v60zm410 0v-60h170v-115H570v-231h230v60H630v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18zm-290 0v-175q0-24 18-42t42-18h110v-111H280v-60h170q24 0 42 18t18 42v111q0 24-18 42t-42 18H340v115h170v60z" /></svg>;
export default MaterialSpeed025;