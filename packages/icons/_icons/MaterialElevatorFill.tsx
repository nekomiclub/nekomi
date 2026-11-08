import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialElevatorFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-230h120v-170h40v-110q0-33-23.5-56.5T360-590h-40q-33 0-56.5 23.5T240-510v110h40zm99.5-410.5Q396-657 396-680t-16.5-39.5T340-736t-39.5 16.5T284-680t16.5 39.5T340-624t39.5-16.5M515-530h200L615-690zm100 260 100-160H515zM180-120q-24 0-42-18t-18-42v-600q0-23 18-41.5t42-18.5h600q23 0 41.5 18.5T840-780v600q0 24-18.5 42T780-120z" /></svg>;
export default MaterialElevatorFill;