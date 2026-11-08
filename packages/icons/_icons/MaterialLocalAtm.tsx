import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalAtm: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M453-274h60v-45h48q15 0 24.5-12t9.5-27v-114.74q0-16.26-9.5-27.76T561-512H425v-69h170v-60h-82v-45h-60v45h-49q-15 0-27 12t-12 28.12v113.76q0 16.12 12 25.62t27 9.5h131v73H365v60h88zM140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18zm0-60h680v-520H140zm0 0v-520z" /></svg>;
export default MaterialLocalAtm;