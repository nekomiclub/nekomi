import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMirrorStack: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M551-244v-60h189v-516H468v115h-60v-115q0-24 18-42t42-18h272q24 0 42 18t18 42v516q0 24-18 42t-42 18zM220-140h271v-515H220zm0 60q-24 0-42-18t-18-42v-515q0-24 18-42t42-18h271q24.75 0 42.38 17.62Q551-679.75 551-655v515q0 24-18 42t-42 18zm0-60v-515zm520-635v-45 516z" /></svg>;
export default MaterialMirrorStack;