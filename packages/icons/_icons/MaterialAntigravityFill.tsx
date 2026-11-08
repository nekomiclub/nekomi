import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAntigravityFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M483-880q81 0 124 60t75 137q26 65 50 142.5T784-386q26 74 58.5 140.5T917-130q8 10 8 21t-8 19-20 8.5-22-7.5q-82-63-128-141.5T648-367q-35-38-75.5-61T483-451t-89.5 23-75.5 61q-53 58-99 136.5T91-89q-10 8-22 7.5T49-90t-8-19 8-21q42-49 74.5-115.5T182-386q28-77 52-154.5T284-683q31-77 74.5-137T483-880" /></svg>;
export default MaterialAntigravityFill;