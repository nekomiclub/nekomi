import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed05: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M285-277v-60h60v60zm120 0v-60h170v-115H405v-231h230v60H465v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18z" /></svg>;
export default MaterialSpeed05;