import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialFilterArrowRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M368-442 126-752q-3-5-4.5-9t-1.5-9q0-12 8-21t22-9h579q14 0 22 9t8 21q0 5-1.5 9t-4.5 9L511-442v252q0 13-8.5 21.5T481-160h-83q-13 0-21.5-8.5T368-190zm402 236-42-42 77-77H616v-60h189l-77-77 42-43 150 150zM439-448l227-292H212z" /></svg>;
export default MaterialFilterArrowRightFill;