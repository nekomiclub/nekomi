import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoCameraBackAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-329q24 22 55 33t63 11q74 0 125.5-52T375-683q0-32-11-62.5T331-800h329q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18zm28-405v-87H80v-60h88v-88h60v88h87v60h-87v87zm37 232h400L476-508 370-368l-71-90z" /></svg>;
export default MaterialVideoCameraBackAddFill;