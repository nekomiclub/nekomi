import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialBarChartOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M160-160v-440h140v440zm250 0v-390l140 140v250zm140-336L410-636v-164h140zm250 250L660-386v-54h140zm13 185L61-813l43-43 752 752z" /></svg>;
export default MaterialBarChartOffFill;