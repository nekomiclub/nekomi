import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSearchCheck2: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M584.5-376.76q75.5-75.77 75.5-184Q660-669 584.24-744.5q-75.77-75.5-184-75.5Q292-820 216.5-744.24q-75.5 75.77-75.5 184Q141-452 216.76-376.5q75.77 75.5 184 75.5Q509-301 584.5-376.76M356-430l208-208-42-43-166 166-87-88-43 42zm45 189q-133 0-226.5-93.5T81-561t93.5-226T401-880t226 93.5T720-560q0 59-19.33 109.91Q681.34-399.17 646-357l234 234-42 43-234-234q-42.46 34.87-93.73 53.93Q459-241 401-241m0-320" /></svg>;
export default MaterialSearchCheck2;