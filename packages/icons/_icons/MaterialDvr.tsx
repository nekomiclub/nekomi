import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDvr: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M303.5-416.48q9.5-9.48 9.5-23.5t-9.48-23.52-23.5-9.5-23.52 9.48-9.5 23.5 9.48 23.52 23.5 9.5 23.52-9.48m0-160q9.5-9.48 9.5-23.5t-9.48-23.52-23.5-9.5-23.52 9.48-9.5 23.5 9.48 23.52 23.5 9.5 23.52-9.48M360-410h360v-60H360zm0-160h360v-60H360zm-30 450v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80zM140-260h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialDvr;