import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialForward30Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281-310v-50h121v-56h-82v-49h82v-57H281v-49h127q18.7 0 31.35 12.65T452-527v173q0 18.7-12.65 31.35T408-310zm272 0q-18.7 0-31.35-12.65T509-354v-173q0-18.7 12.65-31.35T553-571h83q18.7 0 31.35 12.65T680-527v173q0 18.7-12.65 31.35T636-310zm6-50h71v-162h-71zM339.5-108Q274-136 225-185t-77-114.5T120-440t28-140.5T225-695t114.5-77T480-800h21l-78-78 41-41 147 147-147 147-41-41 74-74h-17q-125.36 0-212.68 87.32T180-440t87.5 212.68T480-140t212.5-87.32T780-440h60q0 75-28 140.5T735-185t-114.5 77T480-80t-140.5-28" /></svg>;
export default MaterialForward30Fill;