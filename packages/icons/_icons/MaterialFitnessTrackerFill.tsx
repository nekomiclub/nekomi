import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFitnessTrackerFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m362-80-43-139q-18-12-28.5-31.5T280-293v-374q0-23 11-43t29-32l42-138h236l42 138q18 12 29 32t11 43v374q0 23-10.5 42.5T641-219L598-80zm8-183h220q13 0 21.5-8.5T620-293v-374q0-13-8.5-21.5T590-697H370q-13 0-21.5 8.5T340-667v374q0 13 8.5 21.5T370-263" /></svg>;
export default MaterialFitnessTrackerFill;