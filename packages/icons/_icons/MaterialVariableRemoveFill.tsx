import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVariableRemoveFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-280v-400h720v176q-11-2-21-3.5t-21-1.5q-78 0-132.5 54.5T611-322q0 11 1.5 21t3.5 21zm593 85-42-42 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85z" /></svg>;
export default MaterialVariableRemoveFill;