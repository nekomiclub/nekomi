import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialReminderFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M260-620h60v-60q0-25-17.5-42.5T260-740t-42.5 17.5T200-680t17.5 42.5T260-620m180 0q25 0 42.5-17.5T500-680t-17.5-42.5T440-740t-42.5 17.5T380-680v60zm-60 100h300q50 0 85 35t35 85v170q0 63-43.5 106.5T650-80H445q-29 0-56-12t-45-35L127-403l21-23q14-15 34.5-18.5T221-438l99 53v-175h-60q-50 0-85-35t-35-85 35-85 85-35q16 0 31 4t29 12v-66q0-13 8.5-21.5T350-880t21.5 8.5T380-850v66q14-8 29-12t31-4q50 0 85 35t35 85-35 85-85 35h-60z" /></svg>;
export default MaterialReminderFill;