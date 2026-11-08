import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNetworkWifi2Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q97-93 220-146.5T480-800t260 53.5T960-600zM273-409q45-35 96.5-55T480-484t110.5 20 96.5 55l185-185q-87-68-184.5-107T480-740t-207.5 39T88-594z" /></svg>;
export default MaterialNetworkWifi2Bar;