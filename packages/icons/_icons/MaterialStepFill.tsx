import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialStepFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M772-367q-47 0-79-32.5T661-479t32-79.5 79-32.5q46 0 78.5 32.5T883-479t-32.5 79.5T772-367m-410 78-42-43 114-116H76v-62h358L320-625l42-43 188 189z" /></svg>;
export default MaterialStepFill;