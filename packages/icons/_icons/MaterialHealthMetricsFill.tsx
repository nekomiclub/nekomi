import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHealthMetricsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-80v-200H80v-170h264l71 106q4 6 10 10t13.83 4q10.17 0 18.21-6T468-351l61-182 46 69q5 6 11 10t14 4h280v170H680v200zm151-347-46-70q-3.79-5.78-10.61-9.39Q367.58-510 360-510H80v-170h200v-200h400v200h200v170H616l-71-106q-5-6-11-10t-13.71-4q-10.02 0-18.11 6-8.1 6-11.18 15z" /></svg>;
export default MaterialHealthMetricsFill;