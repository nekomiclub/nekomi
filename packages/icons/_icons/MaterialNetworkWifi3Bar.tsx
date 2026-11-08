import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNetworkWifi3Bar: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q97-93 220-146.5T480-800t260 53.5T960-600zM197-486q62-49 132-76t151-27 151.5 27T764-486l108-108q-87-68-184.5-107T480-740t-207.5 39T88-594z" /></svg>;
export default MaterialNetworkWifi3Bar;