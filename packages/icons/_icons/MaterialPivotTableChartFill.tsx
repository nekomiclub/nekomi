import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPivotTableChartFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M380-640v-200h400q24 0 42 18t18 42v140zM180-120q-24 0-42-18t-18-42v-400h200v460zm-60-520v-140q0-24 18-42t42-18h140v200zM515-80 361-234l154-154 43 43-81 81h122q42 0 69.5-27.5T696-361v-122l-81 81-43-43 154-154 154 154-43 43-81-81v122q0 66-46 111.5T599-204H477l81 81z" /></svg>;
export default MaterialPivotTableChartFill;