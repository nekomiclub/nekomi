import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialApi: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-375 375-480l105-105 105 105zm-85-294-83-83 168-168 168 168-83 83-85-85zM208-312 40-480l168-168 83 83-85 85 85 85zm544 0-83-83 85-85-85-85 83-83 168 168zM480-40 312-208l83-83 85 85 85-85 83 83z" /></svg>;
export default MaterialApi;