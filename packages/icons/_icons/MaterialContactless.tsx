import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialContactless: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M322-385q10-23 16.5-46.5T345-480t-6-49-18-46l-56 20q11 17 15.5 36t4.5 39-5.5 39-14.5 37zm136 57q16-36 23-74.5t7-77.5-7-77-23-74l-57 20q15 31 21 64t6 67-6.5 67.5T401-348zm131 56q22-50 32-102t10-106-10-106-32-101l-56 22q20 44 29 90.5t9 94.5-9 95-29 91zM480-80q-82 0-155-31.5t-127.5-86-86-127.5T80-480q0-83 31.5-156t86-127T325-848.5 480-880q83 0 156 31.5T763-763t85.5 127T880-480q0 82-31.5 155T763-197.5t-127 86T480-80m0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140m0-340" /></svg>;
export default MaterialContactless;