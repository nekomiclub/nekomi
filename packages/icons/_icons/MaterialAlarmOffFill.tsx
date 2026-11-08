import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialAlarmOffFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M783-260 292-751q41-25 84-36.5t90-11.5q75 0 141.5 27.5T724-696t79 113.5T831-441q-1 47-13 93t-35 88m70-402L689-827l45-39 165 158zM841-32 708-165q-45 40-107 62.5T472-80q-74 0-139-28t-113-77-76-115-28-142q0-64 21-121t65-111l-52-52-59 59-45-45 59-59-70-70 43-43L884-75z" /></svg>;
export default MaterialAlarmOffFill;