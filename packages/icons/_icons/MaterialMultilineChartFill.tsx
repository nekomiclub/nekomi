import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMultilineChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m122-221-42-43 296-296 165 166 139-156q-60-69-135.5-108.5T378-698q-72 0-137.5 26T122-599l-42-43q62-56 137.5-86T378-758q100 0 187.5 43.5T719-594l120-136 41 44-124 141q34 51 55 115.5T842-296h-60q-6-53-23.5-103T713-497L544-307 376-475z" /></svg>;
export default MaterialMultilineChartFill;