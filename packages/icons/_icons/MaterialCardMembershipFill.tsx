import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardMembershipFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-880h680q24 0 42 18t18 42v480q0 24-18 42t-42 18H626v200l-146-74-146 74v-200H140q-24 0-42-18t-18-42v-480q0-24 18-42t42-18m0 437h680v-108H140z" /></svg>;
export default MaterialCardMembershipFill;