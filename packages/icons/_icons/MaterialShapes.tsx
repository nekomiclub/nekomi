import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShapes: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-262q10 2 19.5 2H360q5.5 0 10.25-.25T380-261v121h440v-440H699q.5-5 .75-9.75T700-600v-20.5q0-9.5-2-19.5h122q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380q-24.75 0-42.37-17.63Q320-115.25 320-140zM161.5-401.5Q80-483 80-600t81.5-198.5T360-880t198.5 81.5T640-600t-81.5 198.5T360-320t-198.5-81.5m354-42.79q64.5-64.29 64.5-155.5T515.71-755.5 360.21-820 204.5-755.71 140-600.21t64.29 155.71 155.5 64.5 155.71-64.29M360-600" /></svg>;
export default MaterialShapes;