import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSplitscreenAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-180v-188 33-5zm0 60q-24 0-42-18t-18-42v-188q0-24 18-42t42-18h600q24 0 42 18t18 42H180v188h440v60zm0-413q-24 0-42-18t-18-42v-187q0-24 18-42t42-18h600q24 0 42 18t18 42v187q0 24-18 42t-42 18zm0-60h600v-187H180zm0 0v-187zM780-40v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialSplitscreenAdd;