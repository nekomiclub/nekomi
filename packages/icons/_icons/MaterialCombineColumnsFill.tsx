import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCombineColumnsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v133q-61 11-100.5 57.5T310-480t39.5 109.5T450-313v133q0 24-18 42t-42 18zm390 0q-24 0-42-18t-18-42v-133q61-11 100.5-57.5T650-480t-39.5-109.5T510-647v-133q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18zM450-370v-80h-80v-60h80v-80h60v80h80v60h-80v80z" /></svg>;
export default MaterialCombineColumnsFill;