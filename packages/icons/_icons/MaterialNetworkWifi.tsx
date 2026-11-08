import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNetworkWifi: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-120 0-600q98-94 221-147t259-53 259 53 221 147zM130-552q75-60 164-94t186-34 186 34 164 94l42-42q-85-66-184.5-106T480-740t-207.5 40T88-594z" /></svg>;
export default MaterialNetworkWifi;