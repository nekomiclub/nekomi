import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNotListedLocationFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M506-336q11-11 11-26t-11-26-26-11-26 11-11 26 11 26 26 11 26-11m-51-113h50q0-15 .5-26t5.5-19q4-8 11-15t25-24q23-20 32.5-39.5T589-618q0-45-28.5-71T483-715q-38 0-69 21t-42 55l45 18q8-20 26-33t40-13q26 0 41 14t15 37q0 17-8 30t-28 31q-17 16-26.5 26.5T463-508q-4 9-6 22.5t-2 36.5m25 369Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80" /></svg>;
export default MaterialNotListedLocationFill;