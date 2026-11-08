import React from 'react';
import type { SVGProps, FC } from 'react';
interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}
const MaterialMapPinHeart: FC<Props> = ({
  size = 24,
  color = 'currentColor',
  className,
  ...props
}) => <svg viewBox="0 -960 960 960" width={size} height={size} fill={color} className={className} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d="M480-388q54-50 84-80t47-50q16-20 22.5-37t6.5-37q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 21 6 37t22 36q17 20 46 50t86 81m0 229q133-121 196.5-219.5T740-552q0-118-75.5-193T480-820t-184.5 75T220-552q0 75 65 173.5T480-159m0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480" /></svg>;
export default MaterialMapPinHeart;