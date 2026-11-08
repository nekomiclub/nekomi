import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialClinicalNotesFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M595-365q-35-35-35-85t35-85 85-35 85 35 35 85-35 85-85 35-85-35M440-50v-116q0-21 10-39.5t28-29.5q28-17 58-29.5t62-20.5l82 106 82-106q32 8 61.5 20.5T881-235q18 11 28.5 29.5T920-166v116zm-60-116v46H180q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h600q24.75 0 42.38 17.62Q840-804.75 840-780v247q-23-45-66-71t-94-26v-50H280v60h341q-38 14-67.5 43T510-510H280v60h220q0 31 10 59t28 51H280v60h157q-27 20-42 50.5T380-166" /></svg>;
export default MaterialClinicalNotesFill;