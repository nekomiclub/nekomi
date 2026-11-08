import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWatch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M411-820h138zm0 680h138zm-45 60-47-171q-55-35-87-95t-32-134 32-134.5 87-94.5l47-171h228l47 171q55 34 87 94.5T760-480t-32 134-87 95L594-80zm270-244q64-64 64-156t-64-156-156-64-156 64-64 156 64 156 156 64 156-64M393-744q23-7 44.5-10.5T480-758t42.5 3.5T567-744l-18-76H411zm18 604h138l18-76q-23 6-44.5 9.5T480-203t-42.5-3.5T393-216z" /></svg>;
export default MaterialWatch;