import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestSunblock: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M80-680v-120h60v120zm0 520v-120h60v120zm203-440-43-43 85-85 43 43zm42 368-85-85 43-43 85 85zm-5-218v-60h270l-88-117 48-36 124 165q11 15 3 31.5T650-450zm510 250q-20 0-35-15t-15-35v-460q0-21 15-35.5t35-14.5q21 0 35.5 14.5T880-710v460q0 20-14.5 35T830-200M80-330v-60q38 0 64-26.5t26-63.5q0-38-26-64t-64-26v-60q63 0 106.5 43.5T230-480q0 62-43.5 106T80-330" /></svg>;
export default MaterialNestSunblock;