import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWandStarsFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m162-121-42-42 326-326-185-46 192-120-16-225 173 145 209-84-85 209 146 173-226-17-119 192-46-185zm25-544-67-67 68-68 67 67zm546 545-67-68 67-67 67 68z" /></svg>;
export default MaterialWandStarsFill;