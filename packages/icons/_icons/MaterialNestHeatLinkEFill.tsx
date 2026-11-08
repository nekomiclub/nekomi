import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestHeatLinkEFill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M324-111.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M479.78-140Q621-140 720.5-239.28t99.5-240.5-99.28-240.72-240.5-99.5-240.72 99.28-99.5 240.5 99.28 240.72 240.5 99.5M381-381.18q-41-41.17-41-99Q340-538 381.18-579q41.17-41 99-41Q538-620 579-578.82q41 41.17 41 99Q620-422 578.82-381q-41.17 41-99 41Q422-340 381-381.18" /></svg>;
export default MaterialNestHeatLinkEFill;