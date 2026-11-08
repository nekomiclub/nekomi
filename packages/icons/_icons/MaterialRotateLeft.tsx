import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRotateLeft: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M435-80q-48-7-93-25t-85-48l43-44q32 24 66 37.5t69 19.5zm90 0v-60q110-21 182.5-103.5T780-443q0-127-86.5-213.5T480-743h-20l79 79-44 44-153-153 153-153 44 44-79 79h20q75 0 140.5 28T735-698t77 114.5T840-443q0 140-89 241T525-80M194-216q-28-38-46.5-84.5T122-398h61q5 38 18.5 73t36.5 65zm-72-272q7-50 25-95.5t47-85.5l44 43q-23 33-36.5 68T183-488z" /></svg>;
export default MaterialRotateLeft;