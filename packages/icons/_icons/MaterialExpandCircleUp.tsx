import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExpandCircleUp: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="m350-394 130-130 130 130 43-42-173-173-173 173zM480-80q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-155.5 85.5-127 127-86T480-880t155.5 31.5 127 86 86 127T880-480t-31.5 156-86 127-127 85.5T480-80m0-60q141 0 240.5-99T820-480q0-141-99.5-240.5T480-820q-142 0-241 99.5T140-480q0 142 99 241t241 99m0-340" /></svg>;
export default MaterialExpandCircleUp;