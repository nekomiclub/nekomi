import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialRightClick: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m492-240 19-63q64-11 106.5-60.5T660-480q0-75-52.5-127.5T480-660q-68 0-117 42.5T303-511l-63 20q5-97 74-163t166-66q100 0 170 70t70 170q0 97-66 166t-162 74M139-60l-79-79 171-171-151-50 400-120L360-80l-50-151z" /></svg>;
export default MaterialRightClick;