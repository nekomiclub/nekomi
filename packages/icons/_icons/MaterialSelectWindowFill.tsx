import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSelectWindowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-80q-24 0-42-18t-18-42v-387q0-24 18-42t42-18h115v-233q0-24 18-42t42-18h505q24 0 42 18t18 42v387q0 24-18 42t-42 18H706v233q0 24-18 42t-42 18zm0-60h506v-327H140zm566-293h114v-327H315v173h317q32 0 53 21t21 53z" /></svg>;
export default MaterialSelectWindowFill;