import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialChatInfo: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M479.98-694q14.02 0 23.52-9.48t9.5-23.5-9.48-23.52-23.5-9.5-23.52 9.48-9.5 23.5 9.48 23.52 23.5 9.5M450-367h60v-251h-60zM80-80v-740q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H240zm134-220h606v-520H140v600zm-74 0v-520z" /></svg>;
export default MaterialChatInfo;