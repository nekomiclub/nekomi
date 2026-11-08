import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPermScanWifi: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q99-94 221-147t259-53 259 53 221 147zm0-82 392-392q-87-68-184.5-107T480-740t-207.5 39T88-594zm-30-143h60v-220h-60zm51-279q9-9 9-21t-9-21-21-9-21 9-9 21 9 21 21 9 21-9m-21 422" /></svg>;
export default MaterialPermScanWifi;