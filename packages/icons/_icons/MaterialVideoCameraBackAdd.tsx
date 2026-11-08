import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVideoCameraBackAdd: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-160q-24 0-42-18t-18-42v-285h60v285h520v-520H375v-60h285q24 0 42 18t18 42v215l160-160v410L720-435v215q0 24-18 42t-42 18zm65-173h400L476-508 370-368l-71-90zm-37-232v-87H80v-60h88v-88h60v88h87v60h-87v87z" /></svg>;
export default MaterialVideoCameraBackAdd;