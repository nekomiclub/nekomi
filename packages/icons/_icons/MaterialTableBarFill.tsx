import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTableBarFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m240-160 60-150q9-23 29-36.5t45-13.5h76v-161q-159-5-264.5-45T80-660q0-58 117-99t283-41 283 41 117 99q0 54-105.5 94T510-521v161h76q24 0 44.5 13.5T660-310l60 150h-60l-55-140H356l-56 140z" /></svg>;
export default MaterialTableBarFill;