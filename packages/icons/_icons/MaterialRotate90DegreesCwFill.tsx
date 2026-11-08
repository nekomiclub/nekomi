import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRotate90DegreesCwFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M436-80q-73 0-137.5-28.5t-113-77-77-113T80-436q0-146 105-251t251-105h42l-84-84 44-44 158 158-158 158-44-44 84-84h-42q-122 0-209 87t-87 209 87 209 209 87q54 0 101-14t89-47l42 44q-47 40-108 58.5T436-80m262-140L476-442l222-222 222 222z" /></svg>;
export default MaterialRotate90DegreesCwFill;