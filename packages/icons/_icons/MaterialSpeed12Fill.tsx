import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSpeed12Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M287-277v-346h-83v-60h143v406zm120 0v-60h60v60zm120 0h230v-60H587v-115h110q24 0 42-18t18-42v-111q0-24-18-42t-42-18H527v60h170v111H587q-24 0-42 18t-18 42z" /></svg>;
export default MaterialSpeed12Fill;