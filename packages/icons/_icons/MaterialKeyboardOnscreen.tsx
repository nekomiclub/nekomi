import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardOnscreen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M300-285h360v-60H300zm-97-125h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-435h680v-145H140zm0 375h680v-315H140zm0 0v-315z" /></svg>;
export default MaterialKeyboardOnscreen;