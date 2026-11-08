import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTabUnselectedFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42h60zM80-320v-60h60v60zm0-160v-60h60v60zm0-160v-100q0-24 18-42t42-18h100v60H140v100zm160 480v-60h60v60zm100-580v-60h60v60zm60 580v-60h60v60zm100-420v-220h320q24 0 42 18t18 42v160zm60 420v-60h60v60zm160 0v-60h100v-100h60v100q0 24-18 42t-42 18zm100-260v-60h60v60z" /></svg>;
export default MaterialTabUnselectedFill;