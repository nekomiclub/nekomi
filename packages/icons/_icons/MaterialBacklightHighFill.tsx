import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBacklightHighFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M40-370v-60h150v60zm221-207L146-692l42-42 115 115zm19 337v-100h400v100zm170-440v-200h60v200zm248 104-42-43 115-115 42 43zm72 206v-60h150v60z" /></svg>;
export default MaterialBacklightHighFill;