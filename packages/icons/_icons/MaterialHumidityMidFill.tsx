import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHumidityMidFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-100q-133 0-226.5-91.71T160-415q0-63 24.5-120.5T254-638l184-181q8.96-8.13 19.78-12.57Q468.61-836 479.8-836q11.2 0 22.16 4.43Q512.93-827.13 522-819l184 181q45 45 69.5 102.5T800-415q0 132-93.5 223.5T480-100M220-415h520q0-51-19.5-97T666-593L480-776 294-593q-35 35-54.5 81.04T220-415" /></svg>;
export default MaterialHumidityMidFill;