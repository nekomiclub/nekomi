import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialTurnLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M620-160v-368H234l90 90-42 42-162-162 162-162 42 42-90 90h386q24.75 0 42.38 17.62Q680-552.75 680-528v368z" /></svg>;
export default MaterialTurnLeftFill;