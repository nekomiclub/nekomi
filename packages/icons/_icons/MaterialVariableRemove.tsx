import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialVariableRemove: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M611-280H120v-400h720v171h-60v-111H180v280h431zm-431-60v-280zm491 103 85-85-85-85 42-42 85 85 85-85 42 42-85 85 85 85-42 42-85-85-85 85z" /></svg>;
export default MaterialVariableRemove;