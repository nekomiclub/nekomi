import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShapesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M161.5-401.5Q80-483 80-600t81.5-198.5T360-880t198.5 81.5T640-600t-81.5 198.5T360-320t-198.5-81.5M320-140v-122q10 2 20 2h20q141.67 0 240.83-99.17Q700-458.33 700-600v-20q0-10-2-20h122q24.75 0 42.38 17.62Q880-604.75 880-580v440q0 24.75-17.62 42.37Q844.75-80 820-80H380q-24.75 0-42.37-17.63Q320-115.25 320-140" /></svg>;
export default MaterialShapesFill;