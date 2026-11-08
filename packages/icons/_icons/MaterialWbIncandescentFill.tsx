import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialWbIncandescentFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M450-80v-118h60v118zM80-450v-60h118v60zm682 0v-60h118v60zm-23 272-82-82 43-43 82 82zm-518 0-43-43 82-82 43 43zm130.5-173.5Q298-405 298-480q0-49 21-88t59-64v-208h204v208q38 25 59 64t21 88q0 75-53.5 128.5T480-298t-128.5-53.5M438-653q11-3 21-4.5t21-1.5 21 1.5 21 4.5v-127h-84z" /></svg>;
export default MaterialWbIncandescentFill;