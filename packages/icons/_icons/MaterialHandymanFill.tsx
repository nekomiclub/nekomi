import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialHandymanFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M753-82q-5-2-10-7L501-331q-5-5-7-10t-2-11 2-11 7-10l85-85q5-5 10-7t11-2 11 2 10 7l242 242q5 5 7 10t2 11-2 11-7 10l-85 85q-5 5-10 7t-11 2-11-2m-569.5 0q-5.5-2-10.5-7l-84-84q-5-5-7-10.5T80-195t2-11 7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2-11.5-2" /></svg>;
export default MaterialHandymanFill;