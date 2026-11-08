import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialOnHubDevice: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M321-120v-60h318v60zm0-90-42-586q-2-20 10-32t32-12h318q20 0 32 12t10 32l-42 586zm57-60h204l39-510H339zm0-510h-39 282z" /></svg>;
export default MaterialOnHubDevice;