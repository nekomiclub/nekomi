import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwipeUpAlt: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M338.5-218.5Q280-277 280-360q0-82 50.5-133.5T450-559v-207l-89 89-42-42 161-161 161 161-42 42-89-89v207q69 14 119.5 65.5T680-360q0 83-58.5 141.5T480-160t-141.5-58.5M579-261q41-41 41-99t-41-99-99-41-99 41-41 99 41 99 99 41 99-41m-99-99" /></svg>;
export default MaterialSwipeUpAlt;