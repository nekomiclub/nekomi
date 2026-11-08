import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAccountBox: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M180-217q60-56 136-90.5T480-342t164 34.5T780-217v-563H180zm400-244q40-40 40-98t-40-98-98-40-98 40-40 98 40 98 98 40 98-40M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18zm43-60h513q-62-53-125.5-77.5T480-282t-130.5 24.5T223-180m204-324q-23-23-23-55t23-55 55-23 55 23 23 55-23 55-55 23-55-23m53 5" /></svg>;
export default MaterialAccountBox;