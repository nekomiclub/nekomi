import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLunchDining: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-128h800v128q0 24.75-17.62 42.37Q844.75-120 820-120zm0-128v68h680v-68zm279.5-156Q400-382 346-382t-71.5-22-58.5-22-61.36 22Q134.29-382 80-382v-60q33 0 57.5-22t78.5-22 71.5 22 58.5 22 60.5-22 73.5-22 73.5 22 60.5 22 58.5-22 71.5-22 78.5 22 57.5 22v60q-54 0-74.5-22T744-426t-58.5 22-71.5 22-73.5-22-60.5-22-60.5 22M80-558v-40q0-109 105-175.5T480-840t295 66.5T880-598v40zm400-222q-148 0-242.5 46.5T142-618h676q-3-69-96.5-115.5T480-780m0 162" /></svg>;
export default MaterialLunchDining;