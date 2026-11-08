import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExpandCircleUpFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m480-524 130 130 43-42-173-173-173 173 43 42zm0 444q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-155.5 85.5-127 127-86T480-880t155.5 31.5 127 86 86 127T880-480t-31.5 156-86 127-127 85.5T480-80" /></svg>;
export default MaterialExpandCircleUpFill;