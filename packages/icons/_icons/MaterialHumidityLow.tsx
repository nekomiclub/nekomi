import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHumidityLow: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-100q-133 0-226.5-91.71T160-415q0-63.14 24.5-120.77T254-637.5L480-860l226 222.5q45 44.1 69.5 101.73T800-415q0 131.58-93.5 223.29T480-100m184-134.07q76-74.06 76-181.11Q740-466 720.5-512T666-593L480-776 294-593q-35 35-54.5 81-19.5 45.99-19.5 96.86Q220-308 295.76-234q75.77 74 184 74Q588-160 664-234.07" /></svg>;
export default MaterialHumidityLow;