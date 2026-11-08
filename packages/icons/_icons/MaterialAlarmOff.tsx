import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlarmOff: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m783-260-45-45q17-31 25-65.5t8-70.5q2-128-89-213t-216-85q-34 0-67.5 8T336-707l-44-44q41-25 84-36.5t90-11.5q75 0 141.5 27.5T724-696t79 113.5T831-441q-1 47-13 93t-35 88m70-402L689-827l45-39 165 158zM841-32 708-165q-45 40-107 62.5T472-80q-74 0-139-28t-113-77-76-115-28-142q0-64 21-121t65-111l-52-52-59 59-45-45 59-59-70-70 43-43L884-75zM472-142q52-1 101-18.5t90-50.5L242-632q-34 41-51.5 89.5T173-441q0 125 86 213t213 86m65-364" /></svg>;
export default MaterialAlarmOff;