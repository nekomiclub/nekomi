import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAddRowBelowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-551v-329h720v329zm0 391v-331h720v331H688q1-7.5 1.5-14.63.5-7.12.5-15.37 0-88-60.9-149T480-400t-149.1 61.5T270-190q0 8.25.5 15.37.5 7.13 1.5 14.63zm330 80v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialAddRowBelowFill;