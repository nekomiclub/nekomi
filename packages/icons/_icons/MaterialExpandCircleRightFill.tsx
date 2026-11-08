import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExpandCircleRightFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M524-480 394-350l42 43 173-173-173-173-42 43zM480-80q-83 0-156-31.5t-127-86T111.5-325 80-480q0-83 31.5-156T197-763t127-85.5T480-880t155.5 31.5 127 85.5 86 127T880-480q0 82-31.5 155t-86 127.5-127 86T480-80" /></svg>;
export default MaterialExpandCircleRightFill;