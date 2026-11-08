import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWifiAddFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q99-94 221-147t259-53 259 53 221 147L827-467q-17-6-35-9t-36-2q-85 2-145 62t-62 145q-1 18 2 36t9 35zm260 0v-120H620v-60h120v-120h60v120h120v60H800v120z" /></svg>;
export default MaterialWifiAddFill;