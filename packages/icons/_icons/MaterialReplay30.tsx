import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReplay30: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M339.5-108Q274-136 225-185t-77-114.5T120-440h60q0 125 87.5 212.5T480-140t212.5-87.32T780-440t-85-212.68T485-740h-22l73 73-42 42-147-147 147-147 41 41-78 78h23q75 0 140.5 28T735-695t77 114.5T840-440t-28 140.5T735-185t-114.5 77T480-80t-140.5-28M281-310v-50h121v-55h-82v-50h82v-56H281v-50h127q18.7 0 31.35 12.65T452-527v173q0 18.7-12.65 31.35T408-310zm272 0q-18.7 0-31.35-12.65T509-354v-173q0-18.7 12.65-31.35T553-571h83q18.7 0 31.35 12.65T680-527v173q0 18.7-12.65 31.35T636-310zm6-50h71v-161h-71z" /></svg>;
export default MaterialReplay30;