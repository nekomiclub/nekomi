import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHumidityHighFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-100q-133 0-226.5-91.5T160-415q0-63 24.5-120.5T254-638l184-181q9-8 20-12.5t22-4.5 22 4.5 20 12.5l184 181q45 45 69.5 102.5T800-415q0 132-93.5 223.5T480-100" /></svg>;
export default MaterialHumidityHighFill;