import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialSwipeDownAltFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-80 319-241l42-42 89 89v-207q-69-14-119.5-65.5T280-600q0-83 58.5-141.5T480-800t141.5 58.5T680-600q0 82-50.5 133.5T510-401v207l89-89 42 42z" /></svg>;
export default MaterialSwipeDownAltFill;