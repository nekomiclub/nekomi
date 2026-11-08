import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCloseFullscreen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m122-80-42-42 298-298H160v-60h320v320h-60v-218zm358-400v-320h60v218l298-298 42 42-298 298h218v60z" /></svg>;
export default MaterialCloseFullscreen;