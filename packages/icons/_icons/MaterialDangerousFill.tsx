import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialDangerousFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M330-120 120-330v-300l210-210h300l210 210v300L630-120zm27-195 123-123 123 123 42-42-123-123 123-123-42-42-123 123-123-123-42 42 123 123-123 123z" /></svg>;
export default MaterialDangerousFill;