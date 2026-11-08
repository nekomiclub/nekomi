import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMovingFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m122-240-42-42 219-219q32-32 78-32t78 32l46 46q15 15 35.5 15t35.5-15l205-205H660v-60h220v220h-60v-117L614-412q-32 32-78 32t-78-32l-47-47q-14-14-35-14t-35 14z" /></svg>;
export default MaterialMovingFill;