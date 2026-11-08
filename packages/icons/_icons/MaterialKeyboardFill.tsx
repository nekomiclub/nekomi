import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200zm160-125h360v-60H300zm-97-125h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zM203-575h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60zm124 0h60v-60h-60zm123 0h60v-60h-60z" /></svg>;
export default MaterialKeyboardFill;