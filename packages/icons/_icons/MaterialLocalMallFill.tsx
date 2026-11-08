import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialLocalMallFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-80q-24 0-42-18t-18-42v-530q0-24 18-42t42-18h110q0-79 53-134.5T475-920t137 55.5T670-730h110q24 0 42 18t18 42v530q0 24-18 42t-42 18zm437-408q58-58 58-137h-60q0 55-40 95t-95 40-95-40-40-95h-60q0 79 58 137t137 58 137-58M350-730h260q0-55-37.5-92.5T480-860t-92.5 37.5T350-730" /></svg>;
export default MaterialLocalMallFill;