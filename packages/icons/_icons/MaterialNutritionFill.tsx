import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNutritionFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M281.5-201.5Q200-283 200-400q0-100 61.5-176.5T420-674q-34-6-60-25.5T316-747t-27-62.5-9-70.5q43-2 81 13.5t67 42.5 45.5 64 15.5 80q14-43 39.5-80t57.5-69q9-9 21-9t21 9 9 21-9 21q-25 25-45 54t-34 61q94 24 152.5 99.5T760-400q0 117-81.5 198.5T480-120t-198.5-81.5" /></svg>;
export default MaterialNutritionFill;