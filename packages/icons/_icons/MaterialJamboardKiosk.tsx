import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialJamboardKiosk: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M250-120v-60h200v-140H140q-24 0-42-18t-18-42v-400q0-24 18-42t42-18h680q24 0 42 18t18 42v400q0 24-18 42t-42 18H510v140h200v60zM140-380h680v-400H140zm0 0v-400z" /></svg>;
export default MaterialJamboardKiosk;