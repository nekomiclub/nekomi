import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialColorizeFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M120-120v-168l377-377-72-72 41-41 92 92 142-142q5-5 11-8t12-3 12 3 12 8l81 81q5 6 8 12t3 12-3 12-8 11L686-558l92 92-41 41-72-72-377 377zm60-60h87l355-355-87-87-355 355z" /></svg>;
export default MaterialColorizeFill;