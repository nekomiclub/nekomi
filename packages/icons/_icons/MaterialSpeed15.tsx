import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed15: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M287-277v-346h-83v-60h143v406zm120 0v-60h60v60zm120 0v-60h170v-115H527v-231h230v60H587v111h110q24 0 42 18t18 42v115q0 24-18 42t-42 18z" /></svg>;
export default MaterialSpeed15;