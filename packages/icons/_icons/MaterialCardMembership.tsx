import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCardMembership: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-443v103h680v-103zm0-437h680q24.75 0 42.38 17.62Q880-844.75 880-820v480q0 24.75-17.62 42.37Q844.75-280 820-280H626v200l-146-74-146 74v-200H140q-24.75 0-42.37-17.63Q80-315.25 80-340v-480q0-24.75 17.63-42.38Q115.25-880 140-880m0 329h680v-269H140zm0 211v-480z" /></svg>;
export default MaterialCardMembership;