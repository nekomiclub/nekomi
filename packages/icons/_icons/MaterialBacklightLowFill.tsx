import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBacklightLowFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-370v-60h110v60zm181-207-85-85 42-42 85 85zm19 337v-100h400v100zm170-440v-120h60v120zm248 104-42-43 85-85 42 43zm72 206v-60h110v60z" /></svg>;
export default MaterialBacklightLowFill;