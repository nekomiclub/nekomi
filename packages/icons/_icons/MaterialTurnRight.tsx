import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTurnRight: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M280-160v-368q0-24.75 17.63-42.38Q315.25-588 340-588h386l-90-90 42-42 162 162-162 162-42-42 90-90H340v368z" /></svg>;
export default MaterialTurnRight;