import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHardDriveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M680-330q20 0 35-14.5t15-35.5q0-20-15-35t-35-15q-21 0-35.5 15T630-380q0 21 14.5 35.5T680-330M80-570l142-172q8-9 19-13.5t23-4.5h431q12 0 23 4.5t19 13.5l143 172zm60 370q-26 0-43-17t-17-43v-250h800v250q0 26-17.5 43T820-200z" /></svg>;
export default MaterialHardDriveFill;