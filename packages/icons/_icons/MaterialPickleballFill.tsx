import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPickleballFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M750-80 508-323q-29 29-64.5 43T370-266t-75.5-15-66.5-44L72-482q-16-17-24-37.5T40-562t8-42.5T72-642l163-164q17-17 37.5-25t42.5-8 42 8 37 25l155 157q29 30 44 67.5t15 76.5q0 38-14 74t-43 65l241 243zm37-533q-55 0-93.5-39T655-747q0-55 38.5-94t93.5-39q56 0 94.5 39t38.5 94q0 56-38.5 95T787-613" /></svg>;
export default MaterialPickleballFill;