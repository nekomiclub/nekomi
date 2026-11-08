import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialKeyboardDoubleArrowLeftFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M453-241 213-481l240-240 42 42-198 198 198 198zm253 0L466-481l240-240 42 42-198 198 198 198z" /></svg>;
export default MaterialKeyboardDoubleArrowLeftFill;