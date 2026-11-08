import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialShieldWatch: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-81q-140-35-230-162.5T160-523v-238l320-120 320 120v161h-60v-119l-260-98-260 98v196q0 131 72.5 236.5T480-143q17-6 33-13.5t32-16.5q9 13 20 24t24 21q-26 16-53 27.5T480-81m178 1-17-85q-38-23-59.5-61.5T560-310t21.5-83.5T641-455l17-85h144l17 85q38 23 59.5 61.5T900-310t-21.5 83.5T819-165l-17 85zm150-152q32-32 32-78t-32-78-78-32-78 32-32 78 32 78 78 32 78-32" /></svg>;
export default MaterialShieldWatch;