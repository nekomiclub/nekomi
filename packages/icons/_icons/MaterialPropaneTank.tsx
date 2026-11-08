import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialPropaneTank: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M320-80q-66 0-113-47t-47-113v-320q0-57 34-99t86-56v-105q0-24.75 17.63-42.38Q315.25-880 340-880h280q24.75 0 42.38 17.62Q680-844.75 680-820v105q52 14 86 56t34 99v320q0 66-47 113T640-80zM220-420h520v-140q0-42-29-71t-71-29H320q-42 0-71 29t-29 71zm100 280h320q42 0 71-29t29-71v-120H220v120q0 42 29 71t71 29m200-580h100v-100H340v100h100q0-17 11.5-28.5T480-760t28.5 11.5T520-720" /></svg>;
export default MaterialPropaneTank;