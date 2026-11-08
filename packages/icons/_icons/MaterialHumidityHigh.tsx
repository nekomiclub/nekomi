import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHumidityHigh: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-100q-133 0-226.5-91.71T160-415q0-63.14 24.5-120.77T254-637.5L480-860l226 222.5q45 44.1 69.5 101.73T800-415q0 131.58-93.5 223.29T480-100" /></svg>;
export default MaterialHumidityHigh;