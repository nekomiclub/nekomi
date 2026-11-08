import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialXCircle: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M309-269h53l117-190 116 190h56L509-490l132-201h-53L481-519 374-691h-56l133 202zm15 157.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M479.51-140q141.52 0 241-99Q820-338 820-479.51q0-141.52-99.49-241-99.48-99.49-241-99.49Q338-820 239-720.51q-99 99.48-99 241Q140-338 239-239t240.51 99m.49-340" /></svg>;
export default MaterialXCircle;