import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialExploreNearby: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M324-111.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M480-282q40-41 71.65-84.1 27.13-36.81 49.74-80.81Q624-490.9 624-534q0-60-42-102t-102-42-102 42-42 101.63q0 43.37 22.61 87.39t49.74 80.86Q440-323 480-282m-38.5-213.75Q426-511.5 426-534t15.5-38.25T480-588t38.5 15.75T534-534t-15.5 38.25T480-480t-38.5-15.75" /></svg>;
export default MaterialExploreNearby;