import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialNestThermostatGen3Fill: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M324-111.5Q251-143 197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80t-156-31.5M479.78-140Q621-140 720.5-239.28t99.5-240.5-99.28-240.72-240.5-99.5-240.72 99.28-99.5 240.5 99.28 240.72 240.5 99.5M282-282q-82-82-82-198t82-198 198-82 198 82 82 198-82 198-198 82-198-82m198.18 22q90.82 0 155.32-64.68 64.5-64.67 64.5-155.5 0-90.82-64.68-155.32-64.67-64.5-155.5-64.5-90.82 0-155.32 64.68-64.5 64.67-64.5 155.5 0 90.82 64.68 155.32 64.67 64.5 155.5 64.5" /></svg>;
export default MaterialNestThermostatGen3Fill;