import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFlashlightOnFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M240-764v-116h480v116zm276 423.18q15-14.83 15-36Q531-398 516.18-413q-14.83-15-36-15Q459-428 444-413.18q-15 14.83-15 36Q429-356 443.82-341q14.83 15 36 15Q501-326 516-340.82M330-80v-443l-90-132v-49h480v49l-90 132v443z" /></svg>;
export default MaterialFlashlightOnFill;