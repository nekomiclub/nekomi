import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSystemUpdateAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h250v60H140v520h680v-520H570v-60h250q24 0 42 18t18 42v520q0 24-18 42t-42 18zm340-185L280-545l43-43 127 127v-339h60v339l127-127 43 43z" /></svg>;
export default MaterialSystemUpdateAlt;