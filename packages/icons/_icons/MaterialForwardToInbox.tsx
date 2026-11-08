import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForwardToInbox: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-462 140-685v465h390v60H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v310h-60v-255zm0-60 340-218H140zM774-44l-42-42 73-74H590v-60h215l-74-74 43-42 146 146zM140-685v499-244 4-314z" /></svg>;
export default MaterialForwardToInbox;