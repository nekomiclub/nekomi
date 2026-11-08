import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiProxy: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M700-180h50v-50h-50zm0-110h50v-50h-50zm110 110h50v-50h-50zm-170 60v-280h170v110h110v170zm-160 0L0-600q99-94 221-147t259-53 259 53 221 147L840-479l-20.5-20.5L799-520l73-74q-87-68-184.5-107T480-740t-207.5 39T88-594l392 392 60-60 20.5 20.5L581-221zm0-351" /></svg>;
export default MaterialWifiProxy;