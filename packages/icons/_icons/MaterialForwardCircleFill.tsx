import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForwardCircleFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-290q76 0 130.5-52T670-470h-40q-4 60-47 100t-103 40q-63 0-106.5-43.5T330-480t43.5-106.5T480-630h6l-59 60 28 29 106-106-106-106-29 29 54 54q-79 2-134.5 57T290-480q0 79 55.5 134.5T480-290m0 210q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80" /></svg>;
export default MaterialForwardCircleFill;