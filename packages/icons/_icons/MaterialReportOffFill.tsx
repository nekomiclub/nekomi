import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReportOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M834-29 687-176l-57 56H330L120-330v-300l57-56L29-834l42-42L876-71zm-63-232L510-522v-166h-60v106L261-771l69-69h300l210 210v300zm-291-20q14 0 24.5-10.5T515-316q0-8-2.5-14t-7.5-11-11-7.5-14-2.5q-14 0-24.5 10.5T445-316t10.5 24.5T480-281" /></svg>;
export default MaterialReportOffFill;