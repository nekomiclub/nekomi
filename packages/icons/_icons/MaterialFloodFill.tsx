import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFloodFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-80v-60q34-3 54.5-21.5T208-180t75.5 20 60.5 20 60.5-20 75.5-20 76 20 60 20q38 0 60.5-25t75.5-25 73.5 23.5T880-140v60q-42 0-68.5-25T752-130t-58 25-78 25-78-20-58-20-58 20-78 20-78-20-58-20-59.5 20T80-80m0-190v-60q34-3 54.5-21.5T208-370q11 0 22.5 1.5T251-364l-51-185-62 77-47-38 300-370 445 170-22 56-92-35 86 321q18 10 36.5 24t35.5 13v61q-42 0-68.5-25T752-320t-58 25-78 25-78-20-58-20-58 20-78 20-78-20-58-20-59.5 20T80-270m530-60-55-211-136 36 37 136q5-2 11-1.5t13 .5q50 0 71.5 18t58.5 22" /></svg>;
export default MaterialFloodFill;