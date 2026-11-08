import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTrip: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M140-120q-24.75 0-42.37-17.63Q80-155.25 80-180v-480q0-24.75 17.63-42.38Q115.25-720 140-720h180v-100q0-24.75 17.63-42.38Q355.25-880 380-880h200q24.75 0 42.38 17.62Q640-844.75 640-820v100h180q24.75 0 42.38 17.62Q880-684.75 880-660v480q0 24.75-17.62 42.37Q844.75-120 820-120zm240-600h200v-100H380zm-133 60H140v480h107zm407 480v-480H307v480zm60-480v480h106v-480zM480-425" /></svg>;
export default MaterialTrip;