import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatDisplayFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-529h480v-60H240zm0-130h480v-60H240zm160 419H240L80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v381q-14-9-28.5-15t-31.5-6l-580 1v60h180q-10 15-15 32.5t-5 36.5zM520-80q-24 0-42-18t-18-42v-200q0-24 18-42t42-18h300q24 0 42 18t18 42v200q0 24-18 42t-42 18zm0-60h300v-200H520z" /></svg>;
export default MaterialChatDisplayFill;