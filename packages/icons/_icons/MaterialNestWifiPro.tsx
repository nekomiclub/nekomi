import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestWifiPro: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M515.5-304.5Q530-319 530-340t-14.5-35.5T480-390t-35.5 14.5T430-340t14.5 35.5T480-290t35.5-14.5M360-80q-75 0-121.5-41T166-223q-27-60-36.5-129.5T120-479q0-100 16-175t57-125q42-51 111-76t176-25 176 25 111 76q41 50 57 125t16 175q0 57-9.5 126.5T794-223q-26 61-72.5 102T600-80zm0-60h240q58 0 92.5-36.5T747-267t26.5-112 6.5-100q0-87-11.5-151T723-737q-33-42-91.5-62.5T480-820t-151.5 20.5T237-737q-34 43-45.5 107T180-479q0 42 6.5 100T213-267t54.5 90.5T360-140m120-340" /></svg>;
export default MaterialNestWifiPro;