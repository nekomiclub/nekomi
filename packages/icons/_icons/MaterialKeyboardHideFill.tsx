import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardHideFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-40 333-188h295zM140-280q-24 0-42-18t-18-42v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 24-18 42t-42 18zm184-125h313v-60H324zM197-530h60v-60h-60zm127 0h60v-60h-60zm126 0h60v-60h-60zm127 0h60v-60h-60zm126 0h60v-60h-60zM197-655h60v-60h-60zm127 0h60v-60h-60zm126 0h60v-60h-60zm127 0h60v-60h-60zm126 0h60v-60h-60z" /></svg>;
export default MaterialKeyboardHideFill;