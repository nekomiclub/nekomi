import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialCarFanLowLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M538-40 419-242H145q-21.66 0-38.46-13.5Q89.73-269 86-290L40-528q-8-44 19.7-77.5T131-639q32.07 0 57.53 20.5Q214-598 223-566l62 223h111q16.34 0 30.09 7.87Q439.83-327.25 448-313L590-70zM111.2-698Q82-698 61-718.8q-21-20.79-21-50Q40-798 60.8-819q20.79-21 50-21 29.2 0 50.2 20.8 21 20.79 21 50 0 29.2-20.8 50.2-20.79 21-50 21M691-496 500-686l42-42 119 116v-268h60v269l117-117 42 42z" /></svg>;
export default MaterialCarFanLowLeftFill;