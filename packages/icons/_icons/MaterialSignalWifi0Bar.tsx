import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSignalWifi0Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q99-94 221-147t259-53 259 53 221 147zm0-82 392-392q-87-68-184.5-107T480-740t-207.5 39T88-594z" /></svg>;
export default MaterialSignalWifi0Bar;