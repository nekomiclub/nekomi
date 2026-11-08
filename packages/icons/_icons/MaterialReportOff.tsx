import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReportOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m771-261-43-43 52-51v-250L605-780H355l-52 51-42-42 69-69h300l210 210v300zM510-522v-166h-60v106zM834-29 687-176l-57 56H330L120-330v-300l57-56L29-834l42-42L876-71zM355-180h250l39-38-426-426-38 39v250zm100.5-111.5Q445-302 445-316t10.5-24.5T480-351t24.5 10.5T515-316t-10.5 24.5T480-281t-24.5-10.5M431-431" /></svg>;
export default MaterialReportOff;