import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q24 0 42 18t18 42v520q0 24-18 42t-42 18zm227-124h306v-60H327zM204-429h60v-60h-60zm164 0h60v-60h-60zm164 0h60v-60h-60zm164 0h60v-60h-60zM204-574h60v-60h-60zm164 0h60v-60h-60zm164 0h60v-60h-60zm164 0h60v-60h-60z" /></svg>;
export default MaterialKeyboardAltFill;