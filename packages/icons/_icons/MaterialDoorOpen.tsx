import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDoorOpen: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M440-450q13 0 21.5-9t8.5-21q0-13-8.5-21.5T440-510q-12 0-21 8.5t-9 21.5q0 12 9 21t21 9M260-120v-60l280-49v-466q0-14-7.5-24.5T512-732l-252-39v-59l266 46q32 5 53 30.5t21 57.5v516zm-140 0v-60h80v-590q0-26 17.5-43t42.5-17h440q26 0 43 17t17 43v590h80v60zm140-60h440v-590H260v-1z" /></svg>;
export default MaterialDoorOpen;