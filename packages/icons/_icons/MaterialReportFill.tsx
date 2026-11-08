import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReportFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-281q14 0 24.5-10.5T515-316t-10.5-24.5T480-351t-24.5 10.5T445-316t10.5 24.5T480-281m-30-144h60v-263h-60zM330-120 120-330v-300l210-210h300l210 210v300L630-120z" /></svg>;
export default MaterialReportFill;